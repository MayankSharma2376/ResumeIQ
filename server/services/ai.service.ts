import { GoogleGenAI } from "@google/genai";




export const analyzeResume = async (resumeText: string) => {

    console.log(process.env.GEMINI_API_KEY)

    const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});




  const prompt = `
You are an expert ATS (Applicant Tracking System) Resume Analyzer.

Analyze the following resume and return ONLY valid JSON.

Return exactly this format:

{
  "atsScore": 0,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "skills": [],
  "missingSkills": [],
  "suggestions": []
}

Resume:

${resumeText}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const text = response.text;

  if (!text) {
    throw new Error("No response received from Gemini.");
  }

  // Remove Markdown code fences if Gemini returns them
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
};