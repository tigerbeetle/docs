const CACHE_NAME = "23714836441909f93f3d0ba80cdac4c27aa0a5d0";
const FILES_TO_CACHE = 
  ["/about/oltp/","/about/","/about/vopr/","/CNAME","/reference/transfer/","/reference/requests/create_transfers/","/reference/requests/get_account_transfers/","/reference/requests/create_accounts/","/reference/requests/lookup_transfers/","/reference/requests/query_accounts/","/reference/requests/","/reference/requests/lookup_accounts/","/reference/requests/get_account_balances/","/reference/requests/query_transfers/","/reference/","/reference/sessions/","/reference/account-balance/","/reference/account-filter/","/reference/account/","/reference/query-filter/","/search-index.json","/concepts/oltp/","/concepts/performance/","/concepts/debit-credit/","/concepts/","/concepts/safety/","/style/style.css","/style/highlight.css","/operating/upgrading/","/operating/installing/","/operating/","/operating/cluster/","/operating/deploying/systemd/","/operating/deploying/managed-service/","/operating/deploying/","/operating/deploying/docker/","/operating/hardware/","/","/coding/clients/java/","/coding/clients/go/","/coding/clients/python/","/coding/clients/","/coding/clients/dotnet/","/coding/clients/node/","/coding/recipes/correcting-transfers/","/coding/recipes/balance-conditional-transfers/","/coding/recipes/rate-limiting/","/coding/recipes/close-account/","/coding/recipes/","/coding/recipes/balance-invariant-transfers/","/coding/recipes/multi-debit-credit-transfers/","/coding/recipes/balance-bounds/","/coding/recipes/currency-exchange/","/coding/requests/","/coding/financial-accounting/","/coding/time/","/coding/","/coding/data-modeling/","/coding/system-architecture/","/coding/two-phase-transfers/","/coding/linked-events/","/coding/reliable-transaction-submission/","/single-page/","/.nojekyll","/js/search.js","/quick-start/","/start/","/404.html","/img/notfound-dark.webp","/img/notfound-light.webp","/img/favicon.png","/img/preview.webp"]
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
