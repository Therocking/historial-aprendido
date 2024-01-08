/*  
 * Tipos de datos
 * string
 * number
 * boolean
 * symbol
 * never
 * void
 * any
*/


// Inference
// Functions
// Array
// Objects
// Type alias
// Interfaces
// Optional properties
// Template union type
// Union types
// Insertion types

let iterator: string,
    operacion: any,
    valorA: number,
    valorB: number

iterator = '*', valorA = 25, valorB = 100;

switch (iterator) {
    case '+':
        operacion = ( a: number, b: number ) => {
            return a + b
        }
    break;

    case '-':
        operacion = ( a: number, b: number ): number => {
            return a - b
        }
    break;

    case '*':
        operacion = ( a: number, b: number ) => {
            return a * b
        }
    break;

    case '/':
        operacion = ( a: number, b: number ) => {
            return a / b
        }
    break;

    default:
        throw new Error(`El "${iterator}" no es un valor no reconocido`);
}

const resultado = operacion( valorA, valorB );
console.log(resultado);