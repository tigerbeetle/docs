"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8635:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i="About TigerBeetle",s={unversionedId:"about/README",id:"about/README",title:"About TigerBeetle",description:"Mission",source:"@site/pages/about/README.md",sourceDirName:"about",slug:"/about/",permalink:"/about/",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/about/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Client Sessions",permalink:"/reference/sessions"},next:{title:"Built for OLTP",permalink:"/about/oltp"}},l={},p=[{value:"Mission",id:"mission",level:2},{value:"What Is A Tiger Beetle?",id:"what-is-a-tiger-beetle",level:2},{value:"History",id:"history",level:2},{value:"The Problem - Realtime Processing of Balance Updates",id:"the-problem---realtime-processing-of-balance-updates",level:3},{value:"The Solution - A Purpose-Built Financial Accounting Database",id:"the-solution---a-purpose-built-financial-accounting-database",level:3},{value:"ProtoBeetle - 400,000 Transfers per Second",id:"protobeetle---400000-transfers-per-second",level:3},{value:"AlphaBeetle - 800,000 Transfers per Second",id:"alphabeetle---800000-transfers-per-second",level:3},{value:"BetaBeetle - High Availability",id:"betabeetle---high-availability",level:3},{value:"TigerBeetle - Into Production",id:"tigerbeetle---into-production",level:3},{value:"References",id:"references",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-tigerbeetle"},"About TigerBeetle"),(0,r.kt)("h2",{id:"mission"},"Mission"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We want to make it easy for others to build the next generation of financial services and\napplications without having to cobble together an accounting or ledger system of record from\nscratch.")),(0,r.kt)("p",null,"TigerBeetle implements the latest research and technology to deliver unprecedented ",(0,r.kt)("a",{parentName:"p",href:"/about/safety"},"safety,\ndurability")," and ",(0,r.kt)("a",{parentName:"p",href:"/about/performance"},"performance")," while reducing operational costs by\norders of magnitude and providing a fantastic developer experience."),(0,r.kt)("h2",{id:"what-is-a-tiger-beetle"},"What Is A Tiger Beetle?"),(0,r.kt)("p",null,"Two things got us interested in tiger beetles as a species:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tiger beetles are ridiculously fast... a tiger beetle can run at a speed of 9 km/h, about 125\nbody lengths per second. That\u2019s 20 times faster than an Olympic sprinter when you scale speed to\nbody length, ",(0,r.kt)("strong",{parentName:"p"},"a fantastic speed-to-size ratio"),". To put this in perspective, a human would need\nto run at 480 miles per hour to keep up.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Tiger beetles thrive in different environments, from trees and woodland paths, to sea and lake\nshores, with the largest of tiger beetles living primarily in the dry regions of Southern\nAfrica... and that's what we want for TigerBeetle, ",(0,r.kt)("strong",{parentName:"p"},"something that's fast and safe to deploy\neverywhere"),"."))),(0,r.kt)("h2",{id:"history"},"History"),(0,r.kt)("h3",{id:"the-problem---realtime-processing-of-balance-updates"},"The Problem - Realtime Processing of Balance Updates"),(0,r.kt)("p",null,"Processing events that impact the balance of an account must be done serially, in the correct order\nand reliably. For this reason, despite the trend to scale modern applications by distributing work\nacross parallel threads/processes/machines, it remains difficult to scale a ledger or accounting\nsystem without sacrificing performance or safety."),(0,r.kt)("p",null,"For example, processing a balance update event involves:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"validating the event,"),(0,r.kt)("li",{parentName:"ol"},"processing any business rules that must consider the current balance before processing the event\nand the new balance after the event,"),(0,r.kt)("li",{parentName:"ol"},"updating the balance"),(0,r.kt)("li",{parentName:"ol"},"persisting the updated balance, and"),(0,r.kt)("li",{parentName:"ol"},"notifying subscribers of the updated balance and that the event has been processed.")),(0,r.kt)("p",null,"While investigating a few existing systems it became clear that the majority of architectures cobble\ntogether generic databases (relational or NoSQL, on-disk or in-memory) with business logic enforced\nin the application code. This separation between data and code, persistence and logic, invites the\nworst of distributed system problems: network delays, multiple roundtrips for a single balance\nupdate, clock skew, or cache incoherency etc."),(0,r.kt)("p",null,"Furthermore, these systems may achieve performance but at the expense of reliability, especially in\nthe face of hardware failure, corruption and misdirected writes, a compromise that is unacceptable\nfor a system-of-record for financial accounts."),(0,r.kt)("h3",{id:"the-solution---a-purpose-built-financial-accounting-database"},"The Solution - A Purpose-Built Financial Accounting Database"),(0,r.kt)("p",null,"Our survey led us to conclude that, while there are mechanisms available to shard account balances\nto parallelize updates and improve performance, there are still significant performance gains to be\nhad in designing a database that is purpose built for storing balances and processing updates in a\nreliable manner."),(0,r.kt)("h3",{id:"protobeetle---400000-transfers-per-second"},"ProtoBeetle - 400,000 Transfers per Second"),(0,r.kt)("p",null,"In the month of July 2020, we developed a prototype of TigerBeetle in Node as a performance sketch\nto measure the basic components of the design (batching, TCP protocol, cryptographic checksums\neverywhere, fsync journalling, in-memory business logic and hash table operations). ",(0,r.kt)("strong",{parentName:"p"},"ProtoBeetle\nran at 200,000 two-phase transfers per second on our office laptops"),", supporting our\nback-of-the-envelope numbers."),(0,r.kt)("p",null,"We then integrated ProtoBeetle into ",(0,r.kt)("a",{parentName:"p",href:"https://mojaloop.io/"},"Mojaloop")," and our reference minimum\ndeployment cluster of ",(0,r.kt)("strong",{parentName:"p"},"Mojaloop went from 76 TPS on MySQL to 1757 TPS on ProtoBeetle"),". A single\nstateless Mojaloop pod was unable to saturate ProtoBeetle. Most of the throughput was spent\nconverting Mojaloop's individual HTTP requests into TCP batches."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://youtu.be/QOC6PHFPtAM?t=324"},"Watch a 10-minute talk introducing ProtoBeetle."))),(0,r.kt)("h3",{id:"alphabeetle---800000-transfers-per-second"},"AlphaBeetle - 800,000 Transfers per Second"),(0,r.kt)("p",null,"After ProtoBeetle, from September through October 2020, we knuckled down and rewrote TigerBeetle in\nC/Zig to create the alpha version of TigerBeetle, using ",(0,r.kt)("a",{parentName:"p",href:"https://kernel.dk/io_uring.pdf"},"io_uring"),"\nas a foundation for fast I/O."),(0,r.kt)("p",null,"TigerBeetle's Zig implementation of io_uring was\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ziglang/zig/pull/6356"},"submitted")," for addition to the Zig standard library."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=J1OaBRTV2vs"},"Watch a presentation of TigerBeetle given to the Interledger community on 25 November 2020."))),(0,r.kt)("h3",{id:"betabeetle---high-availability"},"BetaBeetle - High Availability"),(0,r.kt)("p",null,"BetaBeetle, the beta distributed version of TigerBeetle, was developed from January 2021 through\nAugust 2021, for strict serializability, fault tolerance and automated leader election with the\npioneering ",(0,r.kt)("a",{parentName:"p",href:"http://pmg.csail.mit.edu/papers/vr-revisited.pdf"},"Viewstamped Replication")," and consensus\nprotocol, plus the CTRL protocol from ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fDY6Wi0GcPs"},"Protocol-Aware Recovery for Consensus-Based\nStorage"),"."),(0,r.kt)("h3",{id:"tigerbeetle---into-production"},"TigerBeetle - Into Production"),(0,r.kt)("p",null,"You can read more about TigerBeetle's ",(0,r.kt)("a",{parentName:"p",href:"/about/production-readiness"},"production readiness"),"."),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"The collection of papers behind TigerBeetle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.infoq.com/presentations/LMAX/"},"LMAX - How to Do 100K TPS at Less than 1ms Latency -\n2010")," - Martin Thompson on mechanical sympathy and why\na relational database is not the right solution.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://skillsmatter.com/skillscasts/5247-the-lmax-exchange-architecture-high-throughput-low-latency-and-plain-old-java"},"The LMAX Exchange Architecture - High Throughput, Low Latency and Plain Old Java -\n2014")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sam Adams on the high-level design of LMAX."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://lmax-exchange.github.io/disruptor/files/Disruptor-1.0.pdf"},"LMAX Disruptor")," - A high\nperformance alternative to bounded queues for exchanging data between concurrent threads.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=qDhTjE0XmkE"},"Evolution of Financial Exchange Architectures -\n2020")," - Martin Thompson looks at the evolution of\nfinancial exchanges and explores the state of the art today.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/research/wp-content/uploads/2017/06/paper-1.pdf"},"Gray Failure"),' -\n"The major availability breakdowns and performance anomalies we see in cloud environments tend to\nbe caused by subtle underlying faults, i.e. gray failure rather than fail-stop failure."')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.usenix.org/system/files/conference/fast16/fast16-papers-hao.pdf"},"The Tail at Store: A Revelation from Millions of Hours of Disk and SSD\nDeployments"),' - "We\nfind that storage performance instability is not uncommon: 0.2% of the time, a disk is more than\n2x slower than its peer drives in the same RAID group (and 0.6% for SSD). As a consequence, disk\nand SSD-based RAIDs experience at least one slow drive (i.e., storage tail) 1.5% and 2.2% of the\ntime."')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www2.cs.duke.edu/courses/cps296.4/fall13/838-CloudPapers/dean_longtail.pdf"},"The Tail at\nScale"),' - "A\nsimple way to curb latency variability is to issue the same request to multiple replicas and use\nthe results from whichever replica responds first."')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://pmg.csail.mit.edu/papers/vr-revisited.pdf"},"Viewstamped Replication Revisited"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://pmg.csail.mit.edu/papers/vr.pdf"},"Viewstamped Replication: A New Primary Copy Method to Support Highly-Available Distributed\nSystems"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=NRoUC9P1PmA"},"ZFS: The Last Word in File Systems (Jeff Bonwick and Bill\nMoore)")," - On disk failure and corruption, the need\nfor checksums... and checksums to check the checksums, and the power of copy-on-write for\ncrash-safety.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://research.cs.wisc.edu/wind/Publications/latent-sigmetrics07.pdf"},"An Analysis of Latent Sector Errors in Disk\nDrives"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.usenix.org/legacy/events/fast08/tech/full_papers/bairavasundaram/bairavasundaram.pdf"},"An Analysis of Data Corruption in the Storage\nStack"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.usenix.org/system/files/fast20-maneas.pdf"},"A Study of SSD Reliability in Large Scale Enterprise Storage\nDeployments"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=fDY6Wi0GcPs"},"SDC 2018 - Protocol-Aware Recovery for Consensus-Based\nStorage")," - Why replicated state machines need to\ndistinguish between a crash and corruption, and why it would be disastrous to truncate the journal\nwhen encountering a checksum mismatch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.usenix.org/system/files/atc20-rebello.pdf"},"Can Applications Recover from fsync\nFailures?")," - Why we use Direct I/O in\nTigerBeetle and why the kernel page cache is a dangerous way to recover the journal, even when\nrestarting from an fsync() failure panic.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.mojaloop.io/legacy/discussions/Mojaloop%20Performance%202020.pdf"},"Coil's Mojaloop Performance Work\n2020"),' - By Don\nChangfoot and Joran Dirk Greef, a performance analysis of Mojaloop\'s central ledger that sparked\nthe idea for "an accounting database" as Adrian Hope-Bailie put it. And the rest, as they say, is\nhistory!'))))}h.isMDXComponent=!0}}]);