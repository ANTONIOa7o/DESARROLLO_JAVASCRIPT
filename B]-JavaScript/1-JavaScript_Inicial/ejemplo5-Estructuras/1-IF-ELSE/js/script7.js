//declaracion de variables
var estiloBorde =false;//no tiene borde
var estiloColor=false;//no tiene color

var estiloSombra=false;//no tiene sombra
var numero =0;
if (numero > 8) {
    
}
function borde(){
    if (estiloBorde==false) {
        document.getElementById('resultado').style.border='3px solid black';
        estiloBorde=true
    } else {
        document.getElementById('resultado').style.border='none'
        estiloBorde=false
    }
}

function color() {
    if (!estiloColor) {//condicion if siempre parte de la condicion true-
        document.getElementById('resultado').style.backgroundColor='green';
        estiloColor=true
    } else {
        document.getElementById('resultado').style.backgroundColor='#2196f3';
        estiloColor=false;
    }
}
/*
Elementos asociativos de js a css, a través de la propiedad className,
*/
function sombra() {
    if (!estiloSombra) {
        document.getElementById('resultado').className='sombra';
        estiloSombra=true
    } else {
        document.getElementById('resultado').className= null;
        estiloSombra=false;
    }
    
}