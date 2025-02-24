// Inicializa el índice de la imagen actual en 0
let indexAlemania = 0;

/* Definición de las rutas de las imágenes que se mostrarán */
const imagenesAlemania = [
    "/Img/Img_Alemania/Imagen_1.png",
    "/Img/Img_Alemania/imagen_2.jpg",
    "/Img/Img_Alemania/imagen_3.jpg"
];

// Obtiene el elemento de la página donde se mostrará la imagen
const divimagenesAlemania = document.getElementById("imagenesAlemania");

/**
 * Función que actualiza la fuente de la imagen mostrada
 */
function imagenAlemania() {
    // Asigna la ruta de la imagen actual al atributo 'src' del elemento
    divimagenesAlemania.src = imagenesAlemania[indexAlemania];
}

// Configura un intervalo para cambiar la imagen cada 5 segundos
setInterval(() => {
    // Incrementa el índice y lo ajusta para que vuelva al inicio al llegar al final del arreglo
    indexAlemania = (indexAlemania + 1) % imagenesAlemania.length;
    // Actualiza la imagen mostrada
    imagenAlemania();
}, 5000);

// Inicializa la primera imagen al cargar la página
imagenAlemania();
