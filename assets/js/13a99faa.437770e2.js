"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1372],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(h,s(s({ref:n},p),{},{components:t})):r.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=f;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={title:"Go"},s=void 0,o={unversionedId:"clients/go",id:"clients/go",title:"Go",description:"The TigerBeetle client for Go.",source:"@site/pages/clients/go.md",sourceDirName:"clients",slug:"/clients/go",permalink:"/clients/go",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/clients/go.md",tags:[],version:"current",frontMatter:{title:"Go"},sidebar:"tutorialSidebar",previous:{title:".NET",permalink:"/clients/dotnet"},next:{title:"Java",permalink:"/clients/java"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup",id:"setup",level:2},{value:"Sample projects",id:"sample-projects",level:2},{value:"Creating a Client",id:"creating-a-client",level:2},{value:"Creating Accounts",id:"creating-accounts",level:2},{value:"Account Flags",id:"account-flags",level:3},{value:"Response and Errors",id:"response-and-errors",level:3},{value:"Account Lookup",id:"account-lookup",level:2},{value:"Create Transfers",id:"create-transfers",level:2},{value:"Response and Errors",id:"response-and-errors-1",level:3},{value:"Batching",id:"batching",level:2},{value:"Queues and Workers",id:"queues-and-workers",level:3},{value:"Transfer Flags",id:"transfer-flags",level:2},{value:"Two-Phase Transfers",id:"two-phase-transfers",level:3},{value:"Post a Pending Transfer",id:"post-a-pending-transfer",level:4},{value:"Void a Pending Transfer",id:"void-a-pending-transfer",level:4},{value:"Transfer Lookup",id:"transfer-lookup",level:2},{value:"Get Account Transfers",id:"get-account-transfers",level:2},{value:"Get Account Balances",id:"get-account-balances",level:2},{value:"Linked Events",id:"linked-events",level:2}],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tigerbeetle-go"},"tigerbeetle-go"),(0,a.kt)("p",null,"The TigerBeetle client for Go."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/tigerbeetle/tigerbeetle-go"},(0,a.kt)("img",{parentName:"a",src:"https://pkg.go.dev/badge/github.com/tigerbeetle/tigerbeetle-go.svg",alt:"Go Reference"}))),(0,a.kt)("p",null,"Make sure to import ",(0,a.kt)("inlineCode",{parentName:"p"},"github.com/tigerbeetle/tigerbeetle-go"),", not\nthis repo and subdirectory."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Linux >= 5.6 is the only production environment we\nsupport. But for ease of development we also support macOS and Windows."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go >= 1.17")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Additionally on Windows"),": you must install ",(0,a.kt)("a",{parentName:"p",href:"https://ziglang.org/download/#release-0.11.0"},"Zig\n0.11.0")," and set the\n",(0,a.kt)("inlineCode",{parentName:"p"},"CC")," environment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"zig.exe cc"),". Use the full path for\n",(0,a.kt)("inlineCode",{parentName:"p"},"zig.exe"),"."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"First, create a directory for your project and ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into the directory."),(0,a.kt)("p",null,"Then, install the TigerBeetle client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"go mod init tbtest\ngo get github.com/tigerbeetle/tigerbeetle-go\n")),(0,a.kt)("p",null,"Now, create ",(0,a.kt)("inlineCode",{parentName:"p"},"main.go")," and copy this into it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n    "log"\n    "os"\n\n    . "github.com/tigerbeetle/tigerbeetle-go"\n    . "github.com/tigerbeetle/tigerbeetle-go/pkg/types"\n)\n\nfunc main() {\n    fmt.Println("Import ok!")\n}\n\n')),(0,a.kt)("p",null,"Finally, build and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"go run main.go\n")),(0,a.kt)("p",null,"Now that all prerequisites and dependencies are correctly set\nup, let's dig into using TigerBeetle."),(0,a.kt)("h2",{id:"sample-projects"},"Sample projects"),(0,a.kt)("p",null,"This document is primarily a reference guide to\nthe client. Below are various sample projects demonstrating\nfeatures of TigerBeetle."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/clients/go/samples/basic/"},"Basic"),": Create two accounts and transfer an amount between them."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/clients/go/samples/two-phase/"},"Two-Phase Transfer"),": Create two accounts and start a pending transfer between\nthem, then post the transfer."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/clients/go/samples/two-phase-many/"},"Many Two-Phase Transfers"),": Create two accounts and start a number of pending transfer\nbetween them, posting and voiding alternating transfers.")),(0,a.kt)("h2",{id:"creating-a-client"},"Creating a Client"),(0,a.kt)("p",null,"A client is created with a cluster ID and replica\naddresses for all replicas in the cluster. The cluster\nID and replica addresses are both chosen by the system that\nstarts the TigerBeetle cluster."),(0,a.kt)("p",null,"Clients are thread-safe and a single instance should be shared\nbetween multiple concurrent tasks."),(0,a.kt)("p",null,"Multiple clients are useful when connecting to more than\none TigerBeetle cluster."),(0,a.kt)("p",null,"In this example the cluster ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and there is one\nreplica. The address is read from the ",(0,a.kt)("inlineCode",{parentName:"p"},"TB_ADDRESS"),"\nenvironment variable and defaults to port ",(0,a.kt)("inlineCode",{parentName:"p"},"3000"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'tbAddress := os.Getenv("TB_ADDRESS")\nif len(tbAddress) == 0 {\n    tbAddress = "3000"\n}\nclient, err := NewClient(ToUint128(0), []string{tbAddress}, 256)\nif err != nil {\n    log.Printf("Error creating client: %s", err)\n    return\n}\ndefer client.Close()\n')),(0,a.kt)("p",null,"The third argument to ",(0,a.kt)("inlineCode",{parentName:"p"},"NewClient")," is a ",(0,a.kt)("inlineCode",{parentName:"p"},"uint")," max concurrency\nsetting. ",(0,a.kt)("inlineCode",{parentName:"p"},"256")," is a good default and can increase to ",(0,a.kt)("inlineCode",{parentName:"p"},"8192"),"\nas you need increased throughput."),(0,a.kt)("p",null,"The following are valid addresses:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"3000")," (interpreted as ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3000"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3000")," (interpreted as ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3000"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," (interpreted as ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3001"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"3001")," is the default port)")),(0,a.kt)("h2",{id:"creating-accounts"},"Creating Accounts"),(0,a.kt)("p",null,"See details for account fields in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/accounts"},"Accounts\nreference"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'accountsRes, err := client.CreateAccounts([]Account{\n    {\n        ID:             ToUint128(137),\n        DebitsPending:  ToUint128(0),\n        DebitsPosted:   ToUint128(0),\n        CreditsPending: ToUint128(0),\n        CreditsPosted:  ToUint128(0),\n        UserData128:    ToUint128(0),\n        UserData64:     0,\n        UserData32:     0,\n        Reserved:       0,\n        Ledger:         1,\n        Code:           718,\n        Flags:          0,\n        Timestamp:      0,\n    },\n})\nif err != nil {\n    log.Printf("Error creating accounts: %s", err)\n    return\n}\n\nfor _, err := range accountsRes {\n    log.Printf("Error creating account %d: %s", err.Index, err.Result)\n    return\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint128")," fields like ",(0,a.kt)("inlineCode",{parentName:"p"},"ID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UserData128"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Amount")," and\naccount balances have a few helper functions to make it easier\nto convert 128-bit little-endian unsigned integers between\n",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"math/big.Int"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"[]byte"),"."),(0,a.kt)("p",null,"See the type ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/tigerbeetle/tigerbeetle-go/pkg/types#Uint128"},"Uint128")," for more details."),(0,a.kt)("h3",{id:"account-flags"},"Account Flags"),(0,a.kt)("p",null,"The account flags value is a bitfield. See details for\nthese flags in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/accounts#flags"},"Accounts\nreference"),"."),(0,a.kt)("p",null,"To toggle behavior for an account, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"types.AccountFlags")," struct\nto combine enum values and generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"uint16"),". Here are a\nfew examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AccountFlags{Linked: true}.ToUint16()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AccountFlags{DebitsMustNotExceedCredits: true}.ToUint16()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AccountFlags{CreditsMustNotExceedDebits: true}.ToUint16()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AccountFlags{History: true}.ToUint16()"))),(0,a.kt)("p",null,"For example, to link two accounts where the first account\nadditionally has the ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_must_not_exceed_credits")," constraint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'account0 := Account{ /* ... account values ... */ }\naccount1 := Account{ /* ... account values ... */ }\naccount0.Flags = AccountFlags{Linked: true}.ToUint16()\n\naccountErrors, err := client.CreateAccounts([]Account{account0, account1})\nif err != nil {\n    log.Printf("Error creating accounts: %s", err)\n    return\n}\n')),(0,a.kt)("h3",{id:"response-and-errors"},"Response and Errors"),(0,a.kt)("p",null,"The response is an empty array if all accounts were\ncreated successfully. If the response is non-empty, each\nobject in the response array contains error information\nfor an account that failed. The error object contains an\nerror code and the index of the account in the request\nbatch."),(0,a.kt)("p",null,"See all error conditions in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/operations/create_accounts"},"create_accounts\nreference"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'account2 := Account{ /* ... account values ... */ }\naccount3 := Account{ /* ... account values ... */ }\naccount4 := Account{ /* ... account values ... */ }\n\naccountErrors, err = client.CreateAccounts([]Account{account2, account3, account4})\nif err != nil {\n    log.Printf("Error creating accounts: %s", err)\n    return\n}\nfor _, err := range accountErrors {\n    log.Printf("Error creating account %d: %s", err.Index, err.Result)\n    return\n}\n')),(0,a.kt)("p",null,"To handle errors you can either 1) exactly match error codes returned\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"client.createAccounts")," with enum values in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"CreateAccountError")," object, or you can 2) look up the error code in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"CreateAccountError")," object for a human-readable string."),(0,a.kt)("h2",{id:"account-lookup"},"Account Lookup"),(0,a.kt)("p",null,"Account lookup is batched, like account creation. Pass\nin all IDs to fetch. The account for each matched ID is returned."),(0,a.kt)("p",null,"If no account matches an ID, no object is returned for\nthat account. So the order of accounts in the response is\nnot necessarily the same as the order of IDs in the\nrequest. You can refer to the ID field in the response to\ndistinguish accounts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'accounts, err := client.LookupAccounts([]Uint128{ToUint128(137), ToUint128(138)})\nif err != nil {\n    log.Printf("Could not fetch accounts: %s", err)\n    return\n}\nlog.Println(accounts)\n')),(0,a.kt)("h2",{id:"create-transfers"},"Create Transfers"),(0,a.kt)("p",null,"This creates a journal entry between two accounts."),(0,a.kt)("p",null,"See details for transfer fields in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/transfers"},"Transfers\nreference"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'transfers := []Transfer{{\n    ID:              ToUint128(1),\n    DebitAccountID:  ToUint128(1),\n    CreditAccountID: ToUint128(2),\n    Amount:          ToUint128(10),\n    PendingID:       ToUint128(0),\n    UserData128:     ToUint128(2),\n    UserData64:      0,\n    UserData32:      0,\n    Timeout:         0,\n    Ledger:          1,\n    Code:            1,\n    Flags:           0,\n    Timestamp:       0,\n}}\n\ntransfersRes, err := client.CreateTransfers(transfers)\nif err != nil {\n    log.Printf("Error creating transfer batch: %s", err)\n    return\n}\n')),(0,a.kt)("h3",{id:"response-and-errors-1"},"Response and Errors"),(0,a.kt)("p",null,"The response is an empty array if all transfers were created\nsuccessfully. If the response is non-empty, each object in the\nresponse array contains error information for a transfer that\nfailed. The error object contains an error code and the index of the\ntransfer in the request batch."),(0,a.kt)("p",null,"See all error conditions in the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/operations/create_transfers"},"create_transfers\nreference"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'for _, err := range transfersRes {\n    log.Printf("Batch transfer at %d failed to create: %s", err.Index, err.Result)\n    return\n}\n')),(0,a.kt)("h2",{id:"batching"},"Batching"),(0,a.kt)("p",null,"TigerBeetle performance is maximized when you batch\nAPI requests. The client does not do this automatically for\nyou. So, for example, you ",(0,a.kt)("em",{parentName:"p"},"can")," insert 1 million transfers\none at a time like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"for i := 0; i < len(transfers); i++ {\n    transfersRes, err = client.CreateTransfers([]Transfer{transfers[i]})\n    // error handling omitted\n}\n")),(0,a.kt)("p",null,"But the insert rate will be a ",(0,a.kt)("em",{parentName:"p"},"fraction")," of\npotential. Instead, ",(0,a.kt)("strong",{parentName:"p"},"always batch what you can"),"."),(0,a.kt)("p",null,"The maximum batch size is set in the TigerBeetle server. The default\nis 8190."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"BATCH_SIZE := 8190\nfor i := 0; i < len(transfers); i += BATCH_SIZE {\n    batch := BATCH_SIZE\n    if i+BATCH_SIZE > len(transfers) {\n        batch = len(transfers) - i\n    }\n    transfersRes, err = client.CreateTransfers(transfers[i : i+batch])\n    // error handling omitted\n}\n")),(0,a.kt)("h3",{id:"queues-and-workers"},"Queues and Workers"),(0,a.kt)("p",null,"If you are making requests to TigerBeetle from workers\npulling jobs from a queue, you can batch requests to\nTigerBeetle by having the worker act on multiple jobs from\nthe queue at once rather than one at a time. i.e. pulling\nmultiple jobs from the queue rather than just one."),(0,a.kt)("h2",{id:"transfer-flags"},"Transfer Flags"),(0,a.kt)("p",null,"The transfer ",(0,a.kt)("inlineCode",{parentName:"p"},"flags")," value is a bitfield. See details for these flags in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/transfers#flags"},"Transfers\nreference"),"."),(0,a.kt)("p",null,"To toggle behavior for an account, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"types.TransferFlags")," struct\nto combine enum values and generate a ",(0,a.kt)("inlineCode",{parentName:"p"},"uint16"),". Here are a\nfew examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TransferFlags{Linked: true}.ToUint16()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TransferFlags{Pending: true}.ToUint16()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TransferFlags{PostPendingTransfer: true}.ToUint16()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TransferFlags{VoidPendingTransfer: true}.ToUint16()"))),(0,a.kt)("p",null,"For example, to link ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer1"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"transfer0 := Transfer{ /* ... account values ... */ }\ntransfer1 := Transfer{ /* ... account values ... */ }\ntransfer0.Flags = TransferFlags{Linked: true}.ToUint16()\ntransfersRes, err = client.CreateTransfers([]Transfer{transfer0, transfer1})\n// error handling omitted\n")),(0,a.kt)("h3",{id:"two-phase-transfers"},"Two-Phase Transfers"),(0,a.kt)("p",null,"Two-phase transfers are supported natively by toggling the appropriate\nflag. TigerBeetle will then adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"credits_pending")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"debits_pending")," fields of the appropriate accounts. A corresponding\npost pending transfer then needs to be sent to post or void the\ntransfer."),(0,a.kt)("h4",{id:"post-a-pending-transfer"},"Post a Pending Transfer"),(0,a.kt)("p",null,"With ",(0,a.kt)("inlineCode",{parentName:"p"},"flags")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"post_pending_transfer"),",\nTigerBeetle will post the transfer. TigerBeetle will atomically roll\nback the changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_pending")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"credits_pending")," of the\nappropriate accounts and apply them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_posted")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"credits_posted")," balances."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"transfer := Transfer{\n    ID:        ToUint128(2),\n    PendingID: ToUint128(1),\n    Flags:     TransferFlags{PostPendingTransfer: true}.ToUint16(),\n    Timestamp: 0,\n}\ntransfersRes, err = client.CreateTransfers([]Transfer{transfer})\n// error handling omitted\n")),(0,a.kt)("h4",{id:"void-a-pending-transfer"},"Void a Pending Transfer"),(0,a.kt)("p",null,"In contrast, with ",(0,a.kt)("inlineCode",{parentName:"p"},"flags")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"void_pending_transfer"),",\nTigerBeetle will void the transfer. TigerBeetle will roll\nback the changes to ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_pending")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"credits_pending")," of the\nappropriate accounts and ",(0,a.kt)("strong",{parentName:"p"},"not")," apply them to the ",(0,a.kt)("inlineCode",{parentName:"p"},"debits_posted")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"credits_posted")," balances."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"transfer = Transfer{\n    ID:        ToUint128(2),\n    PendingID: ToUint128(1),\n    Flags:     TransferFlags{VoidPendingTransfer: true}.ToUint16(),\n    Timestamp: 0,\n}\ntransfersRes, err = client.CreateTransfers([]Transfer{transfer})\n// error handling omitted\n")),(0,a.kt)("h2",{id:"transfer-lookup"},"Transfer Lookup"),(0,a.kt)("p",null,"NOTE: While transfer lookup exists, it is not a flexible query API. We\nare developing query APIs and there will be new methods for querying\ntransfers in the future."),(0,a.kt)("p",null,"Transfer lookup is batched, like transfer creation. Pass in all ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"s to\nfetch, and matched transfers are returned."),(0,a.kt)("p",null,"If no transfer matches an ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", no object is returned for that\ntransfer. So the order of transfers in the response is not necessarily\nthe same as the order of ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"s in the request. You can refer to the\n",(0,a.kt)("inlineCode",{parentName:"p"},"id")," field in the response to distinguish transfers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'transfers, err = client.LookupTransfers([]Uint128{ToUint128(1), ToUint128(2)})\nif err != nil {\n    log.Printf("Could not fetch transfers: %s", err)\n    return\n}\nlog.Println(transfers)\n')),(0,a.kt)("h2",{id:"get-account-transfers"},"Get Account Transfers"),(0,a.kt)("p",null,"NOTE: This is a preview API that is subject to breaking changes once we have\na stable querying API."),(0,a.kt)("p",null,"Fetches the transfers involving a given account, allowing basic filter and pagination\ncapabilities."),(0,a.kt)("p",null,"The transfers in the response are sorted by ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamp")," in chronological or\nreverse-chronological order."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'filter := AccountFilter{\n    AccountID:    ToUint128(2),\n    TimestampMin: 0,  // No filter by Timestamp.\n    TimestampMax: 0,  // No filter by Timestamp.\n    Limit:        10, // Limit to ten transfers at most.\n    Flags: AccountFilterFlags{\n        Debits:   true, // Include transfer from the debit side.\n        Credits:  true, // Include transfer from the credit side.\n        Reversed: true, // Sort by timestamp in reverse-chronological order.\n    }.ToUint32(),\n}\ntransfers, err = client.GetAccountTransfers(filter)\nif err != nil {\n    log.Printf("Could not fetch transfers: %s", err)\n    return\n}\nlog.Println(transfers)\n')),(0,a.kt)("h2",{id:"get-account-balances"},"Get Account Balances"),(0,a.kt)("p",null,"NOTE: This is a preview API that is subject to breaking changes once we have\na stable querying API."),(0,a.kt)("p",null,"Fetches the point-in-time balances of a given account, allowing basic filter and\npagination capabilities."),(0,a.kt)("p",null,"Only accounts created with the flag\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/accounts#flagshistory"},(0,a.kt)("inlineCode",{parentName:"a"},"history"))," set retain\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.tigerbeetle.com/reference/operations/get_account_balances"},"historical balances"),"."),(0,a.kt)("p",null,"The balances in the response are sorted by ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamp")," in chronological or\nreverse-chronological order."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'filter = AccountFilter{\n    AccountID:    ToUint128(2),\n    TimestampMin: 0,  // No filter by Timestamp.\n    TimestampMax: 0,  // No filter by Timestamp.\n    Limit:        10, // Limit to ten balances at most.\n    Flags: AccountFilterFlags{\n        Debits:   true, // Include transfer from the debit side.\n        Credits:  true, // Include transfer from the credit side.\n        Reversed: true, // Sort by timestamp in reverse-chronological order.\n    }.ToUint32(),\n}\naccount_balances, err := client.GetAccountBalances(filter)\nif err != nil {\n    log.Printf("Could not fetch the history: %s", err)\n    return\n}\nlog.Println(account_balances)\n')),(0,a.kt)("h2",{id:"linked-events"},"Linked Events"),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"linked")," flag is specified for an account when creating accounts or\na transfer when creating transfers, it links that event with the next event in the\nbatch, to create a chain of events, of arbitrary length, which all\nsucceed or fail together. The tail of a chain is denoted by the first\nevent without this flag. The last event in a batch may therefore never\nhave the ",(0,a.kt)("inlineCode",{parentName:"p"},"linked")," flag set as this would leave a chain\nopen-ended. Multiple chains or individual events may coexist within a\nbatch to succeed or fail independently."),(0,a.kt)("p",null,"Events within a chain are executed within order, or are rolled back on\nerror, so that the effect of each event in the chain is visible to the\nnext, and so that the chain is either visible or invisible as a unit\nto subsequent events after the chain. The event that was the first to\nbreak the chain will have a unique error result. Other events in the\nchain will have their error result set to ",(0,a.kt)("inlineCode",{parentName:"p"},"linked_event_failed"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"batch := []Transfer{}\nlinkedFlag := TransferFlags{Linked: true}.ToUint16()\n\n// An individual transfer (successful):\nbatch = append(batch, Transfer{ID: ToUint128(1) /* ... rest of transfer ... */})\n\n// A chain of 4 transfers (the last transfer in the chain closes the chain with linked=false):\nbatch = append(batch, Transfer{ID: ToUint128(2) /* ... , */, Flags: linkedFlag}) // Commit/rollback.\nbatch = append(batch, Transfer{ID: ToUint128(3) /* ... , */, Flags: linkedFlag}) // Commit/rollback.\nbatch = append(batch, Transfer{ID: ToUint128(2) /* ... , */, Flags: linkedFlag}) // Fail with exists\nbatch = append(batch, Transfer{ID: ToUint128(4) /* ... , */})                    // Fail without committing\n\n// An individual transfer (successful):\n// This should not see any effect from the failed chain above.\nbatch = append(batch, Transfer{ID: ToUint128(2) /* ... rest of transfer ... */})\n\n// A chain of 2 transfers (the first transfer fails the chain):\nbatch = append(batch, Transfer{ID: ToUint128(2) /* ... rest of transfer ... */, Flags: linkedFlag})\nbatch = append(batch, Transfer{ID: ToUint128(3) /* ... rest of transfer ... */})\n\n// A chain of 2 transfers (successful):\nbatch = append(batch, Transfer{ID: ToUint128(3) /* ... rest of transfer ... */, Flags: linkedFlag})\nbatch = append(batch, Transfer{ID: ToUint128(4) /* ... rest of transfer ... */})\n\ntransfersRes, err = client.CreateTransfers(batch)\n")))}d.isMDXComponent=!0}}]);