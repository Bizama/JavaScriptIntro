// Sobreescritura en JavaScript. 

/*
Cuando la clase hija sobreescribe un metodo que heredo de su clase padre. 
*/

class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo; 
    }
    obtenerDetalles(){
        return `Empleado ${this._nombre} gana ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){ // Con esto sobreescribimos, pero igual podemos acceder al metodo heredado.
        return `${super.obtenerDetalles()}, pertenece al departamento ${this._departamento}`;
    }
}
let empleado1 = new Empleado('Javier', '18Millones');
console.log(empleado1.obtenerDetalles());

let gerente = new Gerente('Jose Luis', '20Millones', 'IT');
console.log(gerente.obtenerDetalles());

// Polimorfismo, una linea de codigo puede ejecutar 
// dos metodos distintos dependiendo del tipo al que 
// este apuntando

function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log('Objeto de tipo Gerente');
    } else {
        console.log('Objeto de tipo Empleado');
    }
}

imprimir(empleado1);
imprimir(gerente);

