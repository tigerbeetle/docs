"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=p(a),d=l,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_position:3},o="LSM",r={unversionedId:"about/internals/lsm",id:"about/internals/lsm",title:"LSM",description:"Documentation for (roughly) code in the src/lsm directory.",source:"@site/pages/about/internals/lsm.md",sourceDirName:"about/internals",slug:"/about/internals/lsm",permalink:"/about/internals/lsm",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/about/internals/lsm.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Data File",permalink:"/about/internals/data_file"},next:{title:"State Sync",permalink:"/about/internals/sync"}},s={},p=[{value:"Glossary",id:"glossary",level:2},{value:"Tree",id:"tree",level:2},{value:"Tables",id:"tables",level:3},{value:"Compaction",id:"compaction",level:3},{value:"Compaction Selection Policy",id:"compaction-selection-policy",level:4},{value:"Compaction Move Table",id:"compaction-move-table",level:5},{value:"Compaction Table Overlap",id:"compaction-table-overlap",level:5},{value:"Snapshots",id:"snapshots",level:3},{value:"Snapshots and Compaction",id:"snapshots-and-compaction",level:4},{value:"Snapshot Queries",id:"snapshot-queries",level:4},{value:"Persistent Snapshots",id:"persistent-snapshots",level:5},{value:"Snapshot Values",id:"snapshot-values",level:4},{value:"Manifest",id:"manifest",level:3},{value:"Manifest Log",id:"manifest-log",level:4},{value:"Manifest Level",id:"manifest-level",level:4},{value:"Example",id:"example",level:5}],m={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lsm"},"LSM"),(0,l.kt)("p",null,"Documentation for (roughly) code in the ",(0,l.kt)("inlineCode",{parentName:"p"},"src/lsm")," directory."),(0,l.kt)("h2",{id:"glossary"},"Glossary"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"bar"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"lsm_compaction_ops")," beats; unit of incremental compaction."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"beat"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"op % lsm_compaction_ops"),"; Single step of an incremental compaction."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"groove"),": A collection of LSM trees, storing objects and their indices."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"immutable table"),": In-memory table; one per tree. Used to periodically flush the mutable table to\ndisk."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"level"),": A collection of on-disk tables, numbering between ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"config.lsm_levels - 1")," (usually ",(0,l.kt)("inlineCode",{parentName:"li"},"config.lsm_levels = 7"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"forest"),": A collection of grooves."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"manifest"),": Index of table and level metadata; one per tree."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"mutable table"),": In-memory table; one per tree. All tree updates (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"Tree.put"),") directly modify just this table."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"snapshot"),": Sequence number which selects the queryable partition of on-disk tables.")),(0,l.kt)("h2",{id:"tree"},"Tree"),(0,l.kt)("h3",{id:"tables"},"Tables"),(0,l.kt)("p",null,"A tree is a hierarchy of in-memory and on-disk tables. There are three categories of tables:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/lsm/table_memory.zig"},"mutable table")," is an in-memory table.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Each tree has a single mutable table."),(0,l.kt)("li",{parentName:"ul"},"All tree updates, inserts, and removes are applied to the mutable table."),(0,l.kt)("li",{parentName:"ul"},"The mutable table's size is allocated to accommodate a full bar of updates."))),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/lsm/table_memory.zig"},"immutable table")," is an in-memory table.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Each tree has a single immutable table."),(0,l.kt)("li",{parentName:"ul"},"The mutable table's contents are periodically moved to the immutable table,\nwhere they are stored while being flushed to level ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"."))),(0,l.kt)("li",{parentName:"ul"},"Level ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," \u2026 level ",(0,l.kt)("inlineCode",{parentName:"li"},"config.lsm_levels - 1")," each contain an exponentially increasing number of\nimmutable on-disk tables.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Each tree has as many as ",(0,l.kt)("inlineCode",{parentName:"li"},"config.lsm_growth_factor ^ (level + 1)")," tables per level.\n(",(0,l.kt)("inlineCode",{parentName:"li"},"config.lsm_growth_factor")," is typically 8)."),(0,l.kt)("li",{parentName:"ul"},"Within a given level and snapshot, the tables' key ranges are ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/lsm/manifest_level.zig"},"disjoint"),".")))),(0,l.kt)("h3",{id:"compaction"},"Compaction"),(0,l.kt)("p",null,"Tree compaction runs to the sound of music!"),(0,l.kt)("p",null,"Compacting LSM trees involves merging and moving tables into the next levels as needed.\nTo avoid write amplification stalls and bound latency, compaction is done incrementally."),(0,l.kt)("p",null,"A full compaction phase is denoted as a bar, using terms from music notation.\nEach bar consists of ",(0,l.kt)("inlineCode",{parentName:"p"},"lsm_compaction_ops"),' beats or "compaction ticks" of work.\nA compaction tick executes asynchronously immediately after every commit, with\n',(0,l.kt)("inlineCode",{parentName:"p"},"beat = commit.op % lsm_compaction_ops"),"."),(0,l.kt)("p",null,'A bar is split in half according to the "first" beat and "middle" beat.\nThe first half of the bar compacts even levels while the latter compacts odd levels.\nMutable table changes are sorted and compacted into the immutable table.\nThe immutable table is compacted into level 0 during the odd level half of the bar.'),(0,l.kt)("p",null,"At any given point, there are at most ",(0,l.kt)("inlineCode",{parentName:"p"},"\u2308levels/2\u2309")," compactions running concurrently.\nThe source level is denoted as ",(0,l.kt)("inlineCode",{parentName:"p"},"level_a")," and the target level as ",(0,l.kt)("inlineCode",{parentName:"p"},"level_b"),".\nThe last level in the LSM tree has no target level so it is never a source level.\nEach compaction compacts a ",(0,l.kt)("a",{parentName:"p",href:"#compaction-selection-policy"},"single table")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"level_a")," into all tables in\n",(0,l.kt)("inlineCode",{parentName:"p"},"level_b")," which intersect the ",(0,l.kt)("inlineCode",{parentName:"p"},"level_a")," table's key range."),(0,l.kt)("p",null,"Invariants:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"At the end of every beat, there is space in mutable table for the next beat."),(0,l.kt)("li",{parentName:"ul"},"The manifest log is compacted during every half-bar."),(0,l.kt)("li",{parentName:"ul"},"The compactions' output tables are not ",(0,l.kt)("a",{parentName:"li",href:"#snapshots-and-compaction"},"visible")," until the compaction has finished.")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'First half-bar, first beat ("first beat"):'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Assert no compactions are currently running."),(0,l.kt)("li",{parentName:"ul"},"Allow the per-level table limits to overflow if needed (for example, if we may compact a table\nfrom level ",(0,l.kt)("inlineCode",{parentName:"li"},"A")," to level ",(0,l.kt)("inlineCode",{parentName:"li"},"B"),", where level ",(0,l.kt)("inlineCode",{parentName:"li"},"B")," is already full)."),(0,l.kt)("li",{parentName:"ul"},"Start compactions from even levels that have reached their table limit."),(0,l.kt)("li",{parentName:"ul"},"Acquire reservations from the Free Set for all blocks (upper-bound) that will be written\nduring this half-bar."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"First half-bar, last beat:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Finish ticking any incomplete even-level compactions."),(0,l.kt)("li",{parentName:"ul"},"Assert on callback completion that all compactions are complete."),(0,l.kt)("li",{parentName:"ul"},"Release reservations from the Free Set."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'Second half-bar, first beat ("middle beat"):'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Assert no compactions are currently running."),(0,l.kt)("li",{parentName:"ul"},"Start compactions from odd levels that have reached their table limit."),(0,l.kt)("li",{parentName:"ul"},"Compact the immutable table if it contains any sorted values (it might be empty)."),(0,l.kt)("li",{parentName:"ul"},"Acquire reservations from the Free Set for all blocks (upper-bound) that will be written\nduring this half-bar."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Second half-bar, last beat:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Finish ticking any incomplete odd-level and immutable table compactions."),(0,l.kt)("li",{parentName:"ul"},"Assert on callback completion that all compactions are complete."),(0,l.kt)("li",{parentName:"ul"},"Assert on callback completion that no level's table count overflows."),(0,l.kt)("li",{parentName:"ul"},"Flush, clear, and sort mutable table values into immutable table for next bar."),(0,l.kt)("li",{parentName:"ul"},"Remove input tables that are invisible to all current and persisted snapshots."),(0,l.kt)("li",{parentName:"ul"},"Release reservations from the Free Set.")))),(0,l.kt)("h4",{id:"compaction-selection-policy"},"Compaction Selection Policy"),(0,l.kt)("p",null,"Compaction selects the table from level ",(0,l.kt)("inlineCode",{parentName:"p"},"A")," which overlaps the fewest visible tables of level ",(0,l.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,l.kt)("p",null,"For example, in the following table (with ",(0,l.kt)("inlineCode",{parentName:"p"},"lsm_growth_factor=2"),"), each table is depicted as the range of keys it includes. The tables with uppercase letters would be chosen for compaction next."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Level 0   A\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500H       l\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500z\nLevel 1   a\u2500\u2500\u2500\u2500\u2500\u2500\u2500e             L\u2500M   o\u2500\u2500\u2500\u2500\u2500\u2500\u2500s   u\u2500\u2500\u2500\u2500\u2500\u2500\u2500y\nLevel 2     b\u2500\u2500\u2500d e\u2500\u2500\u2500\u2500\u2500h i\u2500\u2500\u2500k l\u2500\u2500\u2500n o\u2500p q\u2500\u2500\u2500s   u\u2500v w\u2500\u2500\u2500\u2500\u2500z\n(Keys)    a b c d e f g h i j k l m n o p q r s t u v w x y z\n")),(0,l.kt)("p",null,"Links:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/lsm/manifest.zig"},(0,l.kt)("inlineCode",{parentName:"a"},"Manifest.compaction_table"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://vldb.org/pvldb/vol14/p2216-sarkar.pdf"},"Constructing and Analyzing the LSM Compaction Design Space"),' describes the tradeoffs of various data movement policies. TigerBeetle implements the "least overlapping with parent" policy.'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rocksdb.org/blog/2016/01/29/compaction_pri.html"},"Option of Compaction Priority"))),(0,l.kt)("h5",{id:"compaction-move-table"},"Compaction Move Table"),(0,l.kt)("p",null,"When the ",(0,l.kt)("a",{parentName:"p",href:"#compaction-selection-policy"},"selected input table")," from level ",(0,l.kt)("inlineCode",{parentName:"p"},"A")," does not overlap ",(0,l.kt)("em",{parentName:"p"},"any"),"\ninput tables in level ",(0,l.kt)("inlineCode",{parentName:"p"},"B"),', the input table can be "moved" to level ',(0,l.kt)("inlineCode",{parentName:"p"},"B"),".\nThat is, instead of sort-merging ",(0,l.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"B"),", just update the input table's metadata in the manifest."),(0,l.kt)("p",null,"This is referred to as the ",(0,l.kt)("em",{parentName:"p"},"move table")," optimization."),(0,l.kt)("p",null,"Where a tree performs inserts mostly in sort order, with a minimum of updates, this ",(0,l.kt)("em",{parentName:"p"},"move table"),"\noptimization should enable the tree's performance to approach that of an append-only log."),(0,l.kt)("h5",{id:"compaction-table-overlap"},"Compaction Table Overlap"),(0,l.kt)("p",null,"Applying ",(0,l.kt)("a",{parentName:"p",href:"#compaction-selection-policy"},"this"),' selection policy while compacting a table\nfrom level A to level B, what is the maximum number of level-B tables that may overlap with the\nselected level-A table (i.e. the "worst case")?'),(0,l.kt)("p",null,"Perhaps surprisingly, this is ",(0,l.kt)("inlineCode",{parentName:"p"},"lsm_growth_factor"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tables within a level are disjoint."),(0,l.kt)("li",{parentName:"ul"},"Level ",(0,l.kt)("inlineCode",{parentName:"li"},"B")," has at most ",(0,l.kt)("inlineCode",{parentName:"li"},"lsm_growth_factor")," times as many tables as level ",(0,l.kt)("inlineCode",{parentName:"li"},"A"),"."),(0,l.kt)("li",{parentName:"ul"},"To trigger compaction, level ",(0,l.kt)("inlineCode",{parentName:"li"},"A"),"'s visible-table count exceeds\n",(0,l.kt)("inlineCode",{parentName:"li"},"table_count_max_for_level(lsm_growth_factor, level_a)"),"."),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"#compaction-selection-policy"},"selection policy")," chooses the table from level ",(0,l.kt)("inlineCode",{parentName:"li"},"A"),"\nwhich overlaps the fewest visible tables in level ",(0,l.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,l.kt)("li",{parentName:"ul"},"If any table in level ",(0,l.kt)("inlineCode",{parentName:"li"},"A")," overlaps ",(0,l.kt)("em",{parentName:"li"},"more than")," ",(0,l.kt)("inlineCode",{parentName:"li"},"lsm_growth_factor")," tables in level ",(0,l.kt)("inlineCode",{parentName:"li"},"B"),",\nthat implies the existence of a table in level ",(0,l.kt)("inlineCode",{parentName:"li"},"A")," with ",(0,l.kt)("em",{parentName:"li"},"less than")," ",(0,l.kt)("inlineCode",{parentName:"li"},"lsm_growth_factor")," overlap.\nThe latter table would be selected over the former.")),(0,l.kt)("h3",{id:"snapshots"},"Snapshots"),(0,l.kt)("p",null,"Each table has a minimum and maximum integer snapshot (",(0,l.kt)("inlineCode",{parentName:"p"},"snapshot_min")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"snapshot_max"),")."),(0,l.kt)("p",null,"Each query targets a particular snapshot. A table ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," is ",(0,l.kt)("em",{parentName:"p"},"visible")," to a snapshot ",(0,l.kt)("inlineCode",{parentName:"p"},"S")," when"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"T.snapshot_min \u2264 S \u2264 T.snapshot_max\n")),(0,l.kt)("p",null,"and is ",(0,l.kt)("em",{parentName:"p"},"invisible")," to the snapshot otherwise."),(0,l.kt)("p",null,"Compaction does not modify tables in place \u2014 it copies data. Snapshots control and distinguish\nwhich copies are useful, and which can be deleted. Snapshots can also be persisted, enabling\nqueries against past states of the tree (unimplemented; future work)."),(0,l.kt)("h4",{id:"snapshots-and-compaction"},"Snapshots and Compaction"),(0,l.kt)("p",null,"Consider the half-bar compaction beginning at op=",(0,l.kt)("inlineCode",{parentName:"p"},"X")," (",(0,l.kt)("inlineCode",{parentName:"p"},"12"),"), with ",(0,l.kt)("inlineCode",{parentName:"p"},"lsm_compaction_ops=M")," (",(0,l.kt)("inlineCode",{parentName:"p"},"8"),").\nEach half-bar contains ",(0,l.kt)("inlineCode",{parentName:"p"},"N=M/2")," (",(0,l.kt)("inlineCode",{parentName:"p"},"4"),") beats. The next half-bar begins at ",(0,l.kt)("inlineCode",{parentName:"p"},"Y=X+N")," (",(0,l.kt)("inlineCode",{parentName:"p"},"16"),")."),(0,l.kt)("p",null,"During the half-bar compaction ",(0,l.kt)("inlineCode",{parentName:"p"},"X"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"snapshot_max")," of each input table is truncated to ",(0,l.kt)("inlineCode",{parentName:"li"},"Y-1")," (",(0,l.kt)("inlineCode",{parentName:"li"},"15"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"snapshot_min")," of each output table is initialized to ",(0,l.kt)("inlineCode",{parentName:"li"},"Y")," (",(0,l.kt)("inlineCode",{parentName:"li"},"16"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"snapshot_max")," of each output table is initialized to ",(0,l.kt)("inlineCode",{parentName:"li"},"\u221e"),".")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0   4   8  12  16  20  24  (op, snapshot)\n\u253c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u253c\n            ####\n\xb7\xb7\xb7\xb7\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500X\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\xb7\xb7\xb7\xb7  (input  tables, before compaction)\n\xb7\xb7\xb7\xb7\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500           (input  tables,  after compaction)\n                Y\u2500\u2500\u2500\u2500\xb7\xb7\xb7\xb7  (output tables,  after compaction)\n")),(0,l.kt)("p",null,"Beginning from the next op after the compaction (",(0,l.kt)("inlineCode",{parentName:"p"},"Y"),"; ",(0,l.kt)("inlineCode",{parentName:"p"},"16"),"):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The output tables of the above compaction ",(0,l.kt)("inlineCode",{parentName:"li"},"X")," are visible."),(0,l.kt)("li",{parentName:"ul"},"The input tables of the above compaction ",(0,l.kt)("inlineCode",{parentName:"li"},"X")," are invisible."),(0,l.kt)("li",{parentName:"ul"},"Therefore, it will lookup from the output tables, but ignore the input tables."),(0,l.kt)("li",{parentName:"ul"},"Callers must not query from the output tables of ",(0,l.kt)("inlineCode",{parentName:"li"},"X")," before the compaction half-bar has finished\n(i.e. before the end of beat ",(0,l.kt)("inlineCode",{parentName:"li"},"Y-1")," (",(0,l.kt)("inlineCode",{parentName:"li"},"15"),")), since those tables are incomplete.")),(0,l.kt)("p",null,"At this point the input tables can be removed if they are invisible to all persistent snapshots."),(0,l.kt)("h4",{id:"snapshot-queries"},"Snapshot Queries"),(0,l.kt)("p",null,"Each query targets a particular snapshot, either:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"the current snapshot (",(0,l.kt)("inlineCode",{parentName:"li"},"snapshot_latest"),"), or"),(0,l.kt)("li",{parentName:"ul"},"a ",(0,l.kt)("a",{parentName:"li",href:"#persistent-snapshots"},"persisted snapshot"),".")),(0,l.kt)("h5",{id:"persistent-snapshots"},"Persistent Snapshots"),(0,l.kt)("p",null,"TODO(Persistent Snapshots): Expand this section."),(0,l.kt)("h4",{id:"snapshot-values"},"Snapshot Values"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The on-disk tables visible to a snapshot ",(0,l.kt)("inlineCode",{parentName:"li"},"B")," do not contain the updates from the commit with op ",(0,l.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,l.kt)("li",{parentName:"ul"},"Rather, snapshot ",(0,l.kt)("inlineCode",{parentName:"li"},"B")," is first visible to a prefetch from the commit with op ",(0,l.kt)("inlineCode",{parentName:"li"},"B"),".")),(0,l.kt)("p",null,"Consider the following diagram (",(0,l.kt)("inlineCode",{parentName:"p"},"lsm_compaction_ops=8"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"0   4   8  12  16  20  24  28  (op, snapshot)\n\u253c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u252c\n        ,,,,,,,,........\n        \u2191A      \u2191B      \u2191C\n")),(0,l.kt)("p",null,"Compaction is driven by the commits of ops ",(0,l.kt)("inlineCode",{parentName:"p"},"B\u2192C")," (",(0,l.kt)("inlineCode",{parentName:"p"},"16\u202623"),"). While these ops are being committed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updates from ops ",(0,l.kt)("inlineCode",{parentName:"li"},"0\u2192A")," (",(0,l.kt)("inlineCode",{parentName:"li"},"0\u20267"),") are on-disk."),(0,l.kt)("li",{parentName:"ul"},"Updates from ops ",(0,l.kt)("inlineCode",{parentName:"li"},"A\u2192B")," (",(0,l.kt)("inlineCode",{parentName:"li"},"8\u202615"),") are in the immutable table.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"These updates were moved to the immutable table from the immutable table at the end of op ",(0,l.kt)("inlineCode",{parentName:"li"},"B-1"),"\n(",(0,l.kt)("inlineCode",{parentName:"li"},"15"),")."),(0,l.kt)("li",{parentName:"ul"},"These updates will exist in the immutable table until it is reset at the end of op ",(0,l.kt)("inlineCode",{parentName:"li"},"C-1")," (",(0,l.kt)("inlineCode",{parentName:"li"},"23"),")."))),(0,l.kt)("li",{parentName:"ul"},"Updates from ops ",(0,l.kt)("inlineCode",{parentName:"li"},"B\u2192C")," (",(0,l.kt)("inlineCode",{parentName:"li"},"16\u202623"),") are added to the mutable table (by the respective commit)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tree.lookup_snapshot_max")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"B")," when committing op ",(0,l.kt)("inlineCode",{parentName:"li"},"B"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tree.lookup_snapshot_max")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," when committing op ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," (for ",(0,l.kt)("inlineCode",{parentName:"li"},"x \u2208 {16,17,\u2026,23}"),").")),(0,l.kt)("p",null,"At the end of the last beat of the compaction bar (",(0,l.kt)("inlineCode",{parentName:"p"},"23"),"):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updates from ops ",(0,l.kt)("inlineCode",{parentName:"li"},"0\u2192B")," (",(0,l.kt)("inlineCode",{parentName:"li"},"0\u202615"),") are on disk."),(0,l.kt)("li",{parentName:"ul"},"Updates from ops ",(0,l.kt)("inlineCode",{parentName:"li"},"B\u2192C")," (",(0,l.kt)("inlineCode",{parentName:"li"},"16\u202623"),") are moved from the mutable table to the immutable table."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tree.lookup_snapshot_max")," is ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," when committing op ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," (for ",(0,l.kt)("inlineCode",{parentName:"li"},"x \u2208 {24,25,\u2026}"),").")),(0,l.kt)("h3",{id:"manifest"},"Manifest"),(0,l.kt)("p",null,"The manifest is a tree's index of table locations and metadata."),(0,l.kt)("p",null,"Each manifest has two components:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a single ",(0,l.kt)("a",{parentName:"li",href:"#manifest-log"},(0,l.kt)("inlineCode",{parentName:"a"},"ManifestLog"))," shared by all trees and levels, and"),(0,l.kt)("li",{parentName:"ul"},"one ",(0,l.kt)("a",{parentName:"li",href:"#manifest-level"},(0,l.kt)("inlineCode",{parentName:"a"},"ManifestLevel"))," for each on-disk level.")),(0,l.kt)("h4",{id:"manifest-log"},"Manifest Log"),(0,l.kt)("p",null,"The manifest log is an on-disk log of all updates to the trees' table indexes."),(0,l.kt)("p",null,"The manifest log tracks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"tables created as compaction output"),(0,l.kt)("li",{parentName:"ul"},"tables updated as compaction input (modifying their ",(0,l.kt)("inlineCode",{parentName:"li"},"snapshot_max"),")"),(0,l.kt)("li",{parentName:"ul"},"tables moved between levels by compaction"),(0,l.kt)("li",{parentName:"ul"},"tables deleted after compaction")),(0,l.kt)("p",null,"Updates are accumulated in-memory before being flushed:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"incrementally during compaction, or"),(0,l.kt)("li",{parentName:"ul"},"in their entirety during checkpoint.")),(0,l.kt)("p",null,"The manifest log is periodically compacted to remove older entries that have been superseded by\nnewer entries. For example, if a table is created and later deleted, manifest log compaction\nwill eventually remove any reference to the table from the log blocks."),(0,l.kt)("p",null,'Each manifest block has a reference to the (chronologically) previous manifest block.\nThe superblock stores the head and tail address/checksum of this linked list.\nThe reference on the header of the head manifest block "dangles" \u2013 the block it references has already been compacted.'),(0,l.kt)("h4",{id:"manifest-level"},"Manifest Level"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"ManifestLevel")," is an in-memory collection of the table metadata for a single level of a tree."),(0,l.kt)("p",null,"For a given level and snapshot, there may be gaps in the key ranges of the visible tables,\nbut the key ranges are disjoint."),(0,l.kt)("p",null,"Manifest levels are queried for tables at a target snapshot and within a key range."),(0,l.kt)("h5",{id:"example"},"Example"),(0,l.kt)("p",null,"Given the ",(0,l.kt)("inlineCode",{parentName:"p"},"ManifestLevel")," tables (with values chosen for visualization, not realism):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"       label   A   B   C   D   E   F   G   H   I   J   K   L   M\n     key_min   0   4  12  16   4   8  12  26   4  25   4  16  24\n     key_max   3  11  15  19   7  11  15  27   7  27  11  19  27\nsnapshot_min   1   1   1   1   3   3   3   3   5   5   7   7   7\nsnapshot_max   9   3   3   7   5   7   9   5   7   7   9   9   9\n")),(0,l.kt)("p",null,"A level's tables can be visualized in 2D as a partitioned rectangle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"  0         1         2\n  0   4   8   2   6   0   4   8\n9\u250c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2510\n \u2502   \u2502   K   \u2502   \u2502 L \u2502###\u2502 M \u2502\n7\u2502   \u251c\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2524   \u251c\u2500\u2500\u2500\u2524###\u2514\u252c\u2500\u2500\u2524\n \u2502   \u2502 I \u2502   \u2502 G \u2502   \u2502####\u2502 J\u2502\n5\u2502 A \u251c\u2500\u2500\u2500\u2524 F \u2502   \u2502   \u2502####\u2514\u252c\u2500\u2524\n \u2502   \u2502 E \u2502   \u2502   \u2502 D \u2502#####\u2502H\u2502\n3\u2502   \u251c\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2524   \u2502#####\u2514\u2500\u2524\n \u2502   \u2502   B   \u2502 C \u2502   \u2502#######\u2502\n1\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Example iterations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"visibility  snapshots   direction  key_min  key_max  tables\n   visible          2   ascending        0       28  A, B, C, D\n   visible          4   ascending        0       28  A, E, F, G, D, H\n   visible          6  descending       12       28  J, D, G\n   visible          8   ascending        0       28  A, K, G, L, M\n invisible    2, 4, 6   ascending        0       28  K, L, M\n")),(0,l.kt)("p",null,"Legend:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"#")," represents a gap \u2014 no tables cover these keys during the snapshot."),(0,l.kt)("li",{parentName:"ul"},"The horizontal axis represents the key range."),(0,l.kt)("li",{parentName:"ul"},"The vertical axis represents the snapshot range."),(0,l.kt)("li",{parentName:"ul"},"Each rectangle is a table within the manifest level."),(0,l.kt)("li",{parentName:"ul"},"The sides of each rectangle depict:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"left:   ",(0,l.kt)("inlineCode",{parentName:"li"},"table.key_min")," (the diagram is inclusive, and the ",(0,l.kt)("inlineCode",{parentName:"li"},"table.key_min")," is inclusive)"),(0,l.kt)("li",{parentName:"ul"},"right:  ",(0,l.kt)("inlineCode",{parentName:"li"},"table.key_max")," (the diagram is EXCLUSIVE, but the ",(0,l.kt)("inlineCode",{parentName:"li"},"table.key_max")," is INCLUSIVE)"),(0,l.kt)("li",{parentName:"ul"},"bottom: ",(0,l.kt)("inlineCode",{parentName:"li"},"table.snapshot_min")," (inclusive)"),(0,l.kt)("li",{parentName:"ul"},"top:    ",(0,l.kt)("inlineCode",{parentName:"li"},"table.snapshot_max")," (inclusive)"))),(0,l.kt)("li",{parentName:"ul"},"(Not depicted: tables may have ",(0,l.kt)("inlineCode",{parentName:"li"},"table.key_min == table.key_max"),".)"),(0,l.kt)("li",{parentName:"ul"},"(Not depicted: the newest set of tables would have ",(0,l.kt)("inlineCode",{parentName:"li"},"table.snapshot_max == maxInt(u64)"),".)")))}u.isMDXComponent=!0}}]);