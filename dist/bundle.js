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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/home.js");
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_SofkianFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/SofkianFunctions */ \"./src/model/SofkianFunctions.js\");\n/* harmony import */ var _model_SofkianFunctions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_model_SofkianFunctions__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst JSON_FILE_FOR_SOFKIANS = __webpack_require__(/*! ./data/SofkianData.json */ \"./src/data/SofkianData.json\");\r\nconst JSON_SOFKIANS = JSON_FILE_FOR_SOFKIANS.sofkians;\r\n\r\nlet divMainClass = document.getElementById('cards-content'); \r\nlet divClientHTML = document.getElementById('client-container');\r\n\r\n\r\nlet homeBtn = document.getElementById('btnHome');\r\nlet clientBtn = document.getElementById('btnClients');\r\n\r\n\r\n\r\nlet sofkianFunctions = new _model_SofkianFunctions__WEBPACK_IMPORTED_MODULE_0___default.a();\r\ndocument.getElementById('btnSofkian').addEventListener('click', () => {\r\n    sofkianFunctions.showAllSofkians(JSON_SOFKIANS);\r\n});\r\ndocument.getElementById('buscarSofkianBoton').addEventListener('click', () => {\r\n    sofkianFunctions.showEspecificSokfian(JSON_SOFKIANS);\r\n});\r\ndocument.getElementById(\"eliminarSofkianBoton\").addEventListener('click', () => {\r\n    sofkianFunctions.eliminarSokfian(JSON_SOFKIANS);\r\n});\r\ndocument.getElementById(\"editarSofkianBoton\").addEventListener('click', () => {\r\n    sofkianFunctions.incluirHtmlParaEditar(JSON_SOFKIANS);\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/HtmlController.js?");

/***/ }),

/***/ "./src/data/SofkianData.json":
/*!***********************************!*\
  !*** ./src/data/SofkianData.json ***!
  \***********************************/
/*! exports provided: sofkians, default */
/***/ (function(module) {

eval("module.exports = {\"sofkians\":[{\"name\":\"Leyner\",\"id\":\"1\",\"characteristics\":\"sociable, proactivo, servicial\",\"sofkaExperience\":\"0\",\"beforeSofkaExperience\":\"1.5\",\"proyecto1\":\"Skynet\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"sofkatalogos\",\"img\":\"Leyner.jpeg\",\"tecnologiasManejadas\":\"angular 5, python 3.7, pytorch 1\"},{\"name\":\"Alex\",\"id\":\"2\",\"characteristics\":\"lider, sociable, leal\",\"sofkaExperience\":\"3\",\"beforeSofkaExperience\":\"5\",\"proyecto1\":\"Hibot\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"snapchat_2.0\",\"img\":\"Alex.jpeg\",\"tecnologiasManejadas\":\"xamarin 2, c# 5\"},{\"name\":\"Quinto\",\"id\":\"2\",\"characteristics\":\"lider, sociable, leal\",\"sofkaExperience\":\"6\",\"beforeSofkaExperience\":\"1\",\"proyecto1\":\"alexa sr\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"cortana jr\",\"img\":\"Quinto.jpeg\",\"tecnologiasManejadas\":\"dialogflow 2\"}]};\n\n//# sourceURL=webpack:///./src/data/SofkianData.json?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n// let open_sideBar = document.getElementById(\"button-openSideBar\").addEventListener(\"click\", () => {\r\n//     document.getElementById(\"mySidebar\").style.display = \"block\";\r\n// });\r\n// let close_sideBar = document.getElementById(\"button-closeSideBar\").addEventListener(\"click\", () => {\r\n//     document.getElementById(\"mySidebar\").style.display = \"none\";\r\n// });\r\n\r\n__webpack_require__(/*! ./model/SofkianFunctions.js */ \"./src/model/SofkianFunctions.js\");\r\n__webpack_require__(/*! ./HtmlController */ \"./src/HtmlController.js\");\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/model/SofkianFunctions.js":
/*!***************************************!*\
  !*** ./src/model/SofkianFunctions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass SofkianFunctions {\r\n\r\n  constructor() {\r\n    this.sofkianCards = document.getElementById('sofkianDiv');  \r\n  }\r\n\r\n      showAllSofkians(jsonArray) {\r\n            var StringHtmlCardConcatenado;\r\n            for (let index = 0; index < jsonArray.length; index++) {\r\n                  StringHtmlCardConcatenado += this.cardSofkian(jsonArray[index]);\r\n            }\r\n            this.printCardHtml(StringHtmlCardConcatenado)\r\n      };\r\n\r\n      printCardHtml(StringHtmlCard) {\r\n            let div = document.getElementById('sofkianDiv');\r\n            div.innerHTML = StringHtmlCard;\r\n      };\r\n\r\n    cardSofkian(sofkian){\r\n      return '<div  class=\"card col-md-3 mr-5 mb-3\" style=\"width: 18rem; padding: 0.2%; margin: 2%\">' +\r\n      '<img src=\"imgs/' + sofkian.img + '\" class=\"card-img-top\" alt=\"...\">' +\r\n      '<div class=\"card-body\">' +\r\n      '<h5 id=\"divConSofkianName\" class=\"card-title\" id=\"enterpriseName\">' + sofkian.name + '</h5>' +\r\n      '<p id=\"divConSofkianCedula\" class=\"card-text\">cedula: ' + sofkian.id + '</p>' +\r\n      '<p id=\"divConSofkianCaracteristicas\" class=\"card-text\">caracteristicas: ' + sofkian.characteristics + '</p>' +\r\n      '<p id=\"divConSofkianExperiencia\" class=\"card-text\">Experiencia en Sofka: ' + sofkian.sofkaExperience + '</p>' +\r\n      '<p id=\"divConBeforeSofkianExperiencia\" class=\"card-text\">Experiencia pre-Sofka: ' + sofkian.beforeSofkaExperience + '</p>' +\r\n      '<p id=\"divConTecnologia1\" class=\"card-text\">tecnologias manejadas: ' + sofkian.tecnologiasManejadas + '</p>' +\r\n      '<p id=\"divConTecnologia1\" class=\"card-text\">proyecto 1: ' + sofkian.proyecto1 + '</p>' +\r\n      '<p id=\"divConTecnologia1\" class=\"card-text\">dedicacion: ' + sofkian.dedicacionProyecto1 + '%</p>' +\r\n      '<p id=\"divConTecnologia1\" class=\"card-text\">proyecto 2: ' + sofkian.proyecto2 + '</p>' +\r\n      '</div>' +\r\n      '</div>';  \r\n    }\r\n\r\n    showEspecificSokfian(jsonArray){\r\n            if (this.indicarSiExisteElSofkiano(jsonArray)){\r\n                  this.buscarSofkianoSofkianoPorNombre(jsonArray)\r\n            }\r\n            else{\r\n                  alert(\"no existe el sofkiano buscado\")\r\n            }\r\n    }\r\n\r\n    indicarSiExisteElSofkiano(jsonArray){\r\n        var sofkianoFueEncontrado = false;\r\n        var nombreDeSofianoBuscado = document.getElementById('nombreSofkianoBuscado').value;\r\n        for (var index = 0; index < jsonArray.length; index++) { \r\n              if (jsonArray[index].name === nombreDeSofianoBuscado){\r\n                    sofkianoFueEncontrado = true\r\n              }\r\n        }\r\n        return sofkianoFueEncontrado\r\n    }\r\n\r\n    buscarSofkianoSofkianoPorNombre(jsonArray){\r\n      var nombreDeSofianoBuscado = document.getElementById('nombreSofkianoBuscado').value;\r\n      for (var index = 0; index < jsonArray.length; index++) { \r\n            if (jsonArray[index].name === nombreDeSofianoBuscado){\r\n                  this.printCardHtml(this.cardSofkian(jsonArray[index])) ;\r\n            }\r\n      }  \r\n}\r\n      eliminarSokfian(jsonArray){\r\n            if(this.hayUnSofkianoBuscado()){\r\n                  this.eliminarSofkianoPorNombre(jsonArray)\r\n                  console.log(jsonArray)\r\n                  document.getElementById('sofkianDiv').innerHTML = \" \";\r\n           }\r\n           else{\r\n                 alert(\"no hay un sofkiano especificado para eliminar\")\r\n           }\r\n      }\r\n\r\n      hayUnSofkianoBuscado(){\r\n            var sofkianoEncontrado = false;\r\n            if(document.getElementById('sofkianDiv').innerHTML !== \"NaN\"){\r\n                  sofkianoEncontrado = true;\r\n            }\r\n            return sofkianoEncontrado;\r\n      }\r\n\r\n      eliminarSofkianoPorNombre(jsonArray){\r\n            var nombreDelEliminado = document.getElementById('divConSofkianName').innerHTML;\r\n            for( var index = 0; index <  jsonArray.length; index++){ \r\n                  if (jsonArray[index].name === nombreDelEliminado) {\r\n                        jsonArray.splice(index, 1); \r\n                  }\r\n            }\r\n      }\r\n      incluirHtmlParaEditar(jsonArray){\r\n            document.getElementById('sofkianDiv').innerHTML =  this.formEdicionSofkian(this.devolverSofkiano(jsonArray));\r\n      }\r\n      devolverSofkiano(jsonArray){\r\n            var sofkiano;\r\n            var nombreDelEditado = document.getElementById('divConSofkianName').innerHTML;\r\n            for( var index = 0; index <  jsonArray.length; index++){ \r\n                  if (jsonArray[index].name === nombreDelEditado) {\r\n                        sofkiano = jsonArray[index];\r\n                  }\r\n            }\r\n            return sofkiano;\r\n      }\r\n\r\n      formEdicionSofkian(sofkian) {\r\n            return '<div  class=\"card col-md-3 mr-5 mb-3\" style=\"width: 18rem; padding: 0.2%; margin: 2%\">' +\r\n            '<img src=\"imgs/' + sofkian.img + '\" class=\"card-img-top\" alt=\"...\">' +\r\n            '<h5 id=\"divConSofkianName\" class=\"card-title\" id=\"enterpriseName\">' + sofkian.name + '</h5>' +\r\n            '<br>' +\r\n            '<div class=\"form-group\">' +\r\n            '<label for=\"exampleInputEmail1\"><strong>Nombre:</strong></label>'+\r\n            '<input type=\"email\" class=\"form-control\" id=\"nombre_Updt\" aria-describedby=\"emailHelp\" placeholder=\"'+sofkian.name+'\" value=\"'+sofkian.name+'\">'+\r\n            '</div>' +\r\n            '<br>' +\r\n            '<div class=\"form-group\">' +\r\n            '<label for=\"exampleInputEmail1\"><strong>Cedula:</strong></label>'+\r\n            '<input type=\"email\" class=\"form-control\" id=\"id_Updt\" aria-describedby=\"emailHelp\" placeholder=\"'+sofkian.id+'\" value=\"'+sofkian.id+'\">'+\r\n            '</div>' +\r\n            '<br>' +\r\n            '<div class=\"form-group\">' +\r\n            '<label for=\"exampleInputEmail1\"><strong>Caracteristicas:</strong></label>'+\r\n            '<input type=\"textarea\" class=\"form-control\" id=\"characteristics_Updt\" aria-describedby=\"emailHelp\" placeholder=\"'+sofkian.characteristics+'\" value=\"'+sofkian.characteristics+'\">'+\r\n            '</div>' +\r\n            '<br>' +\r\n            '<div class=\"form-group\">' +\r\n            '<label for=\"exampleInputEmail1\"><strong>Experiencia en sofka:</strong></label>'+\r\n            '<input type=\"textarea\" class=\"form-control\" id=\"sofkaExperience_Updt\" aria-describedby=\"emailHelp\" placeholder=\"'+sofkian.sofkaExperience+'\" value=\"'+sofkian.sofkaExperience+'\">'+\r\n            '</div>' +\r\n            '<br>' +\r\n            '<div class=\"form-group\">' +\r\n            '<label for=\"exampleInputEmail1\"><strong>Experiencia pre-sofka:</strong></label>'+\r\n            '<input type=\"textarea\" class=\"form-control\" id=\"beforeSofkaExperienced_Updt\" aria-describedby=\"emailHelp\" placeholder=\"'+sofkian.beforeSofkaExperience+'\" value=\"'+sofkian.beforeSofkaExperience+'\">'+\r\n            '</div>' +\r\n            '<br>' +\r\n            '<div class=\"form-group\">' +\r\n            '<label for=\"exampleInputEmail1\"><strong>Tecnologias manejadas:</strong></label>'+\r\n            '<input type=\"textarea\" class=\"form-control\" id=\"tecnologias_Updt\" aria-describedby=\"emailHelp\" placeholder=\"'+sofkian.tecnologiasManejadas+'\" value=\"'+sofkian.tecnologiasManejadas+'\">'+\r\n            '</div>' +\r\n            '<div class=\"form-group\">' +\r\n            '<label for=\"exampleInputEmail1\"><strong>Proyecto 1:</strong></label>'+\r\n            '<input type=\"textarea\" class=\"form-control\" id=\"proyecto1_Updt\" aria-describedby=\"emailHelp\" placeholder=\"'+sofkian.proyecto1+'\" value=\"'+sofkian.proyecto1+'\">'+\r\n            '</div>' +\r\n            '<div class=\"form-group\">' +\r\n            '<label for=\"exampleInputEmail1\"><strong>Porcentaje proyecto 1:</strong></label>'+\r\n            '<input type=\"textarea\" class=\"form-control\" id=\"proyecto1_porcentaje_Updt\" aria-describedby=\"emailHelp\" placeholder=\"'+sofkian.dedicacionProyecto1+'\" value=\"'+sofkian.dedicacionProyecto1+'\">'+\r\n            '</div>' +\r\n            '<div class=\"form-group\">' +\r\n            '<label for=\"exampleInputEmail1\"><strong>Proyecto 1:</strong></label>'+\r\n            '<input type=\"textarea\" class=\"form-control\" id=\"proyecto2_Updt\" aria-describedby=\"emailHelp\" placeholder=\"'+sofkian.proyecto2+'\" value=\"'+sofkian.proyecto2+'\">'+\r\n            '</div>' +\r\n            '<a href=\"#\" class=\"btn btn-primary\" id=\"actualizarSofkian\">Actualizar</a>' +\r\n            '</div>';\r\n        }\r\n      \r\n\r\n\r\n}\r\n\r\nmodule.exports = SofkianFunctions;\n\n//# sourceURL=webpack:///./src/model/SofkianFunctions.js?");

/***/ })

/******/ });