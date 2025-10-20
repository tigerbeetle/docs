const CACHE_NAME = "559af20a43d8d42bec2e52cc961cc398f0424d1d";
const FILES_TO_CACHE = 
  ["/search-index.json","/operating/hardware/","/operating/upgrading/","/operating/cluster/","/operating/","/operating/recovering/","/operating/installing/","/operating/deploying/systemd/","/operating/deploying/","/operating/deploying/docker/","/operating/deploying/managed-service/","/operating/monitoring/","/operating/cdc/","/js/search.js","/style/style.css","/style/highlight.css","/coding/time/","/coding/requests/","/coding/data-modeling/","/coding/reliable-transaction-submission/","/coding/linked-events/","/coding/","/coding/financial-accounting/","/coding/system-architecture/","/coding/clients/node/","/coding/clients/dotnet/","/coding/clients/python/","/coding/clients/","/coding/clients/java/","/coding/clients/go/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/balance-bounds/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/","/coding/recipes/currency-exchange/","/coding/recipes/close-account/","/coding/recipes/multi-debit-credit-transfers/","/coding/two-phase-transfers/","/single-page/","/img/favicon.png","/img/notfound-light.webp","/img/preview.webp","/img/notfound-dark.webp","/","/404.html","/about/","/about/vopr/","/about/oltp/","/start/","/CNAME","/concepts/","/concepts/debit-credit/","/concepts/performance/","/concepts/safety/","/concepts/oltp/","/reference/requests/get_account_transfers/","/reference/requests/lookup_transfers/","/reference/requests/","/reference/requests/get_account_balances/","/reference/requests/create_transfers/","/reference/requests/query_accounts/","/reference/requests/create_accounts/","/reference/requests/lookup_accounts/","/reference/requests/query_transfers/","/reference/account-filter/","/reference/account-balance/","/reference/query-filter/","/reference/","/reference/transfer/","/reference/account/","/reference/sessions/","/quick-start/","/.nojekyll"]
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
