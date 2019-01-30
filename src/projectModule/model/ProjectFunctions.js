'use strict';
const JSON_CLIENTS = require('./../data/ClientsData.json').clients;
const JSON_ENTERPRISES = JSON_CLIENTS.enterprises;
const JSON_PERSONS = JSON_CLIENTS.persons;
const JSON_SOFKIANOS = require('./../data/SofkianosData.json').sofkianos;
const JSON_PROJECTS = require('./../data/ProjectData.json').projects;
const JSON_TECHNOLOGIES = require('./../data/TechnologiesData.json').technologies;

let Project = require('./ProjectClass');
let projectCards = document.getElementById('cards-content');
let options = document.getElementById('options');

class ProjectFunctions {

  createDivOptions() {
  let divOptions = document.createElement('div');
  divOptions.className = "col-md-6";
  divOptions.style = "width:400px";
  divOptions.innerHTML = `<div class="dropdown col-md-12" style="padding-left: 0px; margin-bottom: 8px">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Opciones de busqueda
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" id="enterprises" style="cursor:pointer">Ver Empresas</a>
        <a class="dropdown-item" id="persons" style="cursor:pointer">Ver Personas asociadas</a>
        <a class="dropdown-item" id="allClients" style="cursor:pointer">Ver todos</a>
    </div>
</div> 
</div>`;

  let divCreate = document.createElement('div');
  divCreate.className = "col-md-4";
  divCreate.style = "width:400px";

  divCreate.innerHTML = `<div class="dropdown">
 <button class="btn btn-outline-success dropdown-toggle" type="button" id="dropdownMenuButton"
     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
     Crear cliente
 </button>
 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
     <a class="dropdown-item" id="createEmpresa" data-toggle="modal" data-target="#modalE" style="cursor:pointer">Empresa</a>
     <a class="dropdown-item" id="createPerson" data-toggle="modal" data-target="#personaModal"
         style="cursor:pointer">Persona</a>
 </div>
</div>
<div class="modal fade" id="modalE" tabindex="-1" role="dialog" aria-labelledby="modalEnterprise"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="modalEnterprise">Creando Empresa</h5>
                            <br>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="text" class="form-control" id="nameEnterprise" placeholder="Nombre">
                            <br>
                            <input type="text" class="form-control" id="nitEnterprise" placeholder="Nit">
                            <br>
                            <label for="sizeEnterprise">Tamaño de la empresa</label>
                            <select class="form-control" id="sizeEnterprise">
                                <option>0-10 Empleados</option>
                                <option>11-50 Empleados</option>
                                <option>51-200 Empleados</option>
                                <option>201-500 Empleados</option>
                                <option>1.001-5.000 Empleados</option>
                                <option>5.001-10.000 Empleados</option>
                                <option>Más de 10.000 Empleados</option>
                            </select>
                            <br>
                            <label for="sectorEnterprise">Sector de la empresa</label>
                            <select class="form-control" id="sectorEnterprise">
                                <option>Agropecuario</option>
                                <option>Alimentos y bébidas</option>
                                <option>Arquitectura y construcción</option>
                                <option>Automotor</option>
                                <option>Comercio</option>
                                <option>Consultoría</option>
                                <option>Cosméticos y productos médicos</option>
                                <option>Energía, gas y agua</option>
                                <option>Electrodomésticos</option>
                                <option>Empaques</option>
                                <option>Materiales de construcción</option>
                                <option>Petróleo</option>
                                <option>Productos de cuidado personal y del hogar</option>
                                <option>Quimico y farmacéutico</option>
                                <option>Servicios de tecnología</option>
                                <option>Servicios financieros</option>
                                <option>Software y servicios informáticos</option>
                                <option>Tabaco</option>
                                <option>Telecomunicaciones</option>
                                <option>Transporte de mercancia</option>
                                <option>Transporte y movilidad</option>
                                <option>Turismo y ocio</option>
                            </select>
                        </div>
                        <div id="messageEnterprise" style="padding-left: 18px"></div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" id="saveEnterprise" class="btn btn-primary">Guardar</button>
                        </div>


                    </div>
                </div>
            </div>

            <div class="modal fade" id="personaModal" tabindex="-1" role="dialog" aria-labelledby="personaModalTitle"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="personaModalTitle">Creando Persona</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input type="text" class="form-control" id="nameP" placeholder="Nombre">
                            <br>
                            <input type="text" class="form-control" id="cedulaP" placeholder="Cédula">
                            <br>
                        </div>
                        <div id="messagePerson" style="padding-left: 18px"></div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary" id="savePerson">Guardar</button>
                        </div>
                    </div>
                </div>
            </div>`;


  options.appendChild(divOptions);
  options.appendChild(divCreate);
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
}

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
}

showAllProjects() {
  try {
    this.addButtonsToDiv();
    projectCards.innerHTML = "";
    for (let index = 0; index < JSON_PROJECTS.length; index++) {
      this.printCardHtml(JSON_PROJECTS[index]);
    }
  } catch (error) { }
};

addButtonsToDiv() {
  let { createButton, showAllProjects } = this.createButtons();
  options.appendChild(createButton);
  options.appendChild(showAllProjects);
}

createButtons() {
  let createButton = document.createElement(`button`);
  createButton.className = `btn btn-success`;
  createButton.innerText = `Agregar Proyecto`;
  createButton.setAttribute(`data-target`, `#createModal`);
  createButton.setAttribute(`data-toggle`, `modal`);
  createButton.addEventListener(`click`, () => {
    this.openedCreationModal();
  });
  createButton.id = `open-create-modal`;
  let showAllProjects = document.createElement(`button`);
  showAllProjects.className = `btn btn-info`;
  showAllProjects.innerText = `Mostrar todos los proyectos`;
  showAllProjects.id = `show-all-projects`;
  showAllProjects.addEventListener(`click`, () => {
    options.innerHTML = "";
    this.showAllProjects();
  });
  return { createButton, showAllProjects };
}

printCardHtml(projectToPrint) {

  let divCard = document.createElement('div');
  let buttonShowProject = document.createElement('button');
  buttonShowProject.className = `btn btn-sm btn-info`;
  buttonShowProject.innerText = "Ver Proyecto";
  buttonShowProject.addEventListener('click', () => {
    this.showProject(projectToPrint);
  });

  divCard.className = 'div class="card col-md-3 ml-2 mr-5 mb-5" style="width:400px';
  divCard.style = 'style="width:400px';
  divCard.innerHTML = `<img src=${projectToPrint.image} class='card-img-top'>
    <div class='card-body'>
    <h5 class='card-title'> ${projectToPrint.name} </h5>
    <p class='card-text'> ${projectToPrint.description} </p>`;

  divCard.appendChild(buttonShowProject);
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
  div.innerHTML = `<div style="display:grid" id="grid-project-view"><h1>${project.name}</h1><span><img src="${project.image}"></span>
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
  let divEditingProject = document.getElementById('editing-project');
  buttonEditProject.addEventListener('click', () => {
    project.name = document.getElementById('projectName').value;
    project.status = document.getElementById('projectStatus').value;
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
    this.getPropertiesArrayObject(selectedTechnologies, "technologies", project);
    this.getPropertiesArrayObject(selectedSofkianos, "sofkianos", project);
    project.technologies = this.getPropertiesArrayObject(selectedTechnologies, "technologies");
    project.sofkianos = this.getPropertiesArrayObject(selectedSofkianos, "sofkianos");
    options.innerHTML = "";
    this.showAllProjects();
  });
  buttonEditProject.innerText = ("Aceptar Cambios");
  divEditingProject.appendChild(buttonEditProject);
  let selectClients = document.getElementById('clients-options');
  this.addClientOptions(selectClients, "enterprises");
  this.addClientOptions(selectClients, "persons");
  let tech = document.getElementById('actual-technologies');
  let sofkianos = document.getElementById('actual-sofkianos');
  this.getPropertiesToEdit(tech, 'technologies', project);
  this.getPropertiesToEdit(sofkianos, 'sofkianos', project);
}

getPropertiesToEdit(div, jsonName, project) {
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

getPropertiesArrayObject(namesArray, jsonName) {
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
}

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

printArrayPropertyFromProjectWithPropertyName(project, element, propertyName) {
  for (let i = 0; i < project[propertyName].length; i++) {
    element.innerText += `\t${project[propertyName][i].name}`;
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

addClientOptions(select, type) {
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

createProject() {
  try {
    let id = 4;
    let name = document.getElementById('project-name').value;
    let description = document.getElementById('project-description').value;
    let starDate = document.getElementById('project-start-date').value;
    let endDate = document.getElementById('project-end-date').value;
    let image = "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg";
    let clientName = document.getElementById('project-client-select');
    let typeName = clientName.getElementsByTagName('option')[clientName.selectedIndex].id;
    let clientObject = this.getClientObject(clientName.value, typeName);
    let projectTechnologies = document.getElementsByName('technology');
    let projectSofkianos = document.getElementsByName('sofkiano');
    let technologies = this.getCheckedBoxes(projectTechnologies);
    let sofkianos = this.getCheckedBoxes(projectSofkianos);
    let projectToCreate = new Project(name, "To Do", description, starDate, endDate, image, clientObject, technologies, sofkianos, id);
    JSON.stringify(JSON_PROJECTS.push(projectToCreate));
    debugger;
  } catch (error) {
    console.log(error);
  } finally {
    this.showAllProjects();
  }
}

findValueByAnyAttribute(value, attribute) {
  try {

    let results = [];
    Object.keys(projects).map(key => {
      if (JSON_PROJECTS.projects[key][attribute] === value) {
        results.push(projects[key]);
      }
    });
    return results;
  } catch (error) { }
};

printSearchResults(resultsArray) {
  for (let i = 0; i < resultsArray.length; i++) {
    printCardHtml(resultsArray[i]);
  }
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


}

module.exports = ProjectFunctions;