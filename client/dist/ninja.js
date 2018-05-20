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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ninja/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ninja/index.js":
/*!****************************!*\
  !*** ./src/ninja/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function (root) {\n    'use strict';\n    let results;\n    root = root || {};\n    console.log(root);\n    root.assert = (value, desc) => {\n        const li = document.createElement('li');\n        li.className = value ? 'pass' : 'fail';\n        li.appendChild(document.createTextNode(desc));\n        results.appendChild(li);\n        if(!value){\n            li.parentNode.parentNode.className = 'fail';\n        }\n        return li;\n    };\n\n    const queue = [];\n    let paused = false;\n    root.test = (name, fn) => {\n        queue.push(()=>{\n            results = document.getElementById('results');\n            results = assert(true, name).appndChild(document.createElement('ul'));\n            fn();\n        });\n        runTest();\n    };\n\n    root.pause = () => {\n        paused = true;\n    };\n    root.resume = () => {\n        paused = false;\n        setTimeout(runTest, 1);\n    };\n\n    function runTest(){\n        if(!paused && queue.length){\n            (queue.shift())();\n            if(!paused){\n                resume();\n            }\n        }\n\n    }\n}).bind(null)(window);\n/*const fn = function(){\n    console.log(this);\n};\nfn();*/\ntest(\"テストA.\", ()=>{\n    assert(true, \"第1のアサート完了\");\n    assert(true, \"第2のアサート完了\");\n    assert(true, \"第3のアサート完了\");\n});\n\ntest(\"テストB.\", ()=>{\n    assert(true, \"第1のテスト完了\");\n    assert(false, \"第2のテスト失敗\");\n    assert(true, \"第3のテスト完了\");\n});\n\ntest(\"テストC.\", ()=>{\n    assert(null, \"失敗\");\n    assert(5, \"合格\");\n});\n\ntest('非同期テスト1',()=>{\n    pause();\n    setTimeout(()=>{\n        assert(true,'第1テスト完了');\n        resume();\n    }, 1000);\n});\n\ntest('非同期テスト2',()=>{\n    pause();\n    setTimeout(()=>{\n        assert(true,'第2テスト完了');\n        resume();\n    }, 1000);\n});\n\n//# sourceURL=webpack:///./src/ninja/index.js?");

/***/ })

/******/ });