// Prototype. 

// Para agregar una propiedad a objetos existentes
// sin alterar la funcion constructor se usa prototype.

function Persona( nombre, apellido, email ){
    this.nombre = nombre;
    this.apellido = apellido; 
    this.email = email;
}

Persona.prototype.tel = '942196952';

let padre = new Persona('Juan', 'Torres', '');
let madre = new Persona('Juana', 'Castillo', 'jcasmail');

console.log(padre);
console.log(madre);

let hijo = new Persona('Juanito', 'Lopez', '');
console.log(hijo.tel);

/* 
    Uso de Call en JavaScript
    Usar metodos de otros objetos. 
*/

let persona1 = {
    nombre: 'John',
    apellido: 'Perez',
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Juan',
    apellido: 'Jhonson'
}

//Usaremos el metodo de persona 1 en persona 2 mediante Call.

console.log(persona1.nombreCompleto());

console.log(persona1.nombreCompleto.call(persona2));

//objeto.metodo.call(objeto cuyos datos consumira el metodo)  


// Como pasar argumentos a Call( )

let persona3 = {
    nombre: 'Juanito',
    apellido: 'Lopez',
    nombreCompleto: function (titulo, tel){
        return titulo + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

console.log(persona3.nombreCompleto('Sr.', '9421249'));

console.log(persona3.nombreCompleto.call( persona2, 'Sr.', '999999'));

// Metodo Apply. Podemos llamar un metodo que no se encuentra definido en el objeto.

persona4 = {
    nombre: 'Javier',
    apellido: 'Bizama',
    nombreCompleto: function(titulo='Sr.'){
        return titulo + this.nombre + ' ' + this.apellido;
    }
}

console.log(persona4.nombreCompleto('Sr.'));
console.log(persona4.nombreCompleto.apply(persona2));

// Hasta aqui funciona igual que Call(  ), la diferencia se ve en los parametros.
// Los parametros de apply todos los valores se pasan mediante un arreglo.

let arreglo = ['Sr.']
console.log( persona4.nombreCompleto.apply(persona2, arreglo));

