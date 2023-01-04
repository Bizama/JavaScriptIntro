let miNumero = "17";

// console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);

let respuesta = ( edad >= 18)  ? "Puede votar" : "Muy joven para votar";
console.log(respuesta);

// Verificar que una variable sea de tipo numero. (number)

let miNumeroSucio = "19x"
// miNumeroSucio no se convierte a numero porque tiene caracteres que no son numeros. 
let edad2 = Number(miNumeroSucio);
console.log(edad2);
let respuesta2 = ( edad2 >= 18)  ? "Puede votar" : "Muy joven para votar";
console.log(respuesta2);
// Da un resultado pero no es correcto.


// Para asegurar se hace un if dentro del if
if ( isNaN(edad2)){
    console.log("No es un numero");
} else {
    let respuesta3 = ( edad2 >= 18)  ? "Puede votar" : "Muy joven para votar";
    console.log(respuesta3);
}
