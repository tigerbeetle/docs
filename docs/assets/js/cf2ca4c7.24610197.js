"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5856:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={},o="Data Modeling",l={unversionedId:"usage/data-modeling",id:"usage/data-modeling",title:"Data Modeling",description:"TigerBeetle is a domain-specific database \u2014 its schema of Accounts",source:"@site/pages/usage/data-modeling.md",sourceDirName:"usage",slug:"/usage/data-modeling",permalink:"/usage/data-modeling",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/usage/data-modeling.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating accounts and transfers in the Node CLI",permalink:"/usage/node-cli"},next:{title:"Integration",permalink:"/usage/integration"}},s={},d=[{value:"Debits vs Credits",id:"debits-vs-credits",level:2},{value:"Example",id:"example",level:3},{value:"<code>user_data</code>",id:"user_data",level:2},{value:"<code>id</code>",id:"id",level:2},{value:"Examples",id:"examples",level:3},{value:"Random Identifier",id:"random-identifier",level:4},{value:"Reuse Foreign Identifier",id:"reuse-foreign-identifier",level:4},{value:"Examples (Advanced)",id:"examples-advanced",level:3},{value:"Logically Grouped Objects",id:"logically-grouped-objects",level:4},{value:"Identifier Offsets",id:"identifier-offsets",level:5},{value:"Identifier Prefixes",id:"identifier-prefixes",level:5}],p={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-modeling"},"Data Modeling"),(0,i.kt)("p",null,"TigerBeetle is a domain-specific database \u2014 its schema of ",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts"},(0,i.kt)("inlineCode",{parentName:"a"},"Account"),"s"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"/reference/transfers"},(0,i.kt)("inlineCode",{parentName:"a"},"Transfer"),"s")," is built-in and fixed. In return for this prescriptive\ndesign, it provides excellent performance, integrated business logic, and powerful invariants.\nThis section is a sample of techniques for mapping an application's requirements onto TigerBeetle's\ndata model. Which (if any) of these techniques are suitable is highly application-specific."),(0,i.kt)("p",null,"When possible, round trips and coordination can be minimized by encoding application invariants\ndirectly in TigerBeetle rather than implementing them in the application itself (or with a foreign\ndatabase). This is useful for both maintaining consistency and performance."),(0,i.kt)("h2",{id:"debits-vs-credits"},"Debits vs Credits"),(0,i.kt)("p",null,"TigerBeetle tracks each account's cumulative posted debits and cumulative posted credits.\nIn double-entry accounting, an account balance is the difference between the two \u2014 computed as\neither ",(0,i.kt)("inlineCode",{parentName:"p"},"debits - credits")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"credits - debits")," depending on the type of account. It is up to the\napplication to compute the balance from the cumulative debits/credits."),(0,i.kt)("p",null,"From the database's perspective the distinction is arbitrary, but by convention:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"balance = debits - credits")," for accounts representing the database operator's assets.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Known as a "debit balance".'),(0,i.kt)("li",{parentName:"ul"},"Accounts with limits use\n",(0,i.kt)("a",{parentName:"li",href:"/reference/accounts#flagscredits_must_not_exceed_debits"},(0,i.kt)("inlineCode",{parentName:"a"},"flags.credits_must_not_exceed_debits")),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"balance = credits - debits")," for accounts representing the database operator's liabilities.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Known as a "credit balance".'),(0,i.kt)("li",{parentName:"ul"},"Accounts with limits use\n",(0,i.kt)("a",{parentName:"li",href:"/reference/accounts#flagsdebits_must_not_exceed_credits"},(0,i.kt)("inlineCode",{parentName:"a"},"flags.debits_must_not_exceed_credits")),"."))),(0,i.kt)("li",{parentName:"ul"},'A transfer "from" account ',(0,i.kt)("inlineCode",{parentName:"li"},"A"),' "to" account ',(0,i.kt)("inlineCode",{parentName:"li"},"B")," credits account ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," and debits account ",(0,i.kt)("inlineCode",{parentName:"li"},"B"),".")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"For example, if TigerBeetle is operated by a bank, with customers Alice and Bob, its\nledger might look something like this:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Account Owner"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Debits Posted"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Credits Posted"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Flags"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bank"),(0,i.kt)("td",{parentName:"tr",align:"right"},"30"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"credits_must_not_exceed_debits"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Alice"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"20"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"debits_must_not_exceed_credits"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Bob"),(0,i.kt)("td",{parentName:"tr",align:"right"},"0"),(0,i.kt)("td",{parentName:"tr",align:"right"},"10"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"debits_must_not_exceed_credits"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The bank has a total of $30 in assets."),(0,i.kt)("li",{parentName:"ul"},"Alice and Bob have deposited money ($20 and $10 respectively) in the bank \u2014 from the bank's\nperspective this is a liability."),(0,i.kt)("li",{parentName:"ul"},'Alice and Bob cannot "overdraw" their account \u2014 that is, their balance will never be negative.')),(0,i.kt)("h2",{id:"user_data"},(0,i.kt)("inlineCode",{parentName:"h2"},"user_data")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"user_data")," is the most flexible field in the schema (for both\n",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#user_data"},"accounts")," and ",(0,i.kt)("a",{parentName:"p",href:"/reference/transfers#user_data"},"transfers"),").\n",(0,i.kt)("inlineCode",{parentName:"p"},"user_data"),"'s contents are arbitrary, interpreted only by the application."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"user_data")," is indexed for efficient point and range queries."),(0,i.kt)("p",null,"Example uses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"user_data"),' to a "foreign key" \u2014 that is, an identifier of a corresponding object within\nanother database.'),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"user_data")," to a group identifier for objects that will be queried together."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"user_data")," to a transfer or account ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),".\n(TODO: Can we use this for join queries via the query API, or must the application implement them?)")),(0,i.kt)("h2",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h2"},"id")),(0,i.kt)("p",null,"The primary purpose of an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," (for both ",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#id"},"accounts")," and\n",(0,i.kt)("a",{parentName:"p",href:"/reference/transfers#id"},"transfers"),') is to serve as an "idempotency key" \u2014 to avoid\nexecuting an event twice. For example, if a client creates a transfer but the server\'s reply is\nlost, the client (or application) will retry \u2014 the database must not transfer the money twice.'),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#random-identifier"},"Randomly-generated identifiers")," are recommended for most applications."),(0,i.kt)("p",null,"When selecting an ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," scheme:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Idempotency is particularly important (and difficult) in the context of\n",(0,i.kt)("a",{parentName:"li",href:"/usage/integration#consistency-with-foreign-databases"},"application crash recovery"),"."),(0,i.kt)("li",{parentName:"ul"},"Be careful to ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Birthday_problem"},"avoid ",(0,i.kt)("inlineCode",{parentName:"a"},"id")," collisions"),"."),(0,i.kt)("li",{parentName:"ul"},"An account and a transfer may share the same ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),' \u2014 they belong to different "namespaces".'),(0,i.kt)("li",{parentName:"ul"},"Avoid requiring a central oracle to generate each unique ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," (e.g. an auto-increment field in SQL).\nA central oracle may become a performance bottleneck when creating accounts/transfers.")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"random-identifier"},"Random Identifier"),(0,i.kt)("p",null,"Randomly-generated identifiers are recommended for most applications."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Random identifiers require coordination with a secondary database to implement idempotent\n",(0,i.kt)("a",{parentName:"li",href:"/usage/integration#consistency-with-foreign-databases"},"application crash recovery"),"."),(0,i.kt)("li",{parentName:"ul"},"Random identifiers have an insignificant risk of collisions."),(0,i.kt)("li",{parentName:"ul"},"Random identifiers do not require a central oracle."),(0,i.kt)("li",{parentName:"ul"},"Only point queries are useful for fetching randomly-generated identifiers.")),(0,i.kt)("p",null,"To maximize id entropy, prefer a cryptographically-secure PRNG (most languages have one in their\ncryptography library). We don't recommend UUIDv4 because it uses a few fixed bits."),(0,i.kt)("h4",{id:"reuse-foreign-identifier"},"Reuse Foreign Identifier"),(0,i.kt)("p",null,"This technique is most appropriate when integrating TigerBeetle with an existing application\nwhere TigerBeetle accounts or transfers map one-to-one with an entity in the foreign database."),(0,i.kt)("p",null,"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),' to a "foreign key" \u2014 that is, reuse an identifier of a corresponding object from another\ndatabase. For example, if every user (within the application\'s database) has a single account, then\nthe identifier within the foreign database can be used as the ',(0,i.kt)("inlineCode",{parentName:"p"},"Account.id")," within TigerBeetle."),(0,i.kt)("p",null,"To reuse the foreign identifier, it must conform to TigerBeetle's ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"\n",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#id"},"constraints"),"."),(0,i.kt)("p",null,"Like ",(0,i.kt)("a",{parentName:"p",href:"#random-identifier"},"randomly-generated identifiers"),", this technique requires careful\ncoordination with the foreign database for idempotent\n",(0,i.kt)("a",{parentName:"p",href:"/usage/integration#consistency-with-foreign-databases"},"application crash recovery"),"."),(0,i.kt)("h3",{id:"examples-advanced"},"Examples (Advanced)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#random-identifier"},"Randomly-generated identifiers")," are recommended for most applications."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"id")," is mostly accessed by point queries, but it is indexed for efficient iteration by range\nqueries as well. The schemes described in this section take advantage of that index ordering."),(0,i.kt)("h4",{id:"logically-grouped-objects"},"Logically Grouped Objects"),(0,i.kt)("p",null,"Often accounts or transfers are logically grouped together from the application's perspective.\nFor example, a ",(0,i.kt)("a",{parentName:"p",href:"/recipes/currency-exchange"},"simple currency exchange")," transaction is one\nlogical transfer conducted between four accounts \u2014 two physical transfers."),(0,i.kt)("p",null,"A non-random identifier scheme can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"leave ",(0,i.kt)("inlineCode",{parentName:"li"},"user_data")," free for a different purpose, and"),(0,i.kt)("li",{parentName:"ul"},"allow a group's members and roles to be derived by the application code,")),(0,i.kt)("p",null,"without relying on a ",(0,i.kt)("a",{parentName:"p",href:"#reuse-foreign-identifier"},"foreign database")," to store metadata for each\nmember of the group."),(0,i.kt)("p",null,"A group may (but does not necessarily) correspond to objects chained by\n",(0,i.kt)("a",{parentName:"p",href:"/reference/transfers#flagslinked"},(0,i.kt)("inlineCode",{parentName:"a"},"flags.linked")),"."),(0,i.kt)("h5",{id:"identifier-offsets"},"Identifier Offsets"),(0,i.kt)("p",null,'For each group, generate a single "root" ',(0,i.kt)("inlineCode",{parentName:"p"},"id"),", and set group member's ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"s relative to that root."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"From the root, use known offsets to derive member identifiers (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"root + 1"),")."),(0,i.kt)("li",{parentName:"ul"},"From a group member, use ",(0,i.kt)("inlineCode",{parentName:"li"},"code"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ledger"),", or both to determine the object's role and derive the\nroot identifier.")),(0,i.kt)("p",null,"This technique enables a simple range query to iterate every member of a target group."),(0,i.kt)("p",null,"If groups are large (or variable-sized), it may be be preferable to rely on\n",(0,i.kt)("a",{parentName:"p",href:"#user_data"},(0,i.kt)("inlineCode",{parentName:"a"},"user_data")," for grouping")," to sidestep the risk of ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," collisions."),(0,i.kt)("h5",{id:"identifier-prefixes"},"Identifier Prefixes"),(0,i.kt)("p",null,"When a group consists of a fixed number of heterogeneous members (each with a distinct role),\n",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"s with the same role could be created with a common, application-known prefix.\nIn this arrangement, the suffix could be randomized, but shared by a group's members."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A group's role is derived from its ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),"'s prefix."),(0,i.kt)("li",{parentName:"ul"},"A group's members are derived by swapping the ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," prefix.")),(0,i.kt)("p",null,"This technique enables a simple range query to iterate every object with a target role."))}u.isMDXComponent=!0}}]);