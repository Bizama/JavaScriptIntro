let a = 3, b = 2; 
let z = a + b; 
console.log( "Resultado de la suma: " + z );

z = b - a;
console.log( 'Resultado de la resta: ' + z );

z = a * b;
console.log( 'Resultado de la multiplicacion: ' + z );

z = a/b;
console.log( 'Resultado de la division: ' + z );

z = a%b;
console.log( 'Resultado del residuo (modulo): ' + z );

z = a ** b;
console.log( 'Resultado del exponente: ' + z );

// Incremento
z = a + b; 

// Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);
// Post-incremento ( el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);
// primero se asigna b a z y luego se incrementa, por eso se llama PostIncremento.

// Decremento 
// PreDecremento.

z = --a;
console.log(a);
console.log(z);
// PostDecremento.
z = b;
console.log(z);
console.log(b);
z = b--;
console.log(z);
console.log(b);