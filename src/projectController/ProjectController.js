
import {
  findValueByAnyAttributeInArray, showAllProjects,
  printSearchResults, getCheckedRadioButton, addTechnologiesToDiv,
  addClientOptions, addPropertiesToDiv,
  createProject
} from "./../model/ProjectFunctions"

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
    const enterprises = "enterprises";
    const persons = "persons";
    const tech = "technologies";
    const sofks = "sofkianos";
    let clientsSelect = document.getElementById('select-clients');
    let technologies = document.getElementById('technologies');
    let sofkianos = document.getElementById('sofkianos');
    clientsSelect.innerHTML = " ";
    technologies.innerHTML = " ";
    sofkianos.innerHTML = " ";
    addClientOptions(clientsSelect, enterprises);
    addClientOptions(clientsSelect, persons);
    addPropertiesToDiv(technologies, tech);
    addPropertiesToDiv(sofkianos, sofks);
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



