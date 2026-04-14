
// function findMinReplaceLength(s: string): number {
//     const strLength = s.length;

//     // 判断是否能够均分（总长度必须是4的倍数）
//     if (strLength % 4 !== 0) {
//         return -1;
//     }

//     // 【核心修改】改用 Map 统计每个字符的出现次数（键为字符，值为次数）
//     const charCountMap: Map<string, number> = new Map();
//     for (let i = 0; i < strLength; i++) {
//         const char = s[i];
//         // Map.get() 无对应键时返回 undefined，需用 || 0 兜底，和原逻辑一致
//         const currentCount = charCountMap.get(char) || 0;
//         charCountMap.set(char, currentCount + 1);
//     }

//     let isPerfect = true; // 标记是否已经是"完美走位"
//     const targetCount = strLength / 4; // 每个字符应出现的次数
//     let excessTotal = 0; // 所有字符超出目标次数的总量

//     // 计算每个字符超出目标次数的数量，并统计总超出量（适配 Map 写法）
//     for (const [char, currentCount] of charCountMap) {
//         if (currentCount > targetCount) {
//             charCountMap.set(char, currentCount - targetCount);
//             isPerfect = false;
//             excessTotal += charCountMap.get(char)!; // ! 非空断言：此处已确认有值
//         } else {
//             charCountMap.set(char, 0);
//         }
//     }

//     // 备份字符超出量的映射（Map 需手动遍历复制，而非对象解构）
//     const charCountBackup: Map<string, number> = new Map();
//     for (const [char, count] of charCountMap) {
//         charCountBackup.set(char, count);
//     }

//     // 已经是完美状态，无需替换任何字符
//     if (isPerfect) {
//         return 0;
//     }

//     let minReplaceLength = strLength + 1; // 初始化最小长度为一个不可能的大值
//     let left = 0; // 滑动窗口左指针
//     let right = 0; // 滑动窗口右指针

//     // 滑动窗口核心逻辑：寻找包含所有多余字符的最短子串（适配 Map 写法）
//     while (right < strLength) {
//         const currentChar = s[right];
//         // 仅处理有超出量的字符
//         if (charCountBackup.get(currentChar) > 0) {
//             // 只有当当前字符还有未覆盖的超出量时，才减少总超出量
//             if (charCountMap.get(currentChar)! > 0) { // ! 非空断言：此处已确认有值
//                 excessTotal--;
//             }
//             charCountMap.set(currentChar, charCountMap.get(currentChar)! - 1);
//         }

//         // 当窗口内已覆盖所有多余字符时，尝试收缩左指针以找到更短的窗口
//         while (excessTotal === 0) {
//             minReplaceLength = Math.min(minReplaceLength, right - left + 1);
//             const leftChar = s[left];

//             if (charCountBackup.get(leftChar) > 0) {
//                 charCountMap.set(leftChar, charCountMap.get(leftChar)! + 1);
//                 // 只有当字符的超出量从0变为正数时，才增加总超出量
//                 if (charCountMap.get(leftChar)! > 0) {
//                     excessTotal++;
//                 }
//             }
//             left++;
//         }

//         right++;
//     }

//     return minReplaceLength;
// }
// const example2 = "WASDAASD";
// console.log(calculatePerfectWalk(example2)); // 输出应该是 3

function calculateWalk(s: string): number {
    // 判断能否均分
    if (s.length % 4 !== 0) return -1

    // 统计每个字符的出现次数（键为字符，值为次数）
    const charCountMap: Map<string, number> = new Map()
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        const currentCount = charCountMap.get(char) || 0
        charCountMap.set(char, currentCount + 1)
    }

    // 标记是否已经是完美走位
    let isPerfect = true
    // 每个字符应出现的次数
    const targetCount = s.length / 4
    // 所有字符超出目标次数的总量
    let excessTotal = 0

    // 计算每个字符超出目标次数的数量，并统计总超出量
    for (const [char, currentCount] of charCountMap) {
        if (currentCount > targetCount) {
            charCountMap.set(char, currentCount - targetCount)
            isPerfect = false
            excessTotal += charCountMap.get(char)
        } else {
            charCountMap.set(char, 0)
        }
    }

    // 备份字符超出量的映射
    const charCountBackup: Map<string, number> = new Map()
    for (const [char, count] of charCountMap) {
        charCountBackup.set(char, count)
    }

    // 已经是完美状态，无须替换任何字符
    if (isPerfect) return 0

    // 初始化最小长度为一个不可能的大值
    let minReplaceLength = s.length + 1
    // 滑动窗口左右指针
    let left = 0, right = 0;

    // 滑动窗口核心逻辑：寻找包含所有多余字符的最短子串
    while (right<s.length) {
        const currentChar=s[right]
        // 仅处理有超出量的字符
        if(charCountBackup.get(currentChar)>0){
            // 只有当前字符还有未覆盖的超出量时
            if(charCountMap.get(currentChar)>0){

            }
        }
    }
}