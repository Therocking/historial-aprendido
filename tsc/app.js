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
var iterator, operacion, valorA, valorB;
iterator = '*', valorA = 25, valorB = 100;
switch (iterator) {
    case '+':
        operacion = function (a, b) {
            return a + b;
        };
        break;
    case '-':
        operacion = function (a, b) {
            return a - b;
        };
        break;
    case '*':
        operacion = function (a, b) {
            return a * b;
        };
        break;
    case '/':
        operacion = function (a, b) {
            return a / b;
        };
        break;
    default:
        throw new Error("El \"".concat(iterator, "\" no es un valor no reconocido"));
}
var resultado = operacion(valorA, valorB);
console.log(resultado);
