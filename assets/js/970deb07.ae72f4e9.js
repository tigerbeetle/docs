"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5614],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(a),g=r,m=h["".concat(s,".").concat(g)]||h[g]||c[g]||i;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[h]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:6},l="Releases",o={unversionedId:"about/internals/releases",id:"about/internals/releases",title:"Releases",description:"How a new TigerBeetle release is made. Note that the process is being",source:"@site/pages/about/internals/releases.md",sourceDirName:"about/internals",slug:"/about/internals/releases",permalink:"/about/internals/releases",draft:!1,editUrl:"https://github.com/tigerbeetle/tigerbeetle/blob/main/docs/about/internals/releases.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/about/internals/testing"},next:{title:"Cloud",permalink:"/about/internals/cloud"}},s={},p=[{value:"What Is a Release?",id:"what-is-a-release",level:2},{value:"Publishing",id:"publishing",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Changelog",id:"changelog",level:2},{value:"Release Logistics",id:"release-logistics",level:2},{value:"Skipping Release",id:"skipping-release",level:2},{value:"Release Manager Algorithm",id:"release-manager-algorithm",level:2}],u={toc:p},h="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"releases"},"Releases"),(0,r.kt)("p",null,"How a new TigerBeetle release is made. Note that the process is being\nestablished, so this document might not perfectly reflect reality just yet."),(0,r.kt)("h2",{id:"what-is-a-release"},"What Is a Release?"),(0,r.kt)("p",null,"TigerBeetle is distributed in binary form. There are two main reasons for this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to ensure correctness and rule out large classes of configuration errors, the\nactual machine code must be tested."),(0,r.kt)("li",{parentName:"ul"},"Zig is not stable yet. Binary releases insulate the users from this\ninstability and keep the language as an implementation detail.")),(0,r.kt)("p",null,"TigerBeetle binary is released in lockstep with client libraries. At the moment,\nimplementation of the client libraries is tightly integrated and shares code\nwith TigerBeetle, requiring matching versions."),(0,r.kt)("p",null,'Canonical form of the "release" is a ',(0,r.kt)("inlineCode",{parentName:"p"},"dist/")," folder with the following\nartifacts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tigerbeetle/")," subdirectory with ",(0,r.kt)("inlineCode",{parentName:"li"},".zip")," archived ",(0,r.kt)("inlineCode",{parentName:"li"},"tigerbeetle")," binaries built\nfor all supported architectures."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dotnet/")," subdirectory with a Nuget package."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"go/")," subdirectory with the source code of the go client and precompiled\nnative libraries for all supported platforms."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"java/")," subdirectory with a ",(0,r.kt)("inlineCode",{parentName:"li"},".jar")," file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node/")," subdirectory with a ",(0,r.kt)("inlineCode",{parentName:"li"},".tgz")," package for npm.")),(0,r.kt)("h2",{id:"publishing"},"Publishing"),(0,r.kt)("p",null,"Release artifacts are uploaded to appropriate package registries. GitHub release\nis used for synchronization:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a draft release is created at the start of the publishing process,"),(0,r.kt)("li",{parentName:"ul"},"artifacts are uploaded to GitHub releases, npm, Maven Central, and Nuget. For Go, a new commit is\npushed to ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/tigerbeetle-go"},"https://github.com/tigerbeetle/tigerbeetle-go"),". Similarly, docs are uploaded to\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/tigerbeetle/docs"},"https://github.com/tigerbeetle/docs"),"."),(0,r.kt)("li",{parentName:"ul"},"if publishing to all registries were successfully, the release is marked as\nnon-draft.")),(0,r.kt)("p",null,"All publishing keys are stored as GitHub Actions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," environment. For Go and docs,\na personal access token is used. These tokens expire after a year, to refresh a token:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create fine grained personal access token, PAT, using your personal GitHub account (",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-fine-grained-personal-access-token"},"GitHub\ndocumentation"),")"),(0,r.kt)("li",{parentName:"ul"},"Scope the token to the tigerbeetle github organization."),(0,r.kt)("li",{parentName:"ul"},"Grant write access to the relevant repo (use separate tokens for different repositories)."),(0,r.kt)("li",{parentName:"ul"},"Update the token in the ",(0,r.kt)("inlineCode",{parentName:"li"},"release")," environment in the ",(0,r.kt)("inlineCode",{parentName:"li"},"tigerbeetle")," repository.")),(0,r.kt)("h2",{id:"versioning"},"Versioning"),(0,r.kt)("p",null,"Because releases are frequent, we avoid specifying the version in the source\ncode. The source of truth for version is the CHANGELOG.md file. The version at\nthe top becomes the version of the new release."),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("p",null,"Purposes of the changelog:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'For everyone: give project a visible "pulse".'),(0,r.kt)("li",{parentName:"ul"},"For TigerBeetle developers: tell fine grained project evolution story, form\nshared context, provide material for the monthly newsletter."),(0,r.kt)("li",{parentName:"ul"},"For TigerBeetle users: inform about all visible and potentially relevant\nchanges.")),(0,r.kt)("p",null,"As such:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consider skipping over trivial changes in the changelog."),(0,r.kt)("li",{parentName:"ul"},"Don't skip over meaningful changes of the internals, even if they are not\nexternally visible."),(0,r.kt)("li",{parentName:"ul"},"If there is a story behind a series of pull requests, tell it."),(0,r.kt)("li",{parentName:"ul"},"And don't forget the TigerTrack of the week!")),(0,r.kt)("h2",{id:"release-logistics"},"Release Logistics"),(0,r.kt)("p",null,"Releases are triggered manually, on Monday. Default release rotation is on the\ndevhub: ",(0,r.kt)("a",{parentName:"p",href:"https://tigerbeetle.github.io/tigerbeetle/"},"https://tigerbeetle.github.io/tigerbeetle/"),"."),(0,r.kt)("p",null,"The middle name is the default release manager for the ",(0,r.kt)("em",{parentName:"p"},"current")," week. They should execute ",(0,r.kt)("a",{parentName:"p",href:"#release-manager-algorithm"},"Release\nManager Algorithm")," on Monday. If the release manager isn't available on\nMonday, a volunteer picks up that release."),(0,r.kt)("h2",{id:"skipping-release"},"Skipping Release"),(0,r.kt)("p",null,"Because releases are frequent, it is not a problem to skip a single release. In fact, allowing to\neasily skip a release is one of the explicit purposes of the present process."),(0,r.kt)("p",null,"If there's any pull request that we feel pressured should land in the next release, the default\nresponse is to land the PR under its natural pace, and skip the release instead."),(0,r.kt)("p",null,"Similarly, if there's a question of whether we should do a release or to skip one, the default\nanswer is to skip. Skipping is cheap!"),(0,r.kt)("p",null,"If the release is skipped, the changelog is still written and merged on Monday, using the following\nheader: ",(0,r.kt)("inlineCode",{parentName:"p"},"## TigerBeetle (unreleased)"),"."),(0,r.kt)("p",null,"When the next real release happens, it should merge all the previously unreleased changes into a\nsingle versioned changelog entry, to inform users making upgrades."),(0,r.kt)("h2",{id:"release-manager-algorithm"},"Release Manager Algorithm"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("a",{parentName:"p",href:"https://tigerbeetle.github.io/tigerbeetle/"},"devhub")," to check that:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"you are the release manager for the week"),(0,r.kt)("li",{parentName:"ul"},"that the vopr results look reasonable (no failures and a bunch of successful runs for recent\ncommits)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ ./zig/zig build scripts -- changelog\n")),(0,r.kt)("p",{parentName:"li"},"This will update local repository to match remote, create a branch for changelog PR, and add a\nscaffold of the new changelog to CHANGELOG.md. Importantly, the scaffold will contain a new\nversion number with patch version incremented:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"## TigerBeetle 0.16.3   <- Double check this version.\n\n Released 2024-08-29\n\n - [#2256](https://github.com/tigerbeetle/tigerbeetle/pull/2256)\n       Build: Check zig version\n - [#2248](https://github.com/tigerbeetle/tigerbeetle/pull/2248)\n       vopr: heal *both* wal header sectors before replica startup\n\n ### Safety And Performance\n\n -\n\n ### Features\n\n -\n\n ### Internals\n\n -\n\n ### TigerTracks \ud83c\udfa7\n\n - []()\n")),(0,r.kt)("p",{parentName:"li"}," If the current release is being skipped, replace the header with ",(0,r.kt)("inlineCode",{parentName:"p"},"## TigerBeetle (unreleased)"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the changelog:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"categorize pull requests into three buckets."),(0,r.kt)("li",{parentName:"ul"},"drop minor pull requests"),(0,r.kt)("li",{parentName:"ul"},"group related PRs into a single bullet point"),(0,r.kt)("li",{parentName:"ul"},"double-check that the version looks right"),(0,r.kt)("li",{parentName:"ul"},"if there are any big features in the release, write about them in the lead paragraph."),(0,r.kt)("li",{parentName:"ul"},"pick the tiger track!"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Commit the changelog and submit a pull request for review")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the PR is merged, push to the ",(0,r.kt)("inlineCode",{parentName:"p"},"release")," branch:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ git fetch origin && git push origin origin/main:release\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ask someone else to approve the GitHub workflow.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ping release manager for the next week in Slack."))))}c.isMDXComponent=!0}}]);