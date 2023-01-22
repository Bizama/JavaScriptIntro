class Persona{
    constructor ( nombre, apellido ){
        this._nombre = nombre;
        this._apellido = apellido; 
    }

    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido( apellido ){
        this._apellido = apellido;
    }
    set nombre( nombre ){
        this._nombre = nombre;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){
        return 'sludos estaticos';
    }
    static saludar2( persona ){
        return 'Hola ' + persona.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor (nombre, apellido, departamento){
        super(nombre, apellido); // llamar al constructor de la clase Padre.
        this._departamento = departamento; 
    }
    get departamento(){
        return this._departamento;
    }
    set departamento( depto ){
        this._departamento = depto;
    }
    // Sobreescritura, debe ser el mismo nombre que el metodo de la clase Padre: 
    // nombreCompleto(){
    //     return this._nombre + ' ' + this._apellido + ' perteneciente al departamento de: ' + this._departamento;
    // } para no tener qe escribir todo el metodo denuevo podemos usar: 
    nombreCompleto(){
        return super.nombreCompleto() + ' pertenece al dpto de: ' + this._departamento;
    }
}

let persona = new Persona('Javier', 'Bizama');
// console.log(persona.saludar()); no es posible llamar un metodo static desde un objetop
// pero si desde una clase. 
console.log(Persona.saludar());
// se le puede pasar como argumento un objeto.
console.log(Persona.saludar2(persona));
let empleado = new Empleado('Vale', 'Bizama', 'Lec.');
console.log(Empleado.saludar2(empleado));

// Atributos estáticos en JavaScript. 

class Persona2{
    static contadorObjetosPersona = 0;

    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona2.contadorObjetosPersona ++; 
    }

    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    
}
class Empleado2 extends Persona2{
    constructor (nombre, apellido, departamento){
        super(nombre, apellido); // llamar al constructor de la clase Padre.
        this._departamento = departamento; 
    }
    get departamento(){
        return this._departamento;
    }
    set departamento( depto ){
        this._departamento = depto;
    }
    // Sobreescritura, debe ser el mismo nombre que el metodo de la clase Padre: 
    // nombreCompleto(){
    //     return this._nombre + ' ' + this._apellido + ' perteneciente al departamento de: ' + this._departamento;
    // } para no tener qe escribir todo el metodo denuevo podemos usar: 
    nombreCompleto(){
        return super.nombreCompleto() + ' pertenece al dpto de: ' + this._departamento;
    }
}
let persona2 = new Persona2('havier', 'bizama');
console.log(persona2.contadorObjetosPersona);
console.log(Persona2.contadorObjetosPersona);
let empleado2 = new Empleado2('nombre', 'apellido', 'Batman');
console.log(Persona2.contadorObjetosPersona);

// Atributos estaticos vs no estaticos. 

/*
Se pueden declarar atributos a la clase
sin declararlos en el constructor.
*/

class Prueba{
    static contador = 0; 
    email = 'Valor default';
    constructor (nombre){
        this._nombre = nombre; 
    }
    get nombre(){
        return this._nombre;
    }
}
class Prueba2 extends Prueba{
    
}
let persona3 = new Prueba('john');
persona3.email = 'jabizama@uc.cl';
console.log(persona3.email);
console.log(Prueba.email); // No es un atributo estatico, sino un 
// Nuevo atributo estatico que se esta creando en ese momento. 
Prueba.email = 'None'; 
console.log(Prueba.email);
console.log(Prueba2.email); // lo hereda.
