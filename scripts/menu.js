document.addEventListener("DOMContentLoaded", function() {
    var menuHamburguesa = document.getElementById("menu_hamburguesa");

    menuHamburguesa.addEventListener("change", function() {
        if (menuHamburguesa.checked) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    });

});

document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById('menu-icon');

    menuIcon.addEventListener('click', function() {
        toggleMenu();
    });
});

function toggleMenu() {
    var hamburgerIcon = document.getElementById('hamburger-icon');
    var crossIcon = document.getElementById('cross-icon');

    if (hamburgerIcon.style.display === 'none') {

        hamburgerIcon.style.display = '';
        crossIcon.style.display = 'none';
    } else {
        
        hamburgerIcon.style.display = 'none';
        crossIcon.style.display = '';
    }
}

