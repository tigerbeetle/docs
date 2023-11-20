"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),g=i,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:2},a="Single-node cluster with Docker",c={unversionedId:"quick-start/with-docker",id:"quick-start/with-docker",title:"Single-node cluster with Docker",description:"First provision TigerBeetle's data directory.",source:"@site/pages/quick-start/with-docker.md",sourceDirName:"quick-start",slug:"/quick-start/with-docker",permalink:"/quick-start/with-docker",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/quick-start/with-docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Single-node cluster with a single binary",permalink:"/quick-start/single-binary"},next:{title:"3-node cluster with Docker Compose",permalink:"/quick-start/with-docker-compose"}},l={},s=[{value:"Connect with the CLI",id:"connect-with-the-cli",level:3},{value:"<code>error: SystemResources</code> on macOS",id:"error-systemresources-on-macos",level:2},{value:"Debugging panics",id:"debugging-panics",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"single-node-cluster-with-docker"},"Single-node cluster with Docker"),(0,i.kt)("p",null,"First provision TigerBeetle's data directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker run -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle \\\n    format --cluster=0 --replica=0 --replica-count=1 /data/0_0.tigerbeetle\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'info(io): creating "0_0.tigerbeetle"...\ninfo(io): allocating 660.140625MiB...\n')),(0,i.kt)("p",null,"Then run the server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 3000:3000 -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle \\\n    start --addresses=0.0.0.0:3000 /data/0_0.tigerbeetle\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'info(io): opening "0_0.tigerbeetle"...\ninfo(main): 0: cluster=0: listening on 0.0.0.0:3000\n')),(0,i.kt)("h3",{id:"connect-with-the-cli"},"Connect with the CLI"),(0,i.kt)("p",null,"Now you can connect to the running server with any client. For a quick\nstart, try creating accounts and transfers ",(0,i.kt)("a",{parentName:"p",href:"/quick-start/cli-client"},"using the TigerBeetle CLI\nclient"),"."),(0,i.kt)("h2",{id:"error-systemresources-on-macos"},(0,i.kt)("inlineCode",{parentName:"h2"},"error: SystemResources")," on macOS"),(0,i.kt)("p",null,"If you get ",(0,i.kt)("inlineCode",{parentName:"p"},"error: SystemResources")," when running TigerBeetle in Docker\non macOS, you will need to do one of the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"docker run")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"--cap-add IPC_LOCK")),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"docker run")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"--ulimit memlock=-1:-1")),(0,i.kt)("li",{parentName:"ol"},"Or modify the defaults in ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/.docker/daemon.json")," and restart the Docker for Mac application:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ... other settings ...\n  "default-ulimits": {\n    "memlock": {\n      "Hard": -1,\n      "Name": "memlock",\n      "Soft": -1\n    }\n  },\n  ... other settings ...\n}\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/issues/92"},"https://github.com/tigerbeetle/tigerbeetle/issues/92")," for discussion."),(0,i.kt)("h2",{id:"debugging-panics"},"Debugging panics"),(0,i.kt)("p",null,"If TigerBeetle panics and you can reproduce the panic, you can get a\nbetter stack trace by switching to a debug image (by using the ",(0,i.kt)("inlineCode",{parentName:"p"},":debug"),"\nDocker image tag)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 3000:3000 -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle:debug \\\n    start --addresses=0.0.0.0:3000 /data/0_0.tigerbeetle\n")))}d.isMDXComponent=!0}}]);