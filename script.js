// 1. NAVEGACIÓN CORREGIDA (Sin saltos feos)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            // Quitamos activo de otros
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('activo'));
            document.querySelectorAll('section').forEach(s => s.classList.remove('seccion-activa'));
            
            // Activamos el actual
            this.classList.add('activo');
            targetSection.classList.add('seccion-activa');

            // En lugar de ir arriba del todo (0,0), vamos al inicio del contenedor
            // Esto evita que la página "salte" visualmente de forma brusca
            const headerHeight = document.querySelector('header').offsetHeight;
            window.scrollTo({
                top: headerHeight - 20, 
                behavior: 'smooth'
            });
        }
    });
});

// ZOOM DEL CATÁLOGO
const areaZoom = document.getElementById('areaZoom');
const imgZoom = document.getElementById('catalogoImagen');

if(areaZoom && imgZoom) {
    areaZoom.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = areaZoom.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        imgZoom.style.transformOrigin = `${x}% ${y}%`;
    });

    areaZoom.addEventListener('mouseleave', () => {
        imgZoom.style.transformOrigin = 'center center';
    });
}

// LÓGICA DE PÁGINAS
let paginaActual = 1;
const totalPaginas = 84;

function actualizarImagen() {
    const num = String(paginaActual).padStart(4, '0');
    const imagen = document.getElementById("catalogoImagen");
    if(imagen) {
        imagen.src = `images/Catalogoodontoplus_page-${num}.jpg`;
        document.getElementById("paginaInput").value = paginaActual;
    }
}

function siguientePagina() { if (paginaActual < totalPaginas) { paginaActual++; actualizarImagen(); } }
function anteriorPagina() { if (paginaActual > 1) { paginaActual--; actualizarImagen(); } }
function irAPagina() {
    const v = parseInt(document.getElementById("paginaInput").value);
    if (v >= 1 && v <= totalPaginas) { paginaActual = v; actualizarImagen(); }
}
