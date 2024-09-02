"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},l="AccountFilter",o={unversionedId:"reference/account-filter",id:"reference/account-filter",title:"AccountFilter",description:"An AccountFilter is a record containing the filter parameters for querying",source:"@site/pages/reference/account-filter.md",sourceDirName:"reference",slug:"/reference/account-filter",permalink:"/reference/account-filter",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/reference/account-filter.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"AccountBalance",permalink:"/reference/account-balance"},next:{title:"QueryFilter",permalink:"/reference/query-filter"}},s={},c=[{value:"Fields",id:"fields",level:2},{value:"<code>account_id</code>",id:"account_id",level:3},{value:"<code>timestamp_min</code>",id:"timestamp_min",level:3},{value:"<code>timestamp_max</code>",id:"timestamp_max",level:3},{value:"<code>limit</code>",id:"limit",level:3},{value:"<code>flags</code>",id:"flags",level:3},{value:"<code>flags.debits</code>",id:"flagsdebits",level:4},{value:"<code>flags.credits</code>",id:"flagscredits",level:4},{value:"<code>flags.reversed</code>",id:"flagsreversed",level:4},{value:"<code>reserved</code>",id:"reserved",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"accountfilter"},(0,a.kt)("inlineCode",{parentName:"h1"},"AccountFilter")),(0,a.kt)("p",null,"An ",(0,a.kt)("inlineCode",{parentName:"p"},"AccountFilter")," is a record containing the filter parameters for querying\nthe ",(0,a.kt)("a",{parentName:"p",href:"/reference/requests/get_account_transfers"},"account transfers"),"\nand the ",(0,a.kt)("a",{parentName:"p",href:"/reference/requests/get_account_balances"},"account historical balances"),"."),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("h3",{id:"account_id"},(0,a.kt)("inlineCode",{parentName:"h3"},"account_id")),(0,a.kt)("p",null,"The unique ",(0,a.kt)("a",{parentName:"p",href:"/reference/account#id"},"identifier")," of the account for which the results will be retrieved."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 128-bit unsigned integer (16 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must not be zero or ",(0,a.kt)("inlineCode",{parentName:"li"},"2^128 - 1"))),(0,a.kt)("h3",{id:"timestamp_min"},(0,a.kt)("inlineCode",{parentName:"h3"},"timestamp_min")),(0,a.kt)("p",null,"The minimum ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.timestamp"))," from which results will be returned, inclusive range.\nOptional; set to zero to disable the lower-bound filter."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must be less than ",(0,a.kt)("inlineCode",{parentName:"li"},"2^63"),".")),(0,a.kt)("h3",{id:"timestamp_max"},(0,a.kt)("inlineCode",{parentName:"h3"},"timestamp_max")),(0,a.kt)("p",null,"The maximum ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.timestamp"))," from which results will be returned, inclusive range.\nOptional; set to zero to disable the upper-bound filter."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must be less than ",(0,a.kt)("inlineCode",{parentName:"li"},"2^63"),".")),(0,a.kt)("h3",{id:"limit"},(0,a.kt)("inlineCode",{parentName:"h3"},"limit")),(0,a.kt)("p",null,"The maximum number of results that can be returned by this query."),(0,a.kt)("p",null,"Limited by the ",(0,a.kt)("a",{parentName:"p",href:"/reference/requests/#batching-events"},"maximum message size"),"."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 32-bit unsigned integer (4 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must not be zero")),(0,a.kt)("h3",{id:"flags"},(0,a.kt)("inlineCode",{parentName:"h3"},"flags")),(0,a.kt)("p",null,"A bitfield that specifies querying behavior."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 32-bit unsigned integer (4 bytes)")),(0,a.kt)("h4",{id:"flagsdebits"},(0,a.kt)("inlineCode",{parentName:"h4"},"flags.debits")),(0,a.kt)("p",null,"Whether or not to include results where the field ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#debit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"debit_account_id")),"\nmatches the parameter ",(0,a.kt)("a",{parentName:"p",href:"#account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"account_id")),"."),(0,a.kt)("h4",{id:"flagscredits"},(0,a.kt)("inlineCode",{parentName:"h4"},"flags.credits")),(0,a.kt)("p",null,"Whether or not to include results where the field ",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#credit_account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"credit_account_id")),"\nmatches the parameter ",(0,a.kt)("a",{parentName:"p",href:"#account_id"},(0,a.kt)("inlineCode",{parentName:"a"},"account_id")),"."),(0,a.kt)("h4",{id:"flagsreversed"},(0,a.kt)("inlineCode",{parentName:"h4"},"flags.reversed")),(0,a.kt)("p",null,"Whether the results are sorted by timestamp in chronological or reverse-chronological order. If the\nflag is not set, the event that happened first (has the smallest timestamp) will come first. If the\nflag is set, the event that happened last (has the largest timestamp) will come first."),(0,a.kt)("h3",{id:"reserved"},(0,a.kt)("inlineCode",{parentName:"h3"},"reserved")),(0,a.kt)("p",null,"This space may be used for additional data in the future."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 24 bytes"),(0,a.kt)("li",{parentName:"ul"},"Must be zero")))}d.isMDXComponent=!0}}]);