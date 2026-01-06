document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LÓGICA DE NAVEGACIÓN (PARA QUE NO BAJE LA PÁGINA) ---
    const enlaces = document.querySelectorAll('nav a');
    const secciones = document.querySelectorAll('section');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault(); // Detiene el salto brusco hacia abajo
            
            // Obtenemos el ID de la sección (ejemplo: #instalaciones)
            const idTarget = this.getAttribute('href').substring(1);
            
            // Quitamos la visibilidad a todas las secciones
            secciones.forEach(sec => sec.classList.remove('seccion-activa'));
            
            // Mostramos solo la sección que pediste
            const seccionDestino = document.getElementById(idTarget);
            if (seccionDestino) {
                seccionDestino.classList.add('seccion-activa');
            }
            
            // Mantenemos la pantalla arriba para ver el logo y el menú
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});

// --- 2. LÓGICA DEL CATÁLOGO (TUS FUNCIONES ORIGINALES) ---
let paginaActual = 1;
const totalPaginas = 72;

function actualizarImagen() {
    // Genera la ruta: images/Catalogoodontoplus_page-0001.jpg, etc.
    const ruta = `images/Catalogoodontoplus_page-${String(paginaActual).padStart(4,'0')}.jpg`;
    document.getElementById("catalogoImagen").src = ruta;
    document.getElementById("paginaActual").textContent = paginaActual;
    document.getElementById("paginaInput").value = paginaActual;
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
    const pagina = parseInt(document.getElementById("paginaInput").value);
    if (pagina >= 1 && pagina <= totalPaginas) {
        paginaActual = pagina;
        actualizarImagen();
    } else {
        alert("Por favor ingrese un número de página válido entre 1 y 72");
    }
}
