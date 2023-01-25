class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    toString(){
        return `Dispositivo de entrada ${this._tipoEntrada} de marca ${this._marca} `
    }
}

let hdmi = new DispositivoEntrada('hdmi','sony');
console.log(hdmi.toString());

class Raton extends DispositivoEntrada{
    static contadorRatones = 0; 

    constructor(marca, tipoEntrada){
        super(marca, tipoEntrada);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton numero ${this._idRaton} de marca ${this._marca} contectado a ${this._tipoEntrada}`;
    }
}

let g3 = new Raton('usb','logitech');
console.log(g3.toString());

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(marca, tipoEntrada){
        super(marca, tipoEntrada);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado numero ${this._idTeclado} de marca ${this._marca} contectado a ${this._tipoEntrada}`;
    }
}

let k3 = new Teclado('usb', 'apple');
console.log(k3.toString());

class Monitor{

    static contadorMonitores = 0; 

    constructor(marca, tamaño){
        this._marca = marca;
        this._tamaño = tamaño;
        this._idMonitor = ++Monitor.contadorMonitores;
    }
    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `Monitor de marca ${this._marca}, de tamaño ${this._tamaño} numero ${this._idMonitor}`;
    }
}

let monitor = new Monitor('DELL', 'Grande');
console.log(monitor.toString());

class Computadora{

    static contadorComputadoras = 0; 

    constructor(nombre, raton, monitor, teclado){
        this._nombre = nombre;
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._raton = raton;
        this._monitor = monitor;
        this._teclado = teclado; 
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get idComputadora(){
        return this._idComputadora;
    }

    toString(){
        return `Computadora ${this._idComputadora} con \n ${this._monitor}`
    }

}

let compu = new Computadora('Javiers mc', g3, monitor, k3);
console.log(compu.toString());

class Orden{

    static contadorOrdenes = 0; 

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    agregarComputadora(computador){
        this._computadoras.push(computador);
    }

    mostrarOrden(){
        let finalMessage = "Orden: \n";
        if (this._computadoras.length > 0){
            for (let compu of this._computadoras){
                finalMessage += compu.toString() + '\n';
            return finalMessage
        }} else {
            console.log('No hay computadores en esta orden');
        }
    } // Para mostrar un mensaje grande crear una variable de string e ir agregandole a eso

    toString(){
        return `Orden con ${this._computadoras.length} compus`
    }
}

let orden = new Orden();
orden.mostrarOrden();
console.log(orden.toString());
orden.agregarComputadora(compu);
console.log(orden.mostrarOrden());
console.log(orden.toString());