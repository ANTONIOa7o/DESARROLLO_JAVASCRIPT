function respuesta() {
    var miClave =document.getElementById('clave').value;
    var miEmail =email.value;//otra forma mas sencilla de recoger el valor id.value
    document.getElementById('resultado').innerHTML =
    'Bienvenido! Acceso permitido a: ' +  miEmail + ' con clave: ' + miClave + " Correcta!"
}

function limpiar(){
document.getElementById('resultado').innerHTML='';
}

function reDireccionar() {
    location.href='ejercicio5-variablesFuncion.html'
    
}