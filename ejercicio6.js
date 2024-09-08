// Crear una Función para calcular el descuento en viajes turísticos tomando
// en cuenta lo siguiente:
// Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
// descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
// es Puerto el Triunfo el descuento será del 15%.


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function calcularDescuentoViaje(cuidad, destino){

    let descuento = 0;

    if(cuidad === "Ciudad de Palma"){

         switch(destino){

        case "La costa del Sol":
            descuento = "5%";
            break;
        case "Panchimalco":
            descuento = "10%";
            break;
        case "Puerto el Triunfo":
            descuento = "15%";
            break;
        default:
            console.log("Destino incorrecto, vuelva a escribir su destino.")
            return;
        }

        console.log(`La ciudad que visita es: ${cuidad}, con destino a ${destino} y tiene el descuento en el viaje de: ${descuento}`);

    }else{
        console.log("La cuidad introducida no esta en nuestros registros, vuelva a intentarlo")
    }

}


rl.question('Ingrese una ciudad: ', (ciudadUsuario) => {
    rl.question('Ingrese un destino: ', (destinoUsuario) => {
        calcularDescuentoViaje(ciudadUsuario, destinoUsuario )
        rl.close();
    });
});
