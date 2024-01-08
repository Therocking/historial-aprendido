
interface User {
    name: string
    id: string
}

//? NOTA: Las fn retornan undefined implisitamente 

//* Función */
function main1 ( name: string, age: number ) {
    console.log(name, age);
    
}

function returnObjInterface ( name: string, id: string ): User { //* El return tiene que ser un obj igual al User.
    return {
        name,
        id,
    }

}

//* Con el "void" se el return de la fn.
//* Tendrá un error si el return es diferente a undefined.
function returnVoid ( name: string, id: string ): void {   
    console.log(name,  id);
}

//* El tipo never indica que la fn no tendrá un return.
//* Se detendrá antes de ejecutar el return.
function nerverRetutn ( name: string, id: string ): never {
    console.log(name,  id);
    throw new Error(`El id ${id} del usuario ${name}, no es un id válido.`)
}

//* Arrow function */

//* Forma 1 para declarar arrow fn. Forma más corta.
const VoidInArrowFn = ( name: string, id: string ): void => {
    console.log( name, id );
}

//* Forma 2 para declarar una arrow fn. 
//* Primero declara los tipos y luego la fn. 
const DeclareteType: (name: string, id: string) => void = ( name, id ) => {
    console.log( name, id );
}

// Tipos de objetos
const objParam = (persona: {name: string, age: number, id: string}) => {
    return persona;
}