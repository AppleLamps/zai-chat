---
url: "https://docs.z.ai/guides/llm/glm-4-32b-0414-128k"
title: "GLM-4-32B-0414-128K - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

Language Models

GLM-4-32B-0414-128K

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

On this page

- [Overview](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k#overview)
- [Usage](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k#usage)
- [Resources](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k#resources)
- [Introducting GLM-4-32B-0414-128K](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k#introducting-glm-4-32b-0414-128k)
- [Capability](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k#capability)
- [Quick Start](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k#quick-start)

## [​](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k\#overview)   Overview

GLM-4-32B-0414-128K is a highly cost-effective foundation language model. It can efficiently perform complex tasks and has significantly enhanced capabilities in tool use, online search, and code-related intelligent tasks.

## Price

$0.1 per million tokens

## Input Modality

Text

## Output Modality

Text

## Context Length

128K

## Maximum Output Tokens

16K

## [​](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k\#usage)   Usage

Intelligent Q&A Assistant

Supports real-time online search to retrieve the latest information, accurately parses complex queries on e-commerce product inquiries, financial service terms, education course Q&A, and generates precise, professional answers based on enterprise knowledge bases.

Intelligent Quality Inspection

Accurately identifies and extracts key information and business fields from complex texts such as customer service tickets, automating analyses like sales pitch inspection and risk identification, strictly adhering to SOP processes and greatly reducing data processing time.

Financial Data Analysis

Real-time cleansing of financial data, automated extraction of key insights, and detection of potential trends and correlations. Supports scenarios such as bid document analysis, financial report interpretation, and market trend monitoring.

Code Generation

Based on intent decomposition and logical reasoning, accurately generates initial code frameworks or key functions in mainstream languages such as Python, Java, and JavaScript. Supports multi-turn contextual iterative development, intelligent comments, and rewriting functions to add clear annotations to code.

Job Market Analysis

Deep analysis of job descriptions and resumes using real-time job information, industry salary trends, and talent demand, providing precise talent matching recommendations for enterprises and analyzing employment trends and career development paths for job seekers.

## [​](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k\#resources)   Resources

- [API Documentation](https://docs.z.ai/api-reference/llm/caht-completion): Learn how to call the API.

## [​](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k\#introducting-glm-4-32b-0414-128k)   Introducting GLM-4-32B-0414-128K

GLM-4-32B-0414-128K was pre-trained on 15T of high-quality data, including abundant synthetic reasoning data to lay a solid foundation for subsequent reinforcement learning. In the post-training phase, besides aligning with human preferences in dialogue scenarios, we also applied techniques like rejection sampling and reinforcement learning to enhance instruction following, engineering code generation, and function calling, strengthening the model’s fundamental capabilities for intelligent tasks.The model performs comparably to much larger domestic and international mainstream models, with some benchmark indicators approaching or even exceeding models like GPT-4o and DeepSeek-V3-0324 (671B).

## [​](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k\#capability)   Capability

## Streaming Output

## Structured Output

## Function Calling

## Knowledge Base Retrieval

## Web search

the search engine supports Jina AI, with a price of $0.01 per use.

## [​](https://docs.z.ai/guides/llm/glm-4-32b-0414-128k\#quick-start)   Quick Start

- cURL

- Official Python SDK

- Official Java SDK

- OpenAI Python SDK


**Basic Call**

Copy

Ask AI

```
curl -X POST "https://api.z.ai/api/paas/v4/chat/completions" \
     -H "Authorization: Bearer your-api-key" \
     -H "Content-Type: application/json" \
     -d '{
       "model": "glm-4-32b-0414-128k",
       "messages": [\
         {\
           "role": "user",\
           "content": "As a marketing expert, please create an attractive slogan for my product."\
         }\
       ]
     }'
```

**Streaming Call**

Copy

Ask AI

```
curl -X POST "https://api.z.ai/api/paas/v4/chat/completions" \
     -H "Authorization: Bearer your-api-key" \
     -H "Content-Type: application/json" \
     -d '{
       "model": "glm-4-32b-0414-128k",
       "messages": [\
         {\
           "role": "user",\
           "content": "As a marketing expert, please create an attractive slogan for my product."\
         }\
       ],
       "stream": true
     }'
```

Was this page helpful?

YesNo

[GLM-4.5](https://docs.z.ai/guides/llm/glm-4.5) [GLM-4.5V](https://docs.z.ai/guides/vlm/glm-4.5v)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.