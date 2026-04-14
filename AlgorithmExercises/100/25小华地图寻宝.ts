// 这个问题本质上是一个带限制条件的连通区域搜索问题，可以使用 深度优先搜索（DFS） 或 广度优先搜索（BFS） 来解决。
// 核心思路：
// 小华从 (0, 0) 出发，只能走到满足 digitSum(x) + digitSum(y) <= k 的格子。
// 每个合法格子有 1 克黄金，不能重复计算（即访问过的格子不能再算）。
// 需要统计从 (0, 0) 能到达的所有合法格子数量

// 注意事项：
// 思路:BFS、DFS模板题
// 1.重点需要理解数位和的意思。111的数位和就是1+1=3.这个题目知道这个点就比较容易了接下来可以使用DFS或者BFS算
// 法求解。
// 2.说一下两个经验:
// 1.对于BFS和DFS都能求解的问题,我更推荐使用BFS实现,考想极端情况数据量较大情况下,DFS可能会存在递归深度过高的问
// 题。
// 2.对于大量重复使用的数据,可以使用缓存/预计算来减少重复操作。例如下面数位和的计算。

// 计数坐标数位和
function digitSum(num: number): number {
    let sum = 0
    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    return sum
}

function getMaxGold(m: number, n: number, k: number): number {
    // 边界情况:网格为空
    if (m <= 0 || n <= 0) return 0

    // 创建visited矩阵 记录是否访问过
    const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false))
    //计数器：记录可达的黄金格子数
    let count = 0
    // BFS队列 存储[横坐标x,纵坐标y]
    const queue: [number, number][] = []

    // 检查起点(0,0)
    if (digitSum(0) + digitSum(0) <= k) {
        visited[0][0] = true
        queue.push([0, 0])
        count++
    }

    // 四个移动方向数组 上下左右
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    // BFS遍历
    while (queue.length > 0) {
        const [x, y] = queue.shift() //出队当前格子

        // 遍历四个相邻方向
        for (const [dx, dy] of directions) {
            const nx = dx + x
            const ny = dy + y

            // 检查新坐标是否在网格范围内
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                // 检查新格子位数和
                if(digitSum(nx)+digitSum(ny)<=k){
                    if(!visited[nx][ny]){
                        visited[nx][ny]=true
                        count++
                        queue.push([nx,ny])
                    }
                }
            }
        }
    }

    return count
}

console.log(getMaxGold(40,40,18));
console.log(getMaxGold(5,4,7));
