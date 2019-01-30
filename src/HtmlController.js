import ProjectFunctions from './projectModule/model/ProjectFunctions';
import HomeView from './HomeModule/homeView';
import Sofkian from './SofkianComponent/model/SofkianFunctions';

const JSON_SOFKIAN = require('./SofkianComponent/data/SofkianData.json');

let {
    createDivOptionsClient,
} = require('./clientModule/clientController/clientFunctions');

var {
    Client
} = require('./clientModule/models');
require("./clientModule/clientController/clientCrud");
require('./clientModule/clientController/clientFunctions');

var viewName = "";
var controller;

let divMainClass = document.getElementById('cards-content');
let divOptions = document.getElementById('options');

let homeBtn = document.getElementById('btnHome');
let clientBtn = document.getElementById('btnClients');

let projectFunctions = new ProjectFunctions();
let sofkianPeople = new Sofkian();
let home = new HomeView();

let searchbtn = document.getElementById('search-icon');

function showSearchButton() {
    let button = document.getElementById('search-box');
    button.style = "display: block";
}

homeBtn.addEventListener('click', () => {
    console.log("the bar is close");
    cleanHtml();
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    home.showHome();
    viewName = 'home';
});

clientBtn.addEventListener('click', () => {
    viewName = `Clients`;
    controller = Client.prototype.printCardHtml;
    cleanHtml();
    showSearchButton();
    createDivOptionsClient();
    Client.prototype.functionClients();
    Client.prototype.createClients();
    Client.prototype.getClients();
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    home.controllerName.innerText = `Clientes`;
});

document.getElementById('btnSofkianos').addEventListener('click', () => {
    viewName = `Sofkianos`;
    controller = sofkianPeople;
    cleanHtml();
    showSearchButton();
    sofkianPeople.showAllSofkians(JSON_SOFKIAN.sofkians);
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    home.controllerName.innerText = viewName;
});

document.getElementById('btnProject').addEventListener('click', () => {
    viewName = `Projects`;
    controller = projectFunctions;
    cleanHtml();
    showSearchButton();
    projectFunctions.createModal();
    projectFunctions.addCreateButtonToModal();
    projectFunctions.showAllProjects();
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    home.controllerName.innerText = `Proyectos`;
});

document.getElementById("button-openSideBar").addEventListener("click", () => {
    console.log("the bar is open");
    document.getElementById("main").style.marginLeft = "25%";
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("button-openSideBar").style.display = 'none';
});

document.getElementById("button-closeSideBar").addEventListener("click", () => {
    console.log("the bar is close");
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
});

function cleanHtml() {
    divMainClass.innerHTML = " ";
    divOptions.innerHTML = " ";
}

searchbtn.addEventListener(`click`, () => {
    let searchTxt = document.getElementById("searchButton").value;
    let arrayName = viewName;
    let property = arrayName.toLocaleLowerCase();
    const TEMP_JSON = require(`./projectModule/data/${arrayName}Data.json`)[property];
    let foundObject;
    let sizeJson = Object.keys(TEMP_JSON).length;
    if (sizeJson === 2) {
        console.log('Lo hago para clientes');
        var arrClients = [];
        for (let i in TEMP_JSON) {
            arrClients.push(TEMP_JSON[i]);
        }
        let client = compareClient(arrClients, searchTxt);
        divMainClass.innerHTML = " ";
        try {
            controller(client);
        } catch (error) {
            validateSearch();
        }

    } else {
        foundObject = TEMP_JSON.filter(object => compareValues(searchTxt, object));
        divMainClass.innerHTML = " ";
        try {
            controller.printCardHtml(foundObject[0]);
        } catch (error) {
            validateSearch();
        }

    }
});

function compareClient(clients, inputValue) {
    let clientFoud;
    for (let j = 0; j < clients.length; j++) {
        clients[j].filter((client) => {
            if (client.name === inputValue.toUpperCase()) {
                clientFoud = client;
            }
        });
    }
    return clientFoud
}

function compareValues(inputValue, jsonObject) {
    if (inputValue.toLowerCase() === jsonObject.name.toLowerCase()) return jsonObject;
}

function validateSearch() {
    divMainClass.innerHTML = '<h2>No hay resultados<h2>'
}

home.showHome();