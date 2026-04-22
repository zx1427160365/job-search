// package main

// import "fmt"

// // generateMatrix 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素
// // 且元素按顺时针顺序螺旋排列的正方形矩阵
// func generateMatrix(n int) [][]int {
// 	// 1. 先创建一个长度为 n 的“外层切片”
// 	// 这个切片里的每一个元素，未来都将用来存放“一行”数据（即另一个切片 []int）
// 	matrix := make([][]int, n)

// 	// 2. 遍历刚刚创建的外层切片
// 	for i := range matrix {
// 		// 3. 为外层切片的每一个位置，真正分配一个长度为 n 的“内层切片”（也就是列）
// 		matrix[i] = make([]int, n)
// 	}

// 	// 2. 定义四个边界
// 	top, bottom, left, right := 0, n-1, 0, n-1

// 	// 3. 初始化要填入的数字，从 1 开始，直到 n * n
// 	num := 1
// 	target := n * n

// 	// 4. 开始顺时针螺旋填充
// 	for num <= target {
// 		// 从左到右，填充上边界
// 		for i := left; i <= right && num <= target; i++ {
// 			matrix[top][i] = num
// 			num++
// 		}
// 		top++ // 上边界下移一层

// 		// 从上到下，填充右边界
// 		for i := top; i <= bottom && num <= target; i++ {
// 			matrix[i][right] = num
// 			num++
// 		}
// 		right-- // 右边界左移一层

// 		// 从右到左，填充下边界
// 		for i := right; i >= left && num <= target; i-- {
// 			matrix[bottom][i] = num
// 			num++
// 		}
// 		bottom-- // 下边界上移一层

// 		// 从下到上，填充左边界
// 		for i := bottom; i >= top && num <= target; i-- {
// 			matrix[i][left] = num
// 			num++
// 		}
// 		left++ // 左边界右移一层
// 	}

// 	return matrix
// }

// func main() {
// 	// 示例
// 	n := 3
// 	result := generateMatrix(n)

// 	fmt.Printf("输入: %d\n", n)
// 	fmt.Println("输出:")
// 	for _, row := range result {
// 		fmt.Printf("%v\n", row)
// 	}
// }

package main

import "fmt"

func generateMatrix(n int) [][]int {
	matrix := make([][]int, n)
	for i := range matrix {
		matrix[i] = make([]int, n)
	}

	top, bottom, left, right := 0, n-1, 0, n-1

	num := 1
	target := n * n

	for num <= target {
		for i := left; i <= right && num <= target; i++ {
			matrix[top][i] = num
			num++
		}
		top++

		for i := top; i <= bottom && num <= target; i++ {
			matrix[i][right] = num
			num++
		}
		right--

		for i := right; i >= left && num <= target; i-- {
			matrix[bottom][i] = num
			num++
		}
		bottom--

		for i := bottom; i >= top && num <= target; i-- {
			matrix[i][left] = num
			num++
		}
		left++
	}

	return matrix
}

func main() {
	n := 4
	result := generateMatrix(n)

	fmt.Printf("输出：%d\n", n)

	// 遇到不确定类型的变量，或者想快速打印切片/Map/结构体时，无脑用 %v 准没错！
	for _, row := range result {
		fmt.Printf("%v\n", row)
	}
}
