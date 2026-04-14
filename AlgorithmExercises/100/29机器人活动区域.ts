/*
题目描述
现有一个[机器人],可放置于M×N的网格中任意位置,每个网网格包含一个非负整数编号,当相邻网格的数字编号差值的绝对值小于等于1时,机器人可以在网格间移动。
问题:求机器人可活动的最大范围对应的网格点数目。
说明:网格左上角坐标为(0,0),右下角坐标为(m-1,n-1),机器人只能在相邻网格间上下左右移动
输入描述
第1行输入为M和N  M表示网格的行数 N表示网格的列数
之后M行表示网格数值,每行N个数值(数值大小用k表示),数值间用单个空格分隔,行首行尾无多余空格。
• M、N、k均为整数
• 1<M, N≤ 150,
• 0 ≤ 50
输出描述
输出1行,包含1个数字,表示最大活动区域的网格点数目,行首行尾无多余空格。

示例1
输入
4 4
1 2 5 2
2 4 4 5
3 5 7 1
4 6 2 4
输出
6
*/

// 解题思路
// 这是一个图的连通分量问题，具体来说是在一个网格图中寻找最大的连通区域。
// 查找二维网格中的最大连通区域，核心是通过「深度优先搜索（DFS）」遍历满足移动条件的网格，具体步骤如下：
// 访问标记：创建与原网格同大小的二维布尔数组 visited，记录每个网格是否已被遍历，避免重复统计。
// 全网格遍历：逐个遍历网格的每个坐标 (i, j)，若该网格未被访问，则以它为起点启动连通区域搜索。
// 连通区域搜索（DFS）：
// 移动规则：仅当相邻网格（上下左右）满足「在边界内」、「未被访问」、「与当前网格数值差的绝对值 ≤ 1」三个条件时，才属于同一活动区域。
// 区域大小统计：递归遍历所有连通网格，累加当前区域的网格节点数目。
// 维护最大值：每次完成一个连通区域的搜索后，对比并更新最大区域数目。
// 结果输出：遍历完所有网格后，最大区域数目即为答案。

function maxRobotActivityArea(grid: number[][]): number {
    //获取网格的行数和列数
    const M = grid.length
    if (M <= 0) return 0
    const N = grid[0].length
    if (N <= 0) return 0

    // 初始化访问标记数组 记录网格是否已被遍历 初始值全为false
    const visited: boolean[][] = Array.from({ length: M }, () => Array(N).fill(false))

    // 定义四个上下移动方向(二维数组存储方向偏移量). 上、下、左、右
    const directions: [number, number][] = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    // 初始化最大活动区域为0
    let maxArea = 0

    const dfs = (i: number, j: number): number => {
        // 标记当前网络已访问 避免重复访问
        visited[i][j] = true
        // 初始区域大小为1(当前网格自身)
        let area = 1

        // 遍历四个移动方向
        for (const [dx, dy] of directions) {
            // 计算相邻网格的坐标
            const ni = dx + i
            const nj = dy + j

            // 检查相邻网格是否满足三个条件
            // 1.在网格内
            // 2.未被访问
            // 3.与当前网格的数组绝对值差值<=1
            if (
                ni >= 0 && ni < M &&
                nj >= 0 && nj < N &&
                !visited[ni][nj] &&
                Math.abs(grid[i][j] - grid[ni][nj])<=1
            ) {
                // 递归遍历相邻网格大小 累加区域大小
                area += dfs(ni, nj)
            }
        }

        // 返回当前连通区域的总大小
        return area
    }

    // 遍历所有网格点 寻找最大连通区域
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            // 仅对未被访问的网格启动DFS
            if (!visited[i][j]) {
                // 计算当前网格所在区域的大小
                const currentArea = dfs(i, j)
                // 更新最大区域大小
                maxArea = Math.max(maxArea, currentArea)
            }
        }
    }

    return maxArea
}


// 示例1输入的网格
const testGrid = [
    [1, 2, 5, 2],
    [2, 4, 4, 5],
    [3, 5, 7, 1],
    [4, 6, 2, 4]
];

// 计算并输出结果（应输出6，与示例一致）
const result = maxRobotActivityArea(testGrid);
console.log(result); // 输出：6



