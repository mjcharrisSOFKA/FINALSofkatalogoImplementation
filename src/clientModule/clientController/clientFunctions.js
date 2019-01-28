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

try {
    document.getElementById("enterprises").addEventListener('click', () => {
        Client.prototype.getAllEnterprises();
    });
} catch (error) {
    console.log("Ha ocurrido un error: " + error);
}

try {
    document.getElementById("persons").addEventListener('click', () => {
        Client.prototype.getAllPersons();
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

<<<<<<< Updated upstream
(Client.prototype.getClientsByName = () => {
=======
(Client.prototype.getClientsEnterpriseByName = () => {
>>>>>>> Stashed changes

    document.getElementById("searchButton").addEventListener('click', () => {
        
        let cliSearched = document.getElementById("clientToSearch").value.toUpperCase();
<<<<<<< Updated upstream
        var foundPerson;
        var foundEnterprise;
        let personsList= clientList.persons;
        let enterpriseList= clientList.enterprises;
       
       
        foundEnterprise = enterpriseList.filter( (client) => {
=======
        let lista = clientList.enterprises;
        console.log(lista);

        find = lista.filter((client) => {
>>>>>>> Stashed changes
            return client.name.includes(cliSearched);
        });
        
        foundPerson = personsList.filter(function (client) {
            return client.name.includes(cliSearched);
        });
    
        if (foundEnterprise.length !== 0) {
            cleanHtml();
            for (let i = 0; i < foundEnterprise.length; i++) {
                divRow.innerHTML += cardEnterprise(foundEnterprise[i]);
            }
        }
        else if (foundPerson.length !== 0) {
            cleanHtml();
            for (let i = 0; i < foundPerson.length; i++) {
                divRow.innerHTM += cardGeneric(foundPerson[i]);
            }
        }
        else {
            divRow.innerHTML = "<h2>Cliente no encontrado</h2>";
        }
    }); 



    /*


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
                cleanHtml();
                return cardGeneric(actualClient);
            }
            else {
                divRow.innerHTML = "<h2>Cliente no encontrado</h2>";
            }

        });
    } catch (error) {
        console.log("Ha ocurrido un error: " + error);
    }
*/
})();


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

function cleanHtml() {
    divRow.innerHTML = " ";
}

module.exports = { divRow, cleanHtml };