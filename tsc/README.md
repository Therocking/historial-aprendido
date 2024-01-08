# TypeScript

## Temas más cortos

### Optional properties
Se utiliza en los objetos para especificar que una propiedad puede o no estar presente, ejemplo:
``` TypeScript
const optionaPropertie = ( obj: { name: string, age?: number } ) => {
    console.log( obj.name.split() );

    console.log( obj.age.toString() );
}
```
    'obj.age' is possibly 'undefined'.

Al utilizar las **Optional properties** se tiene que especificar que no se **undefined**:
``` TypeScript
const optionaPropertie = ( obj: { name: string, age?: number } ) => {
    console.log( obj.name.split() );

    if( obj.age !== undefined ) {
        console.log( obj.age.toString() );
    }
}
```

### Union type
Es un tipo que puede tener más de un tipo o valor, en el puedes especificar cuales tipos o valores acepta este:
``` TypeScript
const unionType = string | number;

console.log( unionType.charAt(0) ) // Dará un error porque number no tiene el método charAt 
```
Con el union type no se pueden utilizar métodos en los que solo este disponible para uno de los tipos. Para hacerlo se tendrá que especificar que es el tipo que quiere utilizar:
``` TypeScript
const unionType = string | number;

if( typeOf unionType === 'string' ) {
    console.log( unionType.charAt(0) )
}else {
    console.log( unionType )
}
```

O también puede usar tipos que compartan métodos, como los **string** y **array**:
``` TypeScript
const unionType = string | string[];
console.log( unionType.slice(0,2) )
```