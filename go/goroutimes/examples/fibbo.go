package examples

import (
	"fmt"
	"time"
)

/*Close*/
// func fibbo(n int, ch chan int) {
// 	x, y := 0, 1
// 	for i := 0; i < n; i++ {
// 		ch <- x
// 		x, y = y, x+y
// 	}
// 	close(ch)
// }

/*Select*/
func fibbo(ch, quit chan int) {
	x, y := 0, 1
	for {
		select {
		case ch <- x:
			x, y = y, x+y
		case <-quit:
			fmt.Println("END")
			return
		default:
			fmt.Println("Waiting for channels ready.")
			time.Sleep(50 * time.Millisecond)
		}
	}
}

func Fibbo() {
	ch := make(chan int, 10)
	quit := make(chan int)

	/*Select*/
	go func() {
		for i := 0; i < 10; i++ {
			fmt.Println(<-ch)
		}
		quit <- 0
	}()
	fibbo(ch, quit)

	/*Close*/
	// go fibbo(cap(ch), ch)
	// for i := range ch {
	// 	fmt.Println(i)
	// }
	// _, ok := <-ch
	// if !ok {
	// 	log.Fatal("Channel close")
	// 	return
	// }
}
