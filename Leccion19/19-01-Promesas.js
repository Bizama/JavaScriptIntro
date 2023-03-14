// Promesas, son funciones de tipo callback. 
// Mientras espera el estado esta en [ Pending ]
// Si la promesa se cumple de manera correcta se usa .then( )  [Resolved]
// Si queda rechazado queda en [Rejected] se usa .catch( )

let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if (expresion)
        resolved('Resolvió correcto');
    else
        rejected('Se produjo un error');
}); // Obtiene dos parametros de tipo callback.

//miPromesa.then(
//    valor => console.log(valor), 
//    error => console.log(error)
//);

// Ahora usando el .catch( )

//miPromesa
//.then( valor => console.log(valor))
//.catch( error => console.log(error));

// Es lo mismo pero en lugar de agregarlo como parametro se agrega como su propio "metodo"

// Set timeout y promesas en JS. 

let promesa = new Promise(resolved => {
    //console.log('Inicio promesa');
    //setTimeout(() => { resolved('saludos con promesa y timeout') }, 0);
    //console.log('Fin promesa');
}); 

//promesa.then( valor => console.log(valor));

// Async con promesas. 

// Async indica que una funcion regresa una promesa. 

async function miFuncionConPormesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPormesa().then(valor => console.log(valor)); // Como es funcion normal y no un objeto de tipo promesa se usan los ( )

// Palabra await y async. 

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise( resolver => {
        resolver('Promesa con await');
    });
    console.log( await miPromesa ); // await solo se puede usar en una funcion con async.
}

//funcionConPromesaYAwait();

// Promesas con async, await y setTimeout.

async function funcionConTodo(){
    console.log('inicio promesa');
    let miPromesa = new Promise( resolver => {
        setTimeout(() => resolver('promesa con await y timeout'), 5000);
    });
    console.log( await miPromesa );
    console.log('fin promesa despues de esperar el resultado del await');
    // aqui si se espera a que se ejecute el await para continuar ejecutando las funciones.
}

funcionConTodo();