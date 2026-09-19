import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
    try {
        const { password } = await request.json();

        // Strict mapping to Environmental secrets. For local env, defaults to mak2026.
        const MASTER_PASSWORD = process.env.ADMIN_PASSWORD || "mak2026";

        if (password === MASTER_PASSWORD) {
            // Await is required in Next 15+ for cookies()
            const cookieStore = await cookies();
            cookieStore.set('mak_admin_session', 'authenticated', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/',
                maxAge: 60 * 60 * 24 * 7 // Session lasts for 1 week
            });

            return NextResponse.json({ success: true }, { status: 200 });
        }

        // Immediately drop brute-force attempts with 401 Unauthorized
        return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
    } catch (err) {
        console.error("Auth API Crash:", err);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
