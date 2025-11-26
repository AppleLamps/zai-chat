---
url: "https://docs.z.ai/guides/develop/http/introduction"
title: "HTTP API Calls - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/guides/develop/http/introduction#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

SDKs Guide

HTTP API Calls

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

On this page

- [Core Advantages](https://docs.z.ai/guides/develop/http/introduction#core-advantages)
- [Get API Key](https://docs.z.ai/guides/develop/http/introduction#get-api-key)
- [API Basic Information](https://docs.z.ai/guides/develop/http/introduction#api-basic-information)
- [General API Endpoint](https://docs.z.ai/guides/develop/http/introduction#general-api-endpoint)
- [Request Header Requirements](https://docs.z.ai/guides/develop/http/introduction#request-header-requirements)
- [Supported Authentication Methods](https://docs.z.ai/guides/develop/http/introduction#supported-authentication-methods)
- [Basic Call Examples](https://docs.z.ai/guides/develop/http/introduction#basic-call-examples)
- [Simple Conversation](https://docs.z.ai/guides/develop/http/introduction#simple-conversation)
- [Streaming Response](https://docs.z.ai/guides/develop/http/introduction#streaming-response)
- [Multi-turn Conversation](https://docs.z.ai/guides/develop/http/introduction#multi-turn-conversation)
- [Common Programming Language Examples](https://docs.z.ai/guides/develop/http/introduction#common-programming-language-examples)
- [Best Practices](https://docs.z.ai/guides/develop/http/introduction#best-practices)
- [Get More](https://docs.z.ai/guides/develop/http/introduction#get-more)

Z.AI provides standard HTTP API interfaces that support multiple programming languages and development environments, allowing you to easily integrate Z.AI’s powerful capabilities.

### [​](https://docs.z.ai/guides/develop/http/introduction\#core-advantages)  Core Advantages

## Cross-platform Compatible

Supports all programming languages and platforms that support HTTP protocol

## Standard Protocol

Based on RESTful design, follows HTTP standards, easy to understand and use

## Flexible Integration

Can be integrated into any existing applications and systems

## Real-time Calls

Supports synchronous and asynchronous calls to meet different scenario requirements

## [​](https://docs.z.ai/guides/develop/http/introduction\#get-api-key)  Get API Key

1. Access [Z.AI Open Platform](https://z.ai/model-api), Register or Login.
2. Create an API Key in the [API Keys](https://z.ai/manage-apikey/apikey-list) management page.
3. Copy your API Key for use.

## [​](https://docs.z.ai/guides/develop/http/introduction\#api-basic-information)  API Basic Information

### [​](https://docs.z.ai/guides/develop/http/introduction\#general-api-endpoint)  General API Endpoint

Copy

Ask AI

```
https://api.z.ai/api/paas/v4/
```

Note: When using the [GLM Coding Plan](https://docs.z.ai/devpack/overview), you need to configure the dedicated

Coding endpoint - [https://api.z.ai/api/coding/paas/v4](https://api.z.ai/api/coding/paas/v4)

instead of the general endpoint - [https://api.z.ai/api/paas/v4](https://api.z.ai/api/paas/v4)

Note: The Coding API endpoint is only for Coding scenarios and is not applicable to general API scenarios. Please use them accordingly.

### [​](https://docs.z.ai/guides/develop/http/introduction\#request-header-requirements)  Request Header Requirements

Copy

Ask AI

```
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY
```

### [​](https://docs.z.ai/guides/develop/http/introduction\#supported-authentication-methods)  Supported Authentication Methods

- API Key Authentication

- JWT Token Authentication


The simplest authentication method, directly using your API Key:

Copy

Ask AI

```
curl --location 'https://api.z.ai/api/paas/v4/chat/completions' \
--header 'Authorization: Bearer YOUR_API_KEY' \
--header 'Accept-Language: en-US,en' \
--header 'Content-Type: application/json' \
--data '{
    "model": "glm-4.6",
    "messages": [\
        {\
            "role": "user",\
            "content": "Hello"\
        }\
    ]
}'
```

## [​](https://docs.z.ai/guides/develop/http/introduction\#basic-call-examples)  Basic Call Examples

### [​](https://docs.z.ai/guides/develop/http/introduction\#simple-conversation)  Simple Conversation

Copy

Ask AI

```
curl --location 'https://api.z.ai/api/paas/v4/chat/completions' \
--header 'Authorization: Bearer YOUR_API_KEY' \
--header 'Accept-Language: en-US,en' \
--header 'Content-Type: application/json' \
--data '{
    "model": "glm-4.6",
    "messages": [\
        {\
            "role": "user",\
            "content": "Please introduce the development history of artificial intelligence"\
        }\
    ],
    "temperature": 1.0,
    "max_tokens": 1024
}'
```

### [​](https://docs.z.ai/guides/develop/http/introduction\#streaming-response)  Streaming Response

Copy

Ask AI

```
curl --location 'https://api.z.ai/api/paas/v4/chat/completions' \
--header 'Authorization: Bearer YOUR_API_KEY' \
--header 'Accept-Language: en-US,en' \
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

### [​](https://docs.z.ai/guides/develop/http/introduction\#multi-turn-conversation)  Multi-turn Conversation

Copy

Ask AI

```
curl --location 'https://api.z.ai/api/paas/v4/chat/completions' \
--header 'Authorization: Bearer YOUR_API_KEY' \
--header 'Accept-Language: en-US,en' \
--header 'Content-Type: application/json' \
--data '{
    "model": "glm-4.6",
    "messages": [\
        {\
            "role": "system",\
            "content": "You are a professional programming assistant"\
        },\
        {\
            "role": "user",\
            "content": "What is recursion?"\
        },\
        {\
            "role": "assistant",\
            "content": "Recursion is a programming technique where a function calls itself to solve problems..."\
        },\
        {\
            "role": "user",\
            "content": "Can you give me an example of Python recursion?"\
        }\
    ]
}'
```

## [​](https://docs.z.ai/guides/develop/http/introduction\#common-programming-language-examples)  Common Programming Language Examples

- Python

- JavaScript

- Java


Copy

Ask AI

```
import requests
import json

def call_zai_api(messages, model="glm-4.6"):
    url = "https://api.z.ai/api/paas/v4/chat/completions"

    headers = {
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json",
        "Accept-Language": "en-US,en"
    }

    data = {
        "model": model,
        "messages": messages,
        "temperature": 1.0
    }

    response = requests.post(url, headers=headers, json=data)

    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"API call failed: {response.status_code}, {response.text}")

# Usage example
messages = [\
    {"role": "user", "content": "Hello, please introduce yourself"}\
]

result = call_zai_api(messages)
print(result['choices'][0]['message']['content'])
```

## [​](https://docs.z.ai/guides/develop/http/introduction\#best-practices)  Best Practices

## Security

- Properly secure API Keys, do not hard-code them in your code
- Use environment variables or configuration files to store sensitive information
- Regularly rotate API Keys

## Performance Optimization

- Implement connection pooling and session reuse
- Set reasonable timeout values
- Use asynchronous requests for high-concurrency scenarios

## Error Handling

- Implement exponential backoff retry mechanisms
- Log detailed error information
- Set reasonable timeout and retry limits

## Monitoring

- Monitor API call frequency and success rates
- Track response times and error rates
- Set up alerting mechanisms

## [​](https://docs.z.ai/guides/develop/http/introduction\#get-more)  Get More

[**API Documentation** \\
\\
View complete API interface documentation and parameter descriptions](https://docs.z.ai/api-reference) [**Technical Support** \\
\\
Get technical support and assistance](https://z.ai/contact)

It is recommended to use HTTPS protocol in production environments and implement appropriate security measures to protect your API keys and data transmission.

Was this page helpful?

YesNo

[Core Parameters](https://docs.z.ai/guides/overview/concept-param) [Official Python SDK](https://docs.z.ai/guides/develop/python/introduction)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.