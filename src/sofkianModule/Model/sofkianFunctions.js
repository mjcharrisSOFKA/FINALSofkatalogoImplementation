let divOptionsClient = document.getElementById('options');
class SofkianFunctions {

  constructor() {
    this.projectCards = document.getElementById('sofkianDiv');
  }

  showAllSofkians(jsonArray) {
    for (let index = 0; index < jsonArray.length; index++) {
      this.printCardHtml(jsonArray[index]);
    }
  };

  printCardHtml(htmmlString) {
    let cardToPrint = document.getElementById('sofkianDiv');
    let div = document.createElement('div');
    div.innerHTML = htmmlString
    cardToPrint.appendChild(div);
  }

  cardSofkian(sofkian) {
    return '<div  class="card col-md-3 mr-5 mb-3" style="width: 18rem; padding: 0.2%; margin: 2%">' +
      '<img src="imgs/' + sofkian.img + '.jpeg" class="card-img-top" alt="...">' +
      '<div class="card-body">' +
      '<h5 id="divConSofkianName" class="card-title" id="enterpriseName">' + sofkian.name + '</h5>' +
      '<p id="divConSofkianCedula" class="card-text">cedula: ' + sofkian.id + '</p>' +
      '<p id="divConSofkianCaracteristicas" class="card-text">caracteristicas: ' + sofkian.characteristics + '</p>' +
      '<p id="divConSofkianExperiencia" class="card-text">Experiencia en Sofka: ' + sofkian.sofkaExperience + '</p>' +
      '<p id="divConBeforeSofkianExperiencia" class="card-text">Experiencia pre-Sofka: ' + sofkian.beforeSofkaExperience + '</p>' +
      '<p id="divConTecnologia1" class="card-text">tecnologias manejadas: ' + sofkian.tecnologiasManejadas + '</p>' +
      '<p id="divConTecnologia1" class="card-text">proyecto 1: ' + sofkian.proyecto1 + '</p>' +
      '<p id="divConTecnologia1" class="card-text">dedicacion: ' + sofkian.dedicacionProyecto1 + '%</p>' +
      '<p id="divConTecnologia1" class="card-text">proyecto 2: ' + sofkian.proyecto2 + '</p>' +
      '</div>' +
      '</div>';
  }
  createDivOptionsSofkian() {
    try {
      let divOptions = document.createElement('div');
      console.log(divOptions);
      divOptions.className = "col-md-6";
      divOptions.style = "width:400px";
      divOptions.innerHTML = `<div class="dropdown col-md-12" style="padding-left: 0px; margin-bottom: 8px">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">
      Opciones de busqueda
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" id="enterprises" style="cursor:pointer">Ver Empresas</a>
      <a class="dropdown-item" id="persons" style="cursor:pointer">Ver Personas asociadas</a>
      <a class="dropdown-item" id="allClients" style="cursor:pointer">Ver todos</a>
  </div>
  </div> 
  </div>`;
      divOptionsClient.appendChild(divOptions);
    } catch (error) {
      console.log(error);
  
    }
  }

}

function createDivOptionsSofkian() {
  try {
    let divOptions = document.createElement('div');
    console.log(divOptions);
    divOptions.className = "col-md-6";
    divOptions.style = "width:400px";
    divOptions.innerHTML = `<div class="dropdown col-md-12" style="padding-left: 0px; margin-bottom: 8px">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
    aria-haspopup="true" aria-expanded="false">
    Opciones de busqueda
</button>
<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" id="enterprises" style="cursor:pointer">Ver Empresas</a>
    <a class="dropdown-item" id="persons" style="cursor:pointer">Ver Personas asociadas</a>
    <a class="dropdown-item" id="allClients" style="cursor:pointer">Ver todos</a>
</div>
</div> 
</div>`;
    divOptionsClient.appendChild(divOptions);
  } catch (error) {
    console.log(error);

  }
}

module.exports = {
  createDivOptionsSofkian
};