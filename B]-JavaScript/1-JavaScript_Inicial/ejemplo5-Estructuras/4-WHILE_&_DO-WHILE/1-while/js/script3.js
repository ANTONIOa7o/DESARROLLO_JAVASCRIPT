
function acceso() {

    var clave = 'Helsinky';
    
    var intentos = false;
    var contador = 0;
    while (contador < 3 && intentos == false) {
        var claveAcceso = prompt('Introduce clave @dmin:');
        if (claveAcceso === clave) {
            intentos = true;
            document.getElementById('resultado').innerHTML = 'ACCESSO APROBADO...'

        }
        contador++
    }

    if(!intentos){
        document.getElementById('resultado').innerHTML='ACCESO DENEGADO, consulte al dept. Sistemas'
    }


}
document.oncontextmenu = function(){
    return false
}
