/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts(
  "https://cdn.jsdelivr.net/npm/workbox-sw@4.3.1/build/workbox-sw.min.js"
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "CreateActivity.3948a267.js",
    "revision": "225a87850552e9d825cd6eb9ab414061"
  },
  {
    "url": "CreateActivity.d08f1132.css",
    "revision": "b3d8458fa5bc2e0422f420e61f0eb6d3"
  },
  {
    "url": "index.html",
    "revision": "1f37849b12b979a1f47d86d98357c128"
  },
  {
    "url": "logo.bfd9c371.png",
    "revision": "59189f69115f94669464747ad53ec63e"
  },
  {
    "url": "src.3dee0cfc.js",
    "revision": "9af8fef61a0b688e9a479ce9476a433d"
  },
  {
    "url": "src.429bdaeb.css",
    "revision": "45580ece903434f875805da9fe5b2767"
  },
  {
    "url": "src.a7a0c34d.css",
    "revision": "46b97525fd96e313d6b70dea8fac70be"
  },
  {
    "url": "src.a7a0c34d.js",
    "revision": "6e8eccafa14e165426b9347b611c3b8f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();
