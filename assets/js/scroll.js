const contenedorScroll = document.getElementById('Scroll-Container');


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


