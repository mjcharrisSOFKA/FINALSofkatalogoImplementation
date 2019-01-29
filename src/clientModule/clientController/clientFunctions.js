"use strict";

var clientList = require('./clientObjects.js');
var { Client } = require('../models.js');
var showClient = [];
var arr = [];
let divRow = document.getElementById('cards-content');
let divOptions = document.getElementById('options');


for (let i in clientList) {
    arr.push(clientList[i]);
}

Client.prototype.getClients = () => {

    try {

        cleanHtml();
        createDiv()
        for (let j = 0; j < arr.length; j++) {
            showClient += arr[j].map((client) => {
                return cardGeneric(client);
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

try {
    document.getElementById("allClients").addEventListener('click', () => {
        Client.prototype.getClients();
    });
    document.getElementById("enterprises").addEventListener('click', () => {
        createDiv();
        Client.prototype.getAllEnterprises();
    });
    document.getElementById("persons").addEventListener('click', () => {
        createDiv();
        Client.prototype.getAllPersons();
    });
    document.getElementById("searchButton").addEventListener('click', () => {   
        Client.prototype.getClientsByName();
    });

} catch (error) {
    console.log("Ha ocurrido un error: " + error);
}

Client.prototype.getAllEnterprises = () => {

    var showEnterprise = arr[0].map((enterprise) => {
        return cardEnterprise(enterprise);
    });
    divRow.innerHTML = showEnterprise;
}

Client.prototype.getAllPersons = () => {
    cleanHtml();
    var showPerson = arr[1].map((person) => {
        return cardGeneric(person);
    });
}

Client.prototype.getClientsByName = () => {

    let cliSearched = document.getElementById("clientToSearch").value.toUpperCase();
    var foundPerson;
    var foundEnterprise;
    let personsList = clientList.persons;
    let enterpriseList = clientList.enterprises;


    foundEnterprise = enterpriseList.filter((client) => {
        return client.name.includes(cliSearched);
    });

    foundPerson = personsList.filter(function (client) {
        return client.name.includes(cliSearched);
    });

    if (foundEnterprise.length !== 0 || foundPerson.length !== 0) {
        cleanHtml();
        for (let i = 0; i < foundEnterprise.length; i++) {
            divRow.innerHTML += cardEnterprise(foundEnterprise[i]);
        }
        for (let i = 0; i < foundPerson.length; i++) {
            divRow.innerHTM += cardGeneric(foundPerson[i]);
        }
    }

    else {
        divRow.innerHTML = "<h2>Cliente no encontrado</h2>";
    }
}

function cardGeneric(client) {

    let div = document.createElement('div');
    div.className = "card col-md-3 mr-5 mb-5";
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

    return `<div class="card col-md-3 mr-5 mb-3" style="width:400px">
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


function createDiv() {


    let div = document.createElement('div');
    div.className = "col-md-12";
    div.style = "width:400px";
    div.innerHTML = `<div class="dropdown col-md-12" style="padding-left: 0px; margin-bottom: 8px">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Opciones de busqueda
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" id="enterprises" style="cursor:pointer">Ver Empresas</a>
        <a class="dropdown-item" id="persons" style="cursor:pointer">Ver Personas asociadas</a>
        <a class="dropdown-item" id="allClients" style="cursor:pointer">Ver todos</a>
    </div>
</div>`;

    divOptions.appendChild(div);

}

function cleanHtml() {
    divRow.innerHTML = " ";
    divOptions.innerHTML = " ";
}

module.exports = { divRow, cleanHtml, createDiv };