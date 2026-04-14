const dealFun = (minAverageLost: number, ans: number[]): string => {
    //边界条件 数组为空 直接返回null
    if (!ans.length) return null

    const len = ans.length

    // 计算前缀和数组
    const prefix: number[] = new Array(len + 1).fill(0);
    for (let i = 1; i <= len; i++) {
        prefix[i] = ans[i - 1] + prefix[i - 1]
    }

    let currentLen: number = 0
    const mp: Map<number, [number, number][]> = new Map()

    // 遍历所有子区间 筛选符合平均值条件的最长区间
    for (let i = 0; i <= len; i++) {
        for (let j = i + 1; j <= len; j++) {
            // 跳过比当前长度短短区间
            if (j - i < currentLen) continue
            const sum: number = prefix[j] - prefix[i]
            const average: number = sum / j - i

            // 满足平均值《=阀值 更新最长长度区间和
            if (average <= minAverageLost) {
                currentLen = Math.max(currentLen, j - i)

                // 初始化当前对应长度的区间数组
                if(!mp.has(currentLen)){
                    mp.set(currentLen,[])
                }

                // 存储区间: [起始索引，结束索引]
                mp.get(currentLen)!.push([i,j-1])
            }
        }
    }
    
    // 无符合条件的区间 返回null
    if(currentLen===0) return null
    
    // 格式化最长区间为指定字符串格式
    const maxLenIntervals=mp.get(currentLen)!
    return maxLenIntervals.map(([start,end])=>`${start}-${end}`).join(" ")
}

console.log(dealFun(2,[0,0,100,2,2,99,0,2]));
