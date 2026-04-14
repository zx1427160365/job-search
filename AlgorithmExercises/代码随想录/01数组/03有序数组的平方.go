package main

import "fmt"

// sortedSquares 接收一个按非递减顺序排序的整数数组 nums
// 返回每个数字平方后也按非递减顺序排序的新数组
func sortedSquares(nums []int) []int {
	n := len(nums)
	// 初始化一个同样大小的结果数组
	result := make([]int, n)

	// 使用双指针，left 指向数组最左端，right 指向数组最右端
	left, right := 0, n-1

	// 从结果数组的最后一个位置开始填充，因为最大的平方值一定在原数组的两端
	for i := n - 1; i >= 0; i-- {
		// 计算左右两端元素的平方值
		leftSquare := nums[left] * nums[left]
		rightSquare := nums[right] * nums[right]

		// 比较两端平方值的大小
		if leftSquare > rightSquare {
			// 如果左边的平方值大，就把它放在结果数组当前能够放置的最末尾
			result[i] = leftSquare
			// 左指针向右移动一位
			left++
		} else {
			// 如果右边的平方值大（或等于），把它放在结果数组的末尾
			result[i] = rightSquare
			// 右指针向左移动一位
			right--
		}
	}

	return result
}

func main() {
	// 示例 1
	nums1 := []int{-4, -1, 0, 3, 10}
	res1 := sortedSquares(nums1)
	fmt.Printf("示例 1:\n")
	fmt.Printf("输入: %v\n", nums1)
	fmt.Printf("输出: %v\n\n", res1)

	// 示例 2
	nums2 := []int{-7, -3, 2, 3, 11}
	res2 := sortedSquares(nums2)
	fmt.Printf("示例 2:\n")
	fmt.Printf("输入: %v\n", nums2)
	fmt.Printf("输出: %v\n", res2)
}
