package main

import "fmt"

// - arrays
/*func main() {
	var a [2]string
	a[0] = "Hola"
	a[1] = "Arrays"
	fmt.Println(a)
	fmt.Println(a[0], a[1])

	var b = [6]int{1,2,3,4,5,6}
	fmt.Println(b)
}*/

// - slices
func main() {
	a := [6]int{1, 2, 3, 4, 5, 8}

	var b []int = a[0:5]
	fmt.Println(b)
}
