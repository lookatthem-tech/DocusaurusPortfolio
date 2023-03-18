"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=c(r),m=o,f=l["".concat(u,".").concat(m)]||l[m]||p[m]||s;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[l]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3501:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const s={sidebar_position:9},a="Using Guest Mode with CHC",i={unversionedId:"Hardware/Server Installation Guide/010CHCGuestModeReqs",id:"Hardware/Server Installation Guide/010CHCGuestModeReqs",title:"Using Guest Mode with CHC",description:"Prysm doesn't recommend the use of Guest Mode in a Customer Hosted Cloud environment. Guest Mode is designed to let users without a Prysm user license access content in Prysm. In order to do this in a CHC environment, guest users, potentially from outside the customer organization, will need access to the same network domain where the CHC server resides. In many customer networks, this is an issue because there is a separate network on a separate domain dedicated to guest users.",source:"@site/docs/Hardware/Server Installation Guide/010CHCGuestModeReqs.md",sourceDirName:"Hardware/Server Installation Guide",slug:"/Hardware/Server Installation Guide/010CHCGuestModeReqs",permalink:"/DocusaurusPortfolio/docs/Hardware/Server Installation Guide/010CHCGuestModeReqs",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Hardware/Server Installation Guide/010CHCGuestModeReqs.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Configuring the appliance for the CHC server",permalink:"/DocusaurusPortfolio/docs/Hardware/Server Installation Guide/009ConnectAndConfigure"},next:{title:"Uninstalling a CHC server",permalink:"/DocusaurusPortfolio/docs/Hardware/Server Installation Guide/011UninstallingCHCServer"}},u={},c=[],d={toc:c},l="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-guest-mode-with-chc"},"Using Guest Mode with CHC"),(0,o.kt)("p",null,"Prysm doesn't recommend the use of Guest Mode in a Customer Hosted Cloud environment. Guest Mode is designed to let users without a Prysm user license access content in Prysm. In order to do this in a CHC environment, guest users, potentially from outside the customer organization, will need access to the same network domain where the CHC server resides. In many customer networks, this is an issue because there is a separate network on a separate domain dedicated to guest users."),(0,o.kt)("p",null,"In order to allow Guest Mode to function properly, customers are responsible for security and must allow Guest Mode users onto the network that hosts the CHC server."))}p.isMDXComponent=!0}}]);