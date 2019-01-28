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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/HTMLController.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/HTMLController.js":
/*!*******************************!*\
  !*** ./src/HTMLController.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/ProjectFunctions */ \"./src/model/ProjectFunctions.js\");\n/* harmony import */ var _model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\n\r\nconst JSON_FILE_FOR_PROJECTS = __webpack_require__(/*! ./data/ProjectData.json */ \"./src/data/ProjectData.json\");\r\nconst JSON_FILE_FOR_CLIENTS = __webpack_require__(/*! ./data/clientData.json */ \"./src/data/clientData.json\");\r\n\r\nconst JSON_PROJECTS = JSON_FILE_FOR_PROJECTS.projects;\r\nconst JSON_CLIENTS = JSON_FILE_FOR_CLIENTS;\r\n\r\nlet cards_view = document.getElementById('cards-content');\r\n\r\ndocument.getElementById(\"button-openSideBar\").addEventListener(\"click\", () => {\r\n    console.log(\"the bar is open\");\r\n    document.getElementById(\"main\").style.marginLeft = \"25%\";\r\n    document.getElementById(\"mySidebar\").style.width = \"25%\";\r\n    document.getElementById(\"mySidebar\").style.display = \"block\";\r\n    document.getElementById(\"button-openSideBar\").style.display = 'none';\r\n});\r\ndocument.getElementById(\"button-closeSideBar\").addEventListener(\"click\", () => {\r\n    console.log(\"the bar is close\");\r\n    document.getElementById(\"main\").style.marginLeft = \"0%\";\r\n    document.getElementById(\"mySidebar\").style.display = \"none\";\r\n    document.getElementById(\"button-openSideBar\").style.display = 'block';\r\n});\r\n\r\nlet projectFunctions = new _model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0___default.a();\r\n\r\nprojectFunctions.showAllProjects(JSON_PROJECTS);\r\n\n\n//# sourceURL=webpack:///./src/HTMLController.js?");

/***/ }),

/***/ "./src/data/ProjectData.json":
/*!***********************************!*\
  !*** ./src/data/ProjectData.json ***!
  \***********************************/
/*! exports provided: projects, default */
/***/ (function(module) {

eval("module.exports = {\"projects\":[{\"name\":\"pertrinum\",\"status\":\"100\",\"description\":\"PerTrinum incrementa sus clientes por medio de comunicados, promocionando e interactuando de manera efectiva con sus clientes. \",\"startDate\":\"2016-08-12\",\"endDate\":\"2016-08-12\",\"img\":\"http://www.sofka.com.co/wp-content/uploads/sofka-pretrinum-logo-ajax.png\"},{\"name\":\"hibot\",\"status\":\"100\",\"description\":\"HIBOT es el módulo que le faltaba a su Centro de Contactos para convertirlo en una herramienta aún más competitiva.\",\"startDate\":\"2015-01-15\",\"endDate\":\"2018-01-15\",\"img\":\"http://www.sofka.com.co/wp-content/uploads/hibot-1.png\"},{\"name\":\"frow\",\"status\":\"59\",\"description\":\"es una plataforma digital (app móvil + website) para la Industria Fashion y Retail en Colombia.\",\"startDate\":\"2017-08-05\",\"endDate\":\"2019-08-15\",\"img\":\"http://www.sofka.com.co/wp-content/uploads/frow-3.png\"},{\"name\":\"LabINN\",\"status\":\"60\",\"description\":\"Nuestro laboratorio de innovación dedicado a investigar y crear soluciones simples de alto impacto para clientes. Nuestro objetivo, por medio de la tecnología, mejorar la forma en que las personas viven y trabajan.\",\"startDate\":\"2017-08-05\",\"endDate\":\"2019-08-15\",\"img\":\"http://www.sofka.com.co/wp-content/uploads/sofka-labinn-logo-ajax.png\"},{\"name\":\"Facebook\",\"status\":\"100\",\"description\":\"Red social de alto impacto.\",\"startDate\":\"2017-08-05\",\"endDate\":\"2019-08-15\",\"img\":\"https://www.america-retail.com/static//2018/04/facebook-1.jpg\"}]};\n\n//# sourceURL=webpack:///./src/data/ProjectData.json?");

/***/ }),

/***/ "./src/data/clientData.json":
/*!**********************************!*\
  !*** ./src/data/clientData.json ***!
  \**********************************/
/*! exports provided: clients, default */
/***/ (function(module) {

eval("module.exports = {\"clients\":[{\"name\":\"Quinto\",\"status\":\"100\"},{\"name\":\"Mane\",\"status\":\"100\"},{\"name\":\"Alex\",\"status\":\"100\"}]};\n\n//# sourceURL=webpack:///./src/data/clientData.json?");

/***/ }),

/***/ "./src/model/ProjectFunctions.js":
/*!***************************************!*\
  !*** ./src/model/ProjectFunctions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nclass ProjectFunctions {\r\n\r\n  constructor() {\r\n    this.projectCards = document.getElementById('cards-content');\r\n  }\r\n\r\n  findValueByAnyAttributeInArray(value, attribute, projects) {\r\n    try {\r\n\r\n      let results = [];\r\n      Object.keys(projects).map(key => {\r\n        if (projects[key][attribute] === value) {\r\n          results.push(projects[key]);\r\n        }\r\n      });\r\n      return results;\r\n\r\n    } catch (error) {\r\n      console.log(\"Error: \" + error);\r\n    }\r\n  };\r\n\r\n  showAllProjects(jsonArray) {\r\n    for (let index = 0; index < jsonArray.length; index++) {\r\n      this.printCardHtml(jsonArray[index].img,\r\n        jsonArray[index].name,\r\n        jsonArray[index].description);\r\n    }\r\n  };\r\n\r\n  printSearchResults(resultsArray) {\r\n    for (let i = 0; i < resultsArray.length; i++) {\r\n      printCardHtml(resultsArray[i].img, resultsArray[i].name, resultsArray[i].description);\r\n    }\r\n  };\r\n\r\n  getCheckedRadioButton(radioButtons) {\r\n    for (let index = 0; index < radioButtons.length; index++) {\r\n      if (radioButtons[index].checked) {\r\n        return radioButtons[index].value;\r\n      }\r\n    }\r\n  };\r\n\r\n  printCardHtml(image, title, description) {\r\n\r\n    let cardToPrint = document.getElementById('cards-content');\r\n\r\n    let div = document.createElement('div');\r\n\r\n    div.className = 'card';\r\n    div.id = 'card'\r\n    div.style = 'width: 25rem; padding: 0.2%; margin: 2%';\r\n    div.innerHTML = \r\n    \"<img src=\" + image + \" class='card-img-top' style = 'height: 25rem'>\"\r\n    + \"\"\r\n    + \"<div class='card-body'  id='card-body' >\"\r\n    + \"<h5 class='card-title'> \" + title + \" </h5> \"\r\n    + \"<p class='card-text'> \" + description + \" </p>\"\r\n    + \"<button class='btn btn-warning' id='edit'>Editar</button>\"\r\n    + \"<button class='btn btn-danger' id='delete' style='float:right'>Borrar</button>\";\r\n\r\n    cardToPrint.appendChild(div);\r\n  };\r\n\r\n  addOptionsToSelectFromJson(select, jsonArray) {\r\n    for (let index = 0; index < jsonArray.length; index++) {\r\n      let option = document.createElement('option');\r\n      option.id = 'project-client';\r\n      option.innerText = jsonArray[index].name;\r\n      select.insertAdjacentElement(\"beforeend\", option);\r\n    }\r\n  };\r\n\r\n  addInputsToDivFromJsonWithName(div, jsonArray, name) {\r\n    for (let index = 0; index < jsonArray.length; index++) {\r\n      let label = document.createElement('label');\r\n      label.innerText = jsonArray[index].name;\r\n      let input = document.createElement('input');\r\n      input.type = 'checkbox';\r\n      input.name = name;\r\n      input.id = jsonArray[index].name;\r\n      label.appendChild(input);\r\n      div.appendChild(label);\r\n    }\r\n  };\r\n\r\n  getCheckedBoxes(checkboxArray) {\r\n    let checkedBoxes = [];\r\n    for (let index = 0; index < checkboxArray.length; index++) {\r\n      if (checkboxArray[index].checked) {\r\n        checkedBoxes.push(checkboxArray[index].id);\r\n      }\r\n    }\r\n    return checkedBoxes;\r\n  };\r\n}\r\n\r\nmodule.exports = ProjectFunctions;\n\n//# sourceURL=webpack:///./src/model/ProjectFunctions.js?");

/***/ })

/******/ });