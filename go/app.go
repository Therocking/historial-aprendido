package main

import (
	"fmt"
	//"math"
)

// - func math

/*func main() {
	fmt.Printf("Now you have %g problems.\n", math.Sqrt(7))
}*/

//func main() {
//	fmt.Printf("Type: %T Value: %v\n", toBe, toBe) // shows the type of value and value
//	fmt.Printf("Type: %T Value: %v\n", maxInt, maxInt)
//	fmt.Printf("Type: %T Value: %v\n", z, z)
//}

// - defer
/*func main() {
	defer fmt.Println("Final.") // is execute when the return of fn is called.

	fmt.Println("Primero");
	fmt.Println("Segundo")
}*/

// - defer in loop
/* func main() {
	fmt.Println("Inicio")

	for c := 1; c <= 10; c++ {
		defer fmt.Println("defer", c)
	}

	defer fmt.Println("last defer")

	fmt.Println("Final")
} */

// - pointers
func main() {
	var p = 45
	i := &p         //i is a pointer with value of p
	fmt.Println(*i) //to get the real value  of pointer use "*"  before pointer
}
