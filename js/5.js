/**Definir una función que muestre información sobre una cadena de texto
 *  que se le pasa como argumento. A partir de la cadena que se le pasa,
 *  la función determina si esa cadena está formada sólo por mayúsculas, 
 * sólo por minúsculas o por una mezcla de ambas.
 */
function analizarArray(texto) {

  if (texto === texto.toUpperCase()) {
    return "La cadena está en MAYÚSCULAS";
  }

  else if (texto === texto.toLowerCase()) {
    return "La cadena está en MINÚSCULAS";
  }
  
  else {
    return "La cadena es una MEZCLA de mayúsculas y minúsculas";
  }
}

// Pedir texto
let cadena = prompt("Ingresá una cadena de texto:");

// Mostrar resultado
const pantalla = document.getElementById("pantalla");

pantalla.innerHTML = `
  <p class="text-warning">${analizarArray(cadena)}</p>
`