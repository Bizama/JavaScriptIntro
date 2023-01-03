/*
Ejemplos de tipos de datos en JavaScript
*/
// Tipo de dato string
var nombre = "Javier";
console.log(typeof nombre);
nombre = 10;
console.log(typeof nombre);
// Tipo de dato number 
var numero = 1000;
console.log(numero);

// Tipo de dato object
var object = {
    nombre : "Jose",
    edad: 60
}
console.log(typeof object);

// Tipo de dato boolean
var bandera = true;
console.log(typeof bandera);
bandera = false;
console.log(bandera);

// Tipo de dato. Funcion - function
function miFuncion(){}
console.log(typeof miFuncion);

// Tipo de dato. Symbol
var simbol = Symbol("mi simbolo");
console.log(typeof simbol);

// Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

// Tipo de dato Undefined (Tambien se puede usar como valor.)
var x;
console.log(typeof x);
x = undefined;
console.log(x);
console.log(typeof x);

// Tipo de dato null -> ausencia de valor
var y = null; 
console.log(y);
console.log(typeof y);

// Los arreglos son del tipo object
var autos = [2, '5', 6];
console.log(typeof autos);

var z = '';
console.log(typeof z);