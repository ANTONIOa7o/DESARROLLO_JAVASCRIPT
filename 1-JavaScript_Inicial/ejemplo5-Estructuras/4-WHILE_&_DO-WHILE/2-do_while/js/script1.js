

/* function jugar() {
    var numero = parseInt((Math.random() * 50))//Numeros aleatorios del 1 al 50, y parse a entero, para que pueda cumplirse las condiciones
    console.log(numero);
    var adivina = 0;
    var intentos = 5;

    do {
        adivina = parseInt(prompt('Adivina el nº entre 1 y 50'));
        if (adivina > numero) {
            swal(`te has pasado te quedarian: ${intentos--}  intentos`);
        }
        else if (adivina < numero) {
            swal(`te has quedado corto te quedarian: ${intentos--}  intentos`)
        }
    } while (adivina != numero && intentos > 0);

    if (numero == adivina) {
        swal('Enhorabuena ha acertado');
    } else {
        swal('Has perdido, se acabaron los intentos');
    }


} */