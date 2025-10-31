/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_JS_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/JS/main */ \"./src/JS/main.js\");\n/* harmony import */ var _src_JS_main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_JS_main__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://module_47_bookstore/./index.js?\n}");

/***/ }),

/***/ "./src/JS/main.js":
/*!************************!*\
  !*** ./src/JS/main.js ***!
  \************************/
/***/ (() => {

eval("{\t\r\n\tconst key = \"AIzaSyAAe2ikW9G4PehhqDt_9eo0KZSXoj5-3WI\"\r\n\tlet loadindex = 0\r\n\tlet category = \"Humor\"\r\n    \r\n\tlet positionList = 0\r\n\tlet imageList = [\"src/img/banner.png\", \"src/img/banner2.png\", \"src/img/banner3.png\"]\r\n\r\n\r\n    let categoryesList = [\"Architecture\", \"Art & Fashion\", \"Biography\", \"Business\",\r\n\t\"Crafts & Hobbies\", \"Drama\", \"Fiction\", \"Food & Drink\", \"Health & Wellbeing\", \r\n\t\"History & Politics\", \"Humor\", \"Poetry\", \"Psychology\", \"Science\", \"Technology\", \r\n\t\"Travel & Maps\"]\r\n\r\n\t\r\nfunction addBookCards (object) {\r\n\tconsole.log(object)\r\n\t\r\n\tlet urlImg = object.volumeInfo.imageLinks.thumbnail;\r\n\tlet authors = object.volumeInfo.authors.join(', ');\r\n\tlet title = object.volumeInfo.title;\r\n\tlet averageRating = '';\r\n\tlet ratingsCount = '';\r\n\tif (object.volumeInfo.averageRating) {\r\n\t\taverageRating = object.volumeInfo.averageRating\r\n\t\tratingsCount = object.volumeInfo.ratingsCount\r\n\t}\r\n\r\n\r\n\tlet description = object.volumeInfo.description;\r\n\tlet price = \"\"\r\n\tif (object.saleInfo.saleability === \"FOR_SALE\") {\r\n\t\tprice = `${object.saleInfo.retailPrice.amount} ${object.saleInfo.retailPrice.currencyCode}`\r\n\t} \r\n\t\r\n\t\t\r\n\thtmlBookCards = `\r\n\t\t\t\t<div class=\"book-cards\">\r\n\t\t\t\t\t<img class=\"book-cards__img\" src=${urlImg} alt=\"Foto book\">\r\n\t\t\t\t\t<div class=\"book-cards__info \">\r\n\t\t\t\t\t\t<span class=\"book-cards__authors\">${authors}</span>\r\n\t\t\t\t\t\t<span class=\"book-cards__title\">${title}</span>\r\n\t\t\t\t\t\t<div class=\"book-cards__rating\">\r\n\t\t\t\t\t\t\t<div class=\"book-cards__average-rating\">${averageRating}</div>\r\n\t\t\t\t\t\t\t<span class=\"book-cards__ratings-count\">${ratingsCount}</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<span class=\"book-cards__description\">${description}</span>\r\n\t\t\t\t\t\t<span class=\"book-cards__price\">${price}</span>\r\n\t\t\t\t\t\t<button class=\"button button--book-cards\">buy now</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>`\r\n\r\n\r\n\tconst containerBookCards = document.querySelector(\".content__container--book-cards\")\r\n\t\tcontainerBookCards.innerHTML += htmlBookCards\r\n\r\n\t}\r\n\r\n\t\r\n\tconst fetchData = async () => {\r\n        let data = await fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:${category}\"&key=${key}&printType=books&startIndex=${loadindex}&maxResults=6&langRestrict=en`);\r\n        let response = await data.json();\r\n\r\n\t\tfor (book of response.items) {\r\n\t\t\taddBookCards(book)\r\n\t\t}\r\n\t\tloadindex += 6\r\n\t};\r\n\r\n\r\n\r\nfunction addCategoriesToHtml(list) {\r\n\tconst contentCategories = document.querySelector(\".content__categories\")\r\n\r\n\r\n\tconst firstСategory = list[0]\r\n\tconst remainingListCategories = list.slice(1)\r\n\r\n\tcontentCategories.innerHTML += `<li data-id=\"${firstСategory}\" class=\"content__item content__item--active\">${firstСategory}</li>`\r\n\t\r\n\t\r\n\tfor (cat of remainingListCategories) {\r\n\t\tcontentCategories.innerHTML += `<li data-id=\"${cat}\" class=\"content__item\">${cat}</li>`\r\n\t}\r\n\r\n}\r\n\r\n\r\n\r\n\r\naddCategoriesToHtml(categoryesList)\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction addBannerToHtml(count, list) {\r\n\t\r\n\tconst contentImgBanner = document.querySelector(\".content__container--img-slider\")\r\n\tcontentImgBanner.innerHTML = `<img class=\"content__img content__img--banner\" src=${list[count]} alt=\"Фото\">`\r\n\t\r\n}\r\n\r\nfunction addMarkersToHtml(list) {\r\n\r\n\tconst contentContainerMarkers = document.querySelector(\".content__container--markers\")\r\n\r\n\r\n\tfor (i = 0; i < list.length; i++ ) {\r\n\t\tif (i === 0) {\r\n\t\t\tcontentContainerMarkers.innerHTML += `<div data-id=\"${i}\" class=\"content__marker content__marker--active\"></div>`\r\n         } else {\r\n\t\t\tcontentContainerMarkers.innerHTML += `<div data-id=\"${i}\" class=\"content__marker\"></div>`\r\n\t\t}\r\n\t\t\r\n\t}\r\n\r\n    return addBannerToHtml(0, list)\r\n\r\n}\r\n\r\n\r\naddMarkersToHtml(imageList)\r\n\r\nfunction autoScroll ()  {\r\n\t\t\r\n\t\tif (positionList < imageList.length) {\r\n\r\n\t\t\tsetTimeout(() => {\r\n\t\t\taddBannerToHtml(positionList, imageList)\r\n\t\t\tautoScroll()\r\n\r\n\t\t}, 5000)\r\n\t\t\t\r\n\t\t} else {\r\n\t\t\tpositionList = 0\r\n\t\t\tautoScroll()\r\n\t\t\t}\r\n\t\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://module_47_bookstore/./src/JS/main.js?\n}");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;