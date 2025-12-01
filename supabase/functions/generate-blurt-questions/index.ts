import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { studyContent } = await req.json();
    
    if (!studyContent || typeof studyContent !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing studyContent" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const timestamp = Date.now();
    const randomSeed = Math.floor(Math.random() * 10000);

    const systemPrompt = `You are an expert GCSE AQA examiner creating blurt-style active recall flashcard questions.

AQA FLASHCARD PRINCIPLES:
1. Short, direct questions (5-15 words) for quick active recall
2. Test ONE specific fact, term, or concept per question
3. Vary question styles: "Define...", "State...", "Name...", "What is...", "Give..."
4. Focus on key terminology, definitions, properties, examples, and processes
5. Questions should be instantly answerable from memory after studying

CRITICAL REQUIREMENTS:
1. Base ALL content ONLY on the topic notes provided
2. Keep everything GCSE AQA level - clear, accessible
3. Generate EXACTLY 5 questions labeled Q1, Q2, Q3, Q4, Q5

RANDOMIZATION SEED: ${randomSeed}

Return ONLY valid JSON in this exact format:
{
  "questions": [
    {
      "questionNumber": "Q1",
      "question": "What is...",
      "answer": "Clear, concise answer",
      "marks": 1
    }
  ]
}`;

    const userPrompt = `Study Content:\n\n${studyContent}\n\n🎲 RANDOMIZATION TASK (Seed: ${randomSeed}, Time: ${timestamp}):\n\nGenerate 5 blurt questions NOW in the exact format specified.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ]
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;
    
    console.log("[generate-blurt-questions] AI Response:", aiResponse.substring(0, 300));
    
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("Could not parse AI response:", aiResponse);
      throw new Error("Invalid AI response format");
    }
    
    const result = JSON.parse(jsonMatch[0]);
    
    console.log("[generate-blurt-questions] Generated questions:", result.questions?.length);
    
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in generate-blurt-questions function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error",
        questions: [
          {
            questionNumber: "Q1",
            question: "Explain the key concepts from the study material.",
            answer: "Review the main ideas and how they connect to each other.",
            marks: 1
          }
        ]
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
