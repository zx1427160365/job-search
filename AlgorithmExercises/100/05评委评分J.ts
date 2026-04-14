const contestantSort: number[][] = [
    [10, 6, 9, 7, 6],
    [9, 10, 6, 7, 5],
    [8, 10, 6, 5, 10],
    [9, 10, 8, 4, 9]
]
const m = 4, n = 5; //4个评委 5名选手

function getTopPlayer(contestantSort:number[][],m,n){
    // 初始化选手数据
    const players=Array.from({length:n},(_,idx)=>({
        score:Array(11).fill(0),
        sum:0,
        index:idx
    }))
}
