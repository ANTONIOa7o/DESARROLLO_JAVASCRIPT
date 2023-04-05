var telefonos= [
'+34-2-620101099',
'34 2 666000123',
'+34-2-62163822',
'+34-2-655423321',
'34-2-652985741',
'+56-2-765231478',
'+34-2-6594568741',
'+34-2-645778221'
];
/*Ante la necesidad de comparar estrictamente datos, nos apoyaremos 
en las llamadas expresiones regulares, que serán usadas como variables
de comparacion, en esta comparacion se cumple o no la expresion
*/
var expresionRegular =/^\+34(\-2\-|2)\d{9}$/;

/*
recorreremos todos los telefonos, guardandolos en una variable
*/
for (tfno of telefonos) {
    var fila ='<tr>';
    fila += '<td>'+ tfno + '</td>'
    fila += '<td>'+ expresionRegular.test(tfno) + '</td>'
    /*
    Metodo de comparacion para testear los datos con respecto a una expresion regular
    será:
    .test(elementos a testear)
    este metodo evalua con un bolean, donde true, es expresion correcta y false
    incorrecta
    */
   fila+='</tr>';
   


    document.getElementById('resultado').innerHTML+=fila
}
