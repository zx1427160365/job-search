// package main

// import (
// 	"fmt"
// 	"math"
// )

// // minSubArrayLen 找出数组中满足其和 >= target 的长度最小的连续子数组，并返回其长度
// func minSubArrayLen(target int, nums []int) int {
// 	// 定义滑动窗口的左边界
// 	left := 0
// 	// 记录滑动窗口内元素的总和
// 	sum := 0
// 	// 初始化最小长度为一个非常大的值，代表初始状态还没找到合适的子数组
// 	minLen := math.MaxInt32

// 	// right 作为滑动窗口的右边界，不断向右移动
// 	for right := 0; right < len(nums); right++ {
// 		// 将新进入窗口的元素加入总和
// 		sum += nums[right]

// 		// 当窗口内的和 >= target 时，说明找到了一个满足条件的子数组
// 		for sum >= target {
// 			// 计算当前窗口（子数组）的长度
// 			subLen := right - left + 1
// 			// 更新记录的最短长度
// 			if subLen < minLen {
// 				minLen = subLen
// 			}
// 			// 尝试缩小窗口：将左边界元素移出窗口，减去其值
// 			sum -= nums[left]
// 			// 左边界向右移动
// 			left++
// 		}
// 	}

// 	// 如果 minLen 还是初始化的最大值，说明没找到任何满足条件的子数组，返回 0
// 	if minLen == math.MaxInt32 {
// 		return 0
// 	}
// 	return minLen
// }

// func main() {
// 	// 题目示例
// 	target := 7
// 	nums := []int{2, 3, 1, 2, 4, 3}

// 	result := minSubArrayLen(target, nums)
// 	fmt.Printf("输入：s = %d, nums = %v\n", target, nums)
// 	fmt.Printf("输出：%d\n", result)
// }

package main

import (
	"fmt"
	"math"
)

func minSubArr(target int, nums []int) int {
	left := 0
	sum := 0

	minlen := math.MaxInt32

	// right 作为滑动窗口的右边界，不断向右移动
	for right := 0; right < len(nums); right++ {
		sum += nums[right]
		for sum >= target {
			subLen := right - left + 1

			if subLen < minlen {
				minlen = subLen
			}

			sum -= nums[left]
			left++
		}
	}

	if minlen == math.MaxInt32 {
		return 0
	}
	return minlen
}

func main() {
	target := 7
	nums := []int{2, 3, 1, 2, 4, 3}
	result := minSubArr(target, nums)
	fmt.Printf("输出：%d\n", result)
}
