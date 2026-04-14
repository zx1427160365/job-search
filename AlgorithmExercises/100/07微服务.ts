function solve(grid: number[][], k: number): number {
    const n = grid.length
    const dependMap = new Map<number, number[]>()

    // 构建依赖关系图；如果gird[i][j]==1 且i!=j 则i依赖于j
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j && grid[i][j] === 1) {
                if (!dependMap.has(i)) {
                    dependMap.set(i, [])
                }
                dependMap.get(i)!.push(j)
            }
        }
    }

    // 深度优先搜索:计算从指定索引出发的最大值
    function dfs(index: number): number {
        let maxDepValue = 0
        //如果当前节点有依赖，递归计算所有依赖节点的最大值
        if (dependMap.has(index)) {
            const dependencies = dependMap.get(index)
            for (const dep of dependencies) {
                maxDepValue = Math.max(maxDepValue, dfs(dep))
            }
        }
        return maxDepValue + grid[index][index]
    }

    return dfs(k - 1)
}

const gird = [
    [1, 0, 0, 0, 0],
    [0, 2, 0, 0, 0],
    [1, 1, 3, 0, 0],
    [1, 1, 0, 4, 0],
    [0, 0, 1, 1, 5]
]
const k=5
console.log(solve(gird,k));
