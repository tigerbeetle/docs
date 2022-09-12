"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a="Running a 3-node TigerBeetle cluster locally with Docker Compose",c={unversionedId:"setup/with-docker-compose",id:"setup/with-docker-compose",title:"Running a 3-node TigerBeetle cluster locally with Docker Compose",description:"First, provision the data file for each node:",source:"@site/docs/setup/with-docker-compose.md",sourceDirName:"setup",slug:"/setup/with-docker-compose",permalink:"/setup/with-docker-compose",draft:!1,editUrl:"https://github.com/tigerbeetledb/docs/tree/main/docs/setup/with-docker-compose.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Single-node cluster from source",permalink:"/setup/from-source"},next:{title:"Creating accounts and transfers in the Node CLI",permalink:"/usage/node-cli"}},l={},s=[],d={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-3-node-tigerbeetle-cluster-locally-with-docker-compose"},"Running a 3-node TigerBeetle cluster locally with Docker Compose"),(0,o.kt)("p",null,"First, provision the data file for each node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker run -v $(pwd)/data:/data ghcr.io/coilhq/tigerbeetle format --cluster=0 --replica=0 /data/0_0.tigerbeetle\n$ docker run -v $(pwd)/data:/data ghcr.io/coilhq/tigerbeetle format --cluster=0 --replica=1 /data/0_1.tigerbeetle\n$ docker run -v $(pwd)/data:/data ghcr.io/coilhq/tigerbeetle format --cluster=0 --replica=2 /data/0_2.tigerbeetle\n")),(0,o.kt)("p",null,"Then create a docker-compose.yml file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-docker-compose"},'version: "3.7"\n\n##\n# Note: this example might only work with linux + using `network_mode:host` because of 2 reasons:\n# \n# 1. When specifying an internal docker network, other containers are only available using dns based routing:\n#    e.g. from tigerbeetle_0, the other replicas are available at `tigerbeetle_1:3002` and\n#    `tigerbeetle_2:3003` respectively.\n#\n# 2. Tigerbeetle performs some validation of the ip address provided in the `--addresses` parameter\n#    and won\'t let us specify a custom domain name.\n#\n# The workaround for now is to use `network_mode:host` in the containers instead of specifying our\n# own internal docker network\n##\n\nservices:\n  tigerbeetle_0:\n    container_name: tigerbeetle_0\n    image: ghcr.io/coilhq/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_0.tigerbeetle"\n    network_mode: host\n    volumes:\n      - ./data:/data\n\n  tigerbeetle_1:\n    container_name: tigerbeetle_1\n    image: ghcr.io/coilhq/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_1.tigerbeetle"\n    network_mode: host\n    volumes:\n      - ./data:/data\n\n  tigerbeetle_2:\n    container_name: tigerbeetle_2\n    image: ghcr.io/coilhq/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_2.tigerbeetle"\n    network_mode: host\n    volumes:\n      - ./data:/data\n')),(0,o.kt)("p",null,"And run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ docker-compose up\ndocker-compose up\nStarting tigerbeetle_0   ... done\nStarting tigerbeetle_2   ... done\nRecreating tigerbeetle_1 ... done\nAttaching to tigerbeetle_0, tigerbeetle_2, tigerbeetle_1\ntigerbeetle_1    | info(io): opening "0_1.tigerbeetle"...\ntigerbeetle_2    | info(io): opening "0_2.tigerbeetle"...\ntigerbeetle_0    | info(io): opening "0_0.tigerbeetle"...\ntigerbeetle_0    | info(main): 0: cluster=0: listening on 0.0.0.0:3001\ntigerbeetle_2    | info(main): 2: cluster=0: listening on 0.0.0.0:3003\ntigerbeetle_1    | info(main): 1: cluster=0: listening on 0.0.0.0:3002\ntigerbeetle_0    | info(message_bus): connected to replica 1\ntigerbeetle_0    | info(message_bus): connected to replica 2\ntigerbeetle_1    | info(message_bus): connected to replica 2\ntigerbeetle_1    | info(message_bus): connection from replica 0\ntigerbeetle_2    | info(message_bus): connection from replica 0\ntigerbeetle_2    | info(message_bus): connection from replica 1\ntigerbeetle_0    | info(clock): 0: system time is 83ns ahead\ntigerbeetle_2    | info(clock): 2: system time is 83ns ahead\ntigerbeetle_1    | info(clock): 1: system time is 78ns ahead\n\n... and so on ...\n')),(0,o.kt)("p",null,"Now you can connect to the running server with any client. For a quick\nstart, try ",(0,o.kt)("a",{parentName:"p",href:"/usage/node-cli"},"creating accounts and transfers in the Node\nCLI"),"."))}p.isMDXComponent=!0}}]);