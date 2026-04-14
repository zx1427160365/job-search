/*
题目描述
小王在进行游戏大闯关,有一个关卡需要输入一个密码才能过通过,密码获得的条件如下:在一个密码本中,每一页都有一个由26个小写字母组成的若干位密码,每一页的密码不同,需要从这个密码本中寻找这样一个最长的密码,从它的末尾开始依次去掉一位得到的新密码，也在密码本中存在。
请输出符合要求的密码,如果有多个符合要求的密码,则返回字典序最大的密码。若没有符合要求的密码,则返回空字符串。

输入描述
密码本由一个字符串数组 组成,不同元素之间使用空格隔开,每一个元素代表密码本每一页的密码
备注
<密码本的页数<10^5
<每页密码的长度≤10^5

输出描述
一个字符串

用例1
输入
h he hel hell hello
输出
hello
*/


function findLongestPassword(input: string): string {
    const passwords = input.split(' ')

    const passwordSet = Array.from(new Set(passwords))

    // 按长度降序排序，长度相同则按字典降序排序
    // 1. 长度长的排在前面（b.length - a.length > 0 时 b 在 a 前）
    // 2. 长度相同时，字典序大的排在前面（b.localeCompare(a) < 0 时 b 在 a 前
    passwordSet.sort((a, b) => {
        if (a.length !== b.length) {
            return b.length - a.length
        }
        return b.localeCompare(a)
    })

    // 遍历排序后的密码数组（从最长到最短）
    for (const pwd of passwordSet) {
        // 跳过长度为1的密码(无法去掉字符)
        if (pwd.length <= 1) {
            continue
        }
        // 检查所有前缀
        let isValid=true
        // 从len-1开始 即去掉最后一个字符后的长度到长度1
        for(let i=pwd.length-1;i>=1;i--){
            const prefix=pwd.slice(0,i)
            // 任意前缀不存在 标记无效提前终止
            if(!passwordSet.includes(prefix)){
                isValid=false
                break
            }
        }
         
        // 找到第一个有效密码(已排序 即最长且字典最大)
        if(isValid) return pwd
    }
}

console.log(findLongestPassword("b ereddred bw bww bwwl bwwlm bwwln"));





// 注：
// 数字 1-9（字符串） < 大写 A-Z < 小写 a-z