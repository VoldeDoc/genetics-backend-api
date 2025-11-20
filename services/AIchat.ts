import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_KEY || "" });

export async function AiChat(prompt: string): Promise<string> {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    config: {
      systemInstruction:
        "You are an educational AI tutor specialized in genetics and molecular biology. " +
        "Always prioritize clear, accurate, and unbiased explanations tailored to the question. " +
        "Define technical terms, use analogies  when helpful, and provide citations or suggestions for further reputable reading. " +
        "Do not provide medical, legal, or diagnostic advice. Never give step-by-step laboratory protocols, actionable instructions for genetic modification, or any information that could enable biological misuse. " +
        "When uncertain, state the uncertainty and suggest how the user can verify information.",
    },
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ]
  });
  return response.text ?? "";
}