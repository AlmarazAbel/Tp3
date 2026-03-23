/**4- Escribir el código de una función a la que se pasa como parámetro un número entero 
 * y devuelve como resultado una cadena de texto que indica si el número es par o impar.
 *  Mostrar por pantalla el resultado devuelto por la función.

 */
function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return "PAR";
  } else {
    return "IMPAR";
  }
}
// Pedir número al usuario
let num = parseInt(prompt("Ingresá un número entero:"));
// Validar si es número
const pantalla = document.getElementById("pantalla");

if (isNaN(num)) {//es un numero?
  pantalla.innerHTML = "<p>Ingresa un numero valido</p>";
} else {
  pantalla.innerHTML = `<p class='text-danger'>El Número: ${num} es ${esParOImpar(num)}</p>`;
}