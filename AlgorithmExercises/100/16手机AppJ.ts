// /**
//  * App注册信息类型定义
//  * @property name App名称
//  * @property priority 优先级（1-5，数值越高优先级越高）
//  * @property start 起始时间（总分钟数）
//  * @property end 结束时间（总分钟数）
//  */
// interface AppInfo {
//   name: string;
//   priority: number;
//   start: number;
//   end: number;
// }

// /**
//  * 将HH:MM格式的时间转换为总分钟数
//  * @param timeStr 时间字符串（如"09:30"）
//  * @returns 总分钟数（如570）
//  */
// function parseTime(timeStr: string): number {
//   const [hour, minute] = timeStr.split(':').map(Number);
//   return hour * 60 + minute;
// }

// /**
//  * 处理App注册逻辑，返回最终已注册的App列表
//  * @param registrations 原始注册数据数组（每条格式："App名 优先级 起始时间 结束时间"）
//  * @returns 已注册的App信息列表
//  */
// function registerApps(registrations: string[]): AppInfo[] {
//   const registered: AppInfo[] = [];

//   for (const reg of registrations) {
//     // 解析单条注册数据
//     const [name, priorityStr, startStr, endStr] = reg.split(' ');
//     const priority = Number(priorityStr);
//     const start = parseTime(startStr);
//     const end = parseTime(endStr);

//     // 验证：起始时间必须小于结束时间，否则注册失败
//     if (start >= end) continue;

//     // 步骤1：检查所有已注册App是否与当前App时段冲突
//     const conflicts: AppInfo[] = [];
//     for (const app of registered) {
//       // 左闭右开区间重叠判断
//       if (start < app.end && end > app.start) {
//         conflicts.push(app);
//       }
//     }

//     // 步骤2：判断是否能注册（存在更高/同等优先级冲突则不能注册）
//     let canRegister = true;
//     for (const conflict of conflicts) {
//       if (conflict.priority >= priority) {
//         canRegister = false;
//         break;
//       }
//     }
//     if (!canRegister) continue;

//     // 步骤3：移除所有优先级更低的冲突App，添加当前App
//     const filtered = registered.filter(app => {
//       // 保留非冲突项，或冲突但优先级不低于当前的（但前面已排除，实际只保留非冲突项）
//       return !(start < app.end && end > app.start && app.priority < priority);
//     });
//     filtered.push({ name, priority, start, end });

//     // 更新已注册列表
//     registered.length = 0;
//     registered.push(...filtered);
//   }

//   return registered;
// }

// /**
//  * 根据时间点查询对应的App名称
//  * @param registered 已注册的App列表
//  * @param queryTimeStr 查询时间字符串（如"09:30"）
//  * @returns App名称或"NA"
//  */
// function queryApp(registered: AppInfo[], queryTimeStr: string): string {
//   const queryTime = parseTime(queryTimeStr);
//   // 遍历查找包含该时间点的App（左闭右开）
//   for (const app of registered) {
//     if (app.start <= queryTime && queryTime < app.end) {
//       return app.name;
//     }
//   }
//   return 'NA';
// }

// // ------------------- 测试示例 -------------------
// // 示例1：基础场景
// const registrations1 = ["App1 1 09:00 10:00"];
// const queryTime1 = "09:30";
// const registered1 = registerApps(registrations1);
// console.log(queryApp(registered1, queryTime1)); // 输出：App1

// // 示例2：高优先级覆盖低优先级
// const registrations2 = [
//   "App1 1 09:00 10:00",
//   "App2 2 09:30 10:30"
// ];
// const queryTime2 = "09:30";
// const registered2 = registerApps(registrations2);
// console.log(queryApp(registered2, queryTime2)); // 输出：App2

// // 示例3：同优先级后添加无效
// const registrations3 = [
//   "App1 2 09:00 10:00",
//   "App2 2 09:30 10:30"
// ];
// const queryTime3 = "09:30";
// const registered3 = registerApps(registrations3);
// console.log(queryApp(registered3, queryTime3)); // 输出：App1

// // 示例4：无效时段（起始>=结束）注册失败
// const registrations4 = ["App1 1 10:00 09:00"];
// const queryTime4 = "09:30";
// const registered4 = registerApps(registrations4);
// console.log(queryApp(registered4, queryTime4)); // 输出：NA

function registerApps(registrations:string[]):string{
    
}