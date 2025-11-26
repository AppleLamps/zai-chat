---
url: "https://docs.z.ai/api-reference/tools/web-search"
title: "Web Search - Z.AI DEVELOPER DOCUMENT"
---

[Skip to main content](https://docs.z.ai/api-reference/tools/web-search#content-area)

🚀 **GLM Coding Plan — built for devs: 3× usage, 1/7 cost** • [Limited-Time Offer ➞](https://z.ai/subscribe?utm_campaign=Platform_Ops&_channel_track_key=DaprgHIc)

[Z.AI DEVELOPER DOCUMENT home page![light logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/dark.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=75deefa9dea5bdbc84d4da68885c267f)![dark logo](https://mintcdn.com/zhipu-32152247/B_E8wI-eiNa1QlPV/logo/light.svg?fit=max&auto=format&n=B_E8wI-eiNa1QlPV&q=85&s=c1ecf1af358fa8eeab8c06052337f8f6)](https://z.ai/model-api)

English

Search...

Ctrl K

Search...

Navigation

Tool API

Web Search

[Guides](https://docs.z.ai/guides/overview/quick-start) [API Reference](https://docs.z.ai/api-reference/introduction) [Scenario Example](https://docs.z.ai/scenario-example/develop-tools/claude) [Coding Plan](https://docs.z.ai/devpack/overview) [Released Notes](https://docs.z.ai/release-notes/new-released) [Terms and Policy](https://docs.z.ai/legal-agreement/privacy-policy) [Help Center](https://docs.z.ai/help/faq)

cURL

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.z.ai/api/paas/v4/web_search \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "search_engine": "search-prime",
  "search_query": "<string>",
  "count": 25,
  "search_domain_filter": "<string>",
  "search_recency_filter": "oneDay",
  "request_id": "<string>",
  "user_id": "<string>"
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
  "search_result": [\
    {\
      "title": "<string>",\
      "content": "<string>",\
      "link": "<string>",\
      "media": "<string>",\
      "icon": "<string>",\
      "refer": "<string>",\
      "publish_date": "<string>"\
    }\
  ]
}
```

POST

/

paas

/

v4

/

web\_search

Try it

cURL

cURL

Copy

Ask AI

```
curl --request POST \
  --url https://api.z.ai/api/paas/v4/web_search \
  --header 'Authorization: Bearer <token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "search_engine": "search-prime",
  "search_query": "<string>",
  "count": 25,
  "search_domain_filter": "<string>",
  "search_recency_filter": "oneDay",
  "request_id": "<string>",
  "user_id": "<string>"
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
  "search_result": [\
    {\
      "title": "<string>",\
      "content": "<string>",\
      "link": "<string>",\
      "media": "<string>",\
      "icon": "<string>",\
      "refer": "<string>",\
      "publish_date": "<string>"\
    }\
  ]
}
```

#### Authorizations

[​](https://docs.z.ai/api-reference/tools/web-search#authorization-authorization)

Authorization

string

header

required

Use the following format for authentication: Bearer [<your api key>](https://z.ai/manage-apikey/apikey-list)

#### Headers

[​](https://docs.z.ai/api-reference/tools/web-search#parameter-accept-language)

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

[​](https://docs.z.ai/api-reference/tools/web-search#body-search-engine)

search\_engine

enum<string>

default:search-prime

required

The search engine code to call.
search-prime: Z.AI Premium Version Search Engine

Available options:

`search-prime`

Example:

`"search-prime"`

[​](https://docs.z.ai/api-reference/tools/web-search#body-search-query)

search\_query

string

required

The content to be searched.

[​](https://docs.z.ai/api-reference/tools/web-search#body-count)

count

integer

The number of results to return
Fillable range: `1-50`, maximum `50` results per single search
Default is `10`
Supported search engines:
`search_pro_jina`.

Required range: `1 <= x <= 50`

[​](https://docs.z.ai/api-reference/tools/web-search#body-search-domain-filter)

search\_domain\_filter

string

Used to limit the scope of search results and only return content from specified whitelist domains.
Whitelist: Directly enter the domain name (e.g., `www.example.com`)
Supported search engines:
`search_pro_jina`

[​](https://docs.z.ai/api-reference/tools/web-search#body-search-recency-filter)

search\_recency\_filter

enum<string>

Search for webpages within a specified time range.
Default is `noLimit`
Fillable values:
`oneDay`: within one day
`oneWeek`: within one week
`oneMonth`: within one month
`oneYear`: within one year
`noLimit`: no limit (default)
Supported search engines:
`search_pro_jina`

Available options:

`oneDay`,

`oneWeek`,

`oneMonth`,

`oneYear`,

`noLimit`

[​](https://docs.z.ai/api-reference/tools/web-search#body-request-id)

request\_id

string

User-provided unique identifier for distinguishing requests. If not provided, the platform will generate one.

[​](https://docs.z.ai/api-reference/tools/web-search#body-user-id)

user\_id

string

Unique ID of the end user, helping the platform intervene in illegal activities, inappropriate content generation, or other abuses. ID length: 6 to 128 characters.

#### Response

200

application/json

Processing successful

[​](https://docs.z.ai/api-reference/tools/web-search#response-id)

id

string

Task ID.

[​](https://docs.z.ai/api-reference/tools/web-search#response-created)

created

integer

Request creation time, Unix timestamp in seconds.

[​](https://docs.z.ai/api-reference/tools/web-search#response-search-result)

search\_result

object\[\]

Search results.

Hidechild attributes

[​](https://docs.z.ai/api-reference/tools/web-search#response-search-result-title)

title

string

Title.

[​](https://docs.z.ai/api-reference/tools/web-search#response-search-result-content)

content

string

Content summary.

[​](https://docs.z.ai/api-reference/tools/web-search#response-search-result-link)

link

string

Result URL.

[​](https://docs.z.ai/api-reference/tools/web-search#response-search-result-media)

media

string

Website name.

[​](https://docs.z.ai/api-reference/tools/web-search#response-search-result-icon)

icon

string

Website icon.

[​](https://docs.z.ai/api-reference/tools/web-search#response-search-result-refer)

refer

string

Index number.

[​](https://docs.z.ai/api-reference/tools/web-search#response-search-result-publish-date)

publish\_date

string

Website publication date.

Was this page helpful?

YesNo

[Retrieve Result](https://docs.z.ai/api-reference/video/get-video-status) [Web Reader](https://docs.z.ai/api-reference/tools/web-reader)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.