const CACHE_NAME = "cc1c06a924e49b11089c521b2209d34c92caaf18";
const FILES_TO_CACHE = 
  ["/CNAME","/img/preview.webp","/img/notfound-light.webp","/img/favicon.png","/img/notfound-dark.webp","/404.html","/about/vopr/","/about/oltp/","/about/","/","/operating/deploying/managed-service/","/operating/deploying/docker/","/operating/deploying/systemd/","/operating/deploying/","/operating/recovering/","/operating/cdc/","/operating/monitoring/","/operating/","/operating/installing/","/operating/hardware/","/operating/cluster/","/operating/upgrading/","/js/search.js","/coding/system-architecture/","/coding/time/","/coding/api-changes/","/coding/clients/go/","/coding/clients/rust/","/coding/clients/dotnet/","/coding/clients/ruby/","/coding/clients/python/","/coding/clients/node/","/coding/clients/","/coding/clients/java/","/coding/recipes/close-account/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/currency-exchange/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/balance-bounds/","/coding/data-modeling/","/coding/requests/","/coding/two-phase-transfers/","/coding/","/coding/financial-accounting/","/coding/linked-events/","/coding/reliable-transaction-submission/","/single-page/","/quick-start/","/concepts/oltp/","/concepts/debit-credit/","/concepts/performance/","/concepts/","/concepts/safety/","/reference/query-filter/","/reference/requests/lookup_accounts/","/reference/requests/create_transfers/","/reference/requests/lookup_transfers/","/reference/requests/query_accounts/","/reference/requests/create_accounts/","/reference/requests/","/reference/requests/get_account_transfers/","/reference/requests/get_account_balances/","/reference/requests/query_transfers/","/reference/account-balance/","/reference/account/","/reference/","/reference/account-filter/","/reference/sessions/","/reference/transfer/","/.nojekyll","/start/","/style/style.css","/style/highlight.css","/search-index.json"]
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
