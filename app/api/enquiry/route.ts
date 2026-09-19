import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        let newEnquiry = null;
        let dbSuccess = false;
        let debugErrors = [];

        // 1. Save to PostgreSQL Database via Prisma (MANDATORY FOR SUCCESS)
        if (process.env.DATABASE_URL) {
            try {
                const prisma = new PrismaClient();
                newEnquiry = await prisma.enquiry.create({
                    data: {
                        name: data.name,
                        phone: data.phone,
                        email: data.email || null,
                        date: data.date,
                        eventType: data.eventType,
                        guests: data.guests || null,
                    }
                });
                dbSuccess = true;
            } catch (dbErr: any) {
                console.error("[DB ERROR] Prisma failed to connect/insert:", dbErr);
                debugErrors.push(`Database Error: ${dbErr.message}`);
            }
        } else {
            debugErrors.push("DATABASE_URL environment variable is mysteriously missing from Vercel.");
        }

        // 2. Send Notification Email via Resend (OPTIONAL/SILENT FAIL)
        if (process.env.RESEND_API_KEY) {
            try {
                const resendUrl = new Resend(process.env.RESEND_API_KEY);
                await resendUrl.emails.send({
                    from: 'Acme <onboarding@resend.dev>',
                    to: ['makauditorium@gmail.com'],
                    subject: `New Booking Enquiry - ${data.name}`,
                    html: `
            <h2>New Booking Enquiry Received</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
            <p><strong>Date Requested:</strong> ${data.date}</p>
            <p><strong>Event Type:</strong> ${data.eventType}</p>
            <p><strong>Guests:</strong> ${data.guests || 'Not provided'}</p>
          `
                });
            } catch (emailErr: any) {
                console.error("[EMAIL ERROR] Resend rejected the email payload (likely an unverified domain issue):", emailErr);
            }
        }

        // STRICT VALIDATION: If Database explicitly failed, we throw an error directly to the frontend.
        if (!dbSuccess) {
            return NextResponse.json({ success: false, message: "Database rejected insertion", debug: debugErrors }, { status: 500 });
        }

        // If Database physical insertion succeeded, approve exactly.
        return NextResponse.json({ success: true, message: "Passed strict SQL insertion!" }, { status: 200 });

    } catch (error) {
        console.error("Enquiry API System Failure:", error);
        return NextResponse.json({ success: false, message: "Internal router crash" }, { status: 500 });
    }
}
