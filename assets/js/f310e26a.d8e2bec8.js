"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9491],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:5},l="QueryFilter",s={unversionedId:"reference/query-filter",id:"reference/query-filter",title:"QueryFilter",description:"A QueryFilter is a record containing the filter parameters for",source:"@site/pages/reference/query-filter.md",sourceDirName:"reference",slug:"/reference/query-filter",permalink:"/reference/query-filter",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/reference/query-filter.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"AccountFilter",permalink:"/reference/account-filter"},next:{title:"Requests",permalink:"/reference/requests/"}},o={},u=[{value:"Fields",id:"fields",level:2},{value:"<code>user_data_128</code>",id:"user_data_128",level:3},{value:"<code>user_data_64</code>",id:"user_data_64",level:3},{value:"<code>user_data_32</code>",id:"user_data_32",level:3},{value:"<code>ledger</code>",id:"ledger",level:3},{value:"<code>code</code>",id:"code",level:3},{value:"<code>timestamp_min</code>",id:"timestamp_min",level:3},{value:"<code>timestamp_max</code>",id:"timestamp_max",level:3},{value:"<code>limit</code>",id:"limit",level:3},{value:"<code>flags</code>",id:"flags",level:3},{value:"<code>flags.reversed</code>",id:"flagsreversed",level:4},{value:"<code>reserved</code>",id:"reserved",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"queryfilter"},(0,a.kt)("inlineCode",{parentName:"h1"},"QueryFilter")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryFilter")," is a record containing the filter parameters for\n",(0,a.kt)("a",{parentName:"p",href:"/reference/requests/query_accounts"},"querying accounts"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/reference/requests/query_transfers"},"querying transfers"),"."),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("h3",{id:"user_data_128"},(0,a.kt)("inlineCode",{parentName:"h3"},"user_data_128")),(0,a.kt)("p",null,"Filter the results by the field ",(0,a.kt)("a",{parentName:"p",href:"/reference/account#user_data_128"},"Account.user_data_128")," or\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#user_data_128"},"Transfer.user_data_128"),".\nOptional; set to zero to disable the filter."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 128-bit unsigned integer (16 bytes)")),(0,a.kt)("h3",{id:"user_data_64"},(0,a.kt)("inlineCode",{parentName:"h3"},"user_data_64")),(0,a.kt)("p",null,"Filter the results by the field ",(0,a.kt)("a",{parentName:"p",href:"/reference/account#user_data_64"},"Account.user_data_64")," or\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#user_data_64"},"Transfer.user_data_64"),".\nOptional; set to zero to disable the filter."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)")),(0,a.kt)("h3",{id:"user_data_32"},(0,a.kt)("inlineCode",{parentName:"h3"},"user_data_32")),(0,a.kt)("p",null,"Filter the results by the field ",(0,a.kt)("a",{parentName:"p",href:"/reference/account#user_data_32"},"Account.user_data_32")," or\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#user_data_32"},"Transfer.user_data_32"),".\nOptional; set to zero to disable the filter."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 32-bit unsigned integer (4 bytes)")),(0,a.kt)("h3",{id:"ledger"},(0,a.kt)("inlineCode",{parentName:"h3"},"ledger")),(0,a.kt)("p",null,"Filter the results by the field ",(0,a.kt)("a",{parentName:"p",href:"/reference/account#ledger"},"Account.ledger")," or\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#ledger"},"Transfer.ledger"),".\nOptional; set to zero to disable the filter."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 32-bit unsigned integer (4 bytes)")),(0,a.kt)("h3",{id:"code"},(0,a.kt)("inlineCode",{parentName:"h3"},"code")),(0,a.kt)("p",null,"Filter the results by the field ",(0,a.kt)("a",{parentName:"p",href:"/reference/account#code"},"Account.code")," or\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#code"},"Transfer.code"),".\nOptional; set to zero to disable the filter."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 16-bit unsigned integer (2 bytes)")),(0,a.kt)("h3",{id:"timestamp_min"},(0,a.kt)("inlineCode",{parentName:"h3"},"timestamp_min")),(0,a.kt)("p",null,"The minimum ",(0,a.kt)("a",{parentName:"p",href:"/reference/account#timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"Account.timestamp"))," or\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.timestamp"))," from which results will be returned,\ninclusive range.\nOptional; set to zero to disable the lower-bound filter."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must not be ",(0,a.kt)("inlineCode",{parentName:"li"},"2^64 - 1"))),(0,a.kt)("h3",{id:"timestamp_max"},(0,a.kt)("inlineCode",{parentName:"h3"},"timestamp_max")),(0,a.kt)("p",null,"The maximum ",(0,a.kt)("a",{parentName:"p",href:"/reference/account#timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"Account.timestamp"))," or\n",(0,a.kt)("a",{parentName:"p",href:"/reference/transfer#timestamp"},(0,a.kt)("inlineCode",{parentName:"a"},"Transfer.timestamp"))," from which results will be returned,\ninclusive range.\nOptional; set to zero to disable the upper-bound filter."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must not be ",(0,a.kt)("inlineCode",{parentName:"li"},"2^64 - 1"))),(0,a.kt)("h3",{id:"limit"},(0,a.kt)("inlineCode",{parentName:"h3"},"limit")),(0,a.kt)("p",null,"The maximum number of results that can be returned by this query."),(0,a.kt)("p",null,"Limited by the ",(0,a.kt)("a",{parentName:"p",href:"/reference/requests/#batching-events"},"maximum message size"),"."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 32-bit unsigned integer (4 bytes)"),(0,a.kt)("li",{parentName:"ul"},"Must not be zero")),(0,a.kt)("h3",{id:"flags"},(0,a.kt)("inlineCode",{parentName:"h3"},"flags")),(0,a.kt)("p",null,"A bitfield that specifies querying behavior."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 32-bit unsigned integer (4 bytes)")),(0,a.kt)("h4",{id:"flagsreversed"},(0,a.kt)("inlineCode",{parentName:"h4"},"flags.reversed")),(0,a.kt)("p",null,"Whether the results are sorted by timestamp in chronological or reverse-chronological order. If the\nflag is not set, the event that happened first (has the smallest timestamp) will come first. If the\nflag is set, the event that happened last (has the largest timestamp) will come first."),(0,a.kt)("h3",{id:"reserved"},(0,a.kt)("inlineCode",{parentName:"h3"},"reserved")),(0,a.kt)("p",null,"This space may be used for additional data in the future."),(0,a.kt)("p",null,"Constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type is 6 bytes"),(0,a.kt)("li",{parentName:"ul"},"Must be zero")))}c.isMDXComponent=!0}}]);