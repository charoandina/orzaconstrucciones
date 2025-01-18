function showSection(section) {
    // Primero ocultar todas las secciones
    const sections = document.querySelectorAll('div[id$="-section"]');
    sections.forEach(function(section) {
        section.classList.add('hide');
    });

    // Mostrar la sección correspondiente
    const sectionToShow = document.getElementById(section + '-section');
    if (sectionToShow) {
        sectionToShow.classList.remove('hide');
    }

    // Eliminar la clase 'active' de todos los elementos li
    const navItems = document.querySelectorAll('.nav-list li');
    navItems.forEach(function(item) {
        item.classList.remove('active');
    });

    // Agregar la clase 'active' al li correspondiente
    const activeItem = document.getElementById(section);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}





/* FUNCIONAMIENTO NAVBAR SERVICIOS */

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".servicios-navbar li");
    const infoSections = document.querySelectorAll(".servicios-info > div");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            // Elimina la clase "active" de todos los <li>
            navItems.forEach(nav => nav.classList.remove("active"));
            // Agrega la clase "active" al <li> clickeado
            item.classList.add("active");

            // Oculta todos los <div> con la clase "hide"
            infoSections.forEach(section => section.classList.add("hide"));

            // Muestra el <div> correspondiente según el texto del <li>
            if (item.textContent.trim() === "DEMOLICIONES") {
                document.getElementById("demoliciones-info").classList.remove("hide");
            } else if (item.textContent.trim() === "MOVIMIENTO DE SUELO") {
                document.getElementById("movimientos-info").classList.remove("hide");
            } else if (item.textContent.trim() === "EXCAVACIONES") {
                document.getElementById("excavaciones-info").classList.remove("hide");
            }
        });
    });
});


