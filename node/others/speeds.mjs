// Comparar la velicidad de ejecución de métodos y bloques de código

// map vs foreach
/*console.time()
const arr = ['Pera', 'Piña', 'Manzana', 'Guayaba', 'Melón']
// arr.map( fruit => fruit.toUpperCase() ) // - 0.127ms
// arr.forEach( fruit => fruit.toUpperCase() )
console.timeEnd()*/

/**/
/*console.time()
const siOno = 'si'
const sum = {
   'si': () => 5+5,
   'no': () => 5*5
} // - 0.12ms

function sumar(accion) {
   if(accion !== 'si') return 5*5

   return 5+5
} //- 0.11


//console.log(sumar(siOno))
//console.log(sum[siOno]())
console.timeEnd()*/

console.time()
const datosSalidaProgramadores = [
  {
    nombre: "Uncle Bobby",
    liniasDeCodigo: 500
  },
  {
    nombre: "Suzie Q",
    liniasDeCodigo: 1500
  },
  {
    nombre: "Jimmy Gosling",
    liniasDeCodigo: 150
  },
  {
    nombre: "Gracie Hopper",
    liniasDeCodigo: 1000
  }
];
let salidaFinal = 0;

for (let i = 0; i < datosSalidaProgramadores.length; i++) {
  salidaFinal += datosSalidaProgramadores[i].liniasDeCodigo;
}
/*
const salidaFinal = datosSalidaProgramadores
  .map(salida => salida.linesOfCode)
  .reduce((totalLinias, linias) => totalLinias + linias);*/
console.timeEnd()
