var provincias = ['----','Madrid','Valencia','Sevilla','Barcelona']//un guiño a los arrays, variable con 4 elementos

//Recorrido de los elementos
for(var i = 0; i < provincias.length; i++ ){
    //
    var provinciaOpcion = new Option(provincias[i]);
    document.getElementById('volcadoProvincias').options[i]=provinciaOpcion

}

function seleccion(){
    /*
    Referenciar selectedIndex:
    apunta al indice de la opcion que se encuentra seleccionada
    */
    var mostrar = document.getElementById('volcadoProvincias').options[document.getElementById('volcadoProvincias').selectedIndex].text;//absorve concepto de innerText
    swal(' Has seleccionado: ' + mostrar);
}

