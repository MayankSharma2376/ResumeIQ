import {model} from "../config/gemini"

export const matchResumeWithJob = async (
    resumeText: string,
    jobDescription: string
) => {

    const prompt = `
You are an ATS (Applicant Tracking System).

Compare the following resume with the provided Job Description.

Resume:
${resumeText}

Job Description:
${jobDescription}

Return ONLY valid JSON.

{
  "matchScore": number,
  "matchedSkills": [],
  "missingSkills": [],
  "suggestions": []
}

Rules:
- Match score must be between 0 and 100.
- No markdown.
- No explanation.
- No extra text.
`;

    console.log("Model : ", model)

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return JSON.parse(
        response
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim()
    );
};