require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function execute() {
    console.log("[Diagnostic] Using connection URL:", process.env.DATABASE_URL);

    if (!process.env.DATABASE_URL) {
        console.log("FATAL ERROR: Local .env does not contain DATABASE_URL");
        return;
    }

    try {
        console.log("[Diagnostic] Attempting to insert test record into Neon Database...");
        const result = await prisma.enquiry.create({
            data: {
                name: "Diagnostic Test",
                phone: "000-000-0000",
                date: "2026-01-01",
                eventType: "Diagnostic",
                guests: "0"
            }
        });
        console.log("[Diagnostic] SUCCESS! The record was successfully injected:", result.id);
    } catch (error) {
        console.error("[Diagnostic] FAILURE! Prisma threw an exception:");
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

execute();
