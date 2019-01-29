
'use strict';

const JSON_CLIENTS = require('./../data/ClientsData.json').clients;
const JSON_ENTERPRISES = JSON_CLIENTS.enterprises;
const JSON_PERSONS = JSON_CLIENTS.persons;
const JSON_SOFKIANOS = require('./../data/SofkianosData.json').sofkianos;
const JSON_PROJECTS = require('./../data/ProjectData.json').projects;
const JSON_TECHNOLOGIES = require('./../data/TechnologiesData.json').technologies;
let Project = require('./ProjectClass');


var projectCards = document.getElementById('projects');

function showAllProjects() {
  try {
    projectCards.innerHTML = "";
    for (let index = 0; index < JSON_PROJECTS.length; index++) {
      printCardHtml(JSON_PROJECTS[index]);
    }
  } catch (error) {
  }
};

function printCardHtml(projectToPrint) {

  let divCard = document.createElement('div');
  let buttonShowProject = document.createElement('button');

  buttonShowProject.innerText = "Ver Proyecto";
  buttonShowProject.addEventListener('click', () => {
    showProject(projectToPrint);
  });

  divCard.className = 'card';
  divCard.style = 'width: 18rem; float: left';
  divCard.innerHTML = `<img src=${projectToPrint.image} class='card-img-top'>
    <div class='card-body'>
    <h5 class='card-title'> ${projectToPrint.name} </h5>
    <p class='card-text'> ${projectToPrint.description} </p>`;

  divCard.appendChild(buttonShowProject);
  projectCards.appendChild(divCard);
};

function showProject(project) {
  let div = document.getElementById('projects');
  let buttonUpdateProject = document.createElement('button');
  let buttonDeleteProject = document.createElement('button');
  buttonUpdateProject.innerText = "Editar";
  buttonDeleteProject.innerText = "Eliminar";
  buttonDeleteProject.addEventListener('click', () => {
    deleteProject(project);
  });
  buttonUpdateProject.addEventListener('click', () => {
    updateProject(project);
  });
  div.innerHTML = `<h1>${project.name}</h1><span><img src="${project.image}"></span>
  <br>
  <span>Estado: ${project.status}</span>
  <p>Description:
  <br> ${project.description}
  </p>
  <p>Fecha de inicio: ${project.startDate}</p>
  <p>Fecha de fin: ${project.endDate}</p>
  <div>Cliente:
      <p>${project.client.name.toUpperCase()}</p>
  </div>
  <div>Tecnologías:
      <p id="actual-technologies"></p>
  </div>
  <div>Sofkianos:
      <p id="actual-sofkianos"></p>
  </div>`;
  let actualTechnologies = document.getElementById('actual-technologies');
  let actualSofkianos = document.getElementById('actual-sofkianos');
  printArrayPropertyFromProjectWithPropertyName(project, actualTechnologies, "technologies");
  printArrayPropertyFromProjectWithPropertyName(project, actualSofkianos, "sofkianos");
  div.appendChild(buttonUpdateProject);
  div.appendChild(buttonDeleteProject);
};

function updateProject(project) {
  let div = document.getElementById('projects');
  let buttonEditProject = document.createElement('button');
  div.innerHTML = `<h1>Editando ${project.name}</h1>
  <div id="editing-project">
  <label>Nombre:
      <input type="text" value="${project.name}" id="projectName">
  </label><br>
  <label>Estado:
      <input type="text" value="${project.status}" id="projectStatus">
  </label><br>
  <label>Descripción:
      <textarea id="projectDescription">${project.description}</textarea>
  </label><br>
  <label>Fecha de inicio:
      <input type="date" value="${project.startDate}" id="projectStartDate">
  </label><br>
  <label>Fecha de fin:
      <input type="date" value="${project.endDate}" id="projectEndDate">
  </label><br>
  <br>
  <label>Cliente: ${project.client.name.toUpperCase()}<br>
      <select id="clients-options"></select>
  </label><br>
  <br>
  <div id="actual-technologies">Tecnologías:
  <br>
  </div>
  <br>
  <div id="actual-sofkianos">Sofkianos:
  <br>
  </div>
  </div>`;
  let divEditingPRoject = document.getElementById('editing-project');
  buttonEditProject.addEventListener('click', () => {
    project.name = document.getElementById('projectName').value;
    project.status = document.getElementById('projectStatus').value;
    project.description = document.getElementById('projectDescription').value;
    project.startDate = document.getElementById('projectStartDate').value;
    project.endDate = document.getElementById('projectEndDate').value;
    let newClient = document.getElementById('clients-options');
    let typeName = newClient.getElementsByTagName('option')[newClient.selectedIndex].id;
    project.client = getClientObject(newClient.value, typeName);
    let checkBoxesTechnologies = document.getElementsByName('cbtechnologies');
    let checkBoxesSofkianos = document.getElementsByName('cbsofkianos');
    let selectedTechnologies = getCheckedBoxes(checkBoxesTechnologies);
    let selectedSofkianos = getCheckedBoxes(checkBoxesSofkianos);
    getPropertiesArrayObject(selectedTechnologies, "technologies");
    getPropertiesArrayObject(selectedSofkianos, "sofkianos");
    project.technologies = getPropertiesArrayObject(selectedTechnologies, "technologies");
    project.sofkianos = getPropertiesArrayObject(selectedSofkianos, "sofkianos");
    showAllProjects(JSON_PROJECTS.projects);
  });
  buttonEditProject.innerText = ("Aceptar Cambios");
  divEditingPRoject.appendChild(buttonEditProject);
  let selectClients = document.getElementById('clients-options');
  addClientOptions(selectClients, "enterprises");
  addClientOptions(selectClients, "persons");
  let tech = document.getElementById('actual-technologies');
  let sofkianos = document.getElementById('actual-sofkianos');
  getPropertiesToEdit(tech, 'technologies');
  getPropertiesToEdit(sofkianos, 'sofkianos');

  function getPropertiesToEdit(div, jsonName) {
    let tempArray = [];
    jsonName === "technologies" ? tempArray = JSON_TECHNOLOGIES : tempArray = JSON_SOFKIANOS;
    for (let i = 0; i < tempArray.length; i++) {
      let label = document.createElement('label');
      label.innerText = tempArray[i].name;
      let input = document.createElement('input');
      input.type = 'checkbox';
      input.name = `cb${jsonName}`;
      input.id = tempArray[i].name;
      for (let j = 0; j < project[jsonName].length; j++) {
        if (project[jsonName][j].name === tempArray[i].name) {
          input.checked = true;
        }
      }
      label.appendChild(input);
      div.appendChild(label);
    }
  }

  

  function getPropertiesArrayObject(namesArray, jsonName) {
    let tempArray = [];
    let resultArray = [];
    jsonName === `sofkianos` ? tempArray = JSON_SOFKIANOS : tempArray = JSON_TECHNOLOGIES;
    for (let i = 0; i < namesArray.length; i++) {
      for (let j = 0; j < tempArray.length; j++) {
        if (namesArray[i] === tempArray[j].name) {
          resultArray.push(tempArray[j]);
        }
      }
    }
    return resultArray;
  }
};

function getClientObject(name, jsonName) {
  let propertyObject;
  let tempArray = [];
  jsonName === `enterprises` ? tempArray = JSON_ENTERPRISES : tempArray = JSON_PERSONS;
  for (let i = 0; i < tempArray.length; i++) {
    if (name === tempArray[i].name) {
      propertyObject = tempArray[i];
    }
  }
  return propertyObject;
}

function deleteProject(project) {
  let answer = confirm(`Esta seguro que desea eliminar el proyecto ${project.name}`);
  if (answer) {
    for (let index = 0; index < JSON_PROJECTS.length; index++) {
      if (project.name === JSON_PROJECTS[index].name) {
        JSON_PROJECTS.splice(index, 1);
      }
    }
    showAllProjects();
  }
};

function printArrayPropertyFromProjectWithPropertyName(project, element, propertyName) {
  for (let i = 0; i < project[propertyName].length; i++) {
    element.innerText += `\t${project[propertyName][i].name}`;
  }
};

function getCheckedBoxes(checkboxArray) {
  let checkedBoxes = [];
  for (let index = 0; index < checkboxArray.length; index++) {
    if (checkboxArray[index].checked) {
      let checkBoxId = checkboxArray[index].id.toString();
      checkedBoxes.push(checkBoxId);
    }
  }
  return checkedBoxes;
};

function addClientOptions(select, type) {
  let tempArray = [];
  let optgroup = document.createElement('optgroup');
  type === `enterprises` ? tempArray = JSON_ENTERPRISES : tempArray = JSON_PERSONS;
  type === `enterprises` ? optgroup.label = "Empresas" : optgroup.label = "Personas";
  select.add(optgroup);
  for (let i = 0; i < tempArray.length; i++) {
    let option = document.createElement('option');
    option.id = type;
    option.innerText = tempArray[i].name;
    select.add(option);
  }
};

function createProject() {
  try {
    let id = 4;
    let name = document.getElementById('project-name').value;
    let description = document.getElementById('project-description').value;
    let starDate = document.getElementById('project-start-date').value;
    let endDate = document.getElementById('project-end-date').value;
    let image = "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg";
    let clientName = document.getElementById('project-client-select');
    let typeName = clientName.getElementsByTagName('option')[clientName.selectedIndex].id;
    let clientObject = getClientObject(clientName.value, typeName);
    let projectTechnologies = document.getElementsByName('technology');
    let projectSofkianos = document.getElementsByName('sofkiano');
    let technologies = getCheckedBoxes(projectTechnologies);
    let sofkianos = getCheckedBoxes(projectSofkianos);
    let projectToCreate = new Project(name, "To Do", description, starDate, endDate, image, clientObject, technologies, sofkianos, id);
    JSON.stringify(JSON_PROJECTS.push(projectToCreate));
    showAllProjects();
    id++;
  } catch (error) {
    console.log(error);
  }
};

function findValueByAnyAttribute(value, attribute) {
  try {

    let results = [];
    Object.keys(projects).map(key => {
      if (JSON_PROJECTS.projects[key][attribute] === value) {
        results.push(projects[key]);
      }
    });
    return results;
  } catch (error) {
  }
};

function printSearchResults(resultsArray) {
  for (let i = 0; i < resultsArray.length; i++) {
    printCardHtml(resultsArray[i]);
  }
};

function getCheckedRadioButton(radioButtons) {
  for (let index = 0; index < radioButtons.length; index++) {
    if (radioButtons[index].checked) {
      return radioButtons[index].value;
    }
  }
};

function addPropertiesToDiv(div, jsonName) {
  let tempArray = []
  jsonName === "technologies" ? tempArray = JSON_TECHNOLOGIES : tempArray = JSON_SOFKIANOS;
  for (let index = 0; index < tempArray.length; index++) {
    let label = document.createElement('label');
    label.innerText = tempArray[index].name;
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = name;
    input.id = tempArray[index].name;
    label.appendChild(input);
    div.appendChild(label);
  }
};

module.exports = {
  findValueByAnyAttributeInArray: findValueByAnyAttribute, showAllProjects,
  printSearchResults, getCheckedRadioButton,
  addClientOptions, addPropertiesToDiv,
  createProject
};