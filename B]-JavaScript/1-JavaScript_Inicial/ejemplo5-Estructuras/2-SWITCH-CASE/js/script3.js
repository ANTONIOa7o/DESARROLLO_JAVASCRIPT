function inicioReloj() {
    //1º  Declaracion de variables
    var hoy = new Date()
    //var maria;
    var horas = hoy.getHours();
    var minutos = hoy.getMinutes();
    var segundos = hoy.getSeconds();

    var dia = hoy.getDate();
    var mes = hoy.getMonth();
    var año = hoy.getFullYear();

    //Funcion de las decenas, dandole realidad, parámetros
    segundos = decenas(segundos);
    minutos = decenas(minutos);
    horas = decenas(horas);

    //Funcion traida a ejecutar horas, compensando 24 horas 
    horas =doceHoras(horas)
  
    //Funcion de antes del meridiano y despues
    apm = meridianoAntesDespues(horas)

    document.getElementById('reloj').innerHTML = '' + horas + ':' + minutos + ':' + segundos + ' ' + apm
    //maria = 'Lucia'
    switch (mes) {
        case 0:
            mes = 'ENERO'
            break;
        case 1:
            mes = 'FEBRERO'
            break;

        case 2:
            mes = 'MARZO'
            break;

        case 3:
            mes = 'ABRIL'
            break;

        case 4:
            mes = 'MAYO'
            break;

        case 5:
            mes = 'JUNIO'
            break;

        case 6:
            mes = 'JULIO'
            break;

        case 7:
            mes = 'AGOSTO'
            break;

        case 8:
            mes = 'SEPTIEMBRE'
            break;

        case 9:
            mes = 'OCTUBRE'
            break;

        case 10:
            mes = 'NOVIEMBRE'
            break;

        case 11:
            mes = 'DICIEMBRE'
            break;


        default:
            mes = 'mes desconocido o #error 404'
            break;
    }
    document.getElementById('calendario').innerHTML = dia + ' ' + mes + ' ' + año;


    var t = setTimeout(function () { inicioReloj() }, 1000);//a)
    //Ejecucion de funciones a partir de un parametro de tiempo definido
    /*
    Dos ejecuciones:
    a)Funcion clasica
        seTimeout(funcion(){funtionAllamar(),....},temporizador en milisegundo)
    b)Funcion arrow(Callback)
    setTimeout(() => {
        inicioReloj()
    }, timeout);
    */
}

//Funciones de trabajo independiente, abstracta x + y = n

function decenas(x) {
    if (x < 10) {
        x = '0' + x
    }
    return (x)
}
function meridianoAntesDespues(x) {
    if (x < 12) {
        apm = 'am ☀ '
    } else {
        apm = 'pm 🌙'
    }
    return apm
}

function doceHoras(x) {
    if (x > 12) {
        x = x-12;

    } return x;
}
