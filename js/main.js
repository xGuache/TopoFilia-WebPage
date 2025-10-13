indow.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      const contenido = document.getElementById('contenido');

      // Oculta el loader y muestra el contenido
      loader.style.display = 'none';
      contenido.style.visibility = 'visible';
      document.body.style.overflow = 'auto';
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