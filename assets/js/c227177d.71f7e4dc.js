"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2024],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=p(n),c=i,h=g["".concat(s,".").concat(c)]||g[c]||u[c]||a;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:5},l="Upgrading",o={unversionedId:"operating/upgrading",id:"operating/upgrading",title:"Upgrading",description:"TigerBeetle guarantees storage stability and provides forward upgradeability. In other words, data",source:"@site/pages/operating/upgrading.md",sourceDirName:"operating",slug:"/operating/upgrading",permalink:"/operating/upgrading",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/operating/upgrading.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Managed Service",permalink:"/operating/managed-service"},next:{title:".NET",permalink:"/clients/dotnet"}},s={},p=[{value:"Planning for upgrades",id:"planning-for-upgrades",level:2},{value:"Upgrading binary-based installations",id:"upgrading-binary-based-installations",level:2},{value:"Upgrading Docker-based installations",id:"upgrading-docker-based-installations",level:2},{value:"Upgrading clients",id:"upgrading-clients",level:2},{value:".NET",id:"net",level:3},{value:"Go",id:"go",level:3},{value:"Java",id:"java",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Upgrading to a newer version with incompatible clients",id:"upgrading-to-a-newer-version-with-incompatible-clients",level:3}],d={toc:p},g="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upgrading"},"Upgrading"),(0,i.kt)("p",null,"TigerBeetle guarantees storage stability and provides forward upgradeability. In other words, data\nfiles created by a particular past version of TigerBeetle can be migrated to any future version of\nTigerBeetle."),(0,i.kt)("p",null,"Migration is automatic and the upgrade process is usually as simple as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upgrade the replicas, by replacing the ",(0,i.kt)("inlineCode",{parentName:"li"},"./tigerbeetle")," binary with a newer version on each\nreplica (they will restart automatically when needed)."),(0,i.kt)("li",{parentName:"ul"},"Upgrade the clients, by updating the corresponding client libraries, recompiling and redeploying\nas usual.")),(0,i.kt)("p",null,"There's no need to stop the cluster for upgrades, and the client upgrades can be rolled out\ngradually as any change to the client code might."),(0,i.kt)("p",null,"NOTE: if you are upgrading from 0.15.3 (the first stable version), the upgrade procedure is more\ninvolved, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/releases/tag/0.15.4"},"release notes for 0.15.4"),"."),(0,i.kt)("h2",{id:"planning-for-upgrades"},"Planning for upgrades"),(0,i.kt)("p",null,"When upgrading TigerBeetle, each release specifies two important versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the oldest release that can be upgraded from and,"),(0,i.kt)("li",{parentName:"ul"},"the oldest supported client version.")),(0,i.kt)("p",null,"It's critical to make sure that the release you intend to upgrade from is supported by the release\nyou're upgrading to. This is a hard requirement, but also a hard guarantee: if you wish to upgrade\nto ",(0,i.kt)("inlineCode",{parentName:"p"},"0.15.20")," which says it supports down to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.15.5"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"0.15.5")," ",(0,i.kt)("em",{parentName:"p"},"will")," work and ",(0,i.kt)("inlineCode",{parentName:"p"},"0.15.4")," ",(0,i.kt)("em",{parentName:"p"},"will not"),".\nYou will have to perform multiple upgrades in this case."),(0,i.kt)("p",null,"The upgrade process involves first upgrading the replicas, followed by upgrading the clients. The\nclient version ",(0,i.kt)("em",{parentName:"p"},"cannot")," be newer than the replica version, and will fail with an error message if\nso. Provided the supported version ranges overlap, coordinating the upgrade between clients and\nreplicas is not required."),(0,i.kt)("p",null,"Upgrading causes a short period of unavailability as the replicas restart. This is on the order of\n5 seconds, and will show up as a latency spike on requests. The TigerBeetle clients will internally\nretry any requests during the period."),(0,i.kt)("p",null,"Even though this period is short, scheduling a maintenance windows for upgrades is still\nrecommended, for an extra layer of safety."),(0,i.kt)("p",null,"Any special instructions, like that when upgrading from 0.15.3 to 0.15.4, will be explicitly\nmentioned in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/CHANGELOG.md"},"changelog"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/releases"},"release notes"),"."),(0,i.kt)("p",null,"Additionally, subscribe to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/issues/2231"},"this tracking issue"),"\nto be notified when there are breaking API/behavior changes that are visible to the client."),(0,i.kt)("h2",{id:"upgrading-binary-based-installations"},"Upgrading binary-based installations"),(0,i.kt)("p",null,"If TigerBeetle is installed under ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/bin/tigerbeetle"),", and you wish to upgrade to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.15.4"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# SSH to each replica, in no particular order:\ncd /tmp\nwget https://github.com/tigerbeetle/tigerbeetle/releases/download/0.15.4/tigerbeetle-x86_64-linux.zip\nunzip tigerbeetle-x86_64-linux.zip\n\n# Put the binary on the same file system as the target, so mv is atomic.\nmv tigerbeetle /usr/bin/tigerbeetle-new\n\nmv /usr/bin/tigerbeetle /usr/bin/tigerbeetle-old\nmv /usr/bin/tigerbeetle-new /usr/bin/tigerbeetle\n\n# Restart TigerBeetle. Only required when upgrading from 0.15.3.\n# Otherwise, it will detect new versions are available and coordinate the upgrade itself.\nsystemctl restart tigerbeetle # or, however you are managing TigerBeetle.\n")),(0,i.kt)("h2",{id:"upgrading-docker-based-installations"},"Upgrading Docker-based installations"),(0,i.kt)("p",null,"If you're running TigerBeetle inside Kubernetes or Docker, update the tag that is pointed to to the\nrelease you wish to upgrade to. Before beginning, it's strongly recommend to have a rolling deploy\nstrategy set up."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"image: ghcr.io/tigerbeetle/tigerbeetle:0.15.3\n")),(0,i.kt)("p",null,"becomes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"image: ghcr.io/tigerbeetle/tigerbeetle:0.15.4\n")),(0,i.kt)("p",null,"Due to the way upgrades work internally, this will restart with the new binary available, but still\nrunning the older version. TigerBeetle will then coordinate the actual upgrade when all replicas\nare ready and have the latest version available."),(0,i.kt)("h2",{id:"upgrading-clients"},"Upgrading clients"),(0,i.kt)("p",null,"Update your language's specific package management, to reference the same version of the\nTigerBeetle client:"),(0,i.kt)("h3",{id:"net"},".NET"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet add package tigerbeetle --version 0.15.4\n")),(0,i.kt)("h3",{id:"go"},"Go"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"go mod edit -require github.com/tigerbeetle/tigerbeetle-go@v0.15.4\n")),(0,i.kt)("h3",{id:"java"},"Java"),(0,i.kt)("p",null,"Edit your ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    <dependency>\n        <groupId>com.tigerbeetle</groupId>\n        <artifactId>tigerbeetle-java</artifactId>\n        <version>0.15.4</version>\n    </dependency>\n")),(0,i.kt)("h3",{id:"nodejs"},"Node.js"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install tigerbeetle-node@0.15.4\n")),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"upgrading-to-a-newer-version-with-incompatible-clients"},"Upgrading to a newer version with incompatible clients"),(0,i.kt)("p",null,"If a release of TigerBeetle no longer supports the client version you're using, it's still possible\nto upgrade, with two options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Upgrade the replicas to the latest version. In this case, the clients will stop working for the\nduration of the upgrade and unavailability will be extended."),(0,i.kt)("li",{parentName:"ul"},"Upgrade the replicas to the latest release that supports the client version in use, then upgrade\nthe clients to that version. Repeat this until you're on the latest release.")))}u.isMDXComponent=!0}}]);