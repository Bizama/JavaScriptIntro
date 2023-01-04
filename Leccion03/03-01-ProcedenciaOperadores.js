let a = 3, b=2, c=1;

let z = a * b + c;
console.log(z);

z = c + a * b;
console.log(z);
/* Aqui lo que pasó, a pesar de que se evalua de izquierda a derecha
la multiplicacion tiene prioridad.
*/
let d = 4; 
z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);
// Se puede cambiar el orden agregando parentesis porque esas tienen mayor prioridad.
z = (c + a) * b / c;
console.log(z);