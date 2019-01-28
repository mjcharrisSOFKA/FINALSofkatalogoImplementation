var {Sofkiano} = require('./sofkianClases.js');
var {Tecnologias} = require('./sofkianClases.js');
var tecnologia1 = new Tecnologias("5","Angular")
var tecnologia2 = new Tecnologias("1","C#")
var tecnologia3 = new Tecnologias("1.5","xamarin")
var sofkiano1 = new Sofkiano('Leyner','1', 'Leyner', 'sociable, proactivo, servicial', '0','1.5','hibot','skynet','10')
var sofkiano2 = new Sofkiano('Alex','2','Alex',  'lider, sociable, leal', '0','3','wpp 2.0','ps5','55')
var sofkiano3 = new Sofkiano('Quinto','3', 'Quinto', 'proactivo,  cumplido', '0','6','cortana jr','alexa sr','45')
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



(Sofkiano.prototype.tryCatch_eliminarSokfianos = () => {
      try {
            eliminarSokfianos();
      } catch (error) {
            console.log("Ha ocurrido un error: " + error);
      }
})();

function eliminarSokfianos(){
      document.getElementById("eliminarSofkianBoton").addEventListener('click', () => {
            if(hayUnSofkianoBuscado()){
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

function hayUnSofkianoBuscado(){
      var sofkianoEncontrado = false;
      if(document.getElementById('sofkianoEspecificoDiv').innerHTML !== "NaN"){
            sofkianoEncontrado = true;
      }
      return sofkianoEncontrado;
}

(Sofkiano.prototype.tryCatch_PonerFormParaEditarSokfianos = () => {
      try {
            incluirHtmlParaEditar();
      } catch (error) {
            console.log("Ha ocurrido un error: " + error);
      }
})();

function incluirHtmlParaEditar(){
      document.getElementById("editarSofkianBoton").addEventListener('click', () => {
            document.getElementById('sofkianoEspecificoDiv').innerHTML =  formEdicionSofkian(devolverSofkiano());
      })
}

function devolverSofkiano(){
      var sofkiano;
      nombreDelEliminado = document.getElementById('divConSofkianName').innerHTML;
      for( var i = 0; i <  sofkianosArray.length; i++){ 
            if (sofkianosArray[i].name === nombreDelEliminado) {
                  sofkiano = sofkianosArray[i];
            }
      }
      return sofkiano;
}


document.addEventListener('click',function(e){
      if(e.target && e.target.id === "actualizarSofkian"){
            try{
                  alert("entrrrrrrrrr")
                  editarSokfiano();
            }catch(error){
                  console.log("Ha ocurrido un error: " + error);
            }
      }
})



function editarSokfiano(){     
            if(hayUnSofkianoBuscado()){
                  alert("Paso por aqui")
                  var pocision = devolverPocisionEnSofkiano();
                  sofkianosArray[pocision].name = document.getElementById('nombre_Updt').value;
                  sofkianosArray[pocision].id = document.getElementById('id_Updt').value;
                  sofkianosArray[pocision].characteristics = document.getElementById('characteristics_Updt').value;
                  sofkianosArray[pocision].sofkaExperience = document.getElementById('sofkaExperience_Updt').value;
                  sofkianosArray[pocision].beforeSofkaExperience = document.getElementById('beforeSofkaExperienced_Updt').value;
                  sofkianosArray[pocision].tecnologias[0] = document.getElementById('tecnologias_Updt').value;
                  sofkianosArray[pocision].dedicacion[0] = document.getElementById('proyecto1_Updt').value;
                  sofkianosArray[pocision].dedicacion[1] = document.getElementById('proyecto2_Updt').value;
                  sofkianosArray[pocision].tecnologias[0] = document.getElementById('proyecto1_porcentaje_Updt_Updt').value;
                  pasarSofkianoAlHtml(cardSofkian(sofkianosArray[pocision]))
            }
            else{
                  alert("no hay un sofkiano especificado para editar")
            }
}

function devolverPocisionEnSofkiano(){
      var PocisionDelsofkianoEnArray;
      nombreDelEliminado = document.getElementById('divConSofkianName').innerHTML;
      for( var i = 0; i <  sofkianosArray.length; i++){ 
            if (sofkianosArray[i].name === nombreDelEliminado) {
                  PocisionDelsofkianoEnArray = i;
            }
      }
      return PocisionDelsofkianoEnArray;
}

(Sofkiano.prototype.tryCatch_PonerFormParaAgregarSokfianos = () => {
      try {
            incluirHtmlParaAgregar();
      } catch (error) {
            console.log("Ha ocurrido un error: " + error);
      }
})();

function incluirHtmlParaAgregar(){
      document.getElementById("agregarSofkianBoton").addEventListener('click', () => {
            document.getElementById('sofkianoEspecificoDiv').innerHTML =  formAgregarSofkian();
      })
}

document.addEventListener('click',function(e){
      if(e.target && e.target.id === "agregarSofkian"){
                  agregarSokfiano();
                  document.getElementById('sofkianoEspecificoDiv').innerHTML =  " ";
                  alert("se ha creado un nuevo sofkiano");
                  getAllSokfianosAlCargar()
      }
})

function agregarSokfiano(){
      var sofkiano = new Sofkiano( 
                  document.getElementById('nombre_Updt').value,
                  document.getElementById('id_Updt').value,
                  "no_avatar",
                  document.getElementById('characteristics_Updt').value,
                  document.getElementById('sofkaExperience_Updt').value,
                  document.getElementById('beforeSofkaExperienced_Updt').value,
                  document.getElementById('tecnologias_Updt').value,
                  document.getElementById('tecnologias_Updt').value,
                  document.getElementById('proyecto1_Updt').value,
                  document.getElementById('proyecto2_Updt').value)
      tecnologia = new Tecnologias("1.5","xamarin")
      sofkiano.tecnologias = new Array(tecnologia,tecnologia);
      sofkianosArray.push(sofkiano);
      console.log(sofkiano)
}

(Sofkiano.prototype.getAllSokfianosAlCargarTryCatch = () => {
      try {
            getAllSokfianosAlCargar();
      } catch (error) {
            console.log("Ha ocurrido un error: " + error);
      }
  })();

  function getAllSokfianosAlCargar(){
      document.addEventListener("DOMContentLoaded", () => {
            let div = document.getElementById('sofkianoEspecificoDiv');
            var StringDelHtmlConcatenado = '';
            for (var i = 0; i < sofkianosArray.length; i++) {
                  StringDelHtmlConcatenado += cardSofkian(sofkianosArray[i]);  
            }
            div.innerHTML = StringDelHtmlConcatenado;
      })
  }



  function cardSofkian(sofkian) {
      return '<div  class="card col-md-3 mr-5 mb-3" style="width: 18rem; padding: 0.2%; margin: 2%">' +
      '<img src="imgs/' + sofkian.foto + '.jpeg" class="card-img-top" alt="...">' +
      '<div class="card-body">' +
      '<h5 id="divConSofkianName" class="card-title" id="enterpriseName">' + sofkian.name + '</h5>' +
      '<p id="divConSofkianCedula" class="card-text">cedula: ' + sofkian.id + '</p>' +
      '<p id="divConSofkianCaracteristicas" class="card-text">caracteristicas: ' + sofkian.characteristics + '</p>' +
      '<p id="divConSofkianExperiencia" class="card-text">Experiencia en Sofka: ' + sofkian.sofkaExperience + '</p>' +
      '<p id="divConBeforeSofkianExperiencia" class="card-text">Experiencia pre-Sofka: ' + sofkian.beforeSofkaExperience + '</p>' +
      '<p id="divConTecnologia1" class="card-text">tecnologias manejadas: ' + sofkian.tecnologias[0].name + '</p>' +
      '<p id="divConTecnologia1" class="card-text">proyecto 1: ' + sofkian.dedicacion[0] + '</p>' +
      '<p id="divConTecnologia1" class="card-text">dedicacion: ' + sofkian.porcentajeEnProyecto1 + '%</p>' +
      '<p id="divConTecnologia1" class="card-text">proyecto 2: ' + sofkian.dedicacion[1] + '</p>' +
      '<p id="divConTecnologia1" class="card-text">proyecto 2: ' + sofkian.porcentajeEnProyecto2 + '%</p>' +
      '</div>' +
      '</div>';
}

function formEdicionSofkian(sofkian) {
    return '<div  class="card col-md-3 mr-5 mb-3" style="width: 18rem; padding: 0.2%; margin: 2%">' +
    '<img src="imgs/' + sofkian.foto + '.jpeg" class="card-img-top" alt="...">' +
    '<h5 id="divConSofkianName" class="card-title" id="enterpriseName">' + sofkian.name + '</h5>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Nombre:</strong></label>'+
    '<input type="email" class="form-control" id="nombre_Updt" aria-describedby="emailHelp" placeholder="'+sofkian.name+'" value="'+sofkian.name+'">'+
    '</div>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Cedula:</strong></label>'+
    '<input type="email" class="form-control" id="id_Updt" aria-describedby="emailHelp" placeholder="'+sofkian.id+'" value="'+sofkian.id+'">'+
    '</div>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Caracteristicas:</strong></label>'+
    '<input type="textarea" class="form-control" id="characteristics_Updt" aria-describedby="emailHelp" placeholder="'+sofkian.characteristics+'" value="'+sofkian.characteristics+'">'+
    '</div>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Experiencia en sofka:</strong></label>'+
    '<input type="textarea" class="form-control" id="sofkaExperience_Updt" aria-describedby="emailHelp" placeholder="'+sofkian.sofkaExperience+'" value="'+sofkian.sofkaExperience+'">'+
    '</div>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Experiencia pre-sofka:</strong></label>'+
    '<input type="textarea" class="form-control" id="beforeSofkaExperienced_Updt" aria-describedby="emailHelp" placeholder="'+sofkian.beforeSofkaExperience+'" value="'+sofkian.beforeSofkaExperience+'">'+
    '</div>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Tecnologias manejadas:</strong></label>'+
    '<input type="textarea" class="form-control" id="tecnologias_Updt" aria-describedby="emailHelp" placeholder="'+sofkian.tecnologias[0].name+'" value="'+sofkian.tecnologias[0].name+'">'+
    '</div>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Proyecto 1:</strong></label>'+
    '<input type="textarea" class="form-control" id="proyecto1_Updt" aria-describedby="emailHelp" placeholder="'+sofkian.dedicacion[0]+'" value="'+sofkian.dedicacion[0]+'">'+
    '</div>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Porcentaje proyecto 1:</strong></label>'+
    '<input type="textarea" class="form-control" id="proyecto1_porcentaje_Updt" aria-describedby="emailHelp" placeholder="'+sofkian.porcentajeEnProyecto1+'" value="'+sofkian.porcentajeEnProyecto1+'">'+
    '</div>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Proyecto 1:</strong></label>'+
    '<input type="textarea" class="form-control" id="proyecto2_Updt" aria-describedby="emailHelp" placeholder="'+sofkian.dedicacion[1]+'" value="'+sofkian.dedicacion[1]+'">'+
    '</div>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Porcentaje proyecto 1:</strong></label>'+
    '<input type="textarea" class="form-control" id="proyecto2_porcentaje_Updt" aria-describedby="emailHelp" placeholder="'+sofkian.porcentajeEnProyecto2+'" value="'+sofkian.porcentajeEnProyecto2+'">'+
    '</div>' +
    '<a href="#" class="btn btn-primary" id="actualizarSofkian">Actualizar</a>' +
    '</div>';
}

function formAgregarSofkian() {
    return '<div  class="card col-md-3 mr-5 mb-3" style="width: 18rem; padding: 0.2%; margin: 2%">' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Nombre:</strong></label>'+
    '<input type="email" class="form-control" id="nombre_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">'+
    '</div>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Cedula:</strong></label>'+
    '<input type="email" class="form-control" id="id_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">'+
    '</div>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Caracteristicas:</strong></label>'+
    '<input type="textarea" class="form-control" id="characteristics_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">'+
    '</div>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Experiencia en sofka:</strong></label>'+
    '<input type="textarea" class="form-control" id="sofkaExperience_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">'+
    '</div>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Experiencia pre-sofka:</strong></label>'+
    '<input type="textarea" class="form-control" id="beforeSofkaExperienced_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">'+
    '</div>' +
    '<br>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Tecnologias manejadas:</strong></label>'+
    '<input type="textarea" class="form-control" id="tecnologias_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">'+
    '</div>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Proyecto 1:</strong></label>'+
    '<input type="textarea" class="form-control" id="proyecto1_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">'+
    '</div>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Porcentaje proyecto 1:</strong></label>'+
    '<input type="textarea" class="form-control" id="proyecto1_porcentaje_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">'+
    '</div>' +
    '<div class="form-group">' +
    '<label for="exampleInputEmail1"><strong>Proyecto 2:</strong></label>'+
    '<input type="textarea" class="form-control" id="proyecto2_Updt" aria-describedby="emailHelp" placeholder=" " value=" ">'+
    '</div>' +
    '<a href="#" class="btn btn-primary" id="agregarSofkian">Agregar</a>' +
    '</div>';
}


 




