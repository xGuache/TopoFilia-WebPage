// Esta funcion define el comportamiento de la posicion del scroll al abrir el mural para qeu se ubique en la mitad de este

const contenedorScroll = document.getElementById('mural-scroll-container');

document.addEventListener('DOMContentLoaded', (posicionarScroll()))
    

function posicionarScroll (){   

    const posGuardada = (contenedorScroll.scrollWidth) / 2;

    setTimeout(() => {
        contenedorScroll.scrollTo({
            top:0,
            left: posGuardada - 150,
            behavior: 'smooth'
        }), 20});

    
};


window.addEventListener('resize', () => {
        posicionarScroll ();
    });


