
class ProjectFunctions {

  constructor() {
    this.projectCards = document.getElementById('sofkianDiv');  
  }

  showAllProjects(jsonArray) {
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








}