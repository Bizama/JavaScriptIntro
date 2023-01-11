// Paso por Valor.  Cuando usamos tipos que no son objetos.

let x  = 10; // Valor primitivo. No tiene propiedades(atributos) ni metodos.

function cambiarValor(a){
    a = 20; 
}
// Paso por Valor.
cambiarValor(x);
console.log(x); // NO tuvo cambios porque solo paso su valor.

// La variable a solo existe dentro del metodo.

// Paso por referencia. 

// Crearemos objeto.
const persona = {
    nombre: 'Javier',
    edad: 27, 
    apellido: 'Bizama' // atributos del objeto.
}

// La variable persona almacena una referencia a un objeto.

function cambiarValorObjeto(p1){
    p1.nombre = 'Valentina';
    p1.edad = 26;
}
// Paso por referencia. 
cambiarValorObjeto(persona);
console.log(persona);

