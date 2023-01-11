// Comparacion funciones expresion vs flecha.

//Funcion expresión

let sumar = function(a, b){ return a + b };
resultado = sumar(3, 4);
console.log(resultado);

// Haremos lo mismo con flecha.

const sumarFuncionFlecha = (a, b) => a+b; // Queda en un espacio de memoria fijo. 
sumarFlecha = sumarFuncionFlecha(4, 5);
console.log(resultado);




