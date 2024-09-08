// Realizar una función para una tienda de coches en donde se deberá calcular:
// Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
// coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
// el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
// aplicara en base a lo que selecciono el usuario.


function calcularDescuento() {
           
    const auto = document.getElementById('auto').value;
    const resultado = document.getElementById('resultado');
    
   
    let descuento = 0;

    switch (auto) {
        case 'FORD FIESTA':
            descuento = 5;
            break;
        case 'FORD FOCUS':
            descuento = 10;
            break;
        case 'FORD ESCAPE':
            descuento = 20;
            break;
        default:
            resultado.innerHTML = 'Por favor, seleccione un coche.';
            return;
    }

    resultado.innerHTML = `El coche seleccionado es: ${auto}<br>Descuento aplicado: ${descuento}%`;
}