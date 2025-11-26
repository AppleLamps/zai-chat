---
url: "https://docs.z.ai/guides/develop/java/introduction"
title: "Official Java SDK - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/guides/develop/java/introduction#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

SDKs Guide

Official Java SDK

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

On this page

- [Core Advantages](https://docs.z.ai/guides/develop/java/introduction#core-advantages)
- [Supported Features](https://docs.z.ai/guides/develop/java/introduction#supported-features)
- [Technical Specifications](https://docs.z.ai/guides/develop/java/introduction#technical-specifications)
- [Environment Requirements](https://docs.z.ai/guides/develop/java/introduction#environment-requirements)
- [Dependency Management](https://docs.z.ai/guides/develop/java/introduction#dependency-management)
- [Quick Start](https://docs.z.ai/guides/develop/java/introduction#quick-start)
- [Environment Requirements](https://docs.z.ai/guides/develop/java/introduction#environment-requirements-2)
- [Add Dependencies](https://docs.z.ai/guides/develop/java/introduction#add-dependencies)
- [Get API Key](https://docs.z.ai/guides/develop/java/introduction#get-api-key)
- [Create Client](https://docs.z.ai/guides/develop/java/introduction#create-client)
- [Basic Conversation](https://docs.z.ai/guides/develop/java/introduction#basic-conversation)
- [Streaming Conversation](https://docs.z.ai/guides/develop/java/introduction#streaming-conversation)
- [Complete Example](https://docs.z.ai/guides/develop/java/introduction#complete-example)
- [Advanced Features](https://docs.z.ai/guides/develop/java/introduction#advanced-features)
- [Function Calling](https://docs.z.ai/guides/develop/java/introduction#function-calling)
- [Defining and Using Functions](https://docs.z.ai/guides/develop/java/introduction#defining-and-using-functions)
- [Getting Help](https://docs.z.ai/guides/develop/java/introduction#getting-help)

Z.AI Java SDK is the official Java development toolkit provided by Z.AI, offering Java developers convenient and efficient AI model integration solutions.

### [​](https://docs.z.ai/guides/develop/java/introduction\#core-advantages)  Core Advantages

## Enterprise-grade

Designed for enterprise applications, supports high concurrency and high availability

## Easy Integration

Clean API design, comprehensive documentation, quick integration into existing projects

## Type Safety

Complete type definitions, compile-time error checking, reducing runtime errors

## High Performance

Optimized network request handling, supports connection pooling and asynchronous calls

### [​](https://docs.z.ai/guides/develop/java/introduction\#supported-features)  Supported Features

- **💬 Chat Conversations**: Support for single-turn and multi-turn conversations, streaming and non-streaming responses
- **🔧 Function Calling**: Enable AI models to call your custom functions
- **👁️ Vision Understanding**: Image analysis, visual understanding
- **🎨 Image Generation**: Generate high-quality images from text descriptions
- **🎬 Video Generation**: Creative content generation from text to video
- **🔊 Speech Processing**: Speech-to-text, text-to-speech
- **📊 Text Embedding**: Text vectorization, supporting semantic search
- **🤖 Intelligent Assistants**: Build professional AI assistant applications

## [​](https://docs.z.ai/guides/develop/java/introduction\#technical-specifications)  Technical Specifications

### [​](https://docs.z.ai/guides/develop/java/introduction\#environment-requirements)  Environment Requirements

- **Java Version**: Java 1.8 or higher
- **Build Tools**: Maven 3.6+ or Gradle 6.0+
- **Network Requirements**: HTTPS connection support
- **API Key**: Valid Z.AI API key required

### [​](https://docs.z.ai/guides/develop/java/introduction\#dependency-management)  Dependency Management

The SDK adopts a modular design, allowing you to selectively import functional modules as needed:

- **Core Module**: Basic API calling functionality
- **Async Module**: Asynchronous and concurrent processing support
- **Utility Module**: Utility tools and auxiliary functions

## [​](https://docs.z.ai/guides/develop/java/introduction\#quick-start)  Quick Start

### [​](https://docs.z.ai/guides/develop/java/introduction\#environment-requirements-2)  Environment Requirements

## Java Version

Java 1.8 or higher

## Build Tools

Maven 3.6+ or Gradle 6.0+

Supports Java 8, 11, 17, 21 versions, cross-platform compatible with Windows, macOS, Linux

### [​](https://docs.z.ai/guides/develop/java/introduction\#add-dependencies)  Add Dependencies

- Maven

- Gradle


Copy

Ask AI

```
<dependency>
    <groupId>ai.z.openapi</groupId>
    <artifactId>zai-sdk</artifactId>
    <version>0.1.0</version>
</dependency>
```

### [​](https://docs.z.ai/guides/develop/java/introduction\#get-api-key)  Get API Key

1. Access [Z.AI Open Platform](https://z.ai/model-api), Register or Login.
2. Create an API Key in the [API Keys](https://z.ai/manage-apikey/apikey-list) management page.
3. Copy your API Key for use.

It is recommended to set the API Key as an environment variable: `export ZAI_API_KEY=your-api-key`

Z.AI domestic platform uses ZaiClient

Copy

Ask AI

```
API URL: https://api.z.ai/api/paas/v4/
```

#### [​](https://docs.z.ai/guides/develop/java/introduction\#create-client)  Create Client

- Environment Variable

- Direct Setting


Copy

Ask AI

```
import ai.z.openapi.ZaiClient;

public class QuickStart {
    public static void main(String[] args) {
        // Read API Key from environment variable
        ZaiClient client = ZaiClient.builder()
            .apiKey(System.getenv("ZAI_API_KEY"))
            .build();

        // Or use directly (if environment variable is set)
        ZaiClient client2 = ZaiClient.builder().build();
    }
}
```

#### [​](https://docs.z.ai/guides/develop/java/introduction\#basic-conversation)  Basic Conversation

Copy

Ask AI

```
import ai.z.openapi.ZaiClient;
import ai.z.openapi.service.model.*;
import ai.z.openapi.core.Constants;
import java.util.Arrays;

public class BasicChat {
    public static void main(String[] args) {
        // Initialize client
        ZaiClient client = ZaiClient.builder()
            .apiKey("YOUR_API_KEY")
            .build();

        // Create chat completion request
        ChatCompletionCreateParams request = ChatCompletionCreateParams.builder()
            .model("glm-4.6")
            .messages(Arrays.asList(
                ChatMessage.builder()
                    .role(ChatMessageRole.USER.value())
                    .content("Hello, please introduce yourself")
                    .build()
            ))
            .build();

        // Send request
        ChatCompletionResponse response = client.chat().createChatCompletion(request);

        // Get reply
        if (response.isSuccess()) {
            Object reply = response.getData().getChoices().get(0).getMessage().getContent();
            System.out.println("AI Reply: " + reply);
        } else {
            System.err.println("Error: " + response.getMsg());
        }
    }
}
```

#### [​](https://docs.z.ai/guides/develop/java/introduction\#streaming-conversation)  Streaming Conversation

Copy

Ask AI

```
import ai.z.openapi.ZaiClient;
import ai.z.openapi.service.model.*;
import ai.z.openapi.core.Constants;
import java.util.Arrays;

public class StreamingChat {
    public static void main(String[] args) {
        ZaiClient client = ZaiClient.builder()
            .apiKey("YOUR_API_KEY")
            .build();

        // Create streaming chat request
        ChatCompletionCreateParams request = ChatCompletionCreateParams.builder()
            .model("glm-4.6")
            .messages(Arrays.asList(
                ChatMessage.builder()
                    .role(ChatMessageRole.USER.value())
                    .content("Write a poem about spring")
                    .build()
            ))
            .stream(true)
            .build();

        // Handle streaming response
        ChatCompletionResponse response = client.chat().createChatCompletion(request);

        if (response.isSuccess() && response.getFlowable() != null) {
            response.getFlowable().subscribe(
                data -> {
                    // Handle streaming data chunks
                    if (data.getChoices() != null && !data.getChoices().isEmpty()) {
                        Delta content = data.getChoices().get(0).getDelta();
                        if (content != null) {
                            System.out.print(content);
                        }
                    }
                },
                error -> System.err.println("\nStreaming error: " + error.getMessage()),
                () -> System.out.println("\nStreaming completed")
            );
        }
    }
}
```

### [​](https://docs.z.ai/guides/develop/java/introduction\#complete-example)  Complete Example

Copy

Ask AI

```
import ai.z.openapi.ZaiClient;
import ai.z.openapi.service.model.*;
import ai.z.openapi.core.Constants;
import java.util.*;

public class ChatBot {
    private final ZaiClient client;
    private final List<ChatMessage> conversation;

    public ChatBot(String apiKey) {
        this.client = ZaiClient.builder()
            .apiKey(apiKey)
            .build();
        this.conversation = new ArrayList<>();
        // Add system message
        this.conversation.add(ChatMessage.builder()
            .role(ChatMessageRole.SYSTEM.value())
            .content("You are a friendly AI assistant")
            .build());
    }

    public Object chat(String userInput) {
        try {
            // Add user message
        conversation.add(ChatMessage.builder()
            .role(ChatMessageRole.USER.value())
            .content(userInput)
            .build());

        // Create request
        ChatCompletionCreateParams request = ChatCompletionCreateParams.builder()
            .model("glm-4.6")
            .messages(conversation)
            .temperature(0.6f)
            .maxTokens(1000)
            .build();

        // Send request
        ChatCompletionResponse response = client.chat().createChatCompletion(request);

        if (response.isSuccess()) {
            // Get AI response
            Object aiResponse = response.getData().getChoices().get(0).getMessage().getContent();

            // Add AI response to conversation history
            conversation.add(ChatMessage.builder()
                .role(ChatMessageRole.ASSISTANT.value())
                .content(aiResponse)
                .build());

            return aiResponse;
        } else {
            return "Error occurred: " + response.getMsg();
        }

    } catch (Exception e) {
        return "Error occurred: " + e.getMessage();
        }
    }

    public static void main(String[] args) {
        ChatBot bot = new ChatBot(System.getenv("ZAI_API_KEY"));
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to Z.ai chatbot! Type 'quit' to exit.");

        while (true) {
            System.out.print("You: ");
            String input = scanner.nextLine();

            if ("quit".equalsIgnoreCase(input)) {
                break;
            }

            Object response = bot.chat(input);
            System.out.println("AI: " + response);
        }

        System.out.println("Goodbye!");
        scanner.close();
    }
}
```

## [​](https://docs.z.ai/guides/develop/java/introduction\#advanced-features)  Advanced Features

### [​](https://docs.z.ai/guides/develop/java/introduction\#function-calling)  Function Calling

Function calling allows AI models to call functions you define to get real-time information or perform specific operations.

#### [​](https://docs.z.ai/guides/develop/java/introduction\#defining-and-using-functions)  Defining and Using Functions

Copy

Ask AI

```
import ai.z.openapi.ZaiClient;
import ai.z.openapi.service.model.*;
import ai.z.openapi.core.Constants;
import java.util.*;

public class FunctionCallingExample {

    // Simulate weather API
    public static Map<String, Object> getWeather(String location, String date) {
        Map<String, Object> weather = new HashMap<>();
        weather.put("location", location);
        weather.put("date", date != null ? date : "today");
        weather.put("weather", "sunny");
        weather.put("temperature", "25°C");
        weather.put("humidity", "60%");
        return weather;
    }

    // Simulate stock API
    public static Map<String, Object> getStockPrice(String symbol) {
        Map<String, Object> stock = new HashMap<>();
        stock.put("symbol", symbol);
        stock.put("price", 150.25);
        stock.put("change", "+2.5%");
        return stock;
    }

    public static void main(String[] args) {
        ZaiClient client = ZaiClient.builder()
            .apiKey(System.getenv("ZAI_API_KEY"))
            .build();

        // Define function tools
        Map<String, ChatFunctionParameterProperty> properties = new HashMap<>();
        ChatFunctionParameterProperty locationProperty = ChatFunctionParameterProperty
                .builder().type("string").description("City name, for example: Beijing").build();
        properties.put("location", locationProperty);
        ChatFunctionParameterProperty unitProperty = ChatFunctionParameterProperty
                .builder().type("string").enums(Arrays.asList("celsius", "fahrenheit")).build();
        properties.put("unit", unitProperty);
        ChatTool weatherTool = ChatTool.builder()
                .type(ChatToolType.FUNCTION.value())
                .function(ChatFunction.builder()
                        .name("get_weather")
                        .description("Get weather information for a specified location")
                        .parameters(ChatFunctionParameters.builder()
                                .type("object")
                                .properties(properties)
                                .required(Collections.singletonList("location"))
                                .build())
                        .build())
                .build();

        // Create request
        ChatCompletionCreateParams request = ChatCompletionCreateParams.builder()
                .model("glm-4.6")
                .messages(Collections.singletonList(
                        ChatMessage.builder()
                                .role(ChatMessageRole.USER.value())
                                .content("How's the weather in Beijing today?")
                                .build()
                ))
                .tools(Collections.singletonList(weatherTool))
                .toolChoice("auto")
                .build();

        // Send request
        ChatCompletionResponse response = client.chat().createChatCompletion(request);

        if (response.isSuccess()) {
            // Handle function calling
            ChatMessage assistantMessage = response.getData().getChoices().get(0).getMessage();
            if (assistantMessage.getToolCalls() != null && !assistantMessage.getToolCalls().isEmpty()) {
                for (ToolCalls toolCall : assistantMessage.getToolCalls()) {
                    String functionName = toolCall.getFunction().getName();

                    if ("get_weather".equals(functionName)) {
                        Map<String, Object> result = getWeather("Beijing", null);
                        System.out.println("Weather info: " + result);
                    }
                }
            } else {
                System.out.println(assistantMessage.getContent());
            }
        } else {
            System.err.println("Error: " + response.getMsg());
        }
    }
}
```

## [​](https://docs.z.ai/guides/develop/java/introduction\#getting-help)  Getting Help

[**GitHub Repository** \\
\\
View source code, submit issues, contribute](https://github.com/zai-org/z-ai-sdk-java) [**API Reference** \\
\\
View complete API documentation](https://docs.z.ai/api-reference) [**Example Projects** \\
\\
Browse more practical application examples](https://github.com/zai-org/z-ai-sdk-java/tree/main/samples) [**Best Practices** \\
\\
Learn best practices for SDK usage](https://github.com/zai-org/z-ai-sdk-java)

This SDK is developed based on the latest API specifications from Z.AI, ensuring synchronization with platform features. It is recommended to regularly update to the latest version for the best experience.

Was this page helpful?

YesNo

[Official Python SDK](https://docs.z.ai/guides/develop/python/introduction) [OpenAI Python SDK](https://docs.z.ai/guides/develop/openai/python)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.