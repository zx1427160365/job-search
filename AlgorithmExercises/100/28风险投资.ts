/*
题目描述：
某公司有一笔资金(m万元)计划进行投资,前期调研分析了多种(n种)产品,分析得出了每种产品的预期收益率(e%)和风险等级(记为r,用1-10表示。数值越大表示风险越高),公司风控Q部门要求投资产品的风1险等级不能超过x且单个产品的投资金额不能超过y元,请规划一个满足公司丰空要求的最大预期收益的投资方案并输出改方案的预期收益。

输入描述
输入的第一行为可用于投资的金额m(万元),调研的投资产品种类数n(种),风险部门要求的最高可以投资风险等级x。单个产品的最大投资金额y(万元),用空格分割;
第二行开始为每个产品的预期收益率e(%)和每个产品的风险等级r,用空格分割。
不考虑非法输入,所有输入都是正整数,输出结果四舍五入取双整,输入输出口均小于2^31

输出描述
输出计算 的最大预期收益

用例1：
输入
100 7 5 10
10 3
15 5
14 3
20 7
18 6
17 4
30 9
输出
6
*/

function calculateMaxProfit(m: number, n: number, x: number, y: number, products: Array<{ e: number; r: number }>): number {
    // 筛选合规产品 - 只保留风险等级<=x的产品
    const validProducts = products.filter(product => product.r <= x)

    // 对合规的产品按预期收益率e降序排序(优先投资高收益产品)
    const sortProducts = validProducts.sort((a, b) => b.e - a.e)

    // 剩余可投资资金
    let remainMoney = m
    // 总预期收益
    let totalProfit = 0

    // 贪心遍历 分配资金计算收益
    for (const product of sortProducts) {
        if (remainMoney <= 0) break

        // 计算当前产品的可投资金额
        const invesetAmount = Math.min(y, remainMoney)
        // 计算当前投资的收益
        const currentProfit = invesetAmount * (product.e / 100)
        // 累计总收益
        totalProfit += currentProfit
        // 更新剩余资金
        remainMoney -= invesetAmount
    }

    return Math.round(totalProfit)
}


// 用例1输入参数
const m = 100;
const n = 7;
const x = 5;
const y = 10;
const products = [
    { e: 10, r: 3 },
    { e: 15, r: 5 },
    { e: 14, r: 3 },
    { e: 20, r: 7 },
    { e: 18, r: 6 },
    { e: 17, r: 4 },
    { e: 30, r: 9 },
];

// 计算并输出结果（应输出6，与用例一致）
const maxProfit = calculateMaxProfit(m, n, x, y, products);
console.log(maxProfit); // 输出：6