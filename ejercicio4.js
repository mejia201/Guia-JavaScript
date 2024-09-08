// EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
// calcular cual número es el mayor y devolverlo.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function encontrarNumeroMayor(numero1, numero2) {

    return numero1 > numero2 ? numero1 : numero2;
}


rl.question('Ingrese el primer número entero: ', (respuesta1) => {
    const numero1 = parseInt(respuesta1);

    rl.question('Ingrese el segundo número entero: ', (respuesta2) => {
        const numero2 = parseInt(respuesta2);

        if (isNaN(numero1) || isNaN(numero2)) {
            console.log("Por favor, ingrese números enteros válidos.");
        } else {
          
            const mayor = encontrarNumeroMayor(numero1, numero2);
            console.log(`El número mayor es: ${mayor}`);
        }

       
        rl.close();
    });
});
