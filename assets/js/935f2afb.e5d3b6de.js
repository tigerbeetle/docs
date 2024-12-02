"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"TigerBeetle Docs","href":"/","docId":"README"},{"type":"link","label":"Quick Start","href":"/quick-start","docId":"quick-start"},{"type":"category","label":"Coding","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"TigerBeetle in Your System Architecture","href":"/coding/system-architecture","docId":"coding/system-architecture"},{"type":"link","label":"Data Modeling","href":"/coding/data-modeling","docId":"coding/data-modeling"},{"type":"link","label":"Financial Accounting","href":"/coding/financial-accounting","docId":"coding/financial-accounting"},{"type":"link","label":"Two-Phase Transfers","href":"/coding/two-phase-transfers","docId":"coding/two-phase-transfers"},{"type":"link","label":"Reliable Transaction Submission","href":"/coding/reliable-transaction-submission","docId":"coding/reliable-transaction-submission"},{"type":"link","label":"Time","href":"/coding/time","docId":"coding/time"},{"type":"category","label":"Recipes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Currency Exchange","href":"/coding/recipes/currency-exchange","docId":"coding/recipes/currency-exchange"},{"type":"link","label":"Multi-Debit, Multi-Credit Transfers","href":"/coding/recipes/multi-debit-credit-transfers","docId":"coding/recipes/multi-debit-credit-transfers"},{"type":"link","label":"Close Account","href":"/coding/recipes/close-account","docId":"coding/recipes/close-account"},{"type":"link","label":"Balance-Conditional Transfers","href":"/coding/recipes/balance-conditional-transfers","docId":"coding/recipes/balance-conditional-transfers"},{"type":"link","label":"Balance Bounds","href":"/coding/recipes/balance-bounds","docId":"coding/recipes/balance-bounds"},{"type":"link","label":"Correcting Transfers","href":"/coding/recipes/correcting-transfers","docId":"coding/recipes/correcting-transfers"},{"type":"link","label":"Rate Limiting","href":"/coding/recipes/rate-limiting","docId":"coding/recipes/rate-limiting"},{"type":"link","label":"Balance-invariant Transfers","href":"/coding/recipes/balance-invariant-transfers","docId":"coding/recipes/balance-invariant-transfers"}]}],"href":"/coding/"},{"type":"category","label":"Operating","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Deploying for Production","href":"/operating/deploy","docId":"operating/deploy"},{"type":"link","label":"Hardware","href":"/operating/hardware","docId":"operating/hardware"},{"type":"link","label":"Deploying on Linux","href":"/operating/linux","docId":"operating/linux"},{"type":"link","label":"Docker","href":"/operating/docker","docId":"operating/docker"},{"type":"link","label":"Managed Service","href":"/operating/managed-service","docId":"operating/managed-service"},{"type":"link","label":"Upgrading","href":"/operating/upgrading","docId":"operating/upgrading"}]},{"type":"category","label":"Client Libraries","collapsible":true,"collapsed":true,"items":[{"type":"link","label":".NET","href":"/clients/dotnet","docId":"clients/dotnet"},{"type":"link","label":"Go","href":"/clients/go","docId":"clients/go"},{"type":"link","label":"Java","href":"/clients/java","docId":"clients/java"},{"type":"link","label":"Node.js","href":"/clients/node","docId":"clients/node"},{"type":"link","label":"Python","href":"/clients/python","docId":"clients/python"}]},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Account","href":"/reference/account","docId":"reference/account"},{"type":"link","label":"Transfer","href":"/reference/transfer","docId":"reference/transfer"},{"type":"link","label":"AccountBalance","href":"/reference/account-balance","docId":"reference/account-balance"},{"type":"link","label":"AccountFilter","href":"/reference/account-filter","docId":"reference/account-filter"},{"type":"link","label":"QueryFilter","href":"/reference/query-filter","docId":"reference/query-filter"},{"type":"category","label":"Requests","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"create_accounts","href":"/reference/requests/create_accounts","docId":"reference/requests/create_accounts"},{"type":"link","label":"create_transfers","href":"/reference/requests/create_transfers","docId":"reference/requests/create_transfers"},{"type":"link","label":"get_account_balances","href":"/reference/requests/get_account_balances","docId":"reference/requests/get_account_balances"},{"type":"link","label":"get_account_transfers","href":"/reference/requests/get_account_transfers","docId":"reference/requests/get_account_transfers"},{"type":"link","label":"lookup_accounts","href":"/reference/requests/lookup_accounts","docId":"reference/requests/lookup_accounts"},{"type":"link","label":"lookup_transfers","href":"/reference/requests/lookup_transfers","docId":"reference/requests/lookup_transfers"},{"type":"link","label":"query_accounts","href":"/reference/requests/query_accounts","docId":"reference/requests/query_accounts"},{"type":"link","label":"query_transfers","href":"/reference/requests/query_transfers","docId":"reference/requests/query_transfers"}],"href":"/reference/requests/"},{"type":"link","label":"Client Sessions","href":"/reference/sessions","docId":"reference/sessions"}]},{"type":"category","label":"About","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Built for OLTP","href":"/about/oltp","docId":"about/oltp"},{"type":"link","label":"Performance","href":"/about/performance","docId":"about/performance"},{"type":"link","label":"Safety","href":"/about/safety","docId":"about/safety"},{"type":"link","label":"Deterministic Simulation Testing","href":"/about/vopr","docId":"about/vopr"},{"type":"link","label":"Architecture","href":"/about/architecture","docId":"about/architecture"},{"type":"link","label":"Production Ready","href":"/about/production-ready","docId":"about/production-ready"},{"type":"link","label":"Zig","href":"/about/zig","docId":"about/zig"},{"type":"category","label":"Internals","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"VSR","href":"/about/internals/vsr","docId":"about/internals/vsr"},{"type":"link","label":"Data File","href":"/about/internals/data_file","docId":"about/internals/data_file"},{"type":"link","label":"LSM","href":"/about/internals/lsm","docId":"about/internals/lsm"},{"type":"link","label":"State Sync","href":"/about/internals/sync","docId":"about/internals/sync"},{"type":"link","label":"Testing","href":"/about/internals/testing","docId":"about/internals/testing"},{"type":"link","label":"Releases","href":"/about/internals/releases","docId":"about/internals/releases"},{"type":"link","label":"Cloud","href":"/about/internals/cloud","docId":"about/internals/cloud"},{"type":"link","label":"Upgrades","href":"/about/internals/upgrades","docId":"about/internals/upgrades"}],"href":"/about/internals/"}],"href":"/about/"}]},"docs":{"about/architecture":{"id":"about/architecture","title":"Architecture","description":"In theory, TigerBeetle is a replicated state machine that takes an initial starting state","sidebar":"tutorialSidebar"},"about/internals/cloud":{"id":"about/internals/cloud","title":"Cloud","description":"Tigerbeetle is optimized for performance, exploiting \\"close to the metal\\"","sidebar":"tutorialSidebar"},"about/internals/data_file":{"id":"about/internals/data_file","title":"Data File","description":"\u201cJust show me the tables already!\u201d","sidebar":"tutorialSidebar"},"about/internals/lsm":{"id":"about/internals/lsm","title":"LSM","description":"Documentation for (roughly) code in the src/lsm directory.","sidebar":"tutorialSidebar"},"about/internals/README":{"id":"about/internals/README","title":"Internals","description":"This section collects our internal developer documentation. The","sidebar":"tutorialSidebar"},"about/internals/releases":{"id":"about/internals/releases","title":"Releases","description":"How a new TigerBeetle release is made. Note that the process is being","sidebar":"tutorialSidebar"},"about/internals/sync":{"id":"about/internals/sync","title":"State Sync","description":"State sync synchronizes the state of a lagging replica with the healthy cluster.","sidebar":"tutorialSidebar"},"about/internals/testing":{"id":"about/internals/testing","title":"Testing","description":"Documentation for (roughly) code in the src/testing directory.","sidebar":"tutorialSidebar"},"about/internals/upgrades":{"id":"about/internals/upgrades","title":"Upgrades","description":"Upgrades in TigerBeetle are handled by bundling multiple underlying TigerBeetle binaries of","sidebar":"tutorialSidebar"},"about/internals/vsr":{"id":"about/internals/vsr","title":"VSR","description":"Documentation for (roughly) code in the src/vsr directory.","sidebar":"tutorialSidebar"},"about/oltp":{"id":"about/oltp","title":"Built for OLTP","description":"Online Transaction Processing (OLTP) is about recording business transactions in real-time. This","sidebar":"tutorialSidebar"},"about/performance":{"id":"about/performance","title":"Performance","description":"TigerBeetle provides more performance than a general-purpose relational database such as MySQL or an","sidebar":"tutorialSidebar"},"about/production-ready":{"id":"about/production-ready","title":"Production Ready","description":"TigerBeetle is ready for production use on Linux as of version 0.15.3, which provides protocol and","sidebar":"tutorialSidebar"},"about/README":{"id":"about/README","title":"About TigerBeetle","description":"Mission","sidebar":"tutorialSidebar"},"about/safety":{"id":"about/safety","title":"Safety","description":"TigerBeetle is designed to a higher safety standard than a general-purpose relational database such","sidebar":"tutorialSidebar"},"about/vopr":{"id":"about/vopr","title":"Deterministic Simulation Testing","description":"Deterministic Simulation Testing (DST) is one of our favorite parts about TigerBeetle, and it is a","sidebar":"tutorialSidebar"},"about/zig":{"id":"about/zig","title":"Zig","description":"Coming from C, Zig is the language we\'ve always wanted -- and the perfect language in which to write","sidebar":"tutorialSidebar"},"clients/dotnet":{"id":"clients/dotnet","title":".NET","description":"The TigerBeetle client for .NET.","sidebar":"tutorialSidebar"},"clients/go":{"id":"clients/go","title":"Go","description":"The TigerBeetle client for Go.","sidebar":"tutorialSidebar"},"clients/java":{"id":"clients/java","title":"Java","description":"The TigerBeetle client for Java.","sidebar":"tutorialSidebar"},"clients/node":{"id":"clients/node","title":"Node.js","description":"The TigerBeetle client for Node.js.","sidebar":"tutorialSidebar"},"clients/python":{"id":"clients/python","title":"Python","description":"The TigerBeetle client for Python.","sidebar":"tutorialSidebar"},"coding/data-modeling":{"id":"coding/data-modeling","title":"Data Modeling","description":"This section describes various aspects of the TigerBeetle data model and provides some suggestions","sidebar":"tutorialSidebar"},"coding/financial-accounting":{"id":"coding/financial-accounting","title":"Financial Accounting","description":"For developers with non-financial backgrounds, TigerBeetle\'s use of accounting concepts like debits","sidebar":"tutorialSidebar"},"coding/README":{"id":"coding/README","title":"Developing Applications on TigerBeetle","description":"TigerBeetle is a domain-specific, Online Transaction Processing (OLTP) database.","sidebar":"tutorialSidebar"},"coding/recipes/balance-bounds":{"id":"coding/recipes/balance-bounds","title":"Balance Bounds","description":"It is easy to limit an account\'s balance using either","sidebar":"tutorialSidebar"},"coding/recipes/balance-conditional-transfers":{"id":"coding/recipes/balance-conditional-transfers","title":"Balance-Conditional Transfers","description":"In some use cases, you may want to execute a transfer if and only if an account has at least a","sidebar":"tutorialSidebar"},"coding/recipes/balance-invariant-transfers":{"id":"coding/recipes/balance-invariant-transfers","title":"Balance-invariant Transfers","description":"For some accounts, it may be useful to enforce","sidebar":"tutorialSidebar"},"coding/recipes/close-account":{"id":"coding/recipes/close-account","title":"Close Account","description":"In accounting, a closing entry calculates the net debit or credit balance for an account and then","sidebar":"tutorialSidebar"},"coding/recipes/correcting-transfers":{"id":"coding/recipes/correcting-transfers","title":"Correcting Transfers","description":"Transfers in TigerBeetle are immutable, so once they are created","sidebar":"tutorialSidebar"},"coding/recipes/currency-exchange":{"id":"coding/recipes/currency-exchange","title":"Currency Exchange","description":"Some applications require multiple currencies. For example, a bank may hold balances in many","sidebar":"tutorialSidebar"},"coding/recipes/multi-debit-credit-transfers":{"id":"coding/recipes/multi-debit-credit-transfers","title":"Multi-Debit, Multi-Credit Transfers","description":"TigerBeetle is designed for maximum performance. In order to keep it lean, the database only","sidebar":"tutorialSidebar"},"coding/recipes/rate-limiting":{"id":"coding/recipes/rate-limiting","title":"Rate Limiting","description":"TigerBeetle can be used to account for non-financial resources.","sidebar":"tutorialSidebar"},"coding/reliable-transaction-submission":{"id":"coding/reliable-transaction-submission","title":"Reliable Transaction Submission","description":"When making payments or recording transfers, it is important to ensure that they are recorded once","sidebar":"tutorialSidebar"},"coding/system-architecture":{"id":"coding/system-architecture","title":"TigerBeetle in Your System Architecture","description":"TigerBeetle is an Online Transaction Processing (OLTP) database built for safety and performance. It","sidebar":"tutorialSidebar"},"coding/time":{"id":"coding/time","title":"Time","description":"Time is a critical component of all distributed systems and databases. Within TigerBeetle, we keep","sidebar":"tutorialSidebar"},"coding/two-phase-transfers":{"id":"coding/two-phase-transfers","title":"Two-Phase Transfers","description":"A two-phase transfer moves funds in stages:","sidebar":"tutorialSidebar"},"operating/deploy":{"id":"operating/deploy","title":"Deploying for Production","description":"A TigerBeetle cluster is a set of machines each running the TigerBeetle server for strict","sidebar":"tutorialSidebar"},"operating/docker":{"id":"operating/docker","title":"Docker","description":"TigerBeetle can be run using Docker. However, it is not recommended.","sidebar":"tutorialSidebar"},"operating/hardware":{"id":"operating/hardware","title":"Hardware","description":"TigerBeetle is designed to operate and provide more than adequate performance even on commodity","sidebar":"tutorialSidebar"},"operating/linux":{"id":"operating/linux","title":"Deploying on Linux","description":"systemd","sidebar":"tutorialSidebar"},"operating/managed-service":{"id":"operating/managed-service","title":"Managed Service","description":"Want to use TigerBeetle in production, along with automated disaster recovery, monitoring, and","sidebar":"tutorialSidebar"},"operating/upgrading":{"id":"operating/upgrading","title":"Upgrading","description":"TigerBeetle guarantees storage stability and provides forward upgradeability. In other words, data","sidebar":"tutorialSidebar"},"quick-start":{"id":"quick-start","title":"Quick Start","description":"This page will guide you through downloading TigerBeetle, setting up a single- or multi-node","sidebar":"tutorialSidebar"},"README":{"id":"README","title":"TigerBeetle Docs","description":"TigerBeetle is a distributed financial accounting database designed for mission critical safety and","sidebar":"tutorialSidebar"},"reference/account":{"id":"reference/account","title":"Account","description":"An Account is a record storing the cumulative effect of committed transfers.","sidebar":"tutorialSidebar"},"reference/account-balance":{"id":"reference/account-balance","title":"AccountBalance","description":"An AccountBalance is a record storing the Account\'s balance at a given point in","sidebar":"tutorialSidebar"},"reference/account-filter":{"id":"reference/account-filter","title":"AccountFilter","description":"An AccountFilter is a record containing the filter parameters for querying","sidebar":"tutorialSidebar"},"reference/query-filter":{"id":"reference/query-filter","title":"QueryFilter","description":"A QueryFilter is a record containing the filter parameters for","sidebar":"tutorialSidebar"},"reference/requests/create_accounts":{"id":"reference/requests/create_accounts","title":"create_accounts","description":"Create one or more Accounts.","sidebar":"tutorialSidebar"},"reference/requests/create_transfers":{"id":"reference/requests/create_transfers","title":"create_transfers","description":"Create one or more Transfers. A successfully created transfer will modify the","sidebar":"tutorialSidebar"},"reference/requests/get_account_balances":{"id":"reference/requests/get_account_balances","title":"get_account_balances","description":"Fetch the historical AccountBalances of a given Account.","sidebar":"tutorialSidebar"},"reference/requests/get_account_transfers":{"id":"reference/requests/get_account_transfers","title":"get_account_transfers","description":"Fetch Transfers involving a given Account.","sidebar":"tutorialSidebar"},"reference/requests/lookup_accounts":{"id":"reference/requests/lookup_accounts","title":"lookup_accounts","description":"Fetch one or more accounts by their ids.","sidebar":"tutorialSidebar"},"reference/requests/lookup_transfers":{"id":"reference/requests/lookup_transfers","title":"lookup_transfers","description":"Fetch one or more transfers by their ids.","sidebar":"tutorialSidebar"},"reference/requests/query_accounts":{"id":"reference/requests/query_accounts","title":"query_accounts","description":"Query Accounts by the intersection of some fields and by timestamp range.","sidebar":"tutorialSidebar"},"reference/requests/query_transfers":{"id":"reference/requests/query_transfers","title":"query_transfers","description":"Query Transfers by the intersection of some fields and by timestamp range.","sidebar":"tutorialSidebar"},"reference/requests/README":{"id":"reference/requests/README","title":"Requests","description":"A request queries or updates the database state.","sidebar":"tutorialSidebar"},"reference/sessions":{"id":"reference/sessions","title":"Client Sessions","description":"A client session is a sequence of requests and replies sent between a","sidebar":"tutorialSidebar"},"reference/transfer":{"id":"reference/transfer","title":"Transfer","description":"A transfer is an immutable record of a financial transaction between two accounts.","sidebar":"tutorialSidebar"}}}')}}]);