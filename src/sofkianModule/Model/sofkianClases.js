
class Sofkiano {
    constructor(name,id,foto,characteristics,sofkaExperience,beforeSofkaExperience,proyecto1,proyecto2,dedicacionProyecto1) {
        this.name = name;
        this.id = id;
        this.foto = foto;
        this.characteristics = characteristics;
        this.sofkaExperience = sofkaExperience;
        this.beforeSofkaExperience = beforeSofkaExperience;
        this.dedicacion = [proyecto1,proyecto2];
        this.porcentajeEnProyecto1 = parseInt(dedicacionProyecto1);
        this.porcentajeEnProyecto2 = 100 - parseInt(dedicacionProyecto1);
        this.tecnologias = Array();
      }
}

class Tecnologias {
    constructor(version,name) {
        this.version = version;
        this.name = name;
      }
}

module.exports = {Sofkiano, Tecnologias};

