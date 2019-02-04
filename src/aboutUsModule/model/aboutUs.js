
`use strict`;

let JSON_MEMBERS = require("./../data/programmersData.json").teamMembers;

class AboutUs {

  constructor(cardsContent) {
    this.showAllMembers(cardsContent);
  }

  showAllMembers(cardsContent) {
    try {
      cardsContent.innerHTML = "";
      for (let index = 0; index < JSON_MEMBERS.length; index++) {
        this.showMembers(cardsContent, JSON_MEMBERS[index]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  showMembers(cardsContent, member) {
    try {
      let divCard = document.createElement('div');

      divCard.className = `card col-md-2 ml-2 mr-5 mb-5`;
      divCard.style = `width:400px`;
      divCard.innerHTML = `
      <div class='card-body'>
      <h4 class='card-title'>${member.name} </h4>
      <h6 class="card-subtitle mb-2 text-muted">${member.rol}</h6>
      <p class='card-text'> Redes Sociales: </p>
      <a href="${member.social[0].fb}"><i class="fa fa-facebook-official fa-2x" style="color:black; padding: .5rem" aria-hidden="true"></i></a>
      <a href="${member.social[0].instagram}"><i class="fa fa-instagram fa-2x" style="color:black; padding: .5rem" aria-hidden="true"></i></a>
      <a href="${member.social[0].linkedIn}"><i class="fa fa-linkedin-square fa-2x" style="color:black; padding: .5rem" aria-hidden="true"></i></a>
      `;
      
      let img = document.createElement('img');
      img.style = `float: right;
      position: absolute;
      left: 160px;
      bottom: 130px;
      width: 80px;
      background-color: #fff;
      border-radius: 50%;`;

      img.src = member.img;
      img.className = `fa fa-terminal img-cricle`;
      img.innerText = `This is the IMG`;

      divCard.insertAdjacentElement(`beforeend`, img);
      cardsContent.appendChild(divCard);
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = AboutUs;

