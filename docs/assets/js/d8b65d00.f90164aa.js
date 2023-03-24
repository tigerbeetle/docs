"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[347],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||a;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3814:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},i="lookup_transfers",s={unversionedId:"reference/operations/lookup_transfers",id:"reference/operations/lookup_transfers",title:"lookup_transfers",description:"Fetch one or more transfers by their ids.",source:"@site/pages/reference/operations/lookup_transfers.md",sourceDirName:"reference/operations",slug:"/reference/operations/lookup_transfers",permalink:"/reference/operations/lookup_transfers",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/reference/operations/lookup_transfers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lookup_accounts",permalink:"/reference/operations/lookup_accounts"},next:{title:"FAQ",permalink:"/FAQ"}},l={},p=[{value:"Event",id:"event",level:2},{value:"Result",id:"result",level:2}],c={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lookup_transfers"},(0,o.kt)("inlineCode",{parentName:"h1"},"lookup_transfers")),(0,o.kt)("p",null,"Fetch one or more transfers by their ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"s."),(0,o.kt)("h2",{id:"event"},"Event"),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/reference/transfers#id"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," belonging to a ",(0,o.kt)("a",{parentName:"p",href:"/reference/transfers"},(0,o.kt)("inlineCode",{parentName:"a"},"Transfer")),"."),(0,o.kt)("h2",{id:"result"},"Result"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the transfer exists, return the ",(0,o.kt)("a",{parentName:"li",href:"/reference/transfers"},(0,o.kt)("inlineCode",{parentName:"a"},"Transfer")),"."),(0,o.kt)("li",{parentName:"ul"},"If the transfer does not exist, return nothing.")))}f.isMDXComponent=!0}}]);