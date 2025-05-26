const CACHE_NAME = "fc04ee56fc890919bda8ee894542b4abd031818d";
const FILES_TO_CACHE = 
  ["/single-page/","/reference/sessions/","/reference/requests/get_account_balances/","/reference/requests/get_account_transfers/","/reference/requests/create_accounts/","/reference/requests/query_accounts/","/reference/requests/create_transfers/","/reference/requests/lookup_accounts/","/reference/requests/lookup_transfers/","/reference/requests/","/reference/requests/query_transfers/","/reference/account-balance/","/reference/account/","/reference/query-filter/","/reference/account-filter/","/reference/transfer/","/reference/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/close-account/","/coding/recipes/balance-bounds/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/currency-exchange/","/coding/recipes/correcting-transfers/","/coding/recipes/","/coding/requests/","/coding/linked-events/","/coding/time/","/coding/system-architecture/","/coding/data-modeling/","/coding/financial-accounting/","/coding/clients/dotnet/","/coding/clients/node/","/coding/clients/go/","/coding/clients/java/","/coding/clients/","/coding/clients/python/","/coding/","/coding/reliable-transaction-submission/","/coding/two-phase-transfers/","/operating/installing/","/operating/hardware/","/operating/upgrading/","/operating/","/operating/deploying/managed-service/","/operating/deploying/systemd/","/operating/deploying/docker/","/operating/deploying/","/operating/cluster/","/CNAME","/img/preview.webp","/img/notfound-light.webp","/img/notfound-dark.webp","/img/favicon.png","/quick-start/","/concepts/debit-credit/","/concepts/performance/","/concepts/oltp/","/concepts/safety/","/concepts/","/404.html","/js/search.js","/start/","/search-index.json","/about/vopr/","/about/oltp/","/about/","/style/highlight.css","/style/style.css","/.nojekyll","/"]
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
