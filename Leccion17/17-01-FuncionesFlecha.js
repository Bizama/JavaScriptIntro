// Funciones flecha.

function miFunction(){
    console.log('Funcion normal');
}

miFunction();

// Funciones flecha son funciones anonimas. 
let miFuncion = function(){
    console.log('saludos desde la funcion');
}

miFuncion();
//miFuncionFlecha();
// Tambien se puede usar const en lugar de let. const ya no se podrá modificar (es más usado). 
let miFuncionFlecha = () => {
    console.log('Saludos desde la funcion flecha');
}

miFuncionFlecha();
// No se aplica el concepto de hoisting, no se puede llamar antes de definirla. 


// Variantes de las funciones flecha.

const saludar = () => {
    return 'Saludos desde funcion flecha con return.';
}

console.log( saludar() );
// Si es solo una linea:
const miFuncionFlechaVariante = () => 'Funcion en una sola linea, no necesita return';
console.log( miFuncionFlechaVariante() );

const regresaObjeto = () => ( {nombre: 'Juan'} ); // se pone ( ) para evitar confución con el cuerpo. 
console.log( regresaObjeto() );

const funcionConParametro = ( parametro ) => parametro;
funcionConParametro('Saludos con parametros');
console.log( funcionConParametro('Saludo con parametros') );

// Si solo es un parametro se puede omitir parentesis
const funcionConParametroUnico = parametro => parametro;
console.log( funcionConParametroUnico('hola') );

const funcionConDosParam = (op1, op2) => `Resutlado ${op1 + op2}`;
console.log( funcionConDosParam(12,3) );

