// Funktion som lägger till en klicklyssnare på ett element
function addClickListener(element, callback) {

  if (element) {
    // Lyssna på klick och kör callback-funktionen
    element.onclick = function(event) {
      event.preventDefault(); 
      callback(event); 
    };
  }
}

// Funktion som växlar synlighet på menyn
function toggleMenu() {
  const menu = document.querySelector('.menu');
  if (menu) {
    menu.classList.toggle('active'); // Lägg till eller ta bort 'active'-klassen
  }
}

// Hämta hamburgarikonen från DOM
const hamburgerIcon = document.querySelector('.hamburger');

// Lägg till vår egen klicklyssnare på hamburgarikonen
addClickListener(hamburgerIcon, toggleMenu);