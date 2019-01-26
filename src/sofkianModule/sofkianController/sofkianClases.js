
class Sofkiano {
    constructor(name,id,characteristics,sofkaExperience,beforeSofkaExperience) {
        this.name = name;
        this.id = id;
        this.characteristics = characteristics;
        this.sofkaExperience = sofkaExperience;
        this.beforeSofkaExperience = beforeSofkaExperience;
        this.dedicacion = [0,0];
        this.porcentajeEnProyecto1 = 0;
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

