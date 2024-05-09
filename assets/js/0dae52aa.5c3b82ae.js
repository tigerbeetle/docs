"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=c(n),p=i,m=g["".concat(s,".").concat(p)]||g[p]||u[p]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2288:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},a="Docker",l={unversionedId:"deploy/docker",id:"deploy/docker",title:"Docker",description:"TigerBeetle can be run using Docker. However, it is not recommended.",source:"@site/pages/deploy/docker.md",sourceDirName:"deploy",slug:"/deploy/docker",permalink:"/deploy/docker",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/deploy/docker.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Deploying on Linux",permalink:"/deploy/linux"},next:{title:"Managed Service",permalink:"/deploy/managed-service"}},s={},c=[{value:"Image",id:"image",level:2},{value:"Format the Data File",id:"format-the-data-file",level:2},{value:"Run the Server",id:"run-the-server",level:2},{value:"Run a Multi-Node Cluster Using Docker Compose",id:"run-a-multi-node-cluster-using-docker-compose",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"<code>exited with code 137</code>",id:"exited-with-code-137",level:3},{value:"Debugging panics",id:"debugging-panics",level:3},{value:"On MacOS",id:"on-macos",level:3},{value:"<code>error: SystemResources</code>",id:"error-systemresources",level:4}],d={toc:c},g="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docker"},"Docker"),(0,i.kt)("p",null,"TigerBeetle can be run using Docker. However, it is not recommended."),(0,i.kt)("p",null,"TigerBeetle is distributed as a single, small, statically-linked binary. It\nshould be easy to run directly on the target machine. Using Docker as an\nabstraction adds complexity while providing relatively little in this case."),(0,i.kt)("h2",{id:"image"},"Image"),(0,i.kt)("p",null,"The Docker image is available from the Github Container Registry:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/pkgs/container/tigerbeetle"},"https://github.com/tigerbeetle/tigerbeetle/pkgs/container/tigerbeetle")),(0,i.kt)("h2",{id:"format-the-data-file"},"Format the Data File"),(0,i.kt)("p",null,"When using Docker, the data file must be mounted as a volume:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle \\\n    format --cluster=0 --replica=0 --replica-count=1 /data/0_0.tigerbeetle\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'info(io): creating "0_0.tigerbeetle"...\ninfo(io): allocating 660.140625MiB...\n')),(0,i.kt)("h2",{id:"run-the-server"},"Run the Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker run -it -p 3000:3000 -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle \\\n    start --addresses=0.0.0.0:3000 /data/0_0.tigerbeetle\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'info(io): opening "0_0.tigerbeetle"...\ninfo(main): 0: cluster=0: listening on 0.0.0.0:3000\n')),(0,i.kt)("h2",{id:"run-a-multi-node-cluster-using-docker-compose"},"Run a Multi-Node Cluster Using Docker Compose"),(0,i.kt)("p",null,"Format the data file for each replica:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker run -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle format --cluster=0 --replica=0 --replica-count=3 /data/0_0.tigerbeetle\ndocker run -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle format --cluster=0 --replica=1 --replica-count=3 /data/0_1.tigerbeetle\ndocker run -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle format --cluster=0 --replica=2 --replica-count=3 /data/0_2.tigerbeetle\n")),(0,i.kt)("p",null,"Note that the data file stores which replica in the cluster the file belongs to."),(0,i.kt)("p",null,"Then, create a docker-compose.yml file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-docker-compose"},'version: "3.7"\n\n##\n# Note: this example might only work with linux + using `network_mode:host` because of 2 reasons:\n#\n# 1. When specifying an internal docker network, other containers are only available using dns based routing:\n#    e.g. from tigerbeetle_0, the other replicas are available at `tigerbeetle_1:3002` and\n#    `tigerbeetle_2:3003` respectively.\n#\n# 2. Tigerbeetle performs some validation of the ip address provided in the `--addresses` parameter\n#    and won\'t let us specify a custom domain name.\n#\n# The workaround for now is to use `network_mode:host` in the containers instead of specifying our\n# own internal docker network\n##\n\nservices:\n  tigerbeetle_0:\n    image: ghcr.io/tigerbeetle/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_0.tigerbeetle"\n    network_mode: host\n    volumes:\n      - ./data:/data\n\n  tigerbeetle_1:\n    image: ghcr.io/tigerbeetle/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_1.tigerbeetle"\n    network_mode: host\n    volumes:\n      - ./data:/data\n\n  tigerbeetle_2:\n    image: ghcr.io/tigerbeetle/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_2.tigerbeetle"\n    network_mode: host\n    volumes:\n      - ./data:/data\n')),(0,i.kt)("p",null,"And run it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker-compose up\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'docker-compose up\nStarting tigerbeetle_0   ... done\nStarting tigerbeetle_2   ... done\nRecreating tigerbeetle_1 ... done\nAttaching to tigerbeetle_0, tigerbeetle_2, tigerbeetle_1\ntigerbeetle_1    | info(io): opening "0_1.tigerbeetle"...\ntigerbeetle_2    | info(io): opening "0_2.tigerbeetle"...\ntigerbeetle_0    | info(io): opening "0_0.tigerbeetle"...\ntigerbeetle_0    | info(main): 0: cluster=0: listening on 0.0.0.0:3001\ntigerbeetle_2    | info(main): 2: cluster=0: listening on 0.0.0.0:3003\ntigerbeetle_1    | info(main): 1: cluster=0: listening on 0.0.0.0:3002\ntigerbeetle_0    | info(message_bus): connected to replica 1\ntigerbeetle_0    | info(message_bus): connected to replica 2\ntigerbeetle_1    | info(message_bus): connected to replica 2\ntigerbeetle_1    | info(message_bus): connection from replica 0\ntigerbeetle_2    | info(message_bus): connection from replica 0\ntigerbeetle_2    | info(message_bus): connection from replica 1\ntigerbeetle_0    | info(clock): 0: system time is 83ns ahead\ntigerbeetle_2    | info(clock): 2: system time is 83ns ahead\ntigerbeetle_1    | info(clock): 1: system time is 78ns ahead\n\n... and so on ...\n')),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"exited-with-code-137"},(0,i.kt)("inlineCode",{parentName:"h3"},"exited with code 137")),(0,i.kt)("p",null,"If you see this error without any logs from TigerBeetle, it is likely that the\nLinux OOMKiller is killing the process. If you are running Docker inside a\nvirtual machine (such as is required on Docker or Podman for macOS), try\nincreasing the virtual machine memory limit."),(0,i.kt)("p",null,"Alternatively, in a development environment, you can lower the size of the cache\nso TigerBeetle uses less memory. For example, set ",(0,i.kt)("inlineCode",{parentName:"p"},"--cache-grid=512MiB")," when\nrunning ",(0,i.kt)("inlineCode",{parentName:"p"},"tigerbeetle start"),"."),(0,i.kt)("h3",{id:"debugging-panics"},"Debugging panics"),(0,i.kt)("p",null,"If TigerBeetle panics and you can reproduce the panic, you can get a better\nstack trace by switching to a debug image (by using the ",(0,i.kt)("inlineCode",{parentName:"p"},":debug")," Docker image\ntag)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"docker run -p 3000:3000 -v $(pwd)/data:/data ghcr.io/tigerbeetle/tigerbeetle:debug \\\n    start --addresses=0.0.0.0:3000 /data/0_0.tigerbeetle\n")),(0,i.kt)("h3",{id:"on-macos"},"On MacOS"),(0,i.kt)("h4",{id:"error-systemresources"},(0,i.kt)("inlineCode",{parentName:"h4"},"error: SystemResources")),(0,i.kt)("p",null,"If you get ",(0,i.kt)("inlineCode",{parentName:"p"},"error: SystemResources")," when running TigerBeetle in Docker on macOS,\nyou will need to do one of the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"docker run")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"--cap-add IPC_LOCK")),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"docker run")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"--ulimit memlock=-1:-1")),(0,i.kt)("li",{parentName:"ol"},"Or modify the defaults in ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/.docker/daemon.json")," and restart the Docker\nfor Mac application:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ... other settings ...\n  "default-ulimits": {\n    "memlock": {\n      "Hard": -1,\n      "Name": "memlock",\n      "Soft": -1\n    }\n  },\n  ... other settings ...\n}\n')),(0,i.kt)("p",null,"If you are running TigerBeetle with Docker Compose, you will need to add the\n",(0,i.kt)("inlineCode",{parentName:"p"},"IPC_LOCK")," capability like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'... rest of docker-compose.yml ...\n\nservices:\n  tigerbeetle_0:\n    image: ghcr.io/tigerbeetle/tigerbeetle\n    command: "start --addresses=0.0.0.0:3001,0.0.0.0:3002,0.0.0.0:3003 /data/0_0.tigerbeetle"\n    network_mode: host\n    cap_add:       # HERE\n      - IPC_LOCK   # HERE\n    volumes:\n      - ./data:/data\n\n... rest of docker-compose.yml ...\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/issues/92"},"https://github.com/tigerbeetle/tigerbeetle/issues/92")," for discussion."))}u.isMDXComponent=!0}}]);