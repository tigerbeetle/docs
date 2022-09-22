"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[383],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=i,f=m["".concat(o,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={},l="Transfers",s={unversionedId:"reference/transfers",id:"reference/transfers",title:"Transfers",description:"A transfer is an immutable record of a financial transaction between",source:"@site/pages/reference/transfers.md",sourceDirName:"reference",slug:"/reference/transfers",permalink:"/reference/transfers",draft:!1,editUrl:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/docs/reference/transfers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Accounts",permalink:"/reference/accounts"}},o={},d=[{value:"Updates",id:"updates",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>id</code>",id:"id",level:3},{value:"<code>debit_account_id</code>",id:"debit_account_id",level:3},{value:"<code>credit_account_id</code>",id:"credit_account_id",level:3},{value:"<code>user_data</code>",id:"user_data",level:3},{value:"<code>reserved</code>",id:"reserved",level:3},{value:"<code>pending_id</code>",id:"pending_id",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>ledger</code>",id:"ledger",level:3},{value:"<code>code</code>",id:"code",level:3},{value:"<code>flags</code>",id:"flags",level:3},{value:"<code>flags.linked</code>",id:"flagslinked",level:4},{value:"<code>flags.pending</code>",id:"flagspending",level:4},{value:"<code>flags.post_pending_transfer</code>",id:"flagspost_pending_transfer",level:4},{value:"<code>flags.void_pending_transfer</code>",id:"flagsvoid_pending_transfer",level:4},{value:"<code>amount</code>",id:"amount",level:3},{value:"<code>timestamp</code>",id:"timestamp",level:3},{value:"Internals",id:"internals",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transfers"},"Transfers"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer")," is an immutable record of a financial transaction between\ntwo accounts."),(0,i.kt)("p",null,"TigerBeetle uses the same data structures internally and\nexternally. This means that sometimes you need to set temporary values\nfor fields that TigerBeetle, not you (the user), are responsible."),(0,i.kt)("h3",{id:"updates"},"Updates"),(0,i.kt)("p",null,"Transfer fields ",(0,i.kt)("em",{parentName:"p"},"cannot be changed by the user")," after\ncreation."),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("h3",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h3"},"id")),(0,i.kt)("p",null,"This is a unique identifier for the transaction."),(0,i.kt)("p",null,"As an example, you might generate a UUID to identify each transaction."),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 128-bit unsigned integer (16 bytes)"),(0,i.kt)("li",{parentName:"ul"},"Must not be zero or ",(0,i.kt)("inlineCode",{parentName:"li"},"2^128 - 1")),(0,i.kt)("li",{parentName:"ul"},"Must be unique")),(0,i.kt)("h3",{id:"debit_account_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"debit_account_id")),(0,i.kt)("p",null,"This refers to the account to debit the transfer's ",(0,i.kt)("a",{parentName:"p",href:"#amount"},(0,i.kt)("inlineCode",{parentName:"a"},"amount")),"."),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 128-bit unsigned integer (16 bytes)"),(0,i.kt)("li",{parentName:"ul"},"Must match an existing account"),(0,i.kt)("li",{parentName:"ul"},"Must not be the same as ",(0,i.kt)("inlineCode",{parentName:"li"},"credit_account_id"))),(0,i.kt)("h3",{id:"credit_account_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"credit_account_id")),(0,i.kt)("p",null,"This refers to the account to credit the transfer's ",(0,i.kt)("a",{parentName:"p",href:"#amount"},(0,i.kt)("inlineCode",{parentName:"a"},"amount")),"."),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 128-bit unsigned integer (16 bytes)"),(0,i.kt)("li",{parentName:"ul"},"Must match an existing account"),(0,i.kt)("li",{parentName:"ul"},"Must not be the same as ",(0,i.kt)("inlineCode",{parentName:"li"},"debit_account_id"))),(0,i.kt)("h3",{id:"user_data"},(0,i.kt)("inlineCode",{parentName:"h3"},"user_data")),(0,i.kt)("p",null,"This is an optional secondary identifier to link this transfer to an\nexternal entity."),(0,i.kt)("p",null,"As an example, you might use a UUID that ties together a group of\ntransfers."),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 128-bit unsigned integer (16 bytes)")),(0,i.kt)("h3",{id:"reserved"},(0,i.kt)("inlineCode",{parentName:"h3"},"reserved")),(0,i.kt)("p",null,"This space may be used for additional data in the future."),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 128-bit unsigned integer (16 bytes)"),(0,i.kt)("li",{parentName:"ul"},"Must be zero")),(0,i.kt)("h3",{id:"pending_id"},(0,i.kt)("inlineCode",{parentName:"h3"},"pending_id")),(0,i.kt)("p",null,"If this transfer will post or void a pending transfer, ",(0,i.kt)("inlineCode",{parentName:"p"},"pending_id"),"\nreferences that pending transfer. If this is not a post or void\ntransfer, it must be zero."),(0,i.kt)("p",null,"See also:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#flags.post_pending_transfer"},(0,i.kt)("inlineCode",{parentName:"a"},"flags.post_pending_transfer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#flags.void_pending_transfer"},(0,i.kt)("inlineCode",{parentName:"a"},"flags.void_pending_transfer")))),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 128-bit unsigned integer (16 bytes)"),(0,i.kt)("li",{parentName:"ul"},"Must be zero if neither void nor pending transfer flag is set"),(0,i.kt)("li",{parentName:"ul"},"Must match an existing transfer's ",(0,i.kt)("a",{parentName:"li",href:"#id"},(0,i.kt)("inlineCode",{parentName:"a"},"id"))," if non-zero")),(0,i.kt)("h3",{id:"timeout"},(0,i.kt)("inlineCode",{parentName:"h3"},"timeout")),(0,i.kt)("p",null,"This is the interval (in nanoseconds) after a\n",(0,i.kt)("a",{parentName:"p",href:"#flags.pending"},(0,i.kt)("inlineCode",{parentName:"a"},"pending"))," transfer's creation that it may be posted\nor voided."),(0,i.kt)("p",null,"If the timeout expires and the pending transfer has not already been\nposted or voided, the pending transfer is voided automatically."),(0,i.kt)("p",null,"Non-pending transfers cannot have a timeout."),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 64-bit integer (8 bytes)"),(0,i.kt)("li",{parentName:"ul"},"Must be zero if ",(0,i.kt)("inlineCode",{parentName:"li"},"flags.pending")," is ",(0,i.kt)("em",{parentName:"li"},"not")," set"),(0,i.kt)("li",{parentName:"ul"},"Must be non-zero if ",(0,i.kt)("inlineCode",{parentName:"li"},"flags.pending")," ",(0,i.kt)("em",{parentName:"li"},"is")," set")),(0,i.kt)("h3",{id:"ledger"},(0,i.kt)("inlineCode",{parentName:"h3"},"ledger")),(0,i.kt)("p",null,"This is an identifier used to enforce that transfers must be between\naccounts of the same ledger."),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 32-bit unsigned integer (4 bytes)"),(0,i.kt)("li",{parentName:"ul"},"Must not be zero"),(0,i.kt)("li",{parentName:"ul"},"Must match the ",(0,i.kt)("inlineCode",{parentName:"li"},"ledger")," value on the accounts referenced in ",(0,i.kt)("inlineCode",{parentName:"li"},"debit_account_id")," ",(0,i.kt)("strong",{parentName:"li"},"and")," ",(0,i.kt)("inlineCode",{parentName:"li"},"credit_account_id"))),(0,i.kt)("h3",{id:"code"},(0,i.kt)("inlineCode",{parentName:"h3"},"code")),(0,i.kt)("p",null,"This is a user-defined enum denoting the reason for (or category of) the\ntransfer."),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 16-bit unsigned integer (2 bytes)"),(0,i.kt)("li",{parentName:"ul"},"Must not be zero")),(0,i.kt)("h3",{id:"flags"},(0,i.kt)("inlineCode",{parentName:"h3"},"flags")),(0,i.kt)("p",null,"This specifies (optional) transfer behavior."),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 16-bit unsigned integer (2 bytes)")),(0,i.kt)("h4",{id:"flagslinked"},(0,i.kt)("inlineCode",{parentName:"h4"},"flags.linked")),(0,i.kt)("p",null,"When the linked flag is specified, it links a transfer with the next\ntransfer in the batch, to create a chain of transfer, of arbitrary\nlength, which all succeed or fail in creation together. The tail of a\nchain is denoted by the first transfer without this flag. The last\ntransfer in a batch may therefore never have ",(0,i.kt)("inlineCode",{parentName:"p"},"flags.linked")," set as\nthis would leave a chain open-ended."),(0,i.kt)("p",null,"Multiple chains or individual transfers may coexist within a batch to\nsucceed or fail independently. Transfers within a chain are executed\nwithin order, or are rolled back on error, so that the effect of each\ntransfer in the chain is visible to the next, and so that the chain is\neither visible or invisible as a unit to subsequent transfers after the\nchain. The transfer that was the first to break the chain will have a\nunique error result. Other transfers in the chain will have their error\nresult set to ",(0,i.kt)("inlineCode",{parentName:"p"},"linked_event_failed"),"."),(0,i.kt)("p",null,"Consider this set of transfers as part of a batch:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Transfer"),(0,i.kt)("th",{parentName:"tr",align:null},"Index within batch"),(0,i.kt)("th",{parentName:"tr",align:null},"flags.linked"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"A")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"B")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"1")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"C")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"D")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"E")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"4")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("p",null,"If any of transfers ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," fail (for example, due to\n",(0,i.kt)("inlineCode",{parentName:"p"},"error.exceeds_credits"),"), then ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," will all fail. They\nare linked."),(0,i.kt)("p",null,"Transfers ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," fail or succeed independently of ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),", and\n",(0,i.kt)("inlineCode",{parentName:"p"},"D"),"."),(0,i.kt)("h4",{id:"flagspending"},(0,i.kt)("inlineCode",{parentName:"h4"},"flags.pending")),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"pending")," transfer reserves its ",(0,i.kt)("a",{parentName:"p",href:"#amount"},(0,i.kt)("inlineCode",{parentName:"a"},"amount"))," in the\ndebit/credit accounts'\n",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#debits_pending"},(0,i.kt)("inlineCode",{parentName:"a"},"debits_pending")),"/",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#credits_pending"},(0,i.kt)("inlineCode",{parentName:"a"},"credits_pending")),"\nfields respectively. The pending transfer is complete when the first of the\nfollowing events occur:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If a corresponding\n",(0,i.kt)("a",{parentName:"li",href:"#flags.post_pending_transfer"},(0,i.kt)("inlineCode",{parentName:"a"},"post_pending_transfer"))," is\ncommitted, some or all of the pending transfer's reserved funds are\nposted, and the remainder (if any) is restored to the original\naccounts."),(0,i.kt)("li",{parentName:"ul"},"If a corresponding\n",(0,i.kt)("a",{parentName:"li",href:"#flags.void_pending_transfer"},(0,i.kt)("inlineCode",{parentName:"a"},"void_pending_transfer"))," is\ncommitted, the pending transfer's reserved funds are restored to\ntheir original accounts."),(0,i.kt)("li",{parentName:"ul"},"If the pending transfer's timeout expires, the pending transfer's\nreserved funds are restored to their original accounts. (When ",(0,i.kt)("inlineCode",{parentName:"li"},"flags.pending"),"\nis set, the ",(0,i.kt)("a",{parentName:"li",href:"#timeout"},(0,i.kt)("inlineCode",{parentName:"a"},"timeout"))," field must be non-zero.)")),(0,i.kt)("h4",{id:"flagspost_pending_transfer"},(0,i.kt)("inlineCode",{parentName:"h4"},"flags.post_pending_transfer")),(0,i.kt)("p",null,"This flag causes the pending transfer (referred to by\n",(0,i.kt)("a",{parentName:"p",href:"#pending_id"},(0,i.kt)("inlineCode",{parentName:"a"},"pending_id")),') to "post", transferring some or all of the money the\npending transfer reserved to its destination, and restoring the\nremainder (if any) to its origin accounts. The ',(0,i.kt)("inlineCode",{parentName:"p"},"amount")," of a\n",(0,i.kt)("inlineCode",{parentName:"p"},"post_pending_transfer")," must be less-than or equal-to the pending\ntransfer's amount."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the posted ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," is 0, the full pending transfer's amount is\nposted."),(0,i.kt)("li",{parentName:"ul"},"If the posted ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," is nonzero, then only this amount is posted,\nand the remainder is restored to its original accounts. It must be\nless than or equal to the pending transfer's amount.")),(0,i.kt)("p",null,"Additionally, when ",(0,i.kt)("inlineCode",{parentName:"p"},"flags.post_pending_transfer")," is set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pending_id")," must reference a pending transfer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flags.void_pending_transfer")," must not be set.")),(0,i.kt)("p",null,"And the following fields may either be zero, otherwise must match the\nvalue of the pending transfer's field:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"debit_account_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"credit_account_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ledger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code"))),(0,i.kt)("h4",{id:"flagsvoid_pending_transfer"},(0,i.kt)("inlineCode",{parentName:"h4"},"flags.void_pending_transfer")),(0,i.kt)("p",null,"This flag causes the pending transfer (referred to by\n",(0,i.kt)("a",{parentName:"p",href:"#pending_id"},(0,i.kt)("inlineCode",{parentName:"a"},"pending_id")),") to void. The pending transfer's\nreferenced debit/credit accounts'\n",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#debits_pending"},(0,i.kt)("inlineCode",{parentName:"a"},"debits_pending")),"/",(0,i.kt)("a",{parentName:"p",href:"/reference/accounts#credits_pending"},(0,i.kt)("inlineCode",{parentName:"a"},"credits_pending")),"\nfields ."),(0,i.kt)("p",null,"Additionally, when this field is set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pending_id")," must reference a pending transfer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flags.post_pending_transfer")," must not be set.")),(0,i.kt)("p",null,"And the following fields may either be zero, otherwise must match the\nvalue of the pending transfer's field:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"debit_account_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"credit_account_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ledger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount"))),(0,i.kt)("h3",{id:"amount"},(0,i.kt)("inlineCode",{parentName:"h3"},"amount")),(0,i.kt)("p",null,"This is how much should be debited from the ",(0,i.kt)("inlineCode",{parentName:"p"},"debit_account_id")," account\nand credited to the ",(0,i.kt)("inlineCode",{parentName:"p"},"credit_account_id")," account."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,i.kt)("li",{parentName:"ul"},"Must not be zero, unless marking a pending transfer as posted")),(0,i.kt)("h3",{id:"timestamp"},(0,i.kt)("inlineCode",{parentName:"h3"},"timestamp")),(0,i.kt)("p",null,"This is the time the transfer was created, as nanoseconds since\nUNIX epoch."),(0,i.kt)("p",null,"It is set by TigerBeetle to the moment the transfer arrives at\nthe cluster."),(0,i.kt)("p",null,"Constraints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type is 64-bit unsigned integer (8 bytes)"),(0,i.kt)("li",{parentName:"ul"},"User sets to zero on creation")),(0,i.kt)("h2",{id:"internals"},"Internals"),(0,i.kt)("p",null,"If you're curious and want to learn more, you can find the source code\nfor this struct in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/tigerbeetle.zig"},"src/tigerbeetle.zig"),". Search\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"const Transfer = extern struct {"),"."),(0,i.kt)("p",null,"You can find the source code for creating a transfer in\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetledb/tigerbeetle/blob/main/src/state_machine.zig"},"src/state_machine.zig"),". Search\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"fn create_transfer("),"."))}u.isMDXComponent=!0}}]);