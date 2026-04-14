// function countValidSubstrings(inputStr: string, k: number): number {
//     const n = inputStr.length;

//     // 不满足最小长度，直接返回0
//     if (n < 10 + k) {
//         return 0;
//     }

//     let res = 0;
//     const digitCount: number[] = Array(10).fill(0); // 记录数字 '0'-'9' 出现次数
//     let numberCount = 0;  // 当前窗口中不同数字的种类数
//     let countChar = 0;    // 当前窗口中字母的数量
//     let left = 0;

//     for (let right = 0; right < n; right++) {
//         const c = inputStr[right];

//         if (/[a-zA-Z]/.test(c)) {
//             countChar++; // 字母计数+1
//         } else if (/\d/.test(c)) {
//             const d = c.charCodeAt(0) - '0'.charCodeAt(0);
//             digitCount[d]++;
//             if (digitCount[d] === 1) {
//                 numberCount++; // 新增一种数字
//             }
//         }

//         // 如果字母数量超过k，移动左指针缩小窗口
//         while (left <= right && countChar > k) {
//             const leftChar = inputStr[left];
//             if (/[a-zA-Z]/.test(leftChar)) {
//                 countChar--;
//             } else if (/\d/.test(leftChar)) {
//                 const d = leftChar.charCodeAt(0) - '0'.charCodeAt(0);
//                 digitCount[d]--;
//                 if (digitCount[d] === 0) {
//                     numberCount--;
//                 }
//             }
//             left++;
//         }

//         // 当窗口包含全部10种数字且恰好有k个字母时，尝试统计所有以当前right结尾的有效子串
//         if (numberCount === 10 && countChar === k) {
//             let tmpLeft = left;
//             const tempCount = [...digitCount]; // 深拷贝当前数字计数
//             let tmpNumberCount = numberCount;
//             let tmpCountChar = countChar;

//             // 向右收缩左边界，统计所有满足条件的子串
//             while (tmpLeft <= right && tmpNumberCount === 10 && tmpCountChar === k) {
//                 res++;

//                 const ch = inputStr[tmpLeft];
//                 if (/[a-zA-Z]/.test(ch)) {
//                     tmpCountChar--;
//                 } else if (/\d/.test(ch)) {
//                     const d = ch.charCodeAt(0) - '0'.charCodeAt(0);
//                     tempCount[d]--;
//                     if (tempCount[d] === 0) {
//                         tmpNumberCount--;
//                     }
//                 }
//                 tmpLeft++;
//             }
//         }
//     }

//     return res;
// }

function countVaildChild(inputStr:string,k:number):number{
    const n=inputStr.length

    // 不满足最小长度 直接返回0
    if(n<10+n) return 0

    let res=0
    const digitCount:number[]=Array(10).fill(0) //记录数字‘0-9’出现次数
    // 当前窗口中不同数字的种类数
    let numberCount=0
    // 当前窗口中字母的数量
    let countChar=0
    let left=0

    for(let right=0;right<n;right++){
        const c=inputStr[right]
        if(/[a-zA-Z]/.test(c)){
            // 字母计数加1
            countChar++
        }else if(/\d/.test(c)){
            const d=c.charCodeAt(0)-'0'.charCodeAt(0)
            digitCount[d]++
            if(digitCount[d]===1){
                //新增一种数字
                numberCount++
            }
        }
    }
}