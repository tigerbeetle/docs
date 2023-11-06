"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[146],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:4},o="Hardware",l={unversionedId:"deploy/hardware",id:"deploy/hardware",title:"Hardware",description:"Cluster of replicas",source:"@site/pages/deploy/hardware.md",sourceDirName:"deploy",slug:"/deploy/hardware",permalink:"/deploy/hardware",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/deploy/hardware.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Two-phase transfers",permalink:"/design/two-phase-transfers"},next:{title:"Close Account",permalink:"/recipes/close-account"}},s={},c=[{value:"Cluster of replicas",id:"cluster-of-replicas",level:2},{value:"Provisioning a cluster",id:"provisioning-a-cluster",level:2},{value:"Provisioning a replica",id:"provisioning-a-replica",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hardware"},"Hardware"),(0,n.kt)("h2",{id:"cluster-of-replicas"},"Cluster of replicas"),(0,n.kt)("p",null,"A TigerBeetle cluster is 6 machines each running the TigerBeetle\nserver for strict serializability, high availability and\ndurability. The TigerBeetle server is a single binary."),(0,n.kt)("p",null,"Each server operates on a single local data file for a total of 6\ndata files across the cluster."),(0,n.kt)("p",null,"The TigerBeetle server (the single binary) plus its single data file\nis called a replica."),(0,n.kt)("p",null,"It is important to ensure independent fault domains for each replica's\ndata file, that each replica's data file is stored on a separate disk\n(required), machine (required), rack (recommended), data center\n(recommended) etc."),(0,n.kt)("h2",{id:"provisioning-a-cluster"},"Provisioning a cluster"),(0,n.kt)("p",null,"A cluster guarantees strict serializability, the highest level of\nconsistency, by automatically electing a primary replica to order and\nbackup transactions across replicas in the cluster."),(0,n.kt)("p",null,"The optimal, recommended size for any production cluster is 6\nreplicas, recognizing advances in flexible consensus quorums."),(0,n.kt)("p",null,"4/6 replicas are required to elect a new primary if the old primary\nfails."),(0,n.kt)("p",null,"A cluster remains highly available (able to process transactions),\npreserving strict serializability, provided that at least 3/6 machines\nhave not failed (provided that the primary has not also failed) or\nprovided that at least 4/6 machines have not failed (if the primary\nalso failed and a new primary needs to be elected)."),(0,n.kt)("p",null,"A cluster preserves durability (surviving, detecting and repairing\ncorruption of any data file) provided that the cluster remains\navailable."),(0,n.kt)("p",null,"A cluster will correctly remain unavailable if too many machine\nfailures have occurred to preserve data. In other words, TigerBeetle\nis designed to operate correctly or else to shut down safely if safe\noperation with respect to strict serializability is no longer possible\ndue to permanent data loss."),(0,n.kt)("p",null,"All 6 replicas may be within the same data center (zero geographic\nfault tolerance), or spread across 2 or more data centers,\navailability zones or regions (\u201csites\u201d) for geographic fault\ntolerance."),(0,n.kt)("p",null,"For mission critical availability, the optimal number of sites is 3,\nsince each site would then contain 2 replicas so that the loss of an\nentire site would not impair the availability of the cluster."),(0,n.kt)("p",null,"If only 2 sites are able to be provisioned, it is recommended to tune\nthe cluster so that at least 4/6 replicas (instead of 3/6 replicas)\nacknowledge each transaction before commit. This would ensure that at\nleast 1 replica in the other site will preserve data durability in the\nevent that an entire site is permanently lost. Furthermore, this would\nensure that the entire cluster would be able to be repaired once the\nlost site is restored."),(0,n.kt)("p",null,"Sites should preferably be within a few milliseconds of each other,\nsince each transaction must be replicated across sites before being\ncommitted."),(0,n.kt)("h2",{id:"provisioning-a-replica"},"Provisioning a replica"),(0,n.kt)("p",null,"TigerBeetle is designed to operate and provide more than adequate\nperformance even on commodity hardware."),(0,n.kt)("p",null,"NVMe is preferred to SSD for high performance deployments."),(0,n.kt)("p",null,"However, spinning rust is perfectly acceptable, especially where a\ncluster is expected to be long lived, and the data file is expected to\nbe large. There is no requirement for NVMe or SSD."),(0,n.kt)("p",null,"A 20 TiB disk containing a replica's data file is enough to address on\nthe order of 50 billion accounts or transfers. It is more important to\nprovision sufficient storage space for a replica\u2019s data file, than to\nprovision high performance storage."),(0,n.kt)("p",null,"A replica's data file may reside on local storage or else on remote\nstorage. The most important concern is to ensure independent fault\ndomains across replicas."),(0,n.kt)("p",null,"The operator may consider the use of RAID 10 to reduce the need for\nremote recovery if a replica's disk fails."),(0,n.kt)("p",null,"ECC memory is recommended for production deployments."),(0,n.kt)("p",null,"TigerBeetle requires only a single core per replica\nmachine. TigerBeetle at present does not utilize more cores, but may\nin future."),(0,n.kt)("p",null,"There are no restrictions on sharing a server with other tenant\nprocesses."),(0,n.kt)("p",null,"A replica requires at least 2 GiB RAM per machine. Between 16 GiB and\n32 GiB or more (depending on budget) is recommended to be allocated to\neach replica for caching. TigerBeetle uses static allocation and will\nuse exactly how much memory is explicitly allocated to it for caching\nvia command line argument."))}u.isMDXComponent=!0}}]);