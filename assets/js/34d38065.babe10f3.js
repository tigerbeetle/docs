"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(o,".").concat(m)]||p[m]||f[m]||c;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<c;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const c={},l="get_account_balances",i={unversionedId:"reference/requests/get_account_balances",id:"reference/requests/get_account_balances",title:"get_account_balances",description:"Fetch the historical AccountBalances of a given Account.",source:"@site/pages/reference/requests/get_account_balances.md",sourceDirName:"reference/requests",slug:"/reference/requests/get_account_balances",permalink:"/reference/requests/get_account_balances",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/reference/requests/get_account_balances.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"create_transfers",permalink:"/reference/requests/create_transfers"},next:{title:"get_account_transfers",permalink:"/reference/requests/get_account_transfers"}},o={},s=[{value:"Event",id:"event",level:2},{value:"Result",id:"result",level:2},{value:"Client libraries",id:"client-libraries",level:2}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get_account_balances"},(0,r.kt)("inlineCode",{parentName:"h1"},"get_account_balances")),(0,r.kt)("p",null,"Fetch the historical ",(0,r.kt)("a",{parentName:"p",href:"/reference/account-balance"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountBalance")),"s of a given ",(0,r.kt)("a",{parentName:"p",href:"/reference/account"},(0,r.kt)("inlineCode",{parentName:"a"},"Account")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Only accounts created with the ",(0,r.kt)("a",{parentName:"strong",href:"/reference/account#flagshistory"},(0,r.kt)("inlineCode",{parentName:"a"},"history"))," flag set retain historical\nbalances.")," This is off by default."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Each balance returned has a corresponding transfer with the same\n",(0,r.kt)("a",{parentName:"p",href:"/reference/transfer#timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"timestamp")),". See the\n",(0,r.kt)("a",{parentName:"p",href:"/reference/requests/get_account_transfers"},(0,r.kt)("inlineCode",{parentName:"a"},"get_account_transfers"))," operation for more details.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The amounts refer to the account balance recorded ",(0,r.kt)("em",{parentName:"p"},"after")," the transfer execution.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/reference/transfer#flagspending"},"Pending")," balances automatically removed due to\n",(0,r.kt)("a",{parentName:"p",href:"/reference/transfer#timeout"},"timeout")," expiration don't change historical balances."))),(0,r.kt)("h2",{id:"event"},"Event"),(0,r.kt)("p",null,"The account filter.\nSee ",(0,r.kt)("a",{parentName:"p",href:"/reference/account-filter"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountFilter"))," for constraints."),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the account has the flag ",(0,r.kt)("a",{parentName:"li",href:"/reference/account#flagshistory"},(0,r.kt)("inlineCode",{parentName:"a"},"history"))," set and any matching\nbalances exist, return an array of ",(0,r.kt)("a",{parentName:"li",href:"/reference/account-balance"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountBalance")),"s."),(0,r.kt)("li",{parentName:"ul"},"If the account does not have the flag ",(0,r.kt)("a",{parentName:"li",href:"/reference/account#flagshistory"},(0,r.kt)("inlineCode",{parentName:"a"},"history"))," set,\nreturn nothing."),(0,r.kt)("li",{parentName:"ul"},"If no matching balances exist, return nothing."),(0,r.kt)("li",{parentName:"ul"},"If any constraint is violated, return nothing.")),(0,r.kt)("h2",{id:"client-libraries"},"Client libraries"),(0,r.kt)("p",null,"For language-specific docs see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/dotnet#get-account-balances"},".NET library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/java#get-account-balances"},"Java library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/go#get-account-balances"},"Go library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/node#get-account-balances"},"Node.js library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/python#get-account-balances"},"Python library"))))}f.isMDXComponent=!0}}]);