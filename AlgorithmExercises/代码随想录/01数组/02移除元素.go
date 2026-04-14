// package main

// import "fmt"

// // removeElement 使用双指针法原地移除数组中所有值为 val 的元素
// // 返回移除后新数组的长度
// func removeElement(nums []int, val int) int {
// 	// slow 指针表示：新数组中的元素应该存放的位置
// 	slow := 0

// 	// fast 指针用于遍历原数组中的每一个元素
// 	for fast := 0; fast < len(nums); fast++ {
// 		// 如果当前遍历到的元素不等于要移除的值 val
// 		// 说明这个元素是需要保留的
// 		if nums[fast] != val {
// 			// 将需要保留的元素存放到 slow 指针所在的位置
// 			nums[slow] = nums[fast]
// 			// slow 指针向前移动一位，准备接收下一个需要保留的元素
// 			slow++
// 		}
// 		// 如果 nums[fast] == val，说明是要被移除的元素，
// 		// 此时 slow 不移动，相当于直接跳过了这个元素
// 	}

// 	// 遍历结束后，slow 的值正好就是新数组的长度
// 	return slow
// }

// func main() {
// 	// 示例 1
// 	nums1 := []int{3, 2, 2, 3}
// 	val1 := 3
// 	len1 := removeElement(nums1, val1)
// 	fmt.Printf("示例 1:\n")
// 	fmt.Printf("返回新长度: %d\n", len1)
// 	fmt.Printf("修改后的数组前 %d 个元素: %v\n\n", len1, nums1[:len1])

// 	// 示例 2
// 	nums2 := []int{0, 1, 2, 2, 3, 0, 4, 2}
// 	val2 := 2
// 	len2 := removeElement(nums2, val2)
// 	fmt.Printf("示例 2:\n")
// 	fmt.Printf("返回新长度: %d\n", len2)
// 	fmt.Printf("修改后的数组前 %d 个元素: %v\n", len2, nums2[:len2])
// }

package main

import "fmt"

func removeEle(nums []int, delVal int) int {
	slow := 0
	for fast := 0; fast < len(nums); fast++ {
		if nums[fast] != delVal {
			nums[slow] = nums[fast] // 将当前要保留的值，赋给 slow 指针所在的位置
			slow++                  // 然后 slow 指针向前移动一位
		}
	}
	return slow
}

func main() {
	nums1 := []int{3, 2, 2, 3}
	val1 := 3
	len1 := removeEle(nums1, val1)
	fmt.Printf("示例:%d\n", len1)
}
