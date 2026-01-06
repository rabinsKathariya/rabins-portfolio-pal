import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const PORTFOLIO_CONTEXT = `You are a friendly virtual assistant for Rabins Kathariya's portfolio website. Your role is to answer questions about Rabins in a helpful and engaging way.

About Rabins Kathariya:
- Full Name: Rabins Kathariya
- Education: Currently pursuing Bachelor of Engineering (BE) in Computer Engineering (Undergraduate)
- Location: Nepal

Primary Skills:
- Python (Basic to Intermediate level)
- Python Libraries: Pygame, NumPy, Pandas, Seaborn, Matplotlib

Other Skills:
- Data Entry (High proficiency)
- Data Cleaning and Manipulation
- Data Analysis and Visualization

Programming Languages (Basic Knowledge):
- C, C++, Java, C#, JavaScript

Web Technologies:
- HTML, CSS, JavaScript

Projects:
1. Snake Game - Built with Python and Pygame
2. Sales Data Analysis - Using Pandas, Matplotlib, and Seaborn
3. Weather Data Visualization - Using NumPy and Matplotlib
4. Personal Portfolio Website - HTML, CSS, JavaScript
5. Tic-Tac-Toe AI - Python with minimax algorithm
6. CSV Data Cleaner - Automated tool using Python and Pandas

Services Offered:
1. Data Entry - Fast and accurate data entry services
2. Data Cleaning - Transform messy data into clean, analysis-ready datasets
3. Data Analysis - Extract insights using Python and visualization libraries
4. Python Scripting - Custom scripts for automation and data processing
5. Data Visualization - Create charts and graphs using Matplotlib and Seaborn
6. Quick Tasks - Various programming and data-related mini-projects

Contact Information:
- Email: insrab464@gmail.com
- LinkedIn: https://www.linkedin.com/in/rabins-kathariya-6b3616366/
- Currently available for freelance work and opportunities

Instructions:
- Be friendly, concise, and helpful
- Answer questions based on the above information
- If asked about something not covered, politely redirect to the contact section
- Encourage visitors to check out the portfolio sections
- Keep responses brief but informative
- Use a professional yet approachable tone`;

interface Message {
  role: string;
  content: string;
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json() as { messages: Message[] };

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      throw new Error("LOVABLE_API_KEY not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: PORTFOLIO_CONTEXT },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", errorText);
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const assistantMessage = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that request.";

    console.log("Chatbot response generated successfully");

    return new Response(
      JSON.stringify({ message: assistantMessage }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Chatbot error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
});
