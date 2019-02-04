class HomeView {

    showHome() {



        let homeDiv = document.getElementById('cards-content');
        let button = document.getElementById('search-box');
        button.style = "display: none";

        let divImg = document.createElement('div');
        let divTextContent = document.createElement('div');
        let textToDiv = document.createElement('h2');
        let textToDiv2 = document.createElement('h4');
        let img = document.createElement('img');

        this.controllerName = document.getElementById('controllerName');

        homeDiv.className = 'row ';
        homeDiv.style = "margin: 2%,";

        textToDiv.innerText = "Bienvenido";
        textToDiv2.innerText = "Este es nuestro gestor de proyectos";
        divTextContent.style = "padding-left: 10%";

        controllerName.innerText = 'Sofkatalogos';
        
        img.style = "padding-left: 15%";
        img.src = 'https://i.pinimg.com/originals/16/70/f1/1670f148e271094f7804af31b70697c0.png';
        
        
        divTextContent.appendChild(textToDiv);
        divTextContent.appendChild(textToDiv2);
        divImg.appendChild(img);

        homeDiv.appendChild(divImg);
        homeDiv.appendChild(divTextContent);
        
    }

}

module.exports = HomeView;