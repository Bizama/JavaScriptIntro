// Objects in JavaScript.

// Un objeto puede tener propiedades (atributos) y metodos.

const persona = {
    nombre: 'Javier',
    apellido: 'Bizama',
    email: 'jbizama@mail.com',
    edad: 27 
}

// console.log(persona.email )
// console.log(persona);
// Tambien se pueden asociar metodos a los objetos.

// Métodos en objects.

// Metodo para retornar el nombre completo. 
// Es similar a agregar una propiedad.

let personaConMetodo = {
    nombre: 'Javier',
    apellido: 'Bizama',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
// Cual es la diferencia entre usar let y const para definir un objeto?. 
// console.log(personaConMetodo.nombreCompleto());
// No olvidar el ( ) para llamar a la función. 

// Creacion de Objetos en JavaScript. 
// tambien existe crear el objetos mediante new. 

let persona2 = new Object();
persona2.nombre = 'Camila';
persona2.apellidos = 'Meneses';
persona2.edad = 28;
persona2.email = 'cameneses@uc.cl';
// console.log(persona2);

personaConMetodo.telefono = '55243123';
// console.log(personaConMetodo);

// Acceder a las propiedades de los Objetos.

console.log(personaConMetodo);
// Tambien se puede acceder a las propiedades mediante corchetes.
console.log(persona['nombre']);

for (nombrePropiedad in personaConMetodo){
    console.log(nombrePropiedad);
    console.log(personaConMetodo[nombrePropiedad]);
}

// Agregar y Eliminar propiedades de Objetos. 

//Para agregar: 

personaConMetodo.rut = '19.182.510-4';
console.log(personaConMetodo);
//se agrega de inmediato la propiedad rut. 
// Hay que tener cuidado para no agregar propiedades en lugar de modificar una propiedad existente.

// Para eliminar: 

delete personaConMetodo.rut; 
console.log(personaConMetodo);

// Distintas formas de imprimir un Object. 

// 1.- Concatenar cada valor de cada propiedad. 
console.log( personaConMetodo.nombre + ', ' + personaConMetodo.apellido);

// 2.- Iterar sobre las propiedades.
for ( nombrePropiedad in personaConMetodo){
    console.log(nombrePropiedad + ': ' + personaConMetodo[nombrePropiedad]);
}

// Usando object.values, retorna un arreglo con las propiedades del objeto.

let personaArray = Object.values( personaConMetodo );
console.log(personaArray);

// se puede usar JSON.stringify

let personaString = JSON.stringify( personaConMetodo );
console.log(personaString);

