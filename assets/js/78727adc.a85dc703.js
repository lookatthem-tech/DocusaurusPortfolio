"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>h});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)l=s[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)l=s[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var d=a.createContext({}),y=function(e){var t=a.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},c=function(e){var t=y(e.components);return a.createElement(d.Provider,{value:t},e.children)},i="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),i=y(l),p=n,h=i["".concat(d,".").concat(p)]||i[p]||u[p]||s;return l?a.createElement(h,o(o({ref:t},c),{},{components:l})):a.createElement(h,o({ref:t},c))}));function h(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=l.length,o=new Array(s);o[0]=p;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[i]="string"==typeof e?e:n,o[1]=r;for(var y=2;y<s;y++)o[y]=l[y];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}p.displayName="MDXCreateElement"},4591:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>y});var a=l(7462),n=(l(7294),l(3905));const s={title:"Refresh and Access Token Overview",more_data:["Can be provided",{as:"objects"}],or:"arrays"},o="Refresh and Access Tokens",r={unversionedId:"API Docs/ApiTwoCol",id:"API Docs/ApiTwoCol",title:"Refresh and Access Token Overview",description:"Token Authentication and Management APIs",source:"@site/docs/API Docs/ApiTwoCol.md",sourceDirName:"API Docs",slug:"/API Docs/ApiTwoCol",permalink:"/docs/API Docs/ApiTwoCol",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API Docs/ApiTwoCol.md",tags:[],version:"current",frontMatter:{title:"Refresh and Access Token Overview",more_data:["Can be provided",{as:"objects"}],or:"arrays"},sidebar:"tutorialSidebar",previous:{title:"API docs",permalink:"/docs/API Docs/"},next:{title:"Swagger Petstore Sample",permalink:"/docs/API Docs/intro001"}},d={},y=[{value:"Token Authentication and Management APIs",id:"token-authentication-and-management-apis",level:2},{value:"Description",id:"description",level:2},{value:"Remember",id:"remember",level:2},{value:"Open API 3.0 Specification",id:"open-api-30-specification",level:2},{value:"Create RefreshToken",id:"create-refreshtoken",level:2},{value:"URL",id:"url",level:3},{value:"Data Parameters",id:"data-parameters",level:3},{value:"Response Structure",id:"response-structure",level:3},{value:"All Responses",id:"all-responses",level:4},{value:"Code Samples",id:"code-samples",level:3},{value:"cURL",id:"curl",level:4},{value:"Python",id:"python",level:4}],c={toc:y},i="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(i,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"refresh-and-access-tokens"},"Refresh and Access Tokens"),(0,n.kt)("h2",{id:"token-authentication-and-management-apis"},"Token Authentication and Management APIs"),(0,n.kt)("p",null,"Public APIs for managing RefreshTokens and APIAccessTokens for the user."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If your Organization is using SSO, like Okta, LDAP, and etc., you need to use the UI to create a RefreshToken by going to base-url/account/auth.")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"APIAccessToken:")," A short-lived access token, which can be passed as the value for the 'TOKEN' header in the requests for other APIs.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"RefreshToken:")," A long living token the users can use to manage and create API Access Tokens, which can be used to interact with the other APIs."))),(0,n.kt)("h2",{id:"remember"},"Remember"),(0,n.kt)("p",null,"The default expiration times for RefreshToken and APIAccessToken are 60 days and 24 hours respectively. They can be configured using the ","_","conf by the Server Admins if you need different expiration times. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Login to the  server, and using \\`\\_conf\\`, update the RefreshToken lifespan (in days),\n\n\\_conf .authentication.token.refresh\\_token\\_lifespan -s 180\n\n\\-- sets the expiration time for any new RefreshTokens created after the change to be after 180 days(6 months) from creation.\n\nLogin to the  server, and using \\`\\_conf\\`, update the\n\nAPIAccessToken lifespan (in hours),\n\n\\_conf .authentication.token.access\\_token\\_lifespan -s 2\n\n\\-- sets the expiration time for any new APIAccessTokens created after the change to be after 2 hours from creation.\n")),(0,n.kt)("p",null,"All these APIs, except ",(0,n.kt)("strong",{parentName:"p"},"Create RefreshToken"),", are supported in SAML 2.0 Single Sign On environments. If you're using the SAML authentication, you can create the refresh tokens using the  GUI by visiting <BASE","_","URL>/account/auth page."),(0,n.kt)("h2",{id:"open-api-30-specification"},"Open API 3.0 Specification"),(0,n.kt)("p",null,"The above APIs are also described using the Open API 3.0 Specification (OAS). OAS is a broadly adopted industry standard for describing APIs."),(0,n.kt)("p",null,"To see the specification, replace {InstanceURL} below with your  instance's URL and visit the link:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"{InstanceURL}/openapi/api\\_authentication/\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," The Swagger UI is not enabled by default on an  instance. Please set the flag .feature","_","flags.enable","_","swagger to True using ","_","conf."),(0,n.kt)("h2",{id:"create-refreshtoken"},"Create RefreshToken"),(0,n.kt)("p",null,"Creates a new RefreshToken for the user."),(0,n.kt)("h3",{id:"url"},"URL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"POST /integration/v1/createRefreshToken/\n")),(0,n.kt)("h3",{id:"data-parameters"},"Data Parameters"),(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Head-Header1"},(0,n.kt)("th",{class:"TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1"},"Name"),(0,n.kt)("th",{class:"TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1"},"Type"),(0,n.kt)("th",{class:"TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1"},"Description"),(0,n.kt)("th",{class:"TableStyle-UKGTableStylesheet01-HeadD-Column1-Header1"},"Required"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body1"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"username"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"string"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},(0,n.kt)("p",null,"Username of the user on Alation."),(0,n.kt)("p",null,'Example: "basava@alation.com"')),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1"},"Yes")),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body2"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2"},"password"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2"},"string"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2"},(0,n.kt)("p",null,"Password associated with the user on Alation. "),(0,n.kt)("p",null,'Example: "P@s$w0rd!"')),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body2"},"Yes")),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body1"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyB-Column1-Body1"},"name"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyB-Column1-Body1"},"string"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyB-Column1-Body1"},(0,n.kt)("p",null,"Create the RefreshToken with this name."),(0,n.kt)("p",null,'Example: "TableauRefreshToken"')),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyA-Column1-Body1"},"Yes"))))),(0,n.kt)("h3",{id:"response-structure"},"Response Structure"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Content-Type:")," text/json"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Status:")," 201 CREATED"),(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Head-Header1"},(0,n.kt)("th",{class:"TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1"},"Name"),(0,n.kt)("th",{class:"TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1"},"Type"),(0,n.kt)("th",{class:"TableStyle-UKGTableStylesheet01-HeadD-Column1-Header1"},"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body1"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"refresh_token"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"string"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1"},(0,n.kt)("p",null,"RefreshToken generated for the user in Alation."),(0,n.kt)("p",null,'Example: "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"'))),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body2"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2"},"user_id"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2"},"integer"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body2"},(0,n.kt)("p",null,"User ID associated with the refresh token who generated this token on Alation. "),(0,n.kt)("p",null,"Example: 102"))),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body1"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"created_at"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"dateTime"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1"},"Timezone aware date-time at which the refresh token is created at.")),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body2"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2"},"name"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2"},"string"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body2"},(0,n.kt)("p",null,"Name of the RefreshToken. "),(0,n.kt)("p",null,'Example: "TableauRefreshToken"'))),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body1"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"token_expires_at"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"dateTime"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1"},"Timezone aware date-time until which the RefreshToken is valid for.")),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body2"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyB-Column1-Body2"},"token_status"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyB-Column1-Body2"},"string"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyA-Column1-Body2"},(0,n.kt)("p",null,"Current status of the RefreshToken."),(0,n.kt)("p",null,"Enum:"),(0,n.kt)("p",null,'"active",'),(0,n.kt)("p",null,'"expired",'),(0,n.kt)("p",null,'"revoked"'),(0,n.kt)("p",null,'Example: "active"')))))),(0,n.kt)("h4",{id:"all-responses"},"All Responses"),(0,n.kt)("div",null,(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Head-Header1"},(0,n.kt)("th",{class:"TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1"},"Code"),(0,n.kt)("th",{class:"TableStyle-UKGTableStylesheet01-HeadD-Column1-Header1"},"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body1"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"201"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1"},"Created")),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body2"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2"},"400"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body2"},"Malformed Request")),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body1"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"401"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1"},"Unauthorized bad/missing token")),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body2"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2"},"403"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body2"},"Forbidden User cannot edit this resource")),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body1"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1"},"404"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1"},"The specified resource was not found")),(0,n.kt)("tr",{class:"TableStyle-UKGTableStylesheet01-Body-Body2"},(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyB-Column1-Body2"},"500"),(0,n.kt)("td",{class:"TableStyle-UKGTableStylesheet01-BodyA-Column1-Body2"},"Internal Server Error"))))),(0,n.kt)("h3",{id:"code-samples"},"Code Samples"),(0,n.kt)("h4",{id:"curl"},"cURL"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'BASE\\_URL="https://yourcompany.com/integration/v1/createRefreshToken/"\n\nUSER\\_ID="dave@example.com"\n\nPASSWORD="secret"\n\nNAME="My Precious"\n\n\\# Create RefreshToken for user dave@example.com\n\ncurl -X POST -H "Content-Type: application/x-www-form-urlencoded" "${BASE\\_URL}"\n\n\\--data-urlencode "username=${USER\\_ID}" --data-urlencode "password=${PASSWORD}" --data-urlencode "name=${NAME}" -v\n')),(0,n.kt)("h4",{id:"python"},"Python"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'\\# Replace username, name and password with your login ID, desired token name and password.\n\ndata = {\'username\':\'dave@example.com\', \'password\':\'secret\', \'name\': \'My Precious Token\'}\n\nION\\_AT\\_YOUR\\_COMPANY\\_URL="https://yourcompany.com"\n\n\\# Create RefreshToken for user: dave@example.com\n\nresponse = requests.post(\n\n\'{base\\_url}/integration/v1/createRefreshToken/\'.format(base\\_url=ION\\_AT\\_YOUR\\_COMPANY\\_URL\n\n), data=data)\n\nprint(response.text)\n\n\\# Sample Response\n\n\\# {\n\n\\# "user\\_id": 1151,\n\n\\# "created\\_at": "2020-07-15T16:08:09.673391-07:00",\n\n\\# "token\\_expires\\_at": "2020-09-13T16:08:09.672850-07:00",\n\n\\# "token\\_status": "ACTIVE",\n\n\\# "last\\_used\\_at": null,\n\n\\# "name": "My Precious Token",\n\n\\# "refresh\\_token":\n\n\\# "mnuM-jp7uAOLWsG7ojs6rY-wweh2JVfKmNtWyPgVs-RdIysp4QyEHJtdd5Q5fECWEOsGVYxZ0eHy37j\\_lqoPcQ"\n\n\\# }\n')))}u.isMDXComponent=!0}}]);