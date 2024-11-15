// Función para ajustar el color de fondo al hacer scroll
function adjustBackgroundOnScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const darkColor = Math.min(Math.floor(scrollPercent * 255), 255);
    document.body.style.backgroundColor = `rgb(${255 - darkColor}, ${255 - darkColor}, ${255 - darkColor})`;
}

// Agregar el evento de scroll para ajustar el fondo
window.addEventListener("scroll", adjustBackgroundOnScroll);

// Referencia al div
const div1 = document.querySelector('.div1');

// Configurar la transición para el fondo
document.body.style.transition = "background 1s ease";  // Agrega la transición de 0.5s al cambio de fondo

// Cambiar a gradiente azul-cian cuando el mouse está sobre el div
div1.addEventListener("mouseenter", () => {
    document.body.style.background = "linear-gradient(to bottom, blue, cyan, blue)";
});

// Restaurar el color de fondo al desplazarse cuando el mouse sale del div
div1.addEventListener("mouseleave", () => {
    document.body.style.background = ""; // Limpia el gradiente
    adjustBackgroundOnScroll(); // Restaura el color basado en el scroll
});

// Referencia al div
const div2 = document.querySelector('.div2');

// Cambiar a gradiente rojo a amarillo cuando el mouse está sobre el div
div2.addEventListener("mouseenter", () => {
    document.body.style.background = "linear-gradient(to bottom, red, #ffff00, red)";
});

// Restaurar el color de fondo al desplazarse cuando el mouse sale del div
div2.addEventListener("mouseleave", () => {
    document.body.style.background = ""; // Limpia el gradiente
    adjustBackgroundOnScroll(); // Restaura el color basado en el scroll
});

// Referencia al div
const div3 = document.querySelector('.div3');

// Cambiar a gradiente rojo-negro cuando el mouse está sobre el div
div3.addEventListener("mouseenter", () => {
    document.body.style.background = "linear-gradient(to bottom, black, black, red, black)";
});

// Restaurar el color de fondo al desplazarse cuando el mouse sale del div
div3.addEventListener("mouseleave", () => {
    document.body.style.background = ""; // Limpia el gradiente
    adjustBackgroundOnScroll(); // Restaura el color basado en el scroll
});

