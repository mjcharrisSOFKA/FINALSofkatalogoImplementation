var {
      Sofkiano
} = require('./sofkianClases.js');

const JSON_SOFKIANS = require('./../data/SofkianData.json').sofkians;
let div = document.getElementById('cards-content');


class SofkianFunctions {

      constructor() {
            this.sofkianCards = document.getElementById('cards-content');
      }

      showAllSofkians(jsonArray) {
            let stringHtmlCardConcatenado = '';
            for (let index = 0; index < jsonArray.length; index++) {
                  stringHtmlCardConcatenado += this.cardSofkian(jsonArray[index]);
            }
            this.printCardHtml(stringHtmlCardConcatenado)
      };

      printCardHtml(StringHtmlCard) {

            div.innerHTML = StringHtmlCard;
      };

      cardSofkian(sofkian) {
            return `<div   class="card col-md-3 mr-5 mb-3" style="width: 18rem; padding: 0.2%; margin: 2%">
                  <img src="${sofkian.img}" class="card-img-top" alt="...">
                  <div id="${sofkian.name}" class="card-body">
                  <h5 id="divConSofkianName" class="card-title" id="enterpriseName"> ${sofkian.name} </h5>
                  <p id="divConSofkianCedula" class="card-text">cedula: ${sofkian.id} </p>
                  <p id="divConSofkianCaracteristicas" class="card-text">caracteristicas: ${sofkian.characteristics} </p>
                  <p id="divConSofkianExperiencia" class="card-text">Experiencia en Sofka:  ${sofkian.sofkaExperience} </p>
                  <p id="divConBeforeSofkianExperiencia" class="card-text">Experiencia pre-Sofka: ${sofkian.beforeSofkaExperience} </p>
                  <p id="divConTecnologia1" class="card-text">tecnologias manejadas:  ${sofkian.tecnologiasManejadas} </p>
                  <p id="divConTecnologia1" class="card-text">proyecto 1:  ${sofkian.proyecto1 }</p>
                  <p id="divConTecnologia1" class="card-text">dedicacion:  ${sofkian.dedicacionProyecto1 }%</p>
                  <p id="divConTecnologia1" class="card-text">proyecto 2:  ${sofkian.proyecto2 }</p>
                  <button id="abrir_form_editar_sofkiano" style="height: 40px" class="btn btn-primary mb-3">Editar</button>
                  <button id="borrar_sofkiano" style="height: 40px"  class="btn btn-danger mb-3"  >Borrar</button>
                  </div>
                  </div>`;
      }

      eliminar_sofkiano(nombre_sofkiano){
            alert("funcina la funcion onclick")
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

      eliminarSofkianoPorNombre(jsonArray,nombreDelEliminado) {
            for (var index = 0; index < jsonArray.length; index++) {
                  if (jsonArray[index].name === nombreDelEliminado) {
                        jsonArray.splice(index, 1);
                  }
            }
            this.showAllSofkians(jsonArray)
      }
      incluirHtmlParaEditar(jsonArray,nombreSofkiano) {
            document.getElementById('cards-content').innerHTML = this.formEdicionSofkian(this.devolverSofkiano(jsonArray,nombreSofkiano));
      }
      devolverSofkiano(jsonArray,nombreSofkiano) {
            var sofkiano;
            for (var index = 0; index < jsonArray.length; index++) {
                  if (jsonArray[index].name === nombreSofkiano) {
                        sofkiano = jsonArray[index];
                  }
            }
            return sofkiano;
      }

      editarSokfiano(jsonArray,valoresPostEdicion) {

            var pocision = this.devolverPocisionEnSofkiano(jsonArray,valoresPostEdicion);
            jsonArray[pocision].name = valoresPostEdicion[0].value;
            jsonArray[pocision].id = valoresPostEdicion[1].value;
            jsonArray[pocision].characteristics = valoresPostEdicion[2].value;
            jsonArray[pocision].sofkaExperience = valoresPostEdicion[3].value;
            jsonArray[pocision].beforeSofkaExperience = valoresPostEdicion[4].value;
            jsonArray[pocision].tecnologiasManejadas = valoresPostEdicion[5].value;
            jsonArray[pocision].proyecto1 = valoresPostEdicion[6].value;
            jsonArray[pocision].proyecto2 = valoresPostEdicion[8].value;
            jsonArray[pocision].dedicacionProyecto1 = valoresPostEdicion[7].value;

      }

      devolverPocisionEnSofkiano(jsonArray,valoresPostEdicion) {
            var PocisionDelsofkianoEnArray;
            var nombreParaEditar = valoresPostEdicion[0].value;
            for (var index = 0; index < jsonArray.length; index++) {
                  if (jsonArray[index].name === nombreParaEditar) {
                        var PocisionDelsofkianoEnArray = index;
                  }
            }
            return PocisionDelsofkianoEnArray;
      }

      formEdicionSofkian(sofkian) {
            return '<div  class="card col-md-3 mr-5 mb-3" style="width: 18rem; padding: 0.2%; margin: 2%">' +
                  '<img src="' + sofkian.img + '" class="card-img-top" alt="...">' +
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
                  '<a href="#" class="btn btn-primary" id="editar_sofkiano">Actualizar</a>' +
                  '</div>';
      }


      incluirHtmlParaAgregar() {
            document.getElementById('cards-content').innerHTML = this.formAgregarSofkian();
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
                  '<a href="#" class="btn btn-primary" id="agregar_sofkiano">Agregar</a>' +
                  '</div>';
      }
      agregarSokfiano(jsonArray,valoresDelAgregado) {
            var sofkianoToCreate = new Sofkiano(
                  valoresDelAgregado[0].value,
                  valoresDelAgregado[1].value,
                  valoresDelAgregado[2].value,
                  valoresDelAgregado[3].value,
                  valoresDelAgregado[4].value,
                  valoresDelAgregado[6].value,
                  valoresDelAgregado[7].value,
                  valoresDelAgregado[8].value,
                  "no_avatar.jpeg",
                  valoresDelAgregado[5].value);
            JSON.stringify(jsonArray.push(sofkianoToCreate));
      }

      createDivOptionsSofkian() {
            let divOptionsClient = document.getElementById('options');
            try {


                  let divOptions = document.createElement('div');
                  divOptions.className = "col-md-6";
                  divOptions.style = "width:400px";
                  divOptions.innerHTML = `
                  <button id="abrir_form_abrir_sofkiano" style="height: 40px"  class="btn btn-success mb-3"  >Crear Sofkiano</button>`;

                  divOptionsClient.appendChild(divOptions);

            } catch (error) {
                  console.log(error);

            }
      }


}

module.exports = SofkianFunctions;