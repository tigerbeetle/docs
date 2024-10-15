"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},s="Deploying on Linux",o={unversionedId:"operating/linux",id:"operating/linux",title:"Deploying on Linux",description:"systemd",source:"@site/pages/operating/linux.md",sourceDirName:"operating",slug:"/operating/linux",permalink:"/operating/linux",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/operating/linux.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hardware",permalink:"/operating/hardware"},next:{title:"Docker",permalink:"/operating/docker"}},l={},c=[{value:"systemd",id:"systemd",level:2},{value:"<strong>tigerbeetle.service</strong>",id:"tigerbeetleservice",level:4},{value:"Adjusting",id:"adjusting",level:2},{value:"Pre-start script",id:"pre-start-script",level:3},{value:"<strong>tigerbeetle-pre-start.sh</strong>",id:"tigerbeetle-pre-startsh",level:4},{value:"TigerBeetle executable",id:"tigerbeetle-executable",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"State directory and replica data file path",id:"state-directory-and-replica-data-file-path",level:3},{value:"Hardening configurations",id:"hardening-configurations",level:3},{value:"Development mode",id:"development-mode",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploying-on-linux"},"Deploying on Linux"),(0,i.kt)("h2",{id:"systemd"},"systemd"),(0,i.kt)("p",null,"The following includes an example systemd unit for running TigerBeetle with Linux systems that use systemd. The unit is configured to start a single-node cluster, so you may need to adjust it for other cluster configurations."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/quick-start"},"Quick Start")," for an example of how to run a single-\nvs multi-node cluster."),(0,i.kt)("h4",{id:"tigerbeetleservice"},(0,i.kt)("strong",{parentName:"h4"},"tigerbeetle.service")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[Unit]\nDescription=TigerBeetle Replica\nDocumentation=https://docs.tigerbeetle.com/\nAfter=network-online.target\nWants=network-online.target systemd-networkd-wait-online.service\n\n[Service]\nEnvironment=TIGERBEETLE_CACHE_GRID_SIZE=1GiB\nEnvironment=TIGERBEETLE_ADDRESSES=3001\nEnvironment=TIGERBEETLE_REPLICA_COUNT=1\nEnvironment=TIGERBEETLE_REPLICA_INDEX=0\nEnvironment=TIGERBEETLE_CLUSTER_ID=0\nEnvironment=TIGERBEETLE_DATA_FILE=%S/tigerbeetle/0_0.tigerbeetle\n\nDevicePolicy=closed\nDynamicUser=true\nLockPersonality=true\nProtectClock=true\nProtectControlGroups=true\nProtectHome=true\nProtectHostname=true\nProtectKernelLogs=true\nProtectKernelModules=true\nProtectKernelTunables=true\nProtectProc=noaccess\nProtectSystem=strict\nRestrictAddressFamilies=AF_INET AF_INET6\nRestrictNamespaces=true\nRestrictRealtime=true\nRestrictSUIDSGID=true\n\nStateDirectory=tigerbeetle\nStateDirectoryMode=700\n\nType=exec\nExecStart=/usr/local/bin/tigerbeetle start --cache-grid=${TIGERBEETLE_CACHE_GRID_SIZE} --addresses=${TIGERBEETLE_ADDRESSES} ${TIGERBEETLE_DATA_FILE}\n\n[Install]\nWantedBy=multi-user.target\n")),(0,i.kt)("h2",{id:"adjusting"},"Adjusting"),(0,i.kt)("p",null,"You can adjust multiple aspects of this systemd service.\nEach specific adjustment is listed below with instructions."),(0,i.kt)("p",null,"It is not recommended to adjust some values directly in the service file.\nWhen this is the case, the instructions will ask you to instead use systemd's drop-in file support.\nHere's how to do that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install the service unit in systemd (usually by adding it to ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/systemd/system"),")."),(0,i.kt)("li",{parentName:"ol"},"Create a drop-in file to override the environment variables.\nRun ",(0,i.kt)("inlineCode",{parentName:"li"},"systemctl edit tigerbeetle.service"),".\nThis will bring you to an editor with instructions."),(0,i.kt)("li",{parentName:"ol"},"Add your overrides.\nExample:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"[Service]\nEnvironment=TIGERBEETLE_CACHE_GRID_SIZE=4GiB\nEnvironment=TIGERBEETLE_ADDRESSES=0.0.0.0:3001\n")))),(0,i.kt)("h3",{id:"pre-start-script"},"Pre-start script"),(0,i.kt)("p",null,"You can place the following script in ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),".\nThis script is responsible for ensuring that a replica data file exists.\nIt will create a data file if it doesn't exist."),(0,i.kt)("h4",{id:"tigerbeetle-pre-startsh"},(0,i.kt)("strong",{parentName:"h4"},"tigerbeetle-pre-start.sh")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\nset -eu\n\nif ! test -e "${TIGERBEETLE_DATA_FILE}"; then\n  /usr/local/bin/tigerbeetle format --cluster="${TIGERBEETLE_CLUSTER_ID}" --replica="${TIGERBEETLE_REPLICA_INDEX}" --replica-count="${TIGERBEETLE_REPLICA_COUNT}" "${TIGERBEETLE_DATA_FILE}"\nfi\n')),(0,i.kt)("p",null,"The script assumes that ",(0,i.kt)("inlineCode",{parentName:"p"},"/bin/sh")," exists and points to a POSIX-compliant shell, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," utility is either built-in or in the script's search path.\nIf this is not the case, adjust the script's shebang."),(0,i.kt)("p",null,"Add the following line to ",(0,i.kt)("inlineCode",{parentName:"p"},"tigerbeetle.service")," before ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecStart"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ExecStartPre=/usr/local/bin/tigerbeetle-pre-start.sh\n")),(0,i.kt)("p",null,"The service then executes the ",(0,i.kt)("inlineCode",{parentName:"p"},"tigerbeetle-pre-start.sh")," script before starting TigerBeetle."),(0,i.kt)("h3",{id:"tigerbeetle-executable"},"TigerBeetle executable"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tigerbeetle")," executable is assumed to be installed in ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),".\nIf this is not the case, adjust both ",(0,i.kt)("inlineCode",{parentName:"p"},"tigerbeetle.service")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tigerbeetle-pre-start.sh")," to use the correct location."),(0,i.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,i.kt)("p",null,"This service uses environment variables to provide default values for a simple single-node cluster.\nTo configure a different cluster structure, or a cluster with different values, adjust the values in the environment variables.\nIt is ",(0,i.kt)("strong",{parentName:"p"},"not recommended")," to change these default values directly in the service file, because it may be important to revert to the default behavior later.\nInstead, use systemd's drop-in file support."),(0,i.kt)("h3",{id:"state-directory-and-replica-data-file-path"},"State directory and replica data file path"),(0,i.kt)("p",null,"This service configures a state directory, which means that systemd will make sure the directory is created before the service starts, and the directory will have the correct permissions.\nThis is especially important because the service uses systemd's dynamic user capabilities.\nsystemd forces the state directory to be in ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib"),", which means that this service will have its replica data file at ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/tigerbeetle/"),".\nIt is ",(0,i.kt)("strong",{parentName:"p"},"not recommended")," to adjust the state directory directly in the service file, because it may be important to revert to the default behavior later.\nInstead, use systemd's drop-in file support.\nIf you do so, remember to also adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"TIGERBEETLE_DATA_FILE")," environment variable, because it also hardcodes the ",(0,i.kt)("inlineCode",{parentName:"p"},"tigerbeetle")," state directory value."),(0,i.kt)("p",null,"Due to systemd's dynamic user capabilities, the replica data file path will not be owned by any existing user of the system."),(0,i.kt)("h3",{id:"hardening-configurations"},"Hardening configurations"),(0,i.kt)("p",null,"Some hardening configurations are enabled for added security when running the service.\nIt is ",(0,i.kt)("strong",{parentName:"p"},"not recommended")," to change these, since they have additional implications on all other configurations and values defined in this service file.\nIf you wish to change those, you are expected to understand those implications and make any other adjustments accordingly."),(0,i.kt)("h3",{id:"development-mode"},"Development mode"),(0,i.kt)("p",null,"The service was created assuming it'll be used in a production scenario."),(0,i.kt)("p",null,"In case you want to use this service for development as well, you may need to adjust the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExecStart")," line to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"--development")," flag if your development environment doesn't support Direct IO, or if you require smaller cache sizes and/or batch sizes due to memory constraints."))}p.isMDXComponent=!0}}]);