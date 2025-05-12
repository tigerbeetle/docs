const CACHE_NAME = "fbbcdb905f1f6f64fcc1fc5e7f8fb7eb8d7d6f86";
const FILES_TO_CACHE = 
  ["/","/style/style.css","/style/highlight.css","/operating/deploying/","/operating/deploying/systemd/","/operating/deploying/docker/","/operating/deploying/managed-service/","/operating/","/operating/cluster/","/operating/installing/","/operating/upgrading/","/operating/hardware/","/quick-start/","/reference/","/reference/requests/get_account_transfers/","/reference/requests/","/reference/requests/get_account_balances/","/reference/requests/lookup_transfers/","/reference/requests/lookup_accounts/","/reference/requests/create_transfers/","/reference/requests/query_accounts/","/reference/requests/query_transfers/","/reference/requests/create_accounts/","/reference/transfer/","/reference/sessions/","/reference/account/","/reference/account-balance/","/reference/query-filter/","/reference/account-filter/","/single-page/","/404.html","/coding/","/coding/data-modeling/","/coding/time/","/coding/requests/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/balance-bounds/","/coding/recipes/close-account/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/currency-exchange/","/coding/recipes/rate-limiting/","/coding/two-phase-transfers/","/coding/reliable-transaction-submission/","/coding/clients/","/coding/clients/node/","/coding/clients/java/","/coding/clients/python/","/coding/clients/dotnet/","/coding/clients/go/","/coding/linked-events/","/coding/system-architecture/","/coding/financial-accounting/","/js/search.js","/CNAME","/img/notfound-dark.webp","/img/notfound-light.webp","/img/preview.webp","/img/favicon.png","/concepts/","/concepts/safety/","/concepts/debit-credit/","/concepts/performance/","/concepts/oltp/","/search-index.json","/start/","/about/","/about/vopr/","/about/oltp/","/.nojekyll"]
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
