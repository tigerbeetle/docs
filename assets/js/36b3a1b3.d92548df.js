"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(n),s=r,h=m["".concat(p,".").concat(s)]||m[s]||u[s]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Currency Exchange",o={unversionedId:"develop/recipes/currency-exchange",id:"develop/recipes/currency-exchange",title:"Currency Exchange",description:"Some applications require multiple currencies. For example, a bank may hold balances in many",source:"@site/pages/develop/recipes/currency-exchange.md",sourceDirName:"develop/recipes",slug:"/develop/recipes/currency-exchange",permalink:"/develop/recipes/currency-exchange",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/develop/recipes/currency-exchange.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Time",permalink:"/develop/time"},next:{title:"Multi-Debit, Multi-Credit Transfers",permalink:"/develop/recipes/multi-debit-credit-transfers"}},p={},c=[{value:"Data Modeling",id:"data-modeling",level:2},{value:"Example",id:"example",level:3},{value:"Spread",id:"spread",level:2},{value:"Example",id:"example-1",level:3}],d={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"currency-exchange"},"Currency Exchange"),(0,r.kt)("p",null,"Some applications require multiple currencies. For example, a bank may hold balances in many\ndifferent currencies. If a single logical entity holds multiple currencies, each currency must be\nheld in a separate TigerBeetle ",(0,r.kt)("inlineCode",{parentName:"p"},"Account"),". (Normalizing to a single currency at the application level\nshould be avoided because exchange rates fluctuate)."),(0,r.kt)("p",null,"Currency exchange is a trade of one type of currency (denoted by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ledger"),") for another,\nfacilitated by an entity called the ",(0,r.kt)("em",{parentName:"p"},"liquidity provider"),"."),(0,r.kt)("h2",{id:"data-modeling"},"Data Modeling"),(0,r.kt)("p",null,"Distinct ",(0,r.kt)("a",{parentName:"p",href:"/reference/account#ledger"},(0,r.kt)("inlineCode",{parentName:"a"},"ledger"))," values denote different currencies (or\nother asset types). Transfers between pairs of accounts with different ",(0,r.kt)("inlineCode",{parentName:"p"},"ledger"),"s are\n",(0,r.kt)("a",{parentName:"p",href:"/reference/requests/create_transfers#accounts_must_have_the_same_ledger"},"not permitted"),"."),(0,r.kt)("p",null,"Instead, currency exchange is implemented by creating two\n",(0,r.kt)("a",{parentName:"p",href:"/reference/transfer#flagslinked"},"atomically linked")," different-ledger transfers between\ntwo pairs of same-ledger accounts."),(0,r.kt)("p",null,"A simple currency exchange involves four accounts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"source account")," ",(0,r.kt)("inlineCode",{parentName:"li"},"A\u2081"),", on ledger ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"destination account")," ",(0,r.kt)("inlineCode",{parentName:"li"},"A\u2082"),", on ledger ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"source liquidity account")," ",(0,r.kt)("inlineCode",{parentName:"li"},"L\u2081"),", on ledger ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"destination liquidity account")," ",(0,r.kt)("inlineCode",{parentName:"li"},"L\u2082"),", on ledger ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),".")),(0,r.kt)("p",null,"and two linked transfers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A transfer ",(0,r.kt)("inlineCode",{parentName:"li"},"T\u2081")," from the ",(0,r.kt)("em",{parentName:"li"},"source account")," to the ",(0,r.kt)("em",{parentName:"li"},"source liquidity account"),"."),(0,r.kt)("li",{parentName:"ul"},"A transfer ",(0,r.kt)("inlineCode",{parentName:"li"},"T\u2082")," from the ",(0,r.kt)("em",{parentName:"li"},"destination liquidity account")," to the ",(0,r.kt)("em",{parentName:"li"},"destination account"),".")),(0,r.kt)("p",null,"The transfer amounts vary according to the exchange rate."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both liquidity accounts belong to the liquidity provider (e.g. a bank or exchange)."),(0,r.kt)("li",{parentName:"ul"},"The source and destination accounts may belong to the same entity as one another, or different\nentities, depending on the use case.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Consider sending ",(0,r.kt)("inlineCode",{parentName:"p"},"$100.00")," from account ",(0,r.kt)("inlineCode",{parentName:"p"},"A\u2081")," (denominated in USD) to account ",(0,r.kt)("inlineCode",{parentName:"p"},"A\u2082")," (denominated in\nINR). Assuming an exchange rate of ",(0,r.kt)("inlineCode",{parentName:"p"},"$1.00 = \u20b982.42135"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$100.00 = \u20b98242.135"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Ledger"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Debit Account"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Credit Account"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Amount"),(0,r.kt)("th",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"th"},"flags.linked")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"USD"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"A\u2081")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"L\u2081")),(0,r.kt)("td",{parentName:"tr",align:"right"},"10000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"INR"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"L\u2082")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"A\u2082")),(0,r.kt)("td",{parentName:"tr",align:"right"},"8242135"),(0,r.kt)("td",{parentName:"tr",align:"right"},"false")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Amounts are ",(0,r.kt)("a",{parentName:"li",href:"/develop/data-modeling#fractional-amounts-and-asset-scale"},"represented as integers"),"."),(0,r.kt)("li",{parentName:"ul"},"Because both liquidity accounts belong to the same entity, the entity does not lose money on the\ntransaction.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the exchange rate is precise, the entity breaks even."),(0,r.kt)("li",{parentName:"ul"},"If the exchange rate is not precise, the application should round in favor of the liquidity\naccount to deter arbitrage."))),(0,r.kt)("li",{parentName:"ul"},"Because the two transfers are linked together, they will either both succeed or both fail.")),(0,r.kt)("h2",{id:"spread"},"Spread"),(0,r.kt)("p",null,"In the prior example, the liquidity provider breaks even. A fee (i.e. spread) can be included in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"linked")," chain as a separate transfer from the source account to the source liquidity account (",(0,r.kt)("inlineCode",{parentName:"p"},"A\u2081"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"L\u2081"),")."),(0,r.kt)("p",null,"This is preferable to simply modifying the exchange rate in the liquidity provider's favor because\nit implicitly records the exchange rate and spread at the time of the exchange \u2014 information that\ncannot be derived if the two are combined."),(0,r.kt)("h3",{id:"example-1"},"Example"),(0,r.kt)("p",null,"This depicts the same scenario as the prior example, except the liquidity provider charges a ",(0,r.kt)("inlineCode",{parentName:"p"},"$0.10"),"\nfee for the transaction."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Ledger"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Debit Account"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Credit Account"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Amount"),(0,r.kt)("th",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"th"},"flags.linked")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"USD"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"L\u2081")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"A\u2081")),(0,r.kt)("td",{parentName:"tr",align:"right"},"10000"),(0,r.kt)("td",{parentName:"tr",align:"right"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"USD"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"L\u2081")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"A\u2081")),(0,r.kt)("td",{parentName:"tr",align:"right"},"10"),(0,r.kt)("td",{parentName:"tr",align:"right"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"INR"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"A\u2082")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"L\u2082")),(0,r.kt)("td",{parentName:"tr",align:"right"},"8242135"),(0,r.kt)("td",{parentName:"tr",align:"right"},"false")))))}u.isMDXComponent=!0}}]);