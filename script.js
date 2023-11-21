function volverHome() {
    window.location.href = "../../index.html";
}


const textarea = document.getElementById('text-area-form');
const limpiarBoton = document.getElementById('limpiarTextarea');

// Agregar un controlador de eventos al botón
limpiarBoton.addEventListener('click', function() {
  textarea.value = ''; // Limpiar el contenido del textarea
});