class Persona{
    static contadorPersonas = 0; 
    // Es un metodo estatico que funciona como constante. 
    static get MAX_OBJ(){
        return 1;
    }

    constructor ( nombre, apellido ){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        } else {
            console.log('Se ha superado el maximo de objetos creados.')
        }
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
console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 60; // Crea la variable estatica pero como 
// no tiene un SET no se cambia el valor. 
console.log(Persona.MAX_OBJ);
let persona2 = new Persona('Valentina', 'Bizama');
console.log(persona2.toString());
console.log(Persona.contadorPersonas);
