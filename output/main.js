/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/addToHTML.js":
/*!*****************************!*\
  !*** ./src/JS/addToHTML.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBannerToHtml: () => (/* binding */ addBannerToHtml),\n/* harmony export */   addMarkersToHtml: () => (/* binding */ addMarkersToHtml)\n/* harmony export */ });\n\r\nfunction addActiveMarker (dataSetId, list) {\r\n\tfor (let elem of list) {\r\n\t\telem.classList.remove(\"content__marker--active\")\r\n\t\tif (elem.dataset.id === dataSetId) {\r\n\t\t\t\r\n\t\t\telem.classList.add(\"content__marker--active\")\r\n\t\t\t\r\n\t\t}\r\n\t}\r\n}\r\n\r\n\r\nfunction addBannerToHtml(count, list) {\r\n\t\r\n\tconst contentImgBanner = document.querySelector(\".content__container--img-slider\")\r\n    const contentMarker = document.querySelectorAll(\".content__marker\")\r\n\r\n\tcontentImgBanner.innerHTML = `<img class=\"content__img content__img--banner\" src=${list[count]} alt=\"Фото\">`\r\n\r\n    addActiveMarker(String(count), contentMarker)\r\n    \t\r\n}\r\n\r\n\r\n\r\nfunction addMarkersToHtml(list) {\r\n\r\n\tconst contentContainerMarkers = document.querySelector(\".content__container--markers\")\r\n\r\n\tfor (let i = 0; i < list.length; i++ ) {\r\n\t\tif (i === 0) {\r\n\t\t\tcontentContainerMarkers.innerHTML += `<div data-id=\"${i}\" class=\"content__marker content__marker--active\"></div>`\r\n         } else {\r\n\t\t\tcontentContainerMarkers.innerHTML += `<div data-id=\"${i}\" class=\"content__marker\"></div>`\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n    addBannerToHtml(0, list)\r\n    \r\n}\r\n\r\n\r\n    \n\n//# sourceURL=webpack://module_47_bookstore/./src/JS/addToHTML.js?\n}");

/***/ }),

/***/ "./src/JS/books.js":
/*!*************************!*\
  !*** ./src/JS/books.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Books: () => (/* binding */ Books)\n/* harmony export */ });\nconst error = {\r\n    \"error\": {\r\n        \"code\": 503,\r\n        \"message\": \"Service temporarily unavailable.\",\r\n        \"errors\": [\r\n            {\r\n                \"message\": \"Service temporarily unavailable.\",\r\n                \"domain\": \"global\",\r\n                \"reason\": \"backendFailed\"\r\n            }\r\n        ]\r\n    }\r\n}\r\n\r\n\r\nclass Books {\r\n\t\r\n\tconstructor(list) {\r\n\t\t\r\n\t\t\tthis.loadindex = 0 \r\n\t\t\tthis.key = \"AIzaSyAAe2ikW9G4PehhqDt_9eo0KZSXoj5-3WI\"\r\n\t\t\tthis.contentCategories = document.querySelector(\".content__categories\")\r\n\t\t\tthis.containerBookCards = document.querySelector(\".content__container--book-cards\")\r\n\t\t\tthis.loader = document.querySelector(\".loader\")\r\n\t\t\tthis.categorySearch = \"Humor\"\r\n\t\t\tthis.categories = list\r\n\t\t\tthis.addCategoriesToHtml()\r\n\t\t}\r\n\r\n\t\tasync fetchData() {\r\n\t\t\ttry {\r\n\t\t\t\tthis.startLoader()\r\n\t\t\t\tthis.data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:${this.categorySearch}\"&key=${this.key}&printType=books&startIndex=${this.loadindex}&maxResults=6&langRestrict=en`);\r\n\t\t\t\tthis.response = await this.data.json();\r\n\t\t\t\tif (!this.response.error) {\r\n\t\t\t\t\tfor (let book of this.response.items) {\r\n\t\t\t\t\t\tthis.addBookCards(book)\r\n\t\t\t\t\t}\r\n\t\t\t\t\tthis.loadindex += 6\r\n\t\t\t\t} else {\r\n\t\t\t\t\t throw new Error(`Что-то пошло не так: Код: ${this.response.error.code}, message: ${this.response.error.message}`)\r\n\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t} \r\n\t\t\tcatch (err) {\r\n\t\t\t\tconsole.log(\"Ошибка:\",err.message)\r\n\t\t\t\t}\r\n\t\t\tfinally {\r\n\t\t\t\tthis.stopLoader()\r\n\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\r\n\r\n\t\tstartLoader () {\r\n\t\t\tthis.loader.style.display = \"block\"\r\n\t\t}\r\n\t\t\r\n\t\tstopLoader() {\r\n\t\t\tthis.loader.style.display = \"none\"\r\n\t\t}\r\n\t\t\t\r\n\r\n\t\taddCategoriesToHtml() {\t\t\t\t\t\t\r\n\t\t\tfor (let category of this.categories) {\r\n\t\t\t\tthis.contentCategories.innerHTML += `<li data-id=\"${category}\" class=\"content__item\">${category}</li>`\r\n\t\t\t}\r\n\t\t\tthis.setActiveCategories(this.categories[0])\r\n\t\t}\r\n\r\n\t\tsetActiveCategories(category) {\r\n\r\n\t\t\tfor (let cat of this.contentCategories.querySelectorAll(\".content__item\")) {\r\n\t\t\t\tcat.classList.remove(\"content__item--active\")\r\n\t\t\t}\r\n\t\t\tlet activeCategory = this.contentCategories.querySelector(`[data-id=\"${category}\"`)\r\n\t\t\tactiveCategory.classList.add(\"content__item--active\")\r\n\t\t\tthis.categorySearch = category\r\n\t\t\tthis.loadindex = 0\r\n\t\t\tthis.containerBookCards.innerHTML = \"\"\r\n\t\t\tthis.fetchData()\r\n\t\t}\r\n\r\n\t\taddBookCards (object) {\r\n\t\r\n\t\t\tlet id = object.id\r\n\t\t\tlet urlImg = object.volumeInfo.imageLinks.thumbnail;\r\n\t\t\tlet authors = object.volumeInfo.authors.join(', ');\r\n\t\t\tlet title = object.volumeInfo.title;\r\n\t\t\tlet averageRating = '';\r\n\t\t\tlet ratingsCount = '';\r\n\t\t\tif (object.volumeInfo.averageRating) {\r\n\t\t\t\taverageRating = object.volumeInfo.averageRating\r\n\t\t\t\tratingsCount = object.volumeInfo.ratingsCount\r\n\t\t\t}\r\n\r\n\r\n\t\t\tlet description = object.volumeInfo.description;\r\n            let sale = object.saleInfo.saleability\r\n\t\t\tlet price = \"\"\r\n            let buttonClass = \"\"\r\n            let buttonBody = \"\"\r\n\t\t\tif (sale === \"FOR_SALE\") {\r\n\t\t\t\tprice = `${object.saleInfo.retailPrice.amount} ${object.saleInfo.retailPrice.currencyCode}`\r\n                buttonClass = \"button__book-cards\"\r\n                buttonBody = \"buy now\"\r\n                \r\n\t\t\t}\r\n\r\n            if (sale === \"FREE\") {\r\n                price = \"FREE\"\r\n\t\t\t\tbuttonClass = \"button__book-cards\"\r\n                buttonBody = \"buy now\"\r\n\t\t\t}\r\n            \r\n            if (sale === \"NOT_FOR_SALE\") {\r\n                 buttonClass = \"button__book-cards--not-sale\"\r\n                 buttonBody = \"not sale\"\r\n            }\r\n\r\n\t\t\tlet htmlBookCards = `\r\n\t\t\t\t\t\t<div class=\"book-cards\">\r\n\t\t\t\t\t\t\t<img class=\"book-cards__img\" src=${urlImg} alt=\"Foto book\">\r\n\t\t\t\t\t\t\t<div class=\"book-cards__info \">\r\n\t\t\t\t\t\t\t\t<span class=\"book-cards__authors\">${authors}</span>\r\n\t\t\t\t\t\t\t\t<span class=\"book-cards__title\">${title}</span>\r\n\t\t\t\t\t\t\t\t<div class=\"book-cards__rating\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"book-cards__average-rating\">${averageRating}</div>\r\n\t\t\t\t\t\t\t\t\t<span class=\"book-cards__ratings-count\">${ratingsCount}</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span class=\"book-cards__description\">${description}</span>\r\n\t\t\t\t\t\t\t\t<span class=\"book-cards__price\">${price}</span>\r\n\t\t\t\t\t\t\t\t<button data-id=\"${id}\" class=\"button button__book-cards ${buttonClass}\">${buttonBody}</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>`\r\n\r\n\t\t\t\r\n\t\t\t\tthis.containerBookCards.innerHTML += htmlBookCards\r\n\r\n\t\t\t\tlet button = document.querySelector(`[data-id=\"${id}\"]`)\r\n\t\t\t\tconsole.log(button)\r\n\t\t\t\tbutton.addEventListener(\"click\", ()=> {\r\n\t\t\t\t\tconsole.log(\"click\")})\r\n\t\t\t\t\r\n\r\n\r\n\t\t\t}\r\n\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://module_47_bookstore/./src/JS/books.js?\n}");

/***/ }),

/***/ "./src/JS/main.js":
/*!************************!*\
  !*** ./src/JS/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _addToHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToHTML */ \"./src/JS/addToHTML.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./src/JS/slider.js\");\n/* harmony import */ var _books__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books */ \"./src/JS/books.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\t\r\n\t\r\n\tlet imageList = [\"../src/img/banner.png\", \"../src/img/banner2.png\", \"../src/img/banner3.png\"]\r\n\r\n\r\n    let categoryesList = [\"Architecture\", \"Art & Fashion\", \"Biography\", \"Business\",\r\n\t\"Crafts & Hobbies\", \"Drama\", \"Fiction\", \"Food & Drink\", \"Health & Wellbeing\", \r\n\t\"History & Politics\", \"Humor\", \"Poetry\", \"Psychology\", \"Science\", \"Technology\", \r\n\t\"Travel & Maps\"]\r\n\t\r\n\r\n\r\n\t\r\nlet books = new _books__WEBPACK_IMPORTED_MODULE_2__.Books(categoryesList)\r\nlet slider = new _slider__WEBPACK_IMPORTED_MODULE_1__.Slider(imageList)\r\n\r\n\r\nconst categories = document.querySelectorAll(\".content__item\")\r\nconst buttonLoadMore = document.querySelector(\".button__load-more\")\r\nconst contentMarker = document.querySelectorAll(\".content__marker\")\r\n\r\nfunction addClickCategory (list) {\r\n\tfor (let object of list) {\r\n\t\tobject.addEventListener(\"click\",  function(){\r\n\t\t\tbooks.setActiveCategories(this.dataset.id)\r\n\t\t});\r\n\t}\r\n\t\r\n}\r\n\r\nfunction addClickMarker (list) {\r\n\tfor (let object of list) {\r\n\t\tobject.addEventListener(\"click\",  function(){\r\n\r\n\t\t\tslider.addBannerToHtml(Number(this.dataset.id))\r\n\t\t\tslider.setCount(Number(this.dataset.id))\r\n\t\t\tslider.startScroll()\r\n\r\n\t\t\t\t});\r\n\t\t\t}\r\n}\r\n\r\n\r\nfunction addClickButtonLoadMore () {\r\n\tbuttonLoadMore.addEventListener(\"click\", () => {\r\n\t\tbooks.fetchData()\r\n\t})\r\n}\r\n\r\n\r\n\r\naddClickCategory(categories)\r\naddClickButtonLoadMore()\r\naddClickMarker(contentMarker)\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://module_47_bookstore/./src/JS/main.js?\n}");

/***/ }),

/***/ "./src/JS/slider.js":
/*!**************************!*\
  !*** ./src/JS/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Slider: () => (/* binding */ Slider)\n/* harmony export */ });\nclass Slider {\r\n\t\t\r\n\tconstructor(list) {\r\n\t\tthis.imageCount = 0 \r\n\t\tthis.list = list\r\n\t\tthis.startAutoScroll = null\r\n\t\tthis.timer = 5000\r\n\t\tthis.contentImgBanner = document.querySelector(\".content__container--img-slider\")\r\n\t\t\r\n\t\tthis.contentContainerMarkers = document.querySelector(\".content__container--markers\")\r\n\t\tthis.addMarkersToHtml()\r\n\t\tthis.startScroll()\r\n\t}\r\n\r\n\tsetCount(count) {\t\r\n\t\tthis.imageCount = count\r\n\r\n\t}\r\n\r\n\tgetCount(){\r\n\t\treturn this.imageCount\r\n\t}\r\n\r\n\tsetTimer(count){\r\n\t\tthis.timer = count \r\n\t}\r\n\r\n\r\n\taddActiveMarker (dataSetId) {\r\n\t\tthis.contentMarker = document.querySelectorAll(\".content__marker\")\r\n\t\tfor (let elem of this.contentMarker) {\r\n\t\t\telem.classList.remove(\"content__marker--active\")\r\n\t\t\tif (elem.dataset.id === dataSetId) {\r\n\t\t\t\telem.classList.add(\"content__marker--active\")\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\r\n\taddBannerToHtml(count) {\r\n\t\r\n\t\tthis.contentImgBanner.innerHTML = `<img class=\"content__img content__img--banner\" src=${this.list[count]} alt=\"Фото\">`\r\n\r\n\t\tthis.addActiveMarker(String(count))\r\n    \t\r\n\t}\r\n\r\n\r\n\r\n\taddMarkersToHtml() {\r\n\r\n\tfor (let i = 0; i < this.list.length; i++) {\r\n\t\tthis.contentContainerMarkers.innerHTML += `<div data-id=\"${i}\" class=\"content__marker\"></div>`\r\n\t\t}\r\n\r\n    \tthis.addBannerToHtml(0)\r\n    \r\n\t}\r\n\r\n\r\n\tScroll() {\r\n\t\tthis.imageCount += 1\r\n\t\tif (this.imageCount < this.list.length) {\r\n\t\t\tthis.addBannerToHtml(this.imageCount)\r\n\r\n\t\t} else {\r\n\t\t\tthis.imageCount = 0\r\n\t\t\tthis.addBannerToHtml(this.imageCount)\r\n\t\t}\r\n\t}\r\n\r\n\tstartScroll() {\r\n\t\tif (this.startAutoScroll) {\r\n\t\t\tclearInterval(this.startAutoScroll)\r\n\t\t\t} \r\n\r\n\t\t\tthis.startAutoScroll = setInterval(this.Scroll.bind(this), this.timer)\r\n\t\t}\r\n\t}\r\n\r\n\r\n\n\n//# sourceURL=webpack://module_47_bookstore/./src/JS/slider.js?\n}");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://module_47_bookstore/./src/sass/style.scss?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/JS/main.js");
/******/ 	
/******/ })()
;