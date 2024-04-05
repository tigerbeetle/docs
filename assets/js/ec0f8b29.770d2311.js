"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},i=void 0,s={unversionedId:"about/database-for-accounting",id:"about/database-for-accounting",title:"database-for-accounting",description:"A Database for Accounting",source:"@site/pages/about/database-for-accounting.md",sourceDirName:"about",slug:"/about/database-for-accounting",permalink:"/about/database-for-accounting",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/about/database-for-accounting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"double-entry-accounting",permalink:"/about/double-entry-accounting"},next:{title:"Safety",permalink:"/about/safety"}},c={},l=[{value:"A Database for Accounting",id:"a-database-for-accounting",level:2},{value:"Why Would I Want A Dedicated Distributed Database For Accounting?",id:"why-would-i-want-a-dedicated-distributed-database-for-accounting",level:2},{value:"How Does TigerBeetle Fit Into My Architecture?",id:"how-does-tigerbeetle-fit-into-my-architecture",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"a-database-for-accounting"},"A Database for Accounting"),(0,r.kt)("h2",{id:"why-would-i-want-a-dedicated-distributed-database-for-accounting"},"Why Would I Want A Dedicated Distributed Database For Accounting?"),(0,r.kt)("p",null,"You can do accounting with any database, it's true. Existing companies use PostgreSQL or MongoDB or\nany other general-purpose database. However, this leaves significant work for the developer and\noperator. You must figure out high availability, fault-tolerance, and consistency. You must figure\nout how to scale as you add users and transfers. And of course, you must re-implement all the\ndouble-entry and ledger primitives, which are subtle to get right!"),(0,r.kt)("p",null,"TigerBeetle is focused on just one thing: accounting reliably at scale. TigerBeetle does\ndouble-entry accounting and as a database has only two data types: accounts, and transfers of money\nbetween accounts. TigerBeetle also goes beyond typical ledgers in that it's not only great at\ntracking money within a system, but has a built-in two-phase commit coordinator to help you track\nmoney as it moves between systems\u2014even different companies that have entirely different ledger\narchitectures! It has built in consensus for high availability, and recovery mechanisms that surpass\nmost databases today."),(0,r.kt)("p",null,"Additionally, TigerBeetle was designed precisely for high performance accounting. We've seen teams\nstruggle to reach on the order of 1,000s of transfers per second when they've built on PostgreSQL\nand MongoDB. It comes down to contention. For example, a business may have a few million customers\nbut only a few bank accounts which will contend for row locks and become the bottleneck (as\ntransfers are serialized through them). With this challenge in mind, we're designing TigerBeetle to\nachieve 1,000,000 transfers per second on commodity hardware."),(0,r.kt)("p",null,"With financial data, it's also important not to lump it together with general purpose data. The risk\nprofile is different: retention policies, compliance requirements, and privacy concerns. In auditing\nthe term is \u201cseparation of concerns\u201d. And the performance characteristics, auditability, and\navailability requirements are also dissimilar from general purpose data. In much the same way that\nyou would store large objects in an object store, or streaming data in a queue, you really do want\nseparation of concerns for your financial data and a mission critical database to store it."),(0,r.kt)("h2",{id:"how-does-tigerbeetle-fit-into-my-architecture"},"How Does TigerBeetle Fit Into My Architecture?"),(0,r.kt)("p",null,"TigerBeetle is a ledger. It is not designed to be a general-purpose metadata store. But there is no\nsingle correct way to use TigerBeetle."),(0,r.kt)("p",null,"Here is an example of how you might integrate with TigerBeetle in a payment system."),(0,r.kt)("p",null,"You might keep account metadata in your existing database (say, PostgreSQL or MongoDB). Then create\nan account in TigerBeetle with the ",(0,r.kt)("a",{parentName:"p",href:"/develop/data-modeling#reuse-foreign-identifier"},"same\nidentifier")," to map it back to the account with\nmetadata in your existing database."),(0,r.kt)("p",null,"Then as you need to process transfers between accounts, you store those transfers in TigerBeetle."),(0,r.kt)("p",null,"TigerBeetle comes with built in business logic like accepting/rejecting related or linked transfers\natomically as a unit, rejecting transfers if the accounts involved would exceed their net debit or\ncredit balances, and other business logic that you can toggle."),(0,r.kt)("p",null,"When you need to report on transfers, you'll use our query API. Queries are currently limited to\nlookups by account ID or transfer ID. However, we're already indexing all fields and a rich\nrelational query engine is in the works."),(0,r.kt)("p",null,"You will also be able to export all historic accounts and transfers."))}p.isMDXComponent=!0}}]);