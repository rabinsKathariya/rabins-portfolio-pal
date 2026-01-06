import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const { name, email, subject, message }: ContactRequest = await req.json();

    console.log("Sending contact email notification...");

    // Send notification email to Rabins
    const notifyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["insrab464@gmail.com"],
        subject: `New Contact: ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0d9488, #3b82f6); padding: 30px; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0;">📬 New Portfolio Contact</h1>
            </div>
            <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #0d9488;">
                ${message}
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!notifyRes.ok) {
      const error = await notifyRes.text();
      console.error("Resend API error:", error);
      throw new Error(`Failed to send email: ${error}`);
    }

    // Send confirmation email to the sender
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Rabins Kathariya <onboarding@resend.dev>",
        to: [email],
        subject: "Thanks for reaching out!",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0d9488, #3b82f6); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0;">Thanks for reaching out, ${name}! 👋</h1>
            </div>
            <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px;">
              <p>I've received your message and I'm excited to hear from you!</p>
              <p>I typically respond within <strong style="color: #0d9488;">24-48 hours</strong>.</p>
              <p>Best regards,<br><strong style="color: #0d9488;">Rabins Kathariya</strong><br>Computer Engineering Student | Python Enthusiast</p>
            </div>
          </div>
        `,
      }),
    });

    console.log("Contact emails sent successfully");

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: unknown) {
    console.error("Email error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
