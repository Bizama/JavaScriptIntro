// new Date();

class Persona{
    static contadorPersonas = 0;

    constructor (nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad; 
        this._idPersona = ++Persona.contadorPersonas;
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get idPersona(){
        return this._idPersona;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    toString(){ //TEMPLATE STRING ` ${variables}`
        return this._nombre + ' ' + this._apellido + ' tiene ' + this._edad + ' años';
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = this._idPersona;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return super.toString() + ' con un sueldo de: ' + this._sueldo;
    }
}

class Cliente extends Persona{
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = this._idPersona;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return super.toString() + ' se unio el: ' + this._fechaRegistro;
    }
}

let persona = new Persona('Javier', 'Bizama', 27);
console.log(persona.idPersona);
let empleado = new Empleado('Jav', 'Biz', 28, 5000);
console.log(empleado.idEmpleado);
date = new Date();
console.log(date);
let cliente = new Cliente('Jabier', 'Vizama', 34, date);
console.log(cliente.idCliente);