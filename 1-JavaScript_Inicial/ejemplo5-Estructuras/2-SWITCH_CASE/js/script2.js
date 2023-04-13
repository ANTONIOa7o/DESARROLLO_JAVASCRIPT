
function menuPresiona() {
    var fecha = new Date()
    var dia = fecha.getDay()-1;
    console.log(dia);
    // Variable residual
    var menu = ''
    switch (dia) {
        case 0:
            menu = 'Cocido Madrileño'//0 es domingo Anglosajona
            break;
        case 1:
            menu = 'Cerrado por Descanso del personal'//1 lunes Anglosajona
            break;
        case 2:
            menu = 'Cocido Montañes'
            break;
        case 3:
            menu = 'Caldereta de Cordero'
            break;
        case 4:
            menu = 'Judiones a la Vasca'
            break;
        case 5:
            menu = 'Potage Gallego'
            break;
        case 6:
            menu = 'Paella Castellon'
            break;
        default:
            menu='Error de conexion'
            break;
    }
//Valor cargado del caso 
document.getElementById('resultado').innerHTML='<h3>El menú del dia es: </h3>' + menu



}