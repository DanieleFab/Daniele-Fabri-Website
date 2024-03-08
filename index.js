// gestione scroll skills-bar

document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.skill-per');
  
    function checkIfInView() {
      elements.forEach(function(element) {
        var windowHeight = window.innerHeight;
        var bounding = element.getBoundingClientRect();
        var top = bounding.top;
        if (top < windowHeight) {
          element.classList.add('active')
        } else {
            element.classList.remove('active')
        }
      });
    }
  
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);
  });

 
// Gestione hamburger menu

  var menuIcon = document.getElementById('menu-icon');

  // Seleziona la navbar
  var navbar = document.querySelector('.navbar');
  
  // Aggiungi un evento di click all'icona del menu
  menuIcon.addEventListener('click', function() {
      // Verifica se la navbar è già visualizzata
      var isActive = navbar.classList.contains('active-menu');
      
      // Se la navbar è già attiva, nascondila, altrimenti mostrala
      if (isActive) {
          navbar.classList.remove('active-menu');
      } else {
          navbar.classList.add('active-menu');
      }
  });

  var navbarLinks = document.querySelectorAll('.navbar a');

// Aggiungi un gestore di eventi a ciascun link
navbarLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Rimuovi la classe "active" dalla navbar
        navbar.classList.remove('active-menu');
    });
});