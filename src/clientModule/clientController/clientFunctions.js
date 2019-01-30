"use strict";

var clientList = require('./clientObjects.js');
var { Client } = require('../models.js');
var showClient = [];
var arr = [];
let divRow = document.getElementById('cards-content');
let divOptionsClient = document.getElementById('options');

for (let i in clientList) {
    arr.push(clientList[i]);
}

Client.prototype.getClients = () => {

    try {

        for (let j = 0; j < arr.length; j++) {
            showClient += arr[j].map((client) => {
                return Client.prototype.printCardHtml(client);
            });
        }

    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
    }

};

Client.prototype.getClientsPerson = (type) => {
    var filterPersona = arr.filter(function (client) {
        return (client.type === "Persona")
    });
    console.log(filterPersona);
}

Client.prototype.getAllEnterprises = () => {

    var showEnterprise = arr[0].map((enterprise) => {
        return cardEnterprise(enterprise);
    });
    divRow.innerHTML = showEnterprise;
}

Client.prototype.getAllPersons = () => {
    var showPerson = arr[1].map((person) => {
        return Client.prototype.printCardHtml(person);
    });
}

Client.prototype.functionClients = () => {
    document.getElementById("allClients").addEventListener('click', () => {
        cleanHtmlClient();
        Client.prototype.getClients();
    });
    document.getElementById("enterprises").addEventListener('click', () => {
        cleanHtmlClient();
        Client.prototype.getAllEnterprises();
    });
    document.getElementById("persons").addEventListener('click', () => {
        cleanHtmlClient();
        Client.prototype.getAllPersons();
    });
    /*document.getElementById("searchButton").addEventListener('click', () => {
        Client.prototype.getClientsByName();
    });*/
}

Client.prototype.printCardHtml = (client) => {

    let div = document.createElement('div');
    div.className = "card col-md-3 ml-2 mr-5 mb-5";
    div.style = "width:400px";

    let buttonEdit = document.createElement('button');
    buttonEdit.innerHTML = `<p>Update</p>`;
    buttonEdit.style = "height: 40px";
    buttonEdit.className = "btn btn-primary mb-3";
    buttonEdit.onclick = () => { Client.prototype.editClient(client) };

    let buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = "<p>Delete</p>";
    buttonDelete.style = "height: 40px";
    buttonDelete.className = "btn btn-danger mb-3";
    buttonDelete.onclick = () => { Client.prototype.deleteClient(client) };

    div.innerHTML = `<img src="${client.img}" alt="Card image" style="width:100%">
        <div class="card-body">
        <h4 class="card-title">${client.name}</h4>
        <p class="card-text">Sofka se debe a sus clientes a quienes consideramos socios estratégicos...</p>
        </div>
        </div>`;

    div.appendChild(buttonEdit);
    div.appendChild(buttonDelete);


    return divRow.appendChild(div);
}

function cardEnterprise(clientEnterprise) {

    return `<div class="card col-md-3 ml-2 mr-5 mb-5" style="width:400px">
        <img src="${clientEnterprise.img}" alt="Card image" style="width:100%">
        <div class="card-body">
        <h4 class="card-title" id="enterpriseName">${clientEnterprise.name}</h4>
        <p class="card-text">NIT: ${clientEnterprise.nit} </p>
        <p class="card-text">TAMAÑO DE LA EMPRESA: ${clientEnterprise.size} </p>
        <p class="card-text">SECTOR: ${clientEnterprise.sector} </p>
        <a href="${clientEnterprise.web}" id="moreEnterprise" target="_blank" class="btn btn-primary" style="width: 210px">Ver mas</a>
        </div>
        </div>`
}


function createDivOptionsClient() {


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


    divOptionsClient.appendChild(divOptions);
    divOptionsClient.appendChild(divCreate);
}

function cleanHtmlClient() {
    divRow.innerHTML = " ";
}

module.exports = { divRow, cleanHtmlClient, createDivOptionsClient };