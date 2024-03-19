"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1347],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,d=u["".concat(s,".").concat(m)]||u[m]||f[m]||o;return t?n.createElement(d,l(l({ref:r},c),{},{components:t})):n.createElement(d,l({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3814:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={},l="lookup_transfers",i={unversionedId:"reference/operations/lookup_transfers",id:"reference/operations/lookup_transfers",title:"lookup_transfers",description:"Fetch one or more transfers by their ids.",source:"@site/pages/reference/operations/lookup_transfers.md",sourceDirName:"reference/operations",slug:"/reference/operations/lookup_transfers",permalink:"/reference/operations/lookup_transfers",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/reference/operations/lookup_transfers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lookup_accounts",permalink:"/reference/operations/lookup_accounts"},next:{title:"FAQ",permalink:"/FAQ"}},s={},p=[{value:"Event",id:"event",level:2},{value:"Result",id:"result",level:2},{value:"Client libraries",id:"client-libraries",level:2},{value:"Internals",id:"internals",level:2}],c={toc:p},u="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lookup_transfers"},(0,a.kt)("inlineCode",{parentName:"h1"},"lookup_transfers")),(0,a.kt)("p",null,"Fetch one or more transfers by their ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"s."),(0,a.kt)("h2",{id:"event"},"Event"),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers#id"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," belonging to a ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer")),"."),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the transfer exists, return the ",(0,a.kt)("a",{parentName:"li",href:"/reference/transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer")),"."),(0,a.kt)("li",{parentName:"ul"},"If the transfer does not exist, return nothing.")),(0,a.kt)("h2",{id:"client-libraries"},"Client libraries"),(0,a.kt)("p",null,"For language-specific docs see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/dotnet#transfer-lookup"},".NET library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/java#transfer-lookup"},"Java library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/go#transfer-lookup"},"Go library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/clients/node#transfer-lookup"},"Node.js library"))),(0,a.kt)("h2",{id:"internals"},"Internals"),(0,a.kt)("p",null,"If you're curious and want to learn more, you can find the source code\nfor looking up a transfer in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/state_machine.zig"},"src/state_machine.zig"),". Search\nfor ",(0,a.kt)("inlineCode",{parentName:"p"},"fn execute_lookup_transfers("),"."))}f.isMDXComponent=!0}}]);