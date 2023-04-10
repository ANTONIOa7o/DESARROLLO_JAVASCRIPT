

function display() {
    //Asignado a la varieable respuesta el id='resultado';    
    var respuesta = resultado;

    switch (event.target.id) {//Llamada a un evento que apunta a los id
        case '1':
            respuesta.innerText = 'Pulsado planta Primera ';
            break;
        case '2':
            respuesta.innerText = 'Pulsado planta Segunda';
            break;
        case '3':
            respuesta.innerText = 'Pulsado planta Tercera';
            break;

        default:
            break;
    }

    /* Método de recorrido y busqueda de elementos predeterminados del DocType
    Dicho metodo será el getElementsByTagName('elemento predeterminado')
    */
    var botones = document.getElementsByTagName('button');

    /*
    Al tener la variable que identifica los botones, 
    Tengo a mi disposicion estructuras que me ayudan a recorrer elementos tales
    como el for in, puedo guardar en una variable el recorrido de los mismo
    */
    for (var indice in botones) {
        if (botones[indice].id == event.target.id) {
            //ha identificado el boton pulsado con el de la estructura, y me lo pase a rojo
            document.getElementById(event.target.id).className = 'rojo'
        } else {
            //el resto de botones los deje igual
            botones[indice].className = 'azul'
        }
    }
}



