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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/projectController/ProjectController.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/ProjectData.json":
/*!***********************************!*\
  !*** ./src/data/ProjectData.json ***!
  \***********************************/
/*! exports provided: projects, default */
/***/ (function(module) {

eval("module.exports = {\"projects\":[{\"id\":\"1\",\"name\":\"pertrinum\",\"status\":\"Done\",\"description\":\"PerTrinum incrementa sus clientes por medio de comunicados, promocionando e interactuando de manera efectiva con sus clientes. \",\"startDate\":\"2016-08-12\",\"endDate\":\"2016-08-12\",\"image\":\"http://www.sofka.com.co/wp-content/uploads/sofka-pretrinum-logo-ajax.png\",\"client\":\"Sofka\",\"technologies\":[{\"name\":\"Javascript\",\"version\":\"1.0\"},{\"name\":\"Java\",\"version\":\"15\"},{\"name\":\"Quinto\",\"version\":\"1.0.1\"}],\"sofkianos\":[{\"name\":\"Quinto\"},{\"name\":\"Mariana\"}]},{\"id\":\"2\",\"name\":\"hibot\",\"status\":\"WIP\",\"description\":\"HIBOT es el módulo que le faltaba a su Centro de Contactos para convertirlo en una herramienta aún más competitiva.\",\"startDate\":\"2015-01-15\",\"endDate\":\"2018-01-15\",\"image\":\"http://www.sofka.com.co/wp-content/uploads/hibot-1.png\",\"client\":\"Sofka\",\"technologies\":[{\"name\":\"Ruby\",\"version\":\"1.0\"},{\"name\":\"PHP\",\"version\":\"15\"},{\"name\":\"Quinto\",\"version\":\"1.0.1\"}],\"sofkianos\":[{\"name\":\"Manuel\"},{\"name\":\"Alex\"}]},{\"id\":\"3\",\"name\":\"frow\",\"status\":\"To Do\",\"description\":\"es una plataforma digital (app móvil + website) para la Industria Fashion y Retail en Colombia.\",\"startDate\":\"2017-08-05\",\"endDate\":\"2019-08-15\",\"image\":\"http://www.sofka.com.co/wp-content/uploads/frow-3.png\",\"client\":\"Sofka\",\"technologies\":[{\"name\":\"Python\",\"version\":\"1.0\"},{\"name\":\"MySql\",\"version\":\"15\"},{\"name\":\"Quinto\",\"version\":\"1.0.1\"}],\"sofkianos\":[{\"name\":\"Leyner\"},{\"name\":\"Oscar\"}]}]};\n\n//# sourceURL=webpack:///./src/data/ProjectData.json?");

/***/ }),

/***/ "./src/data/clientData.json":
/*!**********************************!*\
  !*** ./src/data/clientData.json ***!
  \**********************************/
/*! exports provided: clients, default */
/***/ (function(module) {

eval("module.exports = {\"clients\":[{\"name\":\"Quinto\"},{\"name\":\"Mane\"},{\"name\":\"Alex\"},{\"name\":\"Sofka\"}]};\n\n//# sourceURL=webpack:///./src/data/clientData.json?");

/***/ }),

/***/ "./src/model/ProjectClass.js":
/*!***********************************!*\
  !*** ./src/model/ProjectClass.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Project {\r\n  constructor(name, status, description, startDate, endDate, image, client, tech, sofkianos, id) {\r\n    this.name = name;\r\n    this.id = id;\r\n    this.status = status;\r\n    this.description = description;\r\n    this.startDate = startDate;\r\n    this.endDate = endDate;\r\n    this.image = image;\r\n    this.client = client;\r\n    this.technologies = tech;\r\n    this.sofkianos = sofkianos;\r\n  }\r\n};\r\n\r\nmodule.exports = Project;\n\n//# sourceURL=webpack:///./src/model/ProjectClass.js?");

/***/ }),

/***/ "./src/model/ProjectFunctions.js":
/*!***************************************!*\
  !*** ./src/model/ProjectFunctions.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n\r\nconst JSON_CLIENTS = __webpack_require__(/*! ./../data/clientData.json */ \"./src/data/clientData.json\").clients;\r\nconst JSON_PROJECTS = __webpack_require__(/*! ../data/ProjectData.json */ \"./src/data/ProjectData.json\").projects;\r\nlet project = __webpack_require__(/*! ./ProjectClass */ \"./src/model/ProjectClass.js\");\r\n\r\n\r\nvar projectCards = document.getElementById('projects');\r\n\r\nfunction createProject() {\r\n  try {\r\n    let id = 4;\r\n    let name = document.getElementById('project-name').value;\r\n    let description = document.getElementById('project-description').value;\r\n    let starDate = document.getElementById('project-start-date').value;\r\n    let endDate = document.getElementById('project-end-date').value;\r\n    let image = document.getElementById('project-image').value;\r\n    let client = document.getElementById('project-client').value;\r\n    let projectTechnologies = document.getElementsByName('technology');\r\n    let projectSofkianos = document.getElementsByName('sofkiano');\r\n    let technologies = getCheckedBoxes(projectTechnologies);\r\n    let sofkianos = getCheckedBoxes(projectSofkianos);\r\n    let projectToCreate = new Project(name, 0, description, starDate, endDate, image, client, technologies, sofkianos, id);\r\n    JSON.stringify(JSON_PROJECTS.push(projectToCreate));\r\n    id++;\r\n  } catch (error) {\r\n  }\r\n};\r\n\r\nfunction findValueByAnyAttribute(value, attribute) {\r\n  try {\r\n\r\n    let results = [];\r\n    Object.keys(projects).map(key => {\r\n      if (JSON_PROJECTS.projects[key][attribute] === value) {\r\n        results.push(projects[key]);\r\n      }\r\n    });\r\n    return results;\r\n  } catch (error) {\r\n  }\r\n};\r\n\r\nfunction showAllProjects() {\r\n  try {\r\n    projectCards.innerHTML = \"\";\r\n    for (let index = 0; index < JSON_PROJECTS.length; index++) {\r\n      printCardHtml(JSON_PROJECTS[index]);\r\n    }\r\n  } catch (error) {\r\n  }\r\n};\r\n\r\nfunction printSearchResults(resultsArray) {\r\n  for (let i = 0; i < resultsArray.length; i++) {\r\n    printCardHtml(resultsArray[i]);\r\n  }\r\n};\r\n\r\nfunction getCheckedRadioButton(radioButtons) {\r\n  for (let index = 0; index < radioButtons.length; index++) {\r\n    if (radioButtons[index].checked) {\r\n      return radioButtons[index].value;\r\n    }\r\n  }\r\n};\r\n\r\nfunction printCardHtml(projectToPrint) {\r\n\r\n  let div = document.createElement('div');\r\n  let buttonShowProject = document.createElement('button');\r\n\r\n  buttonShowProject.innerText = \"Ver Proyecto\";\r\n  buttonShowProject.addEventListener('click', () => {\r\n    showProject(projectToPrint);\r\n  });\r\n\r\n  div.className = 'card';\r\n  div.style = 'width: 18rem; float: left';\r\n  div.innerHTML = `<img src=${projectToPrint.image} class='card-img-top'>\r\n    <div class='card-body'>\r\n    <h5 class='card-title'> ${projectToPrint.name} </h5>\r\n    <p class='card-text'> ${projectToPrint.description} </p>`;\r\n\r\n  div.appendChild(buttonShowProject);\r\n  projectCards.appendChild(div);\r\n};\r\n\r\nfunction showProject(project) {\r\n  let div = document.getElementById('projects');\r\n  let buttonUpdateProject = document.createElement('button');\r\n  let buttonDeleteProject = document.createElement('button');\r\n  buttonUpdateProject.innerText = \"Editar\";\r\n  buttonDeleteProject.innerText = \"Eliminar\";\r\n  buttonDeleteProject.addEventListener('click', () => {\r\n    deleteProject(project);\r\n  });\r\n  buttonUpdateProject.addEventListener('click', () => {\r\n    updateProject(project);\r\n  });\r\n  div.innerHTML = `<h1>${project.name}</h1><span><img src=\"${project.image}\"></span>\r\n  <br>\r\n  <span>Estado: ${project.status}</span>\r\n  <p>Description:\r\n  <br> ${project.description}\r\n  </p>\r\n  <p>Fecha de inicio: ${project.startDate}</p>\r\n  <p>Fecha de fin: ${project.endDate}</p>\r\n  <div>Cliente:\r\n      <p>${project.client}</p>\r\n  </div>\r\n  <div>Tecnologías:\r\n      <p id=\"actual-technologies\"></p>\r\n  </div>\r\n  <div>Sofkianos:\r\n      <p id=\"actual-sofkianos\"></p>\r\n  </div>`;\r\n  let actualTechnologies = document.getElementById('actual-technologies');\r\n  let actualSofkianos = document.getElementById('actual-sofkianos');\r\n  printArrayPropertyFromProjectWithPropertyName(project, actualTechnologies, \"technologies\");\r\n  printArrayPropertyFromProjectWithPropertyName(project, actualSofkianos, \"sofkianos\");\r\n  div.appendChild(buttonUpdateProject);\r\n  div.appendChild(buttonDeleteProject);\r\n};\r\n\r\nfunction printArrayPropertyFromProjectWithPropertyName(project, element, propertyName) {\r\n  for (let i = 0; i < project[propertyName].length; i++) {\r\n    element.innerText += `\\t${project[propertyName][i].name}`;\r\n  }\r\n};\r\n\r\nfunction updateProject(project) {\r\n  let div = document.getElementById('projects');\r\n  let buttonEditProject = document.createElement('button');\r\n  div.innerHTML = `<h1>Editando ${project.name}</h1>\r\n  <div id=\"editing-project\">\r\n  <label>Nombre:\r\n      <input type=\"text\" value=\"${project.name}\" id=\"projectName\">\r\n  </label><br>\r\n  <label>Estado:\r\n      <input type=\"text\" value=\"${project.status}\" id=\"projectStatus\">\r\n  </label><br>\r\n  <label>Descripción:\r\n      <textarea id=\"projectDescription\">${project.description}</textarea>\r\n  </label><br>\r\n  <label>Fecha de inicio:\r\n      <input type=\"date\" value=\"${project.startDate}\" id=\"projectStartDate\">\r\n  </label><br>\r\n  <label>Fecha de fin:\r\n      <input type=\"date\" value=\"${project.endDate}\" id=\"projectEndDate\">\r\n  </label><br>\r\n  <br>\r\n  <label>Cliente: ${project.client} <br>\r\n      <select id=\"clients-options\"></select>\r\n  </label><br>\r\n  <br>\r\n  <div id=\"actual-technologies\">Tecnologías:\r\n  <br>\r\n  </div>\r\n  <br>\r\n  <div id=\"actual-sofkianos\">Sofkianos:\r\n  <br>\r\n  </div>\r\n  </div>`;\r\n  let divEditingPRoject = document.getElementById('editing-project');\r\n  buttonEditProject.addEventListener('click', () => {\r\n    project.name = document.getElementById('projectName').value;\r\n    project.status = document.getElementById('projectStatus').value;\r\n    project.description = document.getElementById('projectDescription').value;\r\n    project.startDate = document.getElementById('projectStartDate').value;\r\n    project.endDate = document.getElementById('projectEndDate').value;\r\n    project.client = document.getElementById('clients-options').value;\r\n    let checkBoxesTechnologies = document.getElementsByName('cbtechnologies');\r\n    let checkBoxesSofkianos = document.getElementsByName('cbsofkianos');\r\n    project.technologies = getCheckedBoxes(checkBoxesTechnologies);\r\n    project.sofkianos = getCheckedBoxes(checkBoxesSofkianos);\r\n    showAllProjects(JSON_PROJECTS.projects);\r\n  });\r\n  buttonEditProject.innerText = (\"Aceptar Cambios\");\r\n  divEditingPRoject.appendChild(buttonEditProject);\r\n  let selectClients = document.getElementById('clients-options');\r\n  addOptionsToSelectFromArray(selectClients, JSON_CLIENTS);\r\n  let tech = document.getElementById('actual-technologies');\r\n  let sofkianos = document.getElementById('actual-sofkianos');\r\n  getPropertiesToEdit(tech, 'technologies');\r\n  getPropertiesToEdit(sofkianos, 'sofkianos');\r\n\r\n  function getPropertiesToEdit(div, propertyName) {\r\n    for (let i = 0; i < JSON_CLIENTS.length; i++) {\r\n      let label = document.createElement('label');\r\n      label.innerText = JSON_CLIENTS[i].name;\r\n      let techCheckBox = document.createElement('input');\r\n      techCheckBox.type = 'checkbox';\r\n      techCheckBox.id = JSON_CLIENTS[i].name;\r\n      techCheckBox.name = `cb${propertyName}`;\r\n      for (let j = 0; j < project[propertyName].length; j++) {\r\n        if (project[propertyName][j].name === JSON_CLIENTS[i].name) {\r\n          techCheckBox.checked = true;\r\n\r\n        }\r\n      }\r\n      label.appendChild(techCheckBox);\r\n      div.appendChild(label);\r\n    }\r\n  }\r\n};\r\n\r\nfunction deleteProject(project) {\r\n  console.log(project);\r\n};\r\n\r\nfunction addOptionsToSelectFromArray(select, jsonArray) {\r\n  select.innerHTML = \"\";\r\n  for (let index = 0; index < jsonArray.length; index++) {\r\n    let option = document.createElement('option');\r\n    option.innerText = jsonArray[index].name;\r\n    select.insertAdjacentElement(\"beforeend\", option);\r\n  }\r\n};\r\n\r\nfunction addInputsToDivFromJsonWithName(div, jsonArray, name) {\r\n  for (let index = 0; index < jsonArray.length; index++) {\r\n    let label = document.createElement('label');\r\n    label.innerText = jsonArray[index].name;\r\n    let input = document.createElement('input');\r\n    input.type = 'checkbox';\r\n    input.name = name;\r\n    input.id = jsonArray[index].name;\r\n    label.appendChild(input);\r\n    div.appendChild(label);\r\n  }\r\n};\r\n\r\nfunction getCheckedBoxes(checkboxArray) {\r\n  let checkedBoxes = [];\r\n  for (let index = 0; index < checkboxArray.length; index++) {\r\n    if (checkboxArray[index].checked) {\r\n      let checkBoxId = checkboxArray[index].id.toString();\r\n      checkedBoxes.push(checkBoxId);\r\n    }\r\n  }\r\n  return checkedBoxes;\r\n};\r\n\r\nmodule.exports = {\r\n  findValueByAnyAttributeInArray: findValueByAnyAttribute, showAllProjects,\r\n  printSearchResults, getCheckedRadioButton,\r\n  addOptionsToSelectFromArray, addInputsToDivFromJsonWithName,\r\n  createProject\r\n};\r\n\n\n//# sourceURL=webpack:///./src/model/ProjectFunctions.js?");

/***/ }),

/***/ "./src/projectController/ProjectController.js":
/*!****************************************************!*\
  !*** ./src/projectController/ProjectController.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_ProjectClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model/ProjectClass */ \"./src/model/ProjectClass.js\");\n/* harmony import */ var _model_ProjectClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_model_ProjectClass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/ProjectFunctions */ \"./src/model/ProjectFunctions.js\");\n/* harmony import */ var _model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\r\nconst JSON_PROJECTS = __webpack_require__(/*! ../data/ProjectData.json */ \"./src/data/ProjectData.json\").clients;\r\nlet projectCards = document.getElementById('projects')\r\n\r\ntry {\r\n  Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"showAllProjects\"])();\r\n} catch (error) {\r\n}\r\n\r\ntry {\r\n  document.getElementById('searching-trigger').addEventListener('click', () => {\r\n    let value = document.getElementById('search-by').value;\r\n    let radioButtons = document.getElementsByName('search');\r\n    let checkedRadioButtonValue = Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"getCheckedRadioButton\"])(radioButtons);\r\n    let projectsSearched = Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"findValueByAnyAttributeInArray\"])(value, checkedRadioButtonValue);\r\n    projectCards.innerHTML = \"\";\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"printSearchResults\"])(projectsSearched);\r\n  });\r\n} catch (error) {\r\n}\r\n\r\ntry {\r\n  document.getElementById('show-all-projects').addEventListener('click', () => {\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"showAllProjects\"])();\r\n  });\r\n} catch (error) {\r\n}\r\n\r\ntry {\r\n  document.getElementById('open-create-modal').addEventListener('click', () => {\r\n    let clientsSelect = document.getElementById('select-clients');\r\n    let technologies = document.getElementById('technologies');\r\n    let sofkianos = document.getElementById('sofkianos');\r\n    clientsSelect.innerHTML = \" \";\r\n    technologies.innerHTML = \" \";\r\n    sofkianos.innerHTML = \" \";\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"addOptionsToSelectFromJson\"])(clientsSelect, JSON_CLIENTS);\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"addInputsToDivFromJsonWithName\"])(technologies, JSON_CLIENTS, 'technology');\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"addInputsToDivFromJsonWithName\"])(sofkianos, JSON_CLIENTS, 'sofkiano');\r\n  });\r\n} catch (error) {\r\n}\r\n\r\ntry {\r\n  document.getElementById('create-project').addEventListener('click', () => {\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"createProject\"])();\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_1__[\"showAllProjects\"])();\r\n  });\r\n} catch (error) {\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/projectController/ProjectController.js?");

/***/ })

/******/ });