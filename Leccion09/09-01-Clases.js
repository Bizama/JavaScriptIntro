// Una clase es una plantilla. se definen atributos y metodos.
// De esta clase se crean instancias. Un objeto es una
// instancia de una clase.

// Una Clase tiene nombre, atributos y metodos.

class Persona{
    // agregamos un constructor.
    constructor( nombre, apellido ){ 
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre + ' ' + this._apellido;
    }
    set nombre( name ){
        this._nombre = name;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

let persona2 = new Persona('Javier', 'Bizama');
console.log(persona2);

// Metodos GET y SET. 

console.log(persona1.nombre);
console.log(persona1._nombre);
persona1.nombre = 'Javier';
console.log(persona1.nombre);

// Es buena practica agregarlo a las clases aunque no sea necesario.

/* 
Hoisting y Clases en JavaScript:
    Se debe crear primero la clase antes de referenciarla.
    No es igual que las funciones / objetos. 
*/

