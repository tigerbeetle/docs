const CACHE_NAME = "dafde463f9dc75a81bb834fa8017012faa6dc951";
const FILES_TO_CACHE = 
  ["/start/","/about/","/about/oltp/","/about/vopr/","/quick-start/","/style/highlight.css","/style/style.css","/single-page/","/404.html","/coding/two-phase-transfers/","/coding/clients/python/","/coding/clients/node/","/coding/clients/dotnet/","/coding/clients/java/","/coding/clients/","/coding/clients/go/","/coding/requests/","/coding/reliable-transaction-submission/","/coding/linked-events/","/coding/system-architecture/","/coding/","/coding/financial-accounting/","/coding/data-modeling/","/coding/time/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-bounds/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/currency-exchange/","/coding/recipes/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/close-account/","/coding/recipes/rate-limiting/","/img/notfound-dark.webp","/img/preview.webp","/img/notfound-light.webp","/img/favicon.png","/js/search.js","/","/CNAME","/concepts/debit-credit/","/concepts/safety/","/concepts/performance/","/concepts/","/concepts/oltp/","/reference/account/","/reference/query-filter/","/reference/transfer/","/reference/account-balance/","/reference/requests/create_transfers/","/reference/requests/query_accounts/","/reference/requests/get_account_balances/","/reference/requests/lookup_accounts/","/reference/requests/query_transfers/","/reference/requests/create_accounts/","/reference/requests/","/reference/requests/lookup_transfers/","/reference/requests/get_account_transfers/","/reference/sessions/","/reference/","/reference/account-filter/","/search-index.json","/operating/monitoring/","/operating/hardware/","/operating/deploying/docker/","/operating/deploying/systemd/","/operating/deploying/","/operating/deploying/managed-service/","/operating/installing/","/operating/recovering/","/operating/cdc/","/operating/","/operating/upgrading/","/operating/cluster/","/.nojekyll"]
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
