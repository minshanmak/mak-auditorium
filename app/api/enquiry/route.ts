import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // TODO: Connect this to PostgreSQL (Prisma) or Supabase.
        // For now, intercept the data and securely return a success state.
        console.log("[NEW ENQUIRY RECEIVED]", data);

        // Simulate database network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        return NextResponse.json({ success: true, message: "Enquiry received successfully." }, { status: 200 });
    } catch (error) {
        console.error("Enquiry API Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
