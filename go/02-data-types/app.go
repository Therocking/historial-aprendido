package main

import "fmt"

// - types

/*func add(x, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}*/

// - func return more two string or values

/*func swap(a, b string) (string, string) {
	return a, b
}

func main() {
	x, y := swap("hello", "world")
	fmt.Println(x, y)
}*/

// - named return value

/*func split( num int ) ( y, x int ) {
	y = num * 4 / 9
	x = num - y
	return
}

func main() {
	fmt.Println( split(4) )
}*/

// - basic data types

/*var(
	toBe bool = false
	maxInt uint64 = 1<<64 - 1@id:golang.go
	z complex128 = cmplx.Sqrt(-5 + 12i)
)*/

// - type combersion

func main() {
	var num = 12
	var numToFloat = float64(num)
	fmt.Println(numToFloat, num)
}
