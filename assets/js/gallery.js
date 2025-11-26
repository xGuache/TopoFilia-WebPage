document.addEventListener('DOMContentLoaded', function() {
    const epopeya = document.querySelector('.Epopeya');
    const soma = document.querySelector('.Soma');

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