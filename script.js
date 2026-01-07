// Navegación fluida con transición activada por clase
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover clases activas
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('activo'));
        document.querySelectorAll('section').forEach(s => s.classList.remove('seccion-activa'));
        
        // Activar link actual
        this.classList.add('activo');
        
        // Obtener la sección y mostrarla con la animación
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.classList.add('seccion-activa');
        }
        
        // Scroll suave al inicio del contenido
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Lógica de Zoom en imagen
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

// Lógica del Catálogo de Imágenes
let paginaActual = 1;
const totalPaginas = 72;

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
