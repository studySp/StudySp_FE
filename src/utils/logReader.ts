import { NextResponse } from "next/server";
import { getParsedLog } from "./getLogContent";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const fileName = searchParams.get("file") || "log20240327.txt";

        const logData = getParsedLog(fileName);
        console.log(logData);

        if (!logData) {
            return NextResponse.json({ error: "Log file not found" }, { status: 404 });
        }

        return NextResponse.json({ log: logData });
    } catch (error) {
        return NextResponse.json({ error: "Failed to load log" }, { status: 500 });
    }
}
