class Persona{
    static contadorPersonas = 0; 

    constructor ( nombre, apellido ){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
    }
    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre( nombre ){
        this._nombre = nombre;
    }
    set apellido( apellido ){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ': ' + this._nombre + ' ' + this._apellido
    }
    static saludar( persona ){
        return 'Hola ' + persona.nombreCompleto();
    }
    toString(){
        return this.nombreCompleto();
    }
}

let persona = new Persona('Javier', 'Molina');
console.log(persona.toString());
let persona2 = new Persona('Valentina', 'Bizama');
console.log(persona2.toString());
// Funciona igual si el objeto fuera de una clase que hereda 
// de Persona como Empleado en las clases anteriores. 


// Creacion de Constantes Estáticas en JavaScript. 
// Es solo de lectura. 


