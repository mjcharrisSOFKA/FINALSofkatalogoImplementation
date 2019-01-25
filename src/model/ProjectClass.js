
class Project {
  constructor(name, status, description, startDate, endDate, image, client, tech, sofkianos) {
    this.name = name;
    this.status = status;
    this.startDate = startDate;
    this.endDate = endDate;
    this.image = image;
    this.client = client;
    this.technologies = tech;
    this.sofkianos = sofkianos;
  }
};

module.exports = Project;