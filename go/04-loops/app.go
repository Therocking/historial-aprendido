package main

import "fmt"

// - for loop
/*func main() {
	sum := 0;
	for i := 0; i <= 10; i++ {
		sum += i
	}

	fmt.Println(sum)
}*/

// for - can add only the condition
func main() {
	sum := 1
	for sum <= 1000 {
		sum += sum
	}

	fmt.Println(sum)
}
