"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,g=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6},i="FAQ",s={unversionedId:"FAQ",id:"FAQ",title:"FAQ",description:"What is double-entry accounting?",source:"@site/pages/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/FAQ",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/FAQ.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"lookup_transfers",permalink:"/reference/operations/lookup_transfers"}},l={},c=[{value:"What is double-entry accounting?",id:"what-is-double-entry-accounting",level:2},{value:"Why does double-entry accounting matter?",id:"why-does-double-entry-accounting-matter",level:2},{value:"Why would I want a dedicated distributed database for accounting?",id:"why-would-i-want-a-dedicated-distributed-database-for-accounting",level:2},{value:"What is a two-phase transfer?",id:"what-is-a-two-phase-transfer",level:2},{value:"How does TigerBeetle fit into my architecture?",id:"how-does-tigerbeetle-fit-into-my-architecture",level:2},{value:"Why is TigerBeetle written in Zig?",id:"why-is-tigerbeetle-written-in-zig",level:2},{value:"Is TigerBeetle ready for production?",id:"is-tigerbeetle-ready-for-production",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"what-is-double-entry-accounting"},"What is double-entry accounting?"),(0,r.kt)("p",null,"Double-entry accounting tracks transfers between accounts. It records\nthe amount of the transfer along with where the amount came from and\nwhere it goes."),(0,r.kt)("h2",{id:"why-does-double-entry-accounting-matter"},"Why does double-entry accounting matter?"),(0,r.kt)("p",null,"Double-entry gives you something stronger than raw data consistency,\nnamely financial consistency, by acting as a financial error\ncorrecting code to keep the books balanced."),(0,r.kt)("p",null,"It does this just like Newton's Third Law\u2014for every movement of money\ninto an account, there is an equal and opposite movement of money from\na different account. This ensures that money cannot be created or\ndestroyed, but is merely transferred from one account to another, just\nlike the law of conservation of energy."),(0,r.kt)("p",null,"Because it's so simple, it's also highly composable. And so it gives\nyou tremendous flexibility to model your business, even as product\nlines come and go, or as your business evolves. We have often seen\norganizations rediscover double-entry accounting over time, requiring\npainful database migrations as they evolve toward double-entry."),(0,r.kt)("p",null,"Double-entry accounting is the language of business, the world\nover. It's the tried and tested schema for representing any kind of\nbusiness, any kind of transaction. While you can think of double-entry\nas the perfect way to describe any kind of financial state transition,\nit's also the perfect way to track and \u201caccount\u201d for anything, any\nkind of business or real world event, not necessarily financial."),(0,r.kt)("p",null,'"What advantages does he derive from the system of book-keeping by\ndouble-entry? It is among the finest inventions of the human mind;\nevery prudent master of a house should introduce it into his economy."\n\u2014 Goethe, 1795'),(0,r.kt)("h2",{id:"why-would-i-want-a-dedicated-distributed-database-for-accounting"},"Why would I want a dedicated distributed database for accounting?"),(0,r.kt)("p",null,"You can do accounting with any database, it's true. Existing companies\nuse PostgreSQL or MongoDB or any other general-purpose\ndatabase. However, this leaves significant work for the developer and\noperator. You must figure out high availability, fault-tolerance, and\nconsistency. You must figure out how to scale as you add users and\ntransfers. And of course, you must re-implement all the double-entry\nand ledger primitives, which are subtle to get right!"),(0,r.kt)("p",null,"TigerBeetle is focused on just one thing: accounting reliably at\nscale. TigerBeetle does double-entry accounting and as a database has\nonly two data types: accounts, and transfers of money between\naccounts. TigerBeetle also goes beyond typical ledgers in that it's\nnot only great at tracking money within a system, but has a built-in\ntwo-phase commit coordinator to help you track money as it moves\nbetween systems\u2014even different companies that have entirely different\nledger architectures! It has built in consensus for high availability,\nand recovery mechanisms that surpass most databases today."),(0,r.kt)("p",null,"Additionally, TigerBeetle was designed precisely for high performance\naccounting. We've seen teams struggle to reach on the order of 1,000s\nof transfers per second when they've built on PostgreSQL and\nMongoDB. It comes down to contention. For example, a business may\nhave a few million customers but only a few bank accounts which will\ncontend for row locks and become the bottleneck (as transfers are\nserialized through them). With this challenge in mind, we're designing\nTigerBeetle to achieve 1,000,000 transfers per second on commodity\nhardware."),(0,r.kt)("p",null,"With financial data, it's also important not to lump it together with\ngeneral purpose data. The risk profile is different: retention\npolicies, compliance requirements, and privacy concerns. In auditing\nthe term is \u201cseparation of concerns\u201d. And the performance\ncharacteristics, auditability, and availability requirements are also\ndissimilar from general purpose data. In much the same way that you\nwould store large objects in an object store, or streaming data in a\nqueue, you really do want separation of concerns for your financial\ndata and a mission critical database to store it."),(0,r.kt)("h2",{id:"what-is-a-two-phase-transfer"},"What is a two-phase transfer?"),(0,r.kt)("p",null,"This is a reference to the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Two-phase_commit_protocol"},"two-phase commit protocol for distributed\ntransactions"),"."),(0,r.kt)("p",null,"Single-phase transfers post funds to accounts immediately when they\nare created."),(0,r.kt)("p",null,"In contrast to single-phase transfers, a two-phase transfer moves\nfunds in stages:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"First, the pending transfer reserves funds. While reserved,\nthey cannot be used by either the payer or payee.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Later (in a future \"commit\", i.e. a separate request), the\napplication creates another transfer \u2014 either a post-pending transfer\nor a void-pending transfer. The former moves all (or part) of the\nreserved funds to the destination; the latter reverts them to the\noriginal account. The pending transfer's amount is reserved in a way\nthat this second step will never cause the account's configured\nbalance invariants (e.g. debits < credits) to be broken."))),(0,r.kt)("h2",{id:"how-does-tigerbeetle-fit-into-my-architecture"},"How does TigerBeetle fit into my architecture?"),(0,r.kt)("p",null,"TigerBeetle is a ledger. It is not designed to be a general-purpose\nmetadata store. But there is no single correct way to use TigerBeetle."),(0,r.kt)("p",null,"Here is an example of how you might integrate with TigerBeetle in a\npayment system."),(0,r.kt)("p",null,"You might keep account metadata in your existing database (say,\nPostgreSQL or MongoDB). Then create an account in TigerBeetle with a\n",(0,r.kt)("a",{parentName:"p",href:"/usage/data-modeling#random-identifier"},"random id")," mapping it\nback to the account with metadata in your existing database."),(0,r.kt)("p",null,"Then as you need to process transfers between accounts, you store\nthose transfers in TigerBeetle."),(0,r.kt)("p",null,"TigerBeetle comes with built in business logic like\naccepting/rejecting related or linked transfers atomically as a unit,\nrejecting transfers if the accounts involved would exceed their net\ndebit or credit balances, and other business logic that you can\ntoggle."),(0,r.kt)("p",null,"When you need to report on transfers, you'll use our query API.\nQueries are currently limited to lookups by account ID or transfer\nID. However, we're already indexing all fields and a rich relational\nquery engine is in the works."),(0,r.kt)("p",null,"You will also be able to export all historic accounts and transfers."),(0,r.kt)("h2",{id:"why-is-tigerbeetle-written-in-zig"},"Why is TigerBeetle written in Zig?"),(0,r.kt)("p",null,"Coming from C, it's the language we've always wanted\u2014OOM safety,\nbounds checking, rich choice of allocators (and test allocators),\nchecked arithmetic, explicit control flow, explicit control over\nmemory layout and alignment, no hidden allocations, no macros, first\nclass C ABI interoperability, and an insanely good compiler. Comptime\nis a game changer."),(0,r.kt)("p",null,"We realized that our roadmap would coincide with Zig's in terms of\nstability. We wanted to invest for the next 20 years and didn't want\nto be stuck with C/C++ or compiler/language complexity and pay a tax\nfor the lifetime of the project."),(0,r.kt)("h2",{id:"is-tigerbeetle-ready-for-production"},"Is TigerBeetle ready for production?"),(0,r.kt)("p",null,"Not yet! TigerBeetle was started in 2020 and you're watching us build\nthe plane while we're flying it. We are working with design partners\nand TigerBeetle is being used in corporate \"lab\" settings. Likewise,\nwe encourage you to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetledb/tigerbeetle#quickstart"},"try out\nTigerBeetle"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetledb/tigerbeetle#short-term-roadmap"},"follow our\ndevelopment"),",\nand ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/tigerbeetle/shared_invite/zt-1gf3qnvkz-GwkosudMCM3KGbGiSu87RQ"},"give feedback"),"!"))}h.isMDXComponent=!0}}]);