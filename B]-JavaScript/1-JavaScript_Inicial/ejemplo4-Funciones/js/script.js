/*
 *              ========================
                     LAS FUNCIONES
                ========================
        
        Entendidas y definidas como declaraciones de funciones o expresiones funcionales
        Constan de una palabra reservada function, seguida:
        1. nombre de la funcion (sensible a grafia,minuscula inicial)
        2.Lista de parámetros que la definen, entre parentesis y separados por coma (parametro1, parametro2,...)
        3.Acotacion, defina a traves de las grafias {} dentro de estas llaves donde se va 
        a definir la accion de la funcion
        sintasix:
        function nombreFuncion(parametros) {
            ejecucion de las expresion
            alert()
        }
 * 
        <<<<<<<<<<<<< VARIABLES >>>>>>>>>>>>>>
        =>Variables Globales
            -> Son globales se puede acceder a su contenido desde cualquier punto de su extension
            -> Se declaran fuera de cualquier estructura
            -> Permanece en la memoria adyacente cargada
            ->Uso: exclusivo en necesidad de trasversalidad
            ->Cercanas a las variables eje.
 */
//Variables global ⇓
        var nombre = prompt('Introduce tu nombre');

        function saludar() {
            swal('Hola! Bienvenido: ' + nombre ); 
        }

/**
 *         =>Variables locales
 *          -> Variables dentro del entorno de la propia funcion
 *          ->Su ejecucion carga a la llamada de la funcion
 *          ->Funcion deja de interactuar, la variable es desalojada de la memoria.
 *          ->No podremos acceder a la valor de las variables locales desde ningun otro ambito
 *             salvo en la propia funcion o declaracion funcional
 *          ->Cercanas a las variables sucedaneas
 */

        function despedir() {
            //Variable Local ⇓
            var apellido = 'Cuadrado'
            swal('Vuelve pronto!: ' + nombre + ' ' + apellido); 

        }