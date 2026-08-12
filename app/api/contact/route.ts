import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL || "alizehadeel12@gmail.com";

    if (!apiKey) {
      // Graceful fallback for local development or when API key is missing
      console.log("Mock Email Sent Successfully (no RESEND_API_KEY config):", {
        to: toEmail,
        from: `${name} <portfolio@resend.dev>`,
        replyTo: email,
        subject: `[Portfolio Contact] ${subject}`,
        body: message,
      });

      return NextResponse.json({
        success: true,
        message: "Message received! (Mock mode: API key not set)",
        mocked: true,
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API Route Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
