import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function callAIWithTimeout(payload: any, timeoutMs = 30000) {
  const key = Deno.env.get("LOVABLE_API_KEY");
  if (!key) throw new Error("LOVABLE_API_KEY is not configured");
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${key}`, 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    
    const text = await resp.text();
    if (!resp.ok) throw new Error(`AI API error ${resp.status}: ${text}`);
    return JSON.parse(text);
  } finally { 
    clearTimeout(id); 
  }
}

function containsChemistryLike(text: string): boolean {
  const patterns = [
    /\b[A-Z][a-z]?\d{0,2}\b/,
    /→|⇌|<-+>|<=>|\+\s*\w+\s*->/,
    /\((aq|g|s|l)\)/i,
    /polymer|polymerisation|monomer/i,
    /mole|molar|relative\s+atomic\s+mass|RFM|RAM/i,
    /C\d+H\d+/i
  ];
  return patterns.some((r) => r.test(text));
}

function chemistryNotInNotes(text: string, notes: string): boolean {
  if (containsChemistryLike(notes)) return false;
  return containsChemistryLike(text);
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { studyContent, numQuestions = 4, previousQuestions = [], subject } = await req.json();
    
    if (!studyContent || typeof studyContent !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing studyContent" }), 
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[generate-simple-questions] Generating questions for subject:", subject);

    const systemPrompt = `You are an expert GCSE AQA examiner creating exam questions that EXACTLY match authentic AQA past paper style.

📚 AQA COMMAND WORDS (MUST use correctly):
- **State/Name/Give** (1 mark) - Single word/phrase, factual recall
- **Describe** (2-3 marks) - Give account of process/phenomenon
- **Explain** (3-4 marks) - Give reasons using scientific vocabulary
- **Calculate** (2-4 marks) - Show working, include units
- **Compare** (3-4 marks) - State similarities AND differences

🚨 CRITICAL CONSTRAINTS:
✓ Questions must be DIRECTLY answerable from study content
✓ Use EXACT command words for mark allocation
✗ DO NOT introduce topics not covered
✗ DO NOT invent data or scenarios not in notes

Output ONLY valid JSON format.`;

    const userPrompt = `Study Content:

${studyContent}

Create exactly ${numQuestions} GCSE AQA exam questions about ONLY the content above.

${previousQuestions.length > 0 ? `AVOID repeating these previous questions:
${previousQuestions.map((q: string, i: number) => `${i + 1}. ${q}`).join("\n")}` : ''}

${subject && subject.toLowerCase() === 'product-design' ? `ADDITIONAL FILTERS FOR PRODUCT DESIGN:
- Do NOT include chemical equations, element symbols, reaction arrows, state symbols, or stoichiometry calculations.` : ''}

Return ONLY this JSON structure:
{ "questions": [ { "question": string, "questionType": string, "marks": number (1-4), "expectedKeyPoints": string[], "markscheme": string } ] }`;

    console.log("[generate-simple-questions] Calling Lovable AI...");
    
    const data = await callAIWithTimeout({
      model: "google/gemini-2.5-flash",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
    });

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("No content in AI response");
    }

    console.log("[generate-simple-questions] Raw AI response:", content);

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      console.error("[generate-simple-questions] JSON parse error:", e);
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsed = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Could not extract JSON from response");
      }
    }

    if (!parsed.questions || !Array.isArray(parsed.questions)) {
      throw new Error("Invalid response structure");
    }

    // Extra guard for Product Design
    if (subject && typeof subject === 'string' && subject.toLowerCase() === 'product-design') {
      const combined = parsed.questions.map((q: any) => `${q.question}\n${q.markscheme || ''}`).join('\n');
      if (chemistryNotInNotes(combined, studyContent)) {
        console.warn("[generate-simple-questions] Detected chemistry-like content not in notes, retrying...");
        const retryData = await callAIWithTimeout({
          model: "google/gemini-2.5-flash",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt + "\n\nIMPORTANT: Regenerate questions strictly using ONLY the study content above. NO chemistry notation." }
          ],
        });
        const retryContent = retryData.choices?.[0]?.message?.content;
        if (retryContent) {
          try {
            const retryParsed = JSON.parse(retryContent);
            if (retryParsed?.questions && Array.isArray(retryParsed.questions)) {
              parsed = retryParsed;
            }
          } catch (e) {
            console.warn("[generate-simple-questions] Retry JSON parse failed:", e);
          }
        }
      }
    }

    console.log("[generate-simple-questions] Successfully generated", parsed.questions.length, "questions");

    return new Response(
      JSON.stringify(parsed),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("[generate-simple-questions] Error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        questions: [] 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
