"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[329],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=d(n),k=r,s=m["".concat(p,".").concat(k)]||m[k]||g[k]||i;return n?a.createElement(s,l(l({ref:e},c),{},{components:n})):a.createElement(s,l({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1218:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},l="Close Account",o={unversionedId:"recipes/close-account",id:"recipes/close-account",title:"Close Account",description:"In accounting, a closing entry calculates the net debit or credit balance for an account and then",source:"@site/pages/recipes/close-account.md",sourceDirName:"recipes",slug:"/recipes/close-account",permalink:"/recipes/close-account",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/recipes/close-account.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integration",permalink:"/usage/integration"},next:{title:"Currency Exchange",permalink:"/recipes/currency-exchange"}},p={},d=[{value:"Example",id:"example",level:3}],c={toc:d},m="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"close-account"},"Close Account"),(0,r.kt)("p",null,"In accounting, a ",(0,r.kt)("em",{parentName:"p"},"closing entry")," calculates the net debit or credit balance for an account and then\ncredits or debits this balance respectively, to zero the account's balance and move the balance to\nanother account."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Given a set of accounts:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Account"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Debits Pending"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Debits Posted"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Credits Pending"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Credits Posted"),(0,r.kt)("th",{parentName:"tr",align:null},"Flags"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"20"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"debits_must_not_exceed_credits"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"30"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"credits_must_not_exceed_debits"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,'The "closing entries" for accounts ',(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Debit Account"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Credit Account"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Amount"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Amount (recorded)"),(0,r.kt)("th",{parentName:"tr",align:null},"Flags"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"right"},"10"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"balancing_debit")),(0,r.kt)("td",{parentName:"tr",align:null},"(close account ",(0,r.kt)("inlineCode",{parentName:"td"},"A"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:"right"},"25"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"balancing_credit")),(0,r.kt)("td",{parentName:"tr",align:null},"(close account ",(0,r.kt)("inlineCode",{parentName:"td"},"B"),")")))),(0,r.kt)("p",null,"(Pass ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Transfer.amount")," so that the application does not need to know (or query) the balance prior to closing the account.\nThe stored transfer's ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," will be set to the actual (non-zero) amount transferred.)"),(0,r.kt)("p",null,"After committing these transfers, ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"'s balances are zero:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Account"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Debits Pending"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Debits Posted"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Credits Pending"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Credits Posted"),(0,r.kt)("th",{parentName:"tr",align:null},"Flags"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"20"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"20"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"debits_must_not_exceed_credits"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"B")),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"30"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"30"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"credits_must_not_exceed_debits"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"C")),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"25"),(0,r.kt)("td",{parentName:"tr",align:"right"},"0"),(0,r.kt)("td",{parentName:"tr",align:"right"},"10"),(0,r.kt)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);