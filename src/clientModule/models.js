"use strict";

class Project {
    constructor(name, status, description, startDate, endDate) {
        this.name = name;
        this.status = status;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class Client {
    constructor(name, type,img) {
        this.name = name;
        this.type = type;
        this.img = img;
    }
};

class Enterprise extends Client {
    constructor (name, nit, size, sector, img, web){
        super (name, "Empresa", img)
        this.nit = nit;
        this.size = size;
        this.sector = sector;
        this.web = web;
       
    }
};

class Person extends Client {
    constructor(name, cedula, img) {
        super(name, "Persona", img)
        this.cedula = cedula;
    }
};

class Sofkiano {
    constructor(name, id, characteristics, sofkaExperience, beforeSofkaExperience) {
        this.name = name;
        this.id = id;
        this.characteristics = characteristics;
        this.sofkaExperience = sofkaExperience;
        this.beforeSofkaExperience = beforeSofkaExperience;
    }
}

class Technology {
    constructor(name) {
        this.name = name;
    }
}

module.exports = {Client, Person, Enterprise};