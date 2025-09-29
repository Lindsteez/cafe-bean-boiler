
console.log("[dennis.js] loaded");

const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".navbar .menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}