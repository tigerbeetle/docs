const CACHE_NAME = "cc1c06a924e49b11089c521b2209d34c92caaf18";
const FILES_TO_CACHE = 
  ["/coding/financial-accounting/","/coding/","/coding/api-changes/","/coding/data-modeling/","/coding/clients/python/","/coding/clients/","/coding/clients/node/","/coding/clients/ruby/","/coding/clients/go/","/coding/clients/rust/","/coding/clients/java/","/coding/clients/dotnet/","/coding/two-phase-transfers/","/coding/linked-events/","/coding/reliable-transaction-submission/","/coding/system-architecture/","/coding/requests/","/coding/recipes/rate-limiting/","/coding/recipes/balance-bounds/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/close-account/","/coding/recipes/currency-exchange/","/coding/recipes/multi-debit-credit-transfers/","/coding/time/","/quick-start/","/search-index.json","/start/","/","/concepts/safety/","/concepts/","/concepts/oltp/","/concepts/debit-credit/","/concepts/performance/","/single-page/","/about/","/about/oltp/","/about/vopr/","/.nojekyll","/CNAME","/404.html","/js/search.js","/reference/account-balance/","/reference/","/reference/transfer/","/reference/query-filter/","/reference/requests/lookup_transfers/","/reference/requests/","/reference/requests/query_accounts/","/reference/requests/get_account_balances/","/reference/requests/lookup_accounts/","/reference/requests/get_account_transfers/","/reference/requests/create_accounts/","/reference/requests/create_transfers/","/reference/requests/query_transfers/","/reference/account-filter/","/reference/sessions/","/reference/account/","/operating/cdc/","/operating/","/operating/hardware/","/operating/deploying/","/operating/deploying/docker/","/operating/deploying/managed-service/","/operating/deploying/systemd/","/operating/recovering/","/operating/cluster/","/operating/monitoring/","/operating/installing/","/operating/upgrading/","/style/style.css","/style/highlight.css","/img/favicon.png","/img/preview.webp","/img/notfound-dark.webp","/img/notfound-light.webp"]
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
