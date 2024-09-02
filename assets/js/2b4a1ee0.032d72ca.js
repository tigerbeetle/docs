"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:8},o="Upgrades",l={unversionedId:"about/internals/upgrades",id:"about/internals/upgrades",title:"Upgrades",description:"Upgrades in TigerBeetle are handled by bundling multiple underlying TigerBeetle binaries of",source:"@site/pages/about/internals/upgrades.md",sourceDirName:"about/internals",slug:"/about/internals/upgrades",permalink:"/about/internals/upgrades",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/about/internals/upgrades.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Cloud",permalink:"/about/internals/cloud"}},s={},p=[{value:"Building",id:"building",level:2},{value:"Bootstrapping",id:"bootstrapping",level:3},{value:"Monitoring",id:"monitoring",level:2},{value:"Executing",id:"executing",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"upgrades"},"Upgrades"),(0,i.kt)("p",null,'Upgrades in TigerBeetle are handled by bundling multiple underlying TigerBeetle binaries of\ndifferent versions, into a single binary, known as "Multiversion Binaries".'),(0,i.kt)("p",null,"The idea behind multiversion binaries is to give operators a great experience when upgrading\nTigerBeetle clusters:"),(0,i.kt)("p",null,"Upgrades should be simple, involve minimal downtime and be robust, while not requiring external\ncoordination."),(0,i.kt)("p",null,"Multiple versions in a single binary are required for two reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It allows a replica to crash after the binary has been upgraded, and still come back online.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"It also allows for deployments, like Docker, where the binary is immutable and the process\nhas to be terminated to learn about new versions from itself."))),(0,i.kt)("li",{parentName:"ul"},"It allows for migrations over a range to happen easily without having to manually jump from\nversion to version.")),(0,i.kt)("p",null,"The upgrade instructions look something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# SSH to each replica, in no particular order:\ncd /tmp\nwget https://github.com/tigerbeetle/tigerbeetle/releases/download/0.15.4/tigerbeetle-x86_64-linux.zip\nunzip tigerbeetle-x86_64-linux.zip\n\n# Put the binary on the same file system as the target, so mv is atomic.\nmv tigerbeetle /usr/bin/tigerbeetle-new\n\nmv /usr/bin/tigerbeetle /usr/bin/tigerbeetle-old\nmv /usr/bin/tigerbeetle-new /usr/bin/tigerbeetle\n")),(0,i.kt)("p",null,"When the primary determines that enough",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," replicas have the new binary, it'll ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/pull/1670"},"coordinate the\nupgrade"),"."),(0,i.kt)("p",null,"There are three main parts to multiversion binaries: building, monitoring and executing, with\nplatform specific parts in each."),(0,i.kt)("h2",{id:"building"},"Building"),(0,i.kt)("p",null,"Physically, multiversion binaries are regular TigerBeetle ELF / PE / MachO",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," files that have two\nextra sections",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," embedded into them - marked as ",(0,i.kt)("inlineCode",{parentName:"p"},"noload")," so that they're not memory mapped:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".tb_mvh")," or TigerBeetleMultiVersionHeader - a header struct containing information on past\nversions embedded as well as offsets, sizes, checksums and the like."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".tb_mvb")," or TigerBeetleMultiVersionBody - a concatenated pack of binaries. The offsets in\n",(0,i.kt)("inlineCode",{parentName:"li"},".tb_mvh")," refer into here.")),(0,i.kt)("p",null,"These are added by an explicit objcopy step in the release process, ",(0,i.kt)("em",{parentName:"p"},"after")," the regular build is\ndone. After the epoch, the build process only needs to pull the last TigerBeetle release from\nGitHub, to access its embedded pack to build its own."),(0,i.kt)("h3",{id:"bootstrapping"},"Bootstrapping"),(0,i.kt)("p",null,"0.15.3 is considered the epoch release, but it doesn't know about any future versions of\nTigerBeetle or how to read the metadata yet. This means that if the build process pulled in that\nexact release, when running on a 0.15.3 data file, 0.15.3 would be executed and nothing further\nwould happen. There is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/pull/1935"},"special backport\nrelease"),", that embeds the fact that 0.15.4 is\navailable to solve this problem. The release code for 0.15.4 builds this version for 0.15.3,\ninstead of downloading it from GitHub."),(0,i.kt)("p",null,"Additionally, since 0.15.3 can't read its own binary (see Monitoring below), restarting the replica\nmanually after copying it in is needed."),(0,i.kt)("p",null,"Once 0.15.4 is running, no more special cases are needed."),(0,i.kt)("h2",{id:"monitoring"},"Monitoring"),(0,i.kt)("p",null,"On a 1 second timer, TigerBeetle ",(0,i.kt)("inlineCode",{parentName:"p"},"stat"),"s its binary file, looking for changes. Should anything\ndiffer (besides ",(0,i.kt)("inlineCode",{parentName:"p"},"atime"),") it'll re-read the binary into memory, verify checksums and metadata, and\nstart advertising new versions without requiring a restart."),(0,i.kt)("p",null,"This optimization allows skipping a potentially expensive WAL replay when upgrading: the previous\nversion is what will checkpoint to the new version, at which point the exec happens."),(0,i.kt)("h2",{id:"executing"},"Executing"),(0,i.kt)("p",null,"The final step is executing into the new version of TigerBeetle. On Linux, this is handled by\n",(0,i.kt)("inlineCode",{parentName:"p"},"execveat")," which allows executing from a ",(0,i.kt)("inlineCode",{parentName:"p"},"memfd"),". If executing the latest release, ",(0,i.kt)("inlineCode",{parentName:"p"},"exec_current"),"\nre-execs the ",(0,i.kt)("inlineCode",{parentName:"p"},"memfd")," as-is. If executing an older release, ",(0,i.kt)("inlineCode",{parentName:"p"},"exec_release")," copies it out of the\npack, verifies its checksum, and then executes it."),(0,i.kt)("p",null,"One key point is that the newest version is always what starts up and determines what version to\nrun."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"Currently the total number of replicas, less one.",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"MachO binaries are constructed as fat binaries, using unused, esoteric CPU identifiers to\nsignal the header and body, for both x86_64 and arm64.",(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"The short names are for compatibility with Windows: PE supports up to 8 characters for\nsection names without getting more complicated.",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);