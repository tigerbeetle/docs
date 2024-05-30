"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:7},o="Zig",l={unversionedId:"about/zig",id:"about/zig",title:"Zig",description:"Coming from C, Zig is the language we've always wanted -- and the perfect language in which to write",source:"@site/pages/about/zig.md",sourceDirName:"about",slug:"/about/zig",permalink:"/about/zig",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/about/zig.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Production Ready",permalink:"/about/production-ready"},next:{title:"Internals",permalink:"/about/internals/"}},s={},c=[],p={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zig"},"Zig"),(0,a.kt)("p",null,"Coming from C, Zig is the language we've always wanted -- and the perfect language in which to write\na database focused on performance and safety."),(0,a.kt)("p",null,"We want:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"C ABI compatibility")," to embed the TigerBeetle leader library or TigerBeetle network client\ndirectly into any language, to match the portability and ease of use of the ",(0,a.kt)("a",{parentName:"li",href:"https://www.sqlite.org/index.html"},"SQLite\nlibrary"),", the most used database engine in the world."),(0,a.kt)("li",{parentName:"ul"},"Bounds checking and checked arithmetic for greater memory safety than C."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Control the memory layout, alignment, and padding of data structures")," to avoid cache misses and\nunaligned accesses and allow zero-copy parsing of data structures from off the network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Explicit static memory allocation")," from the network all the way to the disk with ",(0,a.kt)("strong",{parentName:"li"},"no hidden\nmemory allocations"),". Zig also has a rich choice of allocators and test allocators."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OOM safety")," as the TigerBeetle leader library needs to manage GiBs of in-memory state without\ncrashing."),(0,a.kt)("li",{parentName:"ul"},"Direct access to ",(0,a.kt)("strong",{parentName:"li"},"io_uring")," for fast, simple networking and file system operations."),(0,a.kt)("li",{parentName:"ul"},"Direct access to ",(0,a.kt)("strong",{parentName:"li"},"fast CPU instructions")," such as ",(0,a.kt)("inlineCode",{parentName:"li"},"POPCNT"),", which are essential for the hash\ntable implementation we want to use."),(0,a.kt)("li",{parentName:"ul"},"Direct access to ",(0,a.kt)("strong",{parentName:"li"},"existing C libraries")," without the overhead of FFI."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Strict single-threaded control flow")," to eliminate data races by design and to enforce the\nsingle writer principle."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Compiler support for error sets")," to enforce ",(0,a.kt)("a",{parentName:"li",href:"https://www.eecg.utoronto.ca/~yuan/papers/failure_analysis_osdi14.pdf"},"fine-grained error\nhandling"),"."),(0,a.kt)("li",{parentName:"ul"},"A developer-friendly and fast build system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://zig.guide/language-basics/comptime/"},"Comptime")," is a game changer.")),(0,a.kt)("p",null,"Zig retains C ABI interoperability, offers relief from undefined behavior and makefiles, and\nprovides an order of magnitude improvement in runtime safety and fine-grained error handling. Zig is\na good fit with its emphasis on explicit memory allocation and OOM safety."),(0,a.kt)("p",null,"Since Zig is pre-1.0.0 we plan to use only stable language features. It's an excellent time for\nTigerBeetle to adopt Zig since our stable roadmaps will probably coincide. We wanted to invest for\nthe next 20 years and didn't want to be stuck with C/C++ or compiler/language complexity and pay a\ntax for the lifetime of the project."))}m.isMDXComponent=!0}}]);