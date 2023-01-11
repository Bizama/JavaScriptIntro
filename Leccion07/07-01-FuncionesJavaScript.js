miFuncion(2,6);
// La funcion se puede usar en cualquier parte del programa, incluso antes de definirla

// Nombre de las funciones es con camelCase
function miFuncion(a, b){ // a y b son los argumentos de la funcion
    console.log("SUMA: " + (a + b));
}

miFuncion(3, 4);
miFuncion(2, 3);
// los bloques de codigo no se terminan con punto y coma. 

// Palabra return.
function miFuncionReturn(a, b){
    return a + b
}

let suma = miFuncionReturn(2,3);
console.log(suma);

// Funciones de tipo Expresión.

// Como es ejecutable se termina con ; aunque tenga llaves
// let resultadoPrevio = x(4,5);
// Si se debe definir antes la funion tipo expresión para usarla.
// Declaracion funcion de tipo expresión
let x = function (a, b){return a + b};
let resultado = x(4,5);
console.log(resultado);

// Esto se usa mucho con HTML y JS.

// Funciones Self-invoking.

(function (){
    console.log('Ejecutando la funcion');
})();

(function (a,b){
    console.log('Ejecutando la funcion ' + (a+b));
})(3,4);
/* Este tipo de funciones puede ser util cuando trabajemos en proyectos
proyectos web y necesitemos que se ejecute una funcion a si 
misma en el momento en el que se cargue el programa
Se ejecuta y despues ya no se puede volver a llamar.
*/

// Funciones como objetos. 

console.log(typeof miFuncion); // Pero las funciones tambien pueden ser objetos.

function miFuncionObjeto(a, b){
    console.log(arguments.length); // Solo se puede usar dentro de la funcion.
    return a+b;
}

let resultadoObjeto = miFuncionObjeto(2, 3);
console.log(resultadoObjeto);

var miFuncionTexto = miFuncionObjeto.toString();
console.log(miFuncionTexto);

// Funciones al ser objetos tienen propiedades y metodos. 


