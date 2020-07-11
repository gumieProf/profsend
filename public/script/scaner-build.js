/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/script/scaner.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/is-electron/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-electron/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {// https://github.com/electron/electron/issues/2288\nfunction isElectron() {\n    // Renderer process\n    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {\n        return true;\n    }\n\n    // Main process\n    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {\n        return true;\n    }\n\n    // Detect the user agent when the `nodeIntegration` option is set to true\n    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {\n        return true;\n    }\n\n    return false;\n}\n\nmodule.exports = isElectron;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/is-electron/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : undefined\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n}\n\n\n//# sourceURL=webpack:///./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./node_modules/resolve-url/resolve-url.js":
/*!*************************************************!*\
  !*** ./node_modules/resolve-url/resolve-url.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright 2014 Simon Lydell\r\n// X11 (“MIT”) Licensed. (See LICENSE.)\r\n\r\nvoid (function(root, factory) {\r\n  if (true) {\r\n    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\r\n  } else {}\r\n}(this, function() {\r\n\r\n  function resolveUrl(/* ...urls */) {\r\n    var numUrls = arguments.length\r\n\r\n    if (numUrls === 0) {\r\n      throw new Error(\"resolveUrl requires at least one argument; got none.\")\r\n    }\r\n\r\n    var base = document.createElement(\"base\")\r\n    base.href = arguments[0]\r\n\r\n    if (numUrls === 1) {\r\n      return base.href\r\n    }\r\n\r\n    var head = document.getElementsByTagName(\"head\")[0]\r\n    head.insertBefore(base, head.firstChild)\r\n\r\n    var a = document.createElement(\"a\")\r\n    var resolved\r\n\r\n    for (var index = 1; index < numUrls; index++) {\r\n      a.href = arguments[index]\r\n      resolved = a.href\r\n      base.href = resolved\r\n    }\r\n\r\n    head.removeChild(base)\r\n\r\n    return resolved\r\n  }\r\n\r\n  return resolveUrl\r\n\r\n}));\r\n\n\n//# sourceURL=webpack:///./node_modules/resolve-url/resolve-url.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/package.json":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/package.json ***!
  \************************************************/
/*! exports provided: name, version, description, main, types, unpkg, jsdelivr, scripts, browser, author, contributors, license, devDependencies, dependencies, repository, bugs, homepage, collective, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"tesseract.js\\\",\\\"version\\\":\\\"2.1.1\\\",\\\"description\\\":\\\"Pure Javascript Multilingual OCR\\\",\\\"main\\\":\\\"src/index.js\\\",\\\"types\\\":\\\"src/index.d.ts\\\",\\\"unpkg\\\":\\\"dist/tesseract.min.js\\\",\\\"jsdelivr\\\":\\\"dist/tesseract.min.js\\\",\\\"scripts\\\":{\\\"start\\\":\\\"node scripts/server.js\\\",\\\"build\\\":\\\"rimraf dist && webpack --config scripts/webpack.config.prod.js\\\",\\\"profile:tesseract\\\":\\\"webpack-bundle-analyzer dist/tesseract-stats.json\\\",\\\"profile:worker\\\":\\\"webpack-bundle-analyzer dist/worker-stats.json\\\",\\\"prepublishOnly\\\":\\\"npm run build\\\",\\\"wait\\\":\\\"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js\\\",\\\"test\\\":\\\"npm-run-all -p -r start test:all\\\",\\\"test:all\\\":\\\"npm-run-all wait test:browser:* test:node:all\\\",\\\"test:node\\\":\\\"nyc mocha --exit --bail --require ./scripts/test-helper.js\\\",\\\"test:node:all\\\":\\\"npm run test:node -- ./tests/*.test.js\\\",\\\"test:browser-tpl\\\":\\\"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000\\\",\\\"test:browser:detect\\\":\\\"npm run test:browser-tpl -- -f ./tests/detect.test.html\\\",\\\"test:browser:recognize\\\":\\\"npm run test:browser-tpl -- -f ./tests/recognize.test.html\\\",\\\"test:browser:scheduler\\\":\\\"npm run test:browser-tpl -- -f ./tests/scheduler.test.html\\\",\\\"test:browser:FS\\\":\\\"npm run test:browser-tpl -- -f ./tests/FS.test.html\\\",\\\"lint\\\":\\\"eslint src\\\",\\\"postinstall\\\":\\\"opencollective-postinstall || true\\\"},\\\"browser\\\":{\\\"./src/worker/node/index.js\\\":\\\"./src/worker/browser/index.js\\\"},\\\"author\\\":\\\"\\\",\\\"contributors\\\":[\\\"jeromewu\\\"],\\\"license\\\":\\\"Apache-2.0\\\",\\\"devDependencies\\\":{\\\"@babel/core\\\":\\\"^7.7.7\\\",\\\"@babel/preset-env\\\":\\\"^7.7.7\\\",\\\"acorn\\\":\\\"^6.4.0\\\",\\\"babel-loader\\\":\\\"^8.0.6\\\",\\\"cors\\\":\\\"^2.8.5\\\",\\\"eslint\\\":\\\"^5.16.0\\\",\\\"eslint-config-airbnb\\\":\\\"^17.1.1\\\",\\\"eslint-plugin-import\\\":\\\"^2.19.1\\\",\\\"eslint-plugin-jsx-a11y\\\":\\\"^6.2.3\\\",\\\"eslint-plugin-react\\\":\\\"^7.17.0\\\",\\\"expect.js\\\":\\\"^0.3.1\\\",\\\"express\\\":\\\"^4.17.1\\\",\\\"mocha\\\":\\\"^5.2.0\\\",\\\"mocha-headless-chrome\\\":\\\"^2.0.3\\\",\\\"npm-run-all\\\":\\\"^4.1.5\\\",\\\"nyc\\\":\\\"^15.0.0\\\",\\\"rimraf\\\":\\\"^2.7.1\\\",\\\"wait-on\\\":\\\"^3.3.0\\\",\\\"webpack\\\":\\\"^4.41.4\\\",\\\"webpack-bundle-analyzer\\\":\\\"^3.6.0\\\",\\\"webpack-cli\\\":\\\"^3.3.10\\\",\\\"webpack-dev-middleware\\\":\\\"^3.7.2\\\"},\\\"dependencies\\\":{\\\"bmp-js\\\":\\\"^0.1.0\\\",\\\"file-type\\\":\\\"^12.4.1\\\",\\\"idb-keyval\\\":\\\"^3.2.0\\\",\\\"is-electron\\\":\\\"^2.2.0\\\",\\\"is-url\\\":\\\"^1.2.4\\\",\\\"node-fetch\\\":\\\"^2.6.0\\\",\\\"opencollective-postinstall\\\":\\\"^2.0.2\\\",\\\"regenerator-runtime\\\":\\\"^0.13.3\\\",\\\"resolve-url\\\":\\\"^0.2.1\\\",\\\"tesseract.js-core\\\":\\\"^2.2.0\\\",\\\"zlibjs\\\":\\\"^0.3.1\\\"},\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"https://github.com/naptha/tesseract.js.git\\\"},\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/naptha/tesseract.js/issues\\\"},\\\"homepage\\\":\\\"https://github.com/naptha/tesseract.js\\\",\\\"collective\\\":{\\\"type\\\":\\\"opencollective\\\",\\\"url\\\":\\\"https://opencollective.com/tesseractjs\\\"}}\");\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/package.json?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/Tesseract.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/Tesseract.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const createWorker = __webpack_require__(/*! ./createWorker */ \"./node_modules/tesseract.js/src/createWorker.js\");\n\nconst recognize = async (image, langs, options) => {\n  const worker = createWorker(options);\n  await worker.load();\n  await worker.loadLanguage(langs);\n  await worker.initialize(langs);\n  return worker.recognize(image)\n    .finally(async () => {\n      await worker.terminate();\n    });\n};\n\nconst detect = async (image, options) => {\n  const worker = createWorker(options);\n  await worker.load();\n  await worker.loadLanguage('osd');\n  await worker.initialize('osd');\n  return worker.detect(image)\n    .finally(async () => {\n      await worker.terminate();\n    });\n};\n\nmodule.exports = {\n  recognize,\n  detect,\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/Tesseract.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/OEM.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/OEM.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * OEM = OCR Engine Mode, and there are 4 possible modes.\n *\n * By default tesseract.js uses LSTM_ONLY mode.\n *\n */\nmodule.exports = {\n  TESSERACT_ONLY: 0,\n  LSTM_ONLY: 1,\n  TESSERACT_LSTM_COMBINED: 2,\n  DEFAULT: 3,\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/constants/OEM.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/PSM.js":
/*!********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/PSM.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n * PSM = Page Segmentation Mode\n */\nmodule.exports = {\n  OSD_ONLY: '0',\n  AUTO_OSD: '1',\n  AUTO_ONLY: '2',\n  AUTO: '3',\n  SINGLE_COLUMN: '4',\n  SINGLE_BLOCK_VERT_TEXT: '5',\n  SINGLE_BLOCK: '6',\n  SINGLE_LINE: '7',\n  SINGLE_WORD: '8',\n  CIRCLE_WORD: '9',\n  SINGLE_CHAR: '10',\n  SPARSE_TEXT: '11',\n  SPARSE_TEXT_OSD: '12',\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/constants/PSM.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/config.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const OEM = __webpack_require__(/*! ./OEM */ \"./node_modules/tesseract.js/src/constants/OEM.js\");\n\nmodule.exports = {\n  defaultOEM: OEM.DEFAULT,\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/constants/config.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/constants/defaultOptions.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/constants/defaultOptions.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  /*\n   * default path for downloading *.traineddata\n   */\n  langPath: 'https://tessdata.projectnaptha.com/4.0.0',\n  /*\n   * Use BlobURL for worker script by default\n   * TODO: remove this option\n   *\n   */\n  workerBlobURL: true,\n  logger: () => {},\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/constants/defaultOptions.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/createJob.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/createJob.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const getId = __webpack_require__(/*! ./utils/getId */ \"./node_modules/tesseract.js/src/utils/getId.js\");\n\nlet jobCounter = 0;\n\nmodule.exports = ({\n  id: _id,\n  action,\n  payload = {},\n}) => {\n  let id = _id;\n  if (typeof id === 'undefined') {\n    id = getId('Job', jobCounter);\n    jobCounter += 1;\n  }\n\n  return {\n    id,\n    action,\n    payload,\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/createJob.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/createScheduler.js":
/*!**********************************************************!*\
  !*** ./node_modules/tesseract.js/src/createScheduler.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const createJob = __webpack_require__(/*! ./createJob */ \"./node_modules/tesseract.js/src/createJob.js\");\nconst { log } = __webpack_require__(/*! ./utils/log */ \"./node_modules/tesseract.js/src/utils/log.js\");\nconst getId = __webpack_require__(/*! ./utils/getId */ \"./node_modules/tesseract.js/src/utils/getId.js\");\n\nlet schedulerCounter = 0;\n\nmodule.exports = () => {\n  const id = getId('Scheduler', schedulerCounter);\n  const workers = {};\n  const runningWorkers = {};\n  let jobQueue = [];\n\n  schedulerCounter += 1;\n\n  const getQueueLen = () => jobQueue.length;\n  const getNumWorkers = () => Object.keys(workers).length;\n\n  const dequeue = () => {\n    if (jobQueue.length !== 0) {\n      const wIds = Object.keys(workers);\n      for (let i = 0; i < wIds.length; i += 1) {\n        if (typeof runningWorkers[wIds[i]] === 'undefined') {\n          jobQueue[0](workers[wIds[i]]);\n          break;\n        }\n      }\n    }\n  };\n\n  const queue = (action, payload) => (\n    new Promise((resolve, reject) => {\n      const job = createJob({ action, payload });\n      jobQueue.push(async (w) => {\n        jobQueue.shift();\n        runningWorkers[w.id] = job;\n        try {\n          resolve(await w[action].apply(this, [...payload, job.id]));\n        } catch (err) {\n          reject(err);\n        } finally {\n          delete runningWorkers[w.id];\n          dequeue();\n        }\n      });\n      log(`[${id}]: Add ${job.id} to JobQueue`);\n      log(`[${id}]: JobQueue length=${jobQueue.length}`);\n      dequeue();\n    })\n  );\n\n  const addWorker = (w) => {\n    workers[w.id] = w;\n    log(`[${id}]: Add ${w.id}`);\n    log(`[${id}]: Number of workers=${getNumWorkers()}`);\n    dequeue();\n    return w.id;\n  };\n\n  const addJob = async (action, ...payload) => {\n    if (getNumWorkers() === 0) {\n      throw Error(`[${id}]: You need to have at least one worker before adding jobs`);\n    }\n    return queue(action, payload);\n  };\n\n  const terminate = async () => {\n    Object.keys(workers).forEach(async (wid) => {\n      await workers[wid].terminate();\n    });\n    jobQueue = [];\n  };\n\n  return {\n    addWorker,\n    addJob,\n    terminate,\n    getQueueLen,\n    getNumWorkers,\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/createScheduler.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/createWorker.js":
/*!*******************************************************!*\
  !*** ./node_modules/tesseract.js/src/createWorker.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const resolvePaths = __webpack_require__(/*! ./utils/resolvePaths */ \"./node_modules/tesseract.js/src/utils/resolvePaths.js\");\nconst circularize = __webpack_require__(/*! ./utils/circularize */ \"./node_modules/tesseract.js/src/utils/circularize.js\");\nconst createJob = __webpack_require__(/*! ./createJob */ \"./node_modules/tesseract.js/src/createJob.js\");\nconst { log } = __webpack_require__(/*! ./utils/log */ \"./node_modules/tesseract.js/src/utils/log.js\");\nconst getId = __webpack_require__(/*! ./utils/getId */ \"./node_modules/tesseract.js/src/utils/getId.js\");\nconst { defaultOEM } = __webpack_require__(/*! ./constants/config */ \"./node_modules/tesseract.js/src/constants/config.js\");\nconst {\n  defaultOptions,\n  spawnWorker,\n  terminateWorker,\n  onMessage,\n  loadImage,\n  send,\n} = __webpack_require__(/*! ./worker/node */ \"./node_modules/tesseract.js/src/worker/browser/index.js\");\n\nlet workerCounter = 0;\n\nmodule.exports = (_options = {}) => {\n  const id = getId('Worker', workerCounter);\n  const {\n    logger,\n    errorHandler,\n    ...options\n  } = resolvePaths({\n    ...defaultOptions,\n    ..._options,\n  });\n  const resolves = {};\n  const rejects = {};\n  let worker = spawnWorker(options);\n\n  workerCounter += 1;\n\n  const setResolve = (action, res) => {\n    resolves[action] = res;\n  };\n\n  const setReject = (action, rej) => {\n    rejects[action] = rej;\n  };\n\n  const startJob = ({ id: jobId, action, payload }) => (\n    new Promise((resolve, reject) => {\n      log(`[${id}]: Start ${jobId}, action=${action}`);\n      setResolve(action, resolve);\n      setReject(action, reject);\n      send(worker, {\n        workerId: id,\n        jobId,\n        action,\n        payload,\n      });\n    })\n  );\n\n  const load = jobId => (\n    startJob(createJob({\n      id: jobId, action: 'load', payload: { options },\n    }))\n  );\n\n  const writeText = (path, text, jobId) => (\n    startJob(createJob({\n      id: jobId,\n      action: 'FS',\n      payload: { method: 'writeFile', args: [path, text] },\n    }))\n  );\n\n  const readText = (path, jobId) => (\n    startJob(createJob({\n      id: jobId,\n      action: 'FS',\n      payload: { method: 'readFile', args: [path, { encoding: 'utf8' }] },\n    }))\n  );\n\n  const removeFile = (path, jobId) => (\n    startJob(createJob({\n      id: jobId,\n      action: 'FS',\n      payload: { method: 'unlink', args: [path] },\n    }))\n  );\n\n  const FS = (method, args, jobId) => (\n    startJob(createJob({\n      id: jobId,\n      action: 'FS',\n      payload: { method, args },\n    }))\n  );\n\n  const loadLanguage = (langs = 'eng', jobId) => (\n    startJob(createJob({\n      id: jobId,\n      action: 'loadLanguage',\n      payload: { langs, options },\n    }))\n  );\n\n  const initialize = (langs = 'eng', oem = defaultOEM, jobId) => (\n    startJob(createJob({\n      id: jobId,\n      action: 'initialize',\n      payload: { langs, oem },\n    }))\n  );\n\n  const setParameters = (params = {}, jobId) => (\n    startJob(createJob({\n      id: jobId,\n      action: 'setParameters',\n      payload: { params },\n    }))\n  );\n\n  const recognize = async (image, opts = {}, jobId) => (\n    startJob(createJob({\n      id: jobId,\n      action: 'recognize',\n      payload: { image: await loadImage(image), options: opts },\n    }))\n  );\n\n  const getPDF = (title = 'Tesseract OCR Result', textonly = false, jobId) => (\n    startJob(createJob({\n      id: jobId,\n      action: 'getPDF',\n      payload: { title, textonly },\n    }))\n  );\n\n  const detect = async (image, jobId) => (\n    startJob(createJob({\n      id: jobId,\n      action: 'detect',\n      payload: { image: await loadImage(image) },\n    }))\n  );\n\n  const terminate = async () => {\n    if (worker !== null) {\n      /*\n      await startJob(createJob({\n        id: jobId,\n        action: 'terminate',\n      }));\n      */\n      terminateWorker(worker);\n      worker = null;\n    }\n    return Promise.resolve();\n  };\n\n  onMessage(worker, ({\n    workerId, jobId, status, action, data,\n  }) => {\n    if (status === 'resolve') {\n      log(`[${workerId}]: Complete ${jobId}`);\n      let d = data;\n      if (action === 'recognize') {\n        d = circularize(data);\n      } else if (action === 'getPDF') {\n        d = Array.from({ ...data, length: Object.keys(data).length });\n      }\n      resolves[action]({ jobId, data: d });\n    } else if (status === 'reject') {\n      rejects[action](data);\n      if (errorHandler) {\n        errorHandler(data);\n      } else {\n        throw Error(data);\n      }\n    } else if (status === 'progress') {\n      logger(data);\n    }\n  });\n\n  return {\n    id,\n    worker,\n    setResolve,\n    setReject,\n    load,\n    writeText,\n    readText,\n    removeFile,\n    FS,\n    loadLanguage,\n    initialize,\n    setParameters,\n    recognize,\n    getPDF,\n    detect,\n    terminate,\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/createWorker.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/tesseract.js/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n *\n * Entry point for tesseract.js, should be the entry when bundling.\n *\n * @fileoverview entry point for tesseract.js\n * @author Kevin Kwok <antimatter15@gmail.com>\n * @author Guillermo Webster <gui@mit.edu>\n * @author Jerome Wu <jeromewus@gmail.com>\n */\n__webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\nconst createScheduler = __webpack_require__(/*! ./createScheduler */ \"./node_modules/tesseract.js/src/createScheduler.js\");\nconst createWorker = __webpack_require__(/*! ./createWorker */ \"./node_modules/tesseract.js/src/createWorker.js\");\nconst Tesseract = __webpack_require__(/*! ./Tesseract */ \"./node_modules/tesseract.js/src/Tesseract.js\");\nconst OEM = __webpack_require__(/*! ./constants/OEM */ \"./node_modules/tesseract.js/src/constants/OEM.js\");\nconst PSM = __webpack_require__(/*! ./constants/PSM */ \"./node_modules/tesseract.js/src/constants/PSM.js\");\nconst { setLogging } = __webpack_require__(/*! ./utils/log */ \"./node_modules/tesseract.js/src/utils/log.js\");\n\nmodule.exports = {\n  OEM,\n  PSM,\n  createScheduler,\n  createWorker,\n  setLogging,\n  ...Tesseract,\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/index.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/circularize.js":
/*!************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/circularize.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * In the recognition result of tesseract, there\n * is a deep JSON object for details, it has around\n *\n * The result of dump.js is a big JSON tree\n * which can be easily serialized (for instance\n * to be sent from a webworker to the main app\n * or through Node's IPC), but we want\n * a (circular) DOM-like interface for walking\n * through the data.\n *\n * @fileoverview DOM-like interface for walking through data\n * @author Kevin Kwok <antimatter15@gmail.com>\n * @author Guillermo Webster <gui@mit.edu>\n * @author Jerome Wu <jeromewus@gmail.com>\n */\n\nmodule.exports = (page) => {\n  const blocks = [];\n  const paragraphs = [];\n  const lines = [];\n  const words = [];\n  const symbols = [];\n\n  page.blocks.forEach((block) => {\n    block.paragraphs.forEach((paragraph) => {\n      paragraph.lines.forEach((line) => {\n        line.words.forEach((word) => {\n          word.symbols.forEach((sym) => {\n            symbols.push({\n              ...sym, page, block, paragraph, line, word,\n            });\n          });\n          words.push({\n            ...word, page, block, paragraph, line,\n          });\n        });\n        lines.push({\n          ...line, page, block, paragraph,\n        });\n      });\n      paragraphs.push({\n        ...paragraph, page, block,\n      });\n    });\n    blocks.push({\n      ...block, page,\n    });\n  });\n\n  return {\n    ...page, blocks, paragraphs, lines, words, symbols,\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/utils/circularize.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/getEnvironment.js":
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getEnvironment.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {const isElectron = __webpack_require__(/*! is-electron */ \"./node_modules/is-electron/index.js\");\n\nmodule.exports = (key) => {\n  const env = {};\n\n  if (isElectron()) {\n    env.type = 'electron';\n  } else if (typeof window === 'object') {\n    env.type = 'browser';\n  } else if (typeof importScripts === 'function') {\n    env.type = 'webworker';\n  } else if (typeof process === 'object' && \"function\" === 'function') {\n    env.type = 'node';\n  }\n\n  if (typeof key === 'undefined') {\n    return env;\n  }\n\n  return env[key];\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/utils/getEnvironment.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/getId.js":
/*!******************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/getId.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (prefix, cnt) => (\n  `${prefix}-${cnt}-${Math.random().toString(16).slice(3, 8)}`\n);\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/utils/getId.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/log.js":
/*!****************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/log.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let logging = false;\n\nexports.logging = logging;\n\nexports.setLogging = (_logging) => {\n  logging = _logging;\n};\n\nexports.log = (...args) => (logging ? console.log.apply(this, args) : null);\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/utils/log.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/utils/resolvePaths.js":
/*!*************************************************************!*\
  !*** ./node_modules/tesseract.js/src/utils/resolvePaths.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const isBrowser = __webpack_require__(/*! ./getEnvironment */ \"./node_modules/tesseract.js/src/utils/getEnvironment.js\")('type') === 'browser';\nconst resolveURL = isBrowser ? __webpack_require__(/*! resolve-url */ \"./node_modules/resolve-url/resolve-url.js\") : s => s; // eslint-disable-line\n\nmodule.exports = (options) => {\n  const opts = { ...options };\n  ['corePath', 'workerPath', 'langPath'].forEach((key) => {\n    if (typeof options[key] !== 'undefined') {\n      opts[key] = resolveURL(opts[key]);\n    }\n  });\n  return opts;\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/utils/resolvePaths.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/defaultOptions.js":
/*!************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/defaultOptions.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {const resolveURL = __webpack_require__(/*! resolve-url */ \"./node_modules/resolve-url/resolve-url.js\");\nconst { version, dependencies } = __webpack_require__(/*! ../../../package.json */ \"./node_modules/tesseract.js/package.json\");\nconst defaultOptions = __webpack_require__(/*! ../../constants/defaultOptions */ \"./node_modules/tesseract.js/src/constants/defaultOptions.js\");\n\n/*\n * Default options for browser worker\n */\nmodule.exports = {\n  ...defaultOptions,\n  workerPath: (typeof process !== 'undefined' && process.env.TESS_ENV === 'development')\n    ? resolveURL(`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`)\n    : `https://unpkg.com/tesseract.js@v${version}/dist/worker.min.js`,\n  /*\n   * If browser doesn't support WebAssembly,\n   * load ASM version instead\n   */\n  corePath: `https://unpkg.com/tesseract.js-core@v${dependencies['tesseract.js-core'].substring(1)}/tesseract-core.${typeof WebAssembly === 'object' ? 'wasm' : 'asm'}.js`,\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/worker/browser/defaultOptions.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n *\n * Tesseract Worker adapter for browser\n *\n * @fileoverview Tesseract Worker adapter for browser\n * @author Kevin Kwok <antimatter15@gmail.com>\n * @author Guillermo Webster <gui@mit.edu>\n * @author Jerome Wu <jeromewus@gmail.com>\n */\nconst defaultOptions = __webpack_require__(/*! ./defaultOptions */ \"./node_modules/tesseract.js/src/worker/browser/defaultOptions.js\");\nconst spawnWorker = __webpack_require__(/*! ./spawnWorker */ \"./node_modules/tesseract.js/src/worker/browser/spawnWorker.js\");\nconst terminateWorker = __webpack_require__(/*! ./terminateWorker */ \"./node_modules/tesseract.js/src/worker/browser/terminateWorker.js\");\nconst onMessage = __webpack_require__(/*! ./onMessage */ \"./node_modules/tesseract.js/src/worker/browser/onMessage.js\");\nconst send = __webpack_require__(/*! ./send */ \"./node_modules/tesseract.js/src/worker/browser/send.js\");\nconst loadImage = __webpack_require__(/*! ./loadImage */ \"./node_modules/tesseract.js/src/worker/browser/loadImage.js\");\n\nmodule.exports = {\n  defaultOptions,\n  spawnWorker,\n  terminateWorker,\n  onMessage,\n  send,\n  loadImage,\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/worker/browser/index.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/loadImage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/loadImage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const resolveURL = __webpack_require__(/*! resolve-url */ \"./node_modules/resolve-url/resolve-url.js\");\n\n/**\n * readFromBlobOrFile\n *\n * @name readFromBlobOrFile\n * @function\n * @access private\n */\nconst readFromBlobOrFile = blob => (\n  new Promise((resolve, reject) => {\n    const fileReader = new FileReader();\n    fileReader.onload = () => {\n      resolve(fileReader.result);\n    };\n    fileReader.onerror = ({ target: { error: { code } } }) => {\n      reject(Error(`File could not be read! Code=${code}`));\n    };\n    fileReader.readAsArrayBuffer(blob);\n  })\n);\n\n/**\n * loadImage\n *\n * @name loadImage\n * @function load image from different source\n * @access private\n */\nconst loadImage = async (image) => {\n  let data = image;\n  if (typeof image === 'undefined') {\n    return 'undefined';\n  }\n\n  if (typeof image === 'string') {\n    // Base64 Image\n    if (/data:image\\/([a-zA-Z]*);base64,([^\"]*)/.test(image)) {\n      data = atob(image.split(',')[1])\n        .split('')\n        .map(c => c.charCodeAt(0));\n    } else {\n      const resp = await fetch(resolveURL(image));\n      data = await resp.arrayBuffer();\n    }\n  } else if (image instanceof HTMLElement) {\n    if (image.tagName === 'IMG') {\n      data = await loadImage(image.src);\n    }\n    if (image.tagName === 'VIDEO') {\n      data = await loadImage(image.poster);\n    }\n    if (image.tagName === 'CANVAS') {\n      await new Promise((resolve) => {\n        image.toBlob(async (blob) => {\n          data = await readFromBlobOrFile(blob);\n          resolve();\n        });\n      });\n    }\n  } else if (image instanceof File || image instanceof Blob) {\n    data = await readFromBlobOrFile(image);\n  }\n\n  return new Uint8Array(data);\n};\n\nmodule.exports = loadImage;\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/worker/browser/loadImage.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/onMessage.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/onMessage.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = (worker, handler) => {\n  worker.onmessage = ({ data }) => { // eslint-disable-line\n    handler(data);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/worker/browser/onMessage.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/send.js":
/*!**************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/send.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * send\n *\n * @name send\n * @function send packet to worker and create a job\n * @access public\n */\nmodule.exports = async (worker, packet) => {\n  worker.postMessage(packet);\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/worker/browser/send.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/spawnWorker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/spawnWorker.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * spawnWorker\n *\n * @name spawnWorker\n * @function create a new Worker in browser\n * @access public\n */\nmodule.exports = ({ workerPath, workerBlobURL }) => {\n  let worker;\n  if (Blob && URL && workerBlobURL) {\n    const blob = new Blob([`importScripts(\"${workerPath}\");`], {\n      type: 'application/javascript',\n    });\n    worker = new Worker(URL.createObjectURL(blob));\n  } else {\n    worker = new Worker(workerPath);\n  }\n\n  return worker;\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/worker/browser/spawnWorker.js?");

/***/ }),

/***/ "./node_modules/tesseract.js/src/worker/browser/terminateWorker.js":
/*!*************************************************************************!*\
  !*** ./node_modules/tesseract.js/src/worker/browser/terminateWorker.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * terminateWorker\n *\n * @name terminateWorker\n * @function terminate worker\n * @access public\n */\nmodule.exports = (worker) => {\n  worker.terminate();\n};\n\n\n//# sourceURL=webpack:///./node_modules/tesseract.js/src/worker/browser/terminateWorker.js?");

/***/ }),

/***/ "./public/script/scaner.js":
/*!*********************************!*\
  !*** ./public/script/scaner.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tesseract.js */ \"./node_modules/tesseract.js/src/index.js\");\n/* harmony import */ var tesseract_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_0__);\n\n$(function () {\n  $(\"#scanFile\").change(function () {\n\n    var scanImage = $(this)[0].files[0];\n    if (scanImage) {\n      document.getElementById(\"preview\").src = scanImage;\n      tesseract_js__WEBPACK_IMPORTED_MODULE_0___default.a.recognize(\n        scanImage,\n        'jpn',\n        {\n          logger: p => $(\"#loading\").text(p.status + \":\" + Math.round(p.progress * 100) + \"%\")\n        }\n      )\n        .then(result => {\n          var ris = result.data.text;\n          console.log(ris);\n          $(\"#loading\").text(\"実行完了！\");\n          $(\"#scanData\").text(ris);\n        })\n      return false;\n    }\n  })\n});\n\n\n//# sourceURL=webpack:///./public/script/scaner.js?");

/***/ })

/******/ });