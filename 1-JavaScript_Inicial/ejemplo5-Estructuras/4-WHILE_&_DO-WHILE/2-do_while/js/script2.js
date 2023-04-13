//1º escucha al evento
//target, lugar donde comienza la escucha
acceso.addEventListener('click', clave);

swal('Introduce clave correcta si no se bloqueará');

//2º genero la funcion dentro del evento

function clave() {
    // Recogida de datos

    do {
        var admin = document.getElementById('admin').value;
        var clave = document.getElementById('contraseña').value;

    } while ('1012' != clave || '@dmin' != admin);
}


function entrada() {

    window.location.replace('ejercicio1-Introduccion.html');
}
document.oncontextmenu = function(){
    return false
}