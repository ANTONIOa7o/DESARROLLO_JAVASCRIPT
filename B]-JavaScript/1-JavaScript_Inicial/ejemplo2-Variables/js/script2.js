/**
 * =====================
 *   TIPOS DE VARIABLE
 * =====================
 * Introduccion:
 * Hemos de tener 4 concepto bien definidos:
 * a.declaracion
 * b.Tipo de variable
 * c.valor de la variable
 * d. Concepto de valor (=)
 * Podemos observar que el tipo y el valor en si mismos se definen
 */

//a
var texto;
var numero;
var buleana;
var igualdad;
//b y c
texto ='Cadena de Texto';
numero = 5;
buleana =true
//d la igualdad en las variables no es un valor absoluto, es simplemente una asignación
igualdad = 0
//Vemos aqui el + como elemento concatenador de variable y cadenas de texo
document.write('<h3>Variable string: '+ texto + '<br>'  );
document.write('<h3>Variable number: ' + numero + '<br>'  );
document.write('<h3>Variable boolean: ' + buleana + '<br>'  );

/*
Caracteres de escape o soluciones a visualizaciones de lectura y orden
Secuencia               Resultado
\n                      salto de linea
\t                      tabulacion
\simbolo                \' (poner comillas)
*/
alert( texto +'\n'+ numero+'\n' + buleana);
console.log( texto +'\n'+ numero+'\n' + buleana);
