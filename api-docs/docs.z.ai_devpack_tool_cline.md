---
url: "https://docs.z.ai/devpack/tool/cline"
title: "Cline - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/devpack/tool/cline#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

Tool Guide

Cline

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

On this page

- [Step 1: Installing the Cline Plugin](https://docs.z.ai/devpack/tool/cline#step-1:-installing-the-cline-plugin)
- [1\. Open the Extensions Marketplace](https://docs.z.ai/devpack/tool/cline#1-open-the-extensions-marketplace)
- [2\. Install the Plugin](https://docs.z.ai/devpack/tool/cline#2-install-the-plugin)
- [Step 2: Configuring API Settings](https://docs.z.ai/devpack/tool/cline#step-2:-configuring-api-settings)
- [1\. Select API Key Method](https://docs.z.ai/devpack/tool/cline#1-select-api-key-method)
- [2\. Enter Configuration Information](https://docs.z.ai/devpack/tool/cline#2-enter-configuration-information)
- [Step 3: Getting Started](https://docs.z.ai/devpack/tool/cline#step-3:-getting-started)
- [Step 4: Vision Search Reader MCP](https://docs.z.ai/devpack/tool/cline#step-4:-vision-search-reader-mcp)

Cline is a powerful VS Code plugin that lets you use AI models directly in your editor for code generation, file operations, and more. It not only accelerates your workflow but also provides contextual understanding and intelligent suggestions for complex tasks.Cline is even more capable with the [GLM Coding Plan](https://z.ai/subscribe?utm_source=zai&utm_medium=link&utm_term=devpack-integration&utm_campaign=Platform_Ops&_channel_track_key=w3mNdY8g), giving you more usage at a lower cost, so you can handle code generation, file management, and multimodal interactions with ease.

Using the GLM Coding Plan, you need to configure the dedicated Coding API [https://api.z.ai/api/coding/paas/v4](https://api.z.ai/api/coding/paas/v4) instead of the General API [https://api.z.ai/api/paas/v4](https://api.z.ai/api/paas/v4)

For users who have used the service before 2025-09-30:

The default model has been upgraded to GLM-4.6. Please update your config accordingly.

## [​](https://docs.z.ai/devpack/tool/cline\#step-1:-installing-the-cline-plugin)  Step 1: Installing the Cline Plugin

### [​](https://docs.z.ai/devpack/tool/cline\#1-open-the-extensions-marketplace)  1\. Open the Extensions Marketplace

a. Open VS Codeb. Click the Extensions Marketplace icon on the leftc. Enter `cline` in the search boxd. Locate the `Cline` extension![Description](https://cdn.bigmodel.cn/markdown/1753688113562c1.png?attname=c1.png)

### [​](https://docs.z.ai/devpack/tool/cline\#2-install-the-plugin)  2\. Install the Plugin

a. Click the `Install` button to installb. After installation, choose to trust the developer![Description](https://cdn.bigmodel.cn/markdown/1753688124582c2.jpg?attname=c2.jpg)

## [​](https://docs.z.ai/devpack/tool/cline\#step-2:-configuring-api-settings)  Step 2: Configuring API Settings

### [​](https://docs.z.ai/devpack/tool/cline\#1-select-api-key-method)  1\. Select API Key Method

Choose `Use your own API Key`![Description](https://cdn.bigmodel.cn/markdown/1753688131403c3.png?attname=c3.png)

### [​](https://docs.z.ai/devpack/tool/cline\#2-enter-configuration-information)  2\. Enter Configuration Information

Fill in the relevant information according to the following settings:

- **API Provider**: Select `OpenAI Compatible`
- **Base URL**: Enter `https://api.z.ai/api/coding/paas/v4`
- **API Key**: Enter your Z.AI API Key
- **Model**: Select “Use custom” and enter the model name (e.g., `glm-4.6`)
- **Other Configurations**:

  - Unchecking **Support Images**
  - Adjust **Context Window Size** to `204800`
  - Adjust `temperature` and other params according to your task requirements.

![Description](https://cdn.bigmodel.cn/markdown/1759418929636image.png?attname=image.png)

## [​](https://docs.z.ai/devpack/tool/cline\#step-3:-getting-started)  Step 3: Getting Started

Once configured, you can enter your requirements in the input box to let the model assist you with various tasks, such as:

- Creating and editing files
- Generating code
- Refactoring code
- Explaining code logic
- Debugging issues

![Description](https://cdn.bigmodel.cn/markdown/1753688145687c5.png?attname=c5.png)

## [​](https://docs.z.ai/devpack/tool/cline\#step-4:-vision-search-reader-mcp)  Step 4: Vision Search Reader MCP

Refer to the [Vision MCP Server](https://docs.z.ai/devpack/mcp/vision-mcp-server) , [Search MCP Server](https://docs.z.ai/devpack/mcp/search-mcp-server) and [Web Reader MCP Server](https://docs.z.ai/devpack/mcp/reader-mcp-server) documentation; once configured, you can use them in Cline.

Was this page helpful?

YesNo

[Claude Code IDE Plugin](https://docs.z.ai/devpack/tool/claude-for-ide) [TRAE](https://docs.z.ai/devpack/tool/trae)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Description](https://cdn.bigmodel.cn/markdown/1753688113562c1.png?attname=c1.png)

![Description](https://cdn.bigmodel.cn/markdown/1753688124582c2.jpg?attname=c2.jpg)

![Description](https://cdn.bigmodel.cn/markdown/1753688131403c3.png?attname=c3.png)

![Description](https://cdn.bigmodel.cn/markdown/1759418929636image.png?attname=image.png)

![Description](https://cdn.bigmodel.cn/markdown/1753688145687c5.png?attname=c5.png)