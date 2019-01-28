import SofkianFunctions from './model/SofkianFunctions';





const JSON_FILE_FOR_SOFKIANS = require('./data/SofkianData.json');
const JSON_SOFKIANS = JSON_FILE_FOR_SOFKIANS.sofkians;

let divMainClass = document.getElementById('cards-content'); 
let divClientHTML = document.getElementById('client-container');


let homeBtn = document.getElementById('btnHome');
let clientBtn = document.getElementById('btnClients');



let sofkianFunctions = new SofkianFunctions();
document.getElementById('btnSofkian').addEventListener('click', () => {
    sofkianFunctions.showAllSofkians(JSON_SOFKIANS);
});


