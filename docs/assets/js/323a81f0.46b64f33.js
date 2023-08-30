"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||h[m]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},s="Client Requests",l={unversionedId:"design/client-requests",id:"design/client-requests",title:"Client Requests",description:"A request is a batch of one or more",source:"@site/pages/design/client-requests.md",sourceDirName:"design",slug:"/design/client-requests",permalink:"/design/client-requests",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/design/client-requests.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating accounts and transfers with the CLI client",permalink:"/quick-start/cli-client"},next:{title:"Client Sessions",permalink:"/design/client-sessions"}},o={},c=[{value:"Batching Events",id:"batching-events",level:2},{value:"API Layer Architecture",id:"api-layer-architecture",level:2},{value:"Queues and Workers",id:"queues-and-workers",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client-requests"},"Client Requests"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"request")," is a ",(0,a.kt)("a",{parentName:"p",href:"#batching-events"},"batch")," of one or more\n",(0,a.kt)("a",{parentName:"p",href:"/reference/operations/"},"operation events")," sent to the cluster in a single message."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All events within a request batch share the same operation type."),(0,a.kt)("li",{parentName:"ul"},"The cluster commits an entire batch at once, each event in series."),(0,a.kt)("li",{parentName:"ul"},"The cluster returns a single reply for each unique request it commits."),(0,a.kt)("li",{parentName:"ul"},"The cluster's reply contains results corresponding to each event in the request."),(0,a.kt)("li",{parentName:"ul"},"Unless ",(0,a.kt)("a",{parentName:"li",href:"/reference/transfers#flagslinked"},"linked"),", events within a request\n",(0,a.kt)("a",{parentName:"li",href:"/reference/operations/create_transfers#result"},"succeed or fail")," independently.")),(0,a.kt)("h2",{id:"batching-events"},"Batching Events"),(0,a.kt)("p",null,"To achieve high throughput, TigerBeetle amortizes the overhead of consensus and I/O by\nbatching many operation events in each request. For the best performance, each request should batch\nas many events as possible. Typically this means funneling events through fewer client instances."),(0,a.kt)("p",null,"The maximum number of events per batch depends on the maximum message size\n(",(0,a.kt)("inlineCode",{parentName:"p"},"config.message_size_max"),") and the operation type.\n(TODO: Expose batch size in the client instead)."),(0,a.kt)("p",null,"In the default configuration, the batch sizes are:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Operation"),(0,a.kt)("th",{parentName:"tr",align:"right"},"Batch Size"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lookup_accounts")),(0,a.kt)("td",{parentName:"tr",align:"right"},"8191")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"lookup_transfers")),(0,a.kt)("td",{parentName:"tr",align:"right"},"8191")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"create_accounts")),(0,a.kt)("td",{parentName:"tr",align:"right"},"8191")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"create_transfers")),(0,a.kt)("td",{parentName:"tr",align:"right"},"8191")))),(0,a.kt)("p",null,"Presently the client application is responsible for batching events, but only as a stopgap\nbecause this has not yet been implemented within the clients themselves."),(0,a.kt)("p",null,"Read more about how two-phase transfers work with each client."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/node#batching"},"Node")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/go#batching"},"Go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/java#batching"},"Java"))),(0,a.kt)("h2",{id:"api-layer-architecture"},"API Layer Architecture"),(0,a.kt)("p",null,"In some application architectures, the number of services that need to query TigerBeetle may:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/design/client-sessions#eviction"},"exceed ",(0,a.kt)("inlineCode",{parentName:"a"},"config.clients_max")),", or"),(0,a.kt)("li",{parentName:"ul"},"may require additional ",(0,a.kt)("a",{parentName:"li",href:"#batching-events"},"batching")," to optimize throughput.")),(0,a.kt)("p",null,'Rather than each service connecting to TigerBeetle directly, application services can forward their\nrequests to a pool of intermediate services (the "API layer") which can coalesce events from\nmany application services into requests, and forward back the respective\nreplies. This approach enables larger batch sizes and higher throughput, but comes at a cost: the\napplication services\' sessions are no longer linearizable, because the API services may restart at\nany time relative to the application service.'),(0,a.kt)("mermaid",{value:"flowchart LR\n    App1[Application service 1]\n    App2[Application service 2]\n    App3[Application service 3]\n    App4[Application service 4]\n    Cluster[TigerBeetle cluster]\n\n    App1 <--\x3e API1\n    App2 <--\x3e API1\n    App3 <--\x3e API2\n    App4 <--\x3e API2\n\n    subgraph API\n        API1{API 1}\n        API2{API 2}\n    end\n\n    API1 <--\x3e Cluster\n    API2 <--\x3e Cluster"}),(0,a.kt)("h3",{id:"queues-and-workers"},"Queues and Workers"),(0,a.kt)("p",null,"If you are making requests to TigerBeetle from workers\npulling jobs from a queue, you can batch requests to\nTigerBeetle by having the worker act on multiple jobs from\nthe queue at once rather than one at a time. i.e. pulling\nmultiple jobs from the queue rather than just one."))}h.isMDXComponent=!0}}]);