//Pantalla de Carga

    const MIN_TIEMPO = 3000; // mínimo 3 segundos
    const inicio = Date.now();

    window.addEventListener('load', () => {
      const tiempoPasado = Date.now() - inicio;
      const restante = Math.max(0, MIN_TIEMPO - tiempoPasado);

      setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('root').style.visibility = 'visible';
        document.body.style.overflow = 'auto';
      }, restante);
    });
