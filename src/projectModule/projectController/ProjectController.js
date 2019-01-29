
import Project from "../model/ProjectClass";
import {
  findValueByAnyAttributeInArray, showAllProjects,
  printSearchResults, getCheckedRadioButton,
  addOptionsToSelectFromJson, addInputsToDivFromJsonWithName,
  getCheckedBoxes
} from "./../model/ProjectFunctions"

const JSON_FILE_FOR_PROJECTS = require('../data/ProjectData.json');
const JSON_PROJECTS = JSON_FILE_FOR_PROJECTS.projects;
const JSON_FILE_FOR_CLIENTS = require('../data/clientData.json');
const JSON_CLIENTS = JSON_FILE_FOR_CLIENTS.clients;

let projectCards = document.getElementById('projects')
let projectsSearched = [];
let projectTechnologies = [];
let projectSofkianos = [];

showAllProjects(JSON_PROJECTS);


document.getElementById('searching-trigger').addEventListener('click', () => {
  let value = document.getElementById('search-by').value;
  let radioButtons = document.getElementsByName('search');
  let checkedRadioButtonValue = getCheckedRadioButton(radioButtons);
  projectsSearched = findValueByAnyAttributeInArray(value, checkedRadioButtonValue, JSON_PROJECTS);
  projectCards.innerHTML = "";
  printSearchResults(projectsSearched);
});

document.getElementById('show-all-projects').addEventListener('click', () => {
  projectCards.innerHTML = "";
  showAllProjects(JSON_PROJECTS);
});

document.getElementById('open-modal').addEventListener('click', () => {
  let clientsSelect = document.getElementById('select-clients');
  let technologies = document.getElementById('technologies');
  let sofkianos = document.getElementById('sofkianos');
  addOptionsToSelectFromJson(clientsSelect, JSON_CLIENTS);
  addInputsToDivFromJsonWithName(technologies, JSON_CLIENTS, 'technology');
  addInputsToDivFromJsonWithName(sofkianos, JSON_CLIENTS, 'sofkiano');
});

document.getElementById('create-project').addEventListener('click', () => {
  let name = document.getElementById('project-name');
  let description = document.getElementById('project-description');
  let starDate = document.getElementById('project-start-date');
  let endDate = document.getElementById('project-end-date');
  let image = document.getElementById('project-image');
  let client = document.getElementById('project-client');
  let projectTechnologies = getElementsByName('technology');
  let projectSofkianos = getElementsByName('sofkiano');
  getCheckedBoxes(projectTechnologies);
  getCheckedBoxes(projectSofkianos);

  let projectToCreate = new Project(name, 0, description, starDate, endDate,
    image, client, projectTechnologies, projectSofkianos);

});
