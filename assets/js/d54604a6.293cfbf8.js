"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(a),h=i,u=m["".concat(c,".").concat(h)]||m[h]||k[h]||r;return a?n.createElement(u,l(l({ref:t},s),{},{components:a})):n.createElement(u,l({ref:t},s))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={sidebar_position:4},l="State Sync",o={unversionedId:"internals/sync",id:"internals/sync",title:"State Sync",description:"State sync synchronizes the state of a lagging/divergent replica with the healthy cluster.",source:"@site/pages/internals/sync.md",sourceDirName:"internals",slug:"/internals/sync",permalink:"/internals/sync",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/internals/sync.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"LSM",permalink:"/internals/lsm"},next:{title:"Testing",permalink:"/internals/testing"}},c={},p=[{value:"Glossary",id:"glossary",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"0: Scenarios",id:"0-scenarios",level:3},{value:"1: Triggers",id:"1-triggers",level:3},{value:"6: Request Superblock Checkpoint State",id:"6-request-superblock-checkpoint-state",level:3},{value:"Concepts",id:"concepts",level:2},{value:"Syncing Replica",id:"syncing-replica",level:3},{value:"Syncing Replicas write prepares to their WAL.",id:"syncing-replicas-write-prepares-to-their-wal",level:4},{value:"Syncing Replicas don&#39;t ack prepares.",id:"syncing-replicas-dont-ack-prepares",level:4},{value:"Checkpoint Identifier",id:"checkpoint-identifier",level:3},{value:"Canonical Checkpoint",id:"canonical-checkpoint",level:3},{value:"Sync Target",id:"sync-target",level:3},{value:"Storage Determinism",id:"storage-determinism",level:3},{value:"Progress Tracking",id:"progress-tracking",level:3}],s={toc:p},m="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state-sync"},"State Sync"),(0,i.kt)("p",null,"State sync synchronizes the state of a lagging/divergent replica with the healthy cluster."),(0,i.kt)("p",null,"State sync is used when when a lagging replica's log no longer intersects with the cluster's current log \u2014\n",(0,i.kt)("a",{parentName:"p",href:"/internals/vsr#protocol-repair-wal"},"WAL repair")," cannot catch the replica up."),(0,i.kt)("p",null,'(VRR refers to state sync as "state transfer", but we already have ',(0,i.kt)("a",{parentName:"p",href:"/reference/transfers"},"transfers")," elsewhere.)"),(0,i.kt)("p",null,'In the context of state sync, "state" refers to:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the superblock ",(0,i.kt)("inlineCode",{parentName:"li"},"vsr_state.checkpoint")),(0,i.kt)("li",{parentName:"ol"},"the grid (manifest, free set, and client sessions blocks)"),(0,i.kt)("li",{parentName:"ol"},"the grid (LSM table data; acquired blocks only)"),(0,i.kt)("li",{parentName:"ol"},"client replies")),(0,i.kt)("p",null,"State sync consists of four protocols:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/internals/vsr#protocol-sync-superblock"},"Sync Superblock")," (syncs 1)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/internals/vsr#protocol-repair-grid"},"Repair Grid")," (syncs 2)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/internals/vsr#protocol-sync-forest"},"Sync Forest")," (syncs 3)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/internals/vsr#protocol-sync-client-replies"},"Sync Client Replies")," (syncs 4)")),(0,i.kt)("p",null,"The target of superblock-sync is the latest checkpoint of the healthy cluster.\nWhen we catch up to the latest checkpoint (or very close to it), then we can transition back to a healthy state."),(0,i.kt)("h2",{id:"glossary"},"Glossary"),(0,i.kt)("p",null,"Replica roles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"syncing replica"),": A replica performing superblock-sync. (Any step within ",(0,i.kt)("em",{parentName:"li"},"1"),"-",(0,i.kt)("em",{parentName:"li"},"10")," of the ",(0,i.kt)("a",{parentName:"li",href:"#algorithm"},"sync algorithm"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"healthy replica"),": A replica ",(0,i.kt)("em",{parentName:"li"},"not")," performing superblock-sync \u2014 part of the active cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"divergent replica"),": A replica with a checkpoint that is (and can never be) canonical.")),(0,i.kt)("p",null,"Checkpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#checkpoint-identifier"},(0,i.kt)("em",{parentName:"a"},"checkpoint id"),"/",(0,i.kt)("em",{parentName:"a"},"checkpoint identifier")),": Uniquely identifies a particular checkpoint reproducibly across replicas."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#canonical-checkpoint"},(0,i.kt)("em",{parentName:"a"},"canonical checkpoint")),": Any checkpoint which either: ",(0,i.kt)("em",{parentName:"li"},"A"),": has any ops committed atop it by the primary, or ",(0,i.kt)("em",{parentName:"li"},"B"),": a majority quorum has reached."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sync-target"},(0,i.kt)("em",{parentName:"a"},"sync target")),": The checkpoint identifier of the target of superblock-sync. Every sync target is a canonical checkpoint.")),(0,i.kt)("h2",{id:"algorithm"},"Algorithm"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#0-scenarios"},"Sync is needed"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#1-triggers"},"Trigger sync"),"."),(0,i.kt)("li",{parentName:"ol"},"Wait for non-grid commit operation to finish."),(0,i.kt)("li",{parentName:"ol"},"Wait for grid IO to finish. (See ",(0,i.kt)("inlineCode",{parentName:"li"},"Grid.cancel()"),".)"),(0,i.kt)("li",{parentName:"ol"},"Wait for a usable sync target to arrive. (Usually we already have one.)"),(0,i.kt)("li",{parentName:"ol"},"Begin ",(0,i.kt)("a",{parentName:"li",href:"/internals/vsr#protocol-sync-superblock"},"sync-superblock protocol"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#6-request-superblock-checkpoint-state"},"Request superblock checkpoint state"),"."),(0,i.kt)("li",{parentName:"ol"},"Update the superblock headers with:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bump ",(0,i.kt)("inlineCode",{parentName:"li"},"vsr_state.checkpoint.commit_min"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"vsr_state.checkpoint.commit_min_checksum")," to the sync target op/op-checksum."),(0,i.kt)("li",{parentName:"ul"},"Bump ",(0,i.kt)("inlineCode",{parentName:"li"},"vsr_state.checkpoint.previous_checkpoint_id")," to the checkpoint id that is previous to our sync target (i.e. it isn't ",(0,i.kt)("em",{parentName:"li"},"our")," previous checkpoint)."),(0,i.kt)("li",{parentName:"ul"},"Bump ",(0,i.kt)("inlineCode",{parentName:"li"},"replica.commit_min"),". (If ",(0,i.kt)("inlineCode",{parentName:"li"},"replica.commit_min")," exceeds ",(0,i.kt)("inlineCode",{parentName:"li"},"replica.op"),", transition to ",(0,i.kt)("inlineCode",{parentName:"li"},"status=recovering_head"),")."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"vsr_state.sync_op_min")," to the minimum op which has not been repaired."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"vsr_state.sync_op_max")," to the maximum op which has not been repaired."))),(0,i.kt)("li",{parentName:"ol"},"Sync-superblock protocol is done."),(0,i.kt)("li",{parentName:"ol"},"Repair ",(0,i.kt)("a",{parentName:"li",href:"/internals/vsr#protocol-sync-client-replies"},"replies"),", ",(0,i.kt)("a",{parentName:"li",href:"/internals/vsr#protocol-repair-grid"},"free set, client sessions, and manifest blocks"),", and ",(0,i.kt)("a",{parentName:"li",href:"/internals/vsr#protocol-sync-forest"},"table blocks")," that were created within the ",(0,i.kt)("inlineCode",{parentName:"li"},"sync_op_{min,max}")," range."),(0,i.kt)("li",{parentName:"ol"},"Update the superblock with:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"vsr_state.sync_op_min = 0")),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"vsr_state.sync_op_max = 0"))))),(0,i.kt)("p",null,"If a newer sync target is discovered during steps ",(0,i.kt)("em",{parentName:"p"},"5"),"-",(0,i.kt)("em",{parentName:"p"},"6")," or ",(0,i.kt)("em",{parentName:"p"},"9"),", go to step ",(0,i.kt)("em",{parentName:"p"},"4"),"."),(0,i.kt)("p",null,"If the replica starts up with ",(0,i.kt)("inlineCode",{parentName:"p"},"vsr_state.sync_op_max \u2260 0"),", go to step ",(0,i.kt)("em",{parentName:"p"},"9"),"."),(0,i.kt)("h3",{id:"0-scenarios"},"0: Scenarios"),(0,i.kt)("p",null,"Scenarios requiring state sync:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A replica was down/partitioned/slow for a while and the rest of the cluster moved on.\nThe lagging replica is too far behind to catch up via WAL repair."),(0,i.kt)("li",{parentName:"ol"},"A replica was just formatted and is being added to the cluster (i.e. via ",(0,i.kt)("a",{parentName:"li",href:"/internals/vsr#protocol-reconfiguration"},"reconfiguration"),").\nThe new replica is too far behind to catch up via WAL repair."),(0,i.kt)("li",{parentName:"ol"},"A replica's state diverged from the cluster (",(0,i.kt)("a",{parentName:"li",href:"#storage-determinism"},"storage nondeterminism"),").")),(0,i.kt)("p",null,"Causes of number 3:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A storage determinism bug."),(0,i.kt)("li",{parentName:"ul"},"An upgraded replica (e.g. a canary) running a different version of the code from the remainder of the cluster, which unexpectedly changes its history.\n(The change either has a bug or should have been gated behind a feature flag.)")),(0,i.kt)("h3",{id:"1-triggers"},"1: Triggers"),(0,i.kt)("p",null,"State sync is initially triggered by any of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The replica discovers the canonical checkpoint for its current wrap, and that it ",(0,i.kt)("a",{parentName:"li",href:"#storage-determinism"},"doesn't match")," its own current checkpoint."),(0,i.kt)("li",{parentName:"ul"},"The replica receives a SV which indicates that it has lagged so far behind the cluster that its log cannot possibly intersect."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repair_sync_timeout")," fires, and:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a WAL or grid repair is in progress and,"),(0,i.kt)("li",{parentName:"ul"},"the replica's checkpoint is lagging behind the cluster's (far enough that the repair may never complete).")))),(0,i.kt)("h3",{id:"6-request-superblock-checkpoint-state"},"6: Request Superblock Checkpoint State"),(0,i.kt)("p",null,"The syncing replica sends ",(0,i.kt)("inlineCode",{parentName:"p"},"command=request_sync_checkpoint")," messages (with the sync target identifier attached to each) until it receives a ",(0,i.kt)("inlineCode",{parentName:"p"},"command=sync_checkpoint")," with a matching checkpoint identifier."),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("h3",{id:"syncing-replica"},"Syncing Replica"),(0,i.kt)("p",null,"Syncing replicas may:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#syncing-replicas-write-prepares-to-their-wal"},"write prepares to their WAL")),(0,i.kt)("li",{parentName:"ul"},"assist with grid repair"),(0,i.kt)("li",{parentName:"ul"},"join new views"),(0,i.kt)("li",{parentName:"ul"},"send a ",(0,i.kt)("inlineCode",{parentName:"li"},"do_view_change"))),(0,i.kt)("p",null,"Syncing replicas must not:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#syncing-replicas-dont-ack-prepares"},"ack")),(0,i.kt)("li",{parentName:"ul"},"commit prepares"),(0,i.kt)("li",{parentName:"ul"},"be a primary")),(0,i.kt)("h4",{id:"syncing-replicas-write-prepares-to-their-wal"},"Syncing Replicas write prepares to their WAL."),(0,i.kt)("p",null,"When the replica completes superblock-sync, an up-to-date WAL and journal allow it to quickly catch up (i.e. commit) to the current cluster state."),(0,i.kt)("h4",{id:"syncing-replicas-dont-ack-prepares"},"Syncing Replicas don't ack prepares."),(0,i.kt)("p",null,"If syncing replicas ",(0,i.kt)("em",{parentName:"p"},"did")," ack prepares:"),(0,i.kt)("p",null,"Consider a cluster of 3 replicas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("em",{parentName:"li"},"primary"),","),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"normal backup"),", and"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"syncing backup"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Primary")," prepares many ops..."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Syncing backup")," prepares and acknowledges all of those messages."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Normal backup")," is partitioned \u2014 its not seeing any of these prepares."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Primary")," is receiving ",(0,i.kt)("inlineCode",{parentName:"li"},"prepare_ok"),"s from the ",(0,i.kt)("em",{parentName:"li"},"syncing backup"),", so it is committing."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("em",{parentName:"li"},"Primary")," eventually checkpoints."),(0,i.kt)("li",{parentName:"ol"},"(This cycle repeats \u2014 ",(0,i.kt)("em",{parentName:"li"},"primary")," keeps preparing/committing, ",(0,i.kt)("em",{parentName:"li"},"syncing backup")," keeps preparing, and ",(0,i.kt)("em",{parentName:"li"},"normal backup")," is still partitioned.)")),(0,i.kt)("p",null,"But now ",(0,i.kt)("em",{parentName:"p"},"primary")," is so far ahead that the ",(0,i.kt)("em",{parentName:"p"},"normal backup")," needs to sync!\nHaving 2/3 replicas syncing means that a single grid-block corruption on the primary could make the cluster permanently unavailable."),(0,i.kt)("h3",{id:"checkpoint-identifier"},"Checkpoint Identifier"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"checkpoint id")," is a hash of the superblock ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckpointState"),"."),(0,i.kt)("p",null,"A checkpoint identifier is attached to the following message types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command=commit"),": Current checkpoint identifier of sender."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command=ping"),": Current checkpoint identifier of sender."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command=prepare"),": The attached checkpoint id is the checkpoint id during which the corresponding prepare was originally prepared."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command=prepare_ok"),": The attached checkpoint id is the checkpoint id during which the corresponding prepare was originally prepared."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command=request_sync_checkpoint"),": Requested checkpoint identifier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"command=sync_checkpoint"),": Current checkpoint identifier of sender.")),(0,i.kt)("h3",{id:"canonical-checkpoint"},"Canonical Checkpoint"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"canonical")," checkpoint is a checkpoint:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"with an op committed atop it by the primary (discovery via ",(0,i.kt)("inlineCode",{parentName:"li"},"command=commit"),"), or"),(0,i.kt)("li",{parentName:"ol"},"that a majority quorum of replicas have reached (discovery via ",(0,i.kt)("inlineCode",{parentName:"li"},"command=ping"),"), or"),(0,i.kt)("li",{parentName:"ol"},"(when ",(0,i.kt)("inlineCode",{parentName:"li"},"R=2"),": that a single replica has reached).")),(0,i.kt)("p",null,"The primary ignores ",(0,i.kt)("inlineCode",{parentName:"p"},"command=prepare"),"s which have a different checkpoint id attached than they expect.\nThis means that if a replica's history diverges (due to nondeterminism), the diverging replica is effectively excluded from participating in consensus until it has performed superblock-sync.\nSee ",(0,i.kt)("a",{parentName:"p",href:"#storage-determinism"},"Storage Determinism"),"."),(0,i.kt)("p",null,'This bounds the "distance" that a history can diverge by.\nNo replica can diverge from the canonical history by more than one checkpoint.\nEvery checkpoint\'s previous (i.e. parent) checkpoint is canonical.'),(0,i.kt)("h3",{id:"sync-target"},"Sync Target"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"sync target")," is the ",(0,i.kt)("a",{parentName:"p",href:"#checkpoint-identifier"},"checkpoint identifier")," of the checkpoint that the superblock-syn is syncing towards."),(0,i.kt)("p",null,"Not all checkpoint identifiers are valid sync targets."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every sync target ",(0,i.kt)("strong",{parentName:"li"},"must")," be a ",(0,i.kt)("a",{parentName:"li",href:"#canonical-checkpoint"},"canonical checkpoint"),".\n(TODO: Once prepares include the checkpoint identifier, this requirement can be removed.)"),(0,i.kt)("li",{parentName:"ul"},"Every sync target op ",(0,i.kt)("strong",{parentName:"li"},"must")," either:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"be greater-than-or-equal-to the replica's current checkpoint op."),(0,i.kt)("li",{parentName:"ul"},"be equal to the replica's current checkpoint op, but with a different target id (if our checkpoint diverged).")))),(0,i.kt)("h3",{id:"storage-determinism"},"Storage Determinism"),(0,i.kt)("p",null,"When everything works, storage is deterministic.\nBut we must tolerate non-determinism too, in case of bugs."),(0,i.kt)("p",null,"At the limit, all 6 replicas could diverge.\nThis puts the cluster in a very precarious position:\nAll it would take is a single corruption to be permanently unavailable!\n(We need to pick one \"winner\", and we can't just read all of every single replica's disks to find which (if any) is completely intact)."),(0,i.kt)("p",null,"So we must bound nondeterminism within our fault model."),(0,i.kt)("p",null,"We require that at least ",(0,i.kt)("a",{parentName:"p",href:"/internals/vsr#quorums"},(0,i.kt)("inlineCode",{parentName:"a"},"quorum_replication"))," histories are identical.\n",(0,i.kt)("a",{parentName:"p",href:"#canonical-checkpoint"},"Canonical Checkpoint")," describes how this can (in part, though not completely) be enforced automatically.\nIf more histories diverge, the cluster will be unavailable (unable to commit), and require operator intervention to recover (e.g. by cloning data files)."),(0,i.kt)("h3",{id:"progress-tracking"},"Progress Tracking"),(0,i.kt)("p",null,"If a state-syncing replica crashes before completing sync, we don't want to restart from scratch.\n(This is mainly important for tables \u2014 the manifest is smaller.)"),(0,i.kt)("p",null,'Progress is tracked implicitly: If a table index block is present on disk, we implicitly assume that all of its data blocks have already been written too.\nThat is, "table index block in grid" implies "table\'s referenced data blocks are in grid".'),(0,i.kt)("p",null,"To enforce this invariant:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"When syncing table blocks, don't write an index block until all of its data blocks are written."),(0,i.kt)("li",{parentName:"ol"},"A history cannot diverge from the canonical history by more than one checkpoint."),(0,i.kt)("li",{parentName:"ol"},"A replica never syncs towards a checkpoint from its past.")))}k.isMDXComponent=!0}}]);