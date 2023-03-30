function abrir() {
    var hora = new Date()
    document.getElementById(`resultado`).innerHTML=
    hora.getHours() + ':' + hora.getMinutes() + ':' + hora.getMinutes();
}

function cerrar() {
    document.getElementById(`resultado`).innerHTML=''
}