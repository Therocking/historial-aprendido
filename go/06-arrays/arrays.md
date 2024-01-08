# Arrays
Para definir un array primero se le pone el length del array y luego el tipo de los datos:
```go
func main() {
	var a = [2]int
	fmt.Println( a[1,1] )
}
```

Támbien se le pueden añadir los datos directamente(osea un array literal):
```go
func main() {
	var a = [2]int{1,1}
	fmt.Println( a )
}
```

A los arrays en **go** se les puede desestructurar como en **js** y cambiar sus valores utilizando los corchetes "[]":
```go
func main() {
	var a = [2]int
	a[1] = 5
	fmt.Println( a, a[1] )
}
```
## Slice o cortar arrays
A los arrays se les puede limitar la cantidad de valores a para utilizar o cortarlos utilizando la sintaxis ```array[ low : high ]```, siendo **low** el número donde empezar a cortar y **high** hasta donde se cortará:
```go
func main() {
	var a = [5]int{5,8,7,9,6}
	fmt.Println( a[1:2] )
}
```