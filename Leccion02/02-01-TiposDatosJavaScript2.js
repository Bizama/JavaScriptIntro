// Concatenar cadenas 

var nombre = 'Javier';
var apellido = 'Bizama'; 

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Perez';
console.log(nombreCompleto2);

var x = nombre + ' ' + 1 + 0 + ' ' + apellido;
console.log(x);
// Expresiones se evaluan de izquiera a derecha, por eso toma al int como un string.

x = nombre +  (2 + 5);
console.log(x);
// El parentesis le da prioridad a la operación.

x = 2 + 4 + nombre;
console.log(x);
// Esto pasa porque las expresiones se evaluan de izquierda a derecha.
// Es un numero hasta que se encuentra con un string. Contexto de string. 



