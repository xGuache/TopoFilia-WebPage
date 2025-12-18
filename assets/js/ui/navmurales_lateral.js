//Esta funcion define el comportamiento del navbar lateral para los murales


document.addEventListener('DOMContentLoaded', function() {

    //Definicion de variables
    
    const navbar = document.getElementById('headnav-mural-main');
    const toggleBtn = document.getElementById('headnav-mural-btn');
    const header =  document.querySelector('header')

    // Controla si se oculta o muestra el navbar

    function toggleNavbar() {
       
        navbar.classList.toggle('mostrar-navbar');
        header.classList.toggle('mostrar-navbar');

        //Controla el comportamiento del boton

        if (navbar.classList.contains('mostrar-navbar')) {
            toggleBtn.textContent = '|||'; // Abierto
            toggleBtn.classList.remove('btn_color');
        } else {
            toggleBtn.textContent = '☰';
            toggleBtn.classList.add('btn_color'); // Cerrado
    
        }
    }

    toggleBtn.addEventListener('click', toggleNavbar);
});