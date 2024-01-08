# Variables y constantes

## Declarar variables y constantes
Para declarar variables se puede hacer de dos formas diferentes utilizando el **var** o de la forma corta con el **:=**(pero este sólo se puede utilizar dentro de una func, no puede usarse en el scope global):

### var
```go
var num = 20
```

### :=
```go
func main() {
	num := 20
	fmt.Println(num)
}
```

Para las constantes no se puede utilizar la forma corta del var **:=**, sólo se utiliza la palabra resevada **const**

### const
```go
const num int
```

## Declarar multiples variables
Al declarar multiples variables los tipos de estas se declaran luego de nombrar todas las variables
```go
var num, num2 int 
```

Si se le quiere poner valores se especifícan uno por cada varible luego de que sean nombradas:
```go
var num, num2, word = 1, 2, "Hola"
```

Támbien se puede hacer de la forma corta:
```go
func main() {
	num, num2 := 1, 5
}
```

Y para nombra multiples constantes es igual al **var** pero utilizando **const**:
```go
const (
	num2 = 4;
	num3 = 5;
)
```