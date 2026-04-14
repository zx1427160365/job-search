/*
题目描述
一个工厂有m条流水线,来并行完成n个独立的作业,该工厂设置了一个调度系统,在安排作业时,总是优先执行处理时间最短的作业。
现给定流水线个数m,需要完成的作业数n,每个作业的处理时间分别为t1,t2...tn。请你编程计算 处理完所有作业的耗时为多少?
当n>m时,首先处理时间短的m个作业进入流水线,其他的等待,当某个作业完成时,依次从剩余作业中取处理时间最短的进入处理。

输入描述
第一行为2个整数(采用空格分隔),分别表示流水线个数m和作业数n;
第二行输入n个整数(采用空格分隔),表示每个作业的处理时长t1,t2...tn。
0<m,n<100,0<t1,t2...tn<100。
注:保证输入都是合法的。

输出描述
输出处理完所有作业的总时长。

用例1
输入
3 5
8 4 3 2 10
输出
13
说明
1、先安排时间为2、3、4的3个作业。
2、第一条流水线先完成作业,然后调度剩余时间最短的作业8。
3、第二条流水线完成作业,然后调度剩余时间最短的作业10。
4、总工耗时就是第二条流水线完成作业的时间13(3+10)。
*/

// 核心是遵循 “优先处理最短作业” 和 “流水线空闲时优先补充剩余最短作业” 的规则
// function calculateTotalTaskTime(m: number, n: number, taskTimes: number[]): number {
//     // 1. 对作业处理时间进行升序排序，确保优先获取最短作业（核心前提）
//     // 使用扩展运算符拷贝原数组，避免修改原始输入数据
//     const sortedTaskTimes = [...taskTimes].sort((a, b) => a - b);

//     // 2. 初始化流水线数组，长度为m，初始值0表示流水线初始空闲
//     const pipelineTotalTimes: number[] = new Array(m).fill(0);

//     // 3. 初始分配：将前m个最短作业（或前n个，当n<m时）分配给对应流水线
//     const initialTaskCount = Math.min(m, n); // 实际需要初始分配的作业数
//     for (let i = 0; i < initialTaskCount; i++) {
//         pipelineTotalTimes[i] = sortedTaskTimes[i];
//     }

//     // 4. 处理剩余作业：当n>m时，存在待分配的剩余作业
//     // 截取排序后从索引m开始的剩余作业（已按升序排列，依次为剩余最短作业）
//     const remainingTasks = sortedTaskTimes.slice(m);

//     // 遍历每一个剩余作业，分配给当前最空闲（累计耗时最短）的流水线
//     remainingTasks.forEach((currentTaskTime) => {
//         // 4.1 找到当前流水线中累计耗时最小的索引（默认第一个为最小值索引）
//         let minTimePipelineIndex = 0;
//         for (let i = 1; i < pipelineTotalTimes.length; i++) {
//             if (pipelineTotalTimes[i] < pipelineTotalTimes[minTimePipelineIndex]) {
//                 minTimePipelineIndex = i; // 更新最小值索引
//             }
//         }

//         // 4.2 将当前作业分配给该流水线，更新流水线的累计耗时
//         pipelineTotalTimes[minTimePipelineIndex] += currentTaskTime;
//     });

//     // 5. 所有作业分配完成后，流水线的最大耗时即为总处理时间
//     return Math.max(...pipelineTotalTimes);
// }

function calculateTotalTaskTime(m: number, n: number, taskTimes: number[]): number {
    // 对作业处理时间进行升序排序
    // 使用拓展拷贝原数组
    const sortedTaskTimes = [...taskTimes].sort((a, b) => a - b)

    // 初始化流水线数组，长度为m
    const pipelineTotalTimes:number[]=new Array(m).fill(0)

    // 初始分配:将前m个最短作业(或者前n个 n<m 时) 分配给对应流水线
    const initialTaskCount=Math.min(m,n)
    for(let i=0;i<initialTaskCount;i++){
        pipelineTotalTimes[i]=sortedTaskTimes[i]
    }

    // 处理剩余作业 当n>m时 存在待分配等剩余作业
    const remainingTasks=sortedTaskTimes.slice(m)

    // 遍历剩余作业 分配给当前最空闲(累计耗时最短)的流水线
    remainingTasks.forEach((currentTaskTime)=>{
        
    })

}



const m = 3;
const n = 5;
const taskTimes = [8, 4, 3, 2, 10];
const totalTime = calculateTotalTaskTime(m, n, taskTimes);
console.log(totalTime); // 输出 13，与题目用例结果一致


