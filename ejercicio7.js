// Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
// • La cantidad de valores negativos ingresados.
// • La cantidad de valores positivos ingresados.
// • La cantidad de múltiplos de 15.
// • El valor acumulado de los números ingresados que son pares.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let valores = [];
let cantidadNegativos = 0;
let cantidadPositivos = 0;
let cantidadMultiplo15 = 0;
let acumuladoPares = 0;

function procesarValores() {
   
    for (let valor of valores) {
        if (valor < 0) {
            cantidadNegativos++;
        } else if (valor > 0) {
            cantidadPositivos++;
        }

        if (valor % 15 === 0 && valor !== 0) {
            cantidadMultiplo15++;
        }

        if (valor % 2 === 0) {
            acumuladoPares += valor;
        }
    }

    
    console.log(`Cantidad de valores negativos: ${cantidadNegativos}`);
    console.log(`Cantidad de valores positivos: ${cantidadPositivos}`);
    console.log(`Cantidad de múltiplos de 15: ${cantidadMultiplo15}`);
    console.log(`Valor acumulado de números pares: ${acumuladoPares}`);
}


function leerValores(count) {
    if (count > 0) {
        rl.question(`Ingrese el valor #${11 - count}: `, (respuesta) => {
            const valor = parseInt(respuesta);
            if (!isNaN(valor)) {
                valores.push(valor);
                leerValores(count - 1); 
            } else {
                console.log("Por favor, ingrese un número entero válido.");
                leerValores(count);
            }
        });
    } else {
        rl.close();
        procesarValores();
    }
}


leerValores(10);
