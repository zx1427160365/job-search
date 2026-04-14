function sortTime(logs: string[]): string[] {
    function sumTime(time: string): number {
        const parts = time.split(/[:.]/).map(Number)
        const [h, m, s, ms] = parts
        return (h * 3600 + m * 60 + s) * 1000 + ms
    }

    return [...logs].sort((a, b) => sumTime(a) - sumTime(b))
}
const logs = [
    "12:01:30.456",
    "11:59:59.999",
    "12:01:30.123"
];
console.log(sortTime(logs));
