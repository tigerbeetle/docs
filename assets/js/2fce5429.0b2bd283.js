"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||l;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_label:"Quick Start",sidebar_position:2},o="Quick Start",i={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"This page will guide you through downloading TigerBeetle, setting up a single- or multi-node",source:"@site/pages/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/quick-start",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Quick Start",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"TigerBeetle Docs",permalink:"/"},next:{title:"Developing Applications on TigerBeetle",permalink:"/coding/"}},s={},c=[{value:"1. Download TigerBeetle",id:"1-download-tigerbeetle",level:2},{value:"Latest Release",id:"latest-release",level:3},{value:"Build from Source",id:"build-from-source",level:4},{value:"Direct Download",id:"direct-download",level:4},{value:"Docker",id:"docker",level:4},{value:"2. Create the Data File",id:"2-create-the-data-file",level:2},{value:"3. Start Your Cluster",id:"3-start-your-cluster",level:2},{value:"4. Connect to the REPL",id:"4-connect-to-the-repl",level:2},{value:"5. Create Accounts",id:"5-create-accounts",level:2},{value:"6. Create a Transfer",id:"6-create-a-transfer",level:2},{value:"7. Look Up Accounts",id:"7-look-up-accounts",level:2},{value:"Optional: Run a Multi-Node Cluster",id:"optional-run-a-multi-node-cluster",level:2},{value:"Next: Designing for TigerBeetle",id:"next-designing-for-tigerbeetle",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"This page will guide you through downloading TigerBeetle, setting up a single- or multi-node\ncluster, and creating some accounts and transfers using the REPL."),(0,r.kt)("h2",{id:"1-download-tigerbeetle"},"1. Download TigerBeetle"),(0,r.kt)("p",null,"TigerBeetle is a single, small, statically-linked binary."),(0,r.kt)("h3",{id:"latest-release"},"Latest Release"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"# macOS\ncurl -Lo tigerbeetle.zip https://mac.tigerbeetle.com && unzip tigerbeetle.zip && ./tigerbeetle version\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"# Linux\ncurl -Lo tigerbeetle.zip https://linux.tigerbeetle.com && unzip tigerbeetle.zip && ./tigerbeetle version\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'# Windows\npowershell -command "curl.exe -Lo tigerbeetle.zip https://windows.tigerbeetle.com; Expand-Archive tigerbeetle.zip .; .\\tigerbeetle version"\n')),(0,r.kt)("h4",{id:"build-from-source"},"Build from Source"),(0,r.kt)("p",null,"To build TigerBeetle from source, clone the repo, install Zig and run ",(0,r.kt)("inlineCode",{parentName:"p"},"zig build"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/tigerbeetle/tigerbeetle && cd tigerbeetle\n./zig/download.sh # .bat if you're on Windows.\n./zig/zig build\n./tigerbeetle version\n")),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Building from source is not recommended for production deployments."),(0,r.kt)("li",{parentName:"ul"},"If you build TigerBeetle from source, it is only compatible with clients that were also built from source.")),(0,r.kt)("h4",{id:"direct-download"},"Direct Download"),(0,r.kt)("p",null,"You can download prebuilt binaries here:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"Linux"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Windows"),(0,r.kt)("th",{parentName:"tr",align:"left"},"MacOS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"x86_64"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/tigerbeetle/tigerbeetle/releases/latest/download/tigerbeetle-x86_64-linux.zip"},"tigerbeetle-x86_64-linux.zip")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/tigerbeetle/tigerbeetle/releases/latest/download/tigerbeetle-x86_64-windows.zip"},"tigerbeetle-x86_64-windows.zip")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/tigerbeetle/tigerbeetle/releases/latest/download/tigerbeetle-universal-macos.zip"},"tigerbeetle-universal-macos.zip"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"aarch64"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/tigerbeetle/tigerbeetle/releases/latest/download/tigerbeetle-aarch64-linux.zip"},"tigerbeetle-aarch64-linux.zip")),(0,r.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/tigerbeetle/tigerbeetle/releases/latest/download/tigerbeetle-universal-macos.zip"},"tigerbeetle-universal-macos.zip"))))),(0,r.kt)("h4",{id:"docker"},"Docker"),(0,r.kt)("p",null,"You can find instructions on using TigerBeetle with Docker ",(0,r.kt)("a",{parentName:"p",href:"/operating/docker"},"here"),"."),(0,r.kt)("h2",{id:"2-create-the-data-file"},"2. Create the Data File"),(0,r.kt)("p",null,"Each TigerBeetle node uses a single data file to store its state. Create the data file using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"format")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"./tigerbeetle format --cluster=0 --replica=0 --replica-count=1 --development 0_0.tigerbeetle\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'info(io): creating "0_0.tigerbeetle"...\ninfo(io): allocating 660.140625MiB...\n')),(0,r.kt)("h2",{id:"3-start-your-cluster"},"3. Start Your Cluster"),(0,r.kt)("p",null,"Now we'll run the TigerBeetle server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"./tigerbeetle start --addresses=3000 --development 0_0.tigerbeetle\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'info(io): opening "0_0.tigerbeetle"...\ninfo(main): 0: cluster=0: listening on 127.0.0.1:3000\n')),(0,r.kt)("h2",{id:"4-connect-to-the-repl"},"4. Connect to the REPL"),(0,r.kt)("p",null,"Now that we have TigerBeetle running, we can connect to it via the REPL to create some accounts and\ntransfers!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"./tigerbeetle repl --cluster=0 --addresses=3000\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"TigerBeetle Client\n  Hit enter after a semicolon to run a command.\n\nExamples:\n  create_accounts id=1 code=10 ledger=700 flags=linked | history,\n                  id=2 code=10 ledger=700;\n  create_transfers id=1 debit_account_id=1 credit_account_id=2 amount=10 ledger=700 code=10;\n  lookup_accounts id=1;\n  lookup_accounts id=1, id=2;\n")),(0,r.kt)("h2",{id:"5-create-accounts"},"5. Create Accounts"),(0,r.kt)("p",null,"In the REPL, create two accounts on the same ledger using the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"create_accounts id=1 code=10 ledger=700,\n                id=2 code=10 ledger=700;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"info(message_bus): connected to replica 0\n")),(0,r.kt)("h2",{id:"6-create-a-transfer"},"6. Create a Transfer"),(0,r.kt)("p",null,"Now create a transfer of ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," (of some amount/currency) between the two accounts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"create_transfers id=1 debit_account_id=1 credit_account_id=2 amount=10 ledger=700 code=10;\n")),(0,r.kt)("p",null,"Now, the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," has been credited to account ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," and debited from account ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,r.kt)("h2",{id:"7-look-up-accounts"},"7. Look Up Accounts"),(0,r.kt)("p",null,"Let's query TigerBeetle for these two accounts to verify the transfer we made!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"lookup_accounts id=1, id=2;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "1",\n  "user_data": "0",\n  "ledger": "700",\n  "code": "10",\n  "flags": [],\n  "debits_pending": "0",\n  "debits_posted": "10",\n  "credits_pending": "0",\n  "credits_posted": "0"\n}\n{\n  "id": "2",\n  "user_data": "0",\n  "ledger": "700",\n  "code": "10",\n  "flags": "",\n  "debits_pending": "0",\n  "debits_posted": "0",\n  "credits_pending": "0",\n  "credits_posted": "10"\n}\n')),(0,r.kt)("p",null,"And indeed you can see that account ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," has ",(0,r.kt)("inlineCode",{parentName:"p"},"debits_posted")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," and account ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," has\n",(0,r.kt)("inlineCode",{parentName:"p"},"credits_posted")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," amount is fully accounted for!"),(0,r.kt)("p",null,"You can take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/reference/account"},(0,r.kt)("inlineCode",{parentName:"a"},"Accounts")," reference")," to understand all of the\nfields on the accounts."),(0,r.kt)("p",null,"You can also take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/reference/requests/"},"Request Types")," to see what else you\ncan do with the REPL."),(0,r.kt)("h2",{id:"optional-run-a-multi-node-cluster"},"Optional: Run a Multi-Node Cluster"),(0,r.kt)("p",null,"Up to this point, we have only shown you how to run a single-node TigerBeetle cluster. In\nproduction, TigerBeetle is intended to be run with ",(0,r.kt)("a",{parentName:"p",href:"/operating/deploy"},"6 nodes"),"."),(0,r.kt)("p",null,"Here, we will show you how to run a 3-node cluster (the idea is the same for 6 nodes):"),(0,r.kt)("p",null,"First, create the data files for each node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"./tigerbeetle format --cluster=0 --replica=0 --replica-count=3 --development 0_0.tigerbeetle\n./tigerbeetle format --cluster=0 --replica=1 --replica-count=3 --development 0_1.tigerbeetle\n./tigerbeetle format --cluster=0 --replica=2 --replica-count=3 --development 0_2.tigerbeetle\n")),(0,r.kt)("p",null,"Note that the data file stores which replica in the cluster the file belongs to."),(0,r.kt)("p",null,"Start each server in a new terminal window:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"./tigerbeetle start --addresses=127.0.0.1:3000,127.0.0.1:3001,127.0.0.1:3002 --development 0_0.tigerbeetle\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"./tigerbeetle start --addresses=127.0.0.1:3000,127.0.0.1:3001,127.0.0.1:3002 --development 0_1.tigerbeetle\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"./tigerbeetle start --addresses=127.0.0.1:3000,127.0.0.1:3001,127.0.0.1:3002 --development 0_2.tigerbeetle\n")),(0,r.kt)("p",null,"TigerBeetle uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"--replica")," that's stored in the data file as an index into the ",(0,r.kt)("inlineCode",{parentName:"p"},"--addresses"),"\nprovided."),(0,r.kt)("p",null,"You can connect to the REPL as described above try creating accounts and transfers in this cluster."),(0,r.kt)("p",null,"You can also read more about ",(0,r.kt)("a",{parentName:"p",href:"/operating/deploy"},"deploying TigerBeetle in production"),"."),(0,r.kt)("h2",{id:"next-designing-for-tigerbeetle"},"Next: Designing for TigerBeetle"),(0,r.kt)("p",null,"Now that you've created some accounts and transfers, you may want to read about\n",(0,r.kt)("a",{parentName:"p",href:"/coding/system-architecture"},"how TigerBeetle fits into your system architecture")," and dig into\nthe ",(0,r.kt)("a",{parentName:"p",href:"/coding/data-modeling"},"data model"),"."))}p.isMDXComponent=!0}}]);