function validarDatos() {
    // Obtener el valor ingresado en el campo de usuario
    let usuario = document.getElementById("usuario").value;
    
    // Obtener el valor ingresado en el campo de contraseña
    let pass = document.getElementById("password").value;
    
    // Obtener el elemento donde se mostrará el mensaje de error
    let mensajeError = document.getElementById("mensajeError");
    
    // Definir el usuario y la contraseña correctos
    const usuarioValido = "user";
    const passCorrecta = "1234";
    
    // Verificar si el usuario y la contraseña ingresados son correctos
    if (usuario === usuarioValido && pass === passCorrecta) {
        // Si son correctos, redirigir al usuario a la página de inicio
        window.location.href = "/Inicio.html";
        return false; // Evitar que el formulario se envíe
    } else {
        // Si son incorrectos, mostrar un mensaje de error
        mensajeError.innerText = "Usuario o contraseña incorrecta";
        return false; // Evitar que el formulario se envíe
    }
}
