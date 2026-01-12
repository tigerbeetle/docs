const CACHE_NAME = "ebc92640850dbd315edd965f8c3f18a750dd79b7";
const FILES_TO_CACHE = 
  ["/coding/financial-accounting/","/coding/recipes/currency-exchange/","/coding/recipes/close-account/","/coding/recipes/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/correcting-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/balance-bounds/","/coding/recipes/balance-conditional-transfers/","/coding/linked-events/","/coding/data-modeling/","/coding/","/coding/requests/","/coding/two-phase-transfers/","/coding/system-architecture/","/coding/reliable-transaction-submission/","/coding/clients/python/","/coding/clients/rust/","/coding/clients/","/coding/clients/java/","/coding/clients/go/","/coding/clients/dotnet/","/coding/clients/node/","/coding/time/","/search-index.json","/.nojekyll","/single-page/","/img/notfound-dark.webp","/img/favicon.png","/img/notfound-light.webp","/img/preview.webp","/","/reference/","/reference/requests/lookup_accounts/","/reference/requests/get_account_transfers/","/reference/requests/query_transfers/","/reference/requests/","/reference/requests/query_accounts/","/reference/requests/create_accounts/","/reference/requests/get_account_balances/","/reference/requests/lookup_transfers/","/reference/requests/create_transfers/","/reference/transfer/","/reference/query-filter/","/reference/sessions/","/reference/account-filter/","/reference/account-balance/","/reference/account/","/concepts/","/concepts/performance/","/concepts/debit-credit/","/concepts/safety/","/concepts/oltp/","/quick-start/","/style/style.css","/style/highlight.css","/operating/upgrading/","/operating/installing/","/operating/monitoring/","/operating/cdc/","/operating/","/operating/cluster/","/operating/recovering/","/operating/hardware/","/operating/deploying/managed-service/","/operating/deploying/systemd/","/operating/deploying/","/operating/deploying/docker/","/CNAME","/start/","/404.html","/about/","/about/vopr/","/about/oltp/","/js/search.js"]
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
