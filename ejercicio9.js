// Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
// Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
// • Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
// • Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
// • Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
// • Si no está entre ningún caso anterior la frase “Temperatura desconocida”


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//funcion para calcular de celsius a fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function clasificarTemperatura(fahrenheit) {
    if (fahrenheit >= 14 && fahrenheit <= 32) {
        return "Temperatura baja";
    } else if (fahrenheit > 32 && fahrenheit <= 68) {
        return "Temperatura adecuada";
    } else if (fahrenheit > 68 && fahrenheit <= 96) {
        return "Temperatura alta";
    } else {
        return "Temperatura desconocida";
    }
}

rl.question('Ingrese la temperatura en Celsius: ', (respuesta) => {
    const celsius = parseFloat(respuesta);
    if (!isNaN(celsius)) {
        const fahrenheit = celsiusAFahrenheit(celsius);
        const clasificacion = clasificarTemperatura(fahrenheit);
        console.log(`Temperatura en Fahrenheit: ${fahrenheit}ºF`);
        console.log(clasificacion);
    } else {
        console.log('Por favor, ingrese un número válido.');
    }
    rl.close();
});
