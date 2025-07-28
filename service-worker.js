const CACHE_NAME = "21a7954fb0986c03de78525af2e1d14a508d9473";
const FILES_TO_CACHE = 
  ["/quick-start/","/img/preview.webp","/img/favicon.png","/img/notfound-light.webp","/img/notfound-dark.webp","/start/","/CNAME","/coding/financial-accounting/","/coding/linked-events/","/coding/two-phase-transfers/","/coding/clients/dotnet/","/coding/clients/python/","/coding/clients/","/coding/clients/go/","/coding/clients/java/","/coding/clients/node/","/coding/","/coding/time/","/coding/data-modeling/","/coding/reliable-transaction-submission/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/currency-exchange/","/coding/recipes/close-account/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/","/coding/recipes/balance-bounds/","/coding/recipes/correcting-transfers/","/coding/recipes/rate-limiting/","/coding/system-architecture/","/coding/requests/","/operating/hardware/","/operating/cdc/","/operating/","/operating/installing/","/operating/recovering/","/operating/upgrading/","/operating/cluster/","/operating/deploying/managed-service/","/operating/deploying/","/operating/deploying/docker/","/operating/deploying/systemd/","/operating/monitoring/","/concepts/performance/","/concepts/debit-credit/","/concepts/safety/","/concepts/oltp/","/concepts/","/404.html","/","/style/style.css","/style/highlight.css","/reference/account-balance/","/reference/transfer/","/reference/","/reference/query-filter/","/reference/account-filter/","/reference/sessions/","/reference/account/","/reference/requests/get_account_balances/","/reference/requests/get_account_transfers/","/reference/requests/","/reference/requests/lookup_transfers/","/reference/requests/lookup_accounts/","/reference/requests/create_accounts/","/reference/requests/query_accounts/","/reference/requests/query_transfers/","/reference/requests/create_transfers/","/js/search.js","/single-page/","/about/oltp/","/about/","/about/vopr/","/search-index.json","/.nojekyll"]
;

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const normalizedUrl = normalizeUrl(event.request.url);

  event.respondWith(
    caches.match(normalizedUrl).then(response => {
      return response || fetch(event.request);
    })
  );
});

function normalizeUrl(url) {
  const urlObj = new URL(url);

  if (urlObj.search) {
    urlObj.search = "";
  }

  return urlObj.toString();
}
