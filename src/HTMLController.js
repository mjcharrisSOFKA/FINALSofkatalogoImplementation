import ProjectFunctions from './model/ProjectFunctions';
import { ClientRequest } from 'http';


const JSON_FILE_FOR_PROJECTS = require('./data/ProjectData.json');

const JSON_PROJECTS = JSON_FILE_FOR_PROJECTS.projects;

let controllerName = document.getElementById('controllerName');
let homeBtn = document.getElementById('btnHome');


homeBtn.addEventListener('click',()=>{
    let div = document.getElementById('cards-content'); 
    
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