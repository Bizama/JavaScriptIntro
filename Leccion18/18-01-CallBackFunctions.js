//CallBack se puede usar una funcion dentro de una funcion, recibiendo como argumento 
// la funcion pedida en el parametro. 

function miFuncion1(){
    console.log('funcion 1');
}

const MiFuncion2 = () => {
    console.log('funcion 2');
}

miFuncion1();
MiFuncion2();

// Las llamadas a las  funciones se ejecutan de forma secuencial 

// Funcion de tipo callback

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack(`Resultado es: ${res}`);
}

sumar(2,7, imprimir);

// Funcion SetTimeout 
// Callbacks se pueden usar para procesos asíncronos. 

setTimeout(miFuncionCallBack, 3000);

function miFuncionCallBack(){
    console.log('saludo asincrono despues de 3 segundos');
}

setTimeout(function(){ console.log( 'Hola asincrono') }, 5000);

setTimeout( () => console.log('Hola asincrono 2'), 7000);


// Funcion SetInterval

let reloj = () => {
    let fecha = new Date();
    console.log(` ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} `);
}

//setInterval(reloj, 1000);


