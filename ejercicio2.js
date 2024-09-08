// EJERCICIO 2: Crear una función que determine la nota final de un alumno, la cual depende
// de lo siguiente:
// • Examen =20%
// • tareas = 40%
// • asistencia = 10%
// • investigación = 30%
// Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.


function calcularNota(nombre, carnet, examen, tareas, asistencia, investigacion) {

    const notaFinal = (examen * 0.20) + (tareas * 0.40) + (asistencia * 0.10) + (investigacion * 0.30);
    
    console.log(`Nombre del alumno: ${nombre}`);
    console.log(`Carnet del alumno: ${carnet}`);
    console.log(`Nota final: ${notaFinal.toFixed(2)}`);
}


//Datos
const alumno = "Bryan Mejia";
const carnet = "2020ML603";

const notaExamen = 8;        
const notaTareas = 9;        
const notaAsistencia = 10;   
const notaInvestigacion = 10; 

calcularNota(alumno, carnet, notaExamen, notaTareas, notaAsistencia, notaInvestigacion);
