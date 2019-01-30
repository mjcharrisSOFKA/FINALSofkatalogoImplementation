import ProjectFunctions from './projectModule/model/ProjectFunctions';
import HomeView from './HomeModule/homeView';
import Sofkian from './SofkianComponent/model/SofkianFunctions';

const JSON_SOFKIAN = require('./SofkianComponent/data/SofkianData.json');

let {
    createDivOptionsClient
} = require('./clientModule/clientController/clientFunctions');

var {
    Client
} = require('./clientModule/models');
require("./clientModule/clientController/clientCrud");
require('./clientModule/clientController/clientFunctions');

let viewName;

let divMainClass = document.getElementById('cards-content');
let divOptions = document.getElementById('options');

let controllerName = document.getElementById('controllerName');
let homeBtn = document.getElementById('btnHome');
let clientBtn = document.getElementById('btnClients');

let projectFunctions = new ProjectFunctions();
let sofkianPeople = new Sofkian();
let home = new HomeView();

let searchbtn = document.getElementById('searchButton');

clientBtn.addEventListener('click', () => {
    cleanHtml();
    let button = document.getElementById('search-box');
    button.style = "display: block";
    createDivOptionsClient();
    Client.prototype.functionClients();
    Client.prototype.createClients();
    Client.prototype.getClients();
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    viewName = 'client';
    console.log(viewName);

});

homeBtn.addEventListener('click', () => {
    console.log("the bar is close");
    cleanHtml();
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    home.showHome();
    viewName = 'home';
});

document.getElementById('btnSofkianos').addEventListener('click', () => {
    cleanHtml();
    sofkianPeople.showAllSofkians(JSON_SOFKIAN.sofkians);

    let button = document.getElementById('search-box');
    button.style = "display: block";

    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    viewName = 'sofkian';
    console.log(viewName);
});

document.getElementById('btnProject').addEventListener('click', () => {
    cleanHtml();
    projectFunctions.showAllProjects();
    let button = document.getElementById('search-box');
    button.style = "display: block";
    console.log("the bar is close");
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    viewName = 'project';
    console.log(viewName);

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


function searchInProject() {
    switch (valueName) {
        case 'client':

            break;
        case 'project':
            break;
        case 'sofkian':
            break;
        case 'about us':
            break;
        default:
            return 'case';
    }
}

home.showHome();