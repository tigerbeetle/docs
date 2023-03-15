"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(n),m=o,u=g["".concat(s,".").concat(m)]||g[m]||p[m]||i;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="3-node cluster with Docker Compose",l={unversionedId:"deployment/with-docker-compose",id:"deployment/with-docker-compose",title:"3-node cluster with Docker Compose",description:"First, provision the data file for each node:",source:"@site/pages/deployment/with-docker-compose.md",sourceDirName:"deployment",slug:"/deployment/with-docker-compose",permalink:"/deployment/with-docker-compose",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/deployment/with-docker-compose.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Single-node cluster with a single binary",permalink:"/deployment/single-binary"},next:{title:"Hardware",permalink:"/deployment/hardware"}},s={},c=[{value:"<code>error: SystemResources</code> on macOS",id:"error-systemresources-on-macos",level:2},{value:"Debugging panics",id:"debugging-panics",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3-node-cluster-with-docker-compose"},"3-node cluster with Docker Compose"),(0,o.kt)("p",null,"First, provision the data file for each node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run -v $(pwd)/data:/data ghcr.io/tigerbeetledb/tigerbeetle format --cluster=0 --replica=0 --replica-count=3 /data/0_0.tigerbeetle\n$ docker run -v $(pwd)/data:/data ghcr.io/tigerbeetledb/tigerbeetle format --cluster=0 --replica=1 --replica-count=3 /data/0_1.tigerbeetle\n$ docker run -v $(pwd)/data:/data ghcr.io/tigerbeetledb/tigerbeetle format --cluster=0 --replica=2 --replica-count=3 /data/0_2.tigerbeetle\n")),(0,o.kt)("p",null,"Then create a docker-compose.yml file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker-compose"},'version: "3.7"\n\n##\n# Note: this example might only work with linux + using `network_mode:host` because of 2 reasons:\n#\n# 1. When specifying an internal docker network, other containers are only available using dns based routing:\n#    e.g. from tigerbeetle_0, the other replicas are available at `tigerbeetle_1:3002` and\n#    `tigerbeetle_2:3003` respectively.\n#\n# 2. Tigerbeetle performs some validation of the ip address provided in the `--addresses` parameter\n#    and won\'t let us specify a custom domain name.\n#\n# The workaround for now is to use `network_mode:host` in the containers instead of specifying our\n# own internal docker network\n##\n\nservices:\n  tigerbeetle_0:\n    image: ghcr.io/tigerbeetledb/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_0.tigerbeetle"\n    network_mode: host\n    volumes:\n      - ./data:/data\n\n  tigerbeetle_1:\n    image: ghcr.io/tigerbeetledb/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_1.tigerbeetle"\n    network_mode: host\n    volumes:\n      - ./data:/data\n\n  tigerbeetle_2:\n    image: ghcr.io/tigerbeetledb/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_2.tigerbeetle"\n    network_mode: host\n    volumes:\n      - ./data:/data\n')),(0,o.kt)("p",null,"And run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ docker-compose up\ndocker-compose up\nStarting tigerbeetle_0   ... done\nStarting tigerbeetle_2   ... done\nRecreating tigerbeetle_1 ... done\nAttaching to tigerbeetle_0, tigerbeetle_2, tigerbeetle_1\ntigerbeetle_1    | info(io): opening "0_1.tigerbeetle"...\ntigerbeetle_2    | info(io): opening "0_2.tigerbeetle"...\ntigerbeetle_0    | info(io): opening "0_0.tigerbeetle"...\ntigerbeetle_0    | info(main): 0: cluster=0: listening on 0.0.0.0:3001\ntigerbeetle_2    | info(main): 2: cluster=0: listening on 0.0.0.0:3003\ntigerbeetle_1    | info(main): 1: cluster=0: listening on 0.0.0.0:3002\ntigerbeetle_0    | info(message_bus): connected to replica 1\ntigerbeetle_0    | info(message_bus): connected to replica 2\ntigerbeetle_1    | info(message_bus): connected to replica 2\ntigerbeetle_1    | info(message_bus): connection from replica 0\ntigerbeetle_2    | info(message_bus): connection from replica 0\ntigerbeetle_2    | info(message_bus): connection from replica 1\ntigerbeetle_0    | info(clock): 0: system time is 83ns ahead\ntigerbeetle_2    | info(clock): 2: system time is 83ns ahead\ntigerbeetle_1    | info(clock): 1: system time is 78ns ahead\n\n... and so on ...\n')),(0,o.kt)("p",null,"Now you can connect to the running server with any client. For a quick\nstart, try ",(0,o.kt)("a",{parentName:"p",href:"../usage/node-cli"},"creating accounts and transfers in the Node\nCLI"),"."),(0,o.kt)("h2",{id:"error-systemresources-on-macos"},(0,o.kt)("inlineCode",{parentName:"h2"},"error: SystemResources")," on macOS"),(0,o.kt)("p",null,"If you get ",(0,o.kt)("inlineCode",{parentName:"p"},"error: SystemResources")," when running TigerBeetle in Docker\non macOS, you will need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"IPC_LOCK")," capability."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'... rest of docker-compose.yml ...\n\nservices:\n  tigerbeetle_0:\n    image: ghcr.io/tigerbeetledb/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_0.tigerbeetle"\n    network_mode: host\n    cap_add:       # HERE\n      - IPC_LOCK   # HERE\n    volumes:\n      - ./data:/data\n\n... rest of docker-compose.yml ...\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetledb/tigerbeetle/issues/92"},"https://github.com/tigerbeetledb/tigerbeetle/issues/92")," for discussion."),(0,o.kt)("h2",{id:"debugging-panics"},"Debugging panics"),(0,o.kt)("p",null,"If TigerBeetle panics and you can reproduce the panic, you can get a\nbetter stack trace by switching to a debug image (by using the ",(0,o.kt)("inlineCode",{parentName:"p"},":debug"),"\nDocker image tag)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ghcr.io/tigerbeetledb/tigerbeetle:debug\n")))}p.isMDXComponent=!0}}]);