document.addEventListener('DOMContentLoaded', () => {
    // Navegación sin scroll
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').substring(1);
            document.querySelectorAll('section').forEach(s => s.classList.remove('seccion-activa'));
            document.getElementById(id).classList.add('seccion-activa');
            window.scrollTo(0,0);
        });
    });
});

// Lógica del Catálogo
let paginaActual = 1;
const totalPaginas = 72;

function actualizarImagen() {
    // ESTA LÍNEA ES LA CLAVE: Crea el formato 0001, 0002...
    let formatoNumero = String(paginaActual).padStart(4, '0');
    let nuevaRuta = `images/Catalogoodontoplus_page-${formatoNumero}.jpg`;
    
    document.getElementById("catalogoImagen").src = nuevaRuta;
    document.getElementById("paginaActual").textContent = paginaActual;
    document.getElementById("paginaInput").value = paginaActual;
}

function siguientePagina() { if (paginaActual < totalPaginas) { paginaActual++; actualizarImagen(); } }
function anteriorPagina() { if (paginaActual > 1) { paginaActual--; actualizarImagen(); } }
function irAPagina() {
    let p = parseInt(document.getElementById("paginaInput").value);
    if (p >= 1 && p <= totalPaginas) { paginaActual = p; actualizarImagen(); }
}
