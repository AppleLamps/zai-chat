---
url: "https://docs.z.ai/guides/develop/langchain/introduction"
title: "LangChain Integration - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/guides/develop/langchain/introduction#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

SDKs Guide

LangChain Integration

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

On this page

- [Core Advantages](https://docs.z.ai/guides/develop/langchain/introduction#core-advantages)
- [Environment Requirements](https://docs.z.ai/guides/develop/langchain/introduction#environment-requirements)
- [Install Dependencies](https://docs.z.ai/guides/develop/langchain/introduction#install-dependencies)
- [Basic Installation](https://docs.z.ai/guides/develop/langchain/introduction#basic-installation)
- [Complete Installation](https://docs.z.ai/guides/develop/langchain/introduction#complete-installation)
- [Quick Start](https://docs.z.ai/guides/develop/langchain/introduction#quick-start)
- [Get API Key](https://docs.z.ai/guides/develop/langchain/introduction#get-api-key)
- [Basic Configuration](https://docs.z.ai/guides/develop/langchain/introduction#basic-configuration)
- [Basic Usage Examples](https://docs.z.ai/guides/develop/langchain/introduction#basic-usage-examples)
- [Simple Conversation](https://docs.z.ai/guides/develop/langchain/introduction#simple-conversation)
- [Using Prompt Templates](https://docs.z.ai/guides/develop/langchain/introduction#using-prompt-templates)
- [Conversation Memory Management](https://docs.z.ai/guides/develop/langchain/introduction#conversation-memory-management)
- [Advanced Features](https://docs.z.ai/guides/develop/langchain/introduction#advanced-features)
- [Intelligent Agent](https://docs.z.ai/guides/develop/langchain/introduction#intelligent-agent)
- [Streaming Output](https://docs.z.ai/guides/develop/langchain/introduction#streaming-output)
- [Best Practices](https://docs.z.ai/guides/develop/langchain/introduction#best-practices)
- [Getting Help](https://docs.z.ai/guides/develop/langchain/introduction#getting-help)

LangChain is a framework for developing applications powered by language models. Z.AI’s integration with LangChain enables you to:

- Use LangChain’s chain calling functionality
- Build intelligent agents and tool calling
- Implement complex conversation memory management

## [​](https://docs.z.ai/guides/develop/langchain/introduction\#core-advantages)  Core Advantages

## Framework Ecosystem

Access to LangChain’s rich ecosystem and toolchain

## Rapid Development

Quickly build complex AI applications using pre-built components

## Modular Design

Flexibly combine different components to meet various needs

## Community Support

Enjoy active open source community and rich resources

## [​](https://docs.z.ai/guides/develop/langchain/introduction\#environment-requirements)  Environment Requirements

## Python Version

Python 3.8 or higher

## LangChain Version

langchain\_community version 0.0.32 or higher

Please ensure langchain\_community version is 0.0.32 or higher for optimal compatibility and feature support.

## [​](https://docs.z.ai/guides/develop/langchain/introduction\#install-dependencies)  Install Dependencies

### [​](https://docs.z.ai/guides/develop/langchain/introduction\#basic-installation)  Basic Installation

Copy

Ask AI

```
# Install LangChain and related dependencies
pip install langchain langchainhub httpx_sse

# Install OpenAI compatible package
pip install langchain-openai
```

### [​](https://docs.z.ai/guides/develop/langchain/introduction\#complete-installation)  Complete Installation

Copy

Ask AI

```
# Install all related packages at once
pip install langchain langchain-openai langchainhub httpx_sse

# Verify installation
python -c "import langchain; print(langchain.__version__)"
```

## [​](https://docs.z.ai/guides/develop/langchain/introduction\#quick-start)  Quick Start

### [​](https://docs.z.ai/guides/develop/langchain/introduction\#get-api-key)  Get API Key

1. Access [Z.AI Open Platform](https://z.ai/model-api), Register or Login.
2. Create an API Key in the [API Keys](https://z.ai/manage-apikey/apikey-list) management page.
3. Copy your API Key for use.

It is recommended to set the API Key as an environment variable: `export ZAI_API_KEY=your-api-key`

### [​](https://docs.z.ai/guides/develop/langchain/introduction\#basic-configuration)  Basic Configuration

Copy

Ask AI

```
import os
from langchain_openai import ChatOpenAI

# Create Z.AI LLM instance
llm = ChatOpenAI(
    temperature=0.6,
    model="glm-4.6",
    openai_api_key="your-Z.AI-api-key",
    openai_api_base="https://api.z.ai/api/paas/v4/"
)

# Or use environment variables
llm = ChatOpenAI(
    temperature=0.6,
    model="glm-4.6",
    openai_api_key=os.getenv("ZAI_API_KEY"),
    openai_api_base="https://api.z.ai/api/paas/v4/"
)
```

## [​](https://docs.z.ai/guides/develop/langchain/introduction\#basic-usage-examples)  Basic Usage Examples

### [​](https://docs.z.ai/guides/develop/langchain/introduction\#simple-conversation)  Simple Conversation

Copy

Ask AI

```
from langchain_openai import ChatOpenAI
from langchain.schema import HumanMessage, SystemMessage

# Create LLM instance
llm = ChatOpenAI(
    temperature=0.7,
    model="glm-4.6",
    openai_api_key="your-Z.AI-api-key",
    openai_api_base="https://api.z.ai/api/paas/v4/"
)

# Create messages
messages = [\
    SystemMessage(content="You are a helpful AI assistant"),\
    HumanMessage(content="Please introduce the development history of artificial intelligence")\
]

# Call the model
response = llm(messages)
print(response.content)
```

### [​](https://docs.z.ai/guides/develop/langchain/introduction\#using-prompt-templates)  Using Prompt Templates

Copy

Ask AI

```
from langchain.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI

# Create LLM
llm = ChatOpenAI(
    model="glm-4.6",
    openai_api_key="your-Z.AI-api-key",
    openai_api_base="https://api.z.ai/api/paas/v4/"
)

# Create prompt template
prompt = ChatPromptTemplate.from_messages([\
    ("system", "You are a professional {domain} expert"),\
    ("human", "Please explain the concept and applications of {topic}")\
])

# Create chain
chain = prompt | llm

# Invoke chain
response = chain.invoke({
    "domain": "machine learning",
    "topic": "deep learning"
})

print(response.content)
```

### [​](https://docs.z.ai/guides/develop/langchain/introduction\#conversation-memory-management)  Conversation Memory Management

Copy

Ask AI

```
from langchain_openai import ChatOpenAI
from langchain.prompts import (
    ChatPromptTemplate,
    MessagesPlaceholder,
    SystemMessagePromptTemplate,
    HumanMessagePromptTemplate,
)
from langchain.chains import LLMChain
from langchain.memory import ConversationBufferMemory

# Create LLM
llm = ChatOpenAI(
    temperature=0.6,
    model="glm-4.6",
    openai_api_key="your-Z.AI-api-key",
    openai_api_base="https://api.z.ai/api/paas/v4/"
)

# Create prompt template
prompt = ChatPromptTemplate(
    messages=[\
        SystemMessagePromptTemplate.from_template(\
            "You are a nice chatbot having a conversation with a human."\
        ),\
        MessagesPlaceholder(variable_name="chat_history"),\
        HumanMessagePromptTemplate.from_template("{question}")\
    ]
)

# Create memory
memory = ConversationBufferMemory(memory_key="chat_history", return_messages=True)

# Create conversation chain
conversation = LLMChain(
    llm=llm,
    prompt=prompt,
    verbose=True,
    memory=memory
)

# Have conversations
response1 = conversation.invoke({"question": "tell me a joke"})
print("AI:", response1['text'])

response2 = conversation.invoke({"question": "tell me another one"})
print("AI:", response2['text'])
```

## [​](https://docs.z.ai/guides/develop/langchain/introduction\#advanced-features)  Advanced Features

### [​](https://docs.z.ai/guides/develop/langchain/introduction\#intelligent-agent)  Intelligent Agent

Copy

Ask AI

```
import os
from langchain import hub
from langchain.agents import AgentExecutor, create_react_agent
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_openai import ChatOpenAI

# Set search tool API key
os.environ["TAVILY_API_KEY"] = "your-tavily-api-key"

# Create LLM
llm = ChatOpenAI(
    model="glm-4.6",
    openai_api_key="your-Z.AI-api-key",
    openai_api_base="https://api.z.ai/api/paas/v4/"
)

# Create tools
tools = [TavilySearchResults(max_results=2)]

# Get prompt template
prompt = hub.pull("hwchase17/react")

# Create agent
agent = create_react_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# Execute task
result = agent_executor.invoke({"input": "what is LangChain?"})
print(result['output'])
```

### [​](https://docs.z.ai/guides/develop/langchain/introduction\#streaming-output)  Streaming Output

Copy

Ask AI

```
from langchain_openai import ChatOpenAI
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.schema import HumanMessage

# Create LLM with streaming output
llm = ChatOpenAI(
    model="glm-4.6",
    openai_api_key="your-Z.AI-api-key",
    openai_api_base="https://api.z.ai/api/paas/v4/",
    streaming=True,
    callbacks=[StreamingStdOutCallbackHandler()]
)

# Send message (output will be displayed in real-time streaming)
response = llm([HumanMessage(content="Write a poem about spring")])
```

## [​](https://docs.z.ai/guides/develop/langchain/introduction\#best-practices)  Best Practices

## Performance Optimization

- Enable LangChain caching mechanism
- Use batch processing to reduce API calls
- Set reasonable max\_tokens limits
- Use async processing for better concurrency

## Error Handling

- Implement retry mechanisms and exponential backoff
- Set reasonable timeout values
- Log detailed error information
- Provide fallback solutions

## Memory Management

- Use ConversationBufferWindowMemory to limit history length
- Regularly clean unnecessary conversation history
- Monitor memory usage
- Implement conversation summarization

## Security

- Use environment variables to store API keys
- Implement input validation and filtering
- Monitor API usage and costs
- Rotate API keys regularly

## [​](https://docs.z.ai/guides/develop/langchain/introduction\#getting-help)  Getting Help

[**Z.AI API Documentation** \\
\\
View complete Z.AI API documentation](https://docs.z.ai/api-reference) [**LangChain Official Documentation** \\
\\
View LangChain official documentation and tutorials](https://python.langchain.com/docs/get_started/introduction)

LangChain is a rapidly evolving framework. It is recommended to update to the latest version regularly for optimal functionality and performance. Meanwhile, Z.AI will continue to optimize integration with LangChain to ensure the best compatibility and user experience.

Was this page helpful?

YesNo

[OpenAI Python SDK](https://docs.z.ai/guides/develop/openai/python) [Migrate to GLM-4.6](https://docs.z.ai/guides/overview/migrate-to-glm-4.6)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.