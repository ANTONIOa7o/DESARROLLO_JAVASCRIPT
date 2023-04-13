//Declaramos la variable
var mapa;
function mostrarMapa() {
    /* 1º Establecer los criterios de geolocalizacion, ed: comprobrar que nuestro
    cliente (browser) que soporta la localizacion el dispositivo */
    if (navigator.geolocation) {
        /*2º Criterios de geolocalizacion, optener la pósicion y control de errores*/
        navigator.geolocation.getCurrentPosition(mostrarLocalizacion, manejarError);
    } else {
        alert('Su dispositivo o navegador no acceden a la geolocalizacion');
    }
    /*3º otro elemento que nos ofrece es la configuracion de las opciones*/
    var opciones = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP//TERRAIN, SATELLITE, HYBRID
    };

    mapa = new google.maps.Map(document.getElementById('resultado'), opciones);
}

function mostrarLocalizacion() {//true
    /*4º Definir la localizacion, la idea principal es plasmar las coordenadas*/
    //obtenemos las coordenadas    
    var pos = new google.maps.LatLng(40.43508344914198, -3.6519818022188058);
    //a) Definir la ubicacion, dando estructura a esas coordenadas, con TEXTO
    var info = new google.maps.InfoWindow({
        map: mapa,
        position: pos,
        content: 'CfC'//una vez leido el mapa, la posicion, ahi establecerá un texto
    });
    //b) Definir la ubicacion, dando estructura a las coordenadas, con marca o imagen
    var marca = new google.maps.Marker({
        map: mapa,
        position: { lat: 40.43508344914198, lng: -3.6519818022188058 },
        title: 'Negocio'
    })
    /*5º centrar la posicion del objeto */
    mapa.setCenter(pos)
}


function manejarError(error) {//true

    switch (error.code) {

        case error.PERSMISSION_DENIED:
        alert('Permiso denegado..');
            break;
        case error.TIME_OUT:
            alert('Tiempo de espera agotado...')
            break;
        case error.POSITION_UNVAILABLE:

            break;
        case error.UNKNOWN_ERROR:
        alert('Error controlado #202')
            break;
        default:
            alert('No hay conexion...')
            break;
    }

}