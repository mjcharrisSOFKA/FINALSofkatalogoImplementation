"use strict";

var clientList = require('./clientObjects.js');
var { Client } = require('../models.js');
var showClient = [];
var arr = [];
let divRow = document.getElementById("client");

for (let i in clientList) {
    arr.push(clientList[i]);
}

(Client.prototype.getClients = () => {

    try {
        for (let j = 0; j < arr.length; j++) {
            showClient += arr[j].map((client) => {
                return cardGeneric(client);
            });
        }
        document.getElementById("allClients").addEventListener('click', () => {
            cleanHtml();
            Client.prototype.getClients();
        });

    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
    }

})();



Client.prototype.getClientsPerson = (type) => {
    var filterPersona = arr.filter(function (client) {
        return (client.type === "Persona")
    });
    console.log(filterPersona);
}

(Client.prototype.getAllEnterprises = () => {

    try {
        document.getElementById("enterprises").addEventListener('click', () => {
            var showEnterprise = arr[0].map((enterprise) => {
                return cardEnterprise(enterprise);
            });
            divRow.innerHTML = showEnterprise;
        });
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
    }

})();

(Client.prototype.getAllPersons = () => {

    try {
        document.getElementById("persons").addEventListener('click', () => {
            cleanHtml();
            var showPerson = arr[1].map((person) => {
                return cardGeneric(person);
            });
            //divRow.innerHTML = showPerson;
        });
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
    }

})();

(Client.prototype.getClientsEnterpriseByName = () => {

    try {
        document.getElementById("searchButton").addEventListener('click', () => {
            let cliSearched = document.getElementById("clientToSearch").value;
            let foundCliente;
            let foundPersona;
            let actual;
            let actualClient;

            var show = arr[0].map((client) => {
                foundCliente = client.name === cliSearched.toUpperCase();
                if (foundCliente) {
                    actual = client;
                }
            });

            var show = arr[1].map((client) => {
                foundPersona = client.name === cliSearched.toUpperCase();
                if (foundPersona) {
                    actualClient = client;
                }
            });

            if (actual !== undefined) {
                divRow.innerHTML = cardEnterprise(actual);
            }
            else if (actualClient !== undefined) {
                divRow.innerHTML = cardGeneric(actualClient);
            }
            else {
                divRow.innerHTML = "<h2>Cliente no encontrado</h2>";
            }

        });
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
    }

})();


function cardGeneric(client) {

    let div = document.createElement('div');
    div.className = "card col-md-3 mr-5 mb-5";
    div.style = "width:400px";

    let buttonEdit = document.createElement('button');
    buttonEdit.innerHTML = "<p>Update</p>";
    buttonEdit.style = "height: 40px";
    buttonEdit.className = "btn btn-primary mb-3";
    buttonEdit.onclick = () => { editClient(client) };

    let buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = "<p>Delete</p>";
    buttonDelete.style = "height: 40px";
    buttonDelete.className = "btn btn-danger mb-3";
    buttonDelete.onclick = () => { deleteClient(client) };

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

function editClient(client) {
    //Buscar cliente y editarlo
    console.log("Cliente a editar: ");
    console.log(client);
}

function  deleteClient(client) {
    //Buscar cliente y eliminarlo
    console.log("Cliente a eliminar: ");
    console.log(client);
}

function cleanHtml() {
    divRow.innerHTML = " ";
}