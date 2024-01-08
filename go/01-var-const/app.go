package main

import "fmt"

// - variables

/*var css, js bool

func main() {0
	var num int
	fmt.Println(num, css, js, e)
}*/

/*var c, j int = 1, 2

func main() {
	var s = "hola"
	var d, f, g = false, 5, true
	fmt.Println(c, j, s, d, f, g)
}*/

/* - declared variables without values */

// La variables por defecto tienen un valor cero, para los booleanos este es 'false', para strings es: ' "" ' y para los números es: '0'(los complex son para operaciones con num imaginarios su valor es: '(0+0i)').

/* func main() {
	var i int
	var f float64
	var b bool
	var s string

	fmt.Printf("%v %v %v %q\n", i, f, b, s)
} */

// - short varible declaration

func main() {
	var cosa = "mesa"
	num := 40
	//num2 = 7
	c, java := false, false
	fmt.Println(cosa, num, c, java)
}
