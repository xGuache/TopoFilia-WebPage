// Esta funcion define el comportamiento de los popover - popups de las tarjetas de iformacion para el equipo de "El laboratorio"

import {infoData} from './pop-data.js';

const popover = document.getElementById('lab-popover-info');
const triggers = document.querySelectorAll('.modal-open');
const popcont = document.getElementById('lab-pop-cont');


function openPopover(triggerElement) {
   
    const card = triggerElement.closest('.cards-item');
    const infoId = card.dataset.modal;
    const data = infoData[infoId];

    // Cargar el contenido dinámico

    document.getElementById('lab-popover_img').src = data.popover_img;
    document.getElementById('lab-popover_img').alt = data.popover_nombre;

    document.getElementById('lab-popover_nombre').textContent = data.popover_nombre;
    document.getElementById('lab-popover_identitario').textContent = data.popover_identitario;
    document.getElementById('lab-popover_cuerpo').textContent = data.popover_cuerpo;

    // Obtener la posición de la tarjeta (ancla)
    const rect = card.getBoundingClientRect();


    // Calcular la posición absoluta en el documento (sumando el scroll y navbar)

    const navBar = document.querySelector('.headnav-main'); 
    const navHeight = navBar ? navBar.offsetHeight : 0;
    const navBarAbsoluteBottom = window.scrollY + navHeight;
    const targetTop = rect.top + window.scrollY;


    // Aplicar la posicion en el documento del popover.

    const popoverHeight = popover.offsetHeight; // Necesario para centrarlo


   const anchoActual = window.innerWidth;
    
    // Define cuando se comporta como popover o popup para responsive.

    const breakpointMovil = 768; // Tamaño de pantalla

    let finalTop;

   if (anchoActual <= breakpointMovil) {
        
        popover.style.top = '0';

    } else {

        if (rect.top < navHeight) {
        
                // El Popover debe empezar justo debajo del Nav Bar.
                finalTop = navBarAbsoluteBottom + 5; // +5px para un pequeño margen de separación
                
            } 
        else { finalTop = targetTop + 5;}

            popover.style.top = `${finalTop}px`; // 10px debajo de la tarjeta
            //popover.style.left = `${targetLeft}px`; // A la misma izquierda que la tarjeta
    }
  



    // Mostrar el pop over
    popover.classList.add('mostrar-modal');
}


//Escucha el click de cada boton en el grid.

triggers.forEach(button => {
    button.addEventListener('click', (e) => {
        
        // Abre el popover para el botón clickeado

        openPopover(e.currentTarget);
        e.stopPropagation(); // Evita que el click se propague al documento
    });
});


// Cierre al hacer click fuera del popover (comportamiento modal/popup)

document.addEventListener('click', (e) => {

    // Si el popover está activo Y el click fue fuera del popover y fuera de un trigger
    if (popover.classList.contains('mostrar-modal') && !popcont.contains(e.target)) {
        popover.classList.remove('mostrar-modal');
    }
});


window.addEventListener('resize', () => {
        // Re-calcula la posición del popover solo si está visible cuando cambia de tamaño la pantalla
        if (popover.classList.contains('mostrar-modal')) {
            popover.classList.remove('mostrar-modal');
        }
    });