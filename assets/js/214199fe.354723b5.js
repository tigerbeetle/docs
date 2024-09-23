"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6834],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=m(a),g=n,h=d["".concat(p,".").concat(g)]||d[g]||u[g]||i;return a?r.createElement(h,l(l({ref:e},s),{},{components:a})):r.createElement(h,l({ref:e},s))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4067:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:7},l="Rate Limiting",o={unversionedId:"coding/recipes/rate-limiting",id:"coding/recipes/rate-limiting",title:"Rate Limiting",description:"TigerBeetle can be used to account for non-financial resources.",source:"@site/pages/coding/recipes/rate-limiting.md",sourceDirName:"coding/recipes",slug:"/coding/recipes/rate-limiting",permalink:"/coding/recipes/rate-limiting",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/coding/recipes/rate-limiting.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Correcting Transfers",permalink:"/coding/recipes/correcting-transfers"},next:{title:"Balance-invariant Transfers",permalink:"/coding/recipes/balance-invariant-transfers"}},p={},m=[{value:"Mechanism",id:"mechanism",level:2},{value:"Request Rate Limiting",id:"request-rate-limiting",level:2},{value:"Bandwidth Limiting",id:"bandwidth-limiting",level:2},{value:"Transfer Amount Limiting",id:"transfer-amount-limiting",level:2}],s={toc:m},d="wrapper";function u(t){let{components:e,...a}=t;return(0,n.kt)(d,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rate-limiting"},"Rate Limiting"),(0,n.kt)("p",null,"TigerBeetle can be used to account for non-financial resources."),(0,n.kt)("p",null,"In this recipe, we will show you how to use it to implement rate limiting using the\n",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Leaky_bucket"},"leaky bucket algorithm")," based on the user request rate,\nbandwidth, and money."),(0,n.kt)("h2",{id:"mechanism"},"Mechanism"),(0,n.kt)("p",null,"For each type of resource we want to limit, we will have a ledger specifically for that resource. On\nthat ledger, we have an operator account and an account for each user. Each user's account will have\na balance limit applied."),(0,n.kt)("p",null,"To set up the rate limiting system, we will first transfer the resource limit amount to each of the\nusers. For each user request, we will then create a\n",(0,n.kt)("a",{parentName:"p",href:"/coding/two-phase-transfers#reserve-funds-pending-transfer"},"pending transfer")," with a\n",(0,n.kt)("a",{parentName:"p",href:"/coding/two-phase-transfers#expire-pending-transfer"},"timeout"),". We will never post or void these\ntransfers, but will instead let them expire."),(0,n.kt)("p",null,"Since each account's \"balance\" is limited, we cannot create pending transfers that would exceed the\nrate limit. However, when each pending transfer expires, it automatically replenishes the user's\nbalance."),(0,n.kt)("h2",{id:"request-rate-limiting"},"Request Rate Limiting"),(0,n.kt)("p",null,"Let's say we want to limit each user to 10 requests per minute."),(0,n.kt)("p",null,"We need our user account to have a limited balance."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ledger"),(0,n.kt)("th",{parentName:"tr",align:null},"Account"),(0,n.kt)("th",{parentName:"tr",align:null},"Flags"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Request Rate"),(0,n.kt)("td",{parentName:"tr",align:null},"Operator"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"0"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Request Rate"),(0,n.kt)("td",{parentName:"tr",align:null},"User"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/reference/account#flagsdebits_must_not_exceed_credits"},(0,n.kt)("inlineCode",{parentName:"a"},"debits_must_not_exceed_credits")))))),(0,n.kt)("p",null,"We'll first transfer 10 units from the operator to the user."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Transfer"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Ledger"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Debit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Credit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Amount"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Request Rate"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Operator"),(0,n.kt)("td",{parentName:"tr",align:"right"},"User"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10")))),(0,n.kt)("p",null,"Then, for each incoming request, we will create a pending transfer for 1 unit back to the operator\nfrom the user:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Transfer"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Ledger"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Debit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Credit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Amount"),(0,n.kt)("th",{parentName:"tr",align:null},"Timeout"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Flags"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2-N"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Request Rate"),(0,n.kt)("td",{parentName:"tr",align:"right"},"User"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Operator"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"60"),(0,n.kt)("td",{parentName:"tr",align:"right"},(0,n.kt)("a",{parentName:"td",href:"/reference/transfer#flagspending"},(0,n.kt)("inlineCode",{parentName:"a"},"pending")))))),(0,n.kt)("p",null,"Note that we use a timeout of 60 (seconds), because we wanted to limit each user to 10 requests ",(0,n.kt)("em",{parentName:"p"},"per\nminute"),"."),(0,n.kt)("p",null,"That's it! Each of these transfers will \"reserve\" some of the user's balance and then replenish the\nbalance after they expire."),(0,n.kt)("h2",{id:"bandwidth-limiting"},"Bandwidth Limiting"),(0,n.kt)("p",null,"To limit user requests based on bandwidth as opposed to request rate, we can apply the same\ntechnique but use amounts that represent the request size."),(0,n.kt)("p",null,"Let's say we wanted to limit each user to 10 MB (10,000,000 bytes) per minute."),(0,n.kt)("p",null,"Our account setup is the same as before:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ledger"),(0,n.kt)("th",{parentName:"tr",align:null},"Account"),(0,n.kt)("th",{parentName:"tr",align:null},"Flags"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bandwidth"),(0,n.kt)("td",{parentName:"tr",align:null},"Operator"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bandwidth"),(0,n.kt)("td",{parentName:"tr",align:null},"User"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/reference/account#flagsdebits_must_not_exceed_credits"},(0,n.kt)("inlineCode",{parentName:"a"},"debits_must_not_exceed_credits")))))),(0,n.kt)("p",null,"Now, we'll transfer 10,000,000 units (bytes in this case) from the operator to the user:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Transfer"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Ledger"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Debit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Credit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Amount"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Bandwidth"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Operator"),(0,n.kt)("td",{parentName:"tr",align:"right"},"User"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10000000")))),(0,n.kt)("p",null,"For each incoming request, we'll create a pending transfer where the amount is equal to the request\nsize:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Transfer"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Ledger"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Debit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Credit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Amount"),(0,n.kt)("th",{parentName:"tr",align:null},"Timeout"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Flags"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2-N"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Bandwidth"),(0,n.kt)("td",{parentName:"tr",align:"right"},"User"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Operator"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Request Size"),(0,n.kt)("td",{parentName:"tr",align:null},"60"),(0,n.kt)("td",{parentName:"tr",align:"right"},(0,n.kt)("a",{parentName:"td",href:"/reference/transfer#flagspending"},(0,n.kt)("inlineCode",{parentName:"a"},"pending")))))),(0,n.kt)("p",null,"We're again using a timeout of 60 seconds, but you could adjust this to be whatever time window you\nwant to use to limit requests."),(0,n.kt)("h2",{id:"transfer-amount-limiting"},"Transfer Amount Limiting"),(0,n.kt)("p",null,"Now, let's say you wanted to limit each account to transferring no more than a certain amount of\nmoney per time window. We can do that using 2 ledgers and linked transfers."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Ledger"),(0,n.kt)("th",{parentName:"tr",align:null},"Account"),(0,n.kt)("th",{parentName:"tr",align:null},"Flags"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rate Limiting"),(0,n.kt)("td",{parentName:"tr",align:null},"Operator"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rate Limiting"),(0,n.kt)("td",{parentName:"tr",align:null},"User"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/reference/account#flagsdebits_must_not_exceed_credits"},(0,n.kt)("inlineCode",{parentName:"a"},"debits_must_not_exceed_credits")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USD"),(0,n.kt)("td",{parentName:"tr",align:null},"Operator"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USD"),(0,n.kt)("td",{parentName:"tr",align:null},"User"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/reference/account#flagsdebits_must_not_exceed_credits"},(0,n.kt)("inlineCode",{parentName:"a"},"debits_must_not_exceed_credits")))))),(0,n.kt)("p",null,"Let's say we wanted to limit each account to sending no more than 1000 USD per day."),(0,n.kt)("p",null,"To set up, we transfer 1000 from the Operator to the User on the Rate Limiting ledger:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Transfer"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Ledger"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Debit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Credit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Amount"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Rate Limiting"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Operator"),(0,n.kt)("td",{parentName:"tr",align:"right"},"User"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1000")))),(0,n.kt)("p",null,"For each transfer the user wants to do, we will create 2 transfers that are\n",(0,n.kt)("a",{parentName:"p",href:"/reference/requests/#linked-events"},"linked"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Transfer"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Ledger"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Debit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Credit Account"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Amount"),(0,n.kt)("th",{parentName:"tr",align:null},"Timeout"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Flags (Note ",(0,n.kt)("inlineCode",{parentName:"th"},"\\|")," sets multiple flags)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2N"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Rate Limiting"),(0,n.kt)("td",{parentName:"tr",align:"right"},"User"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Operator"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Transfer Amount"),(0,n.kt)("td",{parentName:"tr",align:null},"86400"),(0,n.kt)("td",{parentName:"tr",align:"right"},(0,n.kt)("a",{parentName:"td",href:"/reference/transfer#flagspending"},(0,n.kt)("inlineCode",{parentName:"a"},"pending"))," ","|"," ",(0,n.kt)("a",{parentName:"td",href:"/reference/transfer#flagslinked"},(0,n.kt)("inlineCode",{parentName:"a"},"linked")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2N + 1"),(0,n.kt)("td",{parentName:"tr",align:"right"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"right"},"User"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Destination"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Transfer Amount"),(0,n.kt)("td",{parentName:"tr",align:null},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0")))),(0,n.kt)("p",null,"Note that we are using a timeout of 86400 seconds, because this is the number of seconds in a day."),(0,n.kt)("p",null,"These are linked such that if the first transfer fails, because the user has already transferred too\nmuch money in the past day, the second transfer will also fail."))}u.isMDXComponent=!0}}]);