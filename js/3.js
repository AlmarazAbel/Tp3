/*3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios
 entre 1 y 6 para cada uno de los lanzamientos de los dados. 
 Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
  repitiendo 50 veces esta operación.
*/ 
// Array para contar las apariciones de las sumas (del 2 al 12)
let resultados = new Array(13).fill(0); //creo un array con 13 posiciones y agregos 0 para que esten defnidos los valores y no de NaN

// Simular 50 lanzamientos
for (let i = 0; i < 50; i++) {
  
  // Generar dos dados (1 a 6)
  let dado1 = Math.floor(Math.random() * 6) + 1; //Math.random() * 6 Lo convierte en un número entre 0 y 5.999...
  let dado2 = Math.floor(Math.random() * 6) + 1;//Math.floor(...) Redondea hacia abajo Quedan números entre 0 y 5
  //+ 1 Sumamos 1 para que vaya de 1 a 6

  // Sumar dados
  let suma = dado1 + dado2;

  // Contar la aparición
  resultados[suma]++;
}

// Mostrar resultados
const pantalla = document.getElementById("pantalla");

let tabla = `<table class="table table-striped ">
<tr>
  <th> Suma 🎲 🎲 </th>
  <th> Apariciones </th>
</tr>`;


// Llenar filas
for (let i = 2; i <= 12; i++) {
  tabla += `
  <tr>
    <td>${i}</td>
    <td>${resultados[i]}</td>
  </tr>`;
}

tabla += `</table>`;

// Mostrar en pantalla
pantalla.innerHTML = tabla;