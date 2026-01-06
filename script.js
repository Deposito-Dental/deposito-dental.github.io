document.addEventListener('DOMContentLoaded', () => {
    // --- LÓGICA DE NAVEGACIÓN (IDÉNTICA A LA CAPTURA) ---
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Ocultar todas las secciones y quitar clases activas
            sections.forEach(section => {
                section.classList.remove('seccion-activa');
            });

            // Mostrar solo la sección seleccionada
            const activeSection = document.getElementById(targetId);
            if (activeSection) {
                activeSection.classList.add('seccion-activa');
            }

            // Mantener la página arriba del todo
            window.scrollTo(0, 0);
        });
    });
});

// --- LÓGICA DEL CATÁLOGO (72 PÁGINAS) ---
let paginaActual = 1;
const totalPaginas = 72;

function actualizarImagen() {
    // Agrega los ceros automáticamente para nombres como: Catalogoodontoplus_page-0001.jpg
    const numeroFormateado = String(paginaActual).padStart(4, '0');
    const nuevaRuta = `images/Catalogoodontoplus_page-${numeroFormateado}.jpg`;
    
    const imagenElemento = document.getElementById("catalogoImagen");
    if (imagenElemento) {
        imagenElemento.src = nuevaRuta;
        document.getElementById("paginaActual").textContent = paginaActual;
        document.getElementById("paginaInput").value = paginaActual;
    }
}

function siguientePagina() {
    if (paginaActual < totalPaginas) {
        paginaActual++;
        actualizarImagen();
    }
}

function anteriorPagina() {
    if (paginaActual > 1) {
        paginaActual--;
        actualizarImagen();
    }
}

function irAPagina() {
    const input = document.getElementById("paginaInput");
    const valor = parseInt(input.value);
    
    if (valor >= 1 && valor <= totalPaginas) {
        paginaActual = valor;
        actualizarImagen();
    } else {
        alert("Por favor, ingresa un número entre 1 y 72");
    }
}
