// Vercel Serverless Function: Image Analysis
// Endpoint: POST /api/analyze

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
        if (!image || typeof image !== 'string' || !image.startsWith('data:image/')) {
            return res.status(400).json({ error: 'Invalid image provided' });
        }

        // Default prompt if not provided
        const analysisPrompt = prompt || "Analyze this image and describe its content and quality";
        
        // Sanitize prompt
        const sanitizedPrompt = analysisPrompt.replace(/[\x00-\x1F\x7F]/g, '').substring(0, 2000).trim();

        // Use GLM-4.5V vision model for image analysis
        const response = await fetch(ZAI_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'Accept-Language': 'en-US,en'
            },
            body: JSON.stringify({
                model: 'glm-4.5v',
                messages: [
                    {
                        role: 'user',
                        content: [
                            {
                                type: 'text',
                                text: sanitizedPrompt
                            },
                            {
                                type: 'image_url',
                                image_url: {
                                    url: image
                                }
                            }
                        ]
                    }
                ],
                stream: false,
                max_tokens: 4096
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
        console.error('Error in analyze API:', error);
        return res.status(500).json({ error: 'Failed to analyze image' });
    }
}

