
class Project {
  constructor(name, status, description, startDate, endDate, image, client, tech, sofkianos, id) {
    this.name = name;
    this.id = id;
    this.status = status;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.image = image;
    this.client = client;
    this.technologies = tech;
    this.sofkianos = sofkianos;
  }
};

module.exports = Project;