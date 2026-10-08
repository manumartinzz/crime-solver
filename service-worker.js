// IMPORTANTE: sempre que alterar a lista de arquivos ou quiser forçar uma
// limpeza total do cache, aumente o número da versão (v3 -> v4 -> v5...).
const CACHE_NAME = "crime-solver-v4";

// Arquivos pré-carregados na instalação. Cada um é tratado separadamente:
// se algum não existir (ex.: uma foto ainda não enviada), a instalação
// NÃO falha — o arquivo apenas deixa de ser pré-carregado.
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./perfil-001.jpg",
  "./corpo-todo-001.jpg",
  "./cena-001.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        FILES_TO_CACHE.map((file) =>
          cache.add(file).catch((error) => {
            console.warn("[SW] Não foi possível pré-carregar:", file, error);
          })
        )
      )
    )
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    ).then(() => self.clients.claim())
  );
});

// Arquivos do próprio site: tenta a rede primeiro (assim suas atualizações
// no GitHub aparecem sem precisar mexer na versão) e usa o cache se estiver offline.
async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) return cached;
    if (request.mode === "navigate") {
      const fallback = await cache.match("./index.html");
      if (fallback) return fallback;
    }
    return Response.error();
  }
}

// Recursos de outros domínios (Tailwind, Lucide, fontes, placeholders):
// responde com o cache na hora e atualiza em segundo plano.
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  const network = fetch(request)
    .then((response) => {
      if (response && (response.ok || response.type === "opaque")) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => cached || Response.error());

  return cached || network;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  if (url.origin === self.location.origin) {
    event.respondWith(networkFirst(request));
  } else {
    event.respondWith(staleWhileRevalidate(request));
  }
});
