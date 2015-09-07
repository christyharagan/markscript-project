System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel@5.8.23",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "bluebird": "npm:bluebird@2.9.34",
    "core-js": "npm:core-js@1.1.4",
    "fs": "github:jspm/nodelibs-fs@0.1.2",
    "glob": "npm:glob@5.0.14",
    "http": "github:jspm/nodelibs-http@1.7.1",
    "koa": "npm:koa@1.0.0",
    "koa-body": "npm:koa-body@1.2.1",
    "koa-cors": "npm:koa-cors@0.0.16",
    "koa-mount": "npm:koa-mount@1.3.0",
    "koa-router": "npm:koa-router@5.1.2",
    "koa-rx-router": "npm:koa-rx-router@0.1.2",
    "marklogic": "npm:marklogic@1.0.2",
    "markscript": "npm:markscript@0.4.2",
    "markscript-koa": "npm:markscript-koa@0.1.0",
    "markscript-uservices": "npm:markscript-uservices@0.1.0",
    "ml-admin": "npm:ml-admin@0.3.0",
    "path": "github:jspm/nodelibs-path@0.1.0",
    "resolve": "npm:resolve@1.1.6",
    "rx": "npm:rx@2.5.3",
    "socket.io": "npm:socket.io@1.3.6",
    "socket.io-client": "npm:socket.io-client@1.3.6",
    "socket.io-client/package": "npm:socket.io-client.package",
    "speckle": "npm:speckle@0.1.3",
    "typescript": "npm:typescript@1.6.0-dev.20150825",
    "typescript-package": "npm:typescript-package@0.1.0",
    "typescript-schema": "npm:typescript-schema@0.5.0",
    "uservices": "npm:uservices@0.4.0",
    "uservices-socket.io-server": "npm:uservices-socket.io-server@0.3.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.3"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:accepts@1.2.13": {
      "mime-types": "npm:mime-types@2.1.6",
      "negotiator": "npm:negotiator@0.5.3"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ansi-green@0.1.1": {
      "ansi-wrap": "npm:ansi-wrap@0.1.0"
    },
    "npm:anymatch@1.3.0": {
      "arrify": "npm:arrify@1.0.0",
      "micromatch": "npm:micromatch@2.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:arr-diff@1.1.0": {
      "arr-flatten": "npm:arr-flatten@1.0.1",
      "array-slice": "npm:array-slice@0.2.3"
    },
    "npm:asn1.js@2.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:babel@5.8.23": {
      "babel-core": "npm:babel-core@5.8.23",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "chokidar": "npm:chokidar@1.0.5",
      "commander": "npm:commander@2.8.1",
      "convert-source-map": "npm:convert-source-map@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-readdir-recursive": "npm:fs-readdir-recursive@0.1.2",
      "glob": "npm:glob@5.0.14",
      "lodash": "npm:lodash@3.10.1",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "output-file-sync": "npm:output-file-sync@1.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-exists": "npm:path-exists@1.0.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readline": "github:jspm/nodelibs-readline@0.1.0",
      "repl": "github:jspm/nodelibs-repl@0.1.0",
      "slash": "npm:slash@1.0.0",
      "source-map": "npm:source-map@0.4.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:base64id@0.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:benchmark@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:better-assert@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "callsite": "npm:callsite@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:binary-extensions@1.3.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bindings@1.2.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:bluebird@2.9.34": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:brace-expansion@1.1.0": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:braces@1.8.1": {
      "expand-range": "npm:expand-range@1.8.1",
      "lazy-cache": "npm:lazy-cache@0.2.3",
      "preserve": "npm:preserve@0.2.0",
      "repeat-element": "npm:repeat-element@1.1.2"
    },
    "npm:browserify-aes@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.2",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.7",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.4.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:bufferutil@1.0.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@1.6.2"
    },
    "npm:bufferutil@1.1.0": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@1.8.4"
    },
    "npm:chokidar@1.0.5": {
      "anymatch": "npm:anymatch@1.3.0",
      "arrify": "npm:arrify@1.0.0",
      "async-each": "npm:async-each@0.1.6",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fsevents": "npm:fsevents@0.3.8",
      "glob-parent": "npm:glob-parent@1.2.0",
      "is-binary-path": "npm:is-binary-path@1.0.1",
      "is-glob": "npm:is-glob@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readdirp": "npm:readdirp@1.4.0"
    },
    "npm:co-body@4.0.0": {
      "qs": "npm:qs@4.0.0",
      "raw-body": "npm:raw-body@2.1.2",
      "type-is": "npm:type-is@1.6.8"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commonmark@0.12.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:composition@2.2.1": {
      "co": "npm:co@4.6.0",
      "native-or-bluebird": "npm:native-or-bluebird@1.2.0"
    },
    "npm:concat-stream@1.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@2.0.2",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:content-disposition@0.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:convert-source-map@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookies@0.5.0": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "keygrip": "npm:keygrip@1.0.1"
    },
    "npm:core-js@1.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.3",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:debug@0.7.4": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:debug@1.0.2": {
      "ms": "npm:ms@0.6.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@1.0.3": {
      "ms": "npm:ms@0.6.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.6.2",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.1.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:debug@2.2.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ms": "npm:ms@0.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:deepcopy@0.4.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:destroy@1.0.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:dicer@0.2.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "streamsearch": "npm:streamsearch@0.1.2",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:engine.io-client@1.5.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "component-inherit": "npm:component-inherit@0.0.3",
      "debug": "npm:debug@2.1.3",
      "engine.io-parser": "npm:engine.io-parser@1.2.1",
      "has-cors": "npm:has-cors@1.0.3",
      "indexof": "npm:indexof@0.0.1",
      "parsejson": "npm:parsejson@0.0.1",
      "parseqs": "npm:parseqs@0.0.2",
      "parseuri": "npm:parseuri@0.0.4",
      "ws": "npm:ws@0.7.1"
    },
    "npm:engine.io-parser@1.2.1": {
      "after": "npm:after@0.8.1",
      "arraybuffer.slice": "npm:arraybuffer.slice@0.0.6",
      "base64-arraybuffer": "npm:base64-arraybuffer@0.1.2",
      "blob": "npm:blob@0.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "has-binary": "npm:has-binary@0.1.5",
      "utf8": "npm:utf8@2.0.0"
    },
    "npm:engine.io@1.5.2": {
      "base64id": "npm:base64id@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "debug": "npm:debug@1.0.3",
      "engine.io-parser": "npm:engine.io-parser@1.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "ws": "npm:ws@0.7.2"
    },
    "npm:error-inject@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:expand-range@1.8.1": {
      "fill-range": "npm:fill-range@2.2.2"
    },
    "npm:extglob@0.3.1": {
      "ansi-green": "npm:ansi-green@0.1.1",
      "is-extglob": "npm:is-extglob@1.0.0",
      "success-symbol": "npm:success-symbol@0.1.0"
    },
    "npm:fill-range@2.2.2": {
      "is-number": "npm:is-number@1.1.2",
      "isobject": "npm:isobject@1.0.2",
      "randomatic": "npm:randomatic@1.1.0",
      "repeat-element": "npm:repeat-element@1.1.2",
      "repeat-string": "npm:repeat-string@1.5.2"
    },
    "npm:for-own@0.1.3": {
      "for-in": "npm:for-in@0.1.4"
    },
    "npm:formidable@1.0.17": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fs-readdir-recursive@0.1.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:fsevents@0.3.8": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nan": "npm:nan@2.0.8",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glob-base@0.2.0": {
      "glob-parent": "npm:glob-parent@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob-parent@1.2.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "is-glob": "npm:is-glob@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:glob@5.0.14": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.10",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-fs@4.1.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:has-binary-data@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-binary@0.1.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-binary@0.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:has-cors@1.0.3": {
      "global": "github:component/global@2.0.1"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:http-assert@1.1.1": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "http-errors": "npm:http-errors@1.3.1"
    },
    "npm:http-errors@1.3.1": {
      "inherits": "npm:inherits@2.0.1",
      "statuses": "npm:statuses@1.2.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-binary-path@1.0.1": {
      "binary-extensions": "npm:binary-extensions@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:is-equal-shallow@0.1.3": {
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:keygrip@1.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:kind-of@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:koa-body@1.2.1": {
      "co-body": "npm:co-body@4.0.0",
      "extend": "npm:extend@1.3.0",
      "formidable": "npm:formidable@1.0.17"
    },
    "npm:koa-is-json@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:koa-mount@1.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "debug": "npm:debug@2.1.0",
      "koa-compose": "npm:koa-compose@2.3.0"
    },
    "npm:koa-router@5.1.2": {
      "debug": "npm:debug@2.2.0",
      "http-errors": "npm:http-errors@1.3.1",
      "koa-compose": "npm:koa-compose@2.3.0",
      "methods": "npm:methods@1.1.1",
      "path-to-regexp": "npm:path-to-regexp@1.2.1"
    },
    "npm:koa-rx-router@0.1.2": {
      "koa-body": "npm:koa-body@1.2.1",
      "koa-router": "npm:koa-router@5.1.2",
      "rx": "npm:rx@2.5.3"
    },
    "npm:koa-send@1.3.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "debug": "npm:debug@2.2.0",
      "mz": "npm:mz@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:koa-static@1.4.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "debug": "npm:debug@2.1.0",
      "koa-send": "npm:koa-send@1.3.1",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:koa@1.0.0": {
      "accepts": "npm:accepts@1.2.13",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "co": "npm:co@4.6.0",
      "composition": "npm:composition@2.2.1",
      "content-disposition": "npm:content-disposition@0.5.0",
      "content-type": "npm:content-type@1.0.1",
      "cookies": "npm:cookies@0.5.0",
      "debug": "npm:debug@2.1.0",
      "delegates": "npm:delegates@0.1.0",
      "destroy": "npm:destroy@1.0.3",
      "error-inject": "npm:error-inject@1.0.0",
      "escape-html": "npm:escape-html@1.0.3",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fresh": "npm:fresh@0.3.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-assert": "npm:http-assert@1.1.1",
      "http-errors": "npm:http-errors@1.3.1",
      "koa-compose": "npm:koa-compose@2.3.0",
      "koa-is-json": "npm:koa-is-json@1.0.0",
      "mime-types": "npm:mime-types@2.1.6",
      "on-finished": "npm:on-finished@2.3.0",
      "only": "npm:only@0.0.2",
      "parseurl": "npm:parseurl@1.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "statuses": "npm:statuses@1.2.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "type-is": "npm:type-is@1.6.8",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "vary": "npm:vary@1.0.1"
    },
    "npm:lodash@3.10.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:marklogic@1.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bluebird": "npm:bluebird@2.9.34",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "concat-stream": "npm:concat-stream@1.5.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "deepcopy": "npm:deepcopy@0.4.0",
      "dicer": "npm:dicer@0.2.4",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "multipart-stream": "npm:multipart-stream@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "qs": "npm:qs@2.4.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@0.6.5",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "www-authenticate": "npm:www-authenticate@0.6.2",
      "yakaa": "npm:yakaa@1.0.1"
    },
    "npm:markscript-koa@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "koa": "npm:koa@1.0.0",
      "koa-cors": "npm:koa-cors@0.0.16",
      "koa-mount": "npm:koa-mount@1.3.0",
      "koa-rx-router": "npm:koa-rx-router@0.1.2",
      "koa-static": "npm:koa-static@1.4.9",
      "marklogic": "npm:marklogic@1.0.2",
      "markscript": "npm:markscript@0.1.1",
      "markscript-uservices": "npm:markscript-uservices@0.1.0",
      "ml-admin": "npm:ml-admin@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "socket.io": "npm:socket.io@1.3.6",
      "speckle": "npm:speckle@0.1.3",
      "uservices": "npm:uservices@0.4.0",
      "uservices-socket.io-server": "npm:uservices-socket.io-server@0.3.0"
    },
    "npm:markscript-uservices@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "marklogic": "npm:marklogic@1.0.2",
      "markscript": "npm:markscript@0.1.1",
      "ml-admin": "npm:ml-admin@0.3.0",
      "ml-typescript-definitions": "npm:ml-typescript-definitions@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "rx": "npm:rx@2.5.3",
      "speckle": "npm:speckle@0.1.3",
      "typescript": "npm:typescript@1.5.3",
      "typescript-package": "npm:typescript-package@0.1.0",
      "typescript-schema": "npm:typescript-schema@0.5.0",
      "uservices": "npm:uservices@0.4.0"
    },
    "npm:markscript@0.1.1": {
      "commander": "npm:commander@2.8.1",
      "commonmark": "npm:commonmark@0.12.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tree-walk": "npm:tree-walk@0.3.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:markscript@0.4.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "marked-ast": "npm:marked-ast@0.2.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:micromatch@2.2.0": {
      "arr-diff": "npm:arr-diff@1.1.0",
      "array-unique": "npm:array-unique@0.2.1",
      "braces": "npm:braces@1.8.1",
      "expand-brackets": "npm:expand-brackets@0.1.4",
      "extglob": "npm:extglob@0.3.1",
      "filename-regex": "npm:filename-regex@2.0.0",
      "is-glob": "npm:is-glob@1.1.3",
      "kind-of": "npm:kind-of@1.1.0",
      "object.omit": "npm:object.omit@1.1.0",
      "parse-glob": "npm:parse-glob@3.0.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "regex-cache": "npm:regex-cache@0.4.2"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.6": {
      "mime-db": "npm:mime-db@1.18.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:minimatch@0.2.14": {
      "lru-cache": "npm:lru-cache@2.6.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ml-admin@0.3.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "marklogic": "npm:marklogic@1.0.2",
      "ml-typescript-definitions": "npm:ml-typescript-definitions@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "speckle": "npm:speckle@0.1.3",
      "typescript-schema": "npm:typescript-schema@0.5.0",
      "uservices": "npm:uservices@0.4.0"
    },
    "npm:multipart-stream@1.0.0": {
      "inherits": "npm:inherits@2.0.1",
      "sandwich-stream": "npm:sandwich-stream@0.0.4",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:mz@1.3.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "native-or-bluebird": "npm:native-or-bluebird@1.2.0",
      "thenify": "npm:thenify@3.1.0",
      "thenify-all": "npm:thenify-all@1.6.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:nan@1.6.2": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:nan@1.8.4": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:nan@2.0.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:native-or-bluebird@1.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:object.omit@1.1.0": {
      "for-own": "npm:for-own@0.1.3",
      "isobject": "npm:isobject@1.0.2"
    },
    "npm:on-finished@2.3.0": {
      "ee-first": "npm:ee-first@1.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:options@0.0.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:output-file-sync@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:pako@0.2.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.2.0",
      "browserify-aes": "npm:browserify-aes@1.0.3",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-glob@3.0.2": {
      "glob-base": "npm:glob-base@0.2.0",
      "is-dotfile": "npm:is-dotfile@1.0.1",
      "is-extglob": "npm:is-extglob@1.0.0",
      "is-glob": "npm:is-glob@1.1.3"
    },
    "npm:parsejson@0.0.1": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseqs@0.0.2": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.2": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseuri@0.0.4": {
      "better-assert": "npm:better-assert@1.0.2"
    },
    "npm:parseurl@1.3.0": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-exists@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-to-regexp@1.2.1": {
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process-nextick-args@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:process@0.11.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randomatic@1.1.0": {
      "is-number": "npm:is-number@1.1.2",
      "kind-of": "npm:kind-of@1.1.0"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:raw-body@2.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@2.1.0",
      "iconv-lite": "npm:iconv-lite@0.4.11",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "unpipe": "npm:unpipe@1.0.0"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "process-nextick-args": "npm:process-nextick-args@1.0.2",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.1"
    },
    "npm:readdirp@1.4.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.2",
      "minimatch": "npm:minimatch@0.2.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:regex-cache@0.4.2": {
      "is-equal-shallow": "npm:is-equal-shallow@0.1.3",
      "is-primitive": "npm:is-primitive@2.0.0"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:rx@2.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sandwich-stream@0.0.4": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:sha.js@2.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:socket.io-adapter@0.3.1": {
      "debug": "npm:debug@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "object-keys": "npm:object-keys@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "socket.io-parser": "npm:socket.io-parser@2.2.2"
    },
    "npm:socket.io-client@1.3.6": {
      "backo2": "npm:backo2@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-bind": "npm:component-bind@1.0.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@0.7.4",
      "engine.io-client": "npm:engine.io-client@1.5.2",
      "has-binary": "npm:has-binary@0.1.6",
      "indexof": "npm:indexof@0.0.1",
      "object-component": "npm:object-component@0.0.3",
      "parseuri": "npm:parseuri@0.0.2",
      "socket.io-parser": "npm:socket.io-parser@2.2.4",
      "to-array": "npm:to-array@0.1.3"
    },
    "npm:socket.io-parser@2.2.2": {
      "benchmark": "npm:benchmark@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@0.7.4",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.2.6"
    },
    "npm:socket.io-parser@2.2.4": {
      "benchmark": "npm:benchmark@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "component-emitter": "npm:component-emitter@1.1.2",
      "debug": "npm:debug@0.7.4",
      "isarray": "npm:isarray@0.0.1",
      "json3": "npm:json3@3.2.6"
    },
    "npm:socket.io@1.3.6": {
      "debug": "npm:debug@2.1.0",
      "engine.io": "npm:engine.io@1.5.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has-binary-data": "npm:has-binary-data@0.1.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "socket.io-adapter": "npm:socket.io-adapter@0.3.1",
      "socket.io-client": "npm:socket.io-client@1.3.6",
      "socket.io-parser": "npm:socket.io-parser@2.2.4",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:statuses@1.2.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:streamsearch@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:success-symbol@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:thenify-all@1.6.0": {
      "thenify": "npm:thenify@3.1.0"
    },
    "npm:thenify@3.1.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "native-or-bluebird": "npm:native-or-bluebird@1.2.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.1"
    },
    "npm:tree-walk@0.3.0": {
      "util-extend": "npm:util-extend@1.0.1"
    },
    "npm:type-is@1.6.8": {
      "media-typer": "npm:media-typer@0.3.0",
      "mime-types": "npm:mime-types@2.1.6"
    },
    "npm:typescript-package@0.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "typescript": "npm:typescript@1.5.3",
      "typescript-schema": "npm:typescript-schema@0.5.0"
    },
    "npm:typescript-schema@0.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "typescript": "npm:typescript@1.5.3"
    },
    "npm:typescript@1.5.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readline": "github:jspm/nodelibs-readline@0.1.0"
    },
    "npm:typescript@1.6.0-dev.20150825": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readline": "github:jspm/nodelibs-readline@0.1.0"
    },
    "npm:ultron@1.0.2": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:uservices-socket.io-server@0.3.0": {
      "rx": "npm:rx@2.5.3",
      "socket.io": "npm:socket.io@1.3.6",
      "typescript": "npm:typescript@1.5.3",
      "typescript-schema": "npm:typescript-schema@0.5.0",
      "uservices": "npm:uservices@0.4.0"
    },
    "npm:uservices@0.4.0": {
      "typescript": "npm:typescript@1.5.3",
      "typescript-schema": "npm:typescript-schema@0.5.0"
    },
    "npm:utf-8-validate@1.0.1": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@1.6.2"
    },
    "npm:utf-8-validate@1.1.0": {
      "bindings": "npm:bindings@1.2.1",
      "nan": "npm:nan@1.8.4"
    },
    "npm:utf8@2.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:util-deprecate@1.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-extend@1.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:ws@0.7.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferutil": "npm:bufferutil@1.0.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.0.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:ws@0.7.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bufferutil": "npm:bufferutil@1.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "options": "npm:options@0.0.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "ultron": "npm:ultron@1.0.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utf-8-validate": "npm:utf-8-validate@1.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:www-authenticate@0.6.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:yakaa@1.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    }
  }
});
