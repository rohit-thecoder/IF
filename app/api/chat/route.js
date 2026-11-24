import { NextResponse } from "next/server";
import { Mistral } from "@mistralai/mistralai";

import { findFAQ } from "@/chatbot/utils/findFAQ";
import { searchRelevantChunks } from "@/chatbot/rag/search";
import systemPrompt from "@/chatbot/prompts/systemPrompt";

const client = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    console.log("User Message:", message);

    if (!message) {
      return NextResponse.json(
        { success: false, reply: "Message is required." },
        { status: 400 }
      );
    }

    // FAQ
    const faqAnswer = findFAQ(message);

    if (faqAnswer) {
      console.log("FAQ Matched");

      return NextResponse.json({
        success: true,
        source: "FAQ",
        reply: faqAnswer.answer,
      });
    }

    // Search
    const chunks = await searchRelevantChunks(message);

    console.log("Chunks Found:", chunks.length);

    const context = chunks.map((c) => c.text).join("\n\n");

    console.log("========== CONTEXT ==========");
    console.log(context.substring(0, 1000));
    console.log("=============================");

    // AI
    console.log("Sending request to Mistral...");

    const prompt = `
${systemPrompt}

------------------------
WEBSITE CONTEXT
------------------------

${context}

------------------------
USER QUESTION
------------------------

${message}

Answer using ONLY the website context above.
`;

const response = await client.chat.complete({
  model: "mistral-small-latest",
  messages: [
    {
      role: "user",
      content: prompt,
    },
  ],
});
console.log("========== FULL MISTRAL RESPONSE ==========");
console.dir(response, { depth: null });
console.log("===========================================");

const answer = response?.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";

    return NextResponse.json({
      success: true,
      source: chunks.map((c) => c.page),
      reply: answer,
    });
  } catch (error) {
    console.error("========== CHAT ERROR ==========");
    console.error(error);
    console.error("================================");

    return NextResponse.json(
      {
        success: false,
        error: error.message,
        fullError: String(error),
      },
      { status: 500 }
    );
  }
}