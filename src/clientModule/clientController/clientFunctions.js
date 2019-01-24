"use strict";

var clientList = require('./clientObjects.js');
var { Client } = require('../models.js');
var showClient = [];
var arr = [];

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
            document.getElementById("client").innerHTML = showClient;

        });
        document.getElementById("client").innerHTML = showClient;
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
            document.getElementById("client").innerHTML = showEnterprise;
            document.getElementById("moreEnterprise").addEventListener('click', () => {
                let enterpriseName= document.getElementById("enterpriseName").value;
                console.log(enterpriseName);
            });
        });
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
    }

})();

(Client.prototype.getAllPersons = () => {

    try {
        document.getElementById("persons").addEventListener('click', () => {
            var showPerson = arr[1].map((person) => {
                return cardGeneric(person);
            });
            document.getElementById("client").innerHTML = showPerson;
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
            let actual;

            var show = arr[0].map((client) => {
                foundCliente = client.name === cliSearched.toUpperCase();
                if (foundCliente) {
                    actual = client;
                }
            });

            if (actual !== undefined) {
                document.getElementById("client").innerHTML = cardEnterprise(actual);
            } else {
                document.getElementById("client").innerHTML = "<h2>Cliente no encontrado</h2>";
            }

        });
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
    }

})();


function cardGeneric(client) {
    return '<div class="card col-md-3 mr-5 mb-3" style="width:400px">' +
        '<img src="' + client.img + '" alt="Card image" style="width:100%">' +
        '<div class="card-body">' +
        '<h4 class="card-title">' + client.name + '</h4>' +
        '<p class="card-text">Sofka se debe a sus clientes a quienes consideramos socios estratégicos...</p>' +
        '</div>' +
        '</div>'
}

function cardEnterprise(clientEnterprise) {
    return '<div class="card col-md-3 mr-5 mb-3" style="width:400px">' +
        '<img src="' + clientEnterprise.img + '" alt="Card image" style="width:100%">' +
        '<div class="card-body">' +
        '<h4 class="card-title" id="enterpriseName">' + clientEnterprise.name + '</h4>' +
        '<p class="card-text">NIT: ' + clientEnterprise.nit + '</p>'+
        '<p class="card-text">SECTOR: ' + clientEnterprise.sector + '</p>' +
        '<a href=" ' + clientEnterprise.web + '" id="moreEnterprise" target="_blank" class="btn btn-primary">Ver mas</a>'+
        '</div>' +
        '</div>'
}

