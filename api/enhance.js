// Vercel Serverless Function: Prompt Enhancement
// Endpoint: POST /api/enhance

const ZAI_API_URL = 'https://api.z.ai/api/paas/v4/chat/completions';

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
        const { prompt, image } = req.body;

        // Validate inputs
        if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
            return res.status(400).json({ error: 'Invalid prompt provided' });
        }

        // Sanitize prompt
        const sanitizedPrompt = prompt.replace(/[\x00-\x1F\x7F]/g, '').substring(0, 2000).trim();

        const systemPrompt = 'You are an expert at writing prompts for AI image editing. Your task is to take a user\'s simple image editing request and enhance it into a more detailed, effective prompt that will produce better results. If an image is provided, tailor your enhanced prompt to make sense for that specific image. Keep the enhanced prompt concise but specific. Include details about style, quality, and technique where appropriate. Only respond with the enhanced prompt text directly - no quotes, no explanations, no additional text.';

        // Build user content based on whether image is provided
        let userContent;
        let model = 'glm-4.6'; // Default to GLM-4.6 for text-only
        
        if (image && typeof image === 'string' && image.startsWith('data:image/')) {
            // Use vision model if image is provided
            model = 'glm-4.5v';
            userContent = [
                {
                    type: 'text',
                    text: `Enhance this image editing prompt to be more effective for the provided image: ${sanitizedPrompt}`
                },
                {
                    type: 'image_url',
                    image_url: {
                        url: image
                    }
                }
            ];
        } else {
            userContent = `Enhance this image editing prompt to be more effective: ${sanitizedPrompt}`;
        }

        const response = await fetch(ZAI_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'Accept-Language': 'en-US,en'
            },
            body: JSON.stringify({
                model: model,
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: userContent
                    }
                ],
                stream: false,
                max_tokens: 2048
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
            console.error('ZAI API error:', errorData);
            return res.status(response.status).json({ 
                error: errorData.error?.message || `API request failed with status ${response.status}` 
            });
        }

        const data = await response.json();
        return res.status(200).json(data);

    } catch (error) {
        console.error('Error in enhance API:', error);
        return res.status(500).json({ error: 'Failed to enhance prompt' });
    }
}

