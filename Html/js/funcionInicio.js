// Definición de un arreglo de frases que se mostrarán en el campo de entrada
const texto = [
    "El viaje de tus sueños, solo está a la vuelta de la esquina.",
    "Solo un clic y estarás en tu viaje deseado.",
    "Una gran aventura se avecina en tu próximo viaje."
];

// Inicialización de índices para controlar la posición de la letra y la frase actual
let indiceLetra = 0;
let indiceFrace = 0;

// Obtención del elemento de entrada donde se mostrará el texto
let input = document.getElementById("slogan");

/**
 * Función que simula la escritura de una frase en el campo de entrada
 */
function escribirSlogan() {
    // Verifica si aún hay letras por escribir en la frase actual
    if (indiceLetra < texto[indiceFrace].length) {
        // Agrega la siguiente letra al valor del campo de entrada
        input.value += texto[indiceFrace].charAt(indiceLetra);
        // Incrementa el índice de la letra
        indiceLetra++;
        // Llama a la función nuevamente después de 150 milisegundos
        setTimeout(escribirSlogan, 150);
    } else {
        // Si la frase está completa, espera 3 segundos antes de borrar el texto
        setTimeout(borrarTexto, 3000);
    }
}

/**
 * Función que borra el texto actual y prepara la siguiente frase
 */
function borrarTexto() {
    // Limpia el valor del campo de entrada
    input.value = "";
    // Restablece el índice de la letra
    indiceLetra = 0;
    // Actualiza el índice de la frase, pasando a la siguiente o volviendo al inicio
    indiceFrace = (indiceFrace + 1) % texto.length;
    // Llama a la función para escribir la siguiente frase después de 2 segundos
    setTimeout(escribirSlogan, 2000);
}

// Inicia el proceso de escritura de la primera frase
escribirSlogan();
