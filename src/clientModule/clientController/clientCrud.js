let { Client, Enterprise, Person } = require("../models");
let clientsCollection = require("./clientObjects");

document.getElementById("createPerson").addEventListener("click", () => {
    let luisa = new Person("Andres Quinto", "1.036.389.136", "../imgs/clients/personaHombre.png");
    console.log(luisa.img);
    
    console.log("Entré");
});
