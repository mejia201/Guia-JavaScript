function calcularPromedios() {
   
    let edadesManana = [
        parseFloat(document.getElementById('manana1').value),
        parseFloat(document.getElementById('manana2').value),
        parseFloat(document.getElementById('manana3').value),
        parseFloat(document.getElementById('manana4').value),
        parseFloat(document.getElementById('manana5').value)
    ];

 
    let edadesTarde = [
        parseFloat(document.getElementById('tarde1').value),
        parseFloat(document.getElementById('tarde2').value),
        parseFloat(document.getElementById('tarde3').value),
        parseFloat(document.getElementById('tarde4').value),
        parseFloat(document.getElementById('tarde5').value),
        parseFloat(document.getElementById('tarde6').value)
    ];

   
    let edadesNoche = [
        parseFloat(document.getElementById('noche1').value),
        parseFloat(document.getElementById('noche2').value),
        parseFloat(document.getElementById('noche3').value),
        parseFloat(document.getElementById('noche4').value),
        parseFloat(document.getElementById('noche5').value),
        parseFloat(document.getElementById('noche6').value),
        parseFloat(document.getElementById('noche7').value),
        parseFloat(document.getElementById('noche8').value),
        parseFloat(document.getElementById('noche9').value),
        parseFloat(document.getElementById('noche10').value),
        parseFloat(document.getElementById('noche11').value)
    ];

   
    let promedioManana = calcularPromedio(edadesManana);
    let promedioTarde = calcularPromedio(edadesTarde);
    let promedioNoche = calcularPromedio(edadesNoche);

    
    let mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
    let turnoMayorPromedio = '';
    if (mayorPromedio === promedioManana) {
        turnoMayorPromedio = 'Turno Mañana';
    } else if (mayorPromedio === promedioTarde) {
        turnoMayorPromedio = 'Turno Tarde';
    } else {
        turnoMayorPromedio = 'Turno Noche';
    }


    let resultado = `
        Promedio de edades del Turno Mañana: ${promedioManana.toFixed(2)}
        Promedio de edades del Turno Tarde: ${promedioTarde.toFixed(2)}
        Promedio de edades del Turno Noche: ${promedioNoche.toFixed(2)}
        El turno con mayor promedio de edades es: ${turnoMayorPromedio}
    `;

    document.getElementById('resultado').textContent = resultado;
}

function calcularPromedio(edades) {
    let total = 0;
    let validos = 0;
    for (let edad of edades) {
        if (!isNaN(edad)) {
            total += edad;
            validos++;
        }
    }
    return total / validos;
}