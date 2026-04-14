// const trackGrid: number[][] = [
//     [1, 1, 0, 1, 0],
//     [1, 1, 0, 0, 0],
//     [0, 0, 1, 0, 1],
//     [1, 0, 0, 1, 0],
//     [0, 0, 1, 0, 1]
// ]

// /**
//  * 统计确诊病例的密接人数（不含确诊者本身）
//  * @param n 矩阵大小（总人数，编号从0开始）
//  * @param confirmId 确诊病例编号数组
//  * @param grid 接触邻接矩阵（grid[i][j] = 1 表示i和j有接触）
//  * @returns 密接人数
//  */
// function countCloseContacts(n: number, confirmId: number[], grid: number[][]): number {
//     // 边界处理：无确诊病例时返回0
//     if (confirmId.length === 0) {
//         return 0;
//     }

//     // 验证输入合法性（可选，增强健壮性）
//     if (grid.length !== n || grid.some(row => row.length !== n)) {
//         throw new Error("接触矩阵的尺寸与指定人数不匹配");
//     }
//     if (confirmId.some(id => id < 0 || id >= n)) {
//         throw new Error("确诊病例编号超出有效范围");
//     }

//     // 并查集初始化：每人初始是自己的父节点
//     const parent: number[] = Array.from({ length: n }, (_, i) => i);

//     // 查找节点的根节点（路径压缩）
//     const find = (a: number): number => {
//         if (parent[a] !== a) {
//             parent[a] = find(parent[a]); // 路径压缩
//         }
//         return parent[a];
//     };

//     // 合并两个节点所在的集合（按最小值作为新根，保持和原逻辑一致）
//     const merge = (a: number, b: number): void => {
//         const rootA = find(a);
//         const rootB = find(b);
//         const newRoot = Math.min(rootA, rootB);
//         parent[rootA] = newRoot;
//         parent[rootB] = newRoot;
//     };

//     // 遍历下三角区域（不含对角线）合并有接触的人
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             if (grid[i][j] === 1) {
//                 merge(i, j);
//             }
//         }
//     }

//     // 收集所有确诊病例所在集合的根节点
//     const infectedGroups = new Set<number>();
//     for (const id of confirmId) {
//         infectedGroups.add(find(id));
//     }

//     // 统计密接人数：属于感染集合但不是确诊者的人
//     let result = 0;
//     for (let i = 0; i < n; i++) {
//         if (infectedGroups.has(find(i)) && !confirmId.includes(i)) {
//             result++;
//         }
//     }

//     return result;
// }

// // 测试示例（可直接运行验证）
// const testN = 5;
// const testConfirmId = [1]; // 确诊者编号为1
// const testGrid = [
//     [0, 1, 0, 0, 0],
//     [1, 0, 1, 0, 0],
//     [0, 1, 0, 1, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0]
// ];
// console.log(countCloseContacts(testN, testConfirmId, testGrid)); // 输出：2（密接者是0和2）


const testN = 5
const testConfirmId = [1, 2]
const testGrid: number[][] = [
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1]
]

function countClosePeople(n: number, confirmId: number[], gird: number[][]): number {
    // 边界处理
    if (confirmId.length === 0) return 0

    // 验证输入合法性
    if (gird.length !== 0 || gird.some(row => row.length !== n)) {
        throw new Error('xxxxx')
    }
    if (confirmId.some(id => id < 0 || id > 0)){
        throw new Error('xxxxx')
    }
    
    
}