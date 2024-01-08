package main

import "fmt"

func quickSort(items []int) []int {
	length := len(items)
	if length < 1 {
		return items
	}

	firstItem := items[0]
	greater := []int{}
	lesser := []int{}

	for i := 1; i < length; i++ {
		if items[i] > firstItem {
			greater = append(greater, items[i])
		} else {
			lesser = append(lesser, items[i])
		}
	}
	result := []int{}
	result = append(result, greater[:]...)
	result = append(result, firstItem)
	result = append(result, lesser[:]...)

}

func main() {
	items := []int{5, 1, 2, 7, 7}
	fmt.Println(quickSort(items))
}
