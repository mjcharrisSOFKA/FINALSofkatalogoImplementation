var {
      Sofkiano
} = require('./sofkianClases.js');
const JSON_SOFKIANS = require('./../data/SofkianData.json').sofkians;

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

      cardSofkian(sofkian) {
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

      showEspecificSokfian(jsonArray) {
            if (this.indicarSiExisteElSofkiano(jsonArray)) {
                  this.buscarSofkianoSofkianoPorNombre(jsonArray)
            } else {
                  alert("no existe el sofkiano buscado")
            }
      }

      indicarSiExisteElSofkiano(jsonArray) {
            var sofkianoFueEncontrado = false;
            var nombreDeSofianoBuscado = document.getElementById('nombreSofkianoBuscado').value;
            for (var index = 0; index < jsonArray.length; index++) {
                  if (jsonArray[index].name === nombreDeSofianoBuscado) {
                        sofkianoFueEncontrado = true
                  }
            }
            return sofkianoFueEncontrado
      }

      buscarSofkianoSofkianoPorNombre(jsonArray) {
            var nombreDeSofianoBuscado = document.getElementById('nombreSofkianoBuscado').value;
            for (var index = 0; index < jsonArray.length; index++) {
                  if (jsonArray[index].name === nombreDeSofianoBuscado) {
                        this.printCardHtml(this.cardSofkian(jsonArray[index]));
                  }
            }
      }
      eliminarSokfian(jsonArray) {
            if (this.hayUnSofkianoBuscado()) {
                  this.eliminarSofkianoPorNombre(jsonArray)
                  console.log(jsonArray)
                  document.getElementById('sofkianDiv').innerHTML = " ";
            } else {
                  alert("no hay un sofkiano especificado para eliminar")
            }
      }

      hayUnSofkianoBuscado() {
            var sofkianoEncontrado = false;
            if (document.getElementById('sofkianDiv').innerHTML !== "NaN") {
                  sofkianoEncontrado = true;
            }
            return sofkianoEncontrado;
      }

      eliminarSofkianoPorNombre(jsonArray) {
            var nombreDelEliminado = document.getElementById('divConSofkianName').innerHTML;
            for (var index = 0; index < jsonArray.length; index++) {
                  if (jsonArray[index].name === nombreDelEliminado) {
                        jsonArray.splice(index, 1);
                  }
            }
      }
      incluirHtmlParaEditar(jsonArray) {
            document.getElementById('sofkianDiv').innerHTML = this.formEdicionSofkian(this.devolverSofkiano(jsonArray));
      }
      devolverSofkiano(jsonArray) {
            var sofkiano;
            var nombreDelEditado = document.getElementById('divConSofkianName').innerHTML;
            for (var index = 0; index < jsonArray.length; index++) {
                  if (jsonArray[index].name === nombreDelEditado) {
                        sofkiano = jsonArray[index];
                  }
            }
            return sofkiano;
      }

      editarSokfiano(jsonArray) {
            if (this.hayUnSofkianoBuscado()) {
                  var pocision = this.devolverPocisionEnSofkiano(jsonArray);
                  jsonArray[pocision].name = document.getElementById('nombre_Updt').value;
                  jsonArray[pocision].id = document.getElementById('id_Updt').value;
                  jsonArray[pocision].characteristics = document.getElementById('characteristics_Updt').value;
                  jsonArray[pocision].sofkaExperience = document.getElementById('sofkaExperience_Updt').value;
                  jsonArray[pocision].beforeSofkaExperience = document.getElementById('beforeSofkaExperienced_Updt').value;
                  jsonArray[pocision].tecnologiasManejadas = document.getElementById('tecnologias_Updt').value;
                  jsonArray[pocision].proyecto1 = document.getElementById('proyecto1_Updt').value;
                  jsonArray[pocision].proyecto2 = document.getElementById('proyecto2_Updt').value;
                  jsonArray[pocision].dedicacionProyecto1 = document.getElementById('proyecto1_porcentaje_Updt').value;
                  this.printCardHtml(this.cardSofkian(jsonArray[pocision]));
            } else {
                  alert("no hay un sofkiano especificado para editar")
            }
      }

      devolverPocisionEnSofkiano(jsonArray) {
            var PocisionDelsofkianoEnArray;
            var nombreParaEditar = document.getElementById('divConSofkianName').innerHTML;
            for (var index = 0; index < jsonArray.length; index++) {
                  if (jsonArray[index].name === nombreParaEditar) {
                        var PocisionDelsofkianoEnArray = index;
                  }
            }
            return PocisionDelsofkianoEnArray;
      }

      formEdicionSofkian(sofkian) {
            return '<div  class="card col-md-3 mr-5 mb-3" style="width: 18rem; padding: 0.2%; margin: 2%">' +
                  '<img src="imgs/' + sofkian.img + '" class="card-img-top" alt="...">' +
                  '<h5 id="divConSofkianName" class="card-title" id="enterpriseName">' + sofkian.name + '</h5>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Nombre:</strong></label>' +
                  '<input type="email" class="form-control" id="nombre_Updt" aria-describedby="emailHelp" placeholder="' + sofkian.name + '" value="' + sofkian.name + '">' +
                  '</div>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Cedula:</strong></label>' +
                  '<input type="email" class="form-control" id="id_Updt" aria-describedby="emailHelp" placeholder="' + sofkian.id + '" value="' + sofkian.id + '">' +
                  '</div>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Caracteristicas:</strong></label>' +
                  '<input type="textarea" class="form-control" id="characteristics_Updt" aria-describedby="emailHelp" placeholder="' + sofkian.characteristics + '" value="' + sofkian.characteristics + '">' +
                  '</div>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Experiencia en sofka:</strong></label>' +
                  '<input type="textarea" class="form-control" id="sofkaExperience_Updt" aria-describedby="emailHelp" placeholder="' + sofkian.sofkaExperience + '" value="' + sofkian.sofkaExperience + '">' +
                  '</div>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Experiencia pre-sofka:</strong></label>' +
                  '<input type="textarea" class="form-control" id="beforeSofkaExperienced_Updt" aria-describedby="emailHelp" placeholder="' + sofkian.beforeSofkaExperience + '" value="' + sofkian.beforeSofkaExperience + '">' +
                  '</div>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Tecnologias manejadas:</strong></label>' +
                  '<input type="textarea" class="form-control" id="tecnologias_Updt" aria-describedby="emailHelp" placeholder="' + sofkian.tecnologiasManejadas + '" value="' + sofkian.tecnologiasManejadas + '">' +
                  '</div>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Proyecto 1:</strong></label>' +
                  '<input type="textarea" class="form-control" id="proyecto1_Updt" aria-describedby="emailHelp" placeholder="' + sofkian.proyecto1 + '" value="' + sofkian.proyecto1 + '">' +
                  '</div>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Porcentaje proyecto 1:</strong></label>' +
                  '<input type="textarea" class="form-control" id="proyecto1_porcentaje_Updt" aria-describedby="emailHelp" placeholder="' + sofkian.dedicacionProyecto1 + '" value="' + sofkian.dedicacionProyecto1 + '">' +
                  '</div>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Proyecto 1:</strong></label>' +
                  '<input type="textarea" class="form-control" id="proyecto2_Updt" aria-describedby="emailHelp" placeholder="' + sofkian.proyecto2 + '" value="' + sofkian.proyecto2 + '">' +
                  '</div>' +
                  '<a href="#" class="btn btn-primary" id="actualizarSofkian">Actualizar</a>' +
                  '</div>';
      }


      incluirHtmlParaAgregar() {
            document.getElementById('sofkianDiv').innerHTML = this.formAgregarSofkian();
      }

      formAgregarSofkian() {
            return '<div  class="card col-md-3 mr-5 mb-3" style="width: 18rem; padding: 0.2%; margin: 2%">' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Nombre:</strong></label>' +
                  '<input type="email" class="form-control" id="nombre_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">' +
                  '</div>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Cedula:</strong></label>' +
                  '<input type="email" class="form-control" id="id_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">' +
                  '</div>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Caracteristicas:</strong></label>' +
                  '<input type="textarea" class="form-control" id="characteristics_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">' +
                  '</div>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Experiencia en sofka:</strong></label>' +
                  '<input type="textarea" class="form-control" id="sofkaExperience_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">' +
                  '</div>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Experiencia pre-sofka:</strong></label>' +
                  '<input type="textarea" class="form-control" id="beforeSofkaExperienced_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">' +
                  '</div>' +
                  '<br>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Tecnologias manejadas:</strong></label>' +
                  '<input type="textarea" class="form-control" id="tecnologias_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">' +
                  '</div>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Proyecto 1:</strong></label>' +
                  '<input type="textarea" class="form-control" id="proyecto1_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">' +
                  '</div>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Porcentaje proyecto 1:</strong></label>' +
                  '<input type="textarea" class="form-control" id="proyecto1_porcentaje_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">' +
                  '</div>' +
                  '<div class="form-group">' +
                  '<label for="exampleInputEmail1"><strong>Proyecto 2:</strong></label>' +
                  '<input type="textarea" class="form-control" id="proyecto2_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">' +
                  '</div>' +
                  '<a href="#" class="btn btn-primary" id="agregarSofkian">Agregar</a>' +
                  '</div>';
      }
      agregarSokfiano() {
            alert(JSON_SOFKIANS);
            var sofkianoToCreate = new Sofkiano(
                  document.getElementById('nombre_Updt').value,
                  document.getElementById('id_Updt').value,
                  document.getElementById('characteristics_Updt').value,
                  document.getElementById('sofkaExperience_Updt').value,
                  document.getElementById('beforeSofkaExperienced_Updt').value,
                  document.getElementById('proyecto1_Updt').value,
                  document.getElementById('proyecto1_porcentaje_Updt').value,
                  document.getElementById('proyecto2_Updt').value,
                  "no_avatar",
                  document.getElementById('tecnologias_Updt').value);
                  console.log(JSON_SOFKIANS);
            JSON.stringify(JSON_SOFKIANS.push(sofkianoToCreate));
      }


}

module.exports = SofkianFunctions;