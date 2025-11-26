---
url: "https://docs.z.ai/guides/develop/openai/python"
title: "OpenAI Python SDK - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/guides/develop/openai/python#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

SDKs Guide

OpenAI Python SDK

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

On this page

- [Core Advantages](https://docs.z.ai/guides/develop/openai/python#core-advantages)
- [Environment Requirements](https://docs.z.ai/guides/develop/openai/python#environment-requirements)
- [Install OpenAI Python SDK](https://docs.z.ai/guides/develop/openai/python#install-openai-python-sdk)
- [Install using pip](https://docs.z.ai/guides/develop/openai/python#install-using-pip)
- [Install using poetry](https://docs.z.ai/guides/develop/openai/python#install-using-poetry)
- [Quick Start](https://docs.z.ai/guides/develop/openai/python#quick-start)
- [Get API Key](https://docs.z.ai/guides/develop/openai/python#get-api-key)
- [Create Client](https://docs.z.ai/guides/develop/openai/python#create-client)
- [Quick Start Examples](https://docs.z.ai/guides/develop/openai/python#quick-start-examples)
- [Basic Chat](https://docs.z.ai/guides/develop/openai/python#basic-chat)
- [Streaming Response](https://docs.z.ai/guides/develop/openai/python#streaming-response)
- [Multi-turn Conversation](https://docs.z.ai/guides/develop/openai/python#multi-turn-conversation)
- [Advanced Features](https://docs.z.ai/guides/develop/openai/python#advanced-features)
- [Thinking Mode](https://docs.z.ai/guides/develop/openai/python#thinking-mode)
- [Function Calling](https://docs.z.ai/guides/develop/openai/python#function-calling)
- [Parameter Configuration](https://docs.z.ai/guides/develop/openai/python#parameter-configuration)
- [Common Parameters](https://docs.z.ai/guides/develop/openai/python#common-parameters)
- [Best Practices](https://docs.z.ai/guides/develop/openai/python#best-practices)
- [Migration Guide](https://docs.z.ai/guides/develop/openai/python#migration-guide)
- [Migrating from OpenAI](https://docs.z.ai/guides/develop/openai/python#migrating-from-openai)
- [Getting Help](https://docs.z.ai/guides/develop/openai/python#getting-help)

Z.AI provides interfaces compatible with OpenAI API, which means you can use existing OpenAI SDK code and seamlessly switch to Z.AI’s model services by simply modifying the API key and base URL. This compatibility allows you to:

- Quickly migrate existing OpenAI applications
- Use familiar development patterns and tools
- Enjoy the powerful capabilities of Z.AI models
- Maintain code consistency and maintainability

In some scenarios, there are still differences between Z.AI and OpenAI interfaces, but this does not affect overall compatibility.

### [​](https://docs.z.ai/guides/develop/openai/python\#core-advantages)  Core Advantages

## Zero Learning Cost

If you are already familiar with OpenAI SDK, you can start using it immediately

## Quick Migration

Existing OpenAI applications can be quickly migrated to Z.AI platform

## Ecosystem Compatibility

Compatible with various tools and frameworks in the OpenAI ecosystem

## Continuous Updates

Follow OpenAI SDK updates to maintain latest feature support

## [​](https://docs.z.ai/guides/develop/openai/python\#environment-requirements)  Environment Requirements

## Python Version

Python 3.7.1 or higher

## OpenAI SDK

OpenAI SDK version 1.0.0 or higher

Please ensure using OpenAI SDK 1.0.0 or higher, older versions may have compatibility issues.

## [​](https://docs.z.ai/guides/develop/openai/python\#install-openai-python-sdk)  Install OpenAI Python SDK

### [​](https://docs.z.ai/guides/develop/openai/python\#install-using-pip)  Install using pip

Copy

Ask AI

```
# Install or upgrade to latest version
pip install --upgrade 'openai>=1.0'

# Verify installation
python -c "import openai; print(openai.__version__)"
```

### [​](https://docs.z.ai/guides/develop/openai/python\#install-using-poetry)  Install using poetry

Copy

Ask AI

```
poetry add "openai>=1.0"
```

## [​](https://docs.z.ai/guides/develop/openai/python\#quick-start)  Quick Start

### [​](https://docs.z.ai/guides/develop/openai/python\#get-api-key)  Get API Key

1. Access [Z.AI Open Platform](https://z.ai/model-api), Register or Login.
2. Create an API Key in the [API Keys](https://z.ai/manage-apikey/apikey-list) management page.
3. Copy your API Key for use.

It is recommended to set the API Key as an environment variable: `export ZAI_API_KEY=your-api-key`

### [​](https://docs.z.ai/guides/develop/openai/python\#create-client)  Create Client

- Basic Configuration

- Environment Variables

- Configuration Class


Copy

Ask AI

```
from openai import OpenAI

# Create Z.AI client
client = OpenAI(
    api_key="your-Z.AI-api-key",
    base_url="https://api.z.ai/api/paas/v4/"
)
```

## [​](https://docs.z.ai/guides/develop/openai/python\#quick-start-examples)  Quick Start Examples

### [​](https://docs.z.ai/guides/develop/openai/python\#basic-chat)  Basic Chat

Copy

Ask AI

```
from openai import OpenAI

client = OpenAI(
    api_key="your-Z.AI-api-key",
    base_url="https://api.z.ai/api/paas/v4/"
)

completion = client.chat.completions.create(
    model="glm-4.6",
    messages=[\
        {"role": "system", "content": "You are a smart and creative novelist"},\
        {"role": "user", "content": "Please write a short fairy tale story as a fairy tale master"}\
    ]
)

print(completion.choices[0].message.content)
```

### [​](https://docs.z.ai/guides/develop/openai/python\#streaming-response)  Streaming Response

Copy

Ask AI

```
from openai import OpenAI

client = OpenAI(
    api_key="your-Z.AI-api-key",
    base_url="https://api.z.ai/api/paas/v4/"
)

stream = client.chat.completions.create(
    model="glm-4.6",
    messages=[\
        {"role": "user", "content": "Write a poem about artificial intelligence"}\
    ],
    stream=True,
    temperature=0.6
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="", flush=True)

print()  # New line
```

### [​](https://docs.z.ai/guides/develop/openai/python\#multi-turn-conversation)  Multi-turn Conversation

Copy

Ask AI

```
from openai import OpenAI

class ChatBot:
    def __init__(self, api_key: str):
        self.client = OpenAI(
            api_key=api_key,
            base_url="https://api.z.ai/api/paas/v4/"
        )
        self.conversation = [\
            {"role": "system", "content": "You are a helpful AI assistant"}\
        ]

    def chat(self, user_input: str) -> str:
        # Add user message
        self.conversation.append({"role": "user", "content": user_input})

        # Call API
        response = self.client.chat.completions.create(
            model="glm-4.6",
            messages=self.conversation,
            temperature=0.6
        )

        # Get AI response
        ai_response = response.choices[0].message.content

        # Add to conversation history
        self.conversation.append({"role": "assistant", "content": ai_response})

        return ai_response

    def clear_history(self):
        """Clear conversation history, keep system prompt"""
        self.conversation = self.conversation[:1]

# Usage example
bot = ChatBot("your-api-key")
print(bot.chat("Hello, please introduce yourself"))
print(bot.chat("Can you help me write code?"))
print(bot.chat("Write a Python quicksort algorithm"))
```

## [​](https://docs.z.ai/guides/develop/openai/python\#advanced-features)  Advanced Features

### [​](https://docs.z.ai/guides/develop/openai/python\#thinking-mode)  Thinking Mode

In thinking mode, GLM-4.6, GLM-4.5 and GLM-4.5-Air can solve complex reasoning problems, including mathematics, science, and logic problems.The param `thinking.type` can be either `enabled` or `disabled`.

Copy

Ask AI

```
import os
from openai import OpenAI

client = OpenAI(api_key='your-api-key', base_url='https://api.z.ai/api/paas/v4/')
response = client.chat.completions.create(
        model='glm-4.6',
        messages=[\
            {"role": "system", "content": "you are a helpful assistant"},\
            {"role": "user", "content": "what is the revolution of llm?"}\
        ],
        stream=True,
        extra_body={
            "thinking": {
                "type": "enabled",
            },
        }
    )
for chunk in response:
    if chunk.choices[0].delta.reasoning_content:
        print(chunk.choices[0].delta.reasoning_content, end='')
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end='')
```

### [​](https://docs.z.ai/guides/develop/openai/python\#function-calling)  Function Calling

Copy

Ask AI

```
import json
from openai import OpenAI

client = OpenAI(
    api_key="your-Z.AI-api-key",
    base_url="https://api.z.ai/api/paas/v4/"
)

def get_weather(location: str) -> str:
    """Get weather information for specified location"""
    # This should call a real weather API
    return f"Weather in {location}: Sunny, 25°C"

# Define function description
tools = [\
    {\
        "type": "function",\
        "function": {\
            "name": "get_weather",\
            "description": "Get weather information for specified location",\
            "parameters": {\
                "type": "object",\
                "properties": {\
                    "location": {\
                        "type": "string",\
                        "description": "Location name, e.g.: Beijing, Shanghai"\
                    }\
                },\
                "required": ["location"]\
            }\
        }\
    }\
]

# Call conversation with functions
response = client.chat.completions.create(
    model="glm-4.6",
    messages=[\
        {"role": "user", "content": "How's the weather in Beijing today?"}\
    ],
    tools=tools,
    tool_choice="auto"
)

# Handle function calls
message = response.choices[0].message
if message.tool_calls:
    for tool_call in message.tool_calls:
        if tool_call.function.name == "get_weather":
            args = json.loads(tool_call.function.arguments)
            result = get_weather(args["location"])
            print(f"Function call result: {result}")
```

## [​](https://docs.z.ai/guides/develop/openai/python\#parameter-configuration)  Parameter Configuration

### [​](https://docs.z.ai/guides/develop/openai/python\#common-parameters)  Common Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| model | string | Required | Model name to use |
| messages | array | Required | List of conversation messages |
| temperature | float | 0.6 | Controls output randomness (0-1) |
| top\_p | float | 0.95 | Nucleus sampling parameter (0-1) |
| max\_tokens | integer | - | Maximum output tokens |
| stream | boolean | false | Whether to use streaming output |
| stop | string/array | - | Stop generation tokens |

Note: The temperature parameter range is (0,1), do\_sample = False (temperature = 0) is not applicable in OpenAI calls.

## [​](https://docs.z.ai/guides/develop/openai/python\#best-practices)  Best Practices

## Performance Optimization

- Use connection pooling and session reuse
- Set reasonable timeout values
- Implement async calls for high concurrency
- Cache frequently used responses

## Cost Control

- Set reasonable max\_tokens limits
- Use appropriate models (don’t overuse powerful models)
- Implement request deduplication
- Monitor API usage

## Security

- Use environment variables to store API keys
- Implement input validation and filtering
- Log and monitor API calls
- Rotate API keys regularly

## Reliability

- Implement retry mechanisms and error handling
- Set reasonable timeout values
- Monitor API status and response times
- Prepare fallback solutions

## [​](https://docs.z.ai/guides/develop/openai/python\#migration-guide)  Migration Guide

### [​](https://docs.z.ai/guides/develop/openai/python\#migrating-from-openai)  Migrating from OpenAI

If you’re already using OpenAI API, migrating to Z.AI is very simple:

Copy

Ask AI

```
# Original OpenAI code
from openai import OpenAI

client = OpenAI(
    api_key="sk-...",  # OpenAI API Key
    # base_url uses default value
)

# Migrate to Z.AI, only need to modify two places
client = OpenAI(
    api_key="your-Z.AI-api-key",  # Replace with Z.AI API Key
    base_url="https://api.z.ai/api/paas/v4/"  # Add Z.AI base_url
)

# Other code remains unchanged
response = client.chat.completions.create(
    model="glm-4.6",  # Use Z.AI model
    messages=[{"role": "user", "content": "Hello!"}]
)
```

## [​](https://docs.z.ai/guides/develop/openai/python\#getting-help)  Getting Help

[**API Documentation** \\
\\
View complete API interface documentation](https://docs.z.ai/api-reference) [**OpenAI Official Documentation** \\
\\
Refer to OpenAI official documentation for more usage](https://platform.openai.com/docs)

Z.AI is committed to maintaining compatibility with OpenAI API. If you encounter any issues during migration, please contact our technical support team.

Was this page helpful?

YesNo

[Official Java SDK](https://docs.z.ai/guides/develop/java/introduction) [LangChain Integration](https://docs.z.ai/guides/develop/langchain/introduction)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.