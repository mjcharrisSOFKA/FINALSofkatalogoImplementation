
'use strict';

const JSON_CLIENTS = require('./../data/clientData.json');
const JSON_PROJECTS = require('../data/ProjectData.json');
let project = require('./ProjectClass');


var projectCards = document.getElementById('projects');

function findValueByAnyAttributeInArray(value, attribute, projects) {
  try {

    let results = [];
    Object.keys(projects).map(key => {
      if (projects[key][attribute] === value) {
        results.push(projects[key]);
      }
    });
    return results;
  } catch (error) {
  }
};

function showAllProjects(jsonArray) {
  try {
    projectCards.innerHTML = "";
    for (let index = 0; index < jsonArray.length; index++) {
      printCardHtml(jsonArray[index]);
    }
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

function printCardHtml(projectToPrint) {

  let div = document.createElement('div');
  let buttonShowProject = document.createElement('button');

  buttonShowProject.innerText = "Ver Proyecto";
  buttonShowProject.addEventListener('click', () => {
    showProject(projectToPrint);
  });

  div.className = 'card';
  div.style = 'width: 18rem; float: left';
  div.innerHTML = `<img src=${projectToPrint.image} class='card-img-top'>
    <div class='card-body'>
    <h5 class='card-title'> ${projectToPrint.name} </h5>
    <p class='card-text'> ${projectToPrint.description} </p>`;

  div.appendChild(buttonShowProject);
  projectCards.appendChild(div);
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
      <p>${project.client}</p>
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

function printArrayPropertyFromProjectWithPropertyName(project, element, propertyName) {
  for (let i = 0; i < project[propertyName].length; i++) {
    element.innerText += `\t${project[propertyName][i].name}`;
  }
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
  <label>Cliente: ${project.client} <br>
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
    project.client = document.getElementById('clients-options').value;
    let checkBoxesTechnologies = document.getElementsByName('cbtechnologies');
    let checkBoxesSofkianos = document.getElementsByName('cbsofkianos');
    project.technologies = getCheckedBoxes(checkBoxesTechnologies);
    project.sofkianos = getCheckedBoxes(checkBoxesSofkianos);
    showAllProjects(JSON_PROJECTS.projects);
  });
  buttonEditProject.innerText = ("Aceptar Cambios");
  divEditingPRoject.appendChild(buttonEditProject);
  let selectClients = document.getElementById('clients-options');
  addOptionsToSelectFromArray(selectClients, JSON_CLIENTS.clients);
  let tech = document.getElementById('actual-technologies');
  let sofkianos = document.getElementById('actual-sofkianos');
  getPropertiesToEdit(tech, 'technologies');
  getPropertiesToEdit(sofkianos, 'sofkianos');

  function getPropertiesToEdit(div, propertyName) {
    for (let i = 0; i < JSON_CLIENTS.clients.length; i++) {
      let label = document.createElement('label');
      label.innerText = JSON_CLIENTS.clients[i].name;
      let techCheckBox = document.createElement('input');
      techCheckBox.type = 'checkbox';
      techCheckBox.id = JSON_CLIENTS.clients[i].name;
      techCheckBox.name = `cb${propertyName}`;
      for (let j = 0; j < project[propertyName].length; j++) {
        if (project[propertyName][j].name === JSON_CLIENTS.clients[i].name) {
          techCheckBox.checked = true;

        }
      }
      label.appendChild(techCheckBox);
      div.appendChild(label);
    }
  }
};

function deleteProject(project) {
  console.log(project);
};

function addOptionsToSelectFromArray(select, jsonArray) {
  select.innerHTML = "";
  for (let index = 0; index < jsonArray.length; index++) {
    let option = document.createElement('option');
    option.innerText = jsonArray[index].name;
    select.insertAdjacentElement("beforeend", option);
  }
};

function addInputsToDivFromJsonWithName(div, jsonArray, name) {
  for (let index = 0; index < jsonArray.length; index++) {
    let label = document.createElement('label');
    label.innerText = jsonArray[index].name;
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = name;
    input.id = jsonArray[index].name;
    label.appendChild(input);
    div.appendChild(label);
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

module.exports = {
  findValueByAnyAttributeInArray, showAllProjects,
  printSearchResults, getCheckedRadioButton,
  addOptionsToSelectFromJson: addOptionsToSelectFromArray, addInputsToDivFromJsonWithName,
  getCheckedBoxes
};
