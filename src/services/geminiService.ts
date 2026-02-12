
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getTechnicalAdvice = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite-latest',
      contents: `You are the technical assistant for 'Hidden Layer', an architectural and technical fashion brand. 
      Users will ask about garments, materials (like tech-nylon, Cordura), or the 'Série Matemática' collection.
      Respond in Portuguese, maintain a minimalist, professional, and slightly futuristic/mathematical tone.
      Use terms like 'otimização', 'paradigmas', 'estrutura', and 'geometria'.
      Keep answers concise and technical.
      
      User Query: ${query}`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Falha na conexão com o sistema central. Tente novamente.";
  }
};
