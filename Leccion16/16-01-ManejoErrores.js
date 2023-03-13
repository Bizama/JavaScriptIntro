"use strict"
// Manejo de errores.
try{
    let x = 10;
    //miFuncion();
    //x=10;

} catch (error) {
    console.log(error);
}
finally{
    // Siempre se ejecuta despues del try o catch. 
    console.log('Termina revision de errores');
} 
// Tambien funciona con metodos que no han sido definidos prviamente.
console.log('Si se ejecuta depues del "error"');

// Clausula throws en JavaScript.

// Si queremos lanzar un error podemos crearlo,

try{
    let x = 10;
    throw 'Mi error';
} catch (error) {
    console.log(error);
}

// Ejemplo.

let resultado = ''; 

try{
    if ( isNaN(resultado)) throw 'No es un numero'
    else if (resultado === '') throw 'Es Cadena Vacia';
    // si hacemos un throw el error es lo entregado. 
    // de descompone en name y message si es externo.
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message)
} finally {
    console.log('Termina el ejemplo');
}