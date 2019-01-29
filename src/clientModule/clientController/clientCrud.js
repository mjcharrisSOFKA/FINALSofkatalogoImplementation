let { Client, Enterprise, Person } = require("../models");

let clientsCollection = require("./clientObjects");
let nameEmpresa, nitEmpresa, size, sector, namePersona, cedulaPersona;

let { divRow, cleanHtmlClient } = require('../clientController/clientFunctions');

Client.prototype.createClients = () => {
    nameEmpresa = document.getElementById("nameEnterprise");
    nitEmpresa = document.getElementById("nitEnterprise");
    size = document.getElementById("sizeEnterprise");
    sector = document.getElementById("sectorEnterprise");

    namePersona = document.getElementById("nameP");
    cedulaPersona = document.getElementById("cedulaP");
    try {
        document.getElementById("saveEnterprise").addEventListener("click", () => {
            createEnterprise();
        });
        document.getElementById("savePerson").addEventListener("click", () => {
            createPerson();
        });
    } catch (error) {
        console.log(error);
    }
}

function createEnterprise() {
    if (nameEmpresa.value === "" || nitEmpresa.value === "") {
        validate();
    } else {
        let newEnterprise = new Enterprise(nameEmpresa.value.toUpperCase(), nitEmpresa.value, size.value, sector.value, "https://cdn.onlinewebfonts.com/svg/img_67309.png");
        clientsCollection.enterprises.push(newEnterprise);
        cleanFormEnterprise();
        showMessageEnterprise();
        cleanHtmlClient();
        getClients();
    }
}

function createPerson() {
    if (namePersona.value === "" || cedulaPersona.value === "") {
        validate();
    } else {
        let newPerson = new Person(namePersona.value.toUpperCase(), cedulaPersona.value, "https://universpiti.foititikanea.gr/oc-content/themes/vrisko/images/no_user.png");
        clientsCollection.persons.push(newPerson);
        cleanFormPerson();
        showMessagePerson();
        cleanHtmlClient();
        getClients();
    }
}

Client.prototype.editClient = (client) => {

    let divCreated;
    let buttonEdit = document.createElement('button');
    buttonEdit.innerHTML = `<p>Save changes</p>`;
    buttonEdit.style = "height: 40px";
    buttonEdit.className = "btn btn-success mb-3";

    cleanHtmlClient();

    if (client.type === "Empresa") {
        divCreated = createDiv();
        divCreated.innerHTML = formEnterprise(client);

        buttonEdit.onclick = () => {
            try {
                let nameEnterprise = document.getElementById("nameEnterp").value.toUpperCase();
                let nitEnterprise = document.getElementById("nitEnterp").value;
                let sizeEnterprise = document.getElementById("sizeEnterp").value;
                let sectorEnterprise = document.getElementById("sectorEnterp").value;

                if (nameEnterprise === "" || nitEnterprise === "") {
                    validate();
                } else {
                    for (let i = 0; i < clientsCollection.enterprises.length; i++) {

                        if (clientsCollection.enterprises[i].nit === client.nit) {
                            clientsCollection.enterprises[i].name = nameEnterprise;
                            clientsCollection.enterprises[i].nit = nitEnterprise;
                            clientsCollection.enterprises[i].size = sizeEnterprise;
                            clientsCollection.enterprises[i].sector = sectorEnterprise;

                            returnBackUpdate();
                        }

                    }
                }

            } catch (error) {
                console.log(error);
            }
        };

        divCreated.appendChild(buttonEdit);
        divRow.appendChild(divCreated);

    } else {
        divCreated = createDiv();
        divCreated.innerHTML = formPerson(client);

        buttonEdit.onclick = () => {
            let namePerson = document.getElementById("namePerson").value.toUpperCase();
            let cedulaPerson = document.getElementById("cedulaPerson").value;

            if (namePerson === "" || cedulaPerson === "") {
                validate();
            } else {
                for (let i = 0; i < clientsCollection.persons.length; i++) {
                    if (clientsCollection.persons[i].cedula === cedulaPerson) {
                        clientsCollection.persons[i].name = namePerson;
                        clientsCollection.persons[i].cedula = cedulaPerson;

                        returnBackUpdate();
                    }
                }
            }
        };

        divCreated.appendChild(buttonEdit);
        divRow.appendChild(divCreated);
    }
}

Client.prototype.deleteClient = (client) => {
    try {
        if (client.type === "Empresa") {
            for (let i = 0; i < clientsCollection.enterprises.length; i++) {
                if (clientsCollection.enterprises[i].nit === client.nit) {
                    clientsCollection.enterprises.splice(i, 1);

                    returnBackDelete();
                }
            }
        } else {
            for (let i = 0; i < clientsCollection.persons.length; i++) {
                if (clientsCollection.persons[i].cedula === client.cedula) {
                    clientsCollection.persons.splice(i, 1);

                    returnBackDelete();
                }
            }
        }
    } catch (error) {

    }

}

function formEnterprise(enterprise) {
    return `<br><input type="text" class="form-control" id="nameEnterp" placeholder="Nombre" value=${enterprise.name}>
    <br>
    <input type="text" class="form-control" id="nitEnterp" placeholder="Nit"  value=${enterprise.nit}>
    <br>
    <label for="sizeEnterp">Tamaño de la empresa</label>
    <select class="form-control" id="sizeEnterp">
        <option>0-10 Empleados</option>
        <option>11-50 Empleados</option>
        <option>51-200 Empleados</option>
        <option>201-500 Empleados</option>
        <option>1.001-5.000 Empleados</option>
        <option>5.001-10.000 Empleados</option>
        <option>Más de 10.000 Empleados</option>
    </select>
    <br>
    <label for="sectorEnterp">Sector de la empresa</label>
    <select class="form-control" id="sectorEnterp">
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
    </select> <br>`
}

function formPerson(person) {
    return `<br> <input type="text" class="form-control" id="namePerson" placeholder="Nombre" value=${person.name}>
    <br>
    <input type="text" class="form-control" id="cedulaPerson" placeholder="Cédula"  value=${person.cedula}>
    <br>`
}

function createDiv() {
    let div = document.createElement('div');
    div.className = "card col-md-10 mr-5 mb-5";
    div.style = "width:300px";

    return div
}

function cleanFormEnterprise() {
    nameEmpresa.value = " ";
    nitEmpresa.value = " ";
}

function cleanFormPerson() {
    namePersona.value = " ";
    cedulaPersona.value = " ";
}

function showMessageEnterprise() {
    document.getElementById("messageEnterprise").innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
        '<strong>Genial!</strong> Empresa creada' +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>'
}

function showMessagePerson() {
    document.getElementById("messagePerson").innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
        '<strong>Genial!</strong> Persona creada' +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>'
}

function returnBackUpdate() {
    alert('Actualizando cliente');
    cleanHtmlClient();
    getClients();
}

function returnBackDelete() {
    alert('Eliminando cliente');
    cleanHtmlClient();
    getClients();
}

function getClients() {
    Client.prototype.getClients();
}

function validate() {
    alert("Todos lo campos son requeridos");
}