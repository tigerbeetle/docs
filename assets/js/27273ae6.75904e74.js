"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||n;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const n={sidebar_position:1},l="Deploying for Production",o={unversionedId:"operating/deploy",id:"operating/deploy",title:"Deploying for Production",description:"A TigerBeetle cluster is a set of machines each running the TigerBeetle server for strict",source:"@site/pages/operating/deploy.md",sourceDirName:"operating",slug:"/operating/deploy",permalink:"/operating/deploy",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/operating/deploy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Rate Limiting",permalink:"/coding/recipes/rate-limiting"},next:{title:"Hardware",permalink:"/operating/hardware"}},s={},c=[{value:"Fault Tolerance",id:"fault-tolerance",level:2},{value:"Geographic Fault Tolerance",id:"geographic-fault-tolerance",level:3},{value:"Hardware Fault Tolerance",id:"hardware-fault-tolerance",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploying-for-production"},"Deploying for Production"),(0,i.kt)("p",null,"A TigerBeetle ",(0,i.kt)("strong",{parentName:"p"},"cluster")," is a set of machines each running the TigerBeetle server for strict\nserializability, high availability and durability. The TigerBeetle server is a single binary."),(0,i.kt)("p",null,"Each server operates on a single local data file."),(0,i.kt)("p",null,"The TigerBeetle server binary plus its single data file is called a ",(0,i.kt)("strong",{parentName:"p"},"replica"),"."),(0,i.kt)("p",null,"A cluster guarantees strict serializability, the highest level of consistency, by automatically\nelecting a primary replica to order and backup transactions across replicas in the cluster."),(0,i.kt)("h2",{id:"fault-tolerance"},"Fault Tolerance"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The optimal, recommended size for any production cluster is 6 replicas.")),(0,i.kt)("p",null,"Given a cluster of 6 replicas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"4/6 replicas are required to elect a new primary if the old primary fails."),(0,i.kt)("li",{parentName:"ul"},"A cluster remains highly available (able to process transactions), preserving strict\nserializability, provided that at least 3/6 machines have not failed (provided that the primary\nhas not also failed) or provided that at least 4/6 machines have not failed (if the primary also\nfailed and a new primary needs to be elected)."),(0,i.kt)("li",{parentName:"ul"},"A cluster preserves durability (surviving, detecting, and repairing corruption of any data file)\nprovided that the cluster remains available. If machines go offline temporarily and the cluster\nbecomes available again later, the cluster will be able to repair data file corruption once\navailability is restored."),(0,i.kt)("li",{parentName:"ul"},"A cluster will correctly remain unavailable if too many machine failures have occurred to preserve\ndata. In other words, TigerBeetle is designed to operate correctly or else to shut down safely if\nsafe operation with respect to strict serializability is no longer possible due to permanent data\nloss.")),(0,i.kt)("h3",{id:"geographic-fault-tolerance"},"Geographic Fault Tolerance"),(0,i.kt)("p",null,"All 6 replicas may be within the same data center (zero geographic fault tolerance), or spread\nacross 2 or more data centers, availability zones or regions (\u201csites\u201d) for geographic fault\ntolerance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For mission critical availability, the optimal number of sites is 3"),", since each site would then\ncontain 2 replicas so that the loss of an entire site would not impair the availability of the\ncluster."),(0,i.kt)("p",null,"Sites should preferably be within a few milliseconds of each other, since each transaction must be\nreplicated across sites before being committed."),(0,i.kt)("h3",{id:"hardware-fault-tolerance"},"Hardware Fault Tolerance"),(0,i.kt)("p",null,"It is important to ensure independent fault domains for each replica's data file, that each\nreplica's data file is stored on a separate disk (required), machine (required), rack (recommended),\ndata center (recommended) etc."))}d.isMDXComponent=!0}}]);