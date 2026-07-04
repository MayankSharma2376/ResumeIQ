import { z } from "zod";

export const jobMatchSchema = z.object({
    jobDescription: z.string().min(50, "Job description is too short")
});