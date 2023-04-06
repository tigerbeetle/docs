"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[188],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:s,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(7462),s=(n(7294),n(3905));const r={},a="Client Sessions",l={unversionedId:"design/client-sessions",id:"design/client-sessions",title:"Client Sessions",description:"A client session is a sequence of alternating requests and replies between a",source:"@site/pages/design/client-sessions.md",sourceDirName:"design",slug:"/design/client-sessions",permalink:"/design/client-sessions",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/design/client-sessions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client Requests",permalink:"/design/client-requests"},next:{title:"Consistency",permalink:"/design/consistency"}},o={},c=[{value:"Lifecycle",id:"lifecycle",level:2},{value:"Eviction",id:"eviction",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"client-sessions"},"Client Sessions"),(0,s.kt)("p",null,"A ",(0,s.kt)("em",{parentName:"p"},"client session")," is a sequence of alternating ",(0,s.kt)("a",{parentName:"p",href:"/design/client-requests"},"requests")," and replies between a\nclient and a cluster."),(0,s.kt)("p",null,"A client session may have at most one in-flight request \u2014 i.e. at most one unique request on the\nnetwork for which a reply has not been received. This simplifies consistency and allows the cluster\nto statically guarantee capacity in its incoming message queue. Additional requests from the\napplication are queued by the client, to be dequeued and sent when their preceding request receives\na reply."),(0,s.kt)("p",null,"TigerBeetle has a ",(0,s.kt)("a",{parentName:"p",href:"#eviction"},"hard limit")," on the number of concurrent\nclient sessions, and encourages minimizing the number of concurrent clients to\n",(0,s.kt)("a",{parentName:"p",href:"/design/client-requests#batching-events"},"maximize throughput"),"."),(0,s.kt)("h2",{id:"lifecycle"},"Lifecycle"),(0,s.kt)("p",null,"A client session begins when a client registers itself with the cluster."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'Each client session has a unique identifier ("client id") \u2014 an ephemeral random 128-bit id.'),(0,s.kt)("li",{parentName:"ul"},'The client sends a special "register" message which is committed by the cluster, at which point\nthe client is "registered" \u2014 once it receives the reply, it may begin sending requests.'),(0,s.kt)("li",{parentName:"ul"},"Client registration is handled automatically by the TigerBeetle client implementation when the\nclient is initialized, before it sends its first request."),(0,s.kt)("li",{parentName:"ul"},"When a client restarts (for example, the application service running the TigerBeetle client is\nrestarted) it does not resume its old session \u2014 it starts a new session, with a new (random)\nclient id.")),(0,s.kt)("p",null,"A client session ends when either:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"the client session is ",(0,s.kt)("a",{parentName:"li",href:"#eviction"},"evicted"),", or"),(0,s.kt)("li",{parentName:"ul"},"the client terminates")),(0,s.kt)("p",null,"\u2014 whichever occurs first."),(0,s.kt)("h2",{id:"eviction"},"Eviction"),(0,s.kt)("p",null,"When a client session is registering and the number of active sessions in the cluster is already at\nthe cluster's concurrent client session\n",(0,s.kt)("a",{parentName:"p",href:"https://tigerbeetle.com/blog/a-database-without-dynamic-memory/"},"limit")," (",(0,s.kt)("inlineCode",{parentName:"p"},"config.clients_max"),",\n32 by default), an existing client session must be evicted to make space for\nthe new session."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"After a session is evicted by the cluster, no future requests from that session will ever execute."),(0,s.kt)("li",{parentName:"ul"},"The evicted session is chosen as the session that committed a request the longest time ago.")),(0,s.kt)("p",null,"The cluster sends a message to notify the evicted session that it has ended. Typically the evicted\nclient is no longer active (already terminated), but if it is active, the eviction message causes it\nto self-terminate, bubbling up to the application as an ",(0,s.kt)("inlineCode",{parentName:"p"},"session evicted")," error."),(0,s.kt)("p",null,"(TODO: Right now evicted clients panic \u2014 fix that so this is accurate.)"),(0,s.kt)("p",null,"If active clients are terminating with ",(0,s.kt)("inlineCode",{parentName:"p"},"session evicted")," errors, it (most likely) indicates that\nthe application is trying to run ",(0,s.kt)("a",{parentName:"p",href:"/design/client-requests#batching-events"},"too many")," concurrent clients."))}d.isMDXComponent=!0}}]);