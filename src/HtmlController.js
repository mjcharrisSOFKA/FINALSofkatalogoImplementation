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

document.getElementById('btnSofkianos').addEventListener('click',() => {
    cleanHtml();
    sofkianPeople.showAllSofkians(JSON_SOFKIAN.sofkians);
    sofkianPeople.createDivOptionsSofkian();
    
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    viewName = 'sofkian';
    console.log(viewName);
});

document.addEventListener('click',function(e){
    if(e.target && e.target.id === "borrar_sofkiano"){
          try{
                var nombreDelEliminado = e.target.parentNode.id;
                sofkianPeople.eliminarSofkianoPorNombre(JSON_SOFKIAN.sofkians,nombreDelEliminado)
          }catch(error){
                console.log("Ha ocurrido un error: " + error);
          }
    }

    if(e.target && e.target.id === "abrir_form_editar_sofkiano"){
        try{
              var nombreSofkiano = e.target.parentNode.id;
              sofkianPeople.incluirHtmlParaEditar(JSON_SOFKIAN.sofkians,nombreSofkiano)
        }catch(error){
             console.log("Ha ocurrido un error: " + error);
        }
  }

  if(e.target && e.target.id === "editar_sofkiano"){
    try{
          var valoresPostEdicion = e.target.parentNode.querySelectorAll("div> input");
          sofkianPeople.editarSokfiano(JSON_SOFKIAN.sofkians,valoresPostEdicion)
          sofkianPeople.showAllSofkians(JSON_SOFKIAN.sofkians);
          console.log(analizando)
    }catch(error){
         console.log("Ha ocurrido un error: " + error);
    }
    }

    if(e.target && e.target.id === "abrir_form_abrir_sofkiano"){
        try{
              sofkianPeople.incluirHtmlParaAgregar();
        }catch(error){
             console.log("Ha ocurrido un error: " + error);
        }
        }

    if(e.target && e.target.id === "agregar_sofkiano"){
        //try{
            var valoresDelAgregado = e.target.parentNode.querySelectorAll("div> input");
            sofkianPeople.agregarSokfiano(JSON_SOFKIAN.sofkians,valoresDelAgregado)
            sofkianPeople.showAllSofkians(JSON_SOFKIAN.sofkians);
        //}catch(error){
                console.log("Ha ocurrido un error: " + error);
        //}
    }

})





document.getElementById('btnProject').addEventListener('click', () => {
    cleanHtml();
    projectFunctions.showAllProjects();
    console.log("the bar is close");
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("button-openSideBar").style.display = 'block';
    viewName = 'project';
    console.log(viewName);

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
