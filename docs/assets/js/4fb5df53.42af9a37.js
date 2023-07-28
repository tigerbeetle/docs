"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[994],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,h=u["".concat(o,".").concat(f)]||u[f]||p[f]||s;return t?r.createElement(h,i(i({ref:n},d),{},{components:t})):r.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=f;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const s={title:".NET"},i=void 0,l={unversionedId:"clients/dotnet",id:"clients/dotnet",title:".NET",description:"This file is generated by",source:"@site/pages/clients/dotnet.md",sourceDirName:"clients",slug:"/clients/dotnet",permalink:"/clients/dotnet",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/clients/dotnet.md",tags:[],version:"current",frontMatter:{title:".NET"},sidebar:"tutorialSidebar",previous:{title:"Fractional Amounts",permalink:"/recipes/fractional-amounts"},next:{title:"Go",permalink:"/clients/go"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Setup",id:"setup",level:2},{value:"Sample projects",id:"sample-projects",level:2},{value:"Creating a Client",id:"creating-a-client",level:2},{value:"Creating Accounts",id:"creating-accounts",level:2},{value:"Account Flags",id:"account-flags",level:3},{value:"Response and Errors",id:"response-and-errors",level:3},{value:"Account Lookup",id:"account-lookup",level:2},{value:"Create Transfers",id:"create-transfers",level:2},{value:"Response and Errors",id:"response-and-errors-1",level:3},{value:"Batching",id:"batching",level:2},{value:"Queues and Workers",id:"queues-and-workers",level:3},{value:"Transfer Flags",id:"transfer-flags",level:2},{value:"Two-Phase Transfers",id:"two-phase-transfers",level:3},{value:"Post a Pending Transfer",id:"post-a-pending-transfer",level:4},{value:"Void a Pending Transfer",id:"void-a-pending-transfer",level:4},{value:"Transfer Lookup",id:"transfer-lookup",level:2},{value:"Linked Events",id:"linked-events",level:2},{value:"Development Setup",id:"development-setup",level:2},{value:"On Linux and macOS",id:"on-linux-and-macos",level:3},{value:"On Windows",id:"on-windows",level:3}],d={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This file is generated by\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetledb/tigerbeetle/blob/0.13.81/src/clients/docs_generate.zig"},"https://github.com/tigerbeetledb/tigerbeetle/blob/0.13.81/src/clients/docs_generate.zig"),"."),(0,a.kt)("h1",{id:"tigerbeetle-dotnet"},"tigerbeetle-dotnet"),(0,a.kt)("p",null,"The TigerBeetle client for .NET."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Linux >= 5.6 is the only production environment we\nsupport. But for ease of development we also support macOS and Windows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".NET >= 2.1\nAnd if you do not already have NuGet.org as a package\nsource, make sure to add it:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ dotnet nuget add source https://api.nuget.org/v3/index.json -n nuget.org\n")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"First, create a directory for your project and ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into the directory."),(0,a.kt)("p",null,"Then, install the TigerBeetle client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ dotnet new console\n$ dotnet add package tigerbeetle\n")),(0,a.kt)("p",null,"Now, create ",(0,a.kt)("inlineCode",{parentName:"p"},"Program.cs")," and copy this into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\n\nusing TigerBeetle;\n\n// Validate import works.\nvar id = new TigerBeetle.UInt128(1);\nConsole.WriteLine("SUCCESS");\n')),(0,a.kt)("p",null,"Finally, build and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ dotnet run\n")),(0,a.kt)("p",null,"Now that all prerequisites and dependencies are correctly set\nup, let's dig into using TigerBeetle."),(0,a.kt)("h2",{id:"sample-projects"},"Sample projects"),(0,a.kt)("p",null,"This document is primarily a reference guide to\nthe client. Below are various sample projects demonstrating\nfeatures of TigerBeetle."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetledb/tigerbeetle/blob/0.13.81/src/clients/dotnet/samples/basic/"},"Basic"),": Create two accounts and transfer an amount between them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetledb/tigerbeetle/blob/0.13.81/src/clients/dotnet/samples/two-phase/"},"Two-Phase Transfer"),": Create two accounts and start a pending transfer between\nthem, then post the transfer.")),(0,a.kt)("h2",{id:"creating-a-client"},"Creating a Client"),(0,a.kt)("p",null,"A client is created with a cluster ID and replica\naddresses for all replicas in the cluster. The cluster\nID and replica addresses are both chosen by the system that\nstarts the TigerBeetle cluster."),(0,a.kt)("p",null,"Clients are thread-safe. But for better\nperformance, a single instance should be shared between\nmultiple concurrent tasks."),(0,a.kt)("p",null,"Multiple clients are useful when connecting to more than\none TigerBeetle cluster."),(0,a.kt)("p",null,"In this example the cluster ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and there is one\nreplica. The address is read from the ",(0,a.kt)("inlineCode",{parentName:"p"},"TB_ADDRESS"),"\nenvironment variable and defaults to port ",(0,a.kt)("inlineCode",{parentName:"p"},"3000"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var tbAddress = Environment.GetEnvironmentVariable("TB_ADDRESS");\nvar client = new Client(\n  clusterID: 0,\n  addresses: new[] {tbAddress != null ? tbAddress : "3000"}\n);\n')),(0,a.kt)("p",null,"If you create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," like this, don't forget to call\n",(0,a.kt)("inlineCode",{parentName:"p"},"client.Dispose()")," when you are done with it. Otherwise you\ncan use the ",(0,a.kt)("inlineCode",{parentName:"p"},"using")," syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"using (var client = new Client(...)) {\n  // Use client\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Client")," class is thread-safe and for better performance, a\nsingle instance should be shared between multiple concurrent\ntasks. Multiple clients can be instantiated in case of connecting\nto more than one TigerBeetle cluster."),(0,a.kt)("p",null,"The following are valid addresses:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3000")," (interpreted as ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3000"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3000")," (interpreted as ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3000"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," (interpreted as ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3001"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"3001")," is the default port)")),(0,a.kt)("h2",{id:"creating-accounts"},"Creating Accounts"),(0,a.kt)("p",null,"See details for account fields in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/accounts"},"Accounts\nreference"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var accounts = new[] {\n  new Account\n  {\n    Id = 137,\n    UserData = Guid.NewGuid(),\n    Ledger = 1,\n    Code = 718,\n    Flags = AccountFlags.None,\n  },     \n};\n\nvar createAccountsError = client.CreateAccounts(accounts);\n")),(0,a.kt)("p",null,"All TigerBeetle's IDs are 128-bit integers, and the .NET client\naccepts a wide range of values: ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uint"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"long"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ulong"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"Guid"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"byte[]")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TigerBeetle.UInt128"),"."),(0,a.kt)("h3",{id:"account-flags"},"Account Flags"),(0,a.kt)("p",null,"The account flags value is a bitfield. See details for\nthese flags in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/accounts#flags"},"Accounts\nreference"),"."),(0,a.kt)("p",null,"To toggle behavior for an account, combine enum values stored in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"AccountFlags")," object with bitwise-or:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AccountFlags.None")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AccountFlags.Linked")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AccountFlags.DebitsMustNotExceedCredits")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AccountFlags.CreditsMustNotExceedDebits"))),(0,a.kt)("p",null,"For example, to link two accounts where the first account\nadditionally has the ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_must_not_exceed_credits")," constraint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var account0 = new Account{ /* ... account values ... */ };\nvar account1 = new Account{ /* ... account values ... */ };\naccount0.Flags = AccountFlags.Linked;\n\ncreateAccountsError = client.CreateAccounts(new []{account0, account1});\n")),(0,a.kt)("h3",{id:"response-and-errors"},"Response and Errors"),(0,a.kt)("p",null,"The response is an empty array if all accounts were\ncreated successfully. If the response is non-empty, each\nobject in the response array contains error information\nfor an account that failed. The error object contains an\nerror code and the index of the account in the request\nbatch."),(0,a.kt)("p",null,"See all error conditions in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/operations/create_accounts"},"create_accounts\nreference"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'var account2 = new Account{ /* ... account values ... */ };\nvar account3 = new Account{ /* ... account values ... */ };\nvar account4 = new Account{ /* ... account values ... */ };\n\ncreateAccountsError = client.CreateAccounts(new []{account2, account3, account4});\nforeach (var error in createAccountsError) {\n    Console.WriteLine("Error creating account {0}: {1}", error.Index, error.Result);\n    return;\n}\n')),(0,a.kt)("h2",{id:"account-lookup"},"Account Lookup"),(0,a.kt)("p",null,"Account lookup is batched, like account creation. Pass\nin all IDs to fetch. The account for each matched ID is returned."),(0,a.kt)("p",null,"If no account matches an ID, no object is returned for\nthat account. So the order of accounts in the response is\nnot necessarily the same as the order of IDs in the\nrequest. You can refer to the ID field in the response to\ndistinguish accounts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"accounts = client.LookupAccounts(new TigerBeetle.UInt128[] { 137, 138 });\n")),(0,a.kt)("h2",{id:"create-transfers"},"Create Transfers"),(0,a.kt)("p",null,"This creates a journal entry between two accounts."),(0,a.kt)("p",null,"See details for transfer fields in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/transfers"},"Transfers\nreference"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var transfers = new[] {\n  new Transfer\n  {\n    Id = 1,\n    DebitAccountId = 1,\n    CreditAccountId = 2,\n    Timeout = 0,\n    UserData = 2,\n    Ledger = 1,\n    Code = 1,\n    Flags = 0,\n    Amount = 10,\n  }\n};\n\nvar createTransfersError = client.CreateTransfers(transfers);\n")),(0,a.kt)("h3",{id:"response-and-errors-1"},"Response and Errors"),(0,a.kt)("p",null,"The response is an empty array if all transfers were created\nsuccessfully. If the response is non-empty, each object in the\nresponse array contains error information for an transfer that\nfailed. The error object contains an error code and the index of the\ntransfer in the request batch."),(0,a.kt)("p",null,"See all error conditions in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/operations/create_transfers"},"create_transfers\nreference"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'foreach (var error in createTransfersError) {\n  Console.WriteLine("Error creating account {0}: {1}", error.Index, error.Result);\n  return;\n}\n')),(0,a.kt)("h2",{id:"batching"},"Batching"),(0,a.kt)("p",null,"TigerBeetle performance is maximized when you batch\nAPI requests. The client does not do this automatically for\nyou. So, for example, you ",(0,a.kt)("em",{parentName:"p"},"can")," insert 1 million transfers\none at a time like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"foreach(var t in transfers) {\n  createTransfersError = client.CreateTransfers(new []{t});\n  // error handling omitted\n}\n")),(0,a.kt)("p",null,"But the insert rate will be a ",(0,a.kt)("em",{parentName:"p"},"fraction")," of\npotential. Instead, ",(0,a.kt)("strong",{parentName:"p"},"always batch what you can"),"."),(0,a.kt)("p",null,"The maximum batch size is set in the TigerBeetle server. The default\nis 8191."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var BATCH_SIZE = 8191;\nfor (int i = 0; i < transfers.Length; i += BATCH_SIZE) {\n  var batchSize = BATCH_SIZE;\n  if (i + BATCH_SIZE > transfers.Length) {\n    batchSize = transfers.Length - i;\n  }\n  var segment = new ArraySegment<Transfer>(transfers, i, batchSize);\n  createTransfersError = client.CreateTransfers(segment.Array);\n  // error handling omitted\n}\n")),(0,a.kt)("h3",{id:"queues-and-workers"},"Queues and Workers"),(0,a.kt)("p",null,"If you are making requests to TigerBeetle from workers\npulling jobs from a queue, you can batch requests to\nTigerBeetle by having the worker act on multiple jobs from\nthe queue at once rather than one at a time. i.e. pulling\nmultiple jobs from the queue rather than just one."),(0,a.kt)("h2",{id:"transfer-flags"},"Transfer Flags"),(0,a.kt)("p",null,"The transfer ",(0,a.kt)("inlineCode",{parentName:"p"},"flags")," value is a bitfield. See details for these flags in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/transfers#flags"},"Transfers\nreference"),"."),(0,a.kt)("p",null,"To toggle behavior for an account, combine enum values stored in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"TransferFlags")," object with bitwise-or:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TransferFlags.None")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TransferFlags.Linked")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TransferFlags.Pending")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TransferFlags.PostPendingTransfer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TransferFlags.VoidPendingTransfer"))),(0,a.kt)("p",null,"For example, to link ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer1"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var transfer0 = new Transfer{ /* ... account values ... */ };\nvar transfer1 = new Transfer{ /* ... account values ... */ };\ntransfer0.Flags = TransferFlags.Linked;\ncreateTransfersError = client.CreateTransfers(new Transfer[] {transfer0, transfer1});\n")),(0,a.kt)("h3",{id:"two-phase-transfers"},"Two-Phase Transfers"),(0,a.kt)("p",null,"Two-phase transfers are supported natively by toggling the appropriate\nflag. TigerBeetle will then adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"credits_pending")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"debits_pending")," fields of the appropriate accounts. A corresponding\npost pending transfer then needs to be sent to post or void the\ntransfer."),(0,a.kt)("h4",{id:"post-a-pending-transfer"},"Post a Pending Transfer"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"flags")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"post_pending_transfer"),",\nTigerBeetle will post the transfer. TigerBeetle will atomically roll\nback the changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_pending")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"credits_pending")," of the\nappropriate accounts and apply them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_posted")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"credits_posted")," balances."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var transfer = new Transfer\n{\n  Id = 2,\n  PendingId = 1,\n  Flags = TransferFlags.PostPendingTransfer,\n};\ncreateTransfersError = client.CreateTransfers(new Transfer[] {transfer});\n// error handling omitted\n")),(0,a.kt)("h4",{id:"void-a-pending-transfer"},"Void a Pending Transfer"),(0,a.kt)("p",null,"In contrast, with ",(0,a.kt)("inlineCode",{parentName:"p"},"flags")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"void_pending_transfer"),",\nTigerBeetle will void the transfer. TigerBeetle will roll\nback the changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_pending")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"credits_pending")," of the\nappropriate accounts and ",(0,a.kt)("strong",{parentName:"p"},"not")," apply them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_posted")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"credits_posted")," balances."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"transfer = new Transfer\n{\n  Id = 2,\n  PendingId = 1,\n  Flags = TransferFlags.PostPendingTransfer,\n};\ncreateTransfersError = client.CreateTransfers(new Transfer[] {transfer});\n// error handling omitted\n")),(0,a.kt)("h2",{id:"transfer-lookup"},"Transfer Lookup"),(0,a.kt)("p",null,"NOTE: While transfer lookup exists, it is not a flexible query API. We\nare developing query APIs and there will be new methods for querying\ntransfers in the future."),(0,a.kt)("p",null,"Transfer lookup is batched, like transfer creation. Pass in all ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"s to\nfetch, and matched transfers are returned."),(0,a.kt)("p",null,"If no transfer matches an ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", no object is returned for that\ntransfer. So the order of transfers in the response is not necessarily\nthe same as the order of ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"s in the request. You can refer to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field in the response to distinguish transfers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"transfers = client.LookupTransfers(new TigerBeetle.UInt128[] {1, 2});\n")),(0,a.kt)("h2",{id:"linked-events"},"Linked Events"),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"linked")," flag is specified for an account when creating accounts or\na transfer when creating transfers, it links that event with the next event in the\nbatch, to create a chain of events, of arbitrary length, which all\nsucceed or fail together. The tail of a chain is denoted by the first\nevent without this flag. The last event in a batch may therefore never\nhave the ",(0,a.kt)("inlineCode",{parentName:"p"},"linked")," flag set as this would leave a chain\nopen-ended. Multiple chains or individual events may coexist within a\nbatch to succeed or fail independently."),(0,a.kt)("p",null,"Events within a chain are executed within order, or are rolled back on\nerror, so that the effect of each event in the chain is visible to the\nnext, and so that the chain is either visible or invisible as a unit\nto subsequent events after the chain. The event that was the first to\nbreak the chain will have a unique error result. Other events in the\nchain will have their error result set to ",(0,a.kt)("inlineCode",{parentName:"p"},"linked_event_failed"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var batch = new System.Collections.Generic.List<Transfer>();\n\n// An individual transfer (successful):\nbatch.Add(new Transfer{Id = 1, /* ... rest of transfer ... */ });\n\n// A chain of 4 transfers (the last transfer in the chain closes the chain with linked=false):\nbatch.Add(new Transfer{Id = 2, /* ... rest of transfer ... */ Flags = TransferFlags.Linked }); // Commit/rollback.\nbatch.Add(new Transfer{Id = 3, /* ... rest of transfer ... */ Flags = TransferFlags.Linked }); // Commit/rollback.\nbatch.Add(new Transfer{Id = 2, /* ... rest of transfer ... */ Flags = TransferFlags.Linked }); // Fail with exists\nbatch.Add(new Transfer{Id = 4, /* ... rest of transfer ... */ }); // Fail without committing\n\n// An individual transfer (successful):\n// This should not see any effect from the failed chain above.\nbatch.Add(new Transfer{Id = 2, /* ... rest of transfer ... */ });\n\n// A chain of 2 transfers (the first transfer fails the chain):\nbatch.Add(new Transfer{Id = 2, /* ... rest of transfer ... */ Flags = TransferFlags.Linked });\nbatch.Add(new Transfer{Id = 3, /* ... rest of transfer ... */ });\n\n// A chain of 2 transfers (successful):\nbatch.Add(new Transfer{Id = 3, /* ... rest of transfer ... */ Flags = TransferFlags.Linked });\nbatch.Add(new Transfer{Id = 4, /* ... rest of transfer ... */ });\n\ncreateTransfersError = client.CreateTransfers(batch.ToArray());\n// error handling omitted\n")),(0,a.kt)("h2",{id:"development-setup"},"Development Setup"),(0,a.kt)("h3",{id:"on-linux-and-macos"},"On Linux and macOS"),(0,a.kt)("p",null,"In a POSIX shell run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},'$ git clone https://github.com/tigerbeetle/tigerbeetle\n$ cd tigerbeetle\n$ git submodule update --init --recursive\n$ ./scripts/install_zig.sh\n$ cd src/clients/dotnet\n$ dotnet restore\n$ dotnet clean\n$ dotnet build\n$ if [ "$TEST" = "true" ]; then dotnet test; else echo "Skipping client unit tests"; fi\n')),(0,a.kt)("h3",{id:"on-windows"},"On Windows"),(0,a.kt)("p",null,"In PowerShell run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ git clone https://github.com/tigerbeetle/tigerbeetle\n$ cd tigerbeetle\n$ git submodule update --init --recursive\n$ .\\scripts\\install_zig.bat\n$ cd src/clients/dotnet\n$ dotnet restore\n$ dotnet clean\n$ dotnet build\n$ if ($env:TEST -eq 'true') { dotnet test } else { echo \"Skipping client unit test\" }\n")))}p.isMDXComponent=!0}}]);