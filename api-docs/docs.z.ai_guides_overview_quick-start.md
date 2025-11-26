---
url: "https://docs.z.ai/guides/overview/quick-start"
title: "Quick Start - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/guides/overview/quick-start#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

Get Started

Quick Start

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

On this page

- [Getting Started](https://docs.z.ai/guides/overview/quick-start#getting-started)
- [Get More](https://docs.z.ai/guides/overview/quick-start#get-more)

Tired of limits? GLM Coding Plan — monthly access to world-class model GLM-4.6, compatible with top coding tools like Claude Code and Cline. All from just $3/month. [Try it now →](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

## [​](https://docs.z.ai/guides/overview/quick-start\#getting-started)  Getting Started

1

Get API Key

- Access [Z.AI Open Platform](https://z.ai/model-api), Register or Login.
- Access [Billing Page](https://z.ai/manage-apikey/billing) to top up if needed.
- Create an API Key in the [API Keys](https://z.ai/manage-apikey/apikey-list) management page.
- Copy your API Key for use.








[**Z.AI Open Platform**](https://z.ai/model-api)

[Access](https://z.ai/model-api) [Z.AI Open Platform](https://z.ai/model-api), Register or Login.













[**API Keys Management**](https://z.ai/manage-apikey/apikey-list)

[Create an API Key in the](https://z.ai/manage-apikey/apikey-list) [API Keys](https://z.ai/manage-apikey/apikey-list) management page.


2

Choose Model

> The platform offers multiple models, and you can select the appropriate model based on your needs. For detailed model introductions, please refer to the [Models & Agents](https://docs.z.ai/guides/overview/pricing).

[**GLM-4.6** \\
\\
Our latest flagship models, purpose-built as foundational models for agent-oriented applications](https://docs.z.ai/guides/llm/glm-4.6) [**GLM-4.5V** \\
\\
New generation of visual reasoning models based on the MOE architecture,achieving SOTA among open-source VLMs](https://docs.z.ai/guides/vlm/glm-4.5v) [**CogView-4** \\
\\
Image Generation Model capable of producing images at any resolution within a specified range](https://docs.z.ai/guides/image/cogview-4) [**CogVideoX-3** \\
\\
New frame generation capabilities that significantly improve image stability and clarity](https://docs.z.ai/guides/video/cogvideox-3)

3

Choose the Calling Method

Our platform provides various development approaches; you can select the best fit for your project needs and tech stack.

[**HTTP API** \\
\\
Standard RESTful API, compatible with all programming languages.](https://docs.z.ai/guides/develop/http/introduction) [**Z.AI Python SDK** \\
\\
Official Python SDK, featuring full type hints and async support.](https://docs.z.ai/guides/develop/python/introduction) [**Z.AI Java SDK** \\
\\
Official Java SDK, designed for high concurrency and availability.](https://docs.z.ai/guides/develop/java/introduction) [**OpenAI Python SDK** \\
\\
OpenAI SDK Compatibility, quickly migrating from OpenAI.](https://docs.z.ai/guides/develop/openai/python) [**API Reference** \\
\\
Complete API documentation with parameter descriptions.](https://docs.z.ai/api-reference)

4

Make API Call

After preparing your `API Key` and selecting a model, you can start making API calls. Here are examples using `curl`, `Python SDK`, and `Java SDK`:

- cURL

- Official Python SDK

- Official Java SDK

- OpenAI Python SDK

- OpenAI NodeJs SDK

- OpenAI Java SDK


Note: When using the [GLM Coding Plan](https://docs.z.ai/devpack/overview), you need to configure the dedicated

Coding endpoint - [https://api.z.ai/api/coding/paas/v4](https://api.z.ai/api/coding/paas/v4)

instead of the general endpoint - [https://api.z.ai/api/paas/v4](https://api.z.ai/api/paas/v4)

Note: The Coding API endpoint is only for Coding scenarios and is not applicable to general API scenarios. Please use them accordingly.

Copy

Ask AI

```
curl -X POST "https://api.z.ai/api/paas/v4/chat/completions" \
-H "Content-Type: application/json" \
-H "Accept-Language: en-US,en" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
    "model": "glm-4.6",
    "messages": [\
        {\
            "role": "system",\
            "content": "You are a helpful AI assistant."\
        },\
        {\
            "role": "user",\
            "content": "Hello, please introduce yourself."\
        }\
    ]
}'
```

### [​](https://docs.z.ai/guides/overview/quick-start\#get-more)  Get More

[**API Reference** \\
\\
Access API Reference.](https://docs.z.ai/api-reference) [**Python SDK** \\
\\
Access Python SDK Github](https://github.com/zai-org/z-ai-sdk-python) [**Java SDK** \\
\\
Access Java SDK Github](https://github.com/zai-org/z-ai-sdk-java)

Was this page helpful?

YesNo

[Overview](https://docs.z.ai/guides/overview/overview)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.