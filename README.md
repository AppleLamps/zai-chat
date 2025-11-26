# AI Photo Editor

A web-based AI-powered photo editing application that uses ZAI API to analyze, edit, and generate images.

## Features

- **Drag & Drop Image Upload**: Easily upload images by dragging and dropping or clicking to browse
- **AI-Powered Editing**: Use natural language to describe the edits you want
- **AI Image Generation**: Create new images from text descriptions using ZAI's CogView-4 model
- **AI Chat Assistant**: Chat with ZAI's GLM models for questions, analysis, and assistance
- **Web Search Integration**: Enable web search in chat mode for real-time information
- **Multiple Models**: Choose from various ZAI models for generation and chat
- **Prompt Enhancement**: Improve your editing instructions with AI assistance
- **Before & After Comparison**: View original and edited images side by side
- **Download Images**: Save your AI-edited or generated images to your device
- **Lightbox View**: Click any image to view it full-size

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- ZAI API key (get one at [https://z.ai/manage-apikey/apikey-list](https://z.ai/manage-apikey/apikey-list))

## Deploy to Vercel (Recommended)

The easiest way to deploy this app is using Vercel, which keeps your API key secure:

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ai-photo-editor.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "New Project" and import your repository
3. Add your environment variable:
   - Name: `ZAI_API_KEY`
   - Value: Your ZAI API key (from [z.ai/manage-apikey/apikey-list](https://z.ai/manage-apikey/apikey-list))
4. Click "Deploy"

Your app will be live at `https://your-project.vercel.app` with your API key securely stored server-side!

## Local Development

### Option 1: Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Create .env.local file
cp .env.example .env.local
# Edit .env.local and add your API key

# Run locally with serverless functions
vercel dev
```

### Option 2: Static File Server (API key exposed - development only!)
1. Open `api.js` and temporarily add your API key
2. Serve the files with any static server (e.g., `npx serve`)
3. **Warning**: This exposes your API key in the browser!

## Project Structure

```
zai/
├── api/                    # Vercel serverless functions
│   ├── analyze.js          # Image analysis endpoint (uses GLM-4.5V)
│   ├── chat.js             # Chat completion endpoint (uses GLM models)
│   ├── edit.js             # Image editing endpoint (uses GLM-4.5V + CogView-4)
│   ├── enhance.js          # Prompt enhancement endpoint
│   └── generate.js         # Image generation endpoint (uses CogView-4)
├── api-docs/               # ZAI API documentation
├── index.html              # Main HTML file
├── styles.css              # Main styles
├── additional-styles.css   # Additional styles (modes, modals)
├── script.js               # Main application logic
├── api.js                  # API client (calls serverless functions)
├── utils.js                # Utility functions
├── vercel.json             # Vercel configuration
├── .env.example            # Environment variables template
└── .gitignore              # Git ignore rules
```

## How to Use

### Generate Mode
1. Select an AI model from the dropdown
2. Enter a description of the image you want to create
3. (Optional) Click "Enhance Prompt" to improve your description
4. Click "Generate Image"
5. Download your generated image

### Edit Mode
1. Switch to "Edit Mode" using the toggle
2. Upload an image by dragging and dropping or clicking
3. Enter editing instructions (e.g., "Make the sky bluer", "Remove background")
4. (Optional) Click "Enhance Prompt" to improve your instructions
5. Click "Apply AI Edit"
6. Download your edited image

### Chat Mode
1. Switch to "Chat Mode" using the toggle
2. (Optional) Select a chat model from the dropdown
3. (Optional) Enable web search for real-time information
4. Type your message and press Enter or click Send
5. Chat with the AI assistant - responses stream in real-time
6. Use "Clear Chat" to start a new conversation

## Supported Image Formats

- JPG/JPEG
- PNG
- WEBP

## Available Models

### Generation Models
- **CogView-4** - ZAI's high-quality image generation model with excellent Chinese and English prompt understanding

### Chat Models
- **GLM-4.6** - ZAI's latest flagship model for agent-oriented applications
- **GLM-4.5** - Advanced model with excellent balance of capability and performance
- **GLM-4.5V** - Vision model for image and video understanding
- **GLM-4.5-X** - Most capable model for complex analysis
- **GLM-4.5-Air** - Efficient model optimized for speed
- **GLM-4.5-AirX** - Balanced advanced model
- **GLM-4.5-Flash** - Fastest model, free to use
- **GLM-4-32B-0414-128K** - Cost-effective model with 128K context window

### Editing & Analysis
- Image editing uses `glm-4.5v` vision model
- Prompt enhancement uses `glm-4.6` or `glm-4.5v` (if image provided)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `ZAI_API_KEY` | Your ZAI API key |

## Troubleshooting

- **"Server configuration error"**: Make sure your `ZAI_API_KEY` environment variable is set in Vercel (or in `.env.local` for local development)
- **Network Errors**: Check your internet connection and verify your API key is valid
- **Image Loading Issues**: Ensure you're using supported image formats (JPG, PNG, WEBP)
- **Rate Limit Errors**: ZAI API has rate limits - wait a moment before making another request
- **API Errors**: Check the browser console for detailed error messages
- **Image Generation Fails**: Ensure your ZAI account has sufficient credits for image generation ($0.01 per image)
- **Chat Not Working**: Verify your API key has access to GLM models and check your account balance

## Security

- API keys are stored securely as environment variables on Vercel
- All API calls are proxied through serverless functions (never exposed to the browser)
- User prompts are sanitized before being sent to the API
- Rate limiting prevents abuse
- Images are processed server-side for security

## API Costs

ZAI API pricing (approximate):
- **Image Generation (CogView-4)**: $0.01 per image
- **Chat (GLM-4.6)**: $0.6 per 1M input tokens, $2.2 per 1M output tokens
- **Chat (GLM-4.5-Flash)**: Free
- **Vision (GLM-4.5V)**: $0.6 per 1M input tokens, $1.8 per 1M output tokens
- **Web Search**: $0.01 per use

See [ZAI Pricing](https://docs.z.ai/guides/overview/pricing) for detailed pricing information.

## License

This project is open source and available for personal and commercial use.
