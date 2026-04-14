/*
题目描述
给定一个射击比赛成绩单,包含多个选手若干次射击的成绩分分数,请对每个选手按其最高3个分数之和进行降序排名,输出降序排名后的
选手ID序列。
条件如下:
1.一个选手可以有多个射击成绩的分数,且次序不固定。
2.如果一个选手成绩少于3个,则认为选手的所有成绩无效,排名忽略该选手。
3.如果选手的成绩之和相等,则成绩之和相等的选手按照其ID降序排列。

输入描述
·输入第一行,一个整数N,表示该场比赛总共进行了N次射击,产生N个成绩分数(2<=N<=100)。
·输入第二行,一个长度为N整数序列,表示参与每次射击的选手ID(0<=ID<=99)。
·输入第三行,一个长度为N整数序列,表示参与每次射击的选手对应的成绩(0<=成绩<=100)。

输出描述
符合题设条件的降序排名后的选手ID序列。

用例1
输入
13
3,3,7,4,4,4,4,7,7,3,5,5
53,80,68,24,39,76,66,16,100,55,53,80,55
输出
5,3,7,4
*/

function getRankedIds(ids: number[], scores: number[]): number[] {
    // 使用Map分组：将每个ID的成绩收集到列表中
    const scoreMap = new Map<number, number[]>()
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i]
        const score = scores[i]
        if (!scoreMap.has(id)) {
            scoreMap.set(id, [])
        }
        scoreMap.get(id).push(score)
    }

    // 过滤无效选手（成绩<3） 并计算最高3分和
    const players: { id: number; sum: number }[] = []
    for (const [id, scoresList] of scoreMap) {
        if (scoresList.length < 3) continue
        // 排序成绩（从高到低） 取前3个和
        const sortedScores = [...scoresList].sort((a, b) => b - a)
        const topThreeSum = sortedScores.slice(0, 3).reduce((acc, s) => acc + s, 0)
        players.push({ id, sum: topThreeSum })
    }

    // 按规则排序：和降序 相等时ID降序
    players.sort((a,b)=>{
        if(a.sum!==b.sum) return b.sum-a.sum
        return b.id-a.id
    })

    // 提取排序后的ID序列
    return players.map(players=>players.id)
}

const ids = [3, 3, 7, 4, 4, 4, 4, 7, 7, 3, 5, 5, 5]; // N=13
const scores = [53, 80, 68, 24, 39, 76, 66, 16, 100, 55, 53, 80, 55];
console.log(getRankedIds(ids, scores));