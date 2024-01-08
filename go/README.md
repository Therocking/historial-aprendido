# GO

## Defers
Los **defers** se utilizan para que una o más tareas en especico se ejecuten al final del ciclo de ejecución de un bloque.

```go
defer fmt.Println("defer")
```

El orden de sálida de los **defers** son `last-in-first-out`, osea que el último **defer** en ser llmado es el primero ejecutarse(lo contrario de node, que es first-in-first-out).

```go
defer fmt.Println("defer 1")
defer fmt.Println("defer 2")

// el "defer 2" será ejecutado primero.
```

## Pointers
Los pointers(punteros) se utilizan para guardar la dirección en memoria de un valor, si no tiene valor será **nil**.

Para asignar una variable como puntero primero se necesita una variable ```p := 21``` luego en otra variable se utiliza el operador "**&**" antes de la variable con el valor para el puntero ```s := &p```.

Si se trata de utiliza el puntero así:
```go
fmt.Println(s)
```
El valor no será: ```21```, sino un valor con esta estructura: ```0xc000094000```, si se le quiere hacer referencia al valor real del puntero se debe de poner un asterico(*) antes del puntero:
```go
fmt.Println(s) //este dará un error, porque no se puede acceder de esa forma a un puntero
fmt.Println(*s) // se le tiene que poner el "*"
```