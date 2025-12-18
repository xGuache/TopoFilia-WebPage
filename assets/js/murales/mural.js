//Comportamiento scroll horizontal con la rueda del raton sobre los murales

const scrollDiv = document.getElementById('mural-scroll-container');
    scrollDiv.addEventListener('wheel', (e) => {
      e.preventDefault(); // Evita el scroll vertical
      scrollDiv.scrollLeft += e.deltaY; // Aplica el scroll horizontal
      });