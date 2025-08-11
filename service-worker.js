const CACHE_NAME = "3f330787b163f6dcb58639c7a80fb4d9ee93bf1e";
const FILES_TO_CACHE = 
  ["/single-page/","/js/search.js","/CNAME","/reference/sessions/","/reference/account-balance/","/reference/account-filter/","/reference/account/","/reference/query-filter/","/reference/transfer/","/reference/","/reference/requests/lookup_accounts/","/reference/requests/query_transfers/","/reference/requests/create_transfers/","/reference/requests/lookup_transfers/","/reference/requests/get_account_transfers/","/reference/requests/create_accounts/","/reference/requests/query_accounts/","/reference/requests/get_account_balances/","/reference/requests/","/search-index.json","/img/notfound-dark.webp","/img/preview.webp","/img/favicon.png","/img/notfound-light.webp","/start/","/404.html","/operating/cdc/","/operating/upgrading/","/operating/monitoring/","/operating/cluster/","/operating/recovering/","/operating/deploying/docker/","/operating/deploying/systemd/","/operating/deploying/managed-service/","/operating/deploying/","/operating/hardware/","/operating/installing/","/operating/","/style/style.css","/style/highlight.css","/quick-start/","/coding/time/","/coding/two-phase-transfers/","/coding/financial-accounting/","/coding/data-modeling/","/coding/system-architecture/","/coding/reliable-transaction-submission/","/coding/","/coding/recipes/balance-bounds/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/currency-exchange/","/coding/recipes/close-account/","/coding/recipes/rate-limiting/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/","/coding/requests/","/coding/clients/java/","/coding/clients/node/","/coding/clients/go/","/coding/clients/dotnet/","/coding/clients/python/","/coding/clients/","/coding/linked-events/","/.nojekyll","/concepts/performance/","/concepts/safety/","/concepts/debit-credit/","/concepts/oltp/","/concepts/","/","/about/vopr/","/about/oltp/","/about/"]
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
