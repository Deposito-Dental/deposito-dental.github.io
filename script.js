// Navegación entre secciones
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover clases activas
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('activo'));
        document.querySelectorAll('section').forEach(s => s.classList.remove('seccion-activa'));
        
        // Activar sección clickeada
        this.classList.add('activo');
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('seccion-activa');
        
        // Volver arriba al cambiar
        window.scrollTo(0, 0);
    });
});

// Lógica del Catálogo
let paginaActual = 1;
const totalPaginas = 72;

function actualizarImagen() {
    const numeroFormateado = String(paginaActual).padStart(4, '0');
    const imagen = document.getElementById("catalogoImagen");
    if(imagen) {
        imagen.src = `images/Catalogoodontoplus_page-${numeroFormateado}.jpg`;
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
    const inputVal = parseInt(document.getElementById("paginaInput").value);
    if (inputVal >= 1 && inputVal <= totalPaginas) {
        paginaActual = inputVal;
        actualizarImagen();
    }
}
