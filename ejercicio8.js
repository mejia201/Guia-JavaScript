// Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tablaMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

rl.question('Ingrese un número para mostrar su tabla de multiplicar: ', (respuesta) => {
    const numero = parseInt(respuesta);
    if (!isNaN(numero)) {
        tablaMultiplicar(numero);
    } else {
        console.log('Por favor, ingrese un número válido.');
    }
    rl.close();
});
