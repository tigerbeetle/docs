"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o="Developing Applications on TigerBeetle",l={unversionedId:"develop/README",id:"develop/README",title:"Developing Applications on TigerBeetle",description:"TigerBeetle is a domain-specific, Online Transaction Processing (OLTP) database. It has a fixed",source:"@site/pages/develop/README.md",sourceDirName:"develop",slug:"/develop/",permalink:"/develop/",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/develop/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use the CLI REPL to Create Accounts and Transfers",permalink:"/getting-started/cli-repl"},next:{title:"Data Modeling",permalink:"/develop/data-modeling"}},s={},c=[{value:"Data Model Overview",id:"data-model-overview",level:2},{value:"TigerBeetle in Your System Architecture",id:"tigerbeetle-in-your-system-architecture",level:2},{value:"Advanced Recipes",id:"advanced-recipes",level:2},{value:"Want Help Developing on TigerBeetle?",id:"want-help-developing-on-tigerbeetle",level:2},{value:"Ask the Community",id:"ask-the-community",level:3},{value:"Dedicated Consultation",id:"dedicated-consultation",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"developing-applications-on-tigerbeetle"},"Developing Applications on TigerBeetle"),(0,a.kt)("p",null,"TigerBeetle is a domain-specific, Online Transaction Processing (OLTP) database. It has a fixed\nschema consisting of ",(0,a.kt)("a",{parentName:"p",href:"/reference/accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"Account"),"s")," and\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer"),"s"),". In return for this prescriptive design, it provides\nexcellent performance, integrated business logic, and powerful invariants."),(0,a.kt)("p",null,"To help you get started building on TigerBeetle, here is a quick overview of the most important\nconcepts:"),(0,a.kt)("h2",{id:"data-model-overview"},"Data Model Overview"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"Account"),"s")," track balances for users or other entities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer"),"s")," move funds between ",(0,a.kt)("inlineCode",{parentName:"li"},"Account"),"s."),(0,a.kt)("li",{parentName:"ul"},"Account balances and transfer amounts are represented as debits and credits. Double-entry\nbookkeeping ensures your accounting maintains consistency."),(0,a.kt)("li",{parentName:"ul"},"Accounts are partitioned into ",(0,a.kt)("a",{parentName:"li",href:"/develop/data-modeling#ledgers"},"Ledgers"),", which may represent different\ncurrencies, assets, liabilities, etc. or they may be used to support multitenancy. Only accounts\non the same ledger can transact directly, but you can use atomically ",(0,a.kt)("a",{parentName:"li",href:"/develop/client-requests#linked-events"},"linked\ntransfers")," to implement ",(0,a.kt)("a",{parentName:"li",href:"/develop/recipes/currency-exchange"},"cross-currency\ntransactions"),"."),(0,a.kt)("li",{parentName:"ul"},"TigerBeetle has first-class support for ",(0,a.kt)("a",{parentName:"li",href:"/develop/two-phase-transfers"},"two-phase transfers"),", which can\nhold funds in a pending state and can be used to synchronize transfers with external systems.")),(0,a.kt)("h2",{id:"tigerbeetle-in-your-system-architecture"},"TigerBeetle in Your System Architecture"),(0,a.kt)("p",null,"TigerBeetle is an Online Transaction Processing (OLTP) database built for safety and performance."),(0,a.kt)("p",null,"It is not a general purpose database like PostgreSQL or MySQL. Instead, TigerBeetle works alongside\nyour general purpose database and should be used to handle the hot path of transaction processing."),(0,a.kt)("p",null,"Many fields on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Account")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Transfer")," data structures are stored in TigerBeetle as simple\nnumbers. You may want to include metadata about ledgers, account and transfer types, etc in your\ngeneral purpose database or directly in your application code."),(0,a.kt)("p",null,"For more information relevant to integrating TigerBeetle into your system, take a look at the\nfollowing pages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/client-requests"},"Client Requests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/client-sessions"},"Client Sessions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/consistency"},"Consistency")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/time"},"Time"))),(0,a.kt)("h2",{id:"advanced-recipes"},"Advanced Recipes"),(0,a.kt)("p",null,"Depending on your use case, you may find these additional design patterns helpful:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/recipes/currency-exchange"},"Currency Exchange")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/recipes/multi-debit-credit-transfers"},"Multi-Debit, Multi-Credit Transfers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/recipes/close-account"},"Closing Accounts"))),(0,a.kt)("h2",{id:"want-help-developing-on-tigerbeetle"},"Want Help Developing on TigerBeetle?"),(0,a.kt)("h3",{id:"ask-the-community"},"Ask the Community"),(0,a.kt)("p",null,"Have questions about TigerBeetle's data model, how to design your application on top of it, or anything else?"),(0,a.kt)("p",null,"Come join our ",(0,a.kt)("a",{parentName:"p",href:"https://slack.tigerbeetle.com/invite"},"Community Slack")," and ask any and all questions you might have!"),(0,a.kt)("h3",{id:"dedicated-consultation"},"Dedicated Consultation"),(0,a.kt)("p",null,"Would you like the TigerBeetle team to help you design your chart of accounts and leverage the power of TigerBeetle in your architecture?"),(0,a.kt)("p",null,"Let us help you get it right. Contact our CEO, Joran Dirk Greef, at ",(0,a.kt)("a",{parentName:"p",href:"mailto:joran@tigerbeetle.com"},"joran@tigerbeetle.com")," to set up a call."))}d.isMDXComponent=!0}}]);