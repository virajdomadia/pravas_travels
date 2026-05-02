import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { connectToDatabase } from "@/lib/mongodb";
import { InquiryModel } from "@/models/Inquiry";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, destination, message } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // Save to database
    await connectToDatabase();
    await InquiryModel.create({
      name,
      phone,
      email: email || null,
      destination: destination || null,
      message: message || null,
      status: "new",
    });

    // Send admin notification
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "holidayspravaas@gmail.com",
      subject: `New Travel Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Destination:</strong> ${destination || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message"}</p>
        <p><em>Submitted at ${new Date().toISOString()}</em></p>
      `,
    });

    // Send confirmation to user if email provided
    if (email) {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "We received your travel inquiry - Pravaas Holidays",
        html: `
          <h2>Thank you for reaching out, ${name}!</h2>
          <p>We've received your inquiry and our travel experts will get back to you within 2 hours during business hours.</p>
          <p>In the meantime, feel free to reach out to us on WhatsApp for faster response:</p>
          <p><a href="https://wa.me/919167439172?text=Hi%20Pravaas%20I%20just%20submitted%20an%20inquiry%20on%20your%20website">Chat on WhatsApp</a></p>
          <p><strong>Your inquiry details:</strong></p>
          <ul>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Destination:</strong> ${destination || "Not specified"}</li>
            ${message ? `<li><strong>Message:</strong> ${message}</li>` : ""}
          </ul>
          <p>Best regards,<br>Pravaas Holidays Team</p>
        `,
      });
    }

    return NextResponse.json(
      { success: true, message: "Inquiry received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
