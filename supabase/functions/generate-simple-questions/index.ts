import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function callOpenAIWithTimeout(payload: any, timeoutMs = 30000) {
  const key = Deno.env.get("BYTEZ_API_KEY_PRO");
  if (!key) throw new Error("BYTEZ_API_KEY_PRO is not configured");
  
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  
  try {
    const resp = await fetch("https://api.bytez.com/models/v2/openai/v1/chat/completions", {
      method: "POST",
      headers: { 
        Authorization: `Bearer ${key}`, 
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    
    const text = await resp.text();
    if (!resp.ok) throw new Error(`Bytez API error ${resp.status}: ${text}`);
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
  // Allow chemistry-style content only if notes already contain it
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

🎯 AQA SPECIFICATION ALIGNMENT:
Questions must test SPECIFIC specification points using correct assessment objectives:
- AO1: Demonstrate knowledge (recall facts, definitions, equations)
- AO2: Apply knowledge (use in calculations, new contexts)
- AO3: Analyse/evaluate (interpret data, draw conclusions)

📚 AQA COMMAND WORDS (MUST use correctly):
- **State/Name/Give** (1 mark) - Single word/phrase, factual recall
- **Describe** (2-3 marks) - Give account of process/phenomenon
- **Explain** (3-4 marks) - Give reasons using scientific vocabulary
- **Calculate** (2-4 marks) - Show working, include units
- **Compare** (3-4 marks) - State similarities AND differences
- **Suggest** (2-3 marks) - Apply to unfamiliar context

📝 AUTHENTIC AQA QUESTION EXAMPLES:

1 MARK (State/Name):
"State the type of bonding in sodium chloride." [1 mark]
"Name the product formed when magnesium reacts with oxygen." [1 mark]

2 MARKS (Describe/Calculate):
"Describe what happens to the atoms when sodium reacts with chlorine." [2 marks]
"Calculate the relative formula mass of H₂SO₄. (Ar: H=1, S=32, O=16)" [2 marks]

3 MARKS (Explain):
"Explain why metals are good conductors of electricity." [3 marks]
"Explain, in terms of particles, why gases can be compressed." [3 marks]

4 MARKS (Extended Explain):
"Explain how a catalyst increases the rate of reaction. Include a description of what happens at the molecular level." [4 marks]

QUESTION TYPES TO GENERATE:
1. Multiple Choice (1 mark) - 4 options, one correct
2. Short Answer (2-3 marks) - State two/Describe
3. Extended (4 marks) - Explain with reasons

🚨 CRITICAL CONSTRAINTS:
✓ Questions must be DIRECTLY answerable from study content
✓ Use EXACT command words for mark allocation
✓ Every fact/term MUST appear in the study content
✗ DO NOT introduce topics not covered
✗ DO NOT invent data or scenarios not in notes

Output ONLY valid JSON format.`;

    const userPrompt = `Study Content:

${studyContent}

🎯 Create exactly ${numQuestions} GCSE AQA exam questions about ONLY the content above.

⚠️ CRITICAL CONSTRAINTS:
✓ Every word of your question must relate to concepts in the study content above
✓ Do NOT introduce new topics, materials, or processes not mentioned above
✓ If the study content is about "forces", ask about forces - NOT about chemistry, biology, or unrelated topics
✓ Questions must be DIRECTLY answerable using ONLY the information provided
✓ Choose from: Multiple Choice (1 mark), Short Answer (2-3 marks), Extended (4 marks)
✓ Use clear, simple language
✓ NO complex application questions
✓ Include questionType field: "Multiple Choice", "Short Answer", or "Extended"

${previousQuestions.length > 0 ? `AVOID repeating these previous questions:
${previousQuestions.map((q: string, i: number) => `${i + 1}. ${q}`).join("\n")}` : ''}

${subject && subject.toLowerCase() === 'product-design' ? `ADDITIONAL FILTERS FOR PRODUCT DESIGN (especially Sources and Origins):
- Do NOT include chemical equations, element symbols (e.g., Fe, C2H4), reaction arrows (→), state symbols ((s),(l),(g),(aq)), polymerisation notation, or stoichiometry/mole/relative-mass calculations.
- If such symbols or equations do NOT appear in the study content above, you MUST NOT include them in the question or markscheme.
- Focus on sources, origins, material categories, properties, provenance, environmental/ethical impact, supply chains, and responsible design.` : ''}

MARK SCHEME REQUIREMENTS:
Create detailed mark schemes following AQA style:

For MULTIPLE CHOICE (1 mark):
"**Mark Scheme:**\n\n✅ Correct answer: [Option letter]\n❌ All other options: 0 marks"

For SHORT ANSWER (2 marks):
"**Mark Scheme:**\n\n1 mark: [First acceptable point]\n1 mark: [Second acceptable point]\n\n✅ **Maximum: 2 marks**\n❌ No marks for [unacceptable answers]"

For SHORT ANSWER (3 marks):
"**Mark Scheme:**\n\n1 mark: [First point]\n1 mark: [Second point]\n1 mark: [Third point]\n\n✅ **Maximum: 3 marks**\n❌ Do not accept [unacceptable answers]"

For EXTENDED (4 marks):
"**Mark Scheme:**\n\n1 mark: [First point]\n1 mark: [Second point]\n1 mark: [Third point]\n1 mark: [Fourth point]\n\n✅ **Maximum: 4 marks**\n❌ No credit for [unacceptable answers]"

Return ONLY this JSON structure:
{ "questions": [ { "question": string, "questionType": string, "marks": number (1-4), "expectedKeyPoints": string[], "markscheme": string } ] }`;

    console.log("[generate-simple-questions] Calling Bytez AI...");
    
    const data = await callOpenAIWithTimeout({
      model: "google/gemini-2.5-pro",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      max_completion_tokens: 3000,
    });

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      throw new Error("No content in OpenAI response");
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

    // Extra guard for Product Design: avoid chemistry-like content unless present in notes
    if (subject && typeof subject === 'string' && subject.toLowerCase() === 'product-design') {
      const combined = parsed.questions.map((q: any) => `${q.question}\n${q.markscheme || ''}`).join('\n');
      if (chemistryNotInNotes(combined, studyContent)) {
        console.warn("[generate-simple-questions] Detected chemistry-like content not in notes, retrying once with stricter guard.");
        const retryData = await callOpenAIWithTimeout({
          model: "google/gemini-2.5-pro",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt + "\n\nIMPORTANT: Your previous draft included chemistry-style content (equations, element symbols, reaction arrows). Regenerate the questions strictly using ONLY the study content above. NO chemistry notation or calculations unless explicitly present in the notes." }
          ],
          max_completion_tokens: 3000,
        });
        const retryContent = retryData.choices?.[0]?.message?.content;
        if (retryContent) {
          try {
            const retryParsed = JSON.parse(retryContent);
            if (retryParsed?.questions && Array.isArray(retryParsed.questions)) {
              const combinedRetry = retryParsed.questions.map((q: any) => `${q.question}\n${q.markscheme || ''}`).join('\n');
              if (!chemistryNotInNotes(combinedRetry, studyContent)) {
                parsed = retryParsed;
              } else {
                console.warn("[generate-simple-questions] Retry still contains chemistry-like content; returning first result.");
              }
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