---
url: "https://docs.z.ai/api-reference/agents/agent-conversation"
title: "Conversation History - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/api-reference/agents/agent-conversation#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

Agent API

Conversation History

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

cURL

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.z.ai/api/v1/agents/conversation \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "agent_id": "<string>",
  "conversation_id": "<string>",
  "custom_variables": {
    "include_pdf": true,
    "pages": [\
      {\
        "position": 123,\
        "width": 123,\
        "height": 123\
      }\
    ]
  }
}'
```

200

default

Copy

Ask AI

```
{
  "conversation_id": "<string>",
  "agent_id": "<string>",
  "choices": [\
    {\
      "message": [\
        {\
          "role": "<string>",\
          "content": [\
            {\
              "type": "<string>",\
              "tag_cn": "<string>",\
              "tag_en": "<string>",\
              "file_url": "<string>",\
              "image_url": "<string>"\
            }\
          ]\
        }\
      ]\
    }\
  ],
  "error": {
    "code": "<string>",
    "message": "<string>"
  }
}
```

POST

/

v1

/

agents

/

conversation

Try it

cURL

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.z.ai/api/v1/agents/conversation \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "agent_id": "<string>",
  "conversation_id": "<string>",
  "custom_variables": {
    "include_pdf": true,
    "pages": [\
      {\
        "position": 123,\
        "width": 123,\
        "height": 123\
      }\
    ]
  }
}'
```

200

default

Copy

Ask AI

```
{
  "conversation_id": "<string>",
  "agent_id": "<string>",
  "choices": [\
    {\
      "message": [\
        {\
          "role": "<string>",\
          "content": [\
            {\
              "type": "<string>",\
              "tag_cn": "<string>",\
              "tag_en": "<string>",\
              "file_url": "<string>",\
              "image_url": "<string>"\
            }\
          ]\
        }\
      ]\
    }\
  ],
  "error": {
    "code": "<string>",
    "message": "<string>"
  }
}
```

#### Authorizations

[​](https://docs.z.ai/api-reference/agents/agent-conversation#authorization-authorization)

Authorization

string

header

required

Use the following format for authentication: Bearer [<your api key>](https://z.ai/manage-apikey/apikey-list)

#### Headers

[​](https://docs.z.ai/api-reference/agents/agent-conversation#parameter-accept-language)

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

[​](https://docs.z.ai/api-reference/agents/agent-conversation#body-agent-id)

agent\_id

string

Agent ID

[​](https://docs.z.ai/api-reference/agents/agent-conversation#body-conversation-id)

conversation\_id

string

Conversation ID

[​](https://docs.z.ai/api-reference/agents/agent-conversation#body-custom-variables)

custom\_variables

object

Custom variables

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent-conversation#body-custom-variables-include-pdf)

custom\_variables.include\_pdf

boolean

Is export the pdf file

[​](https://docs.z.ai/api-reference/agents/agent-conversation#body-custom-variables-pages)

custom\_variables.pages

object\[\]

Slides Pages

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent-conversation#body-custom-variables-pages-position)

position

number

Slide Page Position

[​](https://docs.z.ai/api-reference/agents/agent-conversation#body-custom-variables-pages-width)

width

number

Slide Width, unit: pt

[​](https://docs.z.ai/api-reference/agents/agent-conversation#body-custom-variables-pages-height)

height

number

Slide Height, unit: pt

#### Response

200

application/json

Processing successful

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-conversation-id)

conversation\_id

string

Conversation ID

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-agent-id)

agent\_id

string

Agent ID

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-choices)

choices

object\[\]

Agent output.

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-choices-message)

message

object\[\]

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-message-role)

role

string

Role: fixed as `assistant`.

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-message-content)

content

object\[\]

Content metadata

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-content-type)

type

string

Response Content type: file\_url、image\_url

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-content-tag-cn)

tag\_cn

string

CN Tag.

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-content-tag-en)

tag\_en

string

EN Tag.

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-content-file-url)

file\_url

string

Output file\_url content when type is file\_url

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-content-image-url)

image\_url

string

Output image\_url content when type is image\_url

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-error)

error

object

Hidechild attributes

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-error-code)

error.code

string

Error code.

[​](https://docs.z.ai/api-reference/agents/agent-conversation#response-error-message)

error.message

string

Error message.

Was this page helpful?

YesNo

[Retrieve Result](https://docs.z.ai/api-reference/agents/get-async-result)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.