/* HOME - INICIO */
// FUNCION PRINCIPAL - CAMBIO SECCION NAVBAR PPAL
function showSection(section) {
  // Ocultar todas las secciones con transición
  const sections = document.querySelectorAll('div[id$="-section"]');
  sections.forEach(function (sec) {
    sec.classList.remove("show");
    sec.classList.add("hide");
  });

  // Mostrar la sección correspondiente con transición
  const sectionToShow = document.getElementById(section + "-section");
  if (sectionToShow) {
    sectionToShow.classList.remove("hide");
    sectionToShow.classList.add("show");

      // Si la sección es 'construcciones', ocultar la manito después de 5 segundos
  if (section === 'construcciones') {
    setTimeout(() => {
      const hand = document.querySelector('.swipe-hand');
      if (hand) {
        hand.classList.add('hide'); // usar clase si estás haciendo fade
        // o directamente: hand.style.display = 'none';
      }
    }, 5000);
  }
  }

  // Eliminar la clase 'active' de todos los elementos li
  const navItems = document.querySelectorAll(".nav-list li");
  navItems.forEach(function (item) {
    item.classList.remove("active");
  });

  // Agregar la clase 'active' al li correspondiente
  const activeItem = document.getElementById(section);
  if (activeItem) {
    activeItem.classList.add("active");
  }

  // Elementos que deben aparecer con delay
  const elementsToShow = [
    "proyectosContainer",
    "serviciosInfoContainer",
    "collapsableList",
    "trabajosSecondSection",
    "nosotrosContainer",
    "carousel",
    "contactoForm",
  ];

  elementsToShow.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.opacity = "0"; // Reset opacity
    }
  });

  elementsToShow.forEach((id, index) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.style.opacity = "1";
        element.style.transition = "opacity 1s ease-in-out";
      }
    });
  });
}

// SCROLL CONTACTANOS
document.getElementById("boton-home").addEventListener("click", () => {
  const target = document.getElementById("contacto-hero");
  target.scrollIntoView({ behavior: "smooth" });
});

/* REDIRECCTION BOTONES SOBRE NOSOTROS / NUESTROS PROYECTOS */

document.getElementById('sobre-nosotros-boton').addEventListener('click', function () {
  showSection("nosotros");
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.getElementById('construcciones-boton').addEventListener('click', function () {
  showSection("construcciones");
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

/* FUNCIONAMIENTO NAVBAR SERVICIOS */
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-list li");
  const navList = document.querySelector(".nav-list");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // Función para manejar el click en los elementos del navbar
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Elimina la clase "active" de todos los <li>
      navItems.forEach((nav) => nav.classList.remove("active"));
      // Agrega la clase "active" al <li> clickeado
      item.classList.add("active");

      // Cierra el menú hamburguesa (si está abierto)
      if (navList.classList.contains("open")) {
        navList.classList.remove("open");
      }
    });
  });

  // Función para abrir/cerrar el menú hamburguesa
  hamburgerMenu.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
});




/* CONSTRUCCIONES - FUNCION NAVBAR */
// Obtener elementos de la lista de proyectos y contenedor padre
const projectItems = document.querySelectorAll(
  ".proyectos-lista .proyecto-nombre"
);
const projectContainer = document.querySelector(".proyectos-lista");
const projectInfoSections = document.querySelectorAll(".proyectos-info > div");

// Guardar el orden original
const originalOrder = Array.from(projectItems);

projectItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Quitar clase 'proyecto-active' y ocultar imágenes en todos los elementos
    projectItems.forEach((el) => {
      el.classList.remove("proyecto-active");
      el.querySelector(".arrow-img").classList.add("hide");
    });

    // Activar el proyecto seleccionado
    item.classList.add("proyecto-active");

    // Mostrar la imagen del proyecto seleccionado
    const arrowImage = item.querySelector(".arrow-img");
    if (arrowImage) arrowImage.classList.remove("hide");

    // Restaurar el orden de los elementos
    originalOrder.forEach((project) => projectContainer.appendChild(project));

    // Mover el elemento seleccionado al inicio
    projectContainer.prepend(item);

    // Ocultar todas las secciones de información
    projectInfoSections.forEach((section) => section.classList.add("hide"));

    // Mostrar la sección de información correspondiente
    const currentSection = projectInfoSections[index];
    currentSection.classList.remove("hide");
  });
});

/* SERVICIOS - FUNCION NAVBAR */
// Selección de elementos
const navItems = document.querySelectorAll(".servicios-navbar li");
const infoSections = document.querySelectorAll(
  ".servicios-info > div:not(.popup)"
);

// Mostrar la sección inicial
document.getElementById("demoliciones-info").classList.remove("hide");

// Agregar evento a cada elemento del menú
navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Limpiar la clase activa y ocultar todas las secciones
    navItems.forEach((nav) => nav.classList.remove("active"));
    infoSections.forEach((section) => section.classList.add("hide"));

    // Activar el ítem seleccionado y mostrar la sección correspondiente
    item.classList.add("active");
    infoSections[index].classList.remove("hide");
  });
});


/* CAROUSEL EMPRESAS COLABORATIVAS */

document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector(".carousel-track");
  const images = Array.from(carouselTrack.children);

  // Clonar imágenes para efecto infinito
  images.forEach((image) => {
    const clone = image.cloneNode(true);
    carouselTrack.appendChild(clone);
  });
});

/*-----------ANIMACIONES--------------*/
/*---------ANIMATION CLOCK CON RESET---------*/

const nosotros = document.querySelector("#nosotros");

function resetAnimation() {
  let allvalues = document.querySelectorAll(".value");

  allvalues.forEach((singleValue) => {
    let startValue = 0;
    let endValue = parseInt(singleValue.getAttribute("data-count"));
    let duration = Math.floor(3000 / endValue);

    clearInterval(singleValue.interval);

    let counter = setInterval(function () {
      startValue += 1;
      singleValue.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);

    singleValue.interval = counter;
  });
}

// Agregar el event listener para el clic
nosotros.addEventListener("click", resetAnimation);

// Ejecutar la animación al cargar la página por primera vez
resetAnimation();

/*--------SCROLL ANIMATION--------*/
function isElementInViewport(el) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();

  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom > 0
  );
}

function handleScrollGeneric(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    return;
  }

  if (isElementInViewport(element)) {
    element.classList.add("visible");
  }
}
/*---------IMG DE BG2 DELAY-------*/
window.addEventListener("scroll", () => {
  handleScrollGeneric(".contacto-form");
  handleScrollGeneric(".bg2-image");

  // Espera 1 segundo después de handleScrollGeneric(".bg2-image")
  setTimeout(() => {
    document.querySelector(".section-2-img-1").classList.add("animate-in");

    // Agrega la animación a la segunda imagen con 50ms de retraso
    setTimeout(() => {
      document.querySelector(".section-2-img-2").classList.add("animate-in");
    }, 100);
  }, 500);
});

// Run once on load
document.addEventListener("DOMContentLoaded", () => {
  handleScrollGeneric(".contacto-form");
  handleScrollGeneric(".bg2-image");
  handleScrollGeneric(".proyectos-container");
});
document.querySelectorAll(".year-container").forEach((container) => {
  container.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const isOpen = answer.classList.contains("show");

    if (!isOpen) {
      // OPENING
      answer.classList.add("show");
      answer.style.overflow = "hidden";
      answer.style.maxHeight = "0px";

      requestAnimationFrame(() => {
        answer.style.transition = "max-height 0.3s ease-out";
        answer.style.maxHeight = answer.scrollHeight + "px";
      });
    } else {
      // CLOSING
      answer.style.maxHeight = answer.scrollHeight + "px";

      requestAnimationFrame(() => {
        answer.style.transition = "max-height 0.3s ease-in";
        answer.style.maxHeight = "0px";
      });

      // reutilizar la animacion para abrir
      setTimeout(() => {
        answer.classList.remove("show");
        answer.style.removeProperty("max-height");
        answer.style.removeProperty("overflow");
        answer.style.removeProperty("transition");
      }, 300);
    }
  });
});

/* FORM */

$(document).ready(function () {
  var form = $("#contact-form");
  if (form.length === 0) {
    console.error("El formulario no se encontró en el DOM.");
    return;
  }

  form.on("submit", function (event) {
    event.preventDefault();

    var formData = form.serialize();

    $.ajax({
      url: "procesar_formulario.php",
      type: "POST",
      data: formData,
      success: function (response) {
        $("#form-response").html(response);
      },
      error: function () {
        $("#form-response").html(
          "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
        );
      },
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Listener para el evento de scroll
  window.addEventListener("scroll", function () {
    handleScrollGeneric("#year-2016"); // Este es el "trigger" que hace que se animen las tarjetas
  });
  // Función para verificar si un elemento está en la vista del usuario
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función que se activa al hacer scroll, se ejecuta con el selector del trigger
  function handleScrollGeneric(selector) {
    const element = document.querySelector(selector);
    if (!element) {
      return;
    }

    // Si el elemento está en la vista, agregamos la clase 'visible' a las tarjetas
    if (isElementInViewport(element)) {
      const containers = document.querySelectorAll(
        ".trabajos-second-container"
      );
      containers.forEach((container, index) => {
        if (index < 6) {
          // Solo animamos hasta el sexto elemento
          setTimeout(() => {
            container.classList.add("visible");
          }, index * 300);
        }
      });
    }
  }
});

/* REDIRECCION IMAGENES NOSOTROS */

document.querySelectorAll('.img-construccion').forEach(function (img) {
  img.addEventListener('click', function () {
    showSection("construcciones");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.img-servicios').forEach(function (img) {
  img.addEventListener('click', function () {
    showSection("servicios");
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

