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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fceb55c8241543d5f0918f3a3efdaef2"
  },
  {
    "url": "404/index.html",
    "revision": "fceb55c8241543d5f0918f3a3efdaef2"
  },
  {
    "url": "about/index.html",
    "revision": "2a38207fe8b2e14d2a24c6dd3f56c37a"
  },
  {
    "url": "assets/css/0.styles.3e905d08.css",
    "revision": "3d7bec4fbe6ab1cf0a6498a31468dc6f"
  },
  {
    "url": "assets/js/app.6220b298.js",
    "revision": "f48421fa1a322ccafc61381823e0ac12"
  },
  {
    "url": "assets/js/page--node-modules--gridsome--app--pages--404-vue.76c159e1.js",
    "revision": "ea388aa7773fb07761b9a11df130e53c"
  },
  {
    "url": "assets/js/page--src--pages--about-vue.de42b52e.js",
    "revision": "69d88244c0f528cd3a4e61e49b47a6f8"
  },
  {
    "url": "assets/js/page--src--pages--index-vue.f392aef0.js",
    "revision": "5cacfa04f7c45e36f2ee0148ee8ba064"
  },
  {
    "url": "assets/js/page--src--pages--instagram-vue.7f23361e.js",
    "revision": "154f8f7c4aaf544a3bb35c562fc000f6"
  },
  {
    "url": "assets/js/page--src--pages--login-vue.b148a391.js",
    "revision": "1d92a68223182b0bcf37964088a63013"
  },
  {
    "url": "assets/js/vendors~page--src--pages--instagram-vue.c925bb52.js",
    "revision": "bf31c829f9fe69aac5b14a605f62860f"
  },
  {
    "url": "assets/static/favicon.1539b60.9bb7ffa.png",
    "revision": "d2a802ddb91346ba1bacd54ab5d9aace"
  },
  {
    "url": "assets/static/favicon.62d22cb.9bb7ffa.png",
    "revision": "ff82882c2da0bb17285633973ae6d65b"
  },
  {
    "url": "assets/static/favicon.7b22250.9bb7ffa.png",
    "revision": "f9974bad556938f2707848d1814f13a1"
  },
  {
    "url": "assets/static/favicon.ac8d93a.9bb7ffa.png",
    "revision": "f7be2331ae350e64cd1600af80c3683b"
  },
  {
    "url": "assets/static/favicon.b9532cc.9bb7ffa.png",
    "revision": "466eb6d2639408db8b9b58c037297d53"
  },
  {
    "url": "assets/static/favicon.ce0531f.9bb7ffa.png",
    "revision": "69003266b28a85cbbdb7b0ca7c6757f3"
  },
  {
    "url": "assets/static/favicon.dc0cdc5.9bb7ffa.png",
    "revision": "7cf51ec517585d2700f4feb85597548d"
  },
  {
    "url": "assets/static/favicon.f22e9f3.9bb7ffa.png",
    "revision": "9fff9a2ceadee823efa116130802fb9a"
  },
  {
    "url": "assets/static/folder.adb85df.516fc17.png",
    "revision": "865b8255c0ddcfc7988614d8b94b5909"
  },
  {
    "url": "assets/static/home.adb85df.c4601ab.png",
    "revision": "cc8b10f6e4d5921313f0f5c7ca754aa8"
  },
  {
    "url": "assets/static/instagram.adb85df.aa3fc1b.png",
    "revision": "34c4024d0d307fd1ecc10300576278fd"
  },
  {
    "url": "assets/static/todo.adb85df.6a14dc5.png",
    "revision": "9ef18e63e4caff8eef84d8419ff9b1b3"
  },
  {
    "url": "index.html",
    "revision": "ad9e1ced6bd49e804b0cf627c0081d88"
  },
  {
    "url": "instagram/index.html",
    "revision": "6c2819c1690894655f824266773ad7a0"
  },
  {
    "url": "login/index.html",
    "revision": "1ab425bad31490136dd3e08aa9ab3148"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
