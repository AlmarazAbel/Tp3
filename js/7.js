/**7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla
 * , la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 
 * del número elegido por el usuario.
 */
// Función que genera la tabla
function tablaMultiplicar(numero) {
  let resultado = "";

  for (let i = 1; i <= 10; i++) {
    resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
  }

  return resultado;
}

// Pedir número
let num = parseInt(prompt("Ingresá un número:"));

// Mostrar en pantalla
const pantalla = document.getElementById("pantalla");

if (isNaN(num)) {
  pantalla.innerHTML = `<p class="text-danger"> Número inválido</p>`;
} 
else {
  pantalla.innerHTML = `
    <h3 class ="text-warning">Tabla del ${num}</h3>
    ${tablaMultiplicar(num)}
  `;
}
