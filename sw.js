const CACHE_NAME = 'jlpt-n2-master-v15';

// 1. 앱을 처음 설치할 때 폰에 가둬둘 핵심 파일 목록 (앱 뼈대 + 1,362 단어 데이터베이스 전체)
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/words.js',
  '/questions.js',
  '/hanja_eum.js',
  '/hanja_huneum.js',
  'https://fonts.cdnfonts.com/css/pretendard',
  'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;800&family=Noto+Sans+KR:wght@400;500;700;800&display=swap'
];

self.addEventListener('install', event => {
  console.log('[Service Worker] 설치 완료. 핵심 자산을 폰 배경으로 무음 다운로드하는 중...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 2. 새로운 업데이트 발견 시 헌 캐시를 폐기하고 새로운 버전으로 갈아타는 강력한 청소기
self.addEventListener('activate', event => {
  console.log('[Service Worker] 활성화 완료. 오래된 옛날 버전 찌꺼기를 폐기합니다.');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 3. 비행기 모드나 지하철 빵빵 터지는 곳이든 상관없이 모든 통신을 가로채서 데이터 서버비용을 0원으로 만듦(순간이동 로직)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // 1. 폰에 안전하게 캐시된 것이 있는지 확인하고 0.001초 만에 꺼내준다.
      if (response) return response;

      // 2. 폰 캐시에 처음 보는 한자(API)나 데이터라면 통신(fetch)을 걸어온다.
      return fetch(event.request).then(fetchRes => {
        // 3. 이 통신으로 가져온 값 찌꺼기조차 오프라인에서 다시 볼 수 있게 캐시 금고(CACHE)에 복사본(clone)을 몰래 밀어 넣는다.
        return caches.open(CACHE_NAME).then(cache => {
          if(!event.request.url.startsWith('chrome-extension') && event.request.url.startsWith('http')) {
              cache.put(event.request, fetchRes.clone());
          }
          return fetchRes;
        });
      });
    }).catch(err => {
       console.error('[Service Worker] 완벽한 오프라인이 실패했어요!', err);
    })
  );
});
