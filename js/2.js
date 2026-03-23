/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/


let ciudades = [];

// Pedir ciudades hasta que el usuario cancele
while (true) {
  let ciudad = prompt("Ingrese una ciudad (Cancelar para terminar):");

  if (ciudad === null) {
    break;
  }

  ciudades.push(ciudad);
}

const pantalla = document.getElementById("pantalla");

// Mostrar longitud del arreglo
pantalla.innerHTML += `<h3>El arreglo de ciudades tiene ${ciudades.length} elementos</h3>`;

// Mostrar primera, tercera y última posición
if (ciudades.length >= 1) {
  pantalla.innerHTML += `<p>Primera posición: ${ciudades[0]}</p>`;
}
if (ciudades.length >= 3)//Esta validando que el array tenga al menos 3 elementos
 {
  pantalla.innerHTML += `<p>Tercera posición: ${ciudades[2]}</p>`;
}
if (ciudades.length >= 1) {
  pantalla.innerHTML += `<p>Última posición: ${ciudades[ciudades.length - 1]}</p>`;//por que empieza a contar desde la posicion 0
}

// Añadir París al final
ciudades.push("París");

// Mostrar el elemento de la segunda posición
if (ciudades.length >= 2) {
  pantalla.innerHTML += `<p>Segunda posición: ${ciudades[1]}</p>`;
}

// Reemplazar la segunda posición por Barcelona
if (ciudades.length >= 2) {
  ciudades.splice(1, 0, "Barcelona");
}


// Mostrar lista completa
pantalla.innerHTML += `<h2>Arreglo de ciudades</h2>`;
pantalla.innerHTML += "<ul>";

for (let i = 0; i < ciudades.length; i++) {
  pantalla.innerHTML += `<li>${ciudades[i]}</li>`;
}

pantalla.innerHTML += "</ul>";