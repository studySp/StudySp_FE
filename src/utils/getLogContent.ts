import { promises as fs } from "fs";
import path from "path";

export async function getParsedLog(fileName: string) {
    try {
        const logDir = path.join(process.cwd(), "src", "resources", "logs");
        const filePath = path.join(logDir, fileName);

        try {
            await fs.access(filePath);
        } catch (error) {
            console.error("File không tồn tại:", filePath);
            return null;
        }
        const rawLog = await fs.readFile(filePath, "utf-8");
        const logEntries = rawLog
            .split(/\r?\n/)
            .filter(line => line.trim() !== "")
            .map((line) => {
                const match = line.match(/^\[(.*?)\]\s+(\w+)\s*-\s*(.*)$/);
                if (!match) {
                    console.warn("Dòng log không hợp lệ:", JSON.stringify(line));
                    return null;
                }
                return {
                    timestamp: match[1],
                    level: match[2],
                    message: match[3],
                };
            })
            .filter(Boolean);

        return logEntries;
    } catch (error) {
        console.error("Lỗi khi đọc file log:", error);
        return null;
    }
}
