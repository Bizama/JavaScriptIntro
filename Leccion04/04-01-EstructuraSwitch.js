let numero = 4; 

let numeroTexto = 'Valor desconocido';

switch( numero ){
    case 1: 
        numeroTexto = 'Número uno';
        break;
    case 2:
        numeroTexto = 'Número dos';
        break;
    case 3:
        numeroTexto = 'Número tres';
        break;
    case 4:
        numeroTexto = 'Número cuatro';
        break;
    default:
        numeroTexto = 'Número desconocido'
    }
    console.log(numeroTexto);

// Estacion del año  con switch.
let mes = 2; 
let estacion = 'Estacion desconocida';

switch (mes){
    case 1: case 2: case 12:
        estacion = 'Verano';
        break;
    case 3: case 4: case 5:
        estacion = ' Otoño';
        break;
    case 6: case 7: case 8:
        estacion = 'Invierno';
        break;
    case 9: case 10: case 11:
        estacion = 'Primavera';
        break
    default:
        estacion = 'el valor no corresponde a un mes del año'
    }
console.log(estacion);

// Comparacion estricta en switch. Si compara los tipos. Si arriba ponemos "11" 
// en lugar de 11, no caerá en ningún caso y por ende retornaria el default. 