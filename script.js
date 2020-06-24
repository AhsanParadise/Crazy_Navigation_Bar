
// Don't forget that ===============

const dot = document.querySelector(".dot");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");


dot.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});