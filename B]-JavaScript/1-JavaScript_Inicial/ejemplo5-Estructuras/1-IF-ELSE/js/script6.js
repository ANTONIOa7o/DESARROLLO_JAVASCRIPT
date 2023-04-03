/*
Tramos del imc
1º tramo <=18.5 imc Peso inferior a la normal, limites de extrema delgadez,
2º tramo  24.9 <= Peso estructural normal, limites de salubridad
3º tramo 29.9 <= Peso limite superior al normal, limites de obesidad
4º tramo de 29.1 > Peso limite disfuncion y obesidad
*/




function calcularImc() {
    //1º declaramos las variables ejes que vamso a utilizar
    var peso = parseFloat(datoPeso.value);
    var altura = parseFloat(datoAltura.value);
    //2º variables residual
    var imc = 0;
    
    var respuesta = document.getElementById('resultado');
    //Calculamos imc, a través de su formula imc = peso/altura2
    imc = peso / (Math.pow(altura, 2)).toFixed(2)
    console.log(imc);//Analisis y comprobacion del calculo
    if (imc <= 18.5) {
        respuesta.innerHTML = '<h4>RIESGO ALTO: </h4>' + imc + 'Limites de extrama delgadez'
    } else if (imc <= 24.9) {
        respuesta.innerHTML = '<h4> RIESGO 0:</h4> Salubridad estable '+imc
    } else if (imc <= 29.9) {
        respuesta.innerHTML = '<h4>RIESGO ALTO: </h4> Limites de grado de obesidad'+imc
    } else {
        respuesta.innerHTML = '<h4> PELIGRO!:</h4> Posible disfuncion y/o Obesidad'+imc
    }
    //Otra forma mas resumida de apuntar con el id directamente al html junto con su propiedad innerHtml
    resultadoImc.innerHTML= ' Tu imc es: ' + imc + 'kg/m'

}