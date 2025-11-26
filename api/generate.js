// Vercel Serverless Function: Image Generation
// Endpoint: POST /api/generate

const ZAI_API_URL = 'https://api.z.ai/api/paas/v4/images/generations';

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
        const { prompt, model } = req.body;

        // Validate inputs
        if (!prompt || typeof prompt !== 'string' || prompt.trim() === '') {
            return res.status(400).json({ error: 'Invalid prompt provided' });
        }

        // Sanitize prompt
        const sanitizedPrompt = prompt.replace(/[\x00-\x1F\x7F]/g, '').substring(0, 2000).trim();

        // ZAI image generation API uses cogview-4-250304 model
        const response = await fetch(ZAI_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'cogview-4-250304',
                prompt: sanitizedPrompt,
                size: '1024x1024',
                quality: 'standard'
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
        
        // Transform ZAI response format to match expected format
        // ZAI returns: { created, data: [{ url }] }
        // Expected: { choices: [{ message: { content or images } }] }
        if (data.data && data.data[0] && data.data[0].url) {
            return res.status(200).json({
                choices: [{
                    message: {
                        content: data.data[0].url,
                        images: [{
                            image_url: {
                                url: data.data[0].url
                            }
                        }]
                    }
                }]
            });
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error('Error in generate API:', error);
        return res.status(500).json({ error: 'Failed to generate image' });
    }
}

