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

/***/ "./src/data/ClientsData.json":
/*!***********************************!*\
  !*** ./src/data/ClientsData.json ***!
  \***********************************/
/*! exports provided: clients, default */
/***/ (function(module) {

eval("module.exports = {\"clients\":{\"enterprises\":[{\"name\":\"alpina\",\"nit\":\"860.025.900-2\",\"size\":\"5.500-10.000 empleados\",\"sector\":\"Alimentos y bebidas\",\"image\":\"https://cdn.advantis.co/wp-content/uploads/2018/06/Alpina-864x675.png\",\"webPage\":\"https://www.alpina.com/\"},{\"name\":\"proteccion\",\"nit\":\"800.229.739-0\",\"size\":\"1.001-5.000 empleados\",\"sector\":\"Servicios Financieros\",\"image\":\"https://www.viviendocali.com/wp-content/uploads/2018/02/Protecci%C3%B3n-en-Cartagena.jpg\",\"webPage\":\"https://www.proteccion.com\"},{\"name\":\"sura\",\"nit\":\"900.847.380\",\"size\":\"51-200 empleados\",\"sector\":\"Servicios Financieros\",\"image\":\"https://mazkomazda.com/wp-content/uploads/2018/04/SURA_logo-16-9-728-2.jpg\",\"webPage\":\"https://www.segurossura.com.co\"}],\"persons\":[{\"name\":\"JUAN ESTEBAN MONTOYA\",\"id\":\"1.038.435,932\",\"image\":\"https://examapplication.com/public/img/user.png\"},{\"name\":\"LIZA\",\"id\":\"42.813.784\",\"image\":\"https://img.icons8.com/color/1600/administrator-female.png\"},{\"name\":\"ROXANA\",\"id\":\"1.020.456.846\",\"image\":\"https://img.icons8.com/color/1600/administrator-female.png\"}]}};\n\n//# sourceURL=webpack:///./src/data/ClientsData.json?");

/***/ }),

/***/ "./src/data/ProjectData.json":
/*!***********************************!*\
  !*** ./src/data/ProjectData.json ***!
  \***********************************/
/*! exports provided: projects, default */
/***/ (function(module) {

eval("module.exports = {\"projects\":[{\"id\":\"1\",\"name\":\"pertrinum\",\"status\":\"Done\",\"description\":\"PerTrinum incrementa sus clientes por medio de comunicados, promocionando e interactuando de manera efectiva con sus clientes. \",\"startDate\":\"2016-08-12\",\"endDate\":\"2016-08-12\",\"image\":\"http://www.sofka.com.co/wp-content/uploads/sofka-pretrinum-logo-ajax.png\",\"client\":{\"name\":\"alpina\",\"nit\":\"860.025.900-2\",\"size\":\"5.500-10.000 empleados\",\"sector\":\"Alimentos y bebidas\",\"image\":\"https://cdn.advantis.co/wp-content/uploads/2018/06/Alpina-864x675.png\",\"webPage\":\"https://www.alpina.com/\"},\"technologies\":[{\"name\":\"Javascript\",\"version\":\"10.0.1\"},{\"name\":\"Java\",\"version\":\"8.0\"}],\"sofkianos\":[{\"name\":\"Leyner\",\"id\":\"1\",\"characteristics\":\"sociable, proactivo, servicial\",\"sofkaExperience\":\"0\",\"beforeSofkaExperience\":\"1.5\",\"proyecto1\":\"Skynet\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"sofkatalogos\",\"img\":\"Leyner.jpeg\",\"tecnologiasManejadas\":\"angular 5, python 3.7, pytorch 1\"},{\"name\":\"Alex\",\"id\":\"2\",\"characteristics\":\"lider, sociable, leal\",\"sofkaExperience\":\"3\",\"beforeSofkaExperience\":\"5\",\"proyecto1\":\"Hibot\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"snapchat_2.0\",\"img\":\"Alex.jpeg\",\"tecnologiasManejadas\":\"xamarin 2, c# 5\"}]},{\"id\":\"2\",\"name\":\"hibot\",\"status\":\"WIP\",\"description\":\"HIBOT es el módulo que le faltaba a su Centro de Contactos para convertirlo en una herramienta aún más competitiva.\",\"startDate\":\"2015-01-15\",\"endDate\":\"2018-01-15\",\"image\":\"http://www.sofka.com.co/wp-content/uploads/hibot-1.png\",\"client\":{\"name\":\"JUAN ESTEBAN MONTOYA\",\"id\":\"1.038.435,932\",\"image\":\"https://examapplication.com/public/img/user.png\"},\"technologies\":[{\"name\":\"Java\",\"version\":\"8.0\"},{\"name\":\"C#\",\"version\":\"2.0\"}],\"sofkianos\":[{\"name\":\"Alex\",\"id\":\"2\",\"characteristics\":\"lider, sociable, leal\",\"sofkaExperience\":\"3\",\"beforeSofkaExperience\":\"5\",\"proyecto1\":\"Hibot\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"snapchat_2.0\",\"img\":\"Alex.jpeg\",\"tecnologiasManejadas\":\"xamarin 2, c# 5\"},{\"name\":\"Quinto\",\"id\":\"2\",\"characteristics\":\"lider, sociable, leal\",\"sofkaExperience\":\"6\",\"beforeSofkaExperience\":\"1\",\"proyecto1\":\"alexa sr\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"cortana jr\",\"img\":\"Quinto.jpeg\",\"tecnologiasManejadas\":\"dialogflow 2\"}]},{\"id\":\"3\",\"name\":\"frow\",\"status\":\"To Do\",\"description\":\"es una plataforma digital (app móvil + website) para la Industria Fashion y Retail en Colombia.\",\"startDate\":\"2017-08-05\",\"endDate\":\"2019-08-15\",\"image\":\"http://www.sofka.com.co/wp-content/uploads/frow-3.png\",\"client\":{\"name\":\"sura\",\"nit\":\"900.847.380\",\"size\":\"51-200 empleados\",\"sector\":\"Servicios Financieros\",\"image\":\"https://mazkomazda.com/wp-content/uploads/2018/04/SURA_logo-16-9-728-2.jpg\",\"webPage\":\"https://www.segurossura.com.co\"},\"technologies\":[{\"name\":\"C#\",\"version\":\"2.0\"},{\"name\":\"Javascript\",\"version\":\"10.0.1\"}],\"sofkianos\":[{\"name\":\"Quinto\",\"id\":\"2\",\"characteristics\":\"lider, sociable, leal\",\"sofkaExperience\":\"6\",\"beforeSofkaExperience\":\"1\",\"proyecto1\":\"alexa sr\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"cortana jr\",\"img\":\"Quinto.jpeg\",\"tecnologiasManejadas\":\"dialogflow 2\"},{\"name\":\"Leyner\",\"id\":\"1\",\"characteristics\":\"sociable, proactivo, servicial\",\"sofkaExperience\":\"0\",\"beforeSofkaExperience\":\"1.5\",\"proyecto1\":\"Skynet\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"sofkatalogos\",\"img\":\"Leyner.jpeg\",\"tecnologiasManejadas\":\"angular 5, python 3.7, pytorch 1\"}]}]};\n\n//# sourceURL=webpack:///./src/data/ProjectData.json?");

/***/ }),

/***/ "./src/data/SofkianosData.json":
/*!*************************************!*\
  !*** ./src/data/SofkianosData.json ***!
  \*************************************/
/*! exports provided: sofkianos, default */
/***/ (function(module) {

eval("module.exports = {\"sofkianos\":[{\"name\":\"Leyner\",\"id\":\"1\",\"characteristics\":\"sociable, proactivo, servicial\",\"sofkaExperience\":\"0\",\"beforeSofkaExperience\":\"1.5\",\"proyecto1\":\"Skynet\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"sofkatalogos\",\"img\":\"Leyner.jpeg\",\"tecnologiasManejadas\":\"angular 5, python 3.7, pytorch 1\"},{\"name\":\"Alex\",\"id\":\"2\",\"characteristics\":\"lider, sociable, leal\",\"sofkaExperience\":\"3\",\"beforeSofkaExperience\":\"5\",\"proyecto1\":\"Hibot\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"snapchat_2.0\",\"img\":\"Alex.jpeg\",\"tecnologiasManejadas\":\"xamarin 2, c# 5\"},{\"name\":\"Quinto\",\"id\":\"2\",\"characteristics\":\"lider, sociable, leal\",\"sofkaExperience\":\"6\",\"beforeSofkaExperience\":\"1\",\"proyecto1\":\"alexa sr\",\"dedicacionProyecto1\":\"90\",\"proyecto2\":\"cortana jr\",\"img\":\"Quinto.jpeg\",\"tecnologiasManejadas\":\"dialogflow 2\"}]};\n\n//# sourceURL=webpack:///./src/data/SofkianosData.json?");

/***/ }),

/***/ "./src/data/TechnologiesData.json":
/*!****************************************!*\
  !*** ./src/data/TechnologiesData.json ***!
  \****************************************/
/*! exports provided: technologies, default */
/***/ (function(module) {

eval("module.exports = {\"technologies\":[{\"name\":\"Java\",\"version\":\"8.0\"},{\"name\":\"C#\",\"version\":\"2.0\"},{\"name\":\"Javascript\",\"version\":\"10.0.1\"}]};\n\n//# sourceURL=webpack:///./src/data/TechnologiesData.json?");

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
eval("\r\n\r\n\r\nconst JSON_CLIENTS = __webpack_require__(/*! ./../data/ClientsData.json */ \"./src/data/ClientsData.json\").clients;\r\nconst JSON_ENTERPRISES = JSON_CLIENTS.enterprises;\r\nconst JSON_PERSONS = JSON_CLIENTS.persons;\r\nconst JSON_SOFKIANOS = __webpack_require__(/*! ./../data/SofkianosData.json */ \"./src/data/SofkianosData.json\").sofkianos;\r\nconst JSON_PROJECTS = __webpack_require__(/*! ./../data/ProjectData.json */ \"./src/data/ProjectData.json\").projects;\r\nconst JSON_TECHNOLOGIES = __webpack_require__(/*! ./../data/TechnologiesData.json */ \"./src/data/TechnologiesData.json\").technologies;\r\nlet Project = __webpack_require__(/*! ./ProjectClass */ \"./src/model/ProjectClass.js\");\r\n\r\n\r\nvar projectCards = document.getElementById('projects');\r\n\r\nfunction showAllProjects() {\r\n  try {\r\n    projectCards.innerHTML = \"\";\r\n    for (let index = 0; index < JSON_PROJECTS.length; index++) {\r\n      printCardHtml(JSON_PROJECTS[index]);\r\n    }\r\n  } catch (error) {\r\n  }\r\n};\r\n\r\nfunction printCardHtml(projectToPrint) {\r\n\r\n  let divCard = document.createElement('div');\r\n  let buttonShowProject = document.createElement('button');\r\n\r\n  buttonShowProject.innerText = \"Ver Proyecto\";\r\n  buttonShowProject.addEventListener('click', () => {\r\n    showProject(projectToPrint);\r\n  });\r\n\r\n  divCard.className = 'card';\r\n  divCard.style = 'width: 18rem; float: left';\r\n  divCard.innerHTML = `<img src=${projectToPrint.image} class='card-img-top'>\r\n    <div class='card-body'>\r\n    <h5 class='card-title'> ${projectToPrint.name} </h5>\r\n    <p class='card-text'> ${projectToPrint.description} </p>`;\r\n\r\n  divCard.appendChild(buttonShowProject);\r\n  projectCards.appendChild(divCard);\r\n};\r\n\r\nfunction showProject(project) {\r\n  let div = document.getElementById('projects');\r\n  let buttonUpdateProject = document.createElement('button');\r\n  let buttonDeleteProject = document.createElement('button');\r\n  buttonUpdateProject.innerText = \"Editar\";\r\n  buttonDeleteProject.innerText = \"Eliminar\";\r\n  buttonDeleteProject.addEventListener('click', () => {\r\n    deleteProject(project);\r\n  });\r\n  buttonUpdateProject.addEventListener('click', () => {\r\n    updateProject(project);\r\n  });\r\n  div.innerHTML = `<h1>${project.name}</h1><span><img src=\"${project.image}\"></span>\r\n  <br>\r\n  <span>Estado: ${project.status}</span>\r\n  <p>Description:\r\n  <br> ${project.description}\r\n  </p>\r\n  <p>Fecha de inicio: ${project.startDate}</p>\r\n  <p>Fecha de fin: ${project.endDate}</p>\r\n  <div>Cliente:\r\n      <p>${project.client.name.toUpperCase()}</p>\r\n  </div>\r\n  <div>Tecnologías:\r\n      <p id=\"actual-technologies\"></p>\r\n  </div>\r\n  <div>Sofkianos:\r\n      <p id=\"actual-sofkianos\"></p>\r\n  </div>`;\r\n  let actualTechnologies = document.getElementById('actual-technologies');\r\n  let actualSofkianos = document.getElementById('actual-sofkianos');\r\n  printArrayPropertyFromProjectWithPropertyName(project, actualTechnologies, \"technologies\");\r\n  printArrayPropertyFromProjectWithPropertyName(project, actualSofkianos, \"sofkianos\");\r\n  div.appendChild(buttonUpdateProject);\r\n  div.appendChild(buttonDeleteProject);\r\n};\r\n\r\nfunction updateProject(project) {\r\n  let div = document.getElementById('projects');\r\n  let buttonEditProject = document.createElement('button');\r\n  div.innerHTML = `<h1>Editando ${project.name}</h1>\r\n  <div id=\"editing-project\">\r\n  <label>Nombre:\r\n      <input type=\"text\" value=\"${project.name}\" id=\"projectName\">\r\n  </label><br>\r\n  <label>Estado:\r\n      <input type=\"text\" value=\"${project.status}\" id=\"projectStatus\">\r\n  </label><br>\r\n  <label>Descripción:\r\n      <textarea id=\"projectDescription\">${project.description}</textarea>\r\n  </label><br>\r\n  <label>Fecha de inicio:\r\n      <input type=\"date\" value=\"${project.startDate}\" id=\"projectStartDate\">\r\n  </label><br>\r\n  <label>Fecha de fin:\r\n      <input type=\"date\" value=\"${project.endDate}\" id=\"projectEndDate\">\r\n  </label><br>\r\n  <br>\r\n  <label>Cliente: ${project.client.name.toUpperCase()}<br>\r\n      <select id=\"clients-options\"></select>\r\n  </label><br>\r\n  <br>\r\n  <div id=\"actual-technologies\">Tecnologías:\r\n  <br>\r\n  </div>\r\n  <br>\r\n  <div id=\"actual-sofkianos\">Sofkianos:\r\n  <br>\r\n  </div>\r\n  </div>`;\r\n  let divEditingPRoject = document.getElementById('editing-project');\r\n  buttonEditProject.addEventListener('click', () => {\r\n    project.name = document.getElementById('projectName').value;\r\n    project.status = document.getElementById('projectStatus').value;\r\n    project.description = document.getElementById('projectDescription').value;\r\n    project.startDate = document.getElementById('projectStartDate').value;\r\n    project.endDate = document.getElementById('projectEndDate').value;\r\n    let newClient = document.getElementById('clients-options');\r\n    let typeName = newClient.getElementsByTagName('option')[newClient.selectedIndex].id;\r\n    project.client = getClientObject(newClient.value, typeName);\r\n    console.log(project);\r\n    let checkBoxesTechnologies = document.getElementsByName('cbtechnologies');\r\n    let checkBoxesSofkianos = document.getElementsByName('cbsofkianos');\r\n    project.technologies = getCheckedBoxes(checkBoxesTechnologies);\r\n    project.sofkianos = getCheckedBoxes(checkBoxesSofkianos);\r\n    //showAllProjects(JSON_PROJECTS.projects);\r\n  });\r\n  buttonEditProject.innerText = (\"Aceptar Cambios\");\r\n  divEditingPRoject.appendChild(buttonEditProject);\r\n  let selectClients = document.getElementById('clients-options');\r\n  addClientOptions(selectClients, \"enterprises\");\r\n  addClientOptions(selectClients, \"persons\");\r\n  let tech = document.getElementById('actual-technologies');\r\n  let sofkianos = document.getElementById('actual-sofkianos');\r\n  getPropertiesToEdit(tech, 'technologies');\r\n  getPropertiesToEdit(sofkianos, 'sofkianos');\r\n\r\n  function getPropertiesToEdit(div, jsonName) {\r\n    let tempArray = [];\r\n    jsonName === \"technologies\" ? tempArray = JSON_TECHNOLOGIES : tempArray = JSON_SOFKIANOS;\r\n    for (let i = 0; i < tempArray.length; i++) {\r\n      let label = document.createElement('label');\r\n      label.innerText = tempArray[i].name;\r\n      let input = document.createElement('input');\r\n      input.type = 'checkbox';\r\n      input.name = name;\r\n      input.id = tempArray[i].name;\r\n      for (let j = 0; j < project[jsonName].length; j++) {\r\n        if (project[jsonName][j].name === tempArray[i].name) {\r\n          input.checked = true;\r\n        }\r\n      }\r\n      label.appendChild(input);\r\n      div.appendChild(label);\r\n    }\r\n  }\r\n\r\n  function getClientObject(name, jsonName) {\r\n    let propertyObject = {};\r\n    let tempArray = [];\r\n    jsonName === `enterprises` ? tempArray = JSON_ENTERPRISES : tempArray = JSON_PERSONS;\r\n    for (let index = 0; index < tempArray.length; index++) {\r\n      if (name === tempArray[index].name) {\r\n        propertyObject = tempArray[index];\r\n      }\r\n    }\r\n    return propertyObject;\r\n  }\r\n};\r\n\r\nfunction deleteProject(project) {\r\n  console.log(project);\r\n};\r\n\r\nfunction printArrayPropertyFromProjectWithPropertyName(project, element, propertyName) {\r\n  for (let i = 0; i < project[propertyName].length; i++) {\r\n    element.innerText += `\\t${project[propertyName][i].name}`;\r\n  }\r\n};\r\n\r\nfunction getCheckedBoxes(checkboxArray) {\r\n  let checkedBoxes = [];\r\n  for (let index = 0; index < checkboxArray.length; index++) {\r\n    if (checkboxArray[index].checked) {\r\n      let checkBoxId = checkboxArray[index].id.toString();\r\n      checkedBoxes.push(checkBoxId);\r\n    }\r\n  }\r\n  return checkedBoxes;\r\n};\r\n\r\nfunction addClientOptions(select, type) {\r\n  let tempArray = [];\r\n  let optgroup = document.createElement('optgroup');\r\n  type === `enterprises` ? tempArray = JSON_ENTERPRISES : tempArray = JSON_PERSONS;\r\n  type === `enterprises` ? optgroup.label = \"Empresas\" : optgroup.label = \"Personas\";\r\n  select.add(optgroup);\r\n  for (let i = 0; i < tempArray.length; i++) {\r\n    let option = document.createElement('option');\r\n    option.id = type;\r\n    option.innerText = tempArray[i].name;\r\n    select.add(option);\r\n  }\r\n};\r\n\r\nfunction createProject() {\r\n  try {\r\n    let id = 4;\r\n    let name = document.getElementById('project-name').value;\r\n    let description = document.getElementById('project-description').value;\r\n    let starDate = document.getElementById('project-start-date').value;\r\n    let endDate = document.getElementById('project-end-date').value;\r\n    let image = \"https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg\";\r\n    let client = document.getElementById('project-client-select').value;\r\n    let projectTechnologies = document.getElementsByName('technology');\r\n    let projectSofkianos = document.getElementsByName('sofkiano');\r\n    let technologies = getCheckedBoxes(projectTechnologies);\r\n    let sofkianos = getCheckedBoxes(projectSofkianos);\r\n    let projectToCreate = new Project(name, \"To Do\", description, starDate, endDate, image, client, technologies, sofkianos, id);\r\n    JSON.stringify(JSON_PROJECTS.push(projectToCreate));\r\n    showAllProjects();\r\n    id++;\r\n  } catch (error) {\r\n    console.log(error);\r\n  }\r\n};\r\n\r\nfunction findValueByAnyAttribute(value, attribute) {\r\n  try {\r\n\r\n    let results = [];\r\n    Object.keys(projects).map(key => {\r\n      if (JSON_PROJECTS.projects[key][attribute] === value) {\r\n        results.push(projects[key]);\r\n      }\r\n    });\r\n    return results;\r\n  } catch (error) {\r\n  }\r\n};\r\n\r\nfunction printSearchResults(resultsArray) {\r\n  for (let i = 0; i < resultsArray.length; i++) {\r\n    printCardHtml(resultsArray[i]);\r\n  }\r\n};\r\n\r\nfunction getCheckedRadioButton(radioButtons) {\r\n  for (let index = 0; index < radioButtons.length; index++) {\r\n    if (radioButtons[index].checked) {\r\n      return radioButtons[index].value;\r\n    }\r\n  }\r\n};\r\n\r\nfunction addPropertiesToDiv(div, jsonName) {\r\n  let tempArray = []\r\n  jsonName === \"technologies\" ? tempArray = JSON_TECHNOLOGIES : tempArray = JSON_SOFKIANOS;\r\n  for (let index = 0; index < tempArray.length; index++) {\r\n    let label = document.createElement('label');\r\n    label.innerText = tempArray[index].name;\r\n    let input = document.createElement('input');\r\n    input.type = 'checkbox';\r\n    input.name = name;\r\n    input.id = tempArray[index].name;\r\n    label.appendChild(input);\r\n    div.appendChild(label);\r\n  }\r\n};\r\n\r\nmodule.exports = {\r\n  findValueByAnyAttributeInArray: findValueByAnyAttribute, showAllProjects,\r\n  printSearchResults, getCheckedRadioButton,\r\n  addClientOptions, addPropertiesToDiv,\r\n  createProject\r\n};\r\n\n\n//# sourceURL=webpack:///./src/model/ProjectFunctions.js?");

/***/ }),

/***/ "./src/projectController/ProjectController.js":
/*!****************************************************!*\
  !*** ./src/projectController/ProjectController.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../model/ProjectFunctions */ \"./src/model/ProjectFunctions.js\");\n/* harmony import */ var _model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n\r\nlet projectCards = document.getElementById('projects')\r\n\r\ntry {\r\n  Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__[\"showAllProjects\"])();\r\n} catch (error) {\r\n}\r\n\r\ntry {\r\n  document.getElementById('searching-trigger').addEventListener('click', () => {\r\n    let value = document.getElementById('search-by').value;\r\n    let radioButtons = document.getElementsByName('search');\r\n    let checkedRadioButtonValue = Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__[\"getCheckedRadioButton\"])(radioButtons);\r\n    let projectsSearched = Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__[\"findValueByAnyAttributeInArray\"])(value, checkedRadioButtonValue);\r\n    projectCards.innerHTML = \"\";\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__[\"printSearchResults\"])(projectsSearched);\r\n  });\r\n} catch (error) {\r\n}\r\n\r\ntry {\r\n  document.getElementById('show-all-projects').addEventListener('click', () => {\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__[\"showAllProjects\"])();\r\n  });\r\n} catch (error) {\r\n}\r\n\r\ntry {\r\n  document.getElementById('open-create-modal').addEventListener('click', () => {\r\n    const enterprises = \"enterprises\";\r\n    const persons = \"persons\";\r\n    const tech = \"technologies\";\r\n    const sofks = \"sofkianos\";\r\n    let clientsSelect = document.getElementById('project-client-select');\r\n    let technologies = document.getElementById('technologies');\r\n    let sofkianos = document.getElementById('sofkianos');\r\n    clientsSelect.innerHTML = \" \";\r\n    technologies.innerHTML = \" \";\r\n    sofkianos.innerHTML = \" \";\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__[\"addClientOptions\"])(clientsSelect, enterprises);\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__[\"addClientOptions\"])(clientsSelect, persons);\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__[\"addPropertiesToDiv\"])(technologies, tech);\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__[\"addPropertiesToDiv\"])(sofkianos, sofks);\r\n  });\r\n} catch (error) {\r\n}\r\n\r\ntry {\r\n  document.getElementById('create-project').addEventListener('click', () => {\r\n    Object(_model_ProjectFunctions__WEBPACK_IMPORTED_MODULE_0__[\"createProject\"])();\r\n  });\r\n} catch (error) {\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/projectController/ProjectController.js?");

/***/ })

/******/ });