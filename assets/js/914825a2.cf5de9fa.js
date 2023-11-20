"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[252],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(r),k=n,d=p["".concat(c,".").concat(k)]||p[k]||m[k]||i;return r?a.createElement(d,l(l({ref:t},u),{},{components:r})):a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={slug:"/",sidebar_position:1},l="TigerBeetle Docs",o={unversionedId:"intro",id:"intro",title:"TigerBeetle Docs",description:"TigerBeetle is a distributed financial accounting database designed",source:"@site/pages/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/quick-start/"}},c={},s=[{value:"Quickstart",id:"quickstart",level:2},{value:"Designing for TigerBeetle",id:"designing-for-tigerbeetle",level:2},{value:"Recipes",id:"recipes",level:2},{value:"Client libraries",id:"client-libraries",level:2},{value:"Sample code",id:"sample-code",level:3},{value:"Reference",id:"reference",level:2},{value:"Contributing",id:"contributing",level:2},{value:"Community",id:"community",level:2}],u={toc:s},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tigerbeetle-docs"},"TigerBeetle Docs"),(0,n.kt)("p",null,"TigerBeetle is a distributed financial accounting database designed\nfor mission critical safety and performance."),(0,n.kt)("h2",{id:"quickstart"},"Quickstart"),(0,n.kt)("p",null,"First, get TigerBeetle running:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/quick-start/single-binary"},"Run a single-node cluster with a single binary")),(0,n.kt)("li",{parentName:"ul"},"Or ",(0,n.kt)("a",{parentName:"li",href:"/quick-start/with-docker"},"run a single-node cluster with Docker")),(0,n.kt)("li",{parentName:"ul"},"Or ",(0,n.kt)("a",{parentName:"li",href:"/quick-start/with-docker-compose"},"run a three-node cluster with docker-compose"))),(0,n.kt)("p",null,"Then, try creating accounts and transfers ",(0,n.kt)("a",{parentName:"p",href:"/quick-start/cli-client"},"using the TigerBeetle CLI client"),"."),(0,n.kt)("h2",{id:"designing-for-tigerbeetle"},"Designing for TigerBeetle"),(0,n.kt)("p",null,"When integrating TigerBeetle into your project, consider the\nfollowing:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/design/consistency"},"TigerBeetle and consistency")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/design/data-modeling"},"Modeling application data within TigerBeetle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/design/two-phase-transfers"},"How two-phase transfers work")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/design/client-sessions"},"How client sessions work")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/design/client-requests"},"How client requests work"))),(0,n.kt)("h2",{id:"recipes"},"Recipes"),(0,n.kt)("p",null,"Here are some common use-cases for TigerBeetle:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/recipes/close-account"},"Closing accounts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/recipes/currency-exchange"},"Currency exchange")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/recipes/fractional-amounts"},"Fractional amounts"))),(0,n.kt)("h2",{id:"client-libraries"},"Client libraries"),(0,n.kt)("p",null,"We officially support the following libraries for communicating with a\nTigerBeetle cluster:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/clients/dotnet"},".NET")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/clients/go"},"Go")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/clients/java"},"Java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/clients/node"},"Node.js"))),(0,n.kt)("h3",{id:"sample-code"},"Sample code"),(0,n.kt)("p",null,"Within each client library README you will find links to sample code."),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("p",null,"To understand TigerBeetle's data model, see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/accounts"},"Accounts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/transfers"},"Transfers")),(0,n.kt)("li",{parentName:"ul"},"And ",(0,n.kt)("a",{parentName:"li",href:"/reference/operations/"},"Operations"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/operations/create_accounts"},(0,n.kt)("inlineCode",{parentName:"a"},"create_accounts"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/operations/create_transfers"},(0,n.kt)("inlineCode",{parentName:"a"},"create_transfers"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/operations/lookup_accounts"},(0,n.kt)("inlineCode",{parentName:"a"},"lookup_accounts"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/reference/operations/lookup_transfers"},(0,n.kt)("inlineCode",{parentName:"a"},"lookup_transfers")))))),(0,n.kt)("h2",{id:"contributing"},"Contributing"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/TALKS.md"},"Watch our talks, listen to our podcasts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/HISTORY.md"},"Read HISTORY.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/DESIGN.md"},"Read DESIGN.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/DEEP_DIVE.md"},"Read DEEP_DIVE.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/TIGER_STYLE.md"},"Read TIGER_STYLE.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/HACKING.md"},"Read HACKING.md")),(0,n.kt)("li",{parentName:"ul"},"And explore internal READMEs within the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/tree/main/src"},"TigerBeetle src directory"))),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/tigerbeetledb"},"Twitter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle"},"GitHub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://join.slack.com/t/tigerbeetle/shared_invite/zt-1gf3qnvkz-GwkosudMCM3KGbGiSu87RQ"},"Slack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mailchi.mp/8e9fa0f36056/subscribe-to-tigerbeetle"},"Monthly Newsletter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/@tigerbeetledb"},"YouTube"))))}m.isMDXComponent=!0}}]);