
import Project from './../model/ProjectClass'
import {
  findValueByAnyAttributeInArray, showAllProjects,
  printSearchResults, getCheckedRadioButton,
  addOptionsToSelectFromJson, addInputsToDivFromJsonWithName,
  getCheckedBoxes
} from "./../model/ProjectFunctions"

const JSON_TEST = require('../data/test.json');
const JSON_FILE_FOR_PROJECTS = require('../data/ProjectData.json');
const JSON_PROJECTS = JSON_FILE_FOR_PROJECTS.projects;
const JSON_FILE_FOR_CLIENTS = require('../data/clientData.json');
const JSON_CLIENTS = JSON_FILE_FOR_CLIENTS.clients;
let projectCards = document.getElementById('projects')

showAllProjects(JSON_PROJECTS);

document.getElementById('searching-trigger').addEventListener('click', () => {
  let value = document.getElementById('search-by').value;
  let radioButtons = document.getElementsByName('search');
  let checkedRadioButtonValue = getCheckedRadioButton(radioButtons);
  let projectsSearched = findValueByAnyAttributeInArray(value, checkedRadioButtonValue, JSON_PROJECTS);
  projectCards.innerHTML = "";
  printSearchResults(projectsSearched);
});

document.getElementById('show-all-projects').addEventListener('click', () => {
  showAllProjects(JSON_PROJECTS);
});

document.getElementById('open-modal').addEventListener('click', () => {
  let clientsSelect = document.getElementById('select-clients');
  let technologies = document.getElementById('technologies');
  let sofkianos = document.getElementById('sofkianos');
  clientsSelect.innerHTML = " ";
  technologies.innerHTML = " ";
  sofkianos.innerHTML = " ";
  addOptionsToSelectFromJson(clientsSelect, JSON_CLIENTS);
  addInputsToDivFromJsonWithName(technologies, JSON_CLIENTS, 'technology');
  addInputsToDivFromJsonWithName(sofkianos, JSON_CLIENTS, 'sofkiano');
});

document.getElementById('create-project').addEventListener('click', () => {
  createProject(JSON_PROJECTS);
  showAllProjects(JSON_PROJECTS);
});

function createProject(jsonProjects) {
  let name = document.getElementById('project-name').value;
  let description = document.getElementById('project-description').value;
  let starDate = document.getElementById('project-start-date').value;
  let endDate = document.getElementById('project-end-date').value;
  let image = document.getElementById('project-image').value;
  let client = document.getElementById('project-client').value;
  let projectTechnologies = document.getElementsByName('technology');
  let projectSofkianos = document.getElementsByName('sofkiano');
  let technologies = getCheckedBoxes(projectTechnologies);
  let sofkianos = getCheckedBoxes(projectSofkianos);
  let projectToCreate = new Project(name, 0, description, starDate, endDate, image, client, technologies, sofkianos);
  JSON.stringify(jsonProjects.push(projectToCreate));
};
