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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: desktop, sidebarShown, main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desktop", function() { return desktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarShown", function() { return sidebarShown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_sidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/sidebar.js */ "./src/js/scripts/sidebar.js");
/* harmony import */ var _scripts_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/modal.js */ "./src/js/scripts/modal.js");
/* harmony import */ var _scripts_sliders_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/sliders.js */ "./src/js/scripts/sliders.js");




var tablet = window.matchMedia("(min-width: 768px)");
var desktop = window.matchMedia("(min-width: 1120px)");
var sidebarShown = false;
var main = document.querySelector('.main');
var descShowAll = document.querySelector('.description__link');
var descTabletText = document.querySelector('.description__text--tabletplus');
var descTabletFullText = document.querySelector('.description__text--full');
var descFullText = document.querySelector('.description__text--all');
var descShown = false;
var milk = document.querySelector('.white-space');
var sidebar = document.querySelector('.sidebar');
var burger = document.querySelector('.burger-button');
burger.addEventListener('click', function () {
  sidebar.style.transform = "translateX(400px)";
  milk.style.visibility = "visible";
});

var showDescButtonOn = function showDescButtonOn() {
  descShown = true;
  descTabletText.style.display = "inline";
  descFullText.style.display = "inline";
  descTabletFullText.style.display = "inline";
  document.querySelector(".description__link > .show-all__text").textContent = "Скрыть";
  document.querySelector(".description__link > .show-all__img").style.transform = "rotate(180deg)";
};

var showDescButtonOff = function showDescButtonOff() {
  descShown = false;

  if (!tablet.matches) {
    descFullText.style.display = "none";
  }

  if (!desktop.matches) {
    descTabletFullText.style.display = "none";
  }

  descFullText.style.display = "none";
  document.querySelector(".description__link > .show-all__text").textContent = "Читать далее";
  document.querySelector(".description__link > .show-all__img").style.transform = "rotate(0deg)";
};

descShowAll.addEventListener('click', function () {
  if (!descShown) {
    showDescButtonOn();
  } else {
    showDescButtonOff();
  }
});

/***/ }),

/***/ "./src/js/scripts/modal.js":
/*!*********************************!*\
  !*** ./src/js/scripts/modal.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../js/index.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '../js/sidebar.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var whiteSpace = document.querySelector('.white-space');
var callButton = document.querySelectorAll('.button__call');
var callModal = document.querySelector('.call');
var callCloseButton = document.querySelector('.call__close-button');
var feedbackButton = document.querySelectorAll('.button__chat');
var feedbackModal = document.querySelector('.feedback');
var feedbackCloseButton = document.querySelector('.feedback__close-button');
var modalCallShown = false;
var modalFeedbackShown = false;

var closeModal = function closeModal(modal, button, state) {
  event.preventDefault();
  modal.style.transform = "translateX(460px)";

  if (!!(function webpackMissingModule() { var e = new Error("Cannot find module '../js/index.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).matches) {
    !(function webpackMissingModule() { var e = new Error("Cannot find module '../js/sidebar.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).style.transform = "translateX(0px)";
  }

  button.style.filter = "opacity(0)";
  button.style.transform = "translate(0px, 0px)";
  whiteSpace.style.zIndex = "2";
  state = false;
  var sidebarShown = false;

  if (!sidebarShown) {
    !(function webpackMissingModule() { var e = new Error("Cannot find module '../js/index.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).style.filter = "opacity(1)";
    whiteSpace.style.display = "none";
  }
};

var openModal = function openModal(state, modal, button) {
  event.preventDefault();
  !(function webpackMissingModule() { var e = new Error("Cannot find module '../js/sidebar.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  whiteSpace.style.zIndex = "4";

  if (!state) {
    modal.style.transform = "translateX(-460px)";
    button.style.filter = "opacity(1)";

    if (!(function webpackMissingModule() { var e = new Error("Cannot find module '../js/index.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).matches) {
      button.style.transform = "translate(-80px, 20px)";
    }

    var _state = true;
    !(function webpackMissingModule() { var e = new Error("Cannot find module '../js/index.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).style.filter = "opacity(0.8)";
    whiteSpace.style.display = "block";
  }
};

blurredSpace.addEventListener('click', function () {
  closeModal(feedbackModal, feedbackCloseButton, modalFeedbackShown);
  closeModal(callModal, callCloseButton, modalCallShown);
  !(function webpackMissingModule() { var e = new Error("Cannot find module '../js/sidebar.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  whiteSpace.style.zIndex = "2";
});
document.querySelectorAll('.button__call').forEach(function (feedbackButton) {
  feedbackButton.addEventListener('click', function () {
    openModal(modalCallShown, callModal, callCloseButton);
  });
});
document.querySelectorAll('.button__chat').forEach(function (feedbackButton) {
  feedbackButton.addEventListener('click', function () {
    openModal(modalFeedbackShown, feedbackModal, feedbackCloseButton);
  });
});
callCloseButton.addEventListener('click', function () {
  closeModal(callModal, callCloseButton, modalCallShown);
});
feedbackCloseButton.addEventListener('click', function () {
  closeModal(feedbackModal, feedbackCloseButton, modalFeedbackShown);
});

/***/ }),

/***/ "./src/js/scripts/sidebar.js":
/*!***********************************!*\
  !*** ./src/js/scripts/sidebar.js ***!
  \***********************************/
/*! exports provided: sidebar, closeSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebar", function() { return sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSidebar", function() { return closeSidebar; });
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./src/js/scripts/modal.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./src/js/index.js");


var sidebar = document.querySelector('.sidebar');
var whiteSpace = document.querySelector('.white-space');
var sidebarCloseButton = document.querySelector('.sidebar__close-button');
var burgerButton = document.querySelectorAll('.burger-button');
var closeSidebar = function closeSidebar() {
  if (!_index_js__WEBPACK_IMPORTED_MODULE_1__["desktop"].matches) {
    event.preventDefault();
    sidebar.style.transform = "translateX(0px)";
    _index_js__WEBPACK_IMPORTED_MODULE_1__["main"].style.filter = "opacity(1)";
    var _sidebarShown = false;
    whiteSpace.style.display = "none";
    whiteSpace.style.zIndex = "2";
  }
};
document.querySelectorAll('.burger-button').forEach(function (burgerButton) {
  burgerButton.addEventListener('click', function () {
    event.preventDefault();

    if (!_index_js__WEBPACK_IMPORTED_MODULE_1__["sidebarShown"]) {
      sidebar.style.transform = "translateX(340px)";
      sidebar.style.display = "block";
      var _sidebarShown2 = true;
      _index_js__WEBPACK_IMPORTED_MODULE_1__["main"].style.filter = "opacity(0.8)";
      whiteSpace.style.display = "block";
    }
  });
});
sidebarCloseButton.addEventListener('click', function () {
  closeSidebar();
  whiteSpace.style.zIndex = "2";
});
whiteSpace.addEventListener('click', function () {
  closeSidebar();
  whiteSpace.style.zIndex = "2";
});

/***/ }),

/***/ "./src/js/scripts/sliders.js":
/*!***********************************!*\
  !*** ./src/js/scripts/sliders.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.js */ "./src/js/scripts/sidebar.js");

var tablet = window.matchMedia("(min-width: 768px)");
var activeClasses = document.querySelectorAll(".slide");
var pricesSwiper = new Swiper('.prices__container', {
  pagination: {
    el: '.prices__pagination'
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 224,
  loop: true,
  init: false
});
var brandSwiper = new Swiper('.brands__container', {
  pagination: {
    el: '.brands__pagination'
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 224,
  init: false
});
var techSwiper = new Swiper('.tech__container', {
  pagination: {
    el: '.tech__pagination'
  },
  direction: "horizontal",
  spaceBetween: 16,
  width: 240,
  loop: true,
  init: false
});
var brandsShowAll = document.querySelector('.brands__show-all');
var techShowAll = document.querySelector('.tech__show-all');
var techWrapper = document.querySelector(".tech__wrapper");
var brandsWrapper = document.querySelector(".brands__wrapper");
var techShowAllImg = document.querySelector(".tech__show-all > .show-all__img");
var techShowAllText = document.querySelector(".tech__show-all > .show-all__text");
var brandsShowAllImg = document.querySelector(".brands__show-all > .show-all__img");
var brandsShowAllText = document.querySelector(".brands__show-all > .show-all__text");
var brandsListShown = false;
var techListShown = false;

var showTechButtonOn = function showTechButtonOn() {
  techListShown = true;
  techShowAllImg.style.transform = "rotate(180deg)";
  techShowAllText.textContent = "Скрыть";
  techWrapper.style.height = "100%";
};

var showTechButtonOff = function showTechButtonOff() {
  techListShown = false;
  techShowAllImg.style.transform = "rotate(0deg)";
  techShowAllText.textContent = "Показать все";
  techWrapper.style.height = "160px";
};

var showBrandsButtonOn = function showBrandsButtonOn() {
  brandsListShown = true;
  brandsShowAllImg.style.transform = "rotate(180deg)";
  brandsShowAllText.textContent = "Скрыть";
  brandsWrapper.style.height = "100%";
};

var showBrandsButtonOff = function showBrandsButtonOff() {
  brandsListShown = false;
  brandsShowAllImg.style.transform = "rotate(0deg)";
  brandsShowAllText.textContent = "Показать все";
  brandsWrapper.style.height = "160px";
};

techShowAll.addEventListener('click', function () {
  if (!techListShown) {
    showTechButtonOn();
  } else {
    showTechButtonOff();
  }
});
brandsShowAll.addEventListener('click', function () {
  if (!brandsListShown) {
    showBrandsButtonOn();
  } else {
    showBrandsButtonOff();
  }
});

for (var i = 0; i < activeClasses.length; i++) {
  if (!tablet.matches) {
    brandSwiper.init();
    techSwiper.init();
    pricesSwiper.init();
  }
}

tablet.addListener(function (e) {
  for (var _i = 0; _i < activeClasses.length; _i++) {
    if (e.matches) {
      activeClasses[_i].classList.remove('swiper-slide');

      Object(_sidebar_js__WEBPACK_IMPORTED_MODULE_0__["closeSidebar"])();
      brandSwiper.destroy();
      techSwiper.destroy();
      pricesSwiper.destroy();
    } else {
      activeClasses[_i].classList.add('swiper-slide');

      brandSwiper.init();
      techSwiper.init();
      pricesSwiper.init();
    }
  }
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/lib/loader.js):\nError: ENOENT: no such file or directory, scandir 'C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\node-sass\\vendor'\n    at Object.readdirSync (fs.js:981:3)\n    at Object.getInstalledBinaries (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\node-sass\\lib\\extensions.js:133:13)\n    at foundBinariesList (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\node-sass\\lib\\errors.js:20:15)\n    at foundBinaries (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\node-sass\\lib\\errors.js:15:5)\n    at Object.module.exports.missingBinary (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\node-sass\\lib\\errors.js:45:5)\n    at module.exports (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\node-sass\\lib\\binding.js:15:30)\n    at Object.<anonymous> (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\node-sass\\lib\\index.js:14:35)\n    at Module._compile (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\v8-compile-cache\\v8-compile-cache.js:192:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1221:10)\n    at Module.load (internal/modules/cjs/loader.js:1050:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:938:14)\n    at Module.require (internal/modules/cjs/loader.js:1090:19)\n    at require (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\v8-compile-cache\\v8-compile-cache.js:161:20)\n    at getDefaultSassImpl (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\sass-loader\\lib\\loader.js:203:10)\n    at Object.sassLoader (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\sass-loader\\lib\\loader.js:79:31)\n    at C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at Array.<anonymous> (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4)\n    at Storage.finished (C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:55:16)\n    at C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:91:9\n    at C:\\Users\\Стас\\Desktop\\Final Block-1\\node_modules\\graceful-fs\\graceful-fs.js:123:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (internal/fs/read_file_context.js:63:3)");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/index.js */"./src/js/index.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map