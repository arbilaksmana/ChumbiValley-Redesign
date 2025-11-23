import { GoogleGenAI } from "@google/genai";

// We use the Gemini 2.5 Flash model for fast, responsive chat interactions.
const MODEL_NAME = 'gemini-2.5-flash';

let aiClient: GoogleGenAI | null = null;

// Initialize the client only when needed to handle potential API key absence gracefully
const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return aiClient;
};

export const askTheOracle = async (userMessage: string): Promise<string> => {
  try {
    const client = getClient();
    if (!process.env.API_KEY) {
      return "The Oracle's connection to the stars is severed. (Missing API Key)";
    }

    const response = await client.models.generateContent({
      model: MODEL_NAME,
      contents: userMessage,
      config: {
        systemInstruction: "You are the Ancient Oracle of Chumbi Valley. Speak in a mystical, wise, and slightly archaic tone (like a fantasy sage). You know everything about the Chumbi Valley game: it is an enchanting role-playing blockchain game built on Polygon. Players explore a mystical forest, breed and collect NFT creatures called Chumbi. Use emojis like ✨, 🌿, 🍄. Keep answers concise (under 100 words).",
        temperature: 0.7,
      }
    });

    return response.text || "The mists are too thick... I cannot see the answer right now.";
  } catch (error) {
    console.error("Oracle Error:", error);
    return "The spirits are restless. Try again later.";
  }
};