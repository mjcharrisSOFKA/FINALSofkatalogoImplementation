let { Client, Enterprise, Person } = require("../models");
let clientsCollection = require("./clientObjects");
let nameEmpresa = document.getElementById("nameEnterprise");
let nitEmpresa = document.getElementById("nitEnterprise");
let size = document.getElementById("sizeEnterprise");
let sector = document.getElementById("sector");

document.getElementById("createPerson").addEventListener("click", () => {

    if (nameEmpresa.value === "" || nitEmpresa.value === "") {
        alert("Todos lo campos soon requridos");
    } else {
        //console.log(nameEmpresa.value, nitEmpresa.value, size.value, sector.value);
        let newEnterprise = new Enterprise(nameEmpresa.value, nitEmpresa.value, size.value, sector, "../imgs/clients/alpina.jpg");
        clientsCollection.enterprises.push(newEnterprise);
        cleanForm();
        message();
        Client.prototype.getClients();
    }

});

function cleanForm() {
    nameEmpresa.value = " ";
    document.getElementById("nitEnterprise").value = " ";
}

function message() {
    document.getElementById("message").innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
        '<strong>Genial!</strong> La empresa ha sido creada' +
        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
        '<span aria-hidden="true">&times;</span>' +
        '</button>' +
        '</div>'
}
