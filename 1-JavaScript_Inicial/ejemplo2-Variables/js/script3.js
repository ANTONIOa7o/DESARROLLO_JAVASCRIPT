// 1º Declaracion de variables implicita
var nombre =window.prompt('Introduce tu nombre');//window, necesito que veais de donde procede este metodo
console.log(nombre);
var apellidos= prompt('Introduce apellidos');
console.log(apellidos);
var edad =prompt('introduce edad');
console.log(edad);
/* 2º prompt(), metodo de la interface del propio usuario, generado
su propio sistema operativo
-Genera un dialogo que contiene de manera predeterminda un cuadro de texto
 de una linea , asociado a dos botones, aceptar y cancelar.
-Absorve el valor introducido, aceptar o intro, siempre recogera ese valor
como texto, string, cadena de texto
*/
document.write('<h3>Hola!</h3>'  +nombre+ ' ' + apellidos+ ' Bienvenido a mi Pagina' );
console.log('HOLA!' + '\n' + nombre+ ' ' + apellidos+ ' Bienvenido a mi Pagina');
