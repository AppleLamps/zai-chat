---
url: "https://docs.z.ai/guides/capabilities/streaming"
title: "Streaming Messages - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/guides/capabilities/streaming#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

Capabilities

Streaming Messages

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

On this page

- [Features](https://docs.z.ai/guides/capabilities/streaming#features)
- [Core Parameter Description](https://docs.z.ai/guides/capabilities/streaming#core-parameter-description)
- [Response Format Description](https://docs.z.ai/guides/capabilities/streaming#response-format-description)
- [Code Examples](https://docs.z.ai/guides/capabilities/streaming#code-examples)
- [Response Example](https://docs.z.ai/guides/capabilities/streaming#response-example)
- [Application Scenarios](https://docs.z.ai/guides/capabilities/streaming#application-scenarios)

Streaming Messages allow real-time content retrieval while the model generates responses, without waiting for the complete response to be generated. This approach can significantly improve user experience, especially when generating long text content, as users can immediately see output beginning to appear.

## [​](https://docs.z.ai/guides/capabilities/streaming\#features)  Features

Streaming messages use an incremental generation mechanism, transmitting content in chunks in real-time during the generation process, rather than waiting for the complete response to be generated before returning it all at once. This mechanism allows developers to:

- **Real-time Response**: No need to wait for complete response, content displays progressively
- **Improved Experience**: Reduce user waiting time, provide instant feedback
- **Reduced Latency**: Content is transmitted as it’s generated, reducing perceived latency
- **Flexible Processing**: Real-time processing and display during reception

### [​](https://docs.z.ai/guides/capabilities/streaming\#core-parameter-description)  Core Parameter Description

- **`stream=True`**: Enable streaming output, must be set to `True`
- **`model`**: Models that support streaming output, such as `glm-4.6`, `glm-4.5`, etc.

### [​](https://docs.z.ai/guides/capabilities/streaming\#response-format-description)  Response Format Description

Streaming responses use Server-Sent Events (SSE) format, with each event containing:

- `choices[0].delta.content`: Incremental text content
- `choices[0].delta.reasoning_content`: Incremental reasoning content
- `choices[0].finish_reason`: Completion reason (only appears in the last chunk)
- `usage`: Token usage statistics (only appears in the last chunk)

## [​](https://docs.z.ai/guides/capabilities/streaming\#code-examples)  Code Examples

- cURL

- Python


Copy

Ask AI

```
curl --location 'https://api.z.ai/api/paas/v4/chat/completions' \
--header 'Authorization: Bearer YOUR_API_KEY' \
--header 'Content-Type: application/json' \
--data '{
    "model": "glm-4.6",
    "messages": [\
        {\
            "role": "user",\
            "content": "Write a poem about spring"\
        }\
    ],
    "stream": true
}'
```

### [​](https://docs.z.ai/guides/capabilities/streaming\#response-example)  Response Example

The streaming response format is as follows:

Copy

Ask AI

```
data: {"id":"1","created":1677652288,"model":"glm-4.6","choices":[{"index":0,"delta":{"content":"Spring"},"finish_reason":null}]}

data: {"id":"1","created":1677652288,"model":"glm-4.6","choices":[{"index":0,"delta":{"content":" comes"},"finish_reason":null}]}

data: {"id":"1","created":1677652288,"model":"glm-4.6","choices":[{"index":0,"delta":{"content":" with"},"finish_reason":null}]}

...

data: {"id":"1","created":1677652288,"model":"glm-4.6","choices":[{"index":0,"finish_reason":"stop","delta":{"role":"assistant","content":""}}],"usage":{"prompt_tokens":8,"completion_tokens":262,"total_tokens":270,"prompt_tokens_details":{"cached_tokens":0}}}

data: [DONE]
```

## [​](https://docs.z.ai/guides/capabilities/streaming\#application-scenarios)  Application Scenarios

## Chat Applications

- Real-time conversation experience
- Character-by-character reply display
- Reduced waiting time

## Content Generation

- Article writing assistant
- Code generation tools
- Creative content creation

## Educational Applications

- Online Q&A systems
- Learning assistance tools
- Knowledge Q&A platforms

## Customer Service Systems

- Intelligent customer service bots
- Real-time problem solving
- User support systems

Was this page helpful?

YesNo

[Deep Thinking](https://docs.z.ai/guides/capabilities/thinking) [Tool Streaming Output](https://docs.z.ai/guides/capabilities/stream-tool)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.