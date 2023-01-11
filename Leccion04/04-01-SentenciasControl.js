let condicion = false;
// Se pueden quitar las llaves solo si solo se tiene una linea de codigo para el if y una para el else. 
// Mejor siempre poner llaves.
if( 5 === "5"){
    console.log( 'La condicion es verdadera');
} else{
    console.log( 'La condicion es falsa');
}
// Ejemplo. 

let numero = 4;

if ( numero == 1 ){
    console.log(' Numero uno ');
} else if ( numero == 2 ){
    console.log( ' Numero dos ');
} else if ( numero == 3 ){
    console.log( ' Numero tres ');
} else if ( numero == 4 ){
    console.log( ' Numero cuatro ');
} else {
    console.log( ' Otro Numero ');
}

// Ver en que estacion del año estoy acorde al mes.
let mes = 9; 
let estacion; 

if (1 === mes || mes === 2 || mes === 12){
    estacion = ' Verano ';
} else if ( mes === 3 || mes === 4 || mes === 5){
    estacion = ' Otoño ';
} else if (mes === 6 || mes === 7 || mes === 8){
    estacion = ' Invierno ';
} else if (mes === 9 || mes === 10 || mes === 11){
    estacion = ' Primavera ';
} else {
    estacion = ' Valor no corresponde a un mes';
}
console.log(estacion);

// Calculo de la hora del día. 
/*
6am - 11am -> buenos dias
12pm - 18pm  - Buenas Tardes
19 - 24 -> Buenas noches
0 -> 6 - Durmiendo
*/
let hora = 5;
let mensaje;

if (hora >= 6 && hora <= 11){
    mensaje = 'Buenos Días';
} else if (hora >= 12 && hora <= 18){
    mensaje = 'Buenas Tardes';
} else if (hora >= 19 && hora <= 24){
    mensaje = 'Buenas noches';
} else if (hora >= 0 && hora < 6){
    mensaje = 'Durmiendo';
} else {
    mensaje = 'Valor no valido';
}
console.log(mensaje);




