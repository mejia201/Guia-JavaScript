// Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
// Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
// aumento. Deberá demostrar los datos del empleado y el aumento salarial.

function calcularAumentoSalario(nombre, salario, categoria) {
    let aumento = 0;

    switch(categoria.toUpperCase()) {
        case 'A':
            aumento = 0.15; 
            break;
        case 'B':
            aumento = 0.30; 
            break;
        case 'C':
            aumento = 0.10; 
            break;
        case 'D':
            aumento = 0.20; 
            break;
        default:
            console.log("Categoría no válida.");
            return;
    }

    const aumentoSalarial = salario * aumento;
    const nuevoSalario = salario + aumentoSalarial;

    console.log(`Nombre del empleado: ${nombre}`);
    console.log(`Salario actual: $${salario.toFixed(2)}`);
    console.log(`Categoría: ${categoria}`);
    console.log(`Aumento salarial: $${aumentoSalarial.toFixed(2)}`);
    console.log(`Nuevo salario: $${nuevoSalario.toFixed(2)}`);
}

const nombreEmpleado = "Carlos Martínez";
const salarioEmpleado = 1000; 
const categoriaEmpleado = "B";




calcularAumentoSalario(nombreEmpleado, salarioEmpleado, categoriaEmpleado);
