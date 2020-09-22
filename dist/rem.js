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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/utils/rem.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/utils/rem.js":
/*!**************************!*\
  !*** ./src/utils/rem.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils/utils.js\");\n\r\n\r\n(function (designW, baseFontSize) {\r\n    let wdpr = window.devicePixelRatio,\r\n        dpr = wdpr ? Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"toFixed\"])(1 / wdpr) : 1,\r\n        content = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"json2Str\"])({\r\n            'maximum-scale': dpr,\r\n            'minimum-scale': dpr,\r\n            'initial-scale': dpr,\r\n            'user-scalable': 0,\r\n            'width': 'device-width'\r\n        }),\r\n        ww = (window.screen.width || designW) * wdpr,\r\n        fz = Math.ceil(ww * baseFontSize / designW);\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('meta[name=viewport]').setAttribute('content', content);\r\n    Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"$\"])('html').style.fontSize = fz + 'px';\r\n})(375, 14);\n\n//# sourceURL=webpack:///./src/utils/rem.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: $, toFixed, json2Str, json2CssCode, json2CssCodes, isWeixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toFixed\", function() { return toFixed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"json2Str\", function() { return json2Str; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"json2CssCode\", function() { return json2CssCode; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"json2CssCodes\", function() { return json2CssCodes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isWeixin\", function() { return isWeixin; });\nfunction $(selector) {\r\n    let d = document;\r\n    if (['html', 'root'].indexOf(selector) > -1) return d.documentElement;\r\n    else if ('body' == selector) return d.body;\r\n    else if ('head' == selector) return d.head;\r\n    return document.querySelector(selector);\r\n}\r\n\r\nfunction toFixed(num, len) {\r\n    len = len || 2;\r\n    let pow = Math.pow(10, len);\r\n    return Math.floor(num * pow) / pow;\r\n}\r\n\r\n/**\r\n * @hyphen 键值连字符\r\n * @hyphenRow 数据连字符\r\n */\r\nfunction json2Str(obj, hyphen, hyphenRow) {\r\n    hyphen = hyphen || '=';\r\n    hyphenRow = hyphenRow || ',';\r\n    let str = '';\r\n    for (const k in obj) {\r\n        if (obj.hasOwnProperty(k)) {\r\n            str += k + hyphen + obj[k] + hyphenRow;\r\n        }\r\n    }\r\n    return str.substr(0, str.length - hyphenRow.length);\r\n}\r\n\r\nfunction json2CssCode(selector, obj) {   \r\n    return selector + ' {' + json2Str(obj, ':', '; ') + '}';\r\n}\r\n\r\nfunction json2CssCodes() {\r\n    if (arguments.length == 2 && typeof arguments[0] == 'string' && typeof arguments[1] == 'object') return json2CssCode(arguments[0], arguments[1]); \r\n    else if (arguments.length == 1 && typeof arguments[0] == 'object') {\r\n        let str = '';\r\n        for (const k in arguments[0]) {\r\n            if (arguments[0].hasOwnProperty(k)) {\r\n                str += json2CssCode(k, arguments[0][k]);\r\n            }\r\n        }\r\n        return str;\r\n    }\r\n}\r\n\r\nfunction isWeixin() {\r\n    return navigator.userAgent.toLowerCase().match(/MicroMessenger/i)==\"micromessenger\";\r\n}\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ })

/******/ });