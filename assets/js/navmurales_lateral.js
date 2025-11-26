document.addEventListener('DOMContentLoaded', function() {


    const navbar = document.getElementById('headnav-main');
    const toggleBtn = document.getElementById('headnav-btn');

    // Mostrar y Ocultar

    function toggleNavbar() {
       
        navbar.classList.toggle('mostrar');
        

        if (navbar.classList.contains('mostrar')) {
            toggleBtn.textContent = '|||'; // Abierto
            toggleBtn.classList.add('btn_color');
        } else {
            toggleBtn.textContent = '☰';
            toggleBtn.classList.remove('btn_color'); // Cerrado
    
        }
    }

    toggleBtn.addEventListener('click', toggleNavbar);
});