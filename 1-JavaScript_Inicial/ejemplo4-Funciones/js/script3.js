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
   
    
    document.getElementById('resultado').innerHTML=//document.getElementById(apunta al lugar al que hace referencia).PropiedadGeneral
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
/**
 * Desde la llamada a una varible, metodos asociados al string, que nos permiten
 * manipular estas cadenas de manera directa.
 * Las cadenas de texto, una ventaja que ofrece almacenamiento de informacion (datos)
 * 
 */
function funcionesString(){
  var texto = 'JavaScript estructuras de cadena de texto';
  document.getElementById('resultado').innerHTML=//
  'Minusculas: ' + texto.toLocaleLowerCase()+ '<br>'+
  'Mayusculas: ' + texto.toLocaleUpperCase()+ '<br>'+
  'Localizacion de caracter @: ' + texto.indexOf('@') + '<br>'+
  'Longitud de la cadena de texto: ' + texto.length + '<br>'+
  'Valor del unicode: ' + texto.charCodeAt(texto.indexOf('J'));
}

/*
Objeto Date, integrado en el almacenamiento de fechas y horas,...etc y nos proporciona
igualmente metodos para manejarlos.
importante:
Hemos de asignar a la variable el objeto, como?
fecha = new Date
Automaticamente fecha, puede acceder a todos los metodos del objeto (fecha)

*/
function  funcionesDate() {
  var fecha = new Date();
  document.getElementById('resultado').innerHTML=
  '*fecha: ' + fecha.toLocaleDateString()+ '<br>'+
  'hora:'+ fecha.toLocaleTimeString()+ '<br>'+
  'milisengundo: ' + fecha.getMilliseconds() + '<br>'+
  'mes: ' + fecha.getMonth()+ '<br>'+// asociado a las posiciones de los elementos????
  '*Dia: ' + fecha.getDay();
}



