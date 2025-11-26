---
url: "https://docs.z.ai/scenario-example/develop-tools/gemini"
title: "Gemini CLI - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/scenario-example/develop-tools/gemini#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

Develop Tools

Gemini CLI

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

On this page

- [Step 1: Obtaining the Custom Version](https://docs.z.ai/scenario-example/develop-tools/gemini#step-1:-obtaining-the-custom-version)
- [1\. Cloning the Custom Repository](https://docs.z.ai/scenario-example/develop-tools/gemini#1-cloning-the-custom-repository)
- [2\. Switching to the Compatible Branch](https://docs.z.ai/scenario-example/develop-tools/gemini#2-switching-to-the-compatible-branch)
- [Step 2: Environment Configuration](https://docs.z.ai/scenario-example/develop-tools/gemini#step-2:-environment-configuration)
- [1\. Setting Environment Variables](https://docs.z.ai/scenario-example/develop-tools/gemini#1-setting-environment-variables)
- [Step 3: Installation and Launch](https://docs.z.ai/scenario-example/develop-tools/gemini#step-3:-installation-and-launch)
- [1\. System Requirements](https://docs.z.ai/scenario-example/develop-tools/gemini#1-system-requirements)
- [2\. Installing Dependencies](https://docs.z.ai/scenario-example/develop-tools/gemini#2-installing-dependencies)
- [3\. Launch Process](https://docs.z.ai/scenario-example/develop-tools/gemini#3-launch-process)
- [Step 4: Usage Results](https://docs.z.ai/scenario-example/develop-tools/gemini#step-4:-usage-results)

Gemini CLI is a command-line interface tool that can be made compatible with Z.AI’s GLM models by using a customized fork.

## [​](https://docs.z.ai/scenario-example/develop-tools/gemini\#step-1:-obtaining-the-custom-version)  Step 1: Obtaining the Custom Version

### [​](https://docs.z.ai/scenario-example/develop-tools/gemini\#1-cloning-the-custom-repository)  1\. Cloning the Custom Repository

Since the official Gemini CLI repository only supports Google’s Gemini models, we need to use a customized branch that supports OpenRouter compatibility:

Copy

Ask AI

```
git clone https://github.com/heartyguy/gemini-cli
cd gemini-cli
```

### [​](https://docs.z.ai/scenario-example/develop-tools/gemini\#2-switching-to-the-compatible-branch)  2\. Switching to the Compatible Branch

Copy

Ask AI

```
git checkout feature/openrouter-support
```

## [​](https://docs.z.ai/scenario-example/develop-tools/gemini\#step-2:-environment-configuration)  Step 2: Environment Configuration

### [​](https://docs.z.ai/scenario-example/develop-tools/gemini\#1-setting-environment-variables)  1\. Setting Environment Variables

![Description](https://cdn.bigmodel.cn/markdown/1753631661971gemini-1.png?attname=gemini-1.png)Configure the API base URL:

Copy

Ask AI

```
export OPENROUTER_BASE_URL="https://api.z.ai/api/coding/paas/v4"
```

Configure the API Key:

Copy

Ask AI

```
export OPENROUTER_API_KEY="your_api_key"
```

## [​](https://docs.z.ai/scenario-example/develop-tools/gemini\#step-3:-installation-and-launch)  Step 3: Installation and Launch

### [​](https://docs.z.ai/scenario-example/develop-tools/gemini\#1-system-requirements)  1\. System Requirements

Ensure your Node.js version is >= 18.

### [​](https://docs.z.ai/scenario-example/develop-tools/gemini\#2-installing-dependencies)  2\. Installing Dependencies

Copy

Ask AI

```
npm install
```

### [​](https://docs.z.ai/scenario-example/develop-tools/gemini\#3-launch-process)  3\. Launch Process

![Description](https://cdn.bigmodel.cn/markdown/1753631666323gemini-2.png?attname=gemini-2.png)After launching, complete the following steps:

1. Select a background color theme.
2. User login (recommended to use a Google account for authentication, which will redirect to a webpage for verification).

## [​](https://docs.z.ai/scenario-example/develop-tools/gemini\#step-4:-usage-results)  Step 4: Usage Results

![Description](https://cdn.bigmodel.cn/markdown/1753631670672gemini-3.png?attname=gemini-3.png)Once configured, you can use Z.AI’s GLM models in the command line for conversations and code generation.

Was this page helpful?

YesNo

[Roo Code](https://docs.z.ai/scenario-example/develop-tools/roo) [Grok CLI](https://docs.z.ai/scenario-example/develop-tools/gork)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Description](https://cdn.bigmodel.cn/markdown/1753631661971gemini-1.png?attname=gemini-1.png)

![Description](https://cdn.bigmodel.cn/markdown/1753631666323gemini-2.png?attname=gemini-2.png)

![Description](https://cdn.bigmodel.cn/markdown/1753631670672gemini-3.png?attname=gemini-3.png)