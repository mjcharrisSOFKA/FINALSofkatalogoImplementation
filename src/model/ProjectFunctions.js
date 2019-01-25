
'use strict';

let projectCards = document.getElementById('projects')

function findValueByAnyAttributeInArray(value, attribute, projects) {
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

function showAllProjects(jsonArray) {
  projectCards.innerHTML = "";
  for (let index = 0; index < jsonArray.length; index++) {
    printCardHtml(jsonArray[index].img,
      jsonArray[index].name,
      jsonArray[index].description);
  }
};

function printSearchResults(resultsArray) {
  for (let i = 0; i < resultsArray.length; i++) {
    printCardHtml(resultsArray[i].img, resultsArray[i].name, resultsArray[i].description);
  }
};

function getCheckedRadioButton(radioButtons) {
  for (let index = 0; index < radioButtons.length; index++) {
    if (radioButtons[index].checked) {
      return radioButtons[index].value;
    }
  }
};

function printCardHtml(image, title, description) {
  let div = document.createElement('div');

  div.className = 'card';
  div.style = 'width: 18rem; float: left';
  div.innerHTML = "<img src=" + image + " class='card-img-top'>"
    + "<div class='card-body'>"
    + "<h5 class='card-title'> " + title + " </h5> "
    + "<p class='card-text'> " + description + " </p>";

  projectCards.appendChild(div);
};

function addOptionsToSelectFromJson(select, jsonArray) {
  for (let index = 0; index < jsonArray.length; index++) {
    let option = document.createElement('option');
    option.id = 'project-client';
    option.innerText = jsonArray[index].name;
    select.insertAdjacentElement("beforeend", option);
  }
};

function addInputsToDivFromJsonWithName(div, jsonArray, name) {
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

function getCheckedBoxes(checkboxArray) {
  let checkedBoxes = [];
  for (let index = 0; index < checkboxArray.length; index++) {
    if (checkboxArray[index].checked) {
      let checkBoxId = checkboxArray[index].id.toString();
      checkedBoxes.push(checkBoxId);
    }
  }
  console.log(checkedBoxes);
  return checkedBoxes;
};

module.exports = {
  findValueByAnyAttributeInArray, showAllProjects,
  printSearchResults, getCheckedRadioButton,
  addOptionsToSelectFromJson, addInputsToDivFromJsonWithName,
  getCheckedBoxes
};
