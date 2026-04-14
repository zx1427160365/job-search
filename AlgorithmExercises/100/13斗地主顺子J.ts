// // 定义牌面类型，限定只能是合法的牌面值
// type Card = "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A" | "2";

// // 定义牌面顺序和数值映射（2 特殊处理为 16，无法组成顺子）
// const cardOrder: Card[] = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"];
// const cardToNumber: Record<Card, number> = {};

// // 初始化牌面值映射
// cardOrder.forEach((card, index) => {
//   if (card === "2") {
//     cardToNumber[card] = 16;
//   } else {
//     cardToNumber[card] = index + 3;
//   }
// });

// /**
//  * 查找卡牌中的有效顺子（长度≥5）
//  * @param cards 输入的卡牌数组
//  * @returns 第一个找到的有效顺子（空格分隔），无则返回 "No"
//  */
// function findValidStraight(cards: Card[]): string {
//   // 空输入直接返回 No
//   if (cards.length === 0) {
//     return "No";
//   }

//   // 复制数组并按牌面值排序（避免修改原数组）
//   const sortedCards = [...cards].sort((a, b) => cardToNumber[a] - cardToNumber[b]);

//   // 初始化顺子序列数组（第一个卡牌作为初始序列）
//   const sequences: Card[][] = [[sortedCards[0]]];

//   // 遍历剩余卡牌，尝试构建顺子
//   for (let i = 1; i < sortedCards.length; i++) {
//     const currentCard = sortedCards[i];
//     let isMatched = false;

//     // 优先尝试连接到已有顺子的末尾
//     for (const seq of sequences) {
//       const lastCard = seq[seq.length - 1];
//       // 检查当前牌是否能接在当前顺子末尾（数值差1）
//       if (cardToNumber[currentCard] - cardToNumber[lastCard] === 1) {
//         seq.push(currentCard);
//         isMatched = true;
//         break; // 找到匹配的顺子后立即退出循环
//       }
//     }

//     // 无法连接则新建顺子
//     if (!isMatched) {
//       sequences.push([currentCard]);
//     }
//   }

//   // 查找第一个长度≥5的有效顺子
//   const validSequence = sequences.find(seq => seq.length >= 5);

//   return validSequence ? validSequence.join(" ") : "No";
// }

// // ---------------- 测试示例 ----------------
// // 测试1：基础顺子（3-7）
// const testCards1: Card[] = ["3", "4", "5", "6", "7"];
// console.log(findValidStraight(testCards1)); // 输出: 3 4 5 6 7

// // 测试2：包含非连续牌的顺子（5-9）
// const testCards2: Card[] = ["3", "5", "6", "7", "8", "9"];
// console.log(findValidStraight(testCards2)); // 输出: 5 6 7 8 9

// // 测试3：包含2的情况（无法组成顺子）
// const testCards3: Card[] = ["2", "3", "4", "5", "6"];
// console.log(findValidStraight(testCards3)); // 输出: No

// // 测试4：重复牌的情况
// const testCards4: Card[] = ["3", "3", "4", "5", "6", "7", "8"];
// console.log(findValidStraight(testCards4)); // 输出: 3 4 5 6 7 8


// 定义牌面类型，限定只能是合法的牌面值
type Card = "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A" | "2";

// 定义牌面顺序和数值映射（2 特殊处理为 16，无法组成顺子）
const cardOrder: Card[] = ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2"];
const cardToNumber: Record<Card, number> = {};

// 初始化牌面值映射
cardOrder.forEach((card, index) => {
    if (card === "2") {
        cardToNumber[card] = 16;
    } else {
        cardToNumber[card] = index + 3;
    }
});

function findShunZi(cards: Card[]): string {
    //空输入直接返回NO
    if(cards.length===0) return "No"

    // 复制数组并按牌面值排序（避免修改原数组）
    const sortedCards=cards.sort((a,b)=>cardToNumber[a]-cardToNumber[b])
    
    // 初始化顺子序列数组（第一个卡牌作为初始序列）
    const sequences:Card[][]=[[sortedCards[0]]]

    // 遍历剩余卡牌，尝试构建顺子
    for(let i=1;i<sortedCards.length;i++){
        const currentCard=sortedCards[i]
        let isMatched=false

        // 优先尝试连接到已有顺子到末尾
        for(const seq of sequences){
            const lastCard=seq.at(-1)
            // 检查当前牌能否接在当前顺子末尾（数值差1）
            if(cardToNumber[currentCard]-cardToNumber[lastCard]===1){
                seq.push(currentCard)
                isMatched=true
                //找到匹配到顺子后立即退出循环
                break 
            }
        }
        
        // 无法连接则新建顺子
        if(!isMatched) {
            sequences.push([currentCard])
        }
    }
}

