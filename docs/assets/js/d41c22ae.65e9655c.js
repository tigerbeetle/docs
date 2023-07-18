"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=i,d=p["".concat(c,".").concat(b)]||p[b]||g[b]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:1},o="Single-node cluster with a single binary",l={unversionedId:"quick-start/single-binary",id:"quick-start/single-binary",title:"Single-node cluster with a single binary",description:"First, download a prebuilt copy of TigerBeetle.",source:"@site/pages/quick-start/single-binary.md",sourceDirName:"quick-start",slug:"/quick-start/single-binary",permalink:"/quick-start/single-binary",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/quick-start/single-binary.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quickstart",permalink:"/quick-start/"},next:{title:"Single-node cluster with Docker",permalink:"/quick-start/with-docker"}},c={},s=[{value:"Running TigerBeetle",id:"running-tigerbeetle",level:2}],u={toc:s},p="wrapper";function g(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"single-node-cluster-with-a-single-binary"},"Single-node cluster with a single binary"),(0,i.kt)("p",null,"First, download a prebuilt copy of TigerBeetle."),(0,i.kt)("p",null,"On macOS/Linux:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ git clone https://github.com/tigerbeetle/tigerbeetle; ./tigerbeetle/bootstrap.sh\n")),(0,i.kt)("p",null,"On Windows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"$ git clone https://github.com/tigerbeetle/tigerbeetle; .\\tigerbeetle\\bootstrap.ps1\n")),(0,i.kt)("p",null,"Want to build from source locally? Add ",(0,i.kt)("inlineCode",{parentName:"p"},"-build")," as an argument to the bootstrap script."),(0,i.kt)("h2",{id:"running-tigerbeetle"},"Running TigerBeetle"),(0,i.kt)("p",null,"Now create the TigerBeetle data file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./tigerbeetle format --cluster=0 --replica=0 --replica-count=1 0_0.tigerbeetle\ninfo(io): creating "0_0.tigerbeetle"...\ninfo(io): allocating 660.140625MiB...\n')),(0,i.kt)("p",null,"And start the server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./tigerbeetle start --addresses=3000 0_0.tigerbeetle\ninfo(io): opening "0_0.tigerbeetle"...\ninfo(main): 0: cluster=0: listening on 127.0.0.1:3000\n')),(0,i.kt)("p",null,"Now you can connect to the running server with any client. For a quick\nstart, try ",(0,i.kt)("a",{parentName:"p",href:"/quick-start/node-cli"},"creating accounts and transfers in the Node\nCLI"),"."))}g.isMDXComponent=!0}}]);