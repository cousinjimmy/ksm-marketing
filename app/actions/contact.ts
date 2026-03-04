"use server";

import { Resend } from "resend";

interface ContactFormState {
  success: boolean;
  error: string | null;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const companySize = formData.get("companySize") as string;
  const situation = formData.get("situation") as string;
  const description = formData.get("description") as string;
  const referral = formData.get("referral") as string;

  if (!name || !company || !email) {
    return { success: false, error: "Please fill in all required fields." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "your_resend_api_key_here") {
    console.error("RESEND_API_KEY is not configured");
    return {
      success: false,
      error: "Email service is not configured. Please try again later.",
    };
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "KSM Contact Form <onboarding@resend.dev>",
      to: "hello@ksm.ai",
      subject: `New inquiry from ${name} at ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Name</td>
            <td style="padding: 8px 16px;">${name}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Company</td>
            <td style="padding: 8px 16px;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Email</td>
            <td style="padding: 8px 16px;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Company Size</td>
            <td style="padding: 8px 16px;">${companySize || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Situation</td>
            <td style="padding: 8px 16px;">${situation || "Not specified"}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Description</td>
            <td style="padding: 8px 16px;">${description || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 16px; font-weight: bold; vertical-align: top;">Referral Source</td>
            <td style="padding: 8px 16px;">${referral || "Not specified"}</td>
          </tr>
        </table>
      `,
    });

    return { success: true, error: null };
  } catch (err) {
    console.error("Failed to send email:", err);
    return {
      success: false,
      error: "Something went wrong. Please try again or email us directly.",
    };
  }
}
