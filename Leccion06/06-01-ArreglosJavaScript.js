// Un arreglo es de tipo object que almacena varios valores. 
// Declarar arreglos.
let autos = new Array('BMW', 'Mercedez Benz', 'Volvo'); // Es antiguo ya no se hace así. 

const _autos = ['BMW', 'Audi', 'Volvo']; // La referencia en memoria no se modificará.
console.log(_autos);

// Recorrer elementos de un arreglo.
// Para acceder a un valor del arreglo es igual que en python. 
console.log(autos[2]);

for (let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + _autos[i]);
}

// La propiedad length da el largo del arreglo, la cantidad de elementos.
// Arreglo.length

// MODIFICAR ELEMENTOS DE UN ARREGLO.

_autos[1] = 'Auto vendido';
console.log(_autos);
// Queremos agregar nuevo valor, se usa push. 
_autos.push('Susuki');
console.log(_autos);

console.log(_autos.length);
// Para agregar un nuevo elemento y no se cuantos elementos tiene puedo usar la propiedad length. 
// Tambien sirve para no dejar indices vacios.
_autos[_autos.length] = 'Cadilac';
console.log(_autos);
console.log(_autos.length);
// En caso de querer dejar espacios vacios se hace igual.
_autos[8] = 'Mitzubishi'; // No recomendado, usa más memoria y puede causar errores. 
console.log(_autos);

// Como saber si estamos trabajando con un arreglo? 
console.log(typeof _autos);
// No nos sirve. 
// Podemos usar lo siguiente: 
console.log(Array.isArray(_autos));
// O también podemos usar: 
console.log( _autos instanceof Array);
