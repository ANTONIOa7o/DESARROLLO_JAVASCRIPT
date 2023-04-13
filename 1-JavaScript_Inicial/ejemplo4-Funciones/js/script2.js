//variables globales-eje
var n1=parseInt(prompt('Introduce primer nº:'));
var n2=parseInt(prompt('Introduce segundo nº:'));
//

function sumar() {
    //variable local-sucedanea
    var resultado = n1 + n2;
    swal('el resultado de la suma es: ' + resultado);
}

function restar() {
    swal('el resultado de la resta es: ' + (n1-n2));
    
}

function multiplicacion(n1,n2) {
    //Al acceder a las variable globales, realmente lo que se está produciendo es lo siguiente
    swal('el resultado de la multiplicacion es: ' +(n1*n2));
}

function division(n1,n2) {
    swal('El resultado de la division es: ' + (n1/n2));
}