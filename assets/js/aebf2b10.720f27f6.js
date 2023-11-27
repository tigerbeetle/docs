"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7136],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,f=u["".concat(c,".").concat(p)]||u[p]||_[p]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>_,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},o="create_accounts",s={unversionedId:"reference/operations/create_accounts",id:"reference/operations/create_accounts",title:"create_accounts",description:"Create one or more Accounts.",source:"@site/pages/reference/operations/create_accounts.md",sourceDirName:"reference/operations",slug:"/reference/operations/create_accounts",permalink:"/reference/operations/create_accounts",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/reference/operations/create_accounts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Operations",permalink:"/reference/operations/"},next:{title:"create_transfers",permalink:"/reference/operations/create_transfers"}},c={},l=[{value:"Event",id:"event",level:2},{value:"Result",id:"result",level:2},{value:"<code>ok</code>",id:"ok",level:3},{value:"<code>linked_event_failed</code>",id:"linked_event_failed",level:3},{value:"<code>linked_event_chain_open</code>",id:"linked_event_chain_open",level:3},{value:"<code>timestamp_must_be_zero</code>",id:"timestamp_must_be_zero",level:3},{value:"<code>reserved_field</code>",id:"reserved_field",level:3},{value:"<code>reserved_flag</code>",id:"reserved_flag",level:3},{value:"<code>id_must_not_be_zero</code>",id:"id_must_not_be_zero",level:3},{value:"<code>id_must_not_be_int_max</code>",id:"id_must_not_be_int_max",level:3},{value:"<code>flags_are_mutually_exclusive</code>",id:"flags_are_mutually_exclusive",level:3},{value:"<code>debits_pending_must_be_zero</code>",id:"debits_pending_must_be_zero",level:3},{value:"<code>debits_posted_must_be_zero</code>",id:"debits_posted_must_be_zero",level:3},{value:"<code>credits_pending_must_be_zero</code>",id:"credits_pending_must_be_zero",level:3},{value:"<code>credits_posted_must_be_zero</code>",id:"credits_posted_must_be_zero",level:3},{value:"<code>ledger_must_not_be_zero</code>",id:"ledger_must_not_be_zero",level:3},{value:"<code>code_must_not_be_zero</code>",id:"code_must_not_be_zero",level:3},{value:"<code>exists_with_different_flags</code>",id:"exists_with_different_flags",level:3},{value:"<code>exists_with_different_user_data_128</code>",id:"exists_with_different_user_data_128",level:3},{value:"<code>exists_with_different_user_data_64</code>",id:"exists_with_different_user_data_64",level:3},{value:"<code>exists_with_different_user_data_32</code>",id:"exists_with_different_user_data_32",level:3},{value:"<code>exists_with_different_ledger</code>",id:"exists_with_different_ledger",level:3},{value:"<code>exists_with_different_code</code>",id:"exists_with_different_code",level:3},{value:"<code>exists</code>",id:"exists",level:3},{value:"Client libraries",id:"client-libraries",level:2},{value:"Internals",id:"internals",level:2}],d={toc:l},u="wrapper";function _(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create_accounts"},(0,r.kt)("inlineCode",{parentName:"h1"},"create_accounts")),(0,r.kt)("p",null,"Create one or more ",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"Account")),"s."),(0,r.kt)("h2",{id:"event"},"Event"),(0,r.kt)("p",null,"The account to create. See ",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"Account"))," for constraints."),(0,r.kt)("h2",{id:"result"},"Result"),(0,r.kt)("p",null,"Results are listed in this section in order of descending precedence \u2014 that is, if more than one\nerror is applicable to the account being created, only the result listed first is returned."),(0,r.kt)("h3",{id:"ok"},(0,r.kt)("inlineCode",{parentName:"h3"},"ok")),(0,r.kt)("p",null,"The account was successfully created; it did not previously exist."),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"ok")," is generated by the client implementation; the network protocol does not include a\nresult when the account was successfully created."),(0,r.kt)("h3",{id:"linked_event_failed"},(0,r.kt)("inlineCode",{parentName:"h3"},"linked_event_failed")),(0,r.kt)("p",null,"The account was not created.\nOne or more of the accounts in the ",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#flagslinked"},"linked chain")," is invalid, so the\nwhole chain failed."),(0,r.kt)("h3",{id:"linked_event_chain_open"},(0,r.kt)("inlineCode",{parentName:"h3"},"linked_event_chain_open")),(0,r.kt)("p",null,"The account was not created.\nThe ",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#flagslinked"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.flags.linked"))," flag was set on the last event in the\nbatch, which is not legal. (",(0,r.kt)("inlineCode",{parentName:"p"},"flags.linked")," indicates that the chain continues to the next\noperation)."),(0,r.kt)("h3",{id:"timestamp_must_be_zero"},(0,r.kt)("inlineCode",{parentName:"h3"},"timestamp_must_be_zero")),(0,r.kt)("p",null,"The account was not created.\nThe ",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.timestamp"))," is nonzero, but must be zero.\nThe cluster is responsible for setting this field."),(0,r.kt)("h3",{id:"reserved_field"},(0,r.kt)("inlineCode",{parentName:"h3"},"reserved_field")),(0,r.kt)("p",null,"The account was not created.\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#reserved"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.reserved"))," is nonzero, but must be zero."),(0,r.kt)("h3",{id:"reserved_flag"},(0,r.kt)("inlineCode",{parentName:"h3"},"reserved_flag")),(0,r.kt)("p",null,"The account was not created.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Account.flags.reserved")," is nonzero, but must be zero."),(0,r.kt)("h3",{id:"id_must_not_be_zero"},(0,r.kt)("inlineCode",{parentName:"h3"},"id_must_not_be_zero")),(0,r.kt)("p",null,"The account was not created.\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#id"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.id"))," is zero, which is a reserved value."),(0,r.kt)("h3",{id:"id_must_not_be_int_max"},(0,r.kt)("inlineCode",{parentName:"h3"},"id_must_not_be_int_max")),(0,r.kt)("p",null,"The account was not created.\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#id"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.id"))," is ",(0,r.kt)("inlineCode",{parentName:"p"},"2^128 - 1"),", which is a reserved value."),(0,r.kt)("h3",{id:"flags_are_mutually_exclusive"},(0,r.kt)("inlineCode",{parentName:"h3"},"flags_are_mutually_exclusive")),(0,r.kt)("p",null,"The account was not created.\nAn account cannot be created with the specified combination of\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#flags"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.flags")),"."),(0,r.kt)("p",null,"The following flags are mutually exclusive:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/accounts#flagsdebits_must_not_exceed_credits"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.flags.debits_must_not_exceed_credits"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/reference/accounts#flagscredits_must_not_exceed_debits"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.flags.credits_must_not_exceed_debits")))),(0,r.kt)("h3",{id:"debits_pending_must_be_zero"},(0,r.kt)("inlineCode",{parentName:"h3"},"debits_pending_must_be_zero")),(0,r.kt)("p",null,"The account was not created.\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#debits_pending"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.debits_pending"))," is nonzero, but must be zero."),(0,r.kt)("p",null,"An account's debits and credits are only modified by transfers."),(0,r.kt)("h3",{id:"debits_posted_must_be_zero"},(0,r.kt)("inlineCode",{parentName:"h3"},"debits_posted_must_be_zero")),(0,r.kt)("p",null,"The account was not created.\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#debits_posted"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.debits_posted"))," is nonzero, but must be zero."),(0,r.kt)("p",null,"An account's debits and credits are only modified by transfers."),(0,r.kt)("h3",{id:"credits_pending_must_be_zero"},(0,r.kt)("inlineCode",{parentName:"h3"},"credits_pending_must_be_zero")),(0,r.kt)("p",null,"The account was not created.\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#credits_pending"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.credits_pending"))," is nonzero, but must be zero."),(0,r.kt)("p",null,"An account's debits and credits are only modified by transfers."),(0,r.kt)("h3",{id:"credits_posted_must_be_zero"},(0,r.kt)("inlineCode",{parentName:"h3"},"credits_posted_must_be_zero")),(0,r.kt)("p",null,"The account was not created.\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#credits_posted"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.credits_posted"))," is nonzero, but must be zero."),(0,r.kt)("p",null,"An account's debits and credits are only modified by transfers."),(0,r.kt)("h3",{id:"ledger_must_not_be_zero"},(0,r.kt)("inlineCode",{parentName:"h3"},"ledger_must_not_be_zero")),(0,r.kt)("p",null,"The account was not created.\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#ledger"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.ledger"))," is zero, but must be nonzero."),(0,r.kt)("h3",{id:"code_must_not_be_zero"},(0,r.kt)("inlineCode",{parentName:"h3"},"code_must_not_be_zero")),(0,r.kt)("p",null,"The account was not created.\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#code"},(0,r.kt)("inlineCode",{parentName:"a"},"Account.code"))," is zero, but must be nonzero."),(0,r.kt)("h3",{id:"exists_with_different_flags"},(0,r.kt)("inlineCode",{parentName:"h3"},"exists_with_different_flags")),(0,r.kt)("p",null,"An account with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with different ",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#flags"},(0,r.kt)("inlineCode",{parentName:"a"},"flags")),"."),(0,r.kt)("h3",{id:"exists_with_different_user_data_128"},(0,r.kt)("inlineCode",{parentName:"h3"},"exists_with_different_user_data_128")),(0,r.kt)("p",null,"An account with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with different\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#user_data_128"},(0,r.kt)("inlineCode",{parentName:"a"},"user_data_128")),"."),(0,r.kt)("h3",{id:"exists_with_different_user_data_64"},(0,r.kt)("inlineCode",{parentName:"h3"},"exists_with_different_user_data_64")),(0,r.kt)("p",null,"An account with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with different\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#user_data_64"},(0,r.kt)("inlineCode",{parentName:"a"},"user_data_64")),"."),(0,r.kt)("h3",{id:"exists_with_different_user_data_32"},(0,r.kt)("inlineCode",{parentName:"h3"},"exists_with_different_user_data_32")),(0,r.kt)("p",null,"An account with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with different\n",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#user_data_32"},(0,r.kt)("inlineCode",{parentName:"a"},"user_data_32")),"."),(0,r.kt)("h3",{id:"exists_with_different_ledger"},(0,r.kt)("inlineCode",{parentName:"h3"},"exists_with_different_ledger")),(0,r.kt)("p",null,"An account with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with different ",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#ledger"},(0,r.kt)("inlineCode",{parentName:"a"},"ledger")),"."),(0,r.kt)("h3",{id:"exists_with_different_code"},(0,r.kt)("inlineCode",{parentName:"h3"},"exists_with_different_code")),(0,r.kt)("p",null,"An account with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," already exists, but with different ",(0,r.kt)("a",{parentName:"p",href:"/reference/accounts#code"},(0,r.kt)("inlineCode",{parentName:"a"},"code")),"."),(0,r.kt)("h3",{id:"exists"},(0,r.kt)("inlineCode",{parentName:"h3"},"exists")),(0,r.kt)("p",null,"An account with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," already exists."),(0,r.kt)("p",null,"With the possible exception of the following fields, the existing account is identical to the\naccount in the request:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debits_pending")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"debits_posted")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"credits_pending")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"credits_posted"))),(0,r.kt)("p",null,"To correctly recover from application crashes\n",(0,r.kt)("a",{parentName:"p",href:"/design/consistency#consistency-with-foreign-databases"},"many applications")," should handle\n",(0,r.kt)("inlineCode",{parentName:"p"},"exists")," exactly as ",(0,r.kt)("a",{parentName:"p",href:"#ok"},(0,r.kt)("inlineCode",{parentName:"a"},"ok")),"."),(0,r.kt)("h2",{id:"client-libraries"},"Client libraries"),(0,r.kt)("p",null,"For language-specific docs see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/dotnet#creating-accounts"},"Creating accounts using the .NET library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/java#creating-accounts"},"Creating accounts using the Java library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/go#creating-accounts"},"Creating accounts using the Go library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/clients/node#creating-accounts"},"Creating accounts using the Node.js library"))),(0,r.kt)("h2",{id:"internals"},"Internals"),(0,r.kt)("p",null,"If you're curious and want to learn more, you can find the source code\nfor creating an account in\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tigerbeetle/tigerbeetle/blob/main/src/state_machine.zig"},"src/state_machine.zig"),". Search\nfor ",(0,r.kt)("inlineCode",{parentName:"p"},"fn create_account(")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"fn execute("),"."))}_.isMDXComponent=!0}}]);