'use strict';

const JSON_CLIENTS = require('./../data/ClientsData.json').clients;
const JSON_ENTERPRISES = JSON_CLIENTS.enterprises;
const JSON_PERSONS = JSON_CLIENTS.persons;
const JSON_SOFKIANOS = require('./../data/SofkianosData.json').sofkianos;
const JSON_PROJECTS = require('./../data/ProjectsData.json').projects;
const JSON_TECHNOLOGIES = require('./../data/TechnologiesData.json').technologies;

let Project = require('./ProjectClass');
let projectCards = document.getElementById('cards-content');
let options = document.getElementById('options');
let footer = document.getElementById(`footerModal`);

class ProjectFunctions {

  addNewProjectHTML(div) {

    try {

      let cardNewProject = document.createElement('div');
      cardNewProject.className = `card col-md-3 ml-2 mr-5 mb-5`;
      cardNewProject.style = `width:400px `;
      cardNewProject.innerHTML = `
      <div class="card-body">
      
        <i class="fas fa-plus" style="font-size: 14rem; cursor:pointer; padding: 3rem 2rem"
          id="add-project"
          data-target="#createModal" 
          data-toggle="modal" 
          onClick= "${this.openedCreationModal()}"></i>
        
          <h5 class="card-title" style = "text-align: center">
            Crear nuevo proyecto
          </h5>

      </div>
      `;
      div.appendChild(cardNewProject);
    } catch (error) {
      console.log(error)
    }

  }

  createModal() {
    let modal = document.createElement('div');
    modal.id = `createModal`;
    modal.className = `modal fade`;
    modal.setAttribute(`role`, `dialog`);
    modal.innerHTML = ` 
    <div class="modal-dialog modal-lg">

      <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Nuevo Proyecto</h4>
            <a  data-dismiss="modal" >
             <i class="fas fa-times" style = " cursor:pointer" > </i>
            </a>
          </div>
          <div class="modal-body modal-lg">
            <form>
              <div class="input-group mb-3">
                  <div class="input-group-prepend">
                   <span class="input-group-text">Nombre</span>
                  </div>
                  <input class="form-control" placeholder="Nombre" id="project-name">
              </div>
    
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                   <span class="input-group-text">Descripcion</span>
                </div>
                <textarea class="form-control" id="project-description" rows="4"></textarea>
              </div>
    
              <div class="input-group mb-3">
                <label>Fecha de inicio:
                  <input type="date" id="projectStartDateO">
                  </label>
                <label>Fecha de fin:
                    <input type="date" id="projectEndDateO">
                </label>
              </div>
    
    
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label for="project-image">Example file input</label>
                  <input type="file" class="form-control-file" id="project-image">
                </div>
              </div>

    
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="project-client-select">Clientes</label>
                </div>
                <select class="custom-select" id="project-client-select">
                    <option selected>Elige uno ...</option>
                </select>
              </div>
    
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="technologies"> Tecnologías </label>
                  <span id="technologies" />
                  </div>
              </div>
               
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="sofkianos"> Sofkianos </label>
                  <span id="sofkianos" />
                </div> 
              </div>
                
        </form>
      </div>
        <div class="modal-footer" id="modal-footer">
          
        </div>
      </div>
  </div>
  </div>
  `;
    footer.insertAdjacentElement(`beforeend`, modal);
  };

  openedCreationModal() {
    const ENTERPRISES = "enterprises";
    const PERSONS = "persons";
    const TECH = "technologies";
    const SOFKS = "sofkianos";
    let clientsSelect = document.getElementById('project-client-select');
    let technologies = document.getElementById('technologies');
    let sofkianos = document.getElementById('sofkianos');
    clientsSelect.innerHTML = " ";
    technologies.innerHTML = " ";
    sofkianos.innerHTML = " ";
    this.addClientOptions(clientsSelect, ENTERPRISES);
    this.addClientOptions(clientsSelect, PERSONS);
    this.addPropertiesToDiv(technologies, TECH);
    this.addPropertiesToDiv(sofkianos, SOFKS);
    this.addCreateButtonToModal();
  };

  addCreateButtonToModal() {
    let modalFooter = document.getElementById(`modal-footer`);
    let createButton = document.createElement(`button`);
    createButton.innerText = "Crear";
    createButton.className = `btn btn-success`;
    createButton.setAttribute(`data-dismiss`, `modal`);
    createButton.addEventListener(`click`, () => {
      options.innerHTML = "";
      this.createProject();
    });
    modalFooter.insertAdjacentElement(`beforeend`, createButton);
  };

  showAllProjects() {
    try {
      this.addButtonsToDiv();
      projectCards.innerHTML = "";
      this.addNewProjectHTML(projectCards);
      for (let index = 0; index < JSON_PROJECTS.length; index++) {
        this.printCardHtml(JSON_PROJECTS[index]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  addButtonsToDiv() {
    let {
      showAllProjects
    } = this.createOptionButtons();
    options.appendChild(showAllProjects);
  };

  createOptionButtons() {

    let showAllProjects = document.createElement(`button`);
    showAllProjects.className = `btn btn-info`;
    showAllProjects.innerText = `Mostrar todos los proyectos`;
    showAllProjects.id = `show-all-projects`;
    showAllProjects.addEventListener(`click`, () => {
      options.innerHTML = "";
      this.showAllProjects();
    });
    return {
      showAllProjects
    };
  };

  printCardHtml(projectToPrint) {


    let divCard = document.createElement('div');
    let buttonShowProject = document.createElement('button');
    buttonShowProject.className = `btn btn-sm btn-info`;
    buttonShowProject.innerText = "Más Info";
    buttonShowProject.style = `margin: 5%`
    buttonShowProject.addEventListener('click', () => {
      this.showProject(projectToPrint);
    });

    divCard.className = `card col-md-3 ml-2 mr-5 mb-5`;
    divCard.style = `width:400px`;
    divCard.innerHTML = `<img src=${projectToPrint.image} class='card-img-top' style="width:70%; margin: auto;">
    <div class='card-body'>
    <h4 class='card-title'> ${projectToPrint.name} </h4>
    <p class='card-text'> ${projectToPrint.description} </p>`;

    divCard.insertAdjacentElement(`beforeend`, buttonShowProject);

    projectCards.appendChild(divCard);
  };

  showProject(project) {
    let div = document.getElementById('cards-content');
    let buttonUpdateProject = document.createElement('button');
    let buttonDeleteProject = document.createElement('button');
    buttonUpdateProject.className = `btn btn-sm btn-info`;
    buttonDeleteProject.className = `btn btn-sm btn-danger`;
    buttonUpdateProject.innerText = `Editar`;
    buttonDeleteProject.innerText = `Eliminar`;
    buttonUpdateProject.style = `width: 10rem`;
    buttonDeleteProject.style = `width: 10rem`;
    buttonDeleteProject.addEventListener('click', () => {
      this.deleteProject(project);
    });
    buttonUpdateProject.addEventListener('click', () => {
      this.updateProject(project);
    });
    project.status === `Done` ? buttonUpdateProject.disabled = true : buttonUpdateProject.enabled = true;
    div.innerHTML = `<div id="grid-project-view" style="margin: auto"><h1>${project.name}</h1><span><img src="${project.image}"></span>
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
      </div></div>`;
    let projectView = document.getElementById('grid-project-view');
    let actualTechnologies = document.getElementById('actual-technologies');
    let actualSofkianos = document.getElementById('actual-sofkianos');
    this.printArrayPropertyFromProjectWithPropertyName(project, actualTechnologies, "technologies");
    this.printArrayPropertyFromProjectWithPropertyName(project, actualSofkianos, "sofkianos");
    projectView.appendChild(buttonUpdateProject);
    projectView.appendChild(buttonDeleteProject);
  };

  updateProject(project) {
    let div = document.getElementById('cards-content');
    div.innerHTML = "";
    let div2 = document.createElement('div');

    let buttonEditProject = document.createElement('button');
    div2.style = "width: 80%;"
    div2.innerHTML = `
        <div style="margin: 4%">
        <h1> Editando ${project.name.toUpperCase()}</h1>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Nombre del proyecto: </span>
            </div>
            <input type="text" value="${project.name}" id="projectName" class="form-control" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>

        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text">Descripción: </span>
            </div>
            <textarea class="form-control" id="projectDescription" aria-label="With textarea">${project.description}</textarea>
        </div>

        <div class="input-group" style="margin: 2%">
            <div class="input-group-append">
                <span class="input-group-text">Estado: </span>
                <div id="projectStatus"></div>
            </div>
        </div>

        <div class="input-group mb-3">
          <label>Fecha de inicio:
            <input class="form-control" type="date" id="projectStartDate" value="${project.startDate}">
            </label>
          <label>Fecha de fin:
              <input class="form-control" type="date" id="projectEndDate" value="${project.endDate}">
          </label>
        </div>

        <div class="input-group" style="margin: 2%">
            <div class="input-group-append">
            <span class="input-group-text">Cliente: </span>
            <select class="form-control" id="clients-options">${project.client.name.toUpperCase()}</select>
            </div>
        </div>

        <div class="input-group mb-3" id="tech">
            <div class="input-group-prepend">
              <div class="input-group-text" id="actual-technologies">

              </div>
            </div>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <div class="input-group-text" id="actual-sofkianos">

                </div>
            </div>
        </div>

      </div>  
        `;

    div.appendChild(div2);

    buttonEditProject.addEventListener('click', () => {
      project.name = document.getElementById('projectName').value;
      let status = document.getElementById('projectUpdatedStatus');
      let updatedStatus = status.options[status.selectedIndex].value;
      project.status = updatedStatus;
      project.description = document.getElementById('projectDescription').value;
      project.startDate = document.getElementById('projectStartDate').value;
      project.endDate = document.getElementById('projectEndDate').value;
      let newClient = document.getElementById('clients-options');
      let typeName = newClient.getElementsByTagName('option')[newClient.selectedIndex].id;
      project.client = this.getClientObject(newClient.value, typeName);
      let checkBoxesTechnologies = document.getElementsByName('cbtechnologies');
      let checkBoxesSofkianos = document.getElementsByName('cbsofkianos');
      let selectedTechnologies = this.getCheckedBoxes(checkBoxesTechnologies);
      let selectedSofkianos = this.getCheckedBoxes(checkBoxesSofkianos);
      this.getPropertiesFromArrayObject(selectedTechnologies, "technologies", project);
      this.getPropertiesFromArrayObject(selectedSofkianos, "sofkianos", project);
      project.technologies = this.getPropertiesFromArrayObject(selectedTechnologies, "technologies");
      project.sofkianos = this.getPropertiesFromArrayObject(selectedSofkianos, "sofkianos");

      if (this.validateCreateAndUpdateProject(project.name, project.description, project.startDate, project.endDate, project.technologies, project.sofkianos)) {
        this.showProject(project);
      } else {
        alert("Todos los campos son requeridos");
      }
    });
    buttonEditProject.innerText = ("Aceptar Cambios");
    div2.insertAdjacentElement(`beforeend`, buttonEditProject);
    let selectClients = document.getElementById('clients-options');
    let selectStatus = document.getElementById('projectStatus');
    this.addStatusOptions(selectStatus, project.status);
    this.addClientOptions(selectClients, "enterprises");
    this.addClientOptions(selectClients, "persons");
    let tech = document.getElementById('actual-technologies');
    let sofkianos = document.getElementById('actual-sofkianos');
    this.getPropertiesToEditSepecificProject(tech, 'technologies', project);
    this.getPropertiesToEditSepecificProject(sofkianos, 'sofkianos', project);
  };

  addStatusOptions(div, optionSelected) {
    let statusOptions = [`Done`, `WIP`, `To Do`];
    let select = document.createElement('select');
    select.className = `form-control`;
    select.id = `projectUpdatedStatus`;
    for (let index = 0; index < statusOptions.length; index++) {
      let option = document.createElement(`option`);
      if (optionSelected.toLowerCase() === `done`) {
        let label = document.createElement(`span`);
        label.innerText = `Done`;
        div.className = `form-control`;
        div.insertAdjacentElement(`beforeend`, label);
        break;
      } else {
        option.innerText = statusOptions[index];
        option.value = statusOptions[index];
        option.value === optionSelected ? option.selected = true : option.selected = false;
      }
      select.insertAdjacentElement(`beforeend`, option);
      div.insertAdjacentElement(`beforeend`, select);
    };

  };

  getPropertiesFromArrayObject(namesArray, jsonName) {
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
  };

  addClientOptions(select, type) {
    let tempArray = [];
    let optgroup = document.createElement('optgroup');
    type === `enterprises` ? tempArray = JSON_ENTERPRISES : tempArray = JSON_PERSONS;
    type === `enterprises` ? optgroup.label = `Empresas` : optgroup.label = `Personas`;
    select.insertAdjacentElement(`beforeend`, optgroup);
    for (let i = 0; i < tempArray.length; i++) {
      let option = document.createElement('option');
      option.id = type;
      option.innerText = tempArray[i].name;
      option.value = tempArray[i].name;
      select.insertAdjacentElement(`beforeend`, option);
    }
  };

  getPropertiesToEditSepecificProject(div, jsonName, project) {
    let tempArray = [];
    jsonName === "technologies" ? tempArray = JSON_TECHNOLOGIES : tempArray = JSON_SOFKIANOS;
    for (let i = 0; i < tempArray.length; i++) {
      let label = document.createElement('label');
      label.className = `form-control`;
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
      label.htmlFor = tempArray[i].name;
      div.appendChild(input);
      div.appendChild(label);
    }
  };

  getClientObject(name, jsonName) {
    let propertyObject;
    let tempArray = [];
    jsonName === `enterprises` ? tempArray = JSON_ENTERPRISES : tempArray = JSON_PERSONS;
    for (let i = 0; i < tempArray.length; i++) {
      if (name === tempArray[i].name) {
        propertyObject = tempArray[i];
      }
    }
    return propertyObject;
  };

  printArrayPropertyFromProjectWithPropertyName(project, element, propertyName) {
    for (let i = 0; i < project[propertyName].length; i++) {
      element.innerText += `- \t${project[propertyName][i].name}\t - `;
    }
  };

  deleteProject(project) {
    options.innerHTML = "";
    let answer = confirm(`Esta seguro que desea eliminar el proyecto ${project.name}`);
    if (answer) {
      for (let index = 0; index < JSON_PROJECTS.length; index++) {
        if (project.name === JSON_PROJECTS[index].name) {
          JSON_PROJECTS.splice(index, 1);
        }
      }
      this.showAllProjects();
    }
  };

  createProject() {
    try {
      let name = document.getElementById('project-name').value;
      let description = document.getElementById('project-description').value;
      let starDate = document.getElementById('projectStartDateO').value;
      let endDate = document.getElementById('projectEndDateO').value;
      let image = "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg";
      let clientName = document.getElementById('project-client-select');
      let typeName = clientName.getElementsByTagName('option')[clientName.selectedIndex].id;
      let clientObject = this.getClientObject(clientName.value, typeName);
      let checkBoxesTechnologies = document.getElementsByName('technologies');
      let checkBoxesSofkianos = document.getElementsByName('sofkianos');
      let selectedTechnologies = this.getCheckedBoxes(checkBoxesTechnologies);
      let selectedSofkianos = this.getCheckedBoxes(checkBoxesSofkianos);
      let technologies = this.getPropertiesFromArrayObject(selectedTechnologies, "technologies");
      let sofkianos = this.getPropertiesFromArrayObject(selectedSofkianos, "sofkianos");

      if (this.validateCreateAndUpdateProject(name, description, starDate, endDate, technologies, sofkianos)) {
        let projectToCreate = new Project(name, "To Do", description, starDate, endDate,
          image, clientObject, technologies, sofkianos);
        JSON.stringify(JSON_PROJECTS.push(projectToCreate));
      } else {
        alert("Todos los campos son requeridos");
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.showAllProjects();
    }
  };

  getCheckedBoxes(checkboxArray) {
    let checkedBoxes = [];
    for (let index = 0; index < checkboxArray.length; index++) {
      if (checkboxArray[index].checked) {
        let checkBoxId = checkboxArray[index].id.toString();
        checkedBoxes.push(checkBoxId);
      }
    }
    return checkedBoxes;
  };

  getCheckedRadioButton(radioButtons) {
    for (let index = 0; index < radioButtons.length; index++) {
      if (radioButtons[index].checked) {
        return radioButtons[index].value;
      }
    }
  };

  addPropertiesToDiv(div, jsonName) {
    let tempArray = [];
    jsonName === "technologies" ? tempArray = JSON_TECHNOLOGIES : tempArray = JSON_SOFKIANOS;
    for (let index = 0; index < tempArray.length; index++) {
      let divToCheckBox = document.createElement('div');
      divToCheckBox.className = "custom-control custom-switch";

      let label = document.createElement('label');
      label.innerText = tempArray[index].name;
      label.className = "custom-control-label";
      label.htmlFor = tempArray[index].name;

      let input = document.createElement('input');
      input.type = 'checkbox';
      input.className = "custom-control-input"
      input.name = jsonName;
      input.id = tempArray[index].name;

      divToCheckBox.appendChild(input);
      divToCheckBox.appendChild(label);
      divToCheckBox.style.paddingLeft = "3rem";

      div.appendChild(divToCheckBox);
    }
  };

  validateCreateAndUpdateProject(nameProject, descriptionProject, starDateProject, endDateProject, technologiesProject, sofkianosProject) {
    return nameProject !== "" && descriptionProject !== "" && starDateProject !== "" && endDateProject !== "" && technologiesProject.length > 0 && sofkianosProject.length > 0
  }

};

module.exports = ProjectFunctions;