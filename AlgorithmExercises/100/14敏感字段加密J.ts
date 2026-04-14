
function encryptFun(strs: string, index: number): string {
    const charArray = strs.split("")
    const commandList: string[] = []
    let command = "";
    let inQuotes = false

    for (let i = 0; i < charArray.length; i++) {
        const ch = charArray[i]
        if (ch === '"' && inQuotes) {
            // 遇到结束引号
            command += '"'
            commandList.push(command)
            command = ""
        } else if (!inQuotes && ch === '_') {
            // 非引号模式遇到下划线，分割命令
            if (command.length > 0) {
                commandList.push(command)
                command = ""
            }
        } else if (i === charArray.length - 1) {
            command += ch
            commandList.push(command)
        } else {
            if (ch === '"') {
                inQuotes = true
            }
            command += ch
        }
    }

    // 检查索引合法性
    if (index < 0 || index >= commandList.length) {
        return "Error"
    }
    console.log(commandList);

    // 指定索引位置加密
    commandList[index] = "******"

    return commandList.join("_")
}

console.log(encryptFun('aaa_password_"a12_45678"_timeout__100_""_',2));
