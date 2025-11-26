---
url: "https://docs.z.ai/scenario-example/develop-tools/gork"
title: "Grok CLI - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/scenario-example/develop-tools/gork#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

Develop Tools

Grok CLI

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

On this page

- [Step 1: Installing Grok CLI](https://docs.z.ai/scenario-example/develop-tools/gork#step-1:-installing-grok-cli)
- [Step 2: Environment Configuration](https://docs.z.ai/scenario-example/develop-tools/gork#step-2:-environment-configuration)
- [Step 3: Getting Started](https://docs.z.ai/scenario-example/develop-tools/gork#step-3:-getting-started)
- [Notes](https://docs.z.ai/scenario-example/develop-tools/gork#notes)

Grok CLI is a streamlined command-line AI assistant that enables quick access to Z.AI’s GLM models for conversation and code generation.

## [​](https://docs.z.ai/scenario-example/develop-tools/gork\#step-1:-installing-grok-cli)  Step 1: Installing Grok CLI

Install Grok CLI globally via npm:

Copy

Ask AI

```
npm install -g @vibe-kit/grok-cli
```

## [​](https://docs.z.ai/scenario-example/develop-tools/gork\#step-2:-environment-configuration)  Step 2: Environment Configuration

Set the API base URL and API Key:

Copy

Ask AI

```
export GROK_BASE_URL="https://api.z.ai/api/coding/paas/v4"
export GROK_API_KEY="your_api_key"
```

## [​](https://docs.z.ai/scenario-example/develop-tools/gork\#step-3:-getting-started)  Step 3: Getting Started

Launch Grok CLI with a specified model:

Copy

Ask AI

```
grok --model glm-4.6
```

![Description](https://cdn.bigmodel.cn/markdown/1753631674840gemini-4.png?attname=gemini-4.png)

## [​](https://docs.z.ai/scenario-example/develop-tools/gork\#notes)  Notes

> **Important Note**: Grok CLI currently has limited compatibility with thinking models, and thinking content will be displayed in full. Recommendations:
>
> - Wait for Grok CLI to improve compatibility with thinking models
> - Or use non-thinking versions of the models

Was this page helpful?

YesNo

[Gemini CLI](https://docs.z.ai/scenario-example/develop-tools/gemini)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Description](https://cdn.bigmodel.cn/markdown/1753631674840gemini-4.png?attname=gemini-4.png)