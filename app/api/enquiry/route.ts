import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // 1. Save to PostgreSQL Database via Prisma
        let newEnquiry = null;
        if (process.env.DATABASE_URL) {
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
            console.log("[DB] Enquiry saved:", newEnquiry.id);
        } else {
            console.warn("[DB WARNING] No DATABASE_URL found. Skipping database write.");
        }

        // 2. Send Notification Email via Resend
        if (process.env.RESEND_API_KEY) {
            const resendUrl = new Resend(process.env.RESEND_API_KEY);
            await resendUrl.emails.send({
                from: 'Acme <onboarding@resend.dev>', // Resend's free tier testing domain
                to: ['makauditorium@gmail.com'],      // Target email address
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
            console.log("[EMAIL] Notification sent to makauditorium@gmail.com");
        } else {
            console.warn("[EMAIL WARNING] No RESEND_API_KEY found. Skipping email notification.");
        }

        return NextResponse.json({ success: true, message: "Enquiry processed successfully." }, { status: 200 });
    } catch (error) {
        console.error("Enquiry API Error:", error);
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }
}
