/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
 luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58*/
// Función para calcular el perímetro

/*function calcularPerimetro(a, b) {
  return 2 * (a + b);
}*/
const calcularPerimetro = (a, b) => 2 * (a + b);//arrow

// Pedir datos al usuario
let A = parseFloat(prompt("Ingresá el valor del lado A:"));
let B = parseFloat(prompt("Ingresá el valor del lado B:"));

// Obtener elemento
const pantalla = document.getElementById("pantalla");

// Validar datos
if (isNaN(A) || isNaN(B)) {
  pantalla.innerHTML = `<p class="text-warning"> Ingresá valores válidos</p>`;
} else {
  let perimetro = calcularPerimetro(A, B);

  pantalla.innerHTML = `
    <p class="text-primary">
      Perímetro: ${perimetro}
    </p>
  `;
}