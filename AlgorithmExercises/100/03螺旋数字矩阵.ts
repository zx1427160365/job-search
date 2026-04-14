function matrix(n: number, m: number): (number | string)[][] {
    // 校验输入的合法性
    if (!Number.isInteger(n) || !Number.isInteger(m) || n < 1 || m < 1) {
        throw new Error('n 和 m 必须是正整数')
    }

    // 计算矩阵的列数 向上取整
    const cols = Math.ceil(n / m)

    // 初始化 m行 cols列矩阵
    const matrixArr: (number | string)[][] = Array.from({ length: m }, () => Array(cols).fill('*'))
    // 螺旋填充的边界控制变量
    let num: number = 1
    let top: number = 0
    let bottom: number = m - 1
    let left: number = 0
    let right: number = cols - 1

    // 核心旋转填充逻辑
    while (num <= n) {
        //从左到右填充顶部行
        for (let i = left; i <= right && num <= n; i++) {
            matrixArr[top][i] = num++
        }
        top++

        // 从上到下填充右侧列
        for (let i = top; i <= bottom && num <= n; i++) {
            matrixArr[i][right]=num++
        }
        right--

        // 从右到左填充底部
        for(let i=right;i>=left&&num<=n;i--){
            matrixArr[bottom][i]=num++
        }
        bottom--

        // 从下到上填充左侧列
        for(let i=bottom;i>=top&&num<=n;i--){
            matrixArr[i][left]=num++
        }
        left++
    }

    return matrixArr
}

console.log(matrix(9,4));
