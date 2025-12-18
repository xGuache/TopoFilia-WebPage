//Esta funcion define el comportamiento de la previsualizacion de los murales en la pantalla principal

document.addEventListener('DOMContentLoaded', function() {
    const epopeya = document.querySelector('.epopeya');
    const soma = document.querySelector('.soma');

    // Función que aplica el efecto al hermano (target)
    
    function toggleEffect(targetElement, className, enable) {
        if (enable) {
            targetElement.classList.add(className);
        } else {
            targetElement.classList.remove(className);
        }
    }

    // Lógica para Epopeya (afecta a Soma)
    epopeya.addEventListener('mouseover', () => toggleEffect(soma, 'desactivado', true));
    epopeya.addEventListener('mouseout', () => toggleEffect(soma, 'desactivado', false));

    // Lógica para Soma (afecta a Epopeya)
    soma.addEventListener('mouseover', () => toggleEffect(epopeya, 'desactivado', true));
    soma.addEventListener('mouseout', () => toggleEffect(epopeya, 'desactivado', false));
});