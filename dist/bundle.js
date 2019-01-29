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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/HtmlController.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/HtmlController.js":
/*!*******************************!*\
  !*** ./src/HtmlController.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './model/SofkianFunctions'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\nconst JSON_FILE_FOR_SOFKIANS = __webpack_require__(/*! ./data/SofkianData.json */ \"./src/data/SofkianData.json\");\r\nconst JSON_SOFKIANS = JSON_FILE_FOR_SOFKIANS.sofkians;\r\n\r\nlet divMainClass = document.getElementById('cards-content'); \r\nlet divClientHTML = document.getElementById('client-container');\r\n\r\n\r\nlet homeBtn = document.getElementById('btnHome');\r\nlet clientBtn = document.getElementById('btnClients');\r\n\r\n\r\n\r\nlet sofkianFunctions = new !(function webpackMissingModule() { var e = new Error(\"Cannot find module './model/SofkianFunctions'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();\r\ndocument.getElementById('btnSofkian').addEventListener('click', () => {\r\n    sofkianFunctions.showAllSofkians(JSON_SOFKIANS);\r\n});\r\ndocument.getElementById('buscarSofkianBoton').addEventListener('click', () => {\r\n    sofkianFunctions.showEspecificSokfian(JSON_SOFKIANS);\r\n});\r\ndocument.getElementById(\"eliminarSofkianBoton\").addEventListener('click', () => {\r\n    sofkianFunctions.eliminarSokfian(JSON_SOFKIANS);\r\n});\r\ndocument.getElementById(\"editarSofkianBoton\").addEventListener('click', () => {\r\n    sofkianFunctions.incluirHtmlParaEditar(JSON_SOFKIANS);\r\n});\r\n\r\ndocument.addEventListener('click',function(e){\r\n    if(e.target && e.target.id === \"actualizarSofkian\"){\r\n        sofkianFunctions.editarSokfiano(JSON_SOFKIANS)\r\n    }\r\n});\r\n\r\ndocument.getElementById(\"agregarSofkianBoton\").addEventListener('click', () => {\r\n    sofkianFunctions.incluirHtmlParaAgregar();\r\n});\r\n\r\ndocument.addEventListener('click',function(e){\r\n    if(e.target && e.target.id === \"agregarSofkian\"){\r\n        sofkianFunctions.agregarSokfiano();\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/HtmlController.js?");

/***/ }),

/***/ "./src/data/SofkianData.json":
/*!***********************************!*\
  !*** ./src/data/SofkianData.json ***!
  \***********************************/
/*! exports provided: sofkians, default */
/***/ (function(module) {

eval("module.exports = {\"sofkians\":[{\"name\":\"Leyner\",\"id\":\"1\",\"characteristics\":\"sociable, proactivo, servicial\",\"sofkaExperience\":\"0\",\"beforeSofkaExperience\":\"1.5\",\"proyecto1\":\"Skynet\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"sofkatalogos\",\"img\":\"Leyner.jpeg\",\"tecnologiasManejadas\":\"angular 5, python 3.7, pytorch 1\"},{\"name\":\"Alex\",\"id\":\"2\",\"characteristics\":\"lider, sociable, leal\",\"sofkaExperience\":\"3\",\"beforeSofkaExperience\":\"5\",\"proyecto1\":\"Hibot\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"snapchat_2.0\",\"img\":\"Alex.jpeg\",\"tecnologiasManejadas\":\"xamarin 2, c# 5\"},{\"name\":\"Quinto\",\"id\":\"2\",\"characteristics\":\"lider, sociable, leal\",\"sofkaExperience\":\"6\",\"beforeSofkaExperience\":\"1\",\"proyecto1\":\"alexa sr\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"cortana jr\",\"img\":\"Quinto.jpeg\",\"tecnologiasManejadas\":\"dialogflow 2\"}]};\n\n//# sourceURL=webpack:///./src/data/SofkianData.json?");

/***/ })

/******/ });