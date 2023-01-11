let resultado = sumarTodo(5, 4, 13, 10, 9);

console.log(resultado);

function sumarTodo(){
    let resultado = 0
    for (let i = 0; i < arguments.length; i++){
        resultado += arguments[i];
    }
    return resultado;
}

