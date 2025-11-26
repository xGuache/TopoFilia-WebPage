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


document.addEventListener('DOMContentLoaded', function() {
    // 1. Obtener referencias a los elementos
    const navbar = document.getElementById('navbar-lateral');
    const toggleBtn = document.getElementById('toggle-btn');

    // 2. Definir la función que alterna la clase
    function toggleNavbar() {
        // 🏆 CLAVE: .classList.toggle('abierto')
        // Si la clase existe, la quita. Si no existe, la añade.
        navbar.classList.toggle('abierto');
        
        // Opcional: Cambiar el texto/icono del botón al alternar
        if (navbar.classList.contains('abierto')) {
            toggleBtn.textContent = '|||'; // Muestra una "X"
        } else {
            toggleBtn.textContent = '☰'; // Muestra el icono de menú
        }
    }

    // 3. Asignar el evento de clic al botón
    toggleBtn.addEventListener('click', toggleNavbar);
});