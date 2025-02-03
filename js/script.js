/* HOME - INICIO */
// FUNCION PRINCIPAL - CAMBIO SECCION NAVBAR PPAL
function showSection(section) {
  // Primero ocultar todas las secciones
  const sections = document.querySelectorAll('div[id$="-section"]');
  sections.forEach(function (section) {
    section.classList.add("hide");
  });

  // Mostrar la sección correspondiente
  const sectionToShow = document.getElementById(section + "-section");
  if (sectionToShow) {
    sectionToShow.classList.remove("hide");
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
}

// SCROLL CONTACTANOS
document.getElementById("boton-home").addEventListener("click", () => {
  const target = document.getElementById("contacto-hero");
  target.scrollIntoView({ behavior: "smooth" });
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

/* BURGER NAVBAR
function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('open');
}*/


/* CONSTRUCCIONES - FUNCION NAVBAR */
// Obtener elementos de la lista de proyectos y contenedor padre
const projectItems = document.querySelectorAll(".proyectos-lista .proyecto-nombre");
const projectContainer = document.querySelector(".proyectos-lista");
const projectInfoSections = document.querySelectorAll(".proyectos-info > div");

// Guardar el orden original
const originalOrder = Array.from(projectItems);

projectItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Quitar clase 'proyecto-active' y ocultar imágenes en todos los elementos
    projectItems.forEach(el => {
      el.classList.remove("proyecto-active");
      el.querySelector(".arrow-img").classList.add("hide");
    });

    // Activar el proyecto seleccionado
    item.classList.add("proyecto-active");

    // Mostrar la imagen del proyecto seleccionado
    const arrowImage = item.querySelector(".arrow-img");
    if (arrowImage) arrowImage.classList.remove("hide");

    // Restaurar el orden de los elementos
    originalOrder.forEach(project => projectContainer.appendChild(project));

    // Mover el elemento seleccionado al inicio
    projectContainer.prepend(item);

    // Ocultar todas las secciones de información
    projectInfoSections.forEach(section => section.classList.add("hide"));

    // Mostrar la sección de información correspondiente
    const currentSection = projectInfoSections[index];
    currentSection.classList.remove("hide");
  });
});

/* SERVICIOS - FUNCION NAVBAR */
// Selección de elementos
const navItems = document.querySelectorAll('.servicios-navbar li');
const infoSections = document.querySelectorAll('.servicios-info > div');

// Mostrar la sección inicial
document.getElementById('demoliciones-info').classList.remove('hide');

// Agregar evento a cada elemento del menú
navItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Limpiar la clase activa y ocultar todas las secciones
    navItems.forEach(nav => nav.classList.remove('active'));
    infoSections.forEach(section => section.classList.add('hide'));

    // Activar el ítem seleccionado y mostrar la sección correspondiente
    item.classList.add('active');
    infoSections[index].classList.remove('hide');
  });
});

/* POP UP SERVICIOS */

// Pop up Demoliciones
// Seleccionar elementos demoliciones
const popupDemoliciones = document.getElementById("demolicionesPopup");
const closePopuppopupDemoliciones = document.getElementById("close-popup-demoliciones");
const leftImgpopupDemoliciones = document.querySelector(".info-left-img-demoliciones");
const rightImgpopupDemoliciones = document.querySelector(".info-right-img-demoliciones");

// Función para mostrar el pop-up demoliciones
function showPopupDemoliciones() {
  popupDemoliciones.classList.remove("hide");
}

// Función para ocultar el pop-up demoliciones
function hidePopupDemoliciones() {
  popupDemoliciones.classList.add("hide");
}

// Mostrar el pop-up al hacer clic en las imágenes demoliciones
leftImgpopupDemoliciones.addEventListener("click", showPopupDemoliciones);
rightImgpopupDemoliciones.addEventListener("click", showPopupDemoliciones);

// Cerrar el pop-up al hacer clic en el botón de cierre demoliciones
closePopuppopupDemoliciones.addEventListener("click", hidePopupDemoliciones);

// Cerrar el pop-up al hacer clic fuera del contenido demoliciones
popupDemoliciones.addEventListener("click", (e) => {
  if (e.target === popupDemoliciones) {
    hidePopupDemoliciones();
  }
});

// Pop up Movimientos
// Seleccionar elementos
const popupMovimientos = document.getElementById("moviemintoPopup");
const closePopuppopupMovimientos = document.getElementById("close-popup-movimientos");
const leftImgpopupMovimientos = document.querySelector(".info-left-img-movimientos");
const rightImgpopupMovimientos = document.querySelector(".info-right-img-movimientos");

// Función para mostrar el pop-up
function showPopupMovimientos() {
  popupMovimientos.classList.remove("hide");
}

// Función para ocultar el pop-up
function hidePopupMovimientos() {
  popupMovimientos.classList.add("hide");
}

// Mostrar el pop-up al hacer clic en las imágenes
leftImgpopupMovimientos.addEventListener("click", showPopupMovimientos);
rightImgpopupMovimientos.addEventListener("click", showPopupMovimientos);

// Cerrar el pop-up al hacer clic en el botón de cierre
closePopuppopupMovimientos.addEventListener("click", hidePopupMovimientos);

// Cerrar el pop-up al hacer clic fuera del contenido
popupMovimientos.addEventListener("click", (e) => {
  if (e.target === popupMovimientos) {
    hidePopupMovimientos();
  }
});


/* TRABAJOS POR AÑO - OBJECT + ARRAY */
const trabajosPorAnio = {
  2024: [
    {
      id: 1,
      cliente: "Fideicomiso Junin 1435",
      direccion: "JUNIN 1435",
      descripcion: "Excavación de subsuelo -4m",
    },
  ],
  2023: [
    {
      id: 1,
      cliente: "Fideicomiso Junin 1435",
      direccion: "JUNIN 1435",
      descripcion: "Excavación de subsuelo -4m",
    },
  ],
  2022: [
    {
      id: 1,
      cliente: "Fideicomiso Junin 1435",
      direccion: "Junin 1435",
      descripcion: "Excavación de subsuelo -4m",
    },
    {
      id: 2,
      cliente: "Caseros 3039 S.A. - NK -Nómada",
      direccion: "Av Santa Fe 4645",
      descripcion: "Excavación -15 m volumen 2104 m3",
    },
    {
      id: 3,
      cliente: "Burela 3055 S.R.L",
      direccion: "Luis Burela 3055",
      descripcion: "Normal - En Actividad Ctta Ppal 2126 m2 Construcción",
    },
    {
      id: 4,
      cliente: "Fate Saici",
      direccion: "Blanco Encalada 3003",
      descripcion:
        "Obra Civil platea de fundaciòn y camaras , planta solventes",
    },
    {
      id: 5,
      cliente: "Desarrollos Constructivos S.A",
      direccion: "Av. Ruiz Huidobro 1792",
      descripcion: "Demolición 186 m2",
    },
    {
      id: 6,
      cliente: "Live Developers S.R.L- Rafael Domestico",
      direccion: "Av. Ruiz Huidobro 2472",
      descripcion: "Excavación bases a -3 profundidad",
    },
    {
      id: 7,
      cliente: "Sportop S.A",
      direccion: "Av. Sebastian Elcano 5024",
      descripcion: "Demolición parcial y obra nueva",
    },
    {
      id: 8,
      cliente: "Tirsur S.A",
      direccion: "Mariscal Sucre 2429",
      descripcion: "Excavación bases a -3 profundidad",
    },
    {
      id: 9,
      cliente: "JJ Desarrollos S.R.L",
      direccion: "General O'Higgins 2840",
      descripcion: "Excavación -3 m volumen 265 m3",
    },
    {
      id: 10,
      cliente: "Asociación Civil Universidad del Salvador",
      direccion: "Diego E Zavaleta 330",
      descripcion: "Excavación para subsuelos",
    },
    {
      id: 11,
      cliente: "Fate Saici Ampliación de Tareas",
      direccion: "Blanco Encalada 3003",
      descripcion: "Obra Civil platea de fundación y camaras, planta solventes",
    },
    {
      id: 12,
      cliente: "Dimec S.A",
      direccion: "Av. del Libertador 2207",
      descripcion: "Alquiler de excavadora bajo dirección de obra",
    },
    {
      id: 13,
      cliente: "LVCP Urban Developers S.R.L",
      direccion: "Virrey Gabriel Aviles 2921",
      descripcion: "Demolición total",
    },
    {
      id: 14,
      cliente: "LVCP Urban Developers S.R.L",
      direccion: "Virrey Gabriel Aviles 2921",
      descripcion:
        "Excavación subsuelo -4,70 Normal - En Actividad/Ctta ppal 1500M2 Construccion",
    },
  ],
  2021: [
    {
      id: 1,
      cliente: "Leandro Cambiasso",
      direccion: "Castro 924",
      descripcion: "Demolición total 420m2",
    },
    {
      id: 2,
      cliente: "Callao Clásico S.A - Obras & Sistemas S.R.L",
      direccion: "Av Callao 1834/56",
      descripcion:
        "Demolición 3698 m2 y excavación de subsuelos -17,95m profundidad",
    },
    {
      id: 3,
      cliente: "Desarrollos Constructivos S.A",
      direccion: "3 de Febrero 4091",
      descripcion: "Excavación subsuelo",
    },
    {
      id: 4,
      cliente: "Víctor Javier Sasson",
      direccion: "Uruguay 740",
      descripcion: "Demolición total 1029m2",
    },
    {
      id: 5,
      cliente: "BA Skyline S.R.L",
      direccion: "Cptan. Gral. Ramón Freire 2627",
      descripcion: "Excavación mecánica subsuelos -4,00m profundidad",
    },
    {
      id: 6,
      cliente: "AB Construye S.R.L - Palombo Hnos S.A",
      direccion: "Pje Coronel José Cabrer 4971",
      descripcion: "Excavación de bases - 4,00",
    },
    {
      id: 7,
      cliente: "José María Ronchino",
      direccion: "Tronador 4780/4750",
      descripcion: "Demolición total 585m2",
    },
    {
      id: 8,
      cliente: "Virrey Loreto 3489",
      direccion: "Virrey Loreto 3489",
      descripcion: "Construcción edificio viviendas",
    },
    {
      id: 9,
      cliente: "BA Skyline S.R.L",
      direccion: "Cptan. Gral. Ramón Freire 2627",
      descripcion: "Excavación de bases",
    },
    {
      id: 10,
      cliente: "Total Realtor S.R.L",
      direccion: "Av Chorroarín 5024",
      descripcion: "Demolición total 389m2",
    },
    {
      id: 11,
      cliente: "Total Realtor S.R.L",
      direccion: "Av Chorroarín 5025",
      descripcion: "Excavación de subsuelo a -4,00",
    },
    {
      id: 12,
      cliente: "Maid S.A",
      direccion: "Montevideo 351",
      descripcion: "Demolición total 611 m2",
    },
    {
      id: 13,
      cliente: "Alem 136 S.A - Palombo Hnos S.A",
      direccion: "Alem 136",
      descripcion: "Excavación mecánica de bases y submuración",
    },
    {
      id: 14,
      cliente: "Lacio S.A. Ctta. Ppal LM Perri Construcciones S.A",
      direccion: "Superí 1597",
      descripcion: "Excavación -8,35m mecánica de subsuelos y submuración",
    },
    {
      id: 15,
      cliente: "De Carolis Daniel - LM Perri Construcciones",
      direccion: "Olazábal 1431",
      descripcion: "Demolición 266 m2 total",
    },
  ],
  2020: [
    {
      id: 1,
      cliente: "Izuco Rosario",
      direccion: "Obra Swfif Pontevedra",
      descripcion: "Alquiler de equipo CAT938 cargadora",
    },
    {
      id: 2,
      cliente: "Gabadian S.A- Palombo Hnos S.A",
      direccion: "AV del Libertador 13131",
      descripcion: "Excavación mecánica subsuelos -7,50m profundidad",
    },
    {
      id: 3,
      cliente: "Green Builders S.R.L",
      direccion: "Mendoza 1833 por COVID reinicio 08/2020",
      descripcion: "Demolición total con retiro de escombros 276 m2",
    },
    {
      id: 4,
      cliente: "Callao Clásico S.A - Obras & Sistemas S.R.L",
      direccion: "Av Callao 1834/56",
      descripcion: "Excavación de subsuelos -18 m profundidad",
    },
    {
      id: 5,
      cliente: "Mentvil S.A",
      direccion: "Neuquén 1840 CABA",
      descripcion: "Excavación mecánica subsuelos -4,50m profundidad",
    },
    {
      id: 6,
      cliente: "Virrey Loreto 3489",
      direccion: "Virrey Loreto 3489",
      descripcion: "Demolición total con retiro 200m2",
    },
    {
      id: 7,
      cliente: "LM Perri Construcciones S.A",
      direccion: "Junín 1435",
      descripcion: "Excavación mecánica subsuelos -4,00m profundidad",
    },
    {
      id: 8,
      cliente: "BA Skyline S.R.L",
      direccion: "Cptan. Gral. Ramón Freire 2627",
      descripcion: "Demolición total con retiro 200m2",
    },
    {
      id: 9,
      cliente: "Edificar Guardia Vieja 3978 S.R.L",
      direccion: "Guardia Vieja 3978 CABA",
      descripcion:
        "Demolición total 200m2, Excavación de bases con retiro a -4,m",
    },
    {
      id: 10,
      cliente: "Desarrollos Constructivos S.A",
      direccion: "Besares 1794/96",
      descripcion: "Demolición total 300m2",
    },
    {
      id: 11,
      cliente: "Desarrollos Constructivos S.A",
      direccion: "3 de Febrero 4091",
      descripcion: "Excavación subsuelo",
    },
    {
      id: 12,
      cliente: "Dielo S.A",
      direccion: "Fantoche Fc Saraza 5543",
      descripcion:
        "Demolición parcial, 400m2 y 9m altura retiro, mov de suelo. Construcción",
    },
    {
      id: 13,
      cliente: "Dielo S.A",
      direccion: "Final obra 11/2020",
      descripcion:
        "Pavimento para playa maniobras camiones colocación, portón automático, adecuación muros linderos",
    },
    {
      id: 14,
      cliente: "Prysmian Energía C&S de ARG. S.A",
      direccion: "Planta La Roza Prysmian",
      descripcion:
        "Demolición interna planta 1088 m2 y rotura, con carga de pavimentos 750 m2",
    },
    {
      id: 15,
      cliente: "San Blas",
      direccion: "San Blas 2340",
      descripcion: "Demolición total 200m2 con retiro",
    },
    {
      id: 16,
      cliente: "Virrey Loreto 3489",
      direccion: "Virrey Loreto 3489",
      descripcion: "Excavación de subsuelo -3,m profundidad",
    },
    {
      id: 17,
      cliente: "De Carolis Daniel - LM Perri Construcciones",
      direccion: "Olazábal 1431",
      descripcion: "Demolición total",
    },
  ],
  2019: [
    {
      id: 1,
      cliente: "Fideicomiso Icon Paseo Colón",
      direccion: "Av. Paseo Colón Nº 1422/28/30/34/38/40",
      descripcion: "Demolición total con retiro de escombros",
    },
    {
      id: 2,
      cliente: "Sucesión de Juan Héctor Crouzel",
      direccion: "Alberti 1817 esquina Av Brasil 2502",
      descripcion: "Demolición total con retiro",
    },
    {
      id: 3,
      cliente: "Henisa Sudamericana S.A",
      direccion: "Remodelación Htal Cecilia Grierson Villa Lugano",
      descripcion: "Mov de suelos equipos",
    },
    {
      id: 4,
      cliente:
        "Fideicomiso Inmob. Parques de Bauness/ DIM Empresa Constructora",
      direccion: "Bauness 1275/77",
      descripcion: "Excavación de bases con retiro.",
    },
    {
      id: 5,
      cliente: "Cateto Construcciones S.A",
      direccion: "Manuel Fraga 1731/33",
      descripcion: "Alquiler de excavadora bajo D.O./ Excavación",
    },
    {
      id: 6,
      cliente: "Palombo Hnos S.A./Mumina S.A",
      direccion: "Malabia 1346",
      descripcion:
        "Excavación con retiro -6,50 profundidad/ Volúmen 3500m3 aprox",
    },
    {
      id: 7,
      cliente: "Obras & Sistemas S.R.L",
      direccion: "Av Callao 1834/38/56",
      descripcion: "Demolición total con retiro de 3700m2",
    },
    {
      id: 8,
      cliente: "Henisa Sudamericana S.A",
      direccion: "El Salvador 5161",
      descripcion: "Excavación mecánica con retiro 1300m3",
    },
    {
      id: 9,
      cliente: "Ezequiel Mariano Monjo - Arq Mariana Viegas",
      direccion: "Simbrón 4380",
      descripcion: "Demolición total con retiro de 105m2",
    },
    {
      id: 10,
      cliente: "Construcciones Rual S.R.L",
      direccion: "Av Triunvirato 5377/81",
      descripcion: "Excavación mecánica con submuraciones y retiro",
    },
    {
      id: 11,
      cliente: "Constructora Mare S.A",
      direccion: "Acevedo 355",
      descripcion:
        "Alquiler de equipo con operario para excavación mecánica con retiro",
    },
    {
      id: 12,
      cliente: "Rodas Obras y Servicios SAS",
      direccion: "El Salvador 6083",
      descripcion: "Excavación mecánica con retiro para subsuelos",
    },
    {
      id: 13,
      cliente: "Arq. Mariana Viegas-María Laura Márques",
      direccion: "Obispo San Alberto 3250",
      descripcion:
        "Demolición total con retiro de escombros y materiales 900m2",
    },
    {
      id: 14,
      cliente: "Palombo Hnos S.A",
      direccion: "Av Libertador 13131",
      descripcion: "Excavación mecánica a -7,50 volumen aproximado",
    },
    {
      id: 15,
      cliente: "Obras & Sistemas S.R.L - Callao Clásico S.A",
      direccion: "Av Callao 1834/38/56",
      descripcion:
        "Excavación mecánica a -17,5 m profundidad 5 subsuelos con subm",
    },
    {
      id: 16,
      cliente: "Virrey Loreto 3489 S.R.L- Arq. Marcelo Capellano",
      direccion: "Virrey Loreto 3489",
      descripcion:
        "Demolición total con retiro de escombros y materiales 1200m2",
    },
    {
      id: 17,
      cliente: "Obras & Sistemas S.R.L",
      direccion: "Suipacha 767 al 769",
      descripcion:
        "Demolición total con retiro de escombros y materiales 500m2",
    },
    {
      id: 18,
      cliente: "Ariel Horacio Cao",
      direccion: "Camarones 1819/1821",
      descripcion:
        "Demolición total con retiro de escombros y materiales 260m2",
    },
    {
      id: 19,
      cliente: "Ollivier Gastón - Arq Jorge Javier Paez",
      direccion: "Av Olazábal 1431",
      descripcion:
        "Demolición total con retiro de escombros y materiales 252m2",
    },
    {
      id: 20,
      cliente: "Arq. Mayes Sabaj Víctor Alejandro",
      direccion: "Guardia Vieja 3978",
      descripcion:
        "Demolición total con retiro y Excavación para subsuelos 260m2/1600m3",
    },
    {
      id: 21,
      cliente: "Danone S.A. - Arq Reyes Mariano",
      direccion: "Planta de Longchamps",
      descripcion: "Movimiento de suelos- con aporte y/o retiro",
    },
  ],
  2018: [
    {
      id: 1,
      cliente: "Palombo Hnos S.A - Amube S.A",
      direccion: "Av. Brigadier JM Rosas 7170",
      descripcion: "Alquiler equipos Mov de suelos",
    },
    {
      id: 2,
      cliente: "Obras y Sistemas S.R.L - Fideicomiso Palacio Paz XXI",
      direccion:
        "M.T.de Alvear 715/27/45-Maipu 1020/30-Av.Santa Fe 702/50/54- Esmeralda 1061",
      descripcion: "Alquiler de equipos para Excavación con retiro",
    },
    {
      id: 3,
      cliente: "Laboratorio San José de Diagnóstico y Tratamiento S.A",
      direccion: "Juan José Olleros 3423/25",
      descripcion: "Excavación de subsuelo",
    },
    {
      id: 4,
      cliente: "Henisa Sudamericana S.A.- Htal Cecilia Grierson remodelación",
      direccion: "Av. Fernández de la Cruz y Escalada 4100",
      descripcion: "Alquiler equipos Mov de suelos-Relleno y compactación",
    },
    {
      id: 5,
      cliente: "Metrocons S.A",
      direccion: "Teodoro García 2259",
      descripcion: "Excavación con retiro",
    },
    {
      id: 6,
      cliente: "Grupo RAR S.R.L",
      direccion: "Zapiola 1139",
      descripcion: "Excavación con retiro -3,10 profundidad",
    },
    {
      id: 7,
      cliente: "Obras y Sistemas S.R.L",
      direccion: "Salguero 2802/06/12/14/18/20 y Juan Fco Seguí 3501/07",
      descripcion: "Excavación 4 subs 20 pisos a -14,20 profundidad",
    },
    {
      id: 8,
      cliente: "Conorvial S.A - Minist. Desarrollo Urbano y Transp (GCBA)",
      direccion: "Av. Escalada 4502",
      descripcion: "Villa Olímpica Aquiler equipos movimiento de suelo",
    },
    {
      id: 9,
      cliente: "Fidesol S.A",
      direccion: "Av Díaz Vélez 401/07/09 - Fco Acuña de Figueroa 206/12/14",
      descripcion: "Excavación 1 subs- a -4,50 profundidad",
    },
    {
      id: 10,
      cliente: "Rowing S.A - AYSA",
      direccion: "Planta transformadora Subestación Nº129 - AYSA La Pampa 400",
      descripcion:
        "Movimiento de suelo/Excavación a -4,50mts/Cisterna y separador de aceite- TR 1,2 y 3",
    },
    {
      id: 11,
      cliente: "Laboratorio San José de Diagnóstico y Tratamiento S.A",
      direccion: "Burela 1491",
      descripcion: "Demolición total con retiro",
    },
    {
      id: 12,
      cliente: "Fideicomiso Armenia - Estudio Romero - Srael",
      direccion: "Juan José Olleros 3423/25",
      descripcion: "Excavación de subsuelo",
    },
    {
      id: 13,
      cliente: "Subterráneos de BS.AS .- Dycasa S.A",
      direccion: "Sarmiento 861 - Pace - Acceso Sarmiento - Fase 1 - Etapa II",
      descripcion: "Demolición y Excavación a -28,30m profundidad, con retiro",
    },
    {
      id: 14,
      cliente: "Gustavo Ariel Hazan - Estudio Capellano",
      direccion: "Burela 1491",
      descripcion: "Demolición total con retiro",
    },
    {
      id: 15,
      cliente: "Universidad del Salvador - Constructora Lanusse S.A",
      direccion: "Zavaleta 330",
      descripcion: "Excavación con retiro 1 subs- a -4,50 profundidad",
    },
    {
      id: 16,
      cliente: "Fate S.A.I.C.I.",
      direccion: "Blanco Encalada 3003-Tortuguitas",
      descripcion: "Limpieza de canal Oeste dentro de la planta industrial",
    },
    {
      id: 17,
      cliente: "Fideicomiso Casa Suiza",
      direccion: "Rodríguez Peña 252/54/58",
      descripcion: "Excavación de subsuelos, con retiro -7,80 profundidad",
    },
    {
      id: 18,
      cliente: "Fideicomiso Triunvirato 5375 - LM Perri Construcciones S.A",
      direccion: "Av Triunvirato 5369/71/73/75",
      descripcion: "Demolición total, Excavación",
    },
    {
      id: 19,
      cliente: "Suseción de Juan Héctor Crouzel",
      direccion: "Alberti 1817 esquina Av Brasil 2502",
      descripcion: "Demolición total con retiro - Derrumbe previo",
    },
  ],
  2017: [
    {
      id: 1,
      cliente: "Gedif S.A - Sucre BH",
      direccion: "Ramsay 1889",
      descripcion: "Excavación -12,50m 21750 m3",
    },
    {
      id: 2,
      cliente: "Estudio Fergov",
      direccion: "Luna 49",
      descripcion: "Demolición total - Excavación de bases",
    },
    {
      id: 3,
      cliente: "NS Desarrollos - Neumann- Kohn",
      direccion: "Av Caseros 3017/3023/3031",
      descripcion: "Excavación a -12,70m 15000m3",
    },
    {
      id: 4,
      cliente: "Norden Construcciones S.R.L",
      direccion: "Ctro Médico Lomas de Zamora",
      descripcion: "Excavación 5892m3",
    },
    {
      id: 5,
      cliente: "Vial Alfano S.A",
      direccion: "Mov de suelo",
      descripcion: "Alquiler equipos con operadores",
    },
    {
      id: 6,
      cliente: "Arq. Santiago Hayes",
      direccion: "Naón 3237/39",
      descripcion: "Demolición total con retiro de escombros",
    },
    {
      id: 7,
      cliente: "Arq. Marcelo Capellano - Estudio",
      direccion: "Av Alvarez Thomas 785",
      descripcion: "Demolición total con retiro y excavación",
    },
    {
      id: 8,
      cliente: "Libertador 5822 S.A",
      direccion: "Av Libertador 5822",
      descripcion:
        "Demolición total con retiro de escombros -1661 m2 - Excavación con retiro -5,40",
    },
    {
      id: 9,
      cliente: "Arq. Carlos Porres",
      direccion: "Fray Justo Sarmiento 350",
      descripcion: "Demolición total con retiro de escombros",
    },
    {
      id: 10,
      cliente: "Rowing S.A - AYSA",
      direccion: "Planta transformadora Subestación Nº129 - AYSA La Pampa 400",
      descripcion: "Demolición - Movimiento de suelo - Excavación -4,50mts",
    },
    {
      id: 11,
      cliente: "Caseros 3039 S.A",
      direccion: "Av Casero 3017/3023/3031",
      descripcion: "Excavación 4 subs-25pisos- 11,30 y plateas a -15,20",
    },
    {
      id: 12,
      cliente: "Obras y Sistemas S.R.L",
      direccion: "Fca Manaos - La Matanza",
      descripcion: "Alquiler de equipos/Movimiento de suelo",
    },
    {
      id: 13,
      cliente: "Arq. Marcelo Capellano - Estudio",
      direccion: "Virrey Arredondo 2849",
      descripcion: "Demolición total con retiro y excavación",
    },
    {
      id: 14,
      cliente: "Palombo Hnos S.A",
      direccion: "Av. Brasil 75/77",
      descripcion: "Demolición total con retiro 1425m2",
    },
    {
      id: 15,
      cliente: "Fideicomiso Pedro Ignacio Rivera",
      direccion: "Pedro Ignacio Rivera 5847",
      descripcion: "Demolición total con retiro 385m2",
    },
    {
      id: 16,
      cliente: "Arq. Fernando Alberti",
      direccion: "Simbrón 5126",
      descripcion: "Demolición total con retiro 103m2",
    },
    {
      id: 17,
      cliente: "Overcon S.R.L",
      direccion: "Sucre 1150",
      descripcion: "Alquiler de equipos - Movimiento de suelo",
    },
    {
      id: 18,
      cliente: "Laboratorio San José de Diagnóstico y Tratamiento S.A",
      direccion: "Olleros 3423/25",
      descripcion: "Demolición total con retiro 327m2",
    },
    {
      id: 19,
      cliente: "Emersus S.R.L",
      direccion: "Bolivia 3737",
      descripcion: "Demolición total con retiro - Excavación de bases",
    },
    {
      id: 20,
      cliente: "Overcon S.R.L",
      direccion: "Echeverría 1155",
      descripcion: "Alquiler de equipos con operadores - Movimiento de suelo",
    },
    {
      id: 21,
      cliente: "Metrocons S.A",
      direccion: "Teodoro García 2259",
      descripcion: "Excavación con retiro",
    },
    {
      id: 22,
      cliente: "Fideicomiso Rivera 5847/51",
      direccion: "Pedro Ignacio Rivera 5847/51",
      descripcion: "Demolición total con retiro - Excavación de bases",
    },
    {
      id: 23,
      cliente: "Muelle de Palermo S.A",
      direccion: "Montañeses 2861",
      descripcion: "Demolición total con retiro 345,74m2",
    },
    {
      id: 24,
      cliente: "Droguería Avantfar S.A",
      direccion: "Avda Directorio 5040",
      descripcion: "Demolición total con retiro 342,33m2",
    },
    {
      id: 25,
      cliente: "Henisa Sudamericana S.A - Htal Cecilia Grierson",
      direccion: "Av. Fernández de la Cruz y Escalada 4100",
      descripcion: "Alquiler equipos Mov de suelos - Relleno y compactación",
    },
    {
      id: 26,
      cliente: "Fate S.A.I.C.I.",
      direccion: "Blanco Encalada 3003- Victoria Planta Industrial",
      descripcion: "Limpieza, desmalezado Canal Oeste dentro predio industrial",
    },
    {
      id: 27,
      cliente: "Obras y Sistemas S.R.L",
      direccion: "Salguero 2802/06/12/14/18/20 y Juan Fco Seguí 3501/07",
      descripcion:
        "Demolición total con retiro - Preservación frente Histórico 1312,56m2",
    },
    {
      id: 28,
      cliente: "Obras y Sistemas S.R.L - Fideicomiso Palacio Paz XXI",
      direccion:
        "M.T.de Alvear 715/27/45 - Maipu 1020/30 - Av.Santa Fe 702/50/54 - Esmeralda 1061",
      descripcion:
        "Alquiler de equipos: Fletes - Alquiler de equipos para excavación con retiro",
    },
  ],
  2016: [
    {
      id: 1,
      cliente: "GVG Construcciones S.R.L",
      direccion: "Capital Federal",
      descripcion: "Demolición total con retiro 300m2",
    },
    {
      id: 2,
      cliente: "Leymer S.A",
      direccion: "Capital Federal",
      descripcion: "Alquiler equipos Mov de suelos",
    },
    {
      id: 3,
      cliente: "Obispado de San Isidro",
      direccion: "Colegio Madre Teresa",
      descripcion: "Mov de suelo - retiro",
    },
    {
      id: 4,
      cliente:
        "Contreras Hnos. S.A - Helport S.A - CPC S.A - Rovella Carranza S.A",
      direccion: "GNEA - Sta Fé Gasoducto",
      descripcion: "Alquiler equipo",
    },
    {
      id: 5,
      cliente: "Cisne Films S.R.L",
      direccion: "Capital Federal",
      descripcion: "Alquiler equipos",
    },
    {
      id: 6,
      cliente: "Fideicomiso Córdoba 6267 - Grupo Hausland",
      direccion: "Av. Córdoba 6267",
      descripcion: "Demolición - Excavación",
    },
    {
      id: 7,
      cliente: "Caseros 3039 S.A",
      direccion: "Avda Caseros 3017/3023/3031",
      descripcion: "Excavación a -8,70m volumen",
    },
    {
      id: 8,
      cliente: "Conorvial S.A",
      direccion: "CGPNº 12",
      descripcion: "Demolición total - Excavación 1500m3",
    },
    {
      id: 9,
      cliente: "Argecam S.R.L",
      direccion: "Capital Federal",
      descripcion: "Alquiler equipos",
    },
    {
      id: 10,
      cliente: "Constructora Dos Arroyos S.A - Gedif S.A - Sucre BH",
      direccion: "Ramsay 1889",
      descripcion: "Excavación -12,50m 21750 m3",
    },
    {
      id: 11,
      cliente: "Obras y Sistemas S.R.L",
      direccion: "La Horqueta San Isidro",
      descripcion: "Demolición total",
    },
    {
      id: 12,
      cliente: "Fate S.A.I.C.I.",
      direccion: "Blanco Encalada 3003- Victoria",
      descripcion: "Mov de suelo",
    },
    {
      id: 13,
      cliente: "Rowing S.A - AYSA",
      direccion: "Pampa 400-Planta Potabilizadora",
      descripcion: "Demolición - Excavación Planta transformadora Nº129",
    },
    {
      id: 14,
      cliente: "Obras y Sistemas S.R.L",
      direccion: "Arcos 1440",
      descripcion: "Excavación 4 subs-25pisos- 11,30 y plateas a -15,20",
    },
    {
      id: 15,
      cliente: "Norden Construcciones S.R.L",
      direccion: "Centro Médico Lomas de Zamora",
      descripcion: "Excavación 5892m3",
    },
  ],
};

// Función para cargar los trabajos en el HTML
function cargarTrabajos(anio) {
  const trabajos = trabajosPorAnio[anio];
  const container = document.getElementById(`year-${anio}`);

  if (trabajos) {
    trabajos.forEach((trabajo) => {
      const trabajoElement = document.createElement("div");
      trabajoElement.classList.add("trabajo");

      trabajoElement.innerHTML = `
                <div class="trabajo-container">
                <h3 class="russo-one-regular">${trabajo.cliente}</h3>
                <p class="trabajo-direccion industry-regular">${trabajo.direccion}</p>
                <p class="trabajo-descripcion industry-medium">${trabajo.descripcion}</p>
                </div>
            `;

      container.appendChild(trabajoElement);
    });
  }
}

// Cargar los trabajos de los años 2024 y 2023
cargarTrabajos(2024);
cargarTrabajos(2023);
cargarTrabajos(2022);
cargarTrabajos(2021);
cargarTrabajos(2020);
cargarTrabajos(2019);
cargarTrabajos(2018);
cargarTrabajos(2017);
cargarTrabajos(2016);

// Selecciona todos los contenedores de años
const yearContainers = document.querySelectorAll(".year-container");

yearContainers.forEach((container) => {
  container.addEventListener("click", () => {
    // Encuentra el div "year-answer" relacionado
    const yearAnswer = container.nextElementSibling;

    if (yearAnswer) {
      // Alterna la clase "hide"
      yearAnswer.classList.toggle("hide");
      // Alterna la clase "active" en el contenedor
      container.classList.toggle("active");
    }
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

window.addEventListener("scroll", () => {
  handleScrollGeneric(".contacto-form");
  handleScrollGeneric(".bg2-image");
  handleScrollGeneric(".proyectos-container");
});

// Run once on load
document.addEventListener("DOMContentLoaded", () => {
  handleScrollGeneric(".contacto-form");
  handleScrollGeneric(".bg2-image");
  handleScrollGeneric(".proyectos-container");
});
/*------COLLAPSED LIST AÑOS----------*/
document.querySelectorAll(".year-container").forEach((container) => {
  container.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    const isOpen = answer.classList.contains("show");

    if (!isOpen) {
      answer.classList.add("show");
      answer.style.maxHeight = "0px";
      requestAnimationFrame(() => {
        answer.style.maxHeight = answer.scrollHeight + "px";
      });
    } else {
      /*------------VER ACA PORQUE NO FUNCIONA---------*/
      answer.style.maxHeight = "0px";
      answer.classList.remove("show");
    }
  });
});
