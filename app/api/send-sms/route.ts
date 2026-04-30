import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

export async function POST(request: NextRequest) {
    try {
        // Destructure all fields from our Booking form
        const { name, eventType, date, location, message } = await request.json();

        // Basic Validation
        if (!name || !message) {
            return NextResponse.json(
                { success: false, message: "Name, and Message are required!" },
                { status: 400 }
            );
        }

        // Format the SMS body for a clean look on your phone
        const smsBody = `
🎥 NEW LEAD: AB's Film
-----------------------
👤 Name: ${name}
🎬 Event: ${eventType}
📅 Date: ${date || 'Not specified'}
📍 Loc: ${location}
💬 Msg: ${message}
-----------------------
        `.trim();

        const twilioResponse = await client.messages.create({
            body: smsBody,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: "+919106052826",
        });

        if (!twilioResponse.sid) {
            return NextResponse.json(
                { success: false, message: "Twilio failed to process the SMS" },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "SMS notification sent to Abhay"
        });

    } catch (error: any) {
        console.error("Twilio Error:", error);
        return NextResponse.json(
            { success: false, message: error.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}