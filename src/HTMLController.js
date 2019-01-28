
import ProjectFunctions from './model/ProjectFunctions';


const JSON_FILE_FOR_PROJECTS = require('./data/ProjectData.json');
const JSON_FILE_FOR_CLIENTS = require('./data/clientData.json');

const JSON_PROJECTS = JSON_FILE_FOR_PROJECTS.projects;
const JSON_CLIENTS = JSON_FILE_FOR_CLIENTS;

let controllerName = document.getElementById('controllerName');
let cards_view = document.getElementById('cards-content');

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

controllerName.innerText="Sofkatalogos";

let projectFunctions = new ProjectFunctions();

projectFunctions.showAllProjects(JSON_PROJECTS);
