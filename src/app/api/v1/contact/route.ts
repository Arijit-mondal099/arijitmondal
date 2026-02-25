import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { toEmail, subject, body, name } = (await req.json()) as {
      toEmail: string;
      subject: string;
      name: string;
      body: string;
    };

    if (!toEmail?.trim() || !subject?.trim() || !body?.trim() || !name?.trim()) {
      return NextResponse.json(
        { success: true, message: "Please provide all required fileds." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: subject,
      text: body,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin:0;padding:0;background-color:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
            <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <tr>
                <td style="background:linear-gradient(135deg,#4f46e5,#7c3aed);padding:30px;text-align:center;">
                <h1 style="color:#ffffff;margin:0;font-size:24px;">🚀 Your Message</h1>
                </td>
            </tr>

            <!-- Body -->
            <tr>
                <td style="padding:30px;color:#333333;font-size:16px;line-height:1.6;">
                <p style="margin-top:0;">Hello, im ${name}</p>

                <p>${body}</p>

                <div style="text-align:center;margin:30px 0;">
                    <a href="https://arijitmondal.vercel.app" 
                    style="background:#4f46e5;color:#ffffff;text-decoration:none;padding:12px 25px;border-radius:6px;font-weight:bold;display:inline-block;">
                    Take Action
                    </a>
                </div>

                <p style="margin-bottom:0;">
                    If you have any questions, feel free to reply to this email.
                </p>
                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td style="background:#f9fafb;padding:20px;text-align:center;font-size:12px;color:#888888;">
                © ${new Date().getFullYear()} arijit mondal. All rights reserved.
                </td>
            </tr>

            </table>
        </body>
        </html>
        `,
    });

    if (info.accepted.length) {
      return NextResponse.json(
        { success: true, message: "Mail send successfully" },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { success: false, message: "Faild to send mail please try again." },
        { status: 400 },
      );
    }
  } catch (error) {
    console.log("ERROR :: ", error);
    return NextResponse.json(
      { success: false, message: "Faild to send email." },
      { status: 500 },
    );
  }
}
