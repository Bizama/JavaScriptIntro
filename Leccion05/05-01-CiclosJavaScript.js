// Ciclo while.
let contador = 10;

while ( contador <  3 ){
    console.log(contador);
    contador++;
}
// console.log('Fin del ciclo while');

// Ciclo DoWhile, no muy usado. 

let doContador = 0;
do {
    console.log(doContador);
    doContador++;
} while ( doContador < 3 );

// console.log('Fin ciclo DoWhile');

// Ciclo for. // Parece que las variables dentro del for son independientes. 
// for (inicializar contador y variables locales; condicion que se debe cumplir; incremento o decremento de contador)
for (let contador = 0, x=1; contador < 3; contador++ ){
    console.log(contador);
    console.log(x);
}
console.log('Fin del ciclo For');

// Palabra Break en JavaScript. Interrumpe los ciclos. 

// Ejercicio numeros pares de 0 a 10. 

for (let contador = 10; contador <= 10; contador++){
    if ( contador % 2 == 0){
        console.log(contador);
    }
}
// Si solo queremos imprimir el primer numero par que encontremos podemos agregar break. 

for (let contador = 11; contador <= 10; contador++){
    if ( contador % 2 == 0){
        console.log(contador);
        break;
    }
}
// console.log('Fin del ciclo for');

// Palabra Continue en JavaScript.

for (let contador = 0; contador <= 10; contador++){
    if ( contador % 2 !== 0 ){
        continue; // Ir a la siguiente iteración y dejar de ejecutar el condigo posterior al continue.
    }
    console.log(contador);
}

// Etquetas ( LABELS ) en JavaScript. 
// No es recomendable pero es bueno conocer la syntaxis. Programacion go-to no recomendado. 
inicio:
for (let contador = 0; contador <= 10; contador++){
    if ( contador % 2 !== 0 ){
        continue inicio; // Tambien funciona con break. 
    }
    console.log(contador);
}