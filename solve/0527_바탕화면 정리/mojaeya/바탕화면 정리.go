package main

import (
	"fmt"
)

func main() {
	wallpaper := []string{".#...", "..#..", "...#."}
	result := solution(wallpaper)
	fmt.Println(result)
}

func solution(wallpaper []string) []int {
	X := make([]int, 0)
	Y := make([]int, 0)

	for i := 0; i < len(wallpaper); i++ {
		for j := 0; j < len(wallpaper[0]); j++ {
			if string(wallpaper[i][j]) == "#" {
				X = append(X, i)
				Y = append(Y, j)
			}
		}
	}

	minX := min(X)
	minY := min(Y)
	maxX := max(X) + 1
	maxY := max(Y) + 1

	return []int{minX, minY, maxX, maxY}
}

func min(arr []int) int {
	if len(arr) == 0 {
		return 0
	}

	minVal := arr[0]
	for i := 1; i < len(arr); i++ {
		if arr[i] < minVal {
			minVal = arr[i]
		}
	}

	return minVal
}

func max(arr []int) int {
	if len(arr) == 0 {
		return 0
	}

	maxVal := arr[0]
	for i := 1; i < len(arr); i++ {
		if arr[i] > maxVal {
			maxVal = arr[i]
		}
	}

	return maxVal
}
