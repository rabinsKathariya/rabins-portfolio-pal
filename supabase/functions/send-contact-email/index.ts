import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL")?.trim() || "noreply@rabinskathariya.com.np";
const NOTIFY_TO_EMAIL = Deno.env.get("CONTACT_NOTIFY_TO_EMAIL")?.trim() || "insrab464@gmail.com";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  record.count++;
  return false;
}

// HTML escape function to prevent XSS in email clients
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

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
    // Rate limiting
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("x-real-ip") || 
                     "unknown";
    
    if (isRateLimited(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const { name, email, subject, message }: ContactRequest = await req.json();

    // Escape all user inputs to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    console.log("Sending contact email notification...");

    // Send notification email to Rabins
    const notifyRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Portfolio Contact Form <${FROM_EMAIL}>`,
        to: [NOTIFY_TO_EMAIL],
        reply_to: email, // Allow direct reply to the sender
        subject: `Portfolio Message from ${safeName}: ${safeSubject}`,
        text: `New contact form submission from your portfolio website.\n\nFrom: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}\n\n---\nThis email was sent from your portfolio contact form at rabinskathariya.com.np`,
        html: `
          <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <div style="background-color: #0d9488; padding: 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 600;">New Portfolio Contact</h1>
            </div>
            <div style="padding: 24px; background-color: #f9fafb;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #374151; width: 80px;">From:</td>
                  <td style="padding: 8px 0; color: #111827;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #374151;">Email:</td>
                  <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #0d9488;">${safeEmail}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #374151;">Subject:</td>
                  <td style="padding: 8px 0; color: #111827;">${safeSubject}</td>
                </tr>
              </table>
              <div style="margin-top: 16px;">
                <p style="font-weight: 600; color: #374151; margin-bottom: 8px;">Message:</p>
                <div style="background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e5e7eb; color: #111827; line-height: 1.6;">
                  ${safeMessage.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div style="padding: 16px 24px; background-color: #f3f4f6; text-align: center; font-size: 12px; color: #6b7280;">
              <p style="margin: 0;">This email was sent from your portfolio contact form at rabinskathariya.com.np</p>
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
        from: `Rabins Kathariya <${FROM_EMAIL}>`,
        to: [email],
        subject: "Thanks for reaching out!",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #0d9488, #3b82f6); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0;">Thanks for reaching out, ${safeName}! 👋</h1>
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
