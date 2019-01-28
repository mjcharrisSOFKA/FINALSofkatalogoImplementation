
class SofkianFunctions {

  constructor() {
    this.sofkianCards = document.getElementById('sofkianDiv');  
  }

      showAllSofkians(jsonArray) {
            var StringHtmlCardConcatenado;
            for (let index = 0; index < jsonArray.length; index++) {
                  StringHtmlCardConcatenado += this.cardSofkian(jsonArray[index]);
            }
            this.printCardHtml(StringHtmlCardConcatenado)
      };

      printCardHtml(StringHtmlCard) {
            let div = document.getElementById('sofkianDiv');
            div.innerHTML = StringHtmlCard;
      };

    cardSofkian(sofkian){
      return '<div  class="card col-md-3 mr-5 mb-3" style="width: 18rem; padding: 0.2%; margin: 2%">' +
      '<img src="imgs/' + sofkian.img + '" class="card-img-top" alt="...">' +
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

    showEspecificSokfian(jsonArray){
            if (this.indicarSiExisteElSofkiano(jsonArray)){
                  this.buscarSofkianoSofkianoPorNombre(jsonArray)
            }
            else{
                  alert("no existe el sofkiano buscado")
            }
    }

    indicarSiExisteElSofkiano(jsonArray){
        var sofkianoFueEncontrado = false;
        var nombreDeSofianoBuscado = document.getElementById('nombreSofkianoBuscado').value;
        for (var index = 0; index < jsonArray.length; index++) { 
              if (jsonArray[index].name === nombreDeSofianoBuscado){
                    sofkianoFueEncontrado = true
              }
        }
        return sofkianoFueEncontrado
    }

    buscarSofkianoSofkianoPorNombre(jsonArray){
      var nombreDeSofianoBuscado = document.getElementById('nombreSofkianoBuscado').value;
      for (var index = 0; index < jsonArray.length; index++) { 
            if (jsonArray[index].name === nombreDeSofianoBuscado){
                  this.printCardHtml(this.cardSofkian(jsonArray[index])) ;
            }
      }  
}
      eliminarSokfian(jsonArray){
            if(this.hayUnSofkianoBuscado()){
                  this.eliminarSofkianoPorNombre(jsonArray)
                  console.log(jsonArray)
                  document.getElementById('sofkianDiv').innerHTML = " ";
           }
           else{
                 alert("no hay un sofkiano especificado para eliminar")
           }
      }

      hayUnSofkianoBuscado(){
            var sofkianoEncontrado = false;
            if(document.getElementById('sofkianDiv').innerHTML !== "NaN"){
                  sofkianoEncontrado = true;
            }
            return sofkianoEncontrado;
      }

      eliminarSofkianoPorNombre(jsonArray){
            var nombreDelEliminado = document.getElementById('divConSofkianName').innerHTML;
            for( var index = 0; index <  jsonArray.length; index++){ 
                  if (jsonArray[index].name === nombreDelEliminado) {
                        jsonArray.splice(index, 1); 
                  }
            }
      }


}

module.exports = SofkianFunctions;