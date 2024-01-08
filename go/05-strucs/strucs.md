# Structs
Las structs u objetos son básicamente objetos en los que se pueden guardar varios campos.

Sintaxis:
```go
func main() {

	type Vertex struct {
		x int
		y int
	}

	fmt.Print( Vertex{1, 2} )
}
```

Para utilizar un struct(u objeto en js) primero se define su structura y luego se le insertan los valores que concuerden con la estructura del struct.

Si se quiere acceder a un valor específico se utiliza el punto(osea desestructuración):
```go
func main() {

	type Vertex struct {
		X int
		Y int
	}

	v := Vertex{1, 2}
	fmt.Print( v.Y )
}
```

### Pointer para structs
Para accerder a valores de un struct cuando tiene un puntero se puede no utilizar el "*", ya que es un poco menos fácil de leer:
```go
func main() {

	type Vertex struct {
		X int
		Y int
	}

	v := Vertex{1, 2}
	p := &v
	p.X = 1e9 // se puede utilizar asi en vez de *p.X = 1e9, pero en structs
	fmt.Print( p )
}
```

### Structs literal
Es como en js agregar las propiedades con su nombre dentro del objeto:
```go
func main() {

	type Vertex struct {
		X int
		Y int
	}

	v := Vertex{ X:1, Y:2}
	fmt.Print( v )
}
```

Si hay una propiedad vacía dentra el valor por defecto de "0".