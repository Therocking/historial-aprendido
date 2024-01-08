# Tipos de datos
Los tipos de datos en go se clasifican en cuatro categorias:

- **Basic types**: string, numbers(int, etc) y boolens.
- **Agregate types**: arrays y structs.
- **Reference type**: pointers, slice, maps, functions y channels.
- **Interface types**: interface.

## Tipos de datos basicos
- bool
- string
- int
- int8
- int16
- int32
- int64
- uint
- uint8
- uint16
- uint32
- uint64
- uintptr
- byte <!--alias para uint8-->
- rune <!--alias para uint32--> <!--representa un unico punto de código-->
- float32
- float64
- complex64
- complex128

## Tipos
Para declarar el tipo de una varible se pone el tipo luego del nombre de la varible:
```go
var num int

func main( arg1 string, arg2 string ) {
	fmt.Println(arg1, arg2)
}
```

Si las variables o argumentos tienen el mismo tipo se puede sólo poner el tipo una sola vez:
```go
func main(arg1, arg2 string) {
	fmt.Println(arg1, arg2)
}
```

Y támbien está esta forma:
```go
var(
	nombreVariable tipo = valor
	nombreVariable2 tipo = valor
)
```

## Tipos en retorno de una func
Para declarar el tipo de valor que retorna una func se especifícan luego de los argumentos de la func:
```go
func main( arg1 int ) int {
	fmt.Println(arg1)
}
```

Si se retornan más de un valor se en listan los valores de los argumentos luego de declararlos:
```go
func main( arg1, arg2 string ) ( string, string ) {
	fmt.Println(arg1, arg2)
}
```
