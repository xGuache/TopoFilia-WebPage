const scrollDiv = document.getElementById('Scroll-Container');
    scrollDiv.addEventListener('wheel', (e) => {
      e.preventDefault(); // Evita el scroll vertical
      scrollDiv.scrollLeft += e.deltaY; // Aplica el scroll horizontal
      });