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

<<<<<<< HEAD
=======
/***/ "./src/clientModule/clientController/clientCrud.js":
/*!*********************************************************!*\
  !*** ./src/clientModule/clientController/clientCrud.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let { Client, Enterprise, Person } = __webpack_require__(/*! ../models */ \"./src/clientModule/models.js\");\r\nlet clientsCollection = __webpack_require__(/*! ./clientObjects */ \"./src/clientModule/clientController/clientObjects.js\");\r\n\r\ndocument.getElementById(\"createPerson\").addEventListener(\"click\", () => {\r\n    let luisa = new Person(\"Andres Quinto\", \"1.036.389.136\", \"../imgs/clients/personaHombre.png\");\r\n    console.log(luisa.img);\r\n    \r\n    console.log(\"Entré\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/clientModule/clientController/clientCrud.js?");

/***/ }),

/***/ "./src/clientModule/clientController/clientFunctions.js":
/*!**************************************************************!*\
  !*** ./src/clientModule/clientController/clientFunctions.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar clientList = __webpack_require__(/*! ./clientObjects.js */ \"./src/clientModule/clientController/clientObjects.js\");\r\nvar { Client } = __webpack_require__(/*! ../models.js */ \"./src/clientModule/models.js\");\r\nvar showClient = [];\r\nvar arr = [];\r\n\r\nfor (let i in clientList) {\r\n    arr.push(clientList[i]);\r\n}\r\n\r\n(Client.prototype.getClients = () => {\r\n\r\n    try {\r\n        for (let j = 0; j < arr.length; j++) {\r\n            showClient += arr[j].map((client) => {\r\n                return cardGeneric(client);\r\n            });\r\n        }\r\n        document.getElementById(\"allClients\").addEventListener('click', () => {\r\n            document.getElementById(\"client\").innerHTML = showClient;\r\n\r\n        });\r\n        document.getElementById(\"client\").innerHTML = showClient;\r\n    } catch (error) {\r\n        console.log(\"Ha ocurrido un error: \" + error);\r\n    }\r\n\r\n})();\r\n\r\n\r\n\r\nClient.prototype.getClientsPerson = (type) => {\r\n    var filterPersona = arr.filter(function (client) {\r\n        return (client.type === \"Persona\")\r\n    });\r\n    console.log(filterPersona);\r\n}\r\n\r\n(Client.prototype.getAllEnterprises = () => {\r\n\r\n    try {\r\n        document.getElementById(\"enterprises\").addEventListener('click', () => {\r\n            var showEnterprise = arr[0].map((enterprise) => {\r\n                return cardEnterprise(enterprise);\r\n            });\r\n            document.getElementById(\"client\").innerHTML = showEnterprise;\r\n            document.getElementById(\"moreEnterprise\").addEventListener('click', () => {\r\n                let enterpriseName= document.getElementById(\"enterpriseName\").value;\r\n                console.log(enterpriseName);\r\n            });\r\n        });\r\n    } catch (error) {\r\n        console.log(\"Ha ocurrido un error: \" + error);\r\n    }\r\n\r\n})();\r\n\r\n(Client.prototype.getAllPersons = () => {\r\n\r\n    try {\r\n        document.getElementById(\"persons\").addEventListener('click', () => {\r\n            var showPerson = arr[1].map((person) => {\r\n                return cardGeneric(person);\r\n            });\r\n            document.getElementById(\"client\").innerHTML = showPerson;\r\n        });\r\n    } catch (error) {\r\n        console.log(\"Ha ocurrido un error: \" + error);\r\n    }\r\n\r\n})();\r\n\r\n(Client.prototype.getClientsEnterpriseByName = () => {\r\n\r\n    try {\r\n        document.getElementById(\"searchButton\").addEventListener('click', () => {\r\n            let cliSearched = document.getElementById(\"clientToSearch\").value;\r\n            let foundCliente;\r\n            let actual;\r\n\r\n            var show = arr[0].map((client) => {\r\n                foundCliente = client.name === cliSearched.toUpperCase();\r\n                if (foundCliente) {\r\n                    actual = client;\r\n                }\r\n            });\r\n\r\n            if (actual !== undefined) {\r\n                document.getElementById(\"client\").innerHTML = cardEnterprise(actual);\r\n            } else {\r\n                document.getElementById(\"client\").innerHTML = \"<h2>Cliente no encontrado</h2>\";\r\n            }\r\n\r\n        });\r\n    } catch (error) {\r\n        console.log(\"Ha ocurrido un error: \" + error);\r\n    }\r\n\r\n})();\r\n\r\n\r\nfunction cardGeneric(client) {\r\n    return '<div class=\"card col-md-3 mr-5 mb-3\" style=\"width:400px\">' +\r\n        '<img src=\"' + client.img + '\" alt=\"Card image\" style=\"width:100%\">' +\r\n        '<div class=\"card-body\">' +\r\n        '<h4 class=\"card-title\">' + client.name + '</h4>' +\r\n        '<p class=\"card-text\">Sofka se debe a sus clientes a quienes consideramos socios estratégicos...</p>' +\r\n        '</div>' +\r\n        '</div>'\r\n}\r\n\r\nfunction cardEnterprise(clientEnterprise) {\r\n    return '<div class=\"card col-md-3 mr-5 mb-3\" style=\"width:400px\">' +\r\n        '<img src=\"' + clientEnterprise.img + '\" alt=\"Card image\" style=\"width:100%\">' +\r\n        '<div class=\"card-body\">' +\r\n        '<h4 class=\"card-title\" id=\"enterpriseName\">' + clientEnterprise.name + '</h4>' +\r\n        '<p class=\"card-text\">NIT: ' + clientEnterprise.nit + '</p>'+\r\n        '<p class=\"card-text\">TAMAÑO DE LA EMPRESA: ' + clientEnterprise.size + '</p>'+\r\n        '<p class=\"card-text\">SECTOR: ' + clientEnterprise.sector + '</p>' +\r\n        '<a href=\" ' + clientEnterprise.web + '\" id=\"moreEnterprise\" target=\"_blank\" class=\"btn btn-primary\">Ver mas</a>'+\r\n        '</div>' +\r\n        '</div>'\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/clientModule/clientController/clientFunctions.js?");

/***/ }),

/***/ "./src/clientModule/clientController/clientObjects.js":
/*!************************************************************!*\
  !*** ./src/clientModule/clientController/clientObjects.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar { Enterprise, Person } = __webpack_require__(/*! ../models.js */ \"./src/clientModule/models.js\");\r\n\r\nlet alpina = new Enterprise(\"ALPINA\", \"860.025.900-2\", \"5.500-10.000 empleados\", \"Alimentos y bébidas\", \"../imgs/clients/alpina.jpg\", \"https://www.alpina.com/\");\r\nlet proteccion = new Enterprise(\"PROTECCION\", \"800.229.739-0\", \"1.001-5.000 empleados\", \"Servicios Financiero\", \"../imgs/clients/proteccion.jpg\", \"https://www.proteccion.com\");\r\nlet sura = new Enterprise(\"SURA\", \"900.847.380 \", \"51-200 employees\", \"Servicios Financieroos\", \"../imgs/clients/sura.png\", \"https://www.segurossura.com.co\");\r\nlet coordinadora = new Enterprise(\"COORDINADORA\", \"890.904.713\", \"1.001-5.000 empleados\", \"Transporte de mercancia\", \"../imgs/clients/coordinadora.png\", \"http://www.coordinadora.com/\");\r\nlet alfaPeople = new Enterprise(\"ALFAPEOPLE\", \"830.013.988-9\", \"1.001-5.000 empleados\", \"Software y servicios informáticos\", \"../imgs/clients/alfapeople.png\", \"https://alfapeople.com/co/\" );\r\nlet amadeus = new Enterprise(\"AMADEUS\", \"800-159-527\", \"1.001-5.000 empleados\", \"Software y servicios informáticos\", \"../imgs/clients/amadeus.png\", \"https://amadeus.com/es\" );\r\nlet exito = new Enterprise(\"EXITO\", \"890.900.608-9\", \"Más de 10.000 empleados\", \"Comercio\", \"../imgs/clients/exito.png\", \"https://www.exito.com/\");\r\nlet infocorp = new Enterprise(\"INFOCORP\", \"No Aplica\", \"51-200 empleados\", \"Software y servicios informáticos\", \"../imgs/clients/infocorp.png\", \"http://www.infocorp.com.uy\" );\r\nlet iteriaUS = new Enterprise(\"ITERIAUS\", \"No Aplica\", \"51-200 empleados\", \"Software y servicios informáticos\", \"../imgs/clients/iteriaUS.png\", \"https://www.iteria.us/\");\r\nlet metroM = new Enterprise(\"METRO\", \"890.923.668-1\", \"51-200 empleados\", \"Transporte y movilidad\", \"../imgs/clients/metroM.png\", \"https://www.metrodemedellin.gov.co/\");\r\nlet sas = new Enterprise(\"SAS\", \"No Aplica\", \"Más de 10.000 empleados\", \"Software y servicios informáticos\", \"../imgs/clients/sas.png\", \"https://www.sas.com\");\r\nlet tecnoquimicas = new Enterprise(\"TECNOQUIMICAS\", \"890.300.466\", \"5,001-10,000 empleados\", \"Quimico y farmacéutico\", \"../imgs/clients/tecnoquimicas.jpg\", \"https://www.tqconfiable.com\");\r\nlet teleperformance = new Enterprise(\"TELEFORMANCE\", \"900.323.853-7\", \"Más de 10.000 empleados\", \"Telecomunicaciones\", \"../imgs/clients/teleperformance.png\", \"http://www.teleperformance.co\");\r\n\r\nlet juan = new Person(\"Juan Montoya\", \"1.038.435,932\", \"../imgs/clients/personaHombre.png\")\r\nlet liza = new Person(\"Liza Sanchez\", \"42.813.784\", \"../imgs/clients/personaMujer.png\")\r\nlet roxana = new Person(\"Roxana Gonzalez\", \"1.020.456.846\", \"../imgs/clients/personaMujer.png\");\r\nlet martha = new Person(\"Martha Arévalo\", \"37.080.664\", \"../imgs/clients/personaMujer.png\");\r\nlet gustavo = new Person(\"Gustavo Gómez\", \"1.100.950.935\", \"../imgs/clients/personaHombre.png\");\r\nlet diego = new Person(\"Diego Barco\", \"1.053.773.244\", \"../imgs/clients/personaHombre.png\");\r\nlet luisa = new Person(\"Luisa Montes\", \"1.036.389.136\", \"../imgs/clients/personaMujer.png\");\r\n\r\nlet clientsCollection = {\r\n    \"enterprises\": [alpina, proteccion, sura, coordinadora, alfaPeople, amadeus, exito, infocorp, iteriaUS, metroM, sas, tecnoquimicas, teleperformance ],\r\n    \"persons\": [juan, liza, roxana, martha, gustavo, diego, luisa]\r\n}\r\n\r\nmodule.exports = clientsCollection;\n\n//# sourceURL=webpack:///./src/clientModule/clientController/clientObjects.js?");

/***/ }),

/***/ "./src/clientModule/models.js":
/*!************************************!*\
  !*** ./src/clientModule/models.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nclass Project {\r\n    constructor(name, status, description, startDate, endDate) {\r\n        this.name = name;\r\n        this.status = status;\r\n        this.description = description;\r\n        this.startDate = startDate;\r\n        this.endDate = endDate;\r\n    }\r\n}\r\n\r\nclass Client {\r\n    constructor(name, type,img) {\r\n        this.name = name;\r\n        this.type = type;\r\n        this.img = img;\r\n    }\r\n};\r\n\r\nclass Enterprise extends Client {\r\n    constructor (name, nit, size, sector, img, web){\r\n        super (name, \"Empresa\", img)\r\n        this.nit = nit;\r\n        this.size = size;\r\n        this.sector = sector;\r\n        this.web = web;\r\n       \r\n    }\r\n};\r\n\r\nclass Person extends Client {\r\n    constructor(name, cedula, img) {\r\n        super(name, \"Persona\", img)\r\n        this.cedula = cedula;\r\n    }\r\n};\r\n\r\nclass Sofkiano {\r\n    constructor(name, id, characteristics, sofkaExperience, beforeSofkaExperience) {\r\n        this.name = name;\r\n        this.id = id;\r\n        this.characteristics = characteristics;\r\n        this.sofkaExperience = sofkaExperience;\r\n        this.beforeSofkaExperience = beforeSofkaExperience;\r\n    }\r\n}\r\n\r\nclass Technology {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n}\r\n\r\nmodule.exports = {Client, Person, Enterprise};\n\n//# sourceURL=webpack:///./src/clientModule/models.js?");

/***/ }),

>>>>>>> Client
/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\SOFKA\\\\Documents\\\\Proyectos\\\\FINALSofkatalogoImplementation\\\\src\\\\home.js'\");\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ })

/******/ });