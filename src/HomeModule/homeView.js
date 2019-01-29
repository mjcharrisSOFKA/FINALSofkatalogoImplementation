class HomeView {

    showHome() {
        let homeDiv = document.getElementById('cards-content');
        let controllerName = document.getElementById('controllerName');
        controllerName.innerText = 'Sofkatalogos'
        homeDiv.innerHTML = '<img src="https://images.unsplash.com/photo-1534989713668-e6c993fd1554?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" >';
    }

}

module.exports = HomeView;