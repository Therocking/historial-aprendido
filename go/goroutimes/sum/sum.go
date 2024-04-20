package sum

import "fmt"

func sum(ints []int, c chan int) {
	sum := 0
	for _, v := range ints {
		sum += v
	}
	c <- sum
}

func Result() {
	ints := [8]int{1, 23, 45, 67, 7, 12, 34, 12}
	c := make(chan int)

	go sum(ints[:len(ints)/2], c)
	go sum(ints[len(ints)/2:], c)
	x, y := <-c, <-c

	fmt.Printf("Valor de x: %v, de y: %v y suma: %v\n", x, y, x+y)
}
