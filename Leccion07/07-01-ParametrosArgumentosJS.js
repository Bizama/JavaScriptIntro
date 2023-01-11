let sumar = function(a, b){ return a + b };
resultado = sumar(3, 4);

// Funcion tipo flecha.

const sumarFuncionFlecha = (a, b) => a+b; // Queda en un espacio de memoria fijo. 
sumarFlecha = sumarFuncionFlecha(4, 5);

// Parametros son a y b
// Argumentos serían 3,4 en la funcion tipo expresión
// Y 4,5 en la fucion tipo flecha. 

let sumarNew= function(a, b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};
resultado = sumarNew();
console.log(resultado);

/*
Si solo le paso un parametro y la funcion necesita más
el resto quedara como undefined. Si no le paso ninguno
y la funcion lo necesita, entonces igual lo reellena con
undefineds.
*/
 
// Podemos hardcodear los parametros. 
let sumarWithoutParameters= function(a = 3, b = 6){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b
};
resultado = sumarWithoutParameters();
console.log(resultado);
// Pero si les entregamos argumentos soobrescribiran los parametros
// por default. 
resultadoConParametro = sumarWithoutParameters(3,4);
console.log(resultadoConParametro);