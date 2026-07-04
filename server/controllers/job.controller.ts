import asyncHandler from "../utils/asyncHandler";
import Resume from "../models/resume.model";
import { extractTextFromPDF } from "../services/pdf.service";
import { matchResumeWithJob } from "../services/job.service";
import { jobMatchSchema } from "../validators/job.validator";
import ApiResponse from "../utils/ApiResponse";
import ApiError from "../utils/ApiError";

export const matchJobDescription = asyncHandler(async (req, res) => {

    const { jobDescription } = req.body;

    if (!jobDescription) {
        throw new ApiError(400, "Job description is required");
    }

    const resume = await Resume.findOne({
        user: req.user!._id
    }).sort({ createdAt: -1 });

    if (!resume) {
        throw new ApiError(404, "No resume found. Please upload a resume first.");
    }


    const resumeText = await extractTextFromPDF(
        resume.fileUrl
    );

    const analysis = await matchResumeWithJob(
        resumeText,
        jobDescription
    );

    return res.status(200).json(
        new ApiResponse(
            true,
            "Job matched successfully",
            analysis
        )
    );
});