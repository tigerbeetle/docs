"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7592:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="Operations",i={unversionedId:"reference/operations/index",id:"reference/operations/index",title:"Operations",description:"An operation queries or updates the database state.",source:"@site/pages/reference/operations/index.md",sourceDirName:"reference/operations",slug:"/reference/operations/",permalink:"/reference/operations/",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/reference/operations/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transfers",permalink:"/reference/transfers"},next:{title:"create_accounts",permalink:"/reference/operations/create_accounts"}},p={},s=[{value:"Events and Results",id:"events-and-results",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operations"},"Operations"),(0,a.kt)("p",null,"An ",(0,a.kt)("em",{parentName:"p"},"operation")," queries or updates the database state."),(0,a.kt)("p",null,"There are four operations available to clients:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/operations/create_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"create_accounts")),": create ",(0,a.kt)("inlineCode",{parentName:"li"},"Account"),"s"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/operations/create_transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"create_transfers")),": create ",(0,a.kt)("inlineCode",{parentName:"li"},"Transfer"),"s"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/operations/lookup_accounts"},(0,a.kt)("inlineCode",{parentName:"a"},"lookup_accounts")),": fetch ",(0,a.kt)("inlineCode",{parentName:"li"},"Account"),"s by ",(0,a.kt)("inlineCode",{parentName:"li"},"id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reference/operations/lookup_transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"lookup_transfers")),": fetch ",(0,a.kt)("inlineCode",{parentName:"li"},"Transfer"),"s by ",(0,a.kt)("inlineCode",{parentName:"li"},"id"))),(0,a.kt)("h2",{id:"events-and-results"},"Events and Results"),(0,a.kt)("p",null,"Each operation has a corresponding ",(0,a.kt)("em",{parentName:"p"},"event")," and ",(0,a.kt)("em",{parentName:"p"},"result")," type."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The client sends events to the cluster."),(0,a.kt)("li",{parentName:"ul"},"The client receives results from the cluster (1:1 for each event sent)."),(0,a.kt)("li",{parentName:"ul"},"Events and results for the same operation are\n",(0,a.kt)("a",{parentName:"li",href:"/design/client-requests#batching-events"},"batched")," for throughput."),(0,a.kt)("li",{parentName:"ul"},"A batch of an operation's events is called a ",(0,a.kt)("a",{parentName:"li",href:"/design/client-requests"},(0,a.kt)("em",{parentName:"a"},"request")),"."),(0,a.kt)("li",{parentName:"ul"},"A batch of an operation's results is called a ",(0,a.kt)("em",{parentName:"li"},"reply"),".")),(0,a.kt)("p",null,"Client implementations provide an API for sending batched events and decoding the corresponding\nbatched results."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operation"),(0,a.kt)("th",{parentName:"tr",align:null},"Event"),(0,a.kt)("th",{parentName:"tr",align:null},"Result"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"create_accounts")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/reference/operations/create_accounts#Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Account"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/reference/operations/create_accounts#Result"},(0,a.kt)("inlineCode",{parentName:"a"},"CreateAccountResult")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"create_transfers")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/reference/operations/create_transfers#Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/reference/operations/create_transfers#Result"},(0,a.kt)("inlineCode",{parentName:"a"},"CreateTransferResult")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lookup_accounts")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/reference/operations/lookup_accounts#Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Account.id"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/reference/operations/lookup_accounts#Result"},(0,a.kt)("inlineCode",{parentName:"a"},"Account"))," or nothing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lookup_transfers")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/reference/operations/lookup_transfers#Event"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.id"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/reference/operations/lookup_transfers#Result"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer"))," or nothing")))))}d.isMDXComponent=!0}}]);