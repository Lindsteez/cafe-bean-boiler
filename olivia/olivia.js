const hamburger = document.getElementById("menuToggle")
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
    menu.classList.toggle("open");
});