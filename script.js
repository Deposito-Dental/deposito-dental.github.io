document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Cambiar pestaña activa
            links.forEach(l => l.classList.remove('activo'));
            link.classList.add('activo');

            // Cambiar sección visible
            sections.forEach(section => {
                section.classList.remove('seccion-activa');
            });
            document.getElementById(targetId).classList.add('seccion-activa');

            window.scrollTo(0, 0);
        });
    });
});

// Catálogo
let paginaActual = 1;
const totalPaginas = 72;

function actualizarImagen() {
    const num = String(paginaActual).padStart(4, '0');
    document.getElementById("catalogoImagen").src = `images/Catalogoodontoplus_page-${num}.jpg`;
    document.getElementById("paginaActual").textContent = paginaActual;
}

function siguientePagina() { if (paginaActual < totalPaginas) { paginaActual++; actualizarImagen(); } }
function anteriorPagina() { if (paginaActual > 1) { paginaActual--; actualizarImagen(); } }
