//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año.
//  Mostrar por pantalla en forma de lista los doce nombres del arreglo.
// Crear el array con los 12 meses

let meses = ["Enero", "Febrero", "Marzo", "Abril",
      "Mayo", "Junio", "Julio", "Agosto",
      "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

const pantalla = document.getElementById('pantalla')
pantalla.innerHTML+=`<h2>Lista de Meses</h2>`

listaMeses = '<ul>'
for(let i=0;i<meses.length;i++){
 listaMeses += `<li>${meses[i]}</li>`
 }
 listaMeses += '</ul>'
 pantalla.innerHTML +=listaMeses