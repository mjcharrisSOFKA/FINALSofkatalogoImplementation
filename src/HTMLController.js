import ProjectFunctions from './model/ProjectFunctions';
import ClientFunctions from './clientModule/clientController/clientFunctions';

require("./clientModule/clientController/clientFunctions");
require("./clientModule/clientController/clientCrud");


const JSON_FILE_FOR_PROJECTS = require('./data/ProjectData.json');

const JSON_PROJECTS = JSON_FILE_FOR_PROJECTS.projects;

let divMainClass = document.getElementById('cards-content'); 
let divClientHTML = document.getElementById('client-container');

let controllerName = document.getElementById('controllerName');
let homeBtn = document.getElementById('btnHome');
let clientBtn = document.getElementById('btnClients');

clientBtn.addEventListener('click',()=>{
    divMainClass.insertAdjacentHTML('beforebegin',divClientHTML);
});

homeBtn.addEventListener('click',()=>{
       
    console.log("the bar is close");
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
});

let projectFunctions = new ProjectFunctions();
document.getElementById('btnProject').addEventListener('click', () => {
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