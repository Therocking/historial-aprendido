# Funciones
En las funciones se pueden declarar tipos en los valores de entrada y de salida.

## Anotaciones de entrada
Para tipar los parámetros se agrega el tipo luego del nombre del parametro.
```TypeScript
function main ( name: string ) {
    console.log(name);
}

// Si se le pasa un parametro diferente al indicado en la función le saltarán erroes al momento de compilar

main(12)
```
Si al parámetro no se le indica un tipo, El valor por defecto será any.
```TypeScript
function main ( name ) { //! Member 'name' implicitly has an 'any' type.
    console.log(name);
}
```

## Anotaciones de salida o retorno
Para indicar el tipo del valor de retorno(salida), se indican luego de la lista de parámetros.
```TypeScript
function main (): string {   
    return 'Hola TypeScript'
}
```
TypeScript puede infierir que tipo de valor tiene el valor de retorno(salida), por lo que, no siempre es necesario indicar explicitamente su tipo.

## Funciones que devuelven promesas
Para anotar el tipo de retorno(salida) de una fución que devuelve una promesa debe usar el **Promise**
```TypeScript
async function main (): Promise<string> { // Lo mismo se puede hacer para otros tipos
    return 'Hola TypeScript'
}
```

## Funciones anónimas
En las funciones anónimas, TypeScript puede inferir el valor que tendrá, puede determinar el tipo que tendrán los parámetros dependiendo del contexto.
```TypeScript
const array = ['tipo', 'cadena', 'texto']

array.map( s => {
    console.log( s.trim() )
})
```