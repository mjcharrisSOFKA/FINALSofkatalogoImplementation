'use strict';

class ProjectFunctions {

  constructor() {
    this.projectCards = document.getElementById('cards-content');
  }

  findValueByAnyAttributeInArray(value, attribute, projects) {
    try {

      let results = [];
      Object.keys(projects).map(key => {
        if (projects[key][attribute] === value) {
          results.push(projects[key]);
        }
      });
      return results;

    } catch (error) {
      console.log("Error: " + error);
    }
  };

  showAllProjects(jsonArray) {
    for (let index = 0; index < jsonArray.length; index++) {
      this.printCardHtml(jsonArray[index].img,
        jsonArray[index].name,
        jsonArray[index].description);
    }
  };

  printSearchResults(resultsArray) {
    for (let i = 0; i < resultsArray.length; i++) {
      printCardHtml(resultsArray[i].img, resultsArray[i].name, resultsArray[i].description);
    }
  };

  getCheckedRadioButton(radioButtons) {
    for (let index = 0; index < radioButtons.length; index++) {
      if (radioButtons[index].checked) {
        return radioButtons[index].value;
      }
    }
  };

  printCardHtml(image, title, description) {

    let cardToPrint = document.getElementById('cards-content');

    let div = document.createElement('div');

    div.className = 'card';
    div.id = 'card'
    div.style = 'padding: 1%; margin: 2%; width: 20rem';
    div.innerHTML = 
    "<img src=" + image + " class='card-img-top' style = 'height: 20rem; width: 18rem' >"
    + ""
    + "<div class='card-body'  id='card-body' >"
    + "<h5 class='card-title'> " + title + " </h5> "
    + "<p class='card-text'> " + description + " </p>"
    + "<button class='btn btn-warning' id='edit'>Editar</button>"
    + "<button class='btn btn-danger' id='delete' style='float:right'>Borrar</button>";

    cardToPrint.appendChild(div);
  };

  addOptionsToSelectFromJson(select, jsonArray) {
    for (let index = 0; index < jsonArray.length; index++) {
      let option = document.createElement('option');
      option.id = 'project-client';
      option.innerText = jsonArray[index].name;
      select.insertAdjacentElement("beforeend", option);
    }
  };

  addInputsToDivFromJsonWithName(div, jsonArray, name) {
    for (let index = 0; index < jsonArray.length; index++) {
      let label = document.createElement('label');
      label.innerText = jsonArray[index].name;
      let input = document.createElement('input');
      input.type = 'checkbox';
      input.name = name;
      input.id = jsonArray[index].name;
      label.appendChild(input);
      div.appendChild(label);
    }
  };

  getCheckedBoxes(checkboxArray) {
    let checkedBoxes = [];
    for (let index = 0; index < checkboxArray.length; index++) {
      if (checkboxArray[index].checked) {
        checkedBoxes.push(checkboxArray[index].id);
      }
    }
    return checkedBoxes;
  };
}

module.exports = ProjectFunctions;