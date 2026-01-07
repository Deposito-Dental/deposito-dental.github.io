document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Quitar activo de todos
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('activo'));
        document.querySelectorAll('section').forEach(s => s.classList.remove('seccion-activa'));
        
        // Activar el actual
        this.classList.add('activo');
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.classList.add('seccion-activa');
        }
        
        window.scrollTo(0, 0);
    });
});

let paginaActual = 1;
function actualizar() {
    const num = String(paginaActual).padStart(4, '0');
    document.getElementById("catalogoImagen").src = `images/Catalogoodontoplus_page-${num}.jpg`;
    document.getElementById("paginaInput").value = paginaActual;
}
function siguientePagina() { if(paginaActual < 72) { paginaActual++; actualizar(); } }
function anteriorPagina() { if(paginaActual > 1) { paginaActual--; actualizar(); } }
function irAPagina() {
    let v = parseInt(document.getElementById("paginaInput").value);
    if(v >= 1 && v <= 72) { paginaActual = v; actualizar(); }
}
