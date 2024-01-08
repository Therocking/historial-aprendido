package main

import (
	"fmt"
	"time"
	//"runtime"
)

// - condicionals
/*func sqrt( x float64) string {
	if x < 0 {
		return sqrt( -x ) + "i"
	}
	return fmt.Sprint(math.Sqrt(x))
}

func main() {
	fmt.Println( sqrt(100), sqrt(-4) )
}*/

// - short condicions
/*func pow( x, n, lim float64 ) float64 {
	if v := math.Pow( x, n ); v < lim {
		return v
	}
	return lim
}

func main() {
	fmt.Println(
		pow( 3, 2, 10 ),
		pow( 3, 3, 20 ),
	)
}*/

// - if-else
/*func pow( x, n, lim float64 ) float64 {
	if v := math.Pow( x, n ); v < lim {
		return v
	}else {
		fmt.Printf("%g >= %g\n", v, lim)
	}
	return lim
}

func main() {
	fmt.Println(
		pow( 3, 2, 10 ),
		pow( 3, 3, 20),
	)
}*/

// - swicth
/*func main() {
	fmt.Print("Go runs on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.\n", os)
	}
}*/

// - switch without no condition
func main() {
	t := time.Now()
	switch {
	case t.Hour() < 12:
		fmt.Println("Good morning!!")
	case t.Hour() < 17:
		fmt.Println("Good afternoon!!")
	default:
		fmt.Println("Good nigth!!")
	}
}
