
import Project from './../model/ProjectClass'
import {
  findValueByAnyAttributeInArray, showAllProjects,
  printSearchResults, getCheckedRadioButton,
  addOptionsToSelectFromJson, addInputsToDivFromJsonWithName,
  createProject
} from "./../model/ProjectFunctions"

const JSON_PROJECTS = require('../data/ProjectData.json').clients;
let projectCards = document.getElementById('projects')

try {
  showAllProjects();
} catch (error) {
}

try {
  document.getElementById('searching-trigger').addEventListener('click', () => {
    let value = document.getElementById('search-by').value;
    let radioButtons = document.getElementsByName('search');
    let checkedRadioButtonValue = getCheckedRadioButton(radioButtons);
    let projectsSearched = findValueByAnyAttributeInArray(value, checkedRadioButtonValue);
    projectCards.innerHTML = "";
    printSearchResults(projectsSearched);
  });
} catch (error) {
}

try {
  document.getElementById('show-all-projects').addEventListener('click', () => {
    showAllProjects();
  });
} catch (error) {
}

try {
  document.getElementById('open-create-modal').addEventListener('click', () => {
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
} catch (error) {
}

try {
  document.getElementById('create-project').addEventListener('click', () => {
    createProject();
    showAllProjects();
  });
} catch (error) {
}


