/*
Antecedentes:
la llegada de html 5, apoyandose en nuevas librerias, asociadas a JS
    - resolvia de manera mas rapida determinadas acciones a los desarrolladores
    - introduce una libreria , poder seleccionar elementos del html, concebidos
    igual que en css (selectores), surgiendo metodos como:
        a) querySelector()
            Tendrá en ensencia una estructura de seleccion parecida a getElementeById
            con la salvedad que me permitirá tener la posibilidad de apuntar a varios
            elementos. 
            Apuntando a diversas clases, como parametros separado por ,
        b)querySelectorAll()
            Asi mismo a la vez asume el valor de metodos getElementsByTagName
*/
var botones = document.querySelectorAll('button');
/*
Al tener la variable que identifica los botones, 
    Tengo a mi disposicion estructuras que me ayudan a recorrer elementos tales
    como el for of, puedo guardar en una variable el recorrido de los mismo
Añadiendo categoria al evento, utilizando el archiconocido metodo:
    * addEventListener()
    Identificador de eventos, ser capaces de encontrar la interaccion del usuario,
    la ventaja tactica que ofrece es clara, al estar totalmente js
    Sintaxis:
    target.addEventListener('tipo de evento*', funcion a lanzar(),boolean );

    El boolean es opcional, por defecto es true. Nos ayuda definirá el orden
    del flujo de los eventos, siempre y cuando haya varios eventos posibles

*/

for ( x of botones) {
/*
el evento a la escucha del click, primera accion
*/
    x.addEventListener('click',function() {
        document.querySelector('.mensaje, .rojo').innerHTML='Has seleccionado: ' + this.innerHTML 


        /*
        variables funcionales
        */
    });
    
}
/*
Tipos de eventos principales:

    click: trabaja el boton
    focus: elementos que cogen prioridad, 
    load: el documento termina su carga
    mouseout: puntero fuera del elemento
    mouseover: puntero dentro del elemento
    mousedown: sobre el elemento y evento entero del click
    mouseup::fuera del elemento y evento entero del click
    dbclick:hace doble click sobre el elemento

*/
