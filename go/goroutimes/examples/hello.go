package examples

import (
	"fmt"
	"time"
)

func say(s string) {
	for i := 0; i < 5; i++ {
		time.Sleep(time.Millisecond * 100)
		fmt.Println(s)
	}
}

func Say() {
	go say("world")
	say("hello")
}
