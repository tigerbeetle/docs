const CACHE_NAME = "bbe61abcdc7dad53b62be50eaf584e868a3e609f";
const FILES_TO_CACHE = 
  ["/reference/","/reference/sessions/","/reference/account-balance/","/reference/query-filter/","/reference/account-filter/","/reference/account/","/reference/requests/query_accounts/","/reference/requests/create_accounts/","/reference/requests/","/reference/requests/lookup_transfers/","/reference/requests/get_account_balances/","/reference/requests/query_transfers/","/reference/requests/lookup_accounts/","/reference/requests/create_transfers/","/reference/requests/get_account_transfers/","/reference/transfer/","/CNAME","/start/","/","/coding/recipes/currency-exchange/","/coding/recipes/correcting-transfers/","/coding/recipes/","/coding/recipes/balance-bounds/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/close-account/","/coding/recipes/balance-conditional-transfers/","/coding/system-architecture/","/coding/api-changes/","/coding/","/coding/financial-accounting/","/coding/reliable-transaction-submission/","/coding/clients/rust/","/coding/clients/python/","/coding/clients/","/coding/clients/dotnet/","/coding/clients/node/","/coding/clients/go/","/coding/clients/java/","/coding/data-modeling/","/coding/requests/","/coding/linked-events/","/coding/time/","/coding/two-phase-transfers/","/style/style.css","/style/highlight.css","/404.html","/search-index.json","/operating/deploying/docker/","/operating/deploying/managed-service/","/operating/deploying/","/operating/deploying/systemd/","/operating/upgrading/","/operating/","/operating/cluster/","/operating/installing/","/operating/recovering/","/operating/monitoring/","/operating/cdc/","/operating/hardware/","/img/notfound-light.webp","/img/favicon.png","/img/notfound-dark.webp","/img/preview.webp","/concepts/performance/","/concepts/","/concepts/safety/","/concepts/debit-credit/","/concepts/oltp/","/quick-start/","/about/vopr/","/about/","/about/oltp/","/single-page/","/.nojekyll","/js/search.js"]
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
