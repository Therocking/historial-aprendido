// Para escribir el formato ASCII se utilizan los siguientes metodos:
// "".charCode(0) -> para combertir en ASCII.
// String.fromCharCode(númbero a revertir) -> para revertir el ASCII y retornar el simbolo.

const str = "hola";
console.log("String to ASCII", str.charCodeAt(0));

const num = 65;
console.log("ASCII to Simbol", String.fromCharCode(num))
