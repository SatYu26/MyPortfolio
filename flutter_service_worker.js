'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "00f8c0f3c7762dd4a73aa8269a82e8dc",
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
"assets/assets/logo.png": "429cf9b4c298182ad17a62a8f6659d83",
"assets/assets/motion.png": "cc9b72174d035a62691e4cb5459577f7",
"assets/assets/MyPic.jpeg": "d98922525957e635e379afa60e263403",
"assets/assets/Programmer.png": "859afb7ab5d270cf40f1fe19115a945f",
"assets/assets/tfjs.png": "5d08d59d98432fe86f3687bce1bcb28b",
"assets/assets/url.png": "d80ec3719cefa9c17acde740ebf323a9",
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
"favicon.png": "507887dc4fd9f38dab1ce746230928a9",
"icons/android-icon-144x144.png": "d0f7610f59d909005a31827e63a9922d",
"icons/android-icon-192x192.png": "cc38c85fd3fc93872af896a359af1425",
"icons/android-icon-36x36.png": "3a546bc7942f8591a6a85861036328c2",
"icons/android-icon-48x48.png": "90284a7648538ede629b7b77c008dcde",
"icons/android-icon-72x72.png": "817ce41f327130621371be1323fd1a2b",
"icons/android-icon-96x96.png": "283bfde51d69ca66527cdfb7f08fc65c",
"icons/apple-icon-114x114.png": "29ad491608099ac968ffe13438048de2",
"icons/apple-icon-120x120.png": "1dc7f787491cde11f16f01d6323bdec8",
"icons/apple-icon-144x144.png": "d0f7610f59d909005a31827e63a9922d",
"icons/apple-icon-152x152.png": "6ffa6413408f6ab8c2a7577b5e98ea5b",
"icons/apple-icon-180x180.png": "9583eb37dd358fc53281f6c32b3dd73f",
"icons/apple-icon-57x57.png": "cf7110c74952ab0d2353583b037af918",
"icons/apple-icon-60x60.png": "bee3bfec93d3a6c8611588ca6fefeeae",
"icons/apple-icon-72x72.png": "817ce41f327130621371be1323fd1a2b",
"icons/apple-icon-76x76.png": "049eea4aeb743a77832c2cf842a31a0f",
"icons/apple-icon-precomposed.png": "ef0e7cb61428f9d8b0624c568286e988",
"icons/apple-icon.png": "ef0e7cb61428f9d8b0624c568286e988",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "507887dc4fd9f38dab1ce746230928a9",
"icons/favicon-32x32.png": "6300224290c4d2f616966534f477d54a",
"icons/favicon-96x96.png": "283bfde51d69ca66527cdfb7f08fc65c",
"icons/favicon.ico": "505d9f8548d13093c47666e753f17a34",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "d0f7610f59d909005a31827e63a9922d",
"icons/ms-icon-150x150.png": "6d6bdb78486b2b96e2da1aa95f8f3af3",
"icons/ms-icon-310x310.png": "7b1e1d0a4a80ad8687b99d817cd6375a",
"icons/ms-icon-70x70.png": "67fd65f248721ed2b3ec635549bbb13c",
"index.html": "6f36d9839517b77dd4de457c38726ec2",
"/": "6f36d9839517b77dd4de457c38726ec2",
"main.dart.js": "f877b64c4fd1a1f55da48235e7cd3215",
"manifest.json": "ec10c3128ecc935e1c52f8de93dd44ee"
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
