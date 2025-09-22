const CACHE_NAME = "bebc1a2eae1645ba54dde5fcdda63979bd2c945c";
const FILES_TO_CACHE = 
  ["/.nojekyll","/reference/requests/create_transfers/","/reference/requests/lookup_transfers/","/reference/requests/lookup_accounts/","/reference/requests/query_accounts/","/reference/requests/get_account_balances/","/reference/requests/query_transfers/","/reference/requests/get_account_transfers/","/reference/requests/create_accounts/","/reference/requests/","/reference/transfer/","/reference/account/","/reference/sessions/","/reference/query-filter/","/reference/account-balance/","/reference/account-filter/","/reference/","/CNAME","/js/search.js","/404.html","/search-index.json","/style/style.css","/style/highlight.css","/operating/installing/","/operating/monitoring/","/operating/recovering/","/operating/upgrading/","/operating/hardware/","/operating/cdc/","/operating/cluster/","/operating/","/operating/deploying/systemd/","/operating/deploying/docker/","/operating/deploying/managed-service/","/operating/deploying/","/start/","/img/preview.webp","/img/notfound-dark.webp","/img/notfound-light.webp","/img/favicon.png","/single-page/","/concepts/debit-credit/","/concepts/performance/","/concepts/oltp/","/concepts/","/concepts/safety/","/coding/requests/","/coding/clients/python/","/coding/clients/go/","/coding/clients/node/","/coding/clients/dotnet/","/coding/clients/","/coding/clients/java/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/balance-bounds/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/correcting-transfers/","/coding/recipes/currency-exchange/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/close-account/","/coding/recipes/","/coding/recipes/rate-limiting/","/coding/data-modeling/","/coding/two-phase-transfers/","/coding/system-architecture/","/coding/reliable-transaction-submission/","/coding/linked-events/","/coding/time/","/coding/financial-accounting/","/coding/","/","/about/vopr/","/about/oltp/","/about/","/quick-start/"]
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
