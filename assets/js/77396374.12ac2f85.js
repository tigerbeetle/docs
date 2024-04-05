"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},l="Client Requests",o={unversionedId:"develop/client-requests",id:"develop/client-requests",title:"Client Requests",description:"A request is a batch of one or more [operation",source:"@site/pages/develop/client-requests.md",sourceDirName:"develop",slug:"/develop/client-requests",permalink:"/develop/client-requests",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/develop/client-requests.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Two-Phase Transfers",permalink:"/develop/two-phase-transfers"},next:{title:"Reliable Transaction Submission",permalink:"/develop/reliable-transaction-submission"}},s={},p=[{value:"Linked Events",id:"linked-events",level:2},{value:"Batching Events",id:"batching-events",level:2},{value:"Example API Layer Architecture",id:"example-api-layer-architecture",level:2},{value:"Queues and Workers",id:"queues-and-workers",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"client-requests"},"Client Requests"),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"request")," is a ",(0,r.kt)("a",{parentName:"p",href:"#batching-events"},"batch")," of one or more ",(0,r.kt)("a",{parentName:"p",href:"/reference/operations/"},"operation\nevents")," sent to the cluster in a single message."),(0,r.kt)("p",null,"All events within a request batch must be of the same ",(0,r.kt)("a",{parentName:"p",href:"/reference/operations/"},"operation"),"\ntype. You cannot, for example, create accounts and transfers in the same request."),(0,r.kt)("p",null,"The cluster commits an entire batch at once. Events are applied in series, such that successive\nevents observe the effects of previous ones and event timestamps are ",(0,r.kt)("a",{parentName:"p",href:"/develop/time#timestamps-are-totally-ordered"},"totally\nordered"),"."),(0,r.kt)("p",null,"The cluster returns a single reply for each unique request it commits. The reply contains a\n",(0,r.kt)("a",{parentName:"p",href:"/reference/operations/create_transfers#result"},"result")," for each event in the request."),(0,r.kt)("h2",{id:"linked-events"},"Linked Events"),(0,r.kt)("p",null,"Events within a request ",(0,r.kt)("a",{parentName:"p",href:"/reference/operations/create_transfers#result"},"succeed or fail"),"\nindependently unless they are explicitly linked using the ",(0,r.kt)("inlineCode",{parentName:"p"},"flags.linked"),"\n(",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#flagslinked"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.flags.linked"))," or\n",(0,r.kt)("a",{parentName:"p",href:"/reference/transfers#flagslinked"},(0,r.kt)("inlineCode",{parentName:"a"},"Transfer.flags.linked")),")."),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"linked")," flag is specified, it links the outcome of a Transfer or Account creation with the\noutcome of the next one in the request. These chains of events will all succeed or fail together."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The last event in a chain is denoted by the first Transfer or Account without this flag.")),(0,r.kt)("p",null,"The last Transfer or Account in a batch may never have the ",(0,r.kt)("inlineCode",{parentName:"p"},"flags.linked")," set, as it would leave a\nchain open-ended. Attempting to do so will result in the\n",(0,r.kt)("a",{parentName:"p",href:"/reference/operations/create_transfers#linked_event_chain_open"},(0,r.kt)("inlineCode",{parentName:"a"},"linked_event_chain_open"))," error."),(0,r.kt)("p",null,"Multiple chains of events may coexist within a batch to succeed or fail independently."),(0,r.kt)("p",null,"Events within a chain are executed in order, or are rolled back on error, so that the effect of each\nevent in the chain is visible to the next. Each chain is either visible or invisible as a unit to\nsubsequent transfers after the chain. The event that was the first to fail within a chain will have\na unique error result. Other events in the chain will have their error result set to\n",(0,r.kt)("a",{parentName:"p",href:"/reference/operations/create_transfers#linked_event_failed"},(0,r.kt)("inlineCode",{parentName:"a"},"linked_event_failed")),"."),(0,r.kt)("p",null,"Consider this set of Transfers as part of a batch:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Transfer"),(0,r.kt)("th",{parentName:"tr",align:null},"Index within batch"),(0,r.kt)("th",{parentName:"tr",align:null},"flags.linked"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"D")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"E")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("p",null,"If any of transfers ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," fail (for example, due to\n",(0,r.kt)("a",{parentName:"p",href:"/reference/operations/create_transfers#exceeds_credits"},(0,r.kt)("inlineCode",{parentName:"a"},"exceeds_credits")),"), then ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," will\nall fail. They are linked."),(0,r.kt)("p",null,"Transfers ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," fail or succeed independently of ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"D"),", and each other."),(0,r.kt)("p",null,"After the chain of linked events has executed, the fact that they were linked will not be saved. To\nsave the association between Transfers or Accounts, it must be ",(0,r.kt)("a",{parentName:"p",href:"/develop/data-modeling"},"encoded into the data\nmodel"),", for example by adding an ID to one of the ",(0,r.kt)("a",{parentName:"p",href:"/develop/data-modeling#user_data"},"user\ndata")," fields."),(0,r.kt)("h2",{id:"batching-events"},"Batching Events"),(0,r.kt)("p",null,"To achieve high throughput, TigerBeetle amortizes the overhead of consensus and I/O by batching many\noperation events in each request."),(0,r.kt)("p",null,"For the best performance, each request should batch as many events as possible. Typically this means\nfunneling events through fewer client instances (e.g. a single client instance per process)."),(0,r.kt)("p",null,"The maximum number of events per batch depends on the maximum message size and the operation type.\n(TODO: Expose each operation's batch sizes in the client)."),(0,r.kt)("p",null,"In the default configuration, the batch sizes are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Request Batch Size (Events)"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Reply Batch Size (Results)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lookup_accounts")),(0,r.kt)("td",{parentName:"tr",align:"right"},"8190"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8190")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lookup_transfers")),(0,r.kt)("td",{parentName:"tr",align:"right"},"8190"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8190")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"create_accounts")),(0,r.kt)("td",{parentName:"tr",align:"right"},"8190"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8190")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"create_transfers")),(0,r.kt)("td",{parentName:"tr",align:"right"},"8190"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8190")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get_account_transfers")),(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8190")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"get_account_balances")),(0,r.kt)("td",{parentName:"tr",align:"right"},"1"),(0,r.kt)("td",{parentName:"tr",align:"right"},"8190")))),(0,r.kt)("p",null,"You can design your application to batch events manually. However, client instances automatically\nbatch requests of the same operation type. Therefore, sharing the same client instance between\nmultiple threads or tasks enables events to be batched transparently."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/node#batching"},"Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/go#batching"},"Go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/java#batching"},"Java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/dotnet#batching"},".NET"))),(0,r.kt)("h2",{id:"example-api-layer-architecture"},"Example API Layer Architecture"),(0,r.kt)("p",null,"When building an application on TigerBeetle, you may want to use an intermediate API layer to batch\nevents."),(0,r.kt)("p",null,"This is primarily applicable if the number of services that need to query TigerBeetle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/develop/client-sessions#eviction"},"exceed ",(0,r.kt)("inlineCode",{parentName:"a"},"config.clients_max")),", or"),(0,r.kt)("li",{parentName:"ul"},"require additional ",(0,r.kt)("a",{parentName:"li",href:"#batching-events"},"batching")," to optimize throughput.")),(0,r.kt)("p",null,"Rather than each service connecting to TigerBeetle directly, you can set up your application\nservices to forward their requests to a pool of intermediate services, as illustrated below. This\nAPI layer can coalesce events from many application services into requests, and forward back the\nrespective replies."),(0,r.kt)("p",null,"(Note that TigerBeetle does not currently provide such an intermediate service layer or a client to\npool or connect to them.)"),(0,r.kt)("p",null,"One downside of this approach is that events submitted by the application may be applied out of\norder. Without this intermediary API layer, TigerBeetle clients ensure that operations are applied\nin the order they are submitted. However, if operations are submitted to two different API layer\ninstances, the operations may reach the TigerBeetle cluster in a different order, or one of the API\ninstances could crash and restart mid-request."),(0,r.kt)("mermaid",{value:"flowchart LR\n    App1[Application service 1]\n    App2[Application service 2]\n    App3[Application service 3]\n    App4[Application service 4]\n    Cluster[TigerBeetle cluster]\n\n    App1 <--\x3e API1\n    App2 <--\x3e API1\n    App3 <--\x3e API2\n    App4 <--\x3e API2\n\n    subgraph API\n        API1{API 1}\n        API2{API 2}\n    end\n\n    API1 <--\x3e Cluster\n    API2 <--\x3e Cluster"}),(0,r.kt)("h3",{id:"queues-and-workers"},"Queues and Workers"),(0,r.kt)("p",null,"If you are making requests to TigerBeetle from workers pulling jobs from a queue, you can batch\nrequests to TigerBeetle by having the worker act on multiple jobs from the queue at once rather than\none at a time. i.e. pulling multiple jobs from the queue rather than just one."))}u.isMDXComponent=!0}}]);