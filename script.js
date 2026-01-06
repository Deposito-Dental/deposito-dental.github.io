document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('activo'));
        document.querySelectorAll('section').forEach(s => s.classList.remove('seccion-activa'));
        this.classList.add('activo');
        const target = this.getAttribute('href');
        document.querySelector(target).classList.add('seccion-activa');
    });
});

let pagina = 1;
function actualizar() {
    const num = String(pagina).padStart(4, '0');
    document.getElementById("catalogoImagen").src = `images/Catalogoodontoplus_page-${num}.jpg`;
    document.getElementById("paginaInput").value = pagina;
    document.getElementById("paginaActual").textContent = pagina;
}
function siguientePagina() { if(pagina < 72) { pagina++; actualizar(); } }
function anteriorPagina() { if(pagina > 1) { pagina--; actualizar(); } }
function irAPagina() {
    let val = parseInt(document.getElementById("paginaInput").value);
    if(val >= 1 && val <= 72) { pagina = val; actualizar(); }
}
