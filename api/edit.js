// Vercel Serverless Function: Image Editing
// Endpoint: POST /api/edit
// Note: ZAI doesn't have a dedicated image editing endpoint, so we use the vision model
// to understand the editing request and generate a new image with the edits applied

const ZAI_CHAT_API_URL = 'https://api.z.ai/api/paas/v4/chat/completions';
const ZAI_IMAGE_API_URL = 'https://api.z.ai/api/paas/v4/images/generations';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Check for API key
    const apiKey = process.env.ZAI_API_KEY;
    if (!apiKey) {
        console.error('ZAI_API_KEY environment variable is not set');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        const { prompt, image, model } = req.body;

        // Validate inputs
        if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
            return res.status(400).json({ error: 'Invalid prompt provided' });
        }

        if (!image || typeof image !== 'string' || !image.startsWith('data:image/')) {
            return res.status(400).json({ error: 'Invalid image provided' });
        }

        // Sanitize prompt
        const sanitizedPrompt = prompt.replace(/[\x00-\x1F\x7F]/g, '').substring(0, 2000).trim();

        // Use GLM-4.5V vision model to understand the image and editing request
        // Then generate an enhanced prompt for image generation
        const visionModel = 'glm-4.5v';
        
        const visionResponse = await fetch(ZAI_CHAT_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'Accept-Language': 'en-US,en'
            },
            body: JSON.stringify({
                model: visionModel,
                messages: [
                    {
                        role: 'system',
                        content: 'You are an expert at analyzing images and creating detailed prompts for image generation. When given an image and editing instructions, analyze the image and create a comprehensive prompt that describes the edited version of the image. The prompt should be detailed and specific, describing what the final edited image should look like.'
                    },
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'image_url',
                                image_url: {
                                    url: image
                                }
                            },
                            {
                                type: 'text',
                                text: `Analyze this image and create a detailed prompt for generating an edited version with these changes: ${sanitizedPrompt}. The prompt should describe the final edited image in detail.`
                            }
                        ]
                    }
                ],
                stream: false,
                max_tokens: 2048
            })
        });

        if (!visionResponse.ok) {
            const errorData = await visionResponse.json().catch(() => ({ error: { message: 'Unknown error' } }));
            console.error('ZAI Vision API error:', errorData);
            return res.status(visionResponse.status).json({ 
                error: errorData.error?.message || `API request failed with status ${visionResponse.status}` 
            });
        }

        const visionData = await visionResponse.json();
        const enhancedPrompt = visionData.choices?.[0]?.message?.content || sanitizedPrompt;

        // Now generate the edited image using the enhanced prompt
        const imageResponse = await fetch(ZAI_IMAGE_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'cogview-4-250304',
                prompt: enhancedPrompt,
                size: '1024x1024',
                quality: 'standard'
            })
        });

        if (!imageResponse.ok) {
            const errorData = await imageResponse.json().catch(() => ({ error: { message: 'Unknown error' } }));
            console.error('ZAI Image API error:', errorData);
            return res.status(imageResponse.status).json({ 
                error: errorData.error?.message || `API request failed with status ${imageResponse.status}` 
            });
        }

        const imageData = await imageResponse.json();
        
        // Transform ZAI response format to match expected format
        if (imageData.data && imageData.data[0] && imageData.data[0].url) {
            return res.status(200).json({
                choices: [{
                    message: {
                        content: imageData.data[0].url,
                        images: [{
                            image_url: {
                                url: imageData.data[0].url
                            }
                        }]
                    }
                }]
            });
        }

        return res.status(200).json(imageData);

    } catch (error) {
        console.error('Error in edit API:', error);
        return res.status(500).json({ error: 'Failed to edit image' });
    }
}

