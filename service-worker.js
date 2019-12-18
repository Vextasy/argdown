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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e1462a72043700d13eadf8734cb20568"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "0b234c1cf1ae1958f111579509cf52ee"
  },
  {
    "url": "android-chrome-256x256.png",
    "revision": "d257d914052dc3409eeeab27caa4267c"
  },
  {
    "url": "api/index.html",
    "revision": "14d4fb563b0f1987728c9e93c7b98f3d"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "b731ba118d89e5652404d9e9d82a219e"
  },
  {
    "url": "argdown-arrow-white.svg",
    "revision": "188460ee31d1efa9eda2e89c485777ca"
  },
  {
    "url": "argdown-arrow.png",
    "revision": "16eb1c797a9fabfb08ad373009309b26"
  },
  {
    "url": "argdown-mark.svg",
    "revision": "d3c4d784d8cc12c1cf9ccc4cdc149b13"
  },
  {
    "url": "argdown-viewer.js",
    "revision": "22c390fc8c2b3b18f4a837fd8e616656"
  },
  {
    "url": "assets/css/0.styles.16299560.css",
    "revision": "4becd3da93dc9ebe5b9c24b964039fc6"
  },
  {
    "url": "assets/img/argdown-vscode-greenspan-1.b6e85ee0.png",
    "revision": "b6e85ee01e7079435dfd9877642b01b0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b3b666bd.js",
    "revision": "7798a570f063ebd548efec6eccf269d2"
  },
  {
    "url": "assets/js/10.45e2c7a2.js",
    "revision": "c57d09e3236a50925eb9bb44626f2f35"
  },
  {
    "url": "assets/js/11.b4418014.js",
    "revision": "feed183eead4878cbc8319586ef0aa71"
  },
  {
    "url": "assets/js/12.324ef87c.js",
    "revision": "4d00787f55250d7075df85b8bcf35d51"
  },
  {
    "url": "assets/js/13.6010e235.js",
    "revision": "b5b8861ea0c6634010eedae7bde035fb"
  },
  {
    "url": "assets/js/14.4c94e4e1.js",
    "revision": "ede77ee9e1d28249434ede433a223278"
  },
  {
    "url": "assets/js/15.4f2f4efd.js",
    "revision": "f8f31ca4727165a1041812991aabf84b"
  },
  {
    "url": "assets/js/16.acaa801f.js",
    "revision": "72ca4c0df4cd2c1f673373b1f3e22223"
  },
  {
    "url": "assets/js/17.c2baba80.js",
    "revision": "2d46f303306e8a7ef8f20b0b8d37e7d0"
  },
  {
    "url": "assets/js/18.8b2b26c7.js",
    "revision": "8e9016a2fe9eaba55cd00789c2138bd1"
  },
  {
    "url": "assets/js/19.cd0b0bfa.js",
    "revision": "bd6535ab19fa7e4436eba7075a364594"
  },
  {
    "url": "assets/js/2.e72b4576.js",
    "revision": "34e0ec73797602972a59adf967497cb1"
  },
  {
    "url": "assets/js/20.76f76f9e.js",
    "revision": "16a83826a70ab97dadfea2acdca8c4da"
  },
  {
    "url": "assets/js/21.cca7737e.js",
    "revision": "3fff7f7c8f228eca27fdb81712cedbbc"
  },
  {
    "url": "assets/js/22.f1e0a52a.js",
    "revision": "b5b437141b96c7cde6b3606d07304f5d"
  },
  {
    "url": "assets/js/23.28173cbe.js",
    "revision": "afbf81f0eedbd78e47305e9c4a7544c6"
  },
  {
    "url": "assets/js/24.27ad051e.js",
    "revision": "beba6cd9a4bb2cfb9b792522c1cbd91a"
  },
  {
    "url": "assets/js/25.e05af54c.js",
    "revision": "de6816d1f678376224ba3fbcd1925771"
  },
  {
    "url": "assets/js/26.465b47f2.js",
    "revision": "151ad2807ed6b2f1de760753f9b236ba"
  },
  {
    "url": "assets/js/27.f74f5b05.js",
    "revision": "a4b7d37a00e38adc19be40364cf0ddec"
  },
  {
    "url": "assets/js/28.86667e9a.js",
    "revision": "ec42d8fbb32e21c8a5faad61f12ca47d"
  },
  {
    "url": "assets/js/29.e6024179.js",
    "revision": "d42d4be242798effca8da7cb8a56d116"
  },
  {
    "url": "assets/js/3.0e7cd2dc.js",
    "revision": "424409cfa75ea2dcad6bb849b8fdd532"
  },
  {
    "url": "assets/js/30.eb2526c8.js",
    "revision": "476686069e0fc4a70708eba404589063"
  },
  {
    "url": "assets/js/31.58bf43a1.js",
    "revision": "cb8369892c6bfbe146cf112d47f31ddd"
  },
  {
    "url": "assets/js/32.53f5936f.js",
    "revision": "01374c86037e2a8ba940820e3cd86edb"
  },
  {
    "url": "assets/js/33.d28bfec2.js",
    "revision": "5512b261c9ebba943bd39214719ce749"
  },
  {
    "url": "assets/js/34.56c9ade9.js",
    "revision": "39cd042e25c90b5cf60a55c745b98048"
  },
  {
    "url": "assets/js/35.9ef451ef.js",
    "revision": "aa8f204860f9189a1c6c21a4c50cdd01"
  },
  {
    "url": "assets/js/36.7f0d79b7.js",
    "revision": "7a371181d5b175f178049654d0fcad74"
  },
  {
    "url": "assets/js/37.ba4bee26.js",
    "revision": "cc34eb0f34ee37445e1e32f6d986f917"
  },
  {
    "url": "assets/js/38.1fb81883.js",
    "revision": "daeef96b18b09726cd2533353fac639a"
  },
  {
    "url": "assets/js/4.aad877cc.js",
    "revision": "b837425ed78d2be52a5007b9a80abd4c"
  },
  {
    "url": "assets/js/40.454e0ccd.js",
    "revision": "42142f35afc0ac3e5a5b40169565ff00"
  },
  {
    "url": "assets/js/5.d4f471e6.js",
    "revision": "9693754ede6e22f1cd5b98491e5aa381"
  },
  {
    "url": "assets/js/6.c9e37d5d.js",
    "revision": "f7989e52a25728fbafa1a52f80446cfa"
  },
  {
    "url": "assets/js/7.7709907d.js",
    "revision": "574d9a2de5149b00bc36071cba5e1987"
  },
  {
    "url": "assets/js/8.179a93c4.js",
    "revision": "5036687d75be4459e22bba248ef9440e"
  },
  {
    "url": "assets/js/9.34d64e62.js",
    "revision": "ee87f09c7ec2e533c83bf5c41c5e39c5"
  },
  {
    "url": "assets/js/app.99ec41cf.js",
    "revision": "38f58691635ac302a10a7c581dc55f43"
  },
  {
    "url": "assets/js/vendors~docsearch.70a069d8.js",
    "revision": "ec31f5aea16ec9994989f05d03652fb9"
  },
  {
    "url": "changes/2018.html",
    "revision": "6d037f47a2aa1cc3299d0aa8a5773a04"
  },
  {
    "url": "changes/index.html",
    "revision": "ccfa289bee0ab17effa106b1f9ab5ed3"
  },
  {
    "url": "compress.svg",
    "revision": "c5fefc2d5586fb61f5a709a6280b94c7"
  },
  {
    "url": "expand.svg",
    "revision": "651a07980327d5bcbb8851c06761dc74"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "0838bbbe758ce024287a339ce2f20026"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "9a454f3ef2a188c19ccae92bc59f975c"
  },
  {
    "url": "favicon.svg",
    "revision": "0f1956d1eb23e082af85d779ee3d56ba"
  },
  {
    "url": "googleb41049b30bb73985.html",
    "revision": "e3ed96111974b98cc5f9dbd3a9f4f5d9"
  },
  {
    "url": "guide/a-first-example.html",
    "revision": "4679f4166515bfc7fbbc860e64ee7976"
  },
  {
    "url": "guide/changing-the-graph-layout.html",
    "revision": "d895498a72eee729d3d11e4e1b402668"
  },
  {
    "url": "guide/changing-the-node-size.html",
    "revision": "32596d4add523cd7458a0d1faffcd42d"
  },
  {
    "url": "guide/changing-the-node-style.html",
    "revision": "76b2323a181d6997a701ff204676848e"
  },
  {
    "url": "guide/colorizing-maps.html",
    "revision": "c468b1b81a5438f882f8f05c002629b6"
  },
  {
    "url": "guide/configuration-cheatsheet.html",
    "revision": "f074616b71e152eb2f0c9873aca7d281"
  },
  {
    "url": "guide/configuration-in-the-frontmatter-section.html",
    "revision": "24898639e1a5819bf335b1401ed8208e"
  },
  {
    "url": "guide/configuration-with-config-files.html",
    "revision": "188c6c77b672277cd11d95a7cf47e38b"
  },
  {
    "url": "guide/configuration.html",
    "revision": "48e026b1bcb1e2c3b62c9b214cec5bb4"
  },
  {
    "url": "guide/creating-argument-maps.html",
    "revision": "d01a4b1e82f2dad866e736b832f3d576"
  },
  {
    "url": "guide/creating-edges.html",
    "revision": "b17ab87863c753a79e6bca709f7d1de5"
  },
  {
    "url": "guide/creating-group-nodes.html",
    "revision": "9e9296fe75531603098286c0dec02a4f"
  },
  {
    "url": "guide/creating-statement-and-argument-nodes.html",
    "revision": "e3ea35f9fe6d922fda28d63c6ab8dc7d"
  },
  {
    "url": "guide/elements-of-an-argument-map.html",
    "revision": "ec6b4ffaa416a4188751e74cd9ebb3f1"
  },
  {
    "url": "guide/extending-argdown.html",
    "revision": "c6a19ed2aadc9cab430075108532a916"
  },
  {
    "url": "guide/index.html",
    "revision": "ca7d64963d1f2c0bc3aec92822d3db46"
  },
  {
    "url": "guide/installing-the-commandline-tool.html",
    "revision": "c12b1f10acbe0636ec36c4a7cac0bd54"
  },
  {
    "url": "guide/installing-the-vscode-extension.html",
    "revision": "8df8f5b1b6215e18a51a818d90e0802f"
  },
  {
    "url": "guide/loading-custom-plugins-in-a-config-file.html",
    "revision": "0a6c895832c6561e1d385c37f922adce"
  },
  {
    "url": "guide/running-custom-processes.html",
    "revision": "08623e3904e19d956bd9b868e0a46544"
  },
  {
    "url": "guide/using-argdown-in-your-application.html",
    "revision": "f028089d0a6fe1db73851abf0a26dce5"
  },
  {
    "url": "guide/using-logical-symbols-and-emojis.html",
    "revision": "d7e070d528a524700e7c31d3709ae29a"
  },
  {
    "url": "guide/writing-custom-plugins.html",
    "revision": "8e99f663e0fd3a1ec6bf220a1e15b6c3"
  },
  {
    "url": "index.html",
    "revision": "8e399b09dbc0edf56169fb8f65a583d3"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "f1e527365592a25dd0039f28b0e2ae3c"
  },
  {
    "url": "river-deep.argdown-theme.css",
    "revision": "1dde29f17b6306f7f4da8df080e7c32d"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "2c742637dbf81b39dfe0870701ba5a6d"
  },
  {
    "url": "snow-in-spring.argdown-theme.css",
    "revision": "e54ec51114dff2777be92e683fd0e6cc"
  },
  {
    "url": "syntax/index.html",
    "revision": "5930e5fdfba6d7604420a5fe4c46138e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
