/*
a)Opcion Simple
*/
function ejecutar() {

    //Variable eje
    var opcion = document.getElementById('opcion').value;
    var respuesta = document.getElementById('resultado');
    //Variables sucedaneas


    switch (opcion) {
        case '1212045#dto30%':
            var precio = 9.95
            var dto = (0.3 * precio)
            var total = (precio - (dto)).toFixed(2)
            respuesta.innerHTML =
                'Tienes un <b style="color:red"> Dto </b> de: ' + dto + '€' +
                'sobre una pizza de :' + precio + '€' +
                ' Pagarás por tu pizza: ' + total + '€';
            break;
        case '1212050#dto50%':
            var precio = 18.90
            var dto = (0.5 * precio);
            var total = precio - (dto)
            respuesta.innerHTML =
                'Tienes un dto de: ' + dto + '€' +
                'sobre una pizza de :' + precio + '€' +
                ' Pagarás por tu pizza: ' + total + '€';
            break;

        default:
            swal('Codigo promocional incorrecto, intentalo de nuevo')
            break;
    }
}