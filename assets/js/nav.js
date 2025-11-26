document.addEventListener('DOMContentLoaded', () => {
    const enlaces = document.querySelectorAll('.headnav-link');

    enlaces.forEach(enlace => {
        // Escucha el primer toque
        enlace.addEventListener('touchstart', function(e) {
            
            // Previene el comportamiento predeterminado por un momento (para ver la animación)
            // e.preventDefault(); 
            
            // 1. Añade la clase de la animación
            this.classList.add('is-active');

            setTimeout(() => {
                 this.classList.remove('is-active');
                 // window.location.href = this.href; // Navegación manual
            }, 200); // 500ms para ver la animación
          
            
            // Mejor opción: Solo quita la clase al final de la interacción.
        });
        
        // Quitar la clase al terminar el toque (para no dejarlo activo)
        enlace.addEventListener('touchend', function() {
            this.classList.remove('is-active');
        });
    });

});
