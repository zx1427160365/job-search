// package main

// import "fmt"

// // search 实现二分查找算法
// // 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target
// // 如果目标值存在返回下标，否则返回 -1
// func search(nums []int, target int) int {
// 	// 定义左边界和右边界，使用左闭右闭区间 [left, right]
// 	left := 0
// 	right := len(nums) - 1

// 	// 当 left <= right 时，区间 [left, right] 依然有效，说明区间内还有元素需要判断
// 	for left <= right {
// 		// 计算中间位置，防止 (left + right) 导致整型溢出
// 		mid := left + (right-left)/2

// 		if nums[mid] == target {
// 			// 找到目标值，直接返回下标
// 			return mid
// 		} else if nums[mid] < target {
// 			// 如果中间值小于目标值，说明目标值在右半区间
// 			// 更新左边界为 mid + 1，继续在 [mid + 1, right] 中查找
// 			left = mid + 1
// 		} else {
// 			// 如果中间值大于目标值，说明目标值在左半区间
// 			// 更新右边界为 mid - 1，继续在 [left, mid - 1] 中查找
// 			right = mid - 1
// 		}
// 	}

// 	// 循环结束未找到目标值，返回 -1
// 	return -1
// }

// func main() {
// 	// 示例测试
// 	nums := []int{-1, 0, 3, 5, 9, 12}
// 	target := 9
// 	result := search(nums, target)

// 	fmt.Printf("输入: nums = %v, target = %d\n", nums, target)
// 	fmt.Printf("输出: %d\n", result)
// }

package main

import (
	"fmt"
)

func searchFun(nums []int, target int) int {
	left := 0
	right := len(nums) - 1

	for left <= right {
		mid := left + (right-left)/2
		if nums[mid] == target {
			return mid
		} else if nums[mid] < target {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return -1
}

func main() {
	nums := []int{-1, 0, 3, 5, 9, 13}
	target := 13
	result := searchFun(nums, target)
	fmt.Printf("输出: %d\n", result)
}

//add knowledge：
/*
在 Go 语言（以及 C、C++、Java 等大多数强类型语言）中，如果参与除法运算 / 的两边都是整数（ int 类型），那么执行的就是 整数除法 。
整数除法的特点是 直接截断小数部分（向下取整） ，只保留整数结果。
*/
