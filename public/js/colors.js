document.addEventListener('DOMContentLoaded', function () {
    // Obtén referencias a los elementos HTML
    const circle1 = document.getElementById('col-pink');
    const circle2 = document.getElementById('col-green');
    const circle3 = document.getElementById('col-grey');
    const coloredElements1 = document.querySelectorAll('.color-1');
    const coloredElements2 = document.querySelectorAll('.color-2');
    const coloredElements3 = document.querySelectorAll('.color-3');

    // Agrega event listeners para el clic en cada círculo
    circle1.addEventListener('click', function () {
        setColors(coloredElements1, 'color-1-pink');
        setColors(coloredElements2, 'color-2-pink');
        setColors(coloredElements3, 'color-3-pink');
    });

    circle2.addEventListener('click', function () {
        setColors(coloredElements1, 'color-1-green');
        setColors(coloredElements2, 'color-2-green');
        setColors(coloredElements3, 'color-3-green');
    });

    circle3.addEventListener('click', function () {
        setColors(coloredElements1, 'color-1');
        setColors(coloredElements2, 'color-2');
        setColors(coloredElements3, 'color-3');
    });

    // Función para establecer colores en elementos
    function setColors(elements, newColor) {
        // Itera sobre todos los elementos y aplica los cambios de color
        elements.forEach(element => {
            element.classList.remove('color-1', 'color-1-pink', 'color-1-green', 'color-2', 'color-2-pink', 'color-2-green', 'color-3', 'color-3-pink', 'color-3-green');
            element.classList.add(newColor);
        });
    }
});
