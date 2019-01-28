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

/***/ "./src/clientModule/clientController/clientCrud.js":
/*!*********************************************************!*\
  !*** ./src/clientModule/clientController/clientCrud.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let { Client, Enterprise, Person } = __webpack_require__(/*! ../models */ \"./src/clientModule/models.js\");\r\n\r\nlet clientsCollection = __webpack_require__(/*! ./clientObjects */ \"./src/clientModule/clientController/clientObjects.js\");\r\nlet nameEmpresa = document.getElementById(\"nameEnterprise\");\r\nlet nitEmpresa = document.getElementById(\"nitEnterprise\");\r\nlet size = document.getElementById(\"sizeEnterprise\");\r\nlet sector = document.getElementById(\"sectorEnterprise\");\r\n\r\nlet namePersona = document.getElementById(\"nameP\");\r\nlet cedulaPersona = document.getElementById(\"cedulaP\");\r\n\r\nlet { divRow, cleanHtml } = __webpack_require__(/*! ../clientController/clientFunctions */ \"./src/clientModule/clientController/clientFunctions.js\");\r\n\r\nfunction createEnterprise() {\r\n    try {\r\n        document.getElementById(\"saveEnterprise\").addEventListener(\"click\", () => {\r\n\r\n            if (nameEmpresa.value === \"\" || nitEmpresa.value === \"\") {\r\n                alert(\"Todos lo campos soon requeridos\");\r\n            } else {\r\n                let newEnterprise = new Enterprise(nameEmpresa.value.toUpperCase(), nitEmpresa.value, size.value, sector.value, \"../imgs/clients/enterpriseDefault.jpg\");\r\n                clientsCollection.enterprises.push(newEnterprise);\r\n                cleanFormEnterprise();\r\n                showMessageEnterprise();\r\n                cleanHtml();\r\n                getClients();\r\n            }\r\n\r\n        });\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n};\r\n\r\nfunction createPerson() {\r\n    try {\r\n        document.getElementById(\"savePerson\").addEventListener(\"click\", () => {\r\n            if (namePersona.value === \"\" || cedulaPersona.value === \"\") {\r\n                alert(\"Todos lo campos soon requridos\");\r\n            } else {\r\n                let newPerson = new Person(namePersona.value.toUpperCase(), cedulaPersona.value, \"../imgs/clients/personDefault.png\");\r\n                clientsCollection.persons.push(newPerson);\r\n                cleanFormPerson();\r\n                showMessagePerson();\r\n                cleanHtml();\r\n                getClients();\r\n            }\r\n        });\r\n    } catch (error) {\r\n        console.log(error);\r\n    }\r\n};\r\n\r\n\r\nClient.prototype.editClient = (client) => {\r\n\r\n    let divCreated;\r\n    let buttonEdit = document.createElement('button');\r\n    buttonEdit.innerHTML = `<p>Save changes</p>`;\r\n    buttonEdit.style = \"height: 40px\";\r\n    buttonEdit.className = \"btn btn-success mb-3\";\r\n\r\n    cleanHtml();\r\n\r\n    if (client.type === \"Empresa\") {\r\n        divCreated = createDiv();\r\n        divCreated.innerHTML = formEnterprise(client);\r\n\r\n        buttonEdit.onclick = () => {\r\n            try {\r\n                let nameEnterprise = document.getElementById(\"nameEnterp\").value.toUpperCase();\r\n                let nitEnterprise = document.getElementById(\"nitEnterp\").value;\r\n                let sizeEnterprise = document.getElementById(\"sizeEnterp\").value;\r\n                let sectorEnterprise = document.getElementById(\"sectorEnterp\").value;\r\n                \r\n                for (let i = 0; i < clientsCollection.enterprises.length; i++) {\r\n\r\n                    if (clientsCollection.enterprises[i].nit === client.nit) {\r\n                        clientsCollection.enterprises[i].name = nameEnterprise;\r\n                        clientsCollection.enterprises[i].nit = nitEnterprise;\r\n                        clientsCollection.enterprises[i].size = sizeEnterprise;\r\n                        clientsCollection.enterprises[i].sector = sectorEnterprise;\r\n\r\n                        returnBackUpdate();\r\n                    }\r\n\r\n                }\r\n\r\n                console.log(nameEnterprise, nitEnterprise, sizeEnterprise, sectorEnterprise);\r\n            } catch (error) {\r\n                console.log(error);\r\n            }\r\n        };\r\n\r\n        divCreated.appendChild(buttonEdit);\r\n        divRow.appendChild(divCreated);\r\n\r\n    } else {\r\n        divCreated = createDiv();\r\n        divCreated.innerHTML = formPerson(client);\r\n\r\n        buttonEdit.onclick = () => {\r\n            let namePerson = document.getElementById(\"namePerson\").value.toUpperCase();\r\n            let cedulaPerson = document.getElementById(\"cedulaPerson\").value;\r\n\r\n            for (let i = 0; i < clientsCollection.persons.length; i++) {\r\n                if (clientsCollection.persons[i].cedula === cedulaPerson) {\r\n                    clientsCollection.persons[i].name = namePerson;\r\n                    clientsCollection.persons[i].cedula = cedulaPerson;\r\n\r\n                    returnBackUpdate();\r\n                }\r\n            }\r\n\r\n        };\r\n\r\n        divCreated.appendChild(buttonEdit);\r\n        divRow.appendChild(divCreated);\r\n    }\r\n}\r\n\r\nClient.prototype.deleteClient = (client) => {\r\n    try {\r\n        if (client.type === \"Empresa\") {\r\n            for (let i = 0; i < clientsCollection.enterprises.length; i++) {\r\n                if (clientsCollection.enterprises[i].nit === client.nit) {\r\n                    clientsCollection.enterprises.splice(i, 1);\r\n\r\n                    returnBackDelete();\r\n                }\r\n            }\r\n        } else {\r\n            for (let i = 0; i < clientsCollection.persons.length; i++) {\r\n                if (clientsCollection.persons[i].cedula === client.cedula) {\r\n                    clientsCollection.persons.splice(i, 1);\r\n\r\n                    returnBackDelete();\r\n                }\r\n            }\r\n        }\r\n    } catch (error) {\r\n\r\n    }\r\n\r\n}\r\n\r\nfunction formEnterprise(enterprise) {\r\n    return `<br><input type=\"text\" class=\"form-control\" id=\"nameEnterp\" placeholder=\"Nombre\" value=${enterprise.name}>\r\n    <br>\r\n    <input type=\"text\" class=\"form-control\" id=\"nitEnterp\" placeholder=\"Nit\"  value=${enterprise.nit}>\r\n    <br>\r\n    <label for=\"sizeEnterp\">Tamaño de la empresa</label>\r\n    <select class=\"form-control\" id=\"sizeEnterp\">\r\n        <option>0-10 Empleados</option>\r\n        <option>11-50 Empleados</option>\r\n        <option>51-200 Empleados</option>\r\n        <option>201-500 Empleados</option>\r\n        <option>1.001-5.000 Empleados</option>\r\n        <option>5.001-10.000 Empleados</option>\r\n        <option>Más de 10.000 Empleados</option>\r\n    </select>\r\n    <br>\r\n    <label for=\"sectorEnterp\">Sector de la empresa</label>\r\n    <select class=\"form-control\" id=\"sectorEnterp\">\r\n        <option>Agropecuario</option>\r\n        <option>Alimentos y bébidas</option>\r\n        <option>Arquitectura y construcción</option>\r\n        <option>Automotor</option>\r\n        <option>Comercio</option>\r\n        <option>Consultoría</option>\r\n        <option>Cosméticos y productos médicos</option>\r\n        <option>Energía, gas y agua</option>\r\n        <option>Electrodomésticos</option>\r\n        <option>Empaques</option>\r\n        <option>Materiales de construcción</option>\r\n        <option>Petróleo</option>\r\n        <option>Productos de cuidado personal y del hogar</option>\r\n        <option>Quimico y farmacéutico</option>\r\n        <option>Servicios de tecnología</option>\r\n        <option>Servicios financieros</option>\r\n        <option>Software y servicios informáticos</option>\r\n        <option>Tabaco</option>\r\n        <option>Telecomunicaciones</option>\r\n        <option>Transporte de mercancia</option>\r\n        <option>Transporte y movilidad</option>\r\n        <option>Turismo y ocio</option>\r\n    </select> <br>`\r\n}\r\n\r\nfunction formPerson(person) {\r\n    return `<br> <input type=\"text\" class=\"form-control\" id=\"namePerson\" placeholder=\"Nombre\" value=${person.name}>\r\n    <br>\r\n    <input type=\"text\" class=\"form-control\" id=\"cedulaPerson\" placeholder=\"Cédula\"  value=${person.cedula}>\r\n    <br>`\r\n}\r\n\r\nfunction createDiv() {\r\n    let div = document.createElement('div');\r\n    div.className = \"card col-md-12 mr-5 mb-5\";\r\n    div.style = \"width:200px\";\r\n\r\n    return div\r\n}\r\n\r\nfunction cleanFormEnterprise() {\r\n    nameEmpresa.value = \" \";\r\n    nitEmpresa.value = \" \";\r\n}\r\n\r\nfunction cleanFormPerson() {\r\n    namePersona.value = \" \";\r\n    cedulaPersona.value = \" \";\r\n}\r\n\r\nfunction showMessageEnterprise() {\r\n    document.getElementById(\"messageEnterprise\").innerHTML = '<div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">' +\r\n        '<strong>Genial!</strong> Empresa creada' +\r\n        '<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">' +\r\n        '<span aria-hidden=\"true\">&times;</span>' +\r\n        '</button>' +\r\n        '</div>'\r\n}\r\n\r\nfunction showMessagePerson() {\r\n    document.getElementById(\"messagePerson\").innerHTML = '<div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">' +\r\n        '<strong>Genial!</strong> Persona creada' +\r\n        '<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">' +\r\n        '<span aria-hidden=\"true\">&times;</span>' +\r\n        '</button>' +\r\n        '</div>'\r\n}\r\n\r\nfunction returnBackUpdate() {\r\n    alert('Cliente actualizado');\r\n    cleanHtml();\r\n    getClients();\r\n}\r\n\r\nfunction returnBackDelete() {\r\n    alert('Cliente eliminado');\r\n    cleanHtml();\r\n    getClients();\r\n}\r\n\r\nfunction getClients() {\r\n    Client.prototype.getClients();\r\n}\n\n//# sourceURL=webpack:///./src/clientModule/clientController/clientCrud.js?");

/***/ }),

/***/ "./src/clientModule/clientController/clientFunctions.js":
/*!**************************************************************!*\
  !*** ./src/clientModule/clientController/clientFunctions.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (117:0)\\nYou may need an appropriate loader to handle this file type.\\n|         }\\r\\n|     }); \\r\\n> <<<<<<< Updated upstream\\r\\n| =======\\r\\n| \\r\");\n\n//# sourceURL=webpack:///./src/clientModule/clientController/clientFunctions.js?");

/***/ }),

/***/ "./src/clientModule/clientController/clientObjects.js":
/*!************************************************************!*\
  !*** ./src/clientModule/clientController/clientObjects.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar { Enterprise, Person } = __webpack_require__(/*! ../models.js */ \"./src/clientModule/models.js\");\r\n\r\nlet alpina = new Enterprise(\"ALPINA\", \"860.025.900-2\", \"5.500-10.000 empleados\", \"Alimentos y bébidas\", \"../imgs/clients/alpina.jpg\", \"https://www.alpina.com/\");\r\nlet proteccion = new Enterprise(\"PROTECCION\", \"800.229.739-0\", \"1.001-5.000 empleados\", \"Servicios Financiero\", \"../imgs/clients/proteccion.jpg\", \"https://www.proteccion.com\");\r\nlet sura = new Enterprise(\"SURA\", \"900.847.380 \", \"51-200 employees\", \"Servicios Financieroos\", \"../imgs/clients/sura.png\", \"https://www.segurossura.com.co\");\r\nlet coordinadora = new Enterprise(\"COORDINADORA\", \"890.904.713\", \"1.001-5.000 empleados\", \"Transporte de mercancia\", \"../imgs/clients/coordinadora.png\", \"http://www.coordinadora.com/\");\r\nlet alfaPeople = new Enterprise(\"ALFAPEOPLE\", \"830.013.988-9\", \"1.001-5.000 empleados\", \"Software y servicios informáticos\", \"../imgs/clients/alfapeople.png\", \"https://alfapeople.com/co/\" );\r\nlet amadeus = new Enterprise(\"AMADEUS\", \"800-159-527\", \"1.001-5.000 empleados\", \"Software y servicios informáticos\", \"../imgs/clients/amadeus.png\", \"https://amadeus.com/es\" );\r\nlet exito = new Enterprise(\"EXITO\", \"890.900.608-9\", \"Más de 10.000 empleados\", \"Comercio\", \"../imgs/clients/exito.png\", \"https://www.exito.com/\");\r\nlet infocorp = new Enterprise(\"INFOCORP\", \"No Aplica\", \"51-200 empleados\", \"Software y servicios informáticos\", \"../imgs/clients/infocorp.png\", \"http://www.infocorp.com.uy\" );\r\nlet iteriaUS = new Enterprise(\"ITERIAUS\", \"No Aplica\", \"51-200 empleados\", \"Software y servicios informáticos\", \"../imgs/clients/iteriaUS.png\", \"https://www.iteria.us/\");\r\nlet metroM = new Enterprise(\"METRO DE MEDELLIN\", \"890.923.668-1\", \"51-200 empleados\", \"Transporte y movilidad\", \"../imgs/clients/metroM.png\", \"https://www.metrodemedellin.gov.co/\");\r\nlet sas = new Enterprise(\"SAS\", \"No Aplica\", \"Más de 10.000 empleados\", \"Software y servicios informáticos\", \"../imgs/clients/sas.png\", \"https://www.sas.com\");\r\nlet tecnoquimicas = new Enterprise(\"TECNOQUIMICAS\", \"890.300.466\", \"5,001-10,000 empleados\", \"Quimico y farmacéutico\", \"../imgs/clients/tecnoquimicas.jpg\", \"https://www.tqconfiable.com\");\r\nlet teleperformance = new Enterprise(\"TELEFORMANCE\", \"900.323.853-7\", \"Más de 10.000 empleados\", \"Telecomunicaciones\", \"../imgs/clients/teleperformance.png\", \"http://www.teleperformance.co\");\r\n\r\n\r\nlet juan = new Person(\"JUAN ESTEBAN MONTOYA\", \"1.038.435,932\", \"../imgs/clients/personaHombre.png\")\r\nlet liza = new Person(\"LIZA\", \"42.813.784\", \"../imgs/clients/personaMujer.png\")\r\nlet roxana = new Person(\"ROXANA\", \"1.020.456.846\", \"../imgs/clients/personaMujer.png\");\r\nlet martha = new Person(\"MARTHA\", \"37.080.664\", \"../imgs/clients/personaMujer.png\");\r\nlet gustavo = new Person(\"GUSTAVO\", \"1.100.950.935\", \"../imgs/clients/personaHombre.png\");\r\nlet diego = new Person(\"DIEGO\", \"1.053.773.244\", \"../imgs/clients/personaHombre.png\");\r\nlet luisa = new Person(\"LUISA\", \"1.036.389.136\", \"../imgs/clients/personaMujer.png\");\r\nlet camilo = new Person(\"JUAN CAMILO MUÑOZ\", \"15.3456.451\", \"../imgs/clients/personaHombre.png\");\r\n\r\nlet clientsCollection = {\r\n    \"enterprises\": [alpina, proteccion, sura, coordinadora, alfaPeople, amadeus, exito, infocorp, iteriaUS, metroM, sas, tecnoquimicas, teleperformance],\r\n    \"persons\": [juan, liza, roxana, martha, gustavo, diego, luisa, camilo]\r\n}\r\n\r\nmodule.exports = clientsCollection;\n\n//# sourceURL=webpack:///./src/clientModule/clientController/clientObjects.js?");

/***/ }),

/***/ "./src/clientModule/models.js":
/*!************************************!*\
  !*** ./src/clientModule/models.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nclass Project {\n    constructor(name, status, description, startDate, endDate) {\n        this.name = name;\n        this.status = status;\n        this.description = description;\n        this.startDate = startDate;\n        this.endDate = endDate;\n    }\n}\n\nclass Client {\n    constructor(name, type,img) {\n        this.name = name;\n        this.type = type;\n        this.img = img;\n    }\n};\n\nclass Enterprise extends Client {\n    constructor (name, nit, size, sector, img, web){\n        super (name, \"Empresa\", img)\n        this.nit = nit;\n        this.size = size;\n        this.sector = sector;\n        this.web = web;\n       \n    }\n};\n\nclass Person extends Client {\n    constructor(name, cedula, img) {\n        super(name, \"Persona\", img)\n        this.cedula = cedula;\n    }\n};\n\nclass Sofkiano {\n    constructor(name, id, characteristics, sofkaExperience, beforeSofkaExperience) {\n        this.name = name;\n        this.id = id;\n        this.characteristics = characteristics;\n        this.sofkaExperience = sofkaExperience;\n        this.beforeSofkaExperience = beforeSofkaExperience;\n    }\n}\n\nclass Technology {\n    constructor(name) {\n        this.name = name;\n    }\n}\n\nmodule.exports = {Client, Person, Enterprise};\n\n//# sourceURL=webpack:///./src/clientModule/models.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./clientModule/clientController/clientFunctions */ \"./src/clientModule/clientController/clientFunctions.js\");\r\n__webpack_require__(/*! ./clientModule/clientController/clientCrud */ \"./src/clientModule/clientController/clientCrud.js\");\r\n\r\ntry {\r\n    document.getElementById(\"button-openSideBar\").addEventListener(\"click\", () => {\r\n        console.log(\"the bar is open\");\r\n        document.getElementById(\"main\").style.marginLeft = \"25%\";\r\n        document.getElementById(\"mySidebar\").style.width = \"25%\";\r\n        document.getElementById(\"mySidebar\").style.display = \"block\";\r\n        document.getElementById(\"cards-content\").style.display = 'none';\r\n    });\r\n    document.getElementById(\"button-closeSideBar\").addEventListener(\"click\", () => {\r\n        console.log(\"the bar is close\");\r\n        document.getElementById(\"main\").style.marginLeft = \"0%\";\r\n        document.getElementById(\"mySidebar\").style.display = \"none\";\r\n        document.getElementById(\"cards-content\").style.display = \"inline-block\";\r\n        document.getElementById(\"cards-content\").style.display = 'block';\r\n    });\r\n} catch (error) {\r\n    console.log(error);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ })

/******/ });