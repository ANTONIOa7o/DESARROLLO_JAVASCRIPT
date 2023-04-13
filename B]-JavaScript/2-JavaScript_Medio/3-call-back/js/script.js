

/*
            ============
              callback
            ============
   Es una funcion, donde es pasado como argumento a otra funcion, para que sea
   'llamada de nuevo'(callback) y en un momento posterior
   Su surgimiento está dentro del desarrollo de aplicaciones que ya operan de forma
   sincronizada
*/

/**
 * Origen del callback
*/
const ciudades =['Madrid','Londres','Paris','Viena','Pogdorica']

//Con estructura recomendada

ciudades.forEach(ciudad => {
    console.log(ciudad)
});

console.log('-----------------------');

//Con estructura con una funcion definida

function llamada(ciudad) {
    console.log(ciudad)
}
ciudades.forEach(llamada);

console.log('---------------------')




//Agregramos elementos, modificando , o eleminando con control de tiempo

function nuevoPais(pais, callback) {
    setTimeout(function() {
        ciudades.push(pais);
        callback();
    }, 6000);
    
}

//Mostramos ejecucion

function mostrarPaises(){
    setTimeout(function(){
        let html=``;
        ciudades.forEach(function(ciudad){
            html+=`
            <li>${ciudad}</li>
            `
        });
        document.getElementById('resultado').innerHTML=html

    },4000)
}


nuevoPais('Alemania',mostrarPaises);

mostrarPaises();