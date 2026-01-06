document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            links.forEach(l => l.classList.remove('activo'));
            sections.forEach(s => s.classList.remove('seccion-activa'));

            link.classList.add('activo');
            document.getElementById(targetId).classList.add('seccion-activa');

            window.scrollTo(0, 0);
        });
    });
});

let paginaActual = 1;
const totalPaginas = 72;

function actualizarImagen() {
    const num = String(paginaActual).padStart(4, '0');
    document.getElementById("catalogoImagen").src = `images/Catalogoodontoplus_page-${num}.jpg`;
    document.getElementById("paginaActual").textContent = paginaActual;
    document.getElementById("paginaInput").value = paginaActual;
}

function siguientePagina() { if (paginaActual < totalPaginas) { paginaActual++; actualizarImagen(); } }
function anteriorPagina() { if (paginaActual > 1) { paginaActual--; actualizarImagen(); } }
function irAPagina() {
    const val = parseInt(document.getElementById("paginaInput").value);
    if (val >= 1 && val <= totalPaginas) { paginaActual = val; actualizarImagen(); }
}
