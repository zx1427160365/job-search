/*
题目描述
跳房子,也叫跳飞机,是一种世界性的儿童游戏。游戏参与者需要分多个回合按顺序跳到第1格直到房子的最后一格。
跳房子的过程中,可以向前跳,也可以向后跳。
假设房子的总格数是count,小红每回合可能连续跳的步教都放放在数组steps中,请问数组中是否有一种步数的组合,可以让小红两个回合跳到最后一格?
如果有,请输出索引和最小的步数组合。
注意:
 ·数组中的步数可以重复,但数组中的元素不能重复使用。
 ·提供的数据保证存在满足题目要求的组合,且索引和最小的步数组合是唯一的。

输入描述
第一行输入为每回合可能连续跳的步数,它是int整数数组类型。
第二行输入为房子总格数count,它是int整数类型Q。

备注
 ·count ≤ 1000
 ·0<steps.length ≤ 5000
 ·-100000000 ≤ steps ≤ 100000000

输出描述
返回索引和最小的满足要求的步数组合(顺序保持steps中原有顺序)

示例1
[1,4,5,2,2]
7
输出
[5,2]
*/

function findSteps(steps: number[], count: number): number[] {
    const indexMap = new Map<number, number>()
    //初始化最小索引和为无穷大
    let minIndexSum = Infinity
    // 存储最终结果的数组
    let result: number[] = []

    // 遍历步数数组
    for (let i = 0; i < steps.length; i++) {
        const currentStep = steps[i]

        // 目标步数
        const target = count - currentStep

        // 检查taregt是否在Map中(即之前已出现，且索引<i)
        if (indexMap.has(target)) {
            // 获取target的首次出现的索引
            const j = indexMap.get(target)
            const currentSum = j + i

            // 更新最小的索引和组合
            if (currentSum < minIndexSum) {
                minIndexSum = currentSum
                // 保持原有的顺序 j<i steps[j]在前 steps[i]在后
                result = [steps[j], currentStep]
            }
        }

        // 仅存储首次出现的索引（避免后续相同步数覆盖更小的索引）
        if (!indexMap.has(currentStep)) {
            indexMap.set(currentStep, i);
        }
    }
    return result;
}
// console.log(findSteps([1, 4, 5, 2, 2], 7));
console.log(findSteps([2, 2,1],4));


/*
注：
这题本质是求 数组不限数量取其中的几个数之和等于目标值并且索引值最小
*/

