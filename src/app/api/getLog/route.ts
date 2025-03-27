import { NextResponse } from "next/server";
import { getParsedLog } from "@/utils/getLogContent";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const fileName = searchParams.get("file") || "log20240327.txt";

        const logData = await getParsedLog(fileName);

        if (!logData) {
            return NextResponse.json({ error: "Log file not found" }, { status: 404 });
        }

        return NextResponse.json({ logs: logData });
    } catch (error) {
        return NextResponse.json({ error: "Failed to load log" }, { status: 500 });
    }
}
