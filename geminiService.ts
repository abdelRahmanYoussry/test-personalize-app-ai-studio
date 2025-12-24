
import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeQuizResults = async (answers: string[]): Promise<AIResponse> => {
  const prompt = `Analyze these quiz responses for a "Personality Vibe" test based on Egyptian Cinema Stars:
  Responses: ${answers.join(", ")}
  
  Possible Stars to match: Adel Emam (Leader/Comedy), Soad Hosny (Cinderella/Joy), Ahmed Helmy (Cheerful/Sarcastic Comedian), Ahmed Zaki (The Tiger/Intense), Nadia El Gendy (Star of the Masses/Powerful), Omar Sharif (International/Legend).
  
  Select the most fitting Egyptian star. Provide a structured response.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          personaName: { type: Type.STRING },
          title: { type: Type.STRING },
          traits: { type: Type.ARRAY, items: { type: Type.STRING } },
          reasoning: { type: Type.STRING },
          youtubeId: { type: Type.STRING, description: "A realistic YouTube video ID for an iconic scene of this actor, e.g. 'dQw4w9WgXcQ' for a placeholder." }
        },
        required: ["personaName", "title", "traits", "reasoning", "youtubeId"]
      }
    }
  });

  try {
    const result = JSON.parse(response.text);
    return result as AIResponse;
  } catch (e) {
    console.error("Failed to parse AI response", e);
    // Fallback
    return {
      personaName: "Ahmed Helmy",
      title: "The Cheerful Comedian",
      traits: ["Sarcastic", "Loyal", "Dramatic", "Chaotic"],
      reasoning: "Just like Ahmed, you use humor as a shield but have a heart of gold. Pure chaotic good energy.",
      youtubeId: "dQw4w9WgXcQ"
    };
  }
};
