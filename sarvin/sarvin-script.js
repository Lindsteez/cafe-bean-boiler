//Select elements
const menuToggle = document.getElementById ("menuToggle");
const menu = document.querySelector(".navbar .menu");

//Toggle menu when clicking hamburger 
menuToggle.addEventListener ("click", () => {
    menu.classList.toggle("active");

    // Change icon 
    if (menu.classList.contains ("active")) {
        menuToggle.textContent ="✖"
    }else {
        menuToggle.textContent ="☰"
    }
});