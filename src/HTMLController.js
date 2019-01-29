<<<<<<< HEAD
import ProjectFunctions from './model/ProjectFunctions';
let { createDivOptionsClient, cleanHtml } = require('./clientModule/clientController/clientFunctions');
=======
import ProjectFunctions from './projectModule/model/ProjectFunctions';
import HomeView from './HomeModule/homeView';

>>>>>>> master

var { Client } = require('./clientModule/models');
require("./clientModule/clientController/clientCrud");


const JSON_FILE_FOR_PROJECTS = require('./projectModule/data/ProjectData.json');

const JSON_PROJECTS = JSON_FILE_FOR_PROJECTS.projects;

let divMainClass = document.getElementById('cards-content');

let controllerName = document.getElementById('controllerName');
let homeBtn = document.getElementById('btnHome');
let clientBtn = document.getElementById('btnClients');

let projectFunctions = new ProjectFunctions();
let home = new HomeView();

clientBtn.addEventListener('click', () => {
    cleanHtml();
    createDivOptionsClient();
    Client.prototype.functionClients();
    Client.prototype.createClients();
    Client.prototype.getClients();
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
});

homeBtn.addEventListener('click', () => {
    console.log("the bar is close");
    cleanHtml();
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    home.showHome();
});

document.getElementById('btnProject').addEventListener('click', () => {
    cleanHtml();
    projectFunctions.showAllProjects(JSON_PROJECTS);
    console.log("the bar is close");
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
});

controllerName.innerText = "Sofkatalogo";

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
}

home.showHome();