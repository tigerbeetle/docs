const CACHE_NAME = "9222d66c78161bd727b13c55c11a9e44cd9e9856";
const FILES_TO_CACHE = 
  ["/about/vopr/","/about/","/about/oltp/","/quick-start/","/js/search.js","/reference/account-filter/","/reference/transfer/","/reference/account/","/reference/requests/query_accounts/","/reference/requests/get_account_transfers/","/reference/requests/lookup_transfers/","/reference/requests/lookup_accounts/","/reference/requests/create_transfers/","/reference/requests/get_account_balances/","/reference/requests/query_transfers/","/reference/requests/","/reference/requests/create_accounts/","/reference/sessions/","/reference/query-filter/","/reference/","/reference/account-balance/","/CNAME","/.nojekyll","/404.html","/style/highlight.css","/style/style.css","/coding/data-modeling/","/coding/recipes/correcting-transfers/","/coding/recipes/close-account/","/coding/recipes/balance-bounds/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/","/coding/recipes/currency-exchange/","/coding/recipes/balance-invariant-transfers/","/coding/financial-accounting/","/coding/linked-events/","/coding/system-architecture/","/coding/requests/","/coding/two-phase-transfers/","/coding/reliable-transaction-submission/","/coding/time/","/coding/clients/dotnet/","/coding/clients/go/","/coding/clients/rust/","/coding/clients/node/","/coding/clients/","/coding/clients/python/","/coding/clients/java/","/coding/api-changes/","/coding/","/operating/installing/","/operating/cdc/","/operating/deploying/docker/","/operating/deploying/systemd/","/operating/deploying/managed-service/","/operating/deploying/","/operating/cluster/","/operating/monitoring/","/operating/recovering/","/operating/upgrading/","/operating/hardware/","/operating/","/img/notfound-light.webp","/img/preview.webp","/img/notfound-dark.webp","/img/favicon.png","/single-page/","/start/","/","/concepts/performance/","/concepts/safety/","/concepts/debit-credit/","/concepts/","/concepts/oltp/","/search-index.json"]
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
