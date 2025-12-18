//Funcion para comportamiento del los items del NavBar Principal en dispositivos moviles.



document.addEventListener('DOMContentLoaded', () => {
    const enlaces = document.querySelectorAll('.headnav-link');

    enlaces.forEach(enlace => {

        
        // Escucha el evento touchstart para detectar si se hizo touch sobre el elemento del navbar

        enlace.addEventListener('touchstart', function(e) {
            
            this.classList.add('is-active');

            setTimeout(() => {
                 this.classList.remove('is-active');
                 
            }, 200); // Se agreaga la clase con 200ms de retraso para ver la animación
          
        });
        

        // Escucha cuando se deja de hacer touch y remueve la clase de animacion.

        enlace.addEventListener('touchend', function() {
            this.classList.remove('is-active');
        });
    });

});


