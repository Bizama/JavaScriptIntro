let a = 3, b = 2, c = "3";

// Operador más basico. Igual. 
let z = a == b;
console.log(z);
let y = a == c;
console.log(y);

// Operador de comparación estricta. Tambien se revisa el tipo de la varible. 
y = a === c;
console.log(y);

// Operador "Distinto a "
z = a != b;
console.log(z);
y = a!=c;
console.log(y);
// Y con el estricto? 
y = a!==c;
console.log(y);

// Operadores relacionales >, <, >=, <= 
z = a < b;
console.log(z);

z = a > b; 
console.log(z);

z = a <= b;
console.log(z);

z = a >= c;
console.log(z);
// Que pasa con comparar tipos distintos de variables. Solo toma los valores convertidos.

