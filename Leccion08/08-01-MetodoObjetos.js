let persona = {
    nombre: 'Javier',
    apellido: 'Bizama',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( persona.nombreCompleto ); 
console.log( persona.nombreCompleto());

// Para leer sin tener que indicar que es funcion
// Sino una propiedad.


// Metodo GET
let personaGet  = {
    nombre: 'Javier',
    apellido: 'Bizama',
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log( personaGet.nombreCompleto ); 
// console.log( personaGet.nombreCompleto()); ya no es necesario poner parentesis.


// Metodo SET

let personaSet = {
    nombre: 'Javier',
    apellido: 'Bizama',
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
}

console.log(personaSet.lang);
personaSet.lang = 'us'; // esto llama por dentro al metodo set.
console.log(personaSet.lang);

// Metodo Constructor.

// NO podemos reutilizar el objeto creado para crear distintos
// objetos con los mismos atributos y metodos.

// Un constructor es una funcion especial que se trabajara
// con objetos en javascript. Para esto se usa New. 

// Se recomienda que sea en mayuscula la definicion.
// Funcion constructor de objetos de tipo persona.  
function Persona( nombre, apellido, email = ''){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let persona1 = new Persona('javier', 'bizama', 'jabizama@gmail.com');
console.log(persona1);
let persona2 = new Persona('valentina', 'bizama');
console.log(persona2);
persona1.nombre = 'Jose';
console.log(persona1);

// Cómo agregamos metodos? 

function PersonaConMetodo( nombre, apellido, email = " "){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email; 
    this.nombreCompleto = function( ){
        return this.nombre + ' ' + this.apellido;
    }
}
let personaConMetodo = new PersonaConMetodo('javier', 'bizama');
console.log(personaConMetodo.nombreCompleto());
