"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9503],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="Data Modeling",s={unversionedId:"develop/data-modeling",id:"develop/data-modeling",title:"Data Modeling",description:"This section describes various aspects of the TigerBeetle data model and provides some suggestions",source:"@site/pages/develop/data-modeling.md",sourceDirName:"develop",slug:"/develop/data-modeling",permalink:"/develop/data-modeling",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/develop/data-modeling.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Developing Applications on TigerBeetle",permalink:"/develop/"},next:{title:"Two-Phase Transfers",permalink:"/develop/two-phase-transfers"}},l={},d=[{value:"Accounts, Transfers, and Ledgers",id:"accounts-transfers-and-ledgers",level:2},{value:"Ledgers",id:"ledgers",level:3},{value:"Debits vs Credits",id:"debits-vs-credits",level:2},{value:"Debit Balances",id:"debit-balances",level:3},{value:"Credit Balances",id:"credit-balances",level:3},{value:"Example",id:"example",level:3},{value:"Compound Transfers",id:"compound-transfers",level:3},{value:"Fractional Amounts and Asset Scale",id:"fractional-amounts-and-asset-scale",level:2},{value:"Asset Scale",id:"asset-scale",level:3},{value:"Examples",id:"examples",level:3},{value:"Oversized Amounts",id:"oversized-amounts",level:3},{value:"<code>user_data</code>",id:"user_data",level:2},{value:"<code>id</code>",id:"id",level:2},{value:"TigerBeetle Time-Based Identifiers (Recommended)",id:"tigerbeetle-time-based-identifiers-recommended",level:3},{value:"Reuse Foreign Identifier",id:"reuse-foreign-identifier",level:3},{value:"<code>code</code>",id:"code",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-modeling"},"Data Modeling"),(0,i.kt)("p",null,"This section describes various aspects of the TigerBeetle data model and provides some suggestions\nfor how you can map your application's requirements onto the data model."),(0,i.kt)("h2",{id:"accounts-transfers-and-ledgers"},"Accounts, Transfers, and Ledgers"),(0,i.kt)("p",null,"The TigerBeetle data model consists of ",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts"},(0,i.kt)("inlineCode",{parentName:"a"},"Account"),"s"),",\n",(0,i.kt)("a",{parentName:"p",href:"/reference/transfers"},(0,i.kt)("inlineCode",{parentName:"a"},"Transfer"),"s"),", and ledgers."),(0,i.kt)("h3",{id:"ledgers"},"Ledgers"),(0,i.kt)("p",null,"Ledgers partition accounts into groups that may represent a currency or asset type or any other\nlogical grouping. Only accounts on the same ledger can transact directly, but you can use atomically\nlinked transfers to implement ",(0,i.kt)("a",{parentName:"p",href:"/develop/recipes/currency-exchange"},"currency exchange"),"."),(0,i.kt)("p",null,"Ledgers are only stored in TigerBeetle as a numeric identifier on the\n",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#ledger"},"account")," and ",(0,i.kt)("a",{parentName:"p",href:"/reference/transfers"},"transfer")," data\nstructures. You may want to store additional metadata about each ledger in a ",(0,i.kt)("a",{parentName:"p",href:"/develop/#tigerbeetle-in-your-system-architecture"},"general-purpose\ndatabase"),"."),(0,i.kt)("p",null,"You can also use different ledgers to further partition accounts, beyond asset type. For example, if\nyou have a multi-tenant setup where you are tracking balances for your customers' end-users, you\nmight have a ledger for each of your customers. If customers have end-user accounts in multiple\ncurrencies, each of your customers would have multiple ledgers."),(0,i.kt)("h2",{id:"debits-vs-credits"},"Debits vs Credits"),(0,i.kt)("p",null,"TigerBeetle tracks each account's cumulative posted debits and cumulative posted credits. In\ndouble-entry accounting, an account balance is the difference between the two \u2014 computed as either\n",(0,i.kt)("inlineCode",{parentName:"p"},"debits - credits")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"credits - debits"),", depending on the type of account. It is up to the\napplication to compute the balance from the cumulative debits/credits."),(0,i.kt)("p",null,"From the database's perspective the distinction is arbitrary, but accounting conventions recommend\nusing a certain balance type for certain types of accounts."),(0,i.kt)("h3",{id:"debit-balances"},"Debit Balances"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"balance = debits - credits")),(0,i.kt)("p",null,"By convention, debit balances are used to represent:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operator's Assets"),(0,i.kt)("li",{parentName:"ul"},"Operator's Expenses")),(0,i.kt)("p",null,"To enforce a positive (non-negative) debit balance, use\n",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#flagscredits_must_not_exceed_debits"},(0,i.kt)("inlineCode",{parentName:"a"},"flags.credits_must_not_exceed_debits")),"."),(0,i.kt)("h3",{id:"credit-balances"},"Credit Balances"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"balance = credits - debits")),(0,i.kt)("p",null,"By convention, credit balances are used to represent:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operators's Liabilities"),(0,i.kt)("li",{parentName:"ul"},"Equity in the Operator's Business"),(0,i.kt)("li",{parentName:"ul"},"Operator's Income")),(0,i.kt)("p",null,"To enforce a positive (non-negative) credit balance, use\n",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#flagsdebits_must_not_exceed_credits"},(0,i.kt)("inlineCode",{parentName:"a"},"flags.debits_must_not_exceed_credits")),".\nFor example, a customer account that is represented as an Operator's Liability would use this flag\nto ensure that the balance cannot go negative."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"For example, if TigerBeetle is operated by a bank, with customers Alice and Bob, its ledger might\nlook something like this:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Account Owner"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Debits Posted"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Credits Posted"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Flags"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bank"),(0,i.kt)("td",{parentName:"tr",align:"right"},"30"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"credits_must_not_exceed_debits"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Alice"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"debits_must_not_exceed_credits"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bob"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"debits_must_not_exceed_credits"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The bank has a total of $30 in assets."),(0,i.kt)("li",{parentName:"ul"},"Alice and Bob have deposited money ($20 and $10 respectively) in the bank \u2014 from the bank's\nperspective this is a liability."),(0,i.kt)("li",{parentName:"ul"},'Alice and Bob cannot "overdraw" their account \u2014 that is, their balance will never be negative.'),(0,i.kt)("li",{parentName:"ul"},"A transfer from Alice to Bob would debit Alice's account and credit Bob's (decreasing the bank's\nliability to Alice while increasing the bank's liability to Bob).")),(0,i.kt)("h3",{id:"compound-transfers"},"Compound Transfers"),(0,i.kt)("p",null,"[",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer"),"s]"," in TigerBeetle debit a single account and credit a single account. You can read more\nabout implementing compound transfers in ",(0,i.kt)("a",{parentName:"p",href:"/develop/recipes/multi-debit-credit-transfers"},"Multi-Debit, Multi-Credit\nTransfers"),"."),(0,i.kt)("h2",{id:"fractional-amounts-and-asset-scale"},"Fractional Amounts and Asset Scale"),(0,i.kt)("p",null,"To maximize precision and efficiency, ",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts"},(0,i.kt)("inlineCode",{parentName:"a"},"Account"))," debits/credits and\n",(0,i.kt)("a",{parentName:"p",href:"/reference/transfers"},(0,i.kt)("inlineCode",{parentName:"a"},"Transfer"))," amounts are unsigned 128-bit integers. However, currencies\nare often denominated in fractional amounts."),(0,i.kt)("p",null,"To represent a fractional amount in TigerBeetle, ",(0,i.kt)("strong",{parentName:"p"},"map the smallest useful unit of the fractional\ncurrency to 1"),". Consider all amounts in TigerBeetle as a multiple of that unit."),(0,i.kt)("p",null,"Applications may rescale the integer amounts as necessary when rendering or interfacing with other\nsystems. But when working with fractional amounts, calculations should be performed on the integers\nto avoid loss of precision due to floating-point approximations."),(0,i.kt)("p",null,"TigerBeetle stores information precisely and efficiently, while applications can still present\nfractional amounts to their users in a way that they are familiar with seeing them."),(0,i.kt)("h3",{id:"asset-scale"},"Asset Scale"),(0,i.kt)("p",null,"When the multiplier is a power of 10 (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"10 ^ n"),"), then the exponent ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," is referred to as an\n",(0,i.kt)("em",{parentName:"p"},"asset scale"),". For example, representing USD in cents uses an asset scale of ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In USD, ",(0,i.kt)("inlineCode",{parentName:"li"},"$1")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"100")," cents. So for example,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The fractional amount ",(0,i.kt)("inlineCode",{parentName:"li"},"$0.45")," is represented as the integer ",(0,i.kt)("inlineCode",{parentName:"li"},"45"),"."),(0,i.kt)("li",{parentName:"ul"},"The fractional amount ",(0,i.kt)("inlineCode",{parentName:"li"},"$123.00")," is represented as the integer ",(0,i.kt)("inlineCode",{parentName:"li"},"12300"),"."),(0,i.kt)("li",{parentName:"ul"},"The fractional amount ",(0,i.kt)("inlineCode",{parentName:"li"},"$123.45")," is represented as the integer ",(0,i.kt)("inlineCode",{parentName:"li"},"12345"),".")))),(0,i.kt)("h3",{id:"oversized-amounts"},"Oversized Amounts"),(0,i.kt)("p",null,"The other direction works as well. If the smallest useful unit of a currency is ",(0,i.kt)("inlineCode",{parentName:"p"},"10,000,000 \xa4"),", then\nit can be scaled down to the integer ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("p",null,"The 128-bit representation defines the precision, but not the scale."),(0,i.kt)("h2",{id:"user_data"},(0,i.kt)("inlineCode",{parentName:"h2"},"user_data")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"user_data_128"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"user_data_64")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"user_data_32")," are the most flexible fields in the schema (for\nboth ",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts"},"accounts")," and ",(0,i.kt)("a",{parentName:"p",href:"/reference/transfers"},"transfers"),"). Each\n",(0,i.kt)("inlineCode",{parentName:"p"},"user_data")," field's contents are arbitrary, interpreted only by the application."),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"user_data")," field is indexed for efficient point and range queries."),(0,i.kt)("p",null,"While the usage of each field is entirely up to you, one way of thinking about each of the fields\nis:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_data_128"),' - this might store the "who" and/or "what" of a transfer. For example, it could be\na pointer to a business entity stored within the ',(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Control_plane"},"control\nplane")," database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_data_64"),' - this might store a second timestamp for "when" the transaction originated in the\nreal world, rather than when the transfer was ',(0,i.kt)("a",{parentName:"li",href:"/develop/time#why-tigerbeetle-manages-timestamps"},"timestamped by\nTigerBeetle"),". This can be used if you need to model\n",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Bitemporal_modeling"},"bitemporality"),". Alternatively, if you do not\nneed this to be used for a timestamp, you could use this field in place of the ",(0,i.kt)("inlineCode",{parentName:"li"},"user_data_128"),' to\nstore the "who"/"what".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user_data_32"),' - this might store the "where" of a transfer. For example, it could store the\njurisdiction where the transaction originated in the real world. In certain cases, such as for\ncross-border remittances, it might not be enough to have the UTC timestamp and you may want to\nknow the transfer\'s locale.')),(0,i.kt)("p",null,"(Note that the ",(0,i.kt)("a",{parentName:"p",href:"#code"},(0,i.kt)("inlineCode",{parentName:"a"},"code")),' can be used to encode the "why" of a transfer.)'),(0,i.kt)("p",null,"Any of the ",(0,i.kt)("inlineCode",{parentName:"p"},"user_data")," fields can be used as a group identifier for objects that will be queried\ntogether. For example, for multiple transfers used for ",(0,i.kt)("a",{parentName:"p",href:"/develop/recipes/currency-exchange"},"currency\nexchange"),"."),(0,i.kt)("h2",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h2"},"id")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field uniquely identifies each ",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#id"},(0,i.kt)("inlineCode",{parentName:"a"},"Account"))," and\n",(0,i.kt)("a",{parentName:"p",href:"/reference/transfers#id"},(0,i.kt)("inlineCode",{parentName:"a"},"Transfer"))," within the cluster."),(0,i.kt)("p",null,"The primary purpose of an ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),' is to serve as an "idempotency key" \u2014 to avoid executing an event\ntwice. For example, if a client creates a transfer but the server\'s reply is lost, the client (or\napplication) will retry \u2014 the database must not transfer the money twice.'),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"s are unique per cluster -- not per ledger. You should attach a separate identifier in\nthe ",(0,i.kt)("a",{parentName:"p",href:"#user_data"},(0,i.kt)("inlineCode",{parentName:"a"},"user_data"))," field if you want to store a connection between multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Account"),"s or\nmultiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer"),"s that are related to one another. For example, different currency ",(0,i.kt)("inlineCode",{parentName:"p"},"Account"),"s\nbelonging to the same user or multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer"),"s that are part of a ",(0,i.kt)("a",{parentName:"p",href:"/develop/recipes/currency-exchange"},"currency\nexchange"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#tigerbeetle-time-based-identifiers-recommended"},"TigerBeetle Time-Based Identifiers")," are\nrecommended for most applications."),(0,i.kt)("p",null,"When selecting an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," scheme:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Idempotency is particularly important (and difficult) in the context of ",(0,i.kt)("a",{parentName:"li",href:"/develop/consistency#consistency-with-foreign-databases"},"application crash\nrecovery"),"."),(0,i.kt)("li",{parentName:"ul"},"Be careful to ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Birthday_problem"},"avoid ",(0,i.kt)("inlineCode",{parentName:"a"},"id")," collisions"),"."),(0,i.kt)("li",{parentName:"ul"},"An account and a transfer may share the same ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),' (they belong to different "namespaces"), but\nthis is not recommended because other systems (that you may later connect to TigerBeetle) may use\na single "namespace" for all objects.'),(0,i.kt)("li",{parentName:"ul"},"Avoid requiring a central oracle to generate each unique ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," (e.g. an auto-increment field in\nSQL). A central oracle may become a performance bottleneck when creating accounts/transfers."),(0,i.kt)("li",{parentName:"ul"},"Sequences of identifiers with long runs of strictly increasing (or strictly decreasing) values are\namenable to optimization, leading to higher database throughput."),(0,i.kt)("li",{parentName:"ul"},"Random identifiers are not recommended \u2013 they can't take advantage of all of the LSM\noptimizations. (Random identifiers have ~10% lower throughput than strictly-increasing ULIDs).")),(0,i.kt)("h3",{id:"tigerbeetle-time-based-identifiers-recommended"},"TigerBeetle Time-Based Identifiers (Recommended)"),(0,i.kt)("p",null,"TigerBeetle recommends using a specific ID scheme for most applications. It is time-based and\nlexicographically sortable. The scheme is inspired by ULIDs and UUIDv7s but is better able to take\nadvantage of LSM optimizations, which leads to higher database throughput."),(0,i.kt)("p",null,"TigerBeetle clients include an ",(0,i.kt)("inlineCode",{parentName:"p"},"id()")," function to generate IDs using the recommended scheme."),(0,i.kt)("p",null,"TigerBeetle IDs consist of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"48 bits of (millisecond) timestamp (high-order bits)"),(0,i.kt)("li",{parentName:"ul"},"80 bits of randomness (low-order bits)")),(0,i.kt)("p",null,"When creating multiple objects during the same millisecond, we increment the random bytes rather\nthan generating new random bytes. Furthermore, it is important that IDs are stored in little-endian\nwith the random bytes as the lower-order bits and the timestamp as the higher-order bits. These\ndetails ensure that a sequence of objects have strictly increasing IDs according to the server,\nwhich improves database optimization."),(0,i.kt)("p",null,"Similar to ULIDs and UUIDv7s, these IDs have the following benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"they have an insignificant risk of collision."),(0,i.kt)("li",{parentName:"ul"},"they do not require a central oracle to generate.")),(0,i.kt)("h3",{id:"reuse-foreign-identifier"},"Reuse Foreign Identifier"),(0,i.kt)("p",null,"This technique is most appropriate when integrating TigerBeetle with an existing application where\nTigerBeetle accounts or transfers map one-to-one with an entity in the foreign database."),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),' to a "foreign key" \u2014 that is, reuse an identifier of a corresponding object from another\ndatabase. For example, if every user (within the application\'s database) has a single account, then\nthe identifier within the foreign database can be used as the ',(0,i.kt)("inlineCode",{parentName:"p"},"Account.id")," within TigerBeetle."),(0,i.kt)("p",null,"To reuse the foreign identifier, it must conform to TigerBeetle's ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"\n",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#id"},"constraints"),"."),(0,i.kt)("h2",{id:"code"},(0,i.kt)("inlineCode",{parentName:"h2"},"code")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"code"),' identifier represents the "why" for an Account or Transfer.'),(0,i.kt)("p",null,"On an ",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#code"},(0,i.kt)("inlineCode",{parentName:"a"},"Account")),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," indicates the account type, such as\nassets, liabilities, equity, income, or expenses, and subcategories within those classification."),(0,i.kt)("p",null,"On a ",(0,i.kt)("a",{parentName:"p",href:"/reference/transfers#code"},(0,i.kt)("inlineCode",{parentName:"a"},"Transfer")),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," indicates why a given transfer is\nhappening, such as a purchase, refund, currency exchange, etc."),(0,i.kt)("p",null,"When you start building out your application on top of TigerBeetle, you may find it helpful to list\nout all of the known types of accounts and movements of funds and mapping each of these to ",(0,i.kt)("inlineCode",{parentName:"p"},"code"),"\nnumbers or ranges."))}u.isMDXComponent=!0}}]);