const darkModeToggle = document.getElementById("dark-mode-toggle");
const lightMoon = document.querySelector(".light-moon");
const darkMoon = document.querySelector(".dark-moon");
const hamburguerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector("#cross-icon");


darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        lightMoon.style.display = "inline-block";
        darkMoon.style.display = "none";
        hamburguerIcon.src = "../assets/img/hamburguesaWhite.png";
        closeIcon.src = "../assets/img/cruzWhite.png";
        hambuerguerIcon.classList.add("hamburguer-icon-white");
        closeIcon.classList.add("close-icon-white");
    } else {
        lightMoon.style.display = "none";
        darkMoon.style.display = "inline-block";
        hamburguerIcon.src = "../assets/img/menu-hamburguesa.png";
        closeIcon.src = "../assets/img/cruz.png";
    }
});





