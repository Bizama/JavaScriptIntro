let a = 10, valMax = 10, valMin = 0;
/* 
Ver si un valor se encuentra dentro de un rango.
En AND (&&) ambas deben retornar verdadero para que retorne verdadero.
*/
if ( a <= valMax && a >= valMin ){
    console.log(' Se encuentra en el rango' );
} else {
    console.log(' Se encuentra fuera del rango' );
}

// Operador OR.
// Cualquiera de las dos expresiones tiene que ser true para que retorne true.
let vacaciones = false, diaDescanso = true;

if ( vacaciones || diaDescanso ){
    console.log( 'Puedo ir a escalar a roca' );
} else {
    console.log( 'No puedo ir a roca' ); 
}