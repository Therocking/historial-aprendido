package examples

import (
	"fmt"

	"golang.org/x/tour/tree"
)

func walk(t *tree.Tree, ch chan int) {
	if t.Left != nil {
		walk(t.Left, ch)
	}
	ch <- t.Value
	if t.Right != nil {
		walk(t.Right, ch)
	}
}

func same(t1, t2 *tree.Tree) bool {
	ch1 := make(chan int)
	ch2 := make(chan int)
	go walk(t1, ch1)
	go walk(t2, ch2)
	for i := 0; i < 10; i++ {
		if <-ch1 != <-ch2 {
			return false
		}
	}
	return true
}

func BT() {
	t1, t2 := tree.New(1), tree.New(1)
	go func() {
		fmt.Println(t1)
	}()

	bool := same(t1, t2)
	fmt.Println(bool)
	t2 = tree.New(2)
	bool = same(t1, t2)

	fmt.Println(bool)
}
