document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            // Quitar clase activo de los links y secciones
            links.forEach(l => l.classList.remove('activo'));
            sections.forEach(s => s.classList.remove('seccion-activa'));

            // Activar lo seleccionado
            link.classList.add('activo');
            document.getElementById(targetId).classList.add('seccion-activa');

            window.scrollTo(0, 0);
        });
    });
});

// LÓGICA DEL CATÁLOGO
let paginaActual = 1;
const totalPaginas = 72;

function actualizarImagen() {
    const numeroFormateado = String(paginaActual).padStart(4, '0');
    document.getElementById("catalogoImagen").src = `images/Catalogoodontoplus_page-${numeroFormateado}.jpg`;
    document.getElementById("paginaActual").textContent = paginaActual;
    document.getElementById("paginaInput").value = paginaActual;
}

function siguientePagina() { if (paginaActual < totalPaginas) { paginaActual++; actualizarImagen(); } }
function anteriorPagina() { if (paginaActual > 1) { paginaActual--; actualizarImagen(); } }
function irAPagina() {
    const val = parseInt(document.getElementById("paginaInput").value);
    if (val >= 1 && val <= totalPaginas) { paginaActual = val; actualizarImagen(); }
}
