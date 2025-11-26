---
url: "https://docs.z.ai/api-reference/agents/agent"
title: "Agent Chat - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/api-reference/agents/agent#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

Agent API

Agent Chat

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

cURL

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.z.ai/api/v1/agents \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "agent_id": "general_translation",
  "stream": true,
  "messages": [\
    {\
      "role": "user",\
      "content": [\
        {\
          "type": "text",\
          "text": "<string>"\
        }\
      ]\
    }\
  ],
  "custom_variables": {
    "source_lang": "auto",
    "target_lang": "zh-CN",
    "glossary": "<string>",
    "strategy": "general",
    "strategy_config": {
      "general": {
        "suggestion": "<string>"
      },
      "cot": {
        "reason_lang": "from"
      }
    }
  }
}'
```

200

General Translation

Copy

Ask AI

```
{
  "id": "<string>",
  "agent_id": "<string>",
  "choices": [\
    {\
      "index": 123,\
      "finish_reason": "<string>",\
      "messages": [\
        {\
          "role": "<string>",\
          "content": {\
            "text": "<string>",\
            "type": "<string>"\
          }\
        }\
      ]\
    }\
  ],
  "usage": {
    "prompt_tokens": 123,
    "completion_tokens": 123,
    "total_tokens": 123,
    "total_calls": 123
  }
}
```

POST

/

v1

/

agents

Try it

cURL

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.z.ai/api/v1/agents \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "agent_id": "general_translation",
  "stream": true,
  "messages": [\
    {\
      "role": "user",\
      "content": [\
        {\
          "type": "text",\
          "text": "<string>"\
        }\
      ]\
    }\
  ],
  "custom_variables": {
    "source_lang": "auto",
    "target_lang": "zh-CN",
    "glossary": "<string>",
    "strategy": "general",
    "strategy_config": {
      "general": {
        "suggestion": "<string>"
      },
      "cot": {
        "reason_lang": "from"
      }
    }
  }
}'
```

200

General Translation

Copy

Ask AI

```
{
  "id": "<string>",
  "agent_id": "<string>",
  "choices": [\
    {\
      "index": 123,\
      "finish_reason": "<string>",\
      "messages": [\
        {\
          "role": "<string>",\
          "content": {\
            "text": "<string>",\
            "type": "<string>"\
          }\
        }\
      ]\
    }\
  ],
  "usage": {
    "prompt_tokens": 123,
    "completion_tokens": 123,
    "total_tokens": 123,
    "total_calls": 123
  }
}
```

#### Authorizations

[​](https://docs.z.ai/api-reference/agents/agent#authorization-authorization)

Authorization

string

header

required

Use the following format for authentication: Bearer [<your api key>](https://z.ai/manage-apikey/apikey-list)

#### Headers

[​](https://docs.z.ai/api-reference/agents/agent#parameter-accept-language)

Accept-Language

enum<string>

default:en-US,en

Config desired response language for HTTP requests.

Available options:

`en-US,en`

Example:

`"en-US,en"`

#### Body

application/json

- General Translation

- Popular Special Effects Videos

- GLM Slide/Poster


[​](https://docs.z.ai/api-reference/agents/agent#body-agent-id)

agent\_id

enum<string>

required

Agent ID: `general_translation`.

Available options:

`general_translation`

[​](https://docs.z.ai/api-reference/agents/agent#body-messages)

messages

object\[\]

required

Session message body.

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent#body-messages-role)

role

enum<string>

default:user

required

User input role: `user`

Available options:

`user`

Example:

`"user"`

[​](https://docs.z.ai/api-reference/agents/agent#body-messages-content)

content

object\[\]

required

Content list.

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent#body-content-type)

type

enum<string>

default:text

required

Supported type: `text`.

Available options:

`text`

[​](https://docs.z.ai/api-reference/agents/agent#body-content-text)

text

string

required

User text input.

[​](https://docs.z.ai/api-reference/agents/agent#body-stream)

stream

boolean

False for sync calls (default). True for streaming.

[​](https://docs.z.ai/api-reference/agents/agent#body-custom-variables)

custom\_variables

object

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent#body-custom-variables-source-lang)

custom\_variables.source\_lang

enum<string>

Supported language codes (default: `auto`):

- `auto`: Auto Detect
- `zh-CN`: Simplified Chinese
- `zh-TW`: Traditional Chinese
- `wyw`: Classical Chinese
- `yue`: Cantonese
- `en`: English
- `ja`: Japanese
- `ko`: Korean
- `fr`: French
- `de`: German
- `es`: Spanish
- `ru`: Russian
- `pt`: Portuguese
- `it`: Italian
- `ar`: Arabic
- `hi`: Hindi
- `bg`: Bulgarian
- `cs`: Czech
- `da`: Danish
- `el`: Greek
- `et`: Estonian
- `fi`: Finnish
- `hu`: Hungarian
- `id`: Indonesian
- `lt`: Lithuanian
- `lv`: Latvian
- `nl`: Dutch
- `no`: Norwegian Bokmål
- `pl`: Polish
- `ro`: Romanian
- `sk`: Slovak
- `sl`: Slovenian
- `sv`: Swedish
- `th`: Thai
- `tr`: Turkish
- `uk`: Ukrainian
- `vi`: Vietnamese
- `my`: Burmese
- `ms`: Malay
- `Pinyin`: Pinyin
- `IPA`: International Phonetic Alphabet

Available options:

`auto`,

`zh-CN`,

`zh-TW`,

`wyw`,

`yue`,

`en`,

`ja`,

`ko`,

`fr`,

`de`,

`es`,

`ru`,

`pt`,

`it`,

`ar`,

`hi`,

`bg`,

`cs`,

`da`,

`el`,

`et`,

`fi`,

`hu`,

`id`,

`lt`,

`lv`,

`nl`,

`no`,

`pl`,

`ro`,

`sk`,

`sl`,

`sv`,

`th`,

`tr`,

`uk`,

`vi`,

`my`,

`ms`,

`Pinyin`,

`IPA`

[​](https://docs.z.ai/api-reference/agents/agent#body-custom-variables-target-lang)

custom\_variables.target\_lang

enum<string>

Target language code (default: `zh-CN`):

- `zh-CN`: Simplified Chinese
- `zh-TW`: Traditional Chinese
- `wyw`: Classical Chinese
- `yue`: Cantonese
- `en`: English
- `en-GB`: English (British)
- `en-US`: English (American)
- `ja`: Japanese
- `ko`: Korean
- `fr`: French
- `de`: German
- `es`: Spanish
- `ru`: Russian
- `pt`: Portuguese
- `it`: Italian
- `ar`: Arabic
- `hi`: Hindi
- `bg`: Bulgarian
- `cs`: Czech
- `da`: Danish
- `el`: Greek
- `et`: Estonian
- `fi`: Finnish
- `hu`: Hungarian
- `id`: Indonesian
- `lt`: Lithuanian
- `lv`: Latvian
- `nl`: Dutch
- `no`: Norwegian Bokmål
- `pl`: Polish
- `ro`: Romanian
- `sk`: Slovak
- `sl`: Slovenian
- `sv`: Swedish
- `th`: Thai
- `tr`: Turkish
- `uk`: Ukrainian
- `vi`: Vietnamese
- `my`: Burmese
- `ms`: Malay
- `Pinyin`: Pinyin
- `IPA`: International Phonetic Alphabet
.

Available options:

`zh-CN`,

`zh-TW`,

`wyw`,

`yue`,

`en`,

`en-GB`,

`en-US`,

`ja`,

`ko`,

`fr`,

`de`,

`es`,

`ru`,

`pt`,

`it`,

`ar`,

`hi`,

`bg`,

`cs`,

`da`,

`el`,

`et`,

`fi`,

`hu`,

`id`,

`lt`,

`lv`,

`nl`,

`no`,

`pl`,

`ro`,

`sk`,

`sl`,

`sv`,

`th`,

`tr`,

`uk`,

`vi`,

`my`,

`ms`,

`Pinyin`,

`IPA`

[​](https://docs.z.ai/api-reference/agents/agent#body-custom-variables-glossary)

custom\_variables.glossary

string

Glossary ID.

[​](https://docs.z.ai/api-reference/agents/agent#body-custom-variables-strategy)

custom\_variables.strategy

enum<string>

Translation strategy (default: `general`)，Optional:

- `general`: General Translation
- `paraphrase`: Paraphrase Translation
- `two_step`: Two-Step Translation
- `three_step`: Three-Stage Translation
- `reflection`: Reflection Translation; cot: COT Translation

Available options:

`general`,

`paraphrase`,

`two_step`,

`three_step`,

`reflection`

[​](https://docs.z.ai/api-reference/agents/agent#body-custom-variables-strategy-config)

custom\_variables.strategy\_config

object

Strategy parameters.

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent#body-custom-variables-strategy-config-general)

custom\_variables.strategy\_config.general

object

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent#body-custom-variables-strategy-config-general-suggestion)

custom\_variables.strategy\_config.general.suggestion

string

Translation suggestions or style requirements (e.g., terminology mapping, style guidelines).

[​](https://docs.z.ai/api-reference/agents/agent#body-custom-variables-strategy-config-cot)

custom\_variables.strategy\_config.cot

object

Parameters when strategy is `cot`.

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent#body-custom-variables-strategy-config-cot-reason-lang)

custom\_variables.strategy\_config.cot.reason\_lang

enum<string>

Language for translation reasoning, values: \[`from`｜`to`\], default: `to`.

Available options:

`from`,

`to`

#### Response

200

application/json

Processing successful

- General Translation

- Popular Special Effects Videos

- GLM Slide/Poster


[​](https://docs.z.ai/api-reference/agents/agent#response-id)

id

string

Task ID.

[​](https://docs.z.ai/api-reference/agents/agent#response-agent-id)

agent\_id

string

Agent ID.

[​](https://docs.z.ai/api-reference/agents/agent#response-status)

status

string

Task status.

[​](https://docs.z.ai/api-reference/agents/agent#response-choices)

choices

object\[\]

Model output content.

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent#response-choices-index)

index

integer

Result index.

[​](https://docs.z.ai/api-reference/agents/agent#response-choices-finish-reason)

finish\_reason

string

Termination reason: `stop` (normal completion), `tool_calls` (model calls), `length` (token limit exceeded), `sensitive` (content flagged), `network_error` (model inference error).

[​](https://docs.z.ai/api-reference/agents/agent#response-choices-messages)

messages

object

Model response message.

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent#response-messages-role)

messages.role

string

Dialog role (default: `assistant`).

[​](https://docs.z.ai/api-reference/agents/agent#response-messages-content)

messages.content

object

Inference result

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent#response-messages-content-type)

messages.content.type

string

Result type.

[​](https://docs.z.ai/api-reference/agents/agent#response-messages-content-text)

messages.content.text

string

Result content.

[​](https://docs.z.ai/api-reference/agents/agent#response-usage)

usage

object

Token usage statistics.

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent#response-usage-prompt-tokens)

usage.prompt\_tokens

integer

Input tokens count.

[​](https://docs.z.ai/api-reference/agents/agent#response-usage-completion-tokens)

usage.completion\_tokens

integer

Output tokens count.

[​](https://docs.z.ai/api-reference/agents/agent#response-usage-total-tokens)

usage.total\_tokens

integer

Total tokens count.

[​](https://docs.z.ai/api-reference/agents/agent#response-usage-total-calls)

usage.total\_calls

integer

Total number of calls

Was this page helpful?

YesNo

[Web Reader](https://docs.z.ai/api-reference/tools/web-reader) [File Upload](https://docs.z.ai/api-reference/agents/file-upload)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.