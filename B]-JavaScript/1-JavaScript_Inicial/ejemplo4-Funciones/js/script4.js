/*
RECOGIDA DE DATOS CON EL .value

Con la propiedad value, podremos acceder al valor recogido en los input, alli
donde apuente el id, y el metodo tambien que nos ayuda a dirigir y a apuntar al 
doctype será getElementeById('')
Sintaxis:
    document.getElementById('nombreId-input').value
    -Sin olvidar que seguimos recogiendo string-
*/
function entrar() {

    //1º definimos las variables y recogemos los datos, .value
    var miNombre = document.getElementById('nombre').value;
    var miapellido = document.getElementById('apellido').value;
    var eMail =document.getElementById('email').value;
    //2º partiendo del mismo metodo pero con propiedad distinta .innerhTML
    document.getElementById('resultado').innerHTML=
    
    'AUTORIZACION A: ' + miNombre + ' ' + miapellido + ' ' + ' con el email asociado: ' + eMail;
    
}