package main

import "fmt"

// - structs
/* func main() {

	type Vertex struct {
		x int
		y int
	}

	obj := Vertex{1, 2}
	fmt.Println(obj)

} */

// - structs literal
func main() {

	type Vertex struct {
		X int
		Y int
	}

	var (
		v1 = Vertex{1, 2}  // has Vertex
		v2 = Vertex{X: 1}  // declare field X but no Y, by default is 0
		v3 = Vertex{}      // X and y equal 0
		p  = &Vertex{Y: 2} // has type *Vertex
	)

	fmt.Println(
		v1,
		v2,
		v3,
		p,
	)
}
