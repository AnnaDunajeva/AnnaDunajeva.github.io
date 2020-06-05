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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/home.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/home.js":
/*!*********************!*\
  !*** ./dev/home.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/helpers */ \"./dev/utils/helpers.js\");\n // import './stylesheets/home.scss'\n\n\nconst viewport = document.querySelector(\".viewport\");\nconst buttonAbout = document.querySelector(\".button-about\");\nconst scrollableHight = viewport.scrollHeight;\nconst windowHight = viewport.clientHeight;\nlet prevScrollY = viewport.scrollTop;\nlet onBotton = scrollableHight - viewport.scrollTop === windowHight ? true : false;\nlet onTop = !onBotton;\n\nconst updatePreviousScrollYPosition = scrollY => {\n  prevScrollY = scrollY;\n};\n\nconst setUpNavListeners = () => {\n  buttonAbout.addEventListener('click', () => {\n    event.preventDefault();\n    Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"scrollToPosition\"])(viewport, windowHight); //idiotic solution to make sure it is scrolled to the bottom\n  });\n};\n\nconst setUpScrollListeners = () => {\n  viewport.addEventListener('scroll', () => {\n    console.log('prevScrollY ', prevScrollY, 'scrollY ', viewport.scrollTop, 'onBotton ', onBotton, onTop, scrollableHight - viewport.scrollTop, windowHight);\n\n    if (scrollableHight - viewport.scrollTop <= windowHight + 1) {\n      onBotton = true;\n      onTop = false;\n      updatePreviousScrollYPosition(viewport.scrollTop);\n    }\n\n    if (viewport.scrollTop === 0) {\n      onBotton = false;\n      onTop = true;\n      updatePreviousScrollYPosition(0);\n    }\n\n    if (viewport.scrollTop > prevScrollY + 10 && !onBotton) {\n      onBotton = true;\n      onTop = false;\n      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"scrollToPosition\"])(viewport, windowHight); //idiotic solution to make sure it is scrolled to the bottom\n    } else if (viewport.scrollTop < prevScrollY - 10 && !onTop) {\n      onTop = true;\n      onBotton = false;\n      Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_0__[\"scrollToPosition\"])(viewport, 0);\n    }\n  });\n};\n\nsetUpScrollListeners();\nsetUpNavListeners();\n\n//# sourceURL=webpack:///./dev/home.js?");

/***/ }),

/***/ "./dev/utils/helpers.js":
/*!******************************!*\
  !*** ./dev/utils/helpers.js ***!
  \******************************/
/*! exports provided: scrollToPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollToPosition\", function() { return scrollToPosition; });\nconst scrollToPosition = (element, position) => {\n  element.scrollTo({\n    top: position,\n    behavior: 'smooth'\n  });\n};\n\n//# sourceURL=webpack:///./dev/utils/helpers.js?");

/***/ })

/******/ });