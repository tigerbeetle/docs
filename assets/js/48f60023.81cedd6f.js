"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,c(c({ref:t},s),{},{components:n})):r.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},c="lookup_accounts",i={unversionedId:"reference/requests/lookup_accounts",id:"reference/requests/lookup_accounts",title:"lookup_accounts",description:"Fetch one or more accounts by their ids.",source:"@site/pages/reference/requests/lookup_accounts.md",sourceDirName:"reference/requests",slug:"/reference/requests/lookup_accounts",permalink:"/reference/requests/lookup_accounts",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/reference/requests/lookup_accounts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get_account_transfers",permalink:"/reference/requests/get_account_transfers"},next:{title:"lookup_transfers",permalink:"/reference/requests/lookup_transfers"}},l={},u=[{value:"Event",id:"event",level:2},{value:"Result",id:"result",level:2},{value:"Client libraries",id:"client-libraries",level:2},{value:"Internals",id:"internals",level:2}],s={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lookup_accounts"},(0,a.kt)("inlineCode",{parentName:"h1"},"lookup_accounts")),(0,a.kt)("p",null,"Fetch one or more accounts by their ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"s."),(0,a.kt)("p",null,"\u26a0\ufe0f Note that you ",(0,a.kt)("strong",{parentName:"p"},"should not")," check an account's balance using this request before creating a\ntransfer. That would not be atomic and the balance could change in between the check and the\ntransfer. Instead, set the\n",(0,a.kt)("a",{parentName:"p",href:"/reference/account#flagsdebits_must_not_exceed_credits"},(0,a.kt)("inlineCode",{parentName:"a"},"debits_must_not_exceed_credits"))," or\n",(0,a.kt)("a",{parentName:"p",href:"/reference/account#flagscredits_must_not_exceed_debits"},(0,a.kt)("inlineCode",{parentName:"a"},"credits_must_not_exceed_debits"))," flag on the\naccounts to limit their account balances. More complex conditional transfers can be expressed using\n",(0,a.kt)("a",{parentName:"p",href:"/coding/recipes/balance-conditional-transfers"},"balance-conditional transfers"),"."),(0,a.kt)("h2",{id:"event"},"Event"),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"/reference/account#id"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," belonging to a ",(0,a.kt)("a",{parentName:"p",href:"/reference/account"},(0,a.kt)("inlineCode",{parentName:"a"},"Account")),"."),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the account exists, return the ",(0,a.kt)("a",{parentName:"li",href:"/reference/account"},(0,a.kt)("inlineCode",{parentName:"a"},"Account")),"."),(0,a.kt)("li",{parentName:"ul"},"If the account does not exist, return nothing.")),(0,a.kt)("h2",{id:"client-libraries"},"Client libraries"),(0,a.kt)("p",null,"For language-specific docs see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/dotnet#account-lookup"},".NET library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/java#account-lookup"},"Java library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/go#account-lookup"},"Go library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/node#account-lookup"},"Node.js library"))),(0,a.kt)("h2",{id:"internals"},"Internals"),(0,a.kt)("p",null,"If you're curious and want to learn more, you can find the source code for looking up an account in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/state_machine.zig"},"src/state_machine.zig"),".\nSearch for ",(0,a.kt)("inlineCode",{parentName:"p"},"fn execute_lookup_accounts("),"."))}f.isMDXComponent=!0}}]);