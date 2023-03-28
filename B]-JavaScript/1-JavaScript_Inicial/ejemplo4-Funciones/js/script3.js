/*
        =========================
        metodo: .getElementById()
        =========================
Devolverá la estructura a un elemento que contenga el atributo Id='foco';
Este valor especificado traslada como vehiculo de referencia la estructura definida
Sintaxis:
dirijo al lugar donde comenza su busqueda, es decir, al documento
  ↓
document.getElementById('nombre del id, que define en html')
*/

/*Objeto Math() , que nos ofrece una funcionalidad: permitir operaciones matemáticas complejas
A diferencias de otros objetos, digamos este en concreto es estatico.
*/
function funcionesMath() {
    var numero = 8;
    document.getElementById('resultado').innerHTML=
    ' logaritmo: ' + Math.log(1000) + '<br>'+
    'Exponencial 8: ' + Math.exp(numero)+ '<br>'+
    'Raiz Cuadrada: ' + Math.sqrt(9)+ '<br>'+
    'Potencia 2^(elevado)8: '+ Math.pow(2,numero)+ '<br>'+
    'Valor absoluto: ' + Math.abs(-66845)+ '<br>'+
    'Redondeo a la Baja:'+ Math.floor(6.3458) + '<br>'+
    'Redondeo al Alza: '+Math.ceil(6.3458)+ '<br>'+
    'Redondeo Medio: ' + Math.round(6.3458)+ '<br>'+
    'Random o semilla: ' + Math.random()+ '<br>'+
    'Random o semilla: acotado entre el 0 y el 10 ' + Math.random()*10+ '<br>'+
    'Valor máximo: ' + Math.max(1,4,9,6)+ '<br>'+
    'Valor minimo:'+ Math.min(3,4,2,6)+ '<br>'+
    'Coseno Pi: '  + Math.cos(Math.PI)+ '<br>'+
    'Cambio de nº a String. ' + numero.toString();
}


