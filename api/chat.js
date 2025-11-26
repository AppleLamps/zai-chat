// Vercel Serverless Function: Chat Completions with Streaming
// Endpoint: POST /api/chat

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
        const { messages, model, stream = true, webSearch = false } = req.body;

        // Validate inputs
        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return res.status(400).json({ error: 'Invalid messages provided' });
        }

        if (!model || typeof model !== 'string') {
            return res.status(400).json({ error: 'Invalid model provided' });
        }

        // Sanitize messages - preserve multimodal content structure
        const sanitizedMessages = messages.map(msg => {
            if (typeof msg.content === 'string') {
                return {
                    role: msg.role === 'user' ? 'user' : 'assistant',
                    content: msg.content.replace(/[\x00-\x1F\x7F]/g, '').substring(0, 10000).trim()
                };
            } else if (Array.isArray(msg.content)) {
                // Handle multimodal content (text + images)
                return {
                    role: msg.role === 'user' ? 'user' : 'assistant',
                    content: msg.content.map(item => {
                        if (item.type === 'text') {
                            return {
                                type: 'text',
                                text: item.text.replace(/[\x00-\x1F\x7F]/g, '').substring(0, 10000).trim()
                            };
                        } else if (item.type === 'image_url') {
                            return {
                                type: 'image_url',
                                image_url: item.image_url
                            };
                        }
                        return item;
                    })
                };
            }
            return msg;
        }).filter(msg => {
            if (typeof msg.content === 'string') {
                return msg.content.length > 0;
            } else if (Array.isArray(msg.content)) {
                return msg.content.length > 0;
            }
            return false;
        });

        if (sanitizedMessages.length === 0) {
            return res.status(400).json({ error: 'No valid messages provided' });
        }

        // Add system message for better responses
        const systemMessage = {
            role: 'system',
            content: 'You are a helpful, friendly, and knowledgeable AI assistant. Provide clear, accurate, and well-structured responses. When appropriate, use markdown formatting for code blocks, lists, and emphasis. Be concise but thorough.'
        };

        // Build request body
        const requestBody = {
            model: model,
            messages: [systemMessage, ...sanitizedMessages],
            stream: stream,
            max_tokens: 65536
        };

        // Add web search tool if enabled
        if (webSearch) {
            requestBody.tools = [{
                type: 'web_search',
                web_search: {
                    enable: true
                }
            }];
        }

        const response = await fetch(ZAI_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'Accept-Language': 'en-US,en'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            let errorMessage = `API request failed with status ${response.status}`;
            try {
                const errorData = await response.json();
                console.error('ZAI API error:', errorData);
                
                // Handle different error response formats from ZAI API
                if (errorData.error) {
                    if (typeof errorData.error === 'string') {
                        errorMessage = errorData.error;
                    } else if (errorData.error.message) {
                        errorMessage = errorData.error.message;
                    } else if (errorData.error.code) {
                        errorMessage = errorData.error.message || `${errorData.error.code}: Unknown error`;
                    }
                } else if (errorData.message) {
                    errorMessage = errorData.message;
                } else if (typeof errorData === 'string') {
                    errorMessage = errorData;
                }
            } catch (parseError) {
                // If response is not JSON, use status text
                errorMessage = response.statusText || `API request failed with status ${response.status}`;
                console.error('Failed to parse error response:', parseError);
            }
            
            return res.status(response.status).json({ 
                error: errorMessage
            });
        }

        // Handle streaming response
        if (stream) {
            // Set headers for SSE
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');

            // Pipe the stream directly
            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            try {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    
                    const chunk = decoder.decode(value, { stream: true });
                    res.write(chunk);
                }
            } catch (streamError) {
                console.error('Stream error:', streamError);
            } finally {
                res.end();
            }
        } else {
            // Non-streaming response
            const data = await response.json();
            return res.status(200).json(data);
        }

    } catch (error) {
        console.error('Error in chat API:', error);
        return res.status(500).json({ error: 'Failed to process chat message' });
    }
}

