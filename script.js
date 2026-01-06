document.addEventListener('DOMContentLoaded', () => {
    const enlaces = document.querySelectorAll('nav a');
    const secciones = document.querySelectorAll('section');

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault(); // Evita el salto de página
            
            // 1. Quitamos la clase activa a todas las secciones
            secciones.forEach(sec => sec.classList.remove('seccion-activa'));

            // 2. Buscamos la sección que corresponde al click
            const idTarget = this.getAttribute('href').substring(1);
            const seccionDestino = document.getElementById(idTarget);

            if (seccionDestino) {
                seccionDestino.classList.add('seccion-activa');
            }

            // 3. Mantenemos la vista siempre arriba
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
