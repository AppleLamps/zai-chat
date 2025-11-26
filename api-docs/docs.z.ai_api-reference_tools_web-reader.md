---
url: "https://docs.z.ai/api-reference/tools/web-reader"
title: "Web Reader - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/api-reference/tools/web-reader#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

Tool API

Web Reader

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

Web Reader

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.z.ai/api/paas/v4/reader \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "url": "https://www.example.com"
}'
```

200

default

Copy

Ask AI

```
{
  "id": "<string>",
  "created": 123,
  "request_id": "<string>",
  "model": "<string>",
  "reader_result": {
    "content": "<string>",
    "description": "<string>",
    "title": "<string>",
    "url": "<string>",
    "external": {
      "stylesheet": {}
    },
    "metadata": {
      "keywords": "<string>",
      "viewport": "<string>",
      "description": "<string>",
      "format-detection": "<string>"
    }
  }
}
```

POST

/

paas

/

v4

/

reader

Try it

Web Reader

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.z.ai/api/paas/v4/reader \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "url": "https://www.example.com"
}'
```

200

default

Copy

Ask AI

```
{
  "id": "<string>",
  "created": 123,
  "request_id": "<string>",
  "model": "<string>",
  "reader_result": {
    "content": "<string>",
    "description": "<string>",
    "title": "<string>",
    "url": "<string>",
    "external": {
      "stylesheet": {}
    },
    "metadata": {
      "keywords": "<string>",
      "viewport": "<string>",
      "description": "<string>",
      "format-detection": "<string>"
    }
  }
}
```

#### Authorizations

[​](https://docs.z.ai/api-reference/tools/web-reader#authorization-authorization)

Authorization

string

header

required

Use the following format for authentication: Bearer [<your api key>](https://z.ai/manage-apikey/apikey-list)

#### Body

application/json

[​](https://docs.z.ai/api-reference/tools/web-reader#body-url)

url

string

required

The URL to retrieve

[​](https://docs.z.ai/api-reference/tools/web-reader#body-timeout)

timeout

integer

default:20

Request timeout in seconds. Default is 20

[​](https://docs.z.ai/api-reference/tools/web-reader#body-no-cache)

no\_cache

boolean

default:false

Whether to disable caching (true/false). Default is false

[​](https://docs.z.ai/api-reference/tools/web-reader#body-return-format)

return\_format

string

default:markdown

Return format (e.g., markdown, text). Default is markdown

[​](https://docs.z.ai/api-reference/tools/web-reader#body-retain-images)

retain\_images

boolean

default:true

Whether to retain images (true/false). Default is true

[​](https://docs.z.ai/api-reference/tools/web-reader#body-no-gfm)

no\_gfm

boolean

default:false

Whether to disable GitHub Flavored Markdown (true/false). Default is false

[​](https://docs.z.ai/api-reference/tools/web-reader#body-keep-img-data-url)

keep\_img\_data\_url

boolean

default:false

Whether to keep image data URLs (true/false). Default is false

[​](https://docs.z.ai/api-reference/tools/web-reader#body-with-images-summary)

with\_images\_summary

boolean

default:false

Whether to include image summary (true/false). Default is false

[​](https://docs.z.ai/api-reference/tools/web-reader#body-with-links-summary)

with\_links\_summary

boolean

default:false

Whether to include links summary (true/false). Default is false

#### Response

200

application/json

Processing successful

[​](https://docs.z.ai/api-reference/tools/web-reader#response-id)

id

string

Task ID

[​](https://docs.z.ai/api-reference/tools/web-reader#response-created)

created

integer

Request creation time as a Unix timestamp in seconds

[​](https://docs.z.ai/api-reference/tools/web-reader#response-request-id)

request\_id

string

Client-provided unique identifier to distinguish requests. If not provided, the platform will generate one.

[​](https://docs.z.ai/api-reference/tools/web-reader#response-model)

model

string

Model code

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result)

reader\_result

object

Web reading result

Hidechild attributes

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-content)

reader\_result.content

string

Main content parsed from the page (body, images, links, etc.)

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-description)

reader\_result.description

string

Brief description of the page

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-title)

reader\_result.title

string

Page title

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-url)

reader\_result.url

string

Original page URL

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-external)

reader\_result.external

object

External resources referenced by the page

Hidechild attributes

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-external-stylesheet)

reader\_result.external.stylesheet

object

Collection of external stylesheets

Hidechild attributes

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-external-stylesheet-key)

reader\_result.external.stylesheet.{key}

object

Hidechild attributes

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-external-stylesheet-key-type)

reader\_result.external.stylesheet.{key}.type

string

Stylesheet MIME type, typically `text/css`

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-metadata)

reader\_result.metadata

object

Page metadata

Hidechild attributes

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-metadata-keywords)

reader\_result.metadata.keywords

string

Page keywords

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-metadata-viewport)

reader\_result.metadata.viewport

string

Viewport settings

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-metadata-description)

reader\_result.metadata.description

string

Meta description

[​](https://docs.z.ai/api-reference/tools/web-reader#response-reader-result-metadata-format-detection)

reader\_result.metadata.format-detection

string

Format detection settings, e.g., `telephone=no`

Was this page helpful?

YesNo

[Web Search](https://docs.z.ai/api-reference/tools/web-search) [Agent Chat](https://docs.z.ai/api-reference/agents/agent)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.