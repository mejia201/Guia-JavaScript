// EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un
// mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.


    const readline = require('readline');


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

   
    rl.question('Ingrese su edad: ', (edadUsuario) => {
       
        const mensaje = (edadUsuario >= 18) ? "Es mayor de edad" : "No es mayor de edad";
        console.log(mensaje);
        
     
        rl.close();
    });
