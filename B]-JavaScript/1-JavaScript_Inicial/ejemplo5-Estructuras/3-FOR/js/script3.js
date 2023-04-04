//Declaro la variable global
var inputNumero = numero;//string
console.log(inputNumero)


function algoritmo() {
    var numero = parseInt(inputNumero.value);//He filtrado la variable inputNumero de string a number
    console.log(numero)
    //variable residual
    var contenido = '';
    for (var i = 1; i <= 10; i++) {
        /*Gestionar el numero(1 al 20) con una estructura algoritmica*/
        contenido += 'base:'+ numero + 'x' + 'potencia:'+ i + '=' + Math.pow(numero,i) + '<br>'
        console.log(contenido)
    }
    document.getElementById('resultado').innerHTML = contenido
   

}