import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

export async function GET() {
    const url = process.env.DATABASE_URL;
    let result = null;
    let dbError = null;

    try {
        if (url) {
            const prisma = new PrismaClient();
            result = await prisma.$queryRaw`SELECT 1 as test`;
        }
    } catch (e: any) {
        dbError = e.message;
    }

    return NextResponse.json({
        status: "Diagnostics Running",
        hasDatabaseUrlConfigured: !!url,
        databaseUrlLooksValid: url ? url.startsWith("postgres") : false,
        firstFewCharacters: url ? url.substring(0, 14) : null,
        queryResult: result,
        errorLog: dbError,
    }, { status: 200 });
}
