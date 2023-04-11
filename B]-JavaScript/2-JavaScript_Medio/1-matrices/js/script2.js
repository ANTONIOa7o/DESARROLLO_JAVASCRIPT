function calcular() {
    var arrayNotas = document.getElementById('notas').value.split(/,/);
    var notaAlta = 0;
    var suma = 0;
    var media = 0;

    for (i = 0; i < arrayNotas.length; i++) {
        suma += parseInt(arrayNotas[i]);
    }
    console.log(suma)
    media = (suma / arrayNotas.length).toFixed(2)

    for (i = 0; i < arrayNotas.length; i++) {
        if (parseInt(arrayNotas[i]) > notaAlta) {
            notaAlta=arrayNotas[i]
            console.log(notaAlta[i])
        }
    }
    document.getElementById('resultado').innerHTML =
    'El ∑ de las notas son: ' + suma + '\n' +
    'La media es: ' + media + '\n' + '<br>'
    'Nota mayor es: ' + notaAlta
}

function reiniciar() {
    window.location.reload()
}