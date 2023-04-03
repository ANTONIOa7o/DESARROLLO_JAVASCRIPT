/*
Calculo de crédito, interés simple
crt = crédito redito tiempo(año natural)
Condiciones previas:
    Tramos de crédito:
        * hasta 24 meses tipo de interes a 6%
        * hasta 60 meses tipo de interees al 9%
        * a partir de 60 meses interes del 12%
    formula debengo de interes =  capital inicial * tasa de interes * tiempo(años)   

*/



function calcular() {
    //1º Variables eje
    var capital =parseFloat(prompt('Introduce cantidad solicitada:'));
    var tiempo = parseInt(prompt('Meses a pagar comodamente'));
    //2 variable residual
    var interes = 0;
    var pagoInteres=0;
    var couta =0;

    //------------>Caragadas las variables interviene la linea siguiente
    if (tiempo <=24) {
        interes = 0.06;
    } else if(tiempo <=60) {
        interes = 0.09;
    }else{
        interes = 0.12
    }
 pagoInteres= (capital*interes*(tiempo/12));
 couta = (capital+pagoInteres)/tiempo
 //Finalizacion y visualizacion de las variables
 document.getElementById('resultado').innerHTML=
 'Credito solicitado: ' + capital +'€' + '<br>'+
 'Tipo de interes: ' + interes*100+'%'+ '<br>'+
 'Tiempo a pagar: ' + tiempo + ' meses'+ '<br>'+
 'Intereses a devengar: ' + pagoInteres + '€';

 document.getElementById('resultado1').innerHTML=
 'Total de cuota a pagar: ' + couta.toFixed(2) + '€'
}

function guardar(){
    window.print()
}