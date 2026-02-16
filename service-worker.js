const CACHE_NAME = "693c64bbf8e1bd5fd0cf040e0ce70d000f257e16";
const FILES_TO_CACHE = 
  ["/img/favicon.png","/img/notfound-light.webp","/img/notfound-dark.webp","/img/preview.webp","/operating/","/operating/cdc/","/operating/hardware/","/operating/upgrading/","/operating/deploying/","/operating/deploying/docker/","/operating/deploying/systemd/","/operating/deploying/managed-service/","/operating/monitoring/","/operating/cluster/","/operating/installing/","/operating/recovering/","/style/highlight.css","/style/style.css","/js/search.js","/quick-start/","/","/concepts/","/concepts/safety/","/concepts/performance/","/concepts/debit-credit/","/concepts/oltp/","/single-page/","/start/","/coding/time/","/coding/clients/python/","/coding/clients/java/","/coding/clients/dotnet/","/coding/clients/","/coding/clients/node/","/coding/clients/go/","/coding/clients/rust/","/coding/financial-accounting/","/coding/","/coding/data-modeling/","/coding/two-phase-transfers/","/coding/recipes/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/currency-exchange/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/close-account/","/coding/recipes/balance-bounds/","/coding/recipes/correcting-transfers/","/coding/linked-events/","/coding/requests/","/coding/reliable-transaction-submission/","/coding/system-architecture/","/404.html","/reference/","/reference/account-filter/","/reference/account-balance/","/reference/account/","/reference/query-filter/","/reference/transfer/","/reference/sessions/","/reference/requests/get_account_balances/","/reference/requests/","/reference/requests/query_accounts/","/reference/requests/lookup_accounts/","/reference/requests/query_transfers/","/reference/requests/create_transfers/","/reference/requests/lookup_transfers/","/reference/requests/create_accounts/","/reference/requests/get_account_transfers/","/about/","/about/vopr/","/about/oltp/","/.nojekyll","/CNAME","/search-index.json"]
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
