//Pantalla de cARGA

    const MIN_TIEMPO = 3000; // mínimo 3 segundos
    const inicio = Date.now();

    window.addEventListener('load', () => {
      const tiempoPasado = Date.now() - inicio;
      const restante = Math.max(0, MIN_TIEMPO - tiempoPasado);

      setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('main').style.visibility = 'visible';
        document.body.style.overflow = 'auto';
      }, restante);
    });

    
    //Ubica el Scroll en la mitad
    const hijo = document.getElementById('slide_6');
    hijo.scrollIntoView({ behavior: 'smooth', inline: 'center' });



    //Usa la rueda del mouse para scrolear
    const scrollDiv = document.getElementById('In-Slider');
    scrollDiv.addEventListener('wheel', (e) => {
      e.preventDefault(); // Evita el scroll vertical
      scrollDiv.scrollLeft += e.deltaY; // Aplica el scroll horizontal
    });


    //Funcion de botones
    const container = document.getElementById('In-Slider');
    const items = container.querySelectorAll('.slide');
    let currentIndex = 5;

    function scrollToItem(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex >= items.length) currentIndex = items.length - 1;

      const item = items[currentIndex];
      const containerCenter = container.offsetWidth / 2;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const scrollPosition = itemCenter - containerCenter;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }