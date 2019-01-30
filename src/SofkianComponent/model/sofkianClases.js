class Sofkiano {
    constructor(name, id, characteristics, sofkaExperience, beforeSofkaExperience, proyecto1, dedicacion1, proyecto2, img, tecnologiasManejadas) {
        this.name = name;
        this.id = id;
        this.characteristics = characteristics;
        this.sofkaExperience = sofkaExperience;
        this.beforeSofkaExperience = beforeSofkaExperience;
        this.proyecto1 = proyecto1
        this.dedicacion1 = dedicacion1;
        this.proyecto2 = proyecto2
        this.img = img
        this.tecnologiasManejadas = tecnologiasManejadas;
    }
}

class Tecnologias {
    constructor(version, name) {
        this.version = version;
        this.name = name;
    }
}

module.exports = {
    Sofkiano,
    Tecnologias
};