//1º declaro varible
var contador = 0;
//2 variable sucedanea
var incrementar = 0;
//A] ejecucion de contador sin funcion variable
function incrementarClick() {
    incrementar = (++contador);
    document.getElementById('resultado').innerHTML = (incrementar)

}
function borrarClick() {
    contador = 0;
    document.getElementById('resultado').innerHTML = (contador)

}

//B] ejecucion con funcion variable, la escucha a eventos

function incrementarClick2() {
    sumarClick(++contador);// Funcion variable

}

function sumarClick(contador){
        document.getElementById('clicks').innerHTML = (contador)
}

function borrarClick2() {
    contador = 0;
    sumarClick(contador)

}


