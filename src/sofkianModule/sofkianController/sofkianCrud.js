var {Sofkiano} = require('./sofkianClases.js');
var {Tecnologias} = require('./sofkianClases.js');
var tecnologia1 = new Tecnologias("5","Angular")
var tecnologia2 = new Tecnologias("1","C#")
var tecnologia3 = new Tecnologias("1.5","xamarin")
var sofkiano1 = new Sofkiano('Leyner','1',  'sociable, proactivo, servicial', '0','1.5')
var sofkiano2 = new Sofkiano('Alex','2',  'lider, sociable, leal', '0','3')
var sofkiano3 = new Sofkiano('Quinto','3',  'proactivo,  cumplido', '0','6')
sofkiano1.tecnologias = new Array(tecnologia1, tecnologia2);
sofkiano2.tecnologias = new Array(tecnologia2, tecnologia3);
sofkiano3.tecnologias = new Array(tecnologia1, tecnologia3);
var sofkianosArray = [sofkiano1,sofkiano2,sofkiano3];


(Sofkiano.prototype.tryCatch_getEspecificSokfian = () => {
      try {
            getEspecificSokfian();
      } catch (error) {
            console.log("Ha ocurrido un error: " + error);
      }
  })();

function getEspecificSokfian(){
      document.getElementById("sofkianoEspecificoBoton").addEventListener('click', () => {
            if (indicarSiExisteElSofkiano()){
                  buscarSofkianoSofkianoPorNombre()
            }
            else{
                  alert("no existe el sofkiano buscado")
            }
      })
}

function indicarSiExisteElSofkiano(){
      sofkianoFueEncontrado = false;
      nombreDeSofianoBuscado = document.getElementById('nombreSofkianoBuscado').value;
      for (var i = 0; i < sofkianosArray.length; i++) { 
            if (sofkianosArray[i].name === nombreDeSofianoBuscado){
                  sofkianoFueEncontrado = true
            }
      }
      return sofkianoFueEncontrado
}

function buscarSofkianoSofkianoPorNombre(){
      nombreDeSofianoBuscado = document.getElementById('nombreSofkianoBuscado').value;
      for (var i = 0; i < sofkianosArray.length; i++) { 
            if (sofkianosArray[i].name === nombreDeSofianoBuscado){
                  document.getElementById('sofkianoEspecificoDiv').innerHTMLL = cardSofkian(sofkianosArray[i]);
                  pasarSofkianoAlHtml(cardSofkian(sofkianosArray[i]))
            }
      }  
}
function pasarSofkianoAlHtml(StringDelHtml){
let div = document.getElementById('sofkianoEspecificoDiv');
      div.className = "class";
      div.innerHTML = StringDelHtml;
}

  function cardSofkian(sofkian) {
        return '<div  class="card col-md-3 mr-5 mb-3" style="width: 18rem; padding: 0.2%; margin: 2%">' +
        '<img src="imgs/' + sofkian.name + '.jpeg" class="card-img-top" alt="...">' +
        '<div class="card-body">' +
        '<h5 id="divConSofkianName" class="card-title" id="enterpriseName">' + sofkian.name + '</h5>' +
        '<p id="divConSofkianCedula" class="card-text">' + sofkian.id + '</p>' +
        '<p id="divConSofkianCaracteristicas" class="card-text">' + sofkian.characteristics + '</p>' +
        '<p id="divConSofkianExperiencia" class="card-text">Experiencia en Sofka: ' + sofkian.sofkaExperience + '</p>' +
        '<p id="divConBeforeSofkianExperiencia" class="card-text">Experiencia en Sofka:' + sofkian.beforeSofkaExperienced + '</p>' +
        '<p id="divConTecnologia1" class="card-text">Experiencia en pre-Sofka: ' + sofkian.tecnologias[0].name + '</p>' +
        '<p id="divConTecnologia1" class="card-text">' + sofkian.tecnologias[1].name + '</p>' +
        '</div>' +
        '</div>';
  }

(Sofkiano.prototype.tryCatch_eliminarSokfianos = () => {
      try {
            eliminarSokfianos();
      } catch (error) {
            console.log("Ha ocurrido un error: " + error);
      }
})();

function eliminarSokfianos(){
      document.getElementById("eliminarSofkianBoton").addEventListener('click', () => {
            if(hayUnSofkianoAEliminar()){
                   eliminarSofkianoPorNombre()
                   console.log(sofkianosArray)
                   document.getElementById('sofkianoEspecificoDiv').innerHTML = " ";
            }
            else{
                  alert("no hay un sofkiano especificado para eliminar")
            }
       })
}

function eliminarSofkianoPorNombre(){
      nombreDelEliminado = document.getElementById('divConSofkianName').innerHTML;
      for( var i = 0; i <  sofkianosArray.length; i++){ 
            if (sofkianosArray[i].name === nombreDelEliminado) {
                  sofkianosArray.splice(i, 1); 
            }
         }
}

function hayUnSofkianoAEliminar(){
      var sofkianoEncontrado = false;
      if(document.getElementById('sofkianoEspecificoDiv').innerHTML !== "NaN"){
            sofkianoEncontrado = true;
      }
      return sofkianoEncontrado;
}




// (Sofkiano.prototype.getAllSokfianosAlCargarTryCatch = () => {
//       try {
//             getAllSokfianosAlCargar(sofkianosArray);
//       } catch (error) {
//             console.log("Ha ocurrido un error: " + error);
//       }
//   })();

//   function getAllSokfianosAlCargar(sofkianosArray){
//       document.addEventListener("DOMContentLoaded", () => {
//             let div = document.getElementById('sofkianoEspecificoDiv');
//             for (var i = 0; i < sofkianosArray.length; i++) {
//                   StringDelHtmlConcatenado =+ cardSofkian(sofkianosArray[i]);    
//             }
//             div.innerHTML = StringDelHtmlConcatenado;
//       })
//   }

//   (Sofkiano.prototype.getAllSokfianosAlClickear = () => {
//       try {
//             document.getElementById("todosLosSofkianosDiv").addEventListener('click', () => {
//                   var divParaMostrar = document.getElementById("todosLosSofkianosDiv");
//                   divParaMostrar.style.display = "block";
//                   var divParaOcultar = document.getElementById("sofkianoEspecificoDiv");
//                   divParaOcultar.style.display = "none";
//       })
//       } catch (error) {
//             console.log("Ha ocurrido un error: " + error);
//             }
//   })();
//   (Sofkiano.prototype.verUltimoSokfianosArray = () => {
//       document.getElementById("verUltimoSokfianosArraynBoton").addEventListener('click', () => {
//             alert(sofkianosArray[sofkianosArray.length - 1].name)
//       })
//   })();

//   (Sofkiano.prototype.agregarSokfianos = () => {
//       document.getElementById("agregarSofkianBoton").addEventListener('click', () => {
//             try {
//                   sofkianosArray.push(devolverSofkianoCreadoConDataDeTexbox()) 
//             } catch (error) {
//                  alert("hemos tenido una falla") 
//             }

//       })
// })();








// function devolverSofkianoCreadoConDataDeTexbox(){
//       var sofkiano = new Sofkiano(
//       document.getElementById('nombreSofkiano').value,
//       document.getElementById('idSofkiano').value,  
//       document.getElementById('caracteristicasSofkiano').value,
//       document.getElementById('beforeSofkaExperienceSofkiano').value,
//       document.getElementById('beforeSofkaExperienceSofkiano').value)
//       var tecnologia1 = new Tecnologias("5","Angular")
//       var tecnologia2 = new Tecnologias("1","C#")
//       sofkiano.tecnologias = new Array(tecnologia1, tecnologia2);
//       return sofkiano
// }



//   function cardSofkian(sofkian) {
//         return '<div  class="card col-md-3 mr-5 mb-3" style="width:400px">' +
//         '<img src="' + sofkian.name + '.jpeg" alt="Card image" style="width:100%">' +
//         '<div id="Operaciones_en_sofkiano" class="card-body">' +
//         '<h4 id="divConSofkianName" class="card-title" id="enterpriseName">' + sofkian.name + '</h4>' +
//         '<p id="divConSofkianCedula" class="card-text">' + sofkian.id + '</p>' +
//         '<p id="divConSofkianCaracteristicas" class="card-text">' + sofkian.characteristics + '</p>' +
//         '<p id="divConSofkianExperiencia" class="card-text">' + sofkian.sofkaExperience + '</p>' +
//         '<p id="divConBeforeSofkianExperiencia" class="card-text">' + sofkian.beforeSofkaExperienced + '</p>' +
//         '<p id="divConTecnologia1" class="card-text">' + sofkian.tecnologias[0].name + '</p>' +
//         '<p id="divConTecnologia1" class="card-text">' + sofkian.tecnologias[1].name + '</p>' +
//         '</div>' +
//         '</div>';
//   }



// (Sofkiano.prototype.getEspecificSokfian = () => {
//       try {
//             document.getElementById("sofkianoEspecificoBoton").addEventListener('click', () => {
//                   var nombreDigitado = document.getElementById('nombreDigitado').value;
//                   if (indicarSiExisteElSofkiano(nombreDigitado)){
//                         for (var i = 0; i < sofkianosArray.length; i++) { 
//                               if (sofkianosArray[i].name === nombreDigitado){
//                                     document.getElementById('sofkianoEspecificoDiv').innerHTMLL = cardSofkian(sofkianosArray[i]);
//                                     specificSofkian(cardSofkian(sofkianosArray[i]))
//                               }
//                         }      
//                   }
//                   else{
//                         alert("no existe el sofkiano buscado")
//                   }
//             })
//       } catch (error) {
//             console.log("Ha ocurrido un error: " + error);
//       }
//       var divParaMostrar = document.getElementById("sofkianoEspecificoDiv");
//       divParaMostrar.style.display = "block";
//       var divParaOcultar = document.getElementById("todosLosSofkianosDiv");
//       divParaOcultar.style.display = "none";
//   })();


//   function specificSofkian(StringDelHtml){
//       let div = document.getElementById('sofkianoEspecificoDiv');
//             div.className = "class";
//             div.innerHTML = StringDelHtml;
//     }

//     function mostrarTodosLosSofkians(StringDelHtml,div){
//             StringDelHtmlConcatenado
//             div.insertAdjacentHTML('beforeend',StringDelHtml) 
//     }

//     (Sofkiano.prototype.getAllSokfianosAlClickear = () => {
//       try {
//             document.getElementById("todosLosSofkianosDiv").addEventListener('click', () => {
//                   var divParaMostrar = document.getElementById("todosLosSofkianosDiv");
//                   divParaMostrar.style.display = "block";
//                   var divParaOcultar = document.getElementById("sofkianoEspecificoDiv");
//                   divParaOcultar.style.display = "none";
//       })
//       } catch (error) {
//             console.log("Ha ocurrido un error: " + error);
//             }
//   })();

    


 














