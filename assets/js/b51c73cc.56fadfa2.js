"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,k=c["".concat(p,".").concat(u)]||c[u]||d[u]||r;return n?i.createElement(k,l(l({ref:t},s),{},{components:n})):i.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:5},l="Testing",o={unversionedId:"about/internals/testing",id:"about/internals/testing",title:"Testing",description:"Documentation for (roughly) code in the src/testing directory.",source:"@site/pages/about/internals/testing.md",sourceDirName:"about/internals",slug:"/about/internals/testing",permalink:"/about/internals/testing",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/about/internals/testing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"State Sync",permalink:"/about/internals/sync"},next:{title:"Releases",permalink:"/about/internals/releases"}},p={},m=[{value:"VOPR Output",id:"vopr-output",level:2},{value:"Columns",id:"columns",level:3},{value:"Example",id:"example",level:3}],s={toc:m},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Documentation for (roughly) code in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/testing")," directory."),(0,a.kt)("h2",{id:"vopr-output"},"VOPR Output"),(0,a.kt)("h3",{id:"columns"},"Columns"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Replica index."),(0,a.kt)("li",{parentName:"ol"},"Event:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!"),": crash"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"^"),": recover"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"}," "),": commit"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$"),": sync"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"["),": checkpoint start"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"]"),": checkpoint done"))),(0,a.kt)("li",{parentName:"ol"},"Role (according to the replica itself):",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/"),": primary"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\\"),": backup"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"|"),": standby"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"~"),": syncing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#"),": (crashed)"))),(0,a.kt)("li",{parentName:"ol"},"Status:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The column (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},".   ")," vs ",(0,a.kt)("inlineCode",{parentName:"li"},"   ."),") corresponds to the replica index. (This can help identify events' replicas at a quick glance.)"),(0,a.kt)("li",{parentName:"ul"},"The symbol indicates the ",(0,a.kt)("inlineCode",{parentName:"li"},"replica.status"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"."),": ",(0,a.kt)("inlineCode",{parentName:"li"},"normal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"v"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"view_change")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"r"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"recovering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"h"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"recovering_head")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"s"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"sync")))),(0,a.kt)("li",{parentName:"ol"},"View: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"74V")," indicates ",(0,a.kt)("inlineCode",{parentName:"li"},"replica.view=74"),"."),(0,a.kt)("li",{parentName:"ol"},"Checkpoint and Commit: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"83/_90/_98C")," indicates that:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the highest checkpointed op at the replica is ",(0,a.kt)("inlineCode",{parentName:"li"},"83")," (",(0,a.kt)("inlineCode",{parentName:"li"},"replica.op_checkpoint()=83"),"),"),(0,a.kt)("li",{parentName:"ul"},"on top of that checkpoint, the replica applied ops up to and including ",(0,a.kt)("inlineCode",{parentName:"li"},"90")," (",(0,a.kt)("inlineCode",{parentName:"li"},"replica.commit_min=90"),"),"),(0,a.kt)("li",{parentName:"ul"},"replica knows that ops at least up to ",(0,a.kt)("inlineCode",{parentName:"li"},"98")," are committed in the cluster (",(0,a.kt)("inlineCode",{parentName:"li"},"replica.commit_max=98"),")."))),(0,a.kt)("li",{parentName:"ol"},"Journal op: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"87:150Jo")," indicates that the minimum op in the journal is ",(0,a.kt)("inlineCode",{parentName:"li"},"87")," and the maximum is ",(0,a.kt)("inlineCode",{parentName:"li"},"150"),"."),(0,a.kt)("li",{parentName:"ol"},"Journal faulty/dirty: ",(0,a.kt)("inlineCode",{parentName:"li"},"0/1Jd")," indicates that the journal has 0 faulty headers and 1 dirty headers."),(0,a.kt)("li",{parentName:"ol"},"WAL prepare ops: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"85:149Wo")," indicates that the op of the oldest prepare in the WAL is ",(0,a.kt)("inlineCode",{parentName:"li"},"85")," and the op of the newest prepare in the WAL is ",(0,a.kt)("inlineCode",{parentName:"li"},"149"),"."),(0,a.kt)("li",{parentName:"ol"},"Syncing ops: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"<0:123>")," indicates that ",(0,a.kt)("inlineCode",{parentName:"li"},"vsr_state.sync_op_min=0")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"vsr_state.sync_op_max=123"),"."),(0,a.kt)("li",{parentName:"ol"},"Release version: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"v1:2")," indicates that the replica is running release version ",(0,a.kt)("inlineCode",{parentName:"li"},"1"),", and that its maximum available release is ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,a.kt)("li",{parentName:"ol"},"Grid blocks acquired: e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"167Ga")," indicates that the grid has ",(0,a.kt)("inlineCode",{parentName:"li"},"167")," blocks currently in use."),(0,a.kt)("li",{parentName:"ol"},"Grid blocks queued ",(0,a.kt)("inlineCode",{parentName:"li"},"grid.read_remote_queue"),": e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"0G!")," indicates that there are ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," reads awaiting remote fulfillment."),(0,a.kt)("li",{parentName:"ol"},"Grid blocks queued ",(0,a.kt)("inlineCode",{parentName:"li"},"grid_blocks_missing"),": e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"0G?")," indicates that there are ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," blocks awaiting remote repair."),(0,a.kt)("li",{parentName:"ol"},"Pipeline prepares (primary-only): e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"1/4Pp")," indicates that the primary's pipeline has 2 prepares queued, out of a capacity of 4."),(0,a.kt)("li",{parentName:"ol"},"Pipeline requests (primary-only): e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"0/3Pq")," indicates that the primary's pipeline has 0 requests queued, out of a capacity of 3.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"(The first line labels the columns, but is not part of the actual VOPR output)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," 1 2 3 4-------- 5---  6----------  7-------  8-----  9------- 10-----   11-- 12-----  13-   14-   15---  16---\n\n 3 [ /    .        3V  71/_99/_99C  68:_99Jo  0/_0J!  68:_99Wo <__0:__0> v1:2   183Ga  0G!   0G?   0/4Pp  0/3Rq\n 4 ^ \\     .       2V  23/_23/_46C  19:_50Jo  0/_0J!  19:_50Wo <__0:__0> v1:2  nullGa  0G!   0G?\n 2   \\   .         3V  71/_99/_99C  68:_99Jo  0/_0J!  68:_99Wo <__0:__0> v1:2   183Ga  0G!   0G?\n 2 [ \\   .         3V  71/_99/_99C  68:_99Jo  0/_0J!  68:_99Wo <__0:__0> v1:2   183Ga  0G!   0G?\n 6   |       .     3V  71/_99/_99C  68:_99Jo  0/_0J!  68:_99Wo <__0:__0> v1:2   183Ga  0G!   0G?\n 6 [ |       .     3V  71/_99/_99C  68:_99Jo  0/_0J!  68:_99Wo <__0:__0> v1:2   183Ga  0G!   0G?\n 3 ] /    .        3V  95/_99/_99C  68:_99Jo  0/_0J!  68:_99Wo <__0:__0> v1:2   167Ga  0G!   0G?   0/4Pp  0/3Rq\n 2 ] \\   .         3V  95/_99/_99C  68:_99Jo  0/_0J!  68:_99Wo <__0:__0> v1:2   167Ga  0G!   0G?\n 1   \\  .          3V  71/_99/_99C  68:_99Jo  0/_1J!  67:_98Wo <__0:__0> v1:2   183Ga  0G!   0G?\n 1 [ \\  .          3V  71/_99/_99C  68:_99Jo  0/_1J!  67:_98Wo <__0:__0> v1:2   183Ga  0G!   0G?\n 5   |      .      3V  71/_99/_99C  68:_99Jo  0/_0J!  68:_99Wo <__0:__0> v1:2   183Ga  0G!   0G?\n 5 [ |      .      3V  71/_99/_99C  68:_99Jo  0/_0J!  68:_99Wo <__0:__0> v1:2   183Ga  0G!   0G?\n")))}d.isMDXComponent=!0}}]);