//declaracion de variables eje
var contador = 0;
//declaro una variable sucedanea
var total =0;

function incrementarClick() {

    sumarClick(++contador);
    venta();
    
}

function venta() {
    total =(contador*103.99);
    document.getElementById('resultado').innerHTML= 'Importa a abonar:' + total.toFixed(2) + '€'
}

function sumarClick(contador){
      document.getElementById('nºClicks').innerHTML=(contador)
}

function borrar() {
    contador = 0;
    document.getElementById('nºClicks').innerHTML = (contador);
    document.getElementById('resultado').innerHTML = (contador);


}


function comprar(){
   /*  location.href='ejercicio5-variablesFuncion.html' */
    document.getElementById('comprar').href='https://www.wetsuitoutlet.es/wetsuits-cx-1.html'


}