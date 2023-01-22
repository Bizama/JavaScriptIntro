// Herencia: 
// Para heredar caracteristicas desde una clase padre a 
// una clase hija. 


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
}

let persona = new Persona('javier', 'bizama');
console.log(persona);

let empleado = new Empleado('valentina', 'bizama', 'tecnologia');
console.log(empleado.departamento);
empleado.departamento = null;
console.log(empleado.nombre); // Metodo get de la clase Padre.
console.log(persona.nombreCompleto());
console.log(empleado.nombreCompleto());


// Sobreescritura en JavaScript. 

class Persona2{
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

let persona2 = new Persona2('Max', 'Thompson');
console.log(persona2.nombreCompleto());
let empleado2 = new Empleado2('Johnny', 'Wayne', 'Batman');
console.log(empleado2.nombreCompleto());

// Clase Object, Sobreescritura y Polimorfismo. 

// class Persona extends Object --> Javascript hace esto por abajo. 
// Hay metodos que vienen en Object por ejemplo. Object.prototype.toString 
 
console.log(empleado2.toString());
// Podemos soobrescribir toString. 

// Modificamos la clase de Persona2. 
// Polimorfismo: Se puede llamar metodos que se llamen igual, y ahi dependera desde donde
// se esta ejecutando el codigo, si es desde la clase padre o la clase hija. 
console.log(persona2.toString());
// Se aplica polimorfismo ( multiples formas en tiempo de ejecucion) 
// el metodo que se ejecuta depende si es una referencia de tipo padre o 
// de tipo hijo. 
