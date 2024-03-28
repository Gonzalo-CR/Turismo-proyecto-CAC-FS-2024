// Código para mostrar/ocultar el menú desplegable
document.getElementById('btn-Lang').addEventListener('click', function(event) {
    event.preventDefault();
    var menu = document.querySelector('.dropdown-menu');
    if (menu.style.display !== "block") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

// Código para cambiar el idioma mostrado
var dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    var selectedLanguage = event.target.innerText;
    document.querySelector('.idioma-text').innerText = selectedLanguage;

    // Cierra el menú después de seleccionar un idioma
    document.querySelector('.dropdown-menu').style.display = "none";
  });
});

// Código para ocultar el menú desplegable cuando se desplaza la página
window.addEventListener('scroll', function() {
    var menu = document.querySelector('.dropdown-menu');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
});
