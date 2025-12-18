//Esta funcion se usa para agregar animaciones a los elementos del mural o HOTSPOT para incentivar al usuario a interactuar

document.addEventListener('DOMContentLoaded', function() {
    
    const hotspots = document.querySelectorAll('.inside');

    const TIEMPO_MIN_ENTRE_DESTUELLO = 500; // Mínimo 3 segundos
    const TIEMPO_MAX_ENTRE_DESTUELLO = 500; // Máximo 8 segundos
    const DURACION_DESTUELLO = 2000;       // El destello dura 4 segundos (2 ciclos de 2s)

   

    // Agrega un destello en un hotspot aleatorio

    function activateRandomHotspotPulse() {
        if (hotspots.length === 0) return;

        // Desactiva cualquier pulso existente para no superponer

        hotspots.forEach(hotspot => hotspot.classList.remove('pulsating'));

        // Selecciona un hotspot aleatorio

        const randomIndex = Math.floor(Math.random() * hotspots.length);
        const randomHotspot = hotspots[randomIndex];

        // Activa la clase 'pulsating'
        
        randomHotspot.classList.add('pulsating');

        //console.log(`Hotspot "${randomHotspot.dataset.id}" pulsando.`);

        // Desactiva el pulso después de un tiempo definido
        setTimeout(() => {
            randomHotspot.classList.remove('pulsating');
        }, DURACION_DESTUELLO);
    }

    // Define cada cuanto se asigna el destello

    function scheduleNextPulse() {
        const randomTime = Math.random() * (TIEMPO_MAX_ENTRE_DESTUELLO - TIEMPO_MIN_ENTRE_DESTUELLO) + TIEMPO_MIN_ENTRE_DESTUELLO;
        
        // Programa el próximo destello
        setTimeout(() => {
            activateRandomHotspotPulse();
            scheduleNextPulse(); // Vuelve a programar el siguiente
        }, randomTime);
    }


    scheduleNextPulse();
});