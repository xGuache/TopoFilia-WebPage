import {infoData} from './pop-data.js';

const popover = document.getElementById('popover-info');
const triggers = document.querySelectorAll('.modal-open');
const popcont = document.getElementById('pop-cont');


function openPopover(triggerElement) {
   
    const card = triggerElement.closest('.cards-item');
    const infoId = card.dataset.modal;
    const data = infoData[infoId];

    // 1. Cargar el contenido dinámico

    document.getElementById('popover_img').src = data.popover_img;
    document.getElementById('popover_img').alt = data.popover_nombre;

    document.getElementById('popover_nombre').textContent = data.popover_nombre;
    document.getElementById('popover_identitario').textContent = data.popover_identitario;
    document.getElementById('popover_cuerpo').textContent = data.popover_cuerpo;

    // 2. Obtener la posición de la tarjeta (ancla)
    const rect = card.getBoundingClientRect();

    // 3. Calcular la posición absoluta en el documento (sumando el scroll y navbar)
    const navBar = document.querySelector('.headnav-main'); 
    const navHeight = navBar ? navBar.offsetHeight : 0;
    const navBarAbsoluteBottom = window.scrollY + navHeight;
    const targetTop = rect.top + window.scrollY;
    //const targetLeft = rect.left + window.scrollX;

    // 4. Aplicar las coordenadas al Popover (ejemplo: aparece debajo de la tarjeta)
    const popoverHeight = popover.offsetHeight; // Necesario para centrarlo


   const anchoActual = window.innerWidth;
    
    // Define tus propios breakpoints (puntos de quiebre)
    const breakpointMovil = 768; 

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
  



    // 5. Mostrar
    popover.classList.add('mostrar');
}


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
    if (popover.classList.contains('mostrar') && !popcont.contains(e.target)) {
        popover.classList.remove('mostrar');
    }
});


window.addEventListener('resize', () => {
        // Re-calcula la posición del popover solo si está visible
        if (popover.classList.contains('mostrar')) {
            popover.classList.remove('mostrar');
        }
    });