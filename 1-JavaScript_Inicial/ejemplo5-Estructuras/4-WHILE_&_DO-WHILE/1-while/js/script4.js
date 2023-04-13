function ventaIncremento() {
    /*var recogida de dato, desde el id:
    a)  var num = document.getElementById('cantidadBotijos').value;
    a´) var num =cantidadBotijos.value;
    recogida de dato desde el atributo name ='';
                                    ⇓
    */
    var num = document.repetir.cantidad.value;
    /*
    Otra forma de pasar un texto a numero, sin utilizar el método parse()
    será asignarle a la variable el metodo Number()
    */
    var num = Number(num);
    var respuesta = document.getElementById('resultado');//Volcamos resultado
    var incrementa = 0;
    console.log(typeof (num))
    if (num < 1 || num > 5 || isNaN(num) == true) {//true
        respuesta.innerHTML = 'No ha introducido un numero de unidades validas, escribelo de nuevo'
    } else {
        while (incrementa < num) {
            incrementa++
            var precio = 10.95;
            var total = precio * incrementa;
            respuesta.innerHTML = '<strong> El importe a abonar será de: ' + total.toFixed(2) + '€'
        }
    }
}
 /*  const precio = 10.95
      var total = precio * num 
      respuesta.innerHTML = '<strong> El importe a abonar será de: ' + total.toFixed(2) + '€
  } */
