// API Integration for AI Photo Editor
// Uses Vercel serverless functions to securely proxy ZAI API calls

/**
 * @typedef {Object} ImageGenerationModel
 * @property {string} name - Display name of the model
 * @property {string} description - Description of model capabilities
 */

/**
 * @typedef {Object.<string, ImageGenerationModel>} ModelRegistry
 */

/**
 * @typedef {Object} ApiResponse
 * @property {Array<Object>} choices - Array of response choices
 * @property {Object} [choices[0].message] - Message object
 * @property {string|Array} [choices[0].message.content] - Message content
 * @property {Array<Object>} [choices[0].message.images] - Array of image objects
 * @property {Object} [choices[0].message.images[0].image_url] - Image URL object
 * @property {string} [choices[0].message.images[0].image_url.url] - Image URL string
 * @property {Object} [error] - Error object if request failed
 * @property {string} [error.message] - Error message
 */

/**
 * @typedef {Object} RateLimitStatus
 * @property {number} remaining - Number of remaining requests
 * @property {number} waitTime - Wait time in seconds until next request
 */

/**
 * Available image generation models
 * @type {ModelRegistry}
 */
const IMAGE_GENERATION_MODELS = {
    'cogview-4-250304': {
        name: 'CogView-4',
        description: 'Z.AI\'s high-quality image generation model. Supports any resolution within the specified range, excellent Chinese and English prompt understanding, and can generate Chinese characters in images.'
    }
};

/**
 * Available chat models
 * @type {ModelRegistry}
 */
const CHAT_MODELS = {
    'glm-4.6': {
        name: 'GLM-4.6',
        description: 'Z.AI\'s latest flagship model. Purpose-built as a foundational model for agent-oriented applications with excellent reasoning capabilities.'
    },
    'glm-4.5': {
        name: 'GLM-4.5',
        description: 'Z.AI\'s advanced model. Excellent balance of capability and performance for complex tasks.'
    },
    'glm-4.5v': {
        name: 'GLM-4.5V',
        description: 'Z.AI\'s vision model. Supports image and video understanding with SOTA performance among open-source VLMs.'
    },
    'glm-4.5-x': {
        name: 'GLM-4.5-X',
        description: 'Z.AI\'s most capable model. Best for complex analysis and nuanced tasks requiring deep reasoning.'
    },
    'glm-4.5-air': {
        name: 'GLM-4.5-Air',
        description: 'Z.AI\'s efficient model. Fast responses with good quality, optimized for speed.'
    },
    'glm-4.5-airx': {
        name: 'GLM-4.5-AirX',
        description: 'Z.AI\'s balanced advanced model. Good balance between capability and speed.'
    },
    'glm-4.5-flash': {
        name: 'GLM-4.5-Flash',
        description: 'Z.AI\'s fastest model. Free to use with quick responses for simple queries.'
    },
    'glm-4-32b-0414-128k': {
        name: 'GLM-4-32B-0414-128K',
        description: 'Z.AI\'s cost-effective model. Great for long context tasks with 128K context window.'
    }
};

/**
 * Current selected generation model ID
 * @type {string}
 */
let currentGenerationModel = 'cogview-4-250304';

/**
 * Current selected edit model ID
 * @type {string}
 */
let currentEditModel = 'glm-4.5v';

/**
 * Current selected chat model ID
 * @type {string}
 */
let currentChatModel = 'glm-4.6';

/**
 * Chat conversation history
 * @type {Array<{role: string, content: string}>}
 */
let chatHistory = [];

/**
 * Web search enabled state
 * @type {boolean}
 */
let webSearchEnabled = false;

/**
 * Rate limiter for API calls (10 requests per minute)
 * @type {RateLimiter}
 */
const apiRateLimiter = new RateLimiter(10, 60000);

/**
 * Check rate limit before making API request
 * @returns {void}
 * @throws {Error} If rate limit is exceeded
 */
function checkRateLimit() {
    if (!apiRateLimiter.canMakeRequest()) {
        const waitTime = Math.ceil(apiRateLimiter.getTimeUntilNextRequest() / 1000);
        throw new Error(`Rate limit exceeded. Please wait ${waitTime} seconds before making another request.`);
    }
}

/**
 * Analyze an image using AI
 * @param {string} base64Image - Base64 encoded image (data:image/...;base64,...)
 * @param {string} [prompt="Analyze this image and describe its content and quality"] - Analysis prompt (optional)
 * @returns {Promise<ApiResponse>} API response containing analysis
 * @throws {Error} If analysis fails or rate limit is exceeded
 */
async function analyzeImage(base64Image, prompt = "Analyze this image and describe its content and quality") {
    // Check rate limit
    checkRateLimit();

    // Sanitize user prompt
    const sanitizedPrompt = sanitizePrompt(prompt);
    if (!sanitizedPrompt) {
        throw new Error('Invalid prompt provided');
    }

    try {
        // Compress image if needed to fit within API limits
        const preparedImage = await prepareImageForUpload(base64Image);
        
        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: sanitizedPrompt,
                image: preparedImage
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `API request failed with status ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error analyzing image:', error);
        if (error.message?.toLowerCase().includes('rate limit')) {
            throw error;
        }
        throw new Error(getUserFriendlyError(error));
    }
}

/**
 * Edit an image using AI
 * @param {string} base64Image - Base64 encoded image (data:image/...;base64,...)
 * @param {string} prompt - Editing instructions for the AI
 * @param {string|null} [model=null] - Optional model ID to use for editing
 * @returns {Promise<string>} Base64 encoded edited image (data:image/...;base64,...)
 * @throws {Error} If editing fails, no image is returned, or rate limit is exceeded
 */
async function editImage(base64Image, prompt, model = null) {
    // Check rate limit
    checkRateLimit();

    // Sanitize user prompt
    const sanitizedPrompt = sanitizePrompt(prompt);
    if (!sanitizedPrompt) {
        throw new Error('Invalid prompt provided');
    }

    const selectedModel = model || currentEditModel;

    try {
        // Compress image if needed to fit within API limits
        const preparedImage = await prepareImageForUpload(base64Image);
        
        const response = await fetch('/api/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: sanitizedPrompt,
                image: preparedImage,
                model: selectedModel
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `API request failed with status ${response.status}`);
        }

        const result = await response.json();

        // Extract the edited image from the response
        if (result.choices && result.choices[0]?.message?.images?.length > 0) {
            return result.choices[0].message.images[0].image_url.url;
        } else if (result.choices && result.choices[0]?.message?.content) {
            // If no image is returned, try to extract a base64 image from the text content
            const content = result.choices[0].message.content;
            const base64Match = content.match(/data:image\/\w+;base64,[^\s]+/);
            if (base64Match) {
                return base64Match[0];
            }
        }

        throw new Error('No edited image found in the API response');
    } catch (error) {
        console.error('Error editing image:', error);
        if (error.message?.toLowerCase().includes('rate limit')) {
            throw error;
        }
        throw new Error(getUserFriendlyError(error));
    }
}

/**
 * Enhance a user prompt using AI to make it more effective for image editing
 * @param {string} userPrompt - Original user prompt
 * @param {string|null} [base64Image=null] - Optional base64 encoded image to tailor the prompt
 * @returns {Promise<string>} Enhanced prompt
 * @throws {Error} If enhancement fails or rate limit is exceeded
 */
async function enhancePromptWithAI(userPrompt, base64Image = null) {
    // Check rate limit
    checkRateLimit();

    // Sanitize user prompt
    const sanitizedPrompt = sanitizePrompt(userPrompt);
    if (!sanitizedPrompt) {
        throw new Error('Invalid prompt provided');
    }

    try {
        const requestBody = {
            prompt: sanitizedPrompt
        };

        // Include image if provided (compress if needed)
        if (base64Image) {
            requestBody.image = await prepareImageForUpload(base64Image);
        }

        const response = await fetch('/api/enhance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `API request failed with status ${response.status}`);
        }

        const result = await response.json();

        if (result.choices && result.choices[0]?.message?.content) {
            // Remove surrounding quotes if present
            let enhancedPrompt = result.choices[0].message.content.trim();
            if ((enhancedPrompt.startsWith('"') && enhancedPrompt.endsWith('"')) ||
                (enhancedPrompt.startsWith("'") && enhancedPrompt.endsWith("'"))) {
                enhancedPrompt = enhancedPrompt.slice(1, -1);
            }
            return enhancedPrompt;
        }

        throw new Error('No enhanced prompt found in the API response');
    } catch (error) {
        console.error('Error enhancing prompt with AI:', error);
        if (error.message?.toLowerCase().includes('rate limit')) {
            throw error;
        }
        throw new Error(getUserFriendlyError(error));
    }
}

/**
 * Generate an image using AI
 * @param {string} prompt - Text description of the image to generate
 * @param {string|null} [model=null] - Optional model ID to use for generation
 * @returns {Promise<string>} Base64 encoded generated image (data:image/...;base64,...)
 * @throws {Error} If generation fails, no image is returned, or rate limit is exceeded
 */
async function generateImage(prompt, model = null) {
    // Check rate limit
    checkRateLimit();

    // Sanitize user prompt
    const sanitizedPrompt = sanitizePrompt(prompt);
    if (!sanitizedPrompt) {
        throw new Error('Invalid prompt provided');
    }

    const selectedModel = model || currentGenerationModel;

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt: sanitizedPrompt,
                model: selectedModel
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `API request failed with status ${response.status}`);
        }

        const result = await response.json();

        // Extract the generated image from the response
        if (result.choices && result.choices[0]?.message?.content) {
            const content = result.choices[0].message.content;
            
            // Check if content is an array (multimodal response)
            if (Array.isArray(content)) {
                for (const part of content) {
                    if (part.type === 'image_url' && part.image_url?.url) {
                        return part.image_url.url;
                    }
                }
            }
            
            // Check for base64 image in text content
            if (typeof content === 'string') {
                const base64Match = content.match(/data:image\/[^;]+;base64,[^\s"]+/);
                if (base64Match) {
                    return base64Match[0];
                }
            }
        }

        // Check for images array in message
        if (result.choices && result.choices[0]?.message?.images?.length > 0) {
            const imageData = result.choices[0].message.images[0];
            if (imageData.image_url?.url) {
                return imageData.image_url.url;
            }
            if (imageData.url) {
                return imageData.url;
            }
        }

        console.log('API Response:', JSON.stringify(result, null, 2));
        throw new Error('No generated image found in the API response');
    } catch (error) {
        console.error('Error generating image:', error);
        if (error.message?.toLowerCase().includes('rate limit')) {
            throw error;
        }
        throw new Error(getUserFriendlyError(error));
    }
}

/**
 * Set the current generation model
 * @param {string} modelId - Model ID to use for generation
 * @returns {void}
 */
function setGenerationModel(modelId) {
    if (IMAGE_GENERATION_MODELS[modelId]) {
        currentGenerationModel = modelId;
    }
}

/**
 * Get the current generation model
 * @returns {string} Current model ID
 */
function getGenerationModel() {
    return currentGenerationModel;
}

/**
 * Get available generation models
 * @returns {ModelRegistry} Available models with their info
 */
function getAvailableModels() {
    return IMAGE_GENERATION_MODELS;
}

/**
 * Set the current edit model
 * @param {string} modelId - Model ID to use for editing
 * @returns {void}
 */
function setEditModel(modelId) {
    if (IMAGE_GENERATION_MODELS[modelId]) {
        currentEditModel = modelId;
    }
}

/**
 * Get the current edit model
 * @returns {string} Current edit model ID
 */
function getEditModel() {
    return currentEditModel;
}

/**
 * Get rate limiter status for UI feedback
 * @returns {RateLimitStatus} Remaining requests and wait time in seconds
 */
function getRateLimitStatus() {
    return {
        remaining: apiRateLimiter.getRemainingRequests(),
        waitTime: Math.ceil(apiRateLimiter.getTimeUntilNextRequest() / 1000)
    };
}

/**
 * Set the current chat model
 * @param {string} modelId - Model ID to use for chat
 * @returns {void}
 */
function setChatModel(modelId) {
    if (CHAT_MODELS[modelId]) {
        currentChatModel = modelId;
    }
}

/**
 * Get the current chat model
 * @returns {string} Current chat model ID
 */
function getChatModel() {
    return currentChatModel;
}

/**
 * Get available chat models
 * @returns {ModelRegistry} Available chat models with their info
 */
function getAvailableChatModels() {
    return CHAT_MODELS;
}

/**
 * Clear chat history
 * @returns {void}
 */
function clearChatHistory() {
    chatHistory = [];
}

/**
 * Get chat history
 * @returns {Array<{role: string, content: string}>} Chat history
 */
function getChatHistory() {
    return chatHistory;
}

/**
 * Toggle web search on/off
 * @returns {boolean} New state
 */
function toggleWebSearch() {
    webSearchEnabled = !webSearchEnabled;
    return webSearchEnabled;
}

/**
 * Get web search enabled state
 * @returns {boolean} Whether web search is enabled
 */
function isWebSearchEnabled() {
    return webSearchEnabled;
}

/**
 * Set web search enabled state
 * @param {boolean} enabled - Whether to enable web search
 */
function setWebSearchEnabled(enabled) {
    webSearchEnabled = enabled;
}

/**
 * Send a chat message and get a streaming response
 * @param {string} message - User message
 * @param {function} onChunk - Callback for each streamed chunk
 * @param {string|null} [model=null] - Optional model ID to use
 * @returns {Promise<string>} Complete assistant response
 * @throws {Error} If chat fails or rate limit is exceeded
 */
async function sendChatMessage(message, onChunk = null, model = null) {
    // Check rate limit
    checkRateLimit();

    // Sanitize user message
    const sanitizedMessage = sanitizePrompt(message);
    if (!sanitizedMessage) {
        throw new Error('Invalid message provided');
    }

    const selectedModel = model || currentChatModel;

    // Add user message to history
    chatHistory.push({
        role: 'user',
        content: sanitizedMessage
    });

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                messages: chatHistory,
                model: selectedModel,
                stream: true,
                webSearch: webSearchEnabled
            })
        });

        if (!response.ok) {
            let errorMessage = `API request failed with status ${response.status}`;
            try {
                const errorData = await response.json();
                // Handle different error response formats
                if (errorData.error) {
                    if (typeof errorData.error === 'string') {
                        errorMessage = errorData.error;
                    } else if (errorData.error.message) {
                        errorMessage = errorData.error.message;
                    } else if (errorData.error.code) {
                        errorMessage = `${errorData.error.code}: ${errorData.error.message || 'Unknown error'}`;
                    }
                } else if (errorData.message) {
                    errorMessage = errorData.message;
                }
            } catch (parseError) {
                // If response is not JSON, use status text
                errorMessage = response.statusText || `API request failed with status ${response.status}`;
            }
            // Remove the user message from history if request failed
            chatHistory.pop();
            throw new Error(errorMessage);
        }

        // Handle streaming response
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let fullContent = '';

        try {
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });

                // Process complete lines from buffer
                while (true) {
                    const lineEnd = buffer.indexOf('\n');
                    if (lineEnd === -1) break;

                    const line = buffer.slice(0, lineEnd).trim();
                    buffer = buffer.slice(lineEnd + 1);

                    // Skip empty lines and comments
                    if (!line || line.startsWith(':')) continue;

                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);
                        if (data === '[DONE]') continue;

                        try {
                            const parsed = JSON.parse(data);
                            
                            // Check for errors
                            if (parsed.error) {
                                throw new Error(parsed.error.message || 'Stream error');
                            }

                            const content = parsed.choices?.[0]?.delta?.content;
                            if (content) {
                                fullContent += content;
                                if (onChunk) {
                                    onChunk(content, fullContent);
                                }
                            }
                        } catch (parseError) {
                            // Ignore JSON parse errors for malformed chunks
                            if (parseError.message !== 'Stream error') {
                                console.debug('Parse error (non-fatal):', parseError);
                            } else {
                                throw parseError;
                            }
                        }
                    }
                }
            }
        } finally {
            reader.releaseLock();
        }

        // Add complete assistant message to history
        if (fullContent) {
            chatHistory.push({
                role: 'assistant',
                content: fullContent
            });
        }

        return fullContent || 'No response received';
    } catch (error) {
        console.error('Error sending chat message:', error);
        // Remove user message if we failed
        if (chatHistory.length > 0 && chatHistory[chatHistory.length - 1].role === 'user') {
            chatHistory.pop();
        }
        // Preserve specific error messages that should be shown to users
        const errorMsg = error.message || '';
        const lowerMsg = errorMsg.toLowerCase();
        
        if (lowerMsg.includes('rate limit') || lowerMsg.includes('429')) {
            throw error;
        }
        
        // Preserve account/balance errors
        if (lowerMsg.includes('insufficient balance') || lowerMsg.includes('no resource package') || 
            lowerMsg.includes('recharge') || lowerMsg.includes('quota')) {
            throw error;
        }
        
        throw new Error(getUserFriendlyError(error));
    }
}
