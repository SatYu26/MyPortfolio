'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a2bc4c0bc6698336f92f80b8d8f55661",
"assets/assets/BG.jpeg": "165f7b802d0457ecb7bc05b38d11face",
"assets/assets/BGM.jpeg": "91704fec61b3867a9a1ee2f105a634cf",
"assets/assets/expressions.png": "92cb6293d0de5fc6028b71e2898c1c99",
"assets/assets/face-track.jpg": "4bd0b4439aed465155f178e7f29d29f5",
"assets/assets/faceRecog.jpg": "21a0dea7fcae74da5ae6a00f39991705",
"assets/assets/fashion.jpg": "cd7fad82e4dc3f3bacbd5d23a5ac002b",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/Friday.png": "1d9dada056fac071ddbf8f8bf9aa9807",
"assets/assets/git.png": "559e58f06acd05829d861f35a81e1f4e",
"assets/assets/hw.png": "c5176326e3f376875f1ec49459817433",
"assets/assets/InvisibilityCloak.jpg": "e04d03ce1346b7dc3581ea5e0f0077a7",
"assets/assets/logo.png": "0294058dbab5353b1e755ed74ea3fcb9",
"assets/assets/logoM.png": "620982c06eedcfcecbe2e2f507591225",
"assets/assets/motion.png": "cc9b72174d035a62691e4cb5459577f7",
"assets/assets/MyPic.jpeg": "d98922525957e635e379afa60e263403",
"assets/assets/Programmer.png": "859afb7ab5d270cf40f1fe19115a945f",
"assets/assets/tfjs.png": "5d08d59d98432fe86f3687bce1bcb28b",
"assets/assets/url.jpg": "5c0488ecfe387791a2c7473527055982",
"assets/assets/wifi.jpg": "a3196736f30f6999c5bb75908e775a88",
"assets/assets/wolverine.png": "674fb05db6da915e28a53c0af73f1916",
"assets/FontManifest.json": "cd60659878a00edd01e9c4db747bf319",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "1f04d59ac4f6c6cb78fa2737b406d56e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"favicon.png": "0469b1438508368f5708109998b1a257",
"icons/android-icon-144x144.png": "eef94b20555ed3207c9be20e4f766497",
"icons/android-icon-192x192.png": "c37207ea79ac7ec1cb65db8f12587065",
"icons/android-icon-36x36.png": "a1a5341452934cdcf9379de1170527ba",
"icons/android-icon-48x48.png": "248f634850cd5e687f78e51b68d54b60",
"icons/android-icon-72x72.png": "3fbc05ce08b43ef28dacd46279a10d6f",
"icons/android-icon-96x96.png": "4d044bf3147fd8b80a49d423ad2596e0",
"icons/apple-icon-114x114.png": "ac940f72bf2d713942da613525b86b01",
"icons/apple-icon-120x120.png": "2fd8999cb58a35931a9e0db19f953d41",
"icons/apple-icon-144x144.png": "eef94b20555ed3207c9be20e4f766497",
"icons/apple-icon-152x152.png": "a2137b00df29da601e8961b8d998a527",
"icons/apple-icon-180x180.png": "82e6e05977094bf21c17cbb0a2b55b01",
"icons/apple-icon-57x57.png": "c164d3c4cd8d8572b4a78910e95474bc",
"icons/apple-icon-60x60.png": "437233100919e5a2a88776015b8c4026",
"icons/apple-icon-72x72.png": "3fbc05ce08b43ef28dacd46279a10d6f",
"icons/apple-icon-76x76.png": "20817331b1af72ae1d8be4c07cea2615",
"icons/apple-icon-precomposed.png": "18eb1bc7a17fbb50926305e9ed2f67f7",
"icons/apple-icon.png": "18eb1bc7a17fbb50926305e9ed2f67f7",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "0469b1438508368f5708109998b1a257",
"icons/favicon-32x32.png": "65825021b5a9884706ea92edf0fd362f",
"icons/favicon-96x96.png": "4d044bf3147fd8b80a49d423ad2596e0",
"icons/favicon.ico": "9249e952131ddcb30acd6cd654f4543d",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "eef94b20555ed3207c9be20e4f766497",
"icons/ms-icon-150x150.png": "ce13226b35b7d5772222b0fa1775509f",
"icons/ms-icon-310x310.png": "3cc4507bf5dabce66a7219a14d34e02b",
"icons/ms-icon-70x70.png": "259267f3949d2b79ea805ce96c889026",
"index.html": "77b04fc0dee0fe71991a25090ab7e7ef",
"/": "77b04fc0dee0fe71991a25090ab7e7ef",
"main.dart.js": "539f83067be26f01f0a087610fbb7c2a",
"manifest.json": "da934d14c06e103553f31df4bfb043f0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
