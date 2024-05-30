"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6221],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=r,h=p["".concat(o,".").concat(f)]||p[f]||u[f]||i;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=f;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1800:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={title:"Node.js"},s=void 0,l={unversionedId:"clients/node",id:"clients/node",title:"Node.js",description:"The TigerBeetle client for Node.js.",source:"@site/pages/clients/node.md",sourceDirName:"clients",slug:"/clients/node",permalink:"/clients/node",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/clients/node.md",tags:[],version:"current",frontMatter:{title:"Node.js"},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/clients/java"},next:{title:"Account",permalink:"/reference/account"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Sample projects",id:"sample-projects",level:2},{value:"Sidenote: <code>BigInt</code>",id:"sidenote-bigint",level:3},{value:"Creating a Client",id:"creating-a-client",level:2},{value:"Creating Accounts",id:"creating-accounts",level:2},{value:"Account Flags",id:"account-flags",level:3},{value:"Response and Errors",id:"response-and-errors",level:3},{value:"Account Lookup",id:"account-lookup",level:2},{value:"Create Transfers",id:"create-transfers",level:2},{value:"Response and Errors",id:"response-and-errors-1",level:3},{value:"Batching",id:"batching",level:2},{value:"Queues and Workers",id:"queues-and-workers",level:3},{value:"Transfer Flags",id:"transfer-flags",level:2},{value:"Two-Phase Transfers",id:"two-phase-transfers",level:3},{value:"Post a Pending Transfer",id:"post-a-pending-transfer",level:4},{value:"Void a Pending Transfer",id:"void-a-pending-transfer",level:4},{value:"Transfer Lookup",id:"transfer-lookup",level:2},{value:"Get Account Transfers",id:"get-account-transfers",level:2},{value:"Get Account Balances",id:"get-account-balances",level:2},{value:"Linked Events",id:"linked-events",level:2}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tigerbeetle-node"},"tigerbeetle-node"),(0,r.kt)("p",null,"The TigerBeetle client for Node.js."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Linux >= 5.6 is the only production environment we\nsupport. But for ease of development we also support macOS and Windows."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NodeJS >= ",(0,r.kt)("inlineCode",{parentName:"li"},"18"))),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"First, create a directory for your project and ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the directory."),(0,r.kt)("p",null,"Then, install the TigerBeetle client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"npm install tigerbeetle-node\n")),(0,r.kt)("p",null,"Now, create ",(0,r.kt)("inlineCode",{parentName:"p"},"main.js")," and copy this into it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const { createClient } = require("tigerbeetle-node");\n\nconsole.log("Import ok!");\n')),(0,r.kt)("p",null,"Finally, build and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"node main.js\n")),(0,r.kt)("p",null,"Now that all prerequisites and dependencies are correctly set\nup, let's dig into using TigerBeetle."),(0,r.kt)("h2",{id:"sample-projects"},"Sample projects"),(0,r.kt)("p",null,"This document is primarily a reference guide to\nthe client. Below are various sample projects demonstrating\nfeatures of TigerBeetle."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/clients/node/samples/basic/"},"Basic"),": Create two accounts and transfer an amount between them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/clients/node/samples/two-phase/"},"Two-Phase Transfer"),": Create two accounts and start a pending transfer between\nthem, then post the transfer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/clients/node/samples/two-phase-many/"},"Many Two-Phase Transfers"),": Create two accounts and start a number of pending transfer\nbetween them, posting and voiding alternating transfers.")),(0,r.kt)("h3",{id:"sidenote-bigint"},"Sidenote: ",(0,r.kt)("inlineCode",{parentName:"h3"},"BigInt")),(0,r.kt)("p",null,"TigerBeetle uses 64-bit integers for many fields while JavaScript's\nbuiltin ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," maximum value is ",(0,r.kt)("inlineCode",{parentName:"p"},"2^53-1"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," suffix in JavaScript\nmeans the value is a ",(0,r.kt)("inlineCode",{parentName:"p"},"BigInt"),". This is useful for literal numbers. If\nyou already have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," variable though, you can call the ",(0,r.kt)("inlineCode",{parentName:"p"},"BigInt"),"\nconstructor to get a ",(0,r.kt)("inlineCode",{parentName:"p"},"BigInt")," from it. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"1n")," is the same as\n",(0,r.kt)("inlineCode",{parentName:"p"},"BigInt(1)"),"."),(0,r.kt)("h2",{id:"creating-a-client"},"Creating a Client"),(0,r.kt)("p",null,"A client is created with a cluster ID and replica\naddresses for all replicas in the cluster. The cluster\nID and replica addresses are both chosen by the system that\nstarts the TigerBeetle cluster."),(0,r.kt)("p",null,"Clients are thread-safe and a single instance should be shared\nbetween multiple concurrent tasks."),(0,r.kt)("p",null,"Multiple clients are useful when connecting to more than\none TigerBeetle cluster."),(0,r.kt)("p",null,"In this example the cluster ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and there is one\nreplica. The address is read from the ",(0,r.kt)("inlineCode",{parentName:"p"},"TB_ADDRESS"),"\nenvironment variable and defaults to port ",(0,r.kt)("inlineCode",{parentName:"p"},"3000"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const client = createClient({\n  cluster_id: 0n,\n  replica_addresses: [process.env.TB_ADDRESS || "3000"],\n});\n')),(0,r.kt)("p",null,"The following are valid addresses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"3000")," (interpreted as ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3000"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3000")," (interpreted as ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3000"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," (interpreted as ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3001"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"3001")," is the default port)")),(0,r.kt)("h2",{id:"creating-accounts"},"Creating Accounts"),(0,r.kt)("p",null,"See details for account fields in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/account"},"Accounts\nreference"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let account = {\n  id: 137n,\n  debits_pending: 0n,\n  debits_posted: 0n,\n  credits_pending: 0n,\n  credits_posted: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  reserved: 0,\n  ledger: 1,\n  code: 718,\n  flags: 0,\n  timestamp: 0n,\n};\n\nlet accountErrors = await client.createAccounts([account]);\n")),(0,r.kt)("h3",{id:"account-flags"},"Account Flags"),(0,r.kt)("p",null,"The account flags value is a bitfield. See details for\nthese flags in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/account#flags"},"Accounts\nreference"),"."),(0,r.kt)("p",null,"To toggle behavior for an account, combine enum values stored in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"AccountFlags")," object (in TypeScript it is an actual enum) with\nbitwise-or:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AccountFlags.linked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AccountFlags.debits_must_not_exceed_credits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AccountFlags.credits_must_not_exceed_credits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AccountFlags.history"))),(0,r.kt)("p",null,"For example, to link two accounts where the first account\nadditionally has the ",(0,r.kt)("inlineCode",{parentName:"p"},"debits_must_not_exceed_credits")," constraint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let account0 = {\n  id: 100n,\n  debits_pending: 0n,\n  debits_posted: 0n,\n  credits_pending: 0n,\n  credits_posted: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  reserved: 0,\n  ledger: 1,\n  code: 1,\n  timestamp: 0n,\n  flags: 0,\n};\nlet account1 = {\n  id: 101n,\n  debits_pending: 0n,\n  debits_posted: 0n,\n  credits_pending: 0n,\n  credits_posted: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  reserved: 0,\n  ledger: 1,\n  code: 1,\n  timestamp: 0n,\n  flags: 0,\n};\naccount0.flags = AccountFlags.linked |\n  AccountFlags.debits_must_not_exceed_credits;\naccountErrors = await client.createAccounts([account0, account1]);\n")),(0,r.kt)("h3",{id:"response-and-errors"},"Response and Errors"),(0,r.kt)("p",null,"The response is an empty array if all accounts were\ncreated successfully. If the response is non-empty, each\nobject in the response array contains error information\nfor an account that failed. The error object contains an\nerror code and the index of the account in the request\nbatch."),(0,r.kt)("p",null,"See all error conditions in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/requests/create_accounts"},"create_accounts\nreference"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let account2 = {\n  id: 102n,\n  debits_pending: 0n,\n  debits_posted: 0n,\n  credits_pending: 0n,\n  credits_posted: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  reserved: 0,\n  ledger: 1,\n  code: 1,\n  timestamp: 0n,\n  flags: 0,\n};\nlet account3 = {\n  id: 103n,\n  debits_pending: 0n,\n  debits_posted: 0n,\n  credits_pending: 0n,\n  credits_posted: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  reserved: 0,\n  ledger: 1,\n  code: 1,\n  timestamp: 0n,\n  flags: 0,\n};\nlet account4 = {\n  id: 104n,\n  debits_pending: 0n,\n  debits_posted: 0n,\n  credits_pending: 0n,\n  credits_posted: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  reserved: 0,\n  ledger: 1,\n  code: 1,\n  timestamp: 0n,\n  flags: 0,\n};\naccountErrors = await client.createAccounts([account2, account3, account4]);\nfor (const error of accountErrors) {\n  switch (error.result) {\n    case CreateAccountError.exists:\n      console.error(`Batch account at ${error.index} already exists.`);\n      break;\n    default:\n      console.error(\n        `Batch account at ${error.index} failed to create: ${\n          CreateAccountError[error.result]\n        }.`,\n      );\n  }\n}\n")),(0,r.kt)("p",null,"To handle errors you can either 1) exactly match error codes returned\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"client.createAccounts")," with enum values in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAccountError")," object, or you can 2) look up the error code in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAccountError")," object for a human-readable string."),(0,r.kt)("h2",{id:"account-lookup"},"Account Lookup"),(0,r.kt)("p",null,"Account lookup is batched, like account creation. Pass\nin all IDs to fetch. The account for each matched ID is returned."),(0,r.kt)("p",null,"If no account matches an ID, no object is returned for\nthat account. So the order of accounts in the response is\nnot necessarily the same as the order of IDs in the\nrequest. You can refer to the ID field in the response to\ndistinguish accounts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const accounts = await client.lookupAccounts([137n, 138n]);\nconsole.log(accounts);\n/*\n * [{\n *   id: 137n,\n *   debits_pending: 0n,\n *   debits_posted: 0n,\n *   credits_pending: 0n,\n *   credits_posted: 0n,\n *   user_data_128: 0n,\n *   user_data_64: 0n,\n *   user_data_32: 0,\n *   reserved: 0,\n *   ledger: 1,\n *   code: 718,\n *   flags: 0,\n *   timestamp: 1623062009212508993n,\n * }]\n */\n")),(0,r.kt)("h2",{id:"create-transfers"},"Create Transfers"),(0,r.kt)("p",null,"This creates a journal entry between two accounts."),(0,r.kt)("p",null,"See details for transfer fields in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/transfer"},"Transfers\nreference"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let transfers = [{\n  id: 1n,\n  debit_account_id: 102n,\n  credit_account_id: 103n,\n  amount: 10n,\n  pending_id: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  timeout: 0,\n  ledger: 1,\n  code: 720,\n  flags: 0,\n  timestamp: 0n,\n}];\nlet transferErrors = await client.createTransfers(transfers);\n")),(0,r.kt)("h3",{id:"response-and-errors-1"},"Response and Errors"),(0,r.kt)("p",null,"The response is an empty array if all transfers were created\nsuccessfully. If the response is non-empty, each object in the\nresponse array contains error information for a transfer that\nfailed. The error object contains an error code and the index of the\ntransfer in the request batch."),(0,r.kt)("p",null,"See all error conditions in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/requests/create_transfers"},"create_transfers\nreference"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"for (const error of transferErrors) {\n  switch (error.result) {\n    case CreateTransferError.exists:\n      console.error(`Batch transfer at ${error.index} already exists.`);\n      break;\n    default:\n      console.error(\n        `Batch transfer at ${error.index} failed to create: ${\n          CreateTransferError[error.result]\n        }.`,\n      );\n  }\n}\n")),(0,r.kt)("p",null,"To handle errors you can either 1) exactly match error codes returned\nfrom ",(0,r.kt)("inlineCode",{parentName:"p"},"client.createTransfers")," with enum values in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"CreateTransferError")," object, or you can 2) look up the error code in\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateTransferError")," object for a human-readable string."),(0,r.kt)("h2",{id:"batching"},"Batching"),(0,r.kt)("p",null,"TigerBeetle performance is maximized when you batch\nAPI requests. The client does not do this automatically for\nyou. So, for example, you ",(0,r.kt)("em",{parentName:"p"},"can")," insert 1 million transfers\none at a time like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"for (let i = 0; i < transfers.len; i++) {\n  const transferErrors = await client.createTransfers(transfers[i]);\n  // error handling omitted\n}\n")),(0,r.kt)("p",null,"But the insert rate will be a ",(0,r.kt)("em",{parentName:"p"},"fraction")," of\npotential. Instead, ",(0,r.kt)("strong",{parentName:"p"},"always batch what you can"),"."),(0,r.kt)("p",null,"The maximum batch size is set in the TigerBeetle server. The default\nis 8190."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const BATCH_SIZE = 8190;\nfor (let i = 0; i < transfers.length; i += BATCH_SIZE) {\n  const transferErrors = await client.createTransfers(\n    transfers.slice(i, Math.min(transfers.length, BATCH_SIZE)),\n  );\n  // error handling omitted\n}\n")),(0,r.kt)("h3",{id:"queues-and-workers"},"Queues and Workers"),(0,r.kt)("p",null,"If you are making requests to TigerBeetle from workers\npulling jobs from a queue, you can batch requests to\nTigerBeetle by having the worker act on multiple jobs from\nthe queue at once rather than one at a time. i.e. pulling\nmultiple jobs from the queue rather than just one."),(0,r.kt)("h2",{id:"transfer-flags"},"Transfer Flags"),(0,r.kt)("p",null,"The transfer ",(0,r.kt)("inlineCode",{parentName:"p"},"flags")," value is a bitfield. See details for these flags in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/transfer#flags"},"Transfers\nreference"),"."),(0,r.kt)("p",null,"To toggle behavior for a transfer, combine enum values stored in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"TransferFlags")," object (in TypeScript it is an actual enum) with\nbitwise-or:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TransferFlags.linked")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TransferFlags.pending")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TransferFlags.post_pending_transfer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TransferFlags.void_pending_transfer"))),(0,r.kt)("p",null,"For example, to link ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let transfer0 = {\n  id: 2n,\n  debit_account_id: 102n,\n  credit_account_id: 103n,\n  amount: 10n,\n  pending_id: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  timeout: 0,\n  ledger: 1,\n  code: 720,\n  flags: 0,\n  timestamp: 0n,\n};\nlet transfer1 = {\n  id: 3n,\n  debit_account_id: 102n,\n  credit_account_id: 103n,\n  amount: 10n,\n  pending_id: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  timeout: 0,\n  ledger: 1,\n  code: 720,\n  flags: 0,\n  timestamp: 0n,\n};\ntransfer0.flags = TransferFlags.linked;\n// Create the transfer\ntransferErrors = await client.createTransfers([transfer0, transfer1]);\n")),(0,r.kt)("h3",{id:"two-phase-transfers"},"Two-Phase Transfers"),(0,r.kt)("p",null,"Two-phase transfers are supported natively by toggling the appropriate\nflag. TigerBeetle will then adjust the ",(0,r.kt)("inlineCode",{parentName:"p"},"credits_pending")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"debits_pending")," fields of the appropriate accounts. A corresponding\npost pending transfer then needs to be sent to post or void the\ntransfer."),(0,r.kt)("h4",{id:"post-a-pending-transfer"},"Post a Pending Transfer"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"flags")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"post_pending_transfer"),",\nTigerBeetle will post the transfer. TigerBeetle will atomically roll\nback the changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"debits_pending")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"credits_pending")," of the\nappropriate accounts and apply them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"debits_posted")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"credits_posted")," balances."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let transfer2 = {\n  id: 4n,\n  debit_account_id: 102n,\n  credit_account_id: 103n,\n  amount: 10n,\n  pending_id: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  timeout: 0,\n  ledger: 1,\n  code: 720,\n  flags: TransferFlags.pending,\n  timestamp: 0n,\n};\ntransferErrors = await client.createTransfers([transfer2]);\n\nlet transfer3 = {\n  id: 5n,\n  debit_account_id: 102n,\n  credit_account_id: 103n,\n  amount: 10n,\n  pending_id: 4n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  timeout: 0,\n  ledger: 1,\n  code: 720,\n  flags: TransferFlags.post_pending_transfer,\n  timestamp: 0n,\n};\ntransferErrors = await client.createTransfers([transfer3]);\n")),(0,r.kt)("h4",{id:"void-a-pending-transfer"},"Void a Pending Transfer"),(0,r.kt)("p",null,"In contrast, with ",(0,r.kt)("inlineCode",{parentName:"p"},"flags")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"void_pending_transfer"),",\nTigerBeetle will void the transfer. TigerBeetle will roll\nback the changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"debits_pending")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"credits_pending")," of the\nappropriate accounts and ",(0,r.kt)("strong",{parentName:"p"},"not")," apply them to the ",(0,r.kt)("inlineCode",{parentName:"p"},"debits_posted")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"credits_posted")," balances."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let transfer4 = {\n  id: 4n,\n  debit_account_id: 102n,\n  credit_account_id: 103n,\n  amount: 10n,\n  pending_id: 0n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  timeout: 0,\n  ledger: 1,\n  code: 720,\n  flags: TransferFlags.pending,\n  timestamp: 0n,\n};\ntransferErrors = await client.createTransfers([transfer4]);\n\nlet transfer5 = {\n  id: 7n,\n  debit_account_id: 102n,\n  credit_account_id: 103n,\n  amount: 10n,\n  pending_id: 6n,\n  user_data_128: 0n,\n  user_data_64: 0n,\n  user_data_32: 0,\n  timeout: 0,\n  ledger: 1,\n  code: 720,\n  flags: TransferFlags.void_pending_transfer,\n  timestamp: 0n,\n};\ntransferErrors = await client.createTransfers([transfer5]);\n")),(0,r.kt)("h2",{id:"transfer-lookup"},"Transfer Lookup"),(0,r.kt)("p",null,"NOTE: While transfer lookup exists, it is not a flexible query API. We\nare developing query APIs and there will be new methods for querying\ntransfers in the future."),(0,r.kt)("p",null,"Transfer lookup is batched, like transfer creation. Pass in all ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"s to\nfetch, and matched transfers are returned."),(0,r.kt)("p",null,"If no transfer matches an ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", no object is returned for that\ntransfer. So the order of transfers in the response is not necessarily\nthe same as the order of ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"s in the request. You can refer to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"id")," field in the response to distinguish transfers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"transfers = await client.lookupTransfers([1n, 2n]);\nconsole.log(transfers);\n/*\n * [{\n *   id: 1n,\n *   debit_account_id: 102n,\n *   credit_account_id: 103n,\n *   amount: 10n,\n *   pending_id: 0n,\n *   user_data_128: 0n,\n *   user_data_64: 0n,\n *   user_data_32: 0,\n *   timeout: 0,\n *   ledger: 1,\n *   code: 720,\n *   flags: 0,\n *   timestamp: 1623062009212508993n,\n * }]\n */\n")),(0,r.kt)("h2",{id:"get-account-transfers"},"Get Account Transfers"),(0,r.kt)("p",null,"NOTE: This is a preview API that is subject to breaking changes once we have\na stable querying API."),(0,r.kt)("p",null,"Fetches the transfers involving a given account, allowing basic filter and pagination\ncapabilities."),(0,r.kt)("p",null,"The transfers in the response are sorted by ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," in chronological or\nreverse-chronological order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let filter = {\n  account_id: 2n,\n  timestamp_min: 0n, // No filter by Timestamp.\n  timestamp_max: 0n, // No filter by Timestamp.\n  limit: 10, // Limit to ten balances at most.\n  flags: AccountFilterFlags.debits | // Include transfer from the debit side.\n    AccountFilterFlags.credits | // Include transfer from the credit side.\n    AccountFilterFlags.reversed, // Sort by timestamp in reverse-chronological order.\n};\nconst account_transfers = await client.getAccountTransfers(filter);\n")),(0,r.kt)("h2",{id:"get-account-balances"},"Get Account Balances"),(0,r.kt)("p",null,"NOTE: This is a preview API that is subject to breaking changes once we have\na stable querying API."),(0,r.kt)("p",null,"Fetches the point-in-time balances of a given account, allowing basic filter and\npagination capabilities."),(0,r.kt)("p",null,"Only accounts created with the flag\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/account#flagshistory"},(0,r.kt)("inlineCode",{parentName:"a"},"history"))," set retain\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/requests/get_account_balances"},"historical balances"),"."),(0,r.kt)("p",null,"The balances in the response are sorted by ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," in chronological or\nreverse-chronological order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"filter = {\n  account_id: 2n,\n  timestamp_min: 0n, // No filter by Timestamp.\n  timestamp_max: 0n, // No filter by Timestamp.\n  limit: 10, // Limit to ten balances at most.\n  flags: AccountFilterFlags.debits | // Include transfer from the debit side.\n    AccountFilterFlags.credits | // Include transfer from the credit side.\n    AccountFilterFlags.reversed, // Sort by timestamp in reverse-chronological order.\n};\nconst account_balances = await client.getAccountBalances(filter);\n")),(0,r.kt)("h2",{id:"linked-events"},"Linked Events"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"linked")," flag is specified for an account when creating accounts or\na transfer when creating transfers, it links that event with the next event in the\nbatch, to create a chain of events, of arbitrary length, which all\nsucceed or fail together. The tail of a chain is denoted by the first\nevent without this flag. The last event in a batch may therefore never\nhave the ",(0,r.kt)("inlineCode",{parentName:"p"},"linked")," flag set as this would leave a chain\nopen-ended. Multiple chains or individual events may coexist within a\nbatch to succeed or fail independently."),(0,r.kt)("p",null,"Events within a chain are executed within order, or are rolled back on\nerror, so that the effect of each event in the chain is visible to the\nnext, and so that the chain is either visible or invisible as a unit\nto subsequent events after the chain. The event that was the first to\nbreak the chain will have a unique error result. Other events in the\nchain will have their error result set to ",(0,r.kt)("inlineCode",{parentName:"p"},"linked_event_failed"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const batch = [];\nlet linkedFlag = 0;\nlinkedFlag |= TransferFlags.linked;\n\n// An individual transfer (successful):\nbatch.push({ id: 1n /* , ... */ });\n\n// A chain of 4 transfers (the last transfer in the chain closes the chain with linked=false):\nbatch.push({ id: 2n, /* ..., */ flags: linkedFlag }); // Commit/rollback.\nbatch.push({ id: 3n, /* ..., */ flags: linkedFlag }); // Commit/rollback.\nbatch.push({ id: 2n, /* ..., */ flags: linkedFlag }); // Fail with exists\nbatch.push({ id: 4n, /* ..., */ flags: 0 }); // Fail without committing.\n\n// An individual transfer (successful):\n// This should not see any effect from the failed chain above.\nbatch.push({ id: 2n, /* ..., */ flags: 0 });\n\n// A chain of 2 transfers (the first transfer fails the chain):\nbatch.push({ id: 2n, /* ..., */ flags: linkedFlag });\nbatch.push({ id: 3n, /* ..., */ flags: 0 });\n\n// A chain of 2 transfers (successful):\nbatch.push({ id: 3n, /* ..., */ flags: linkedFlag });\nbatch.push({ id: 4n, /* ..., */ flags: 0 });\n\nconst errors = await client.createTransfers(batch);\n\n/**\n * console.log(errors);\n * [\n *  { index: 1, error: 1 },  // linked_event_failed\n *  { index: 2, error: 1 },  // linked_event_failed\n *  { index: 3, error: 25 }, // exists\n *  { index: 4, error: 1 },  // linked_event_failed\n *\n *  { index: 6, error: 17 }, // exists_with_different_flags\n *  { index: 7, error: 1 },  // linked_event_failed\n * ]\n */\n")))}u.isMDXComponent=!0}}]);