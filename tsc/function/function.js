//? NOTA: Las fn retornan undefined implisitamente 
/* Normal function */
// function main ( name: string, age: number ) {
//     console.log(name, age);
// }
// main( 'jose', 18 );
// function main ( name: string, id: string ): User { //* El return tiene que ser un obj igual al User.
//     return {
//         name,
//         id,
//     }
// }
// console.log( main( 'jose',  '123') );
//* Con el "void" se el return de la fn.
//* Tendrá un error si el return es diferente a undefined.
// function main ( name: string, id: string ): void {   
//     console.log(name,  id);
// }
// main( 'jose',  '123')
//* El tipo never indica que la fn no tendrá un return.
//* Se detendrá antes de ejecutar el return.
// function main ( name: string, id: string ): never {
//     console.log(name,  id);
//     throw new Error(`El id ${id} del usuario ${name}, no es un id válido.`)
// }
// main( 'jose',  '123')
/* Arrow function */
//* Forma 1 para declarar arrow fn. Forma más corta.
// const main = ( name: string, id: string ): void => {
//     console.log( name, id );
// }
// main( 'jose', '123' )
//* Forma 2 para declarar una arrow fn. 
//* Primero declara los tipos y luego la fn. 
var main = function (name, id) {
    console.log(name, id);
};
main('jose', '123');
// 
var user = function (persona) {
    return persona;
};
var persona = {
    name: 'Pedro',
    age: 54,
    id: crypto.randomUUID()
};
var res = user(persona);
console.log(res);
