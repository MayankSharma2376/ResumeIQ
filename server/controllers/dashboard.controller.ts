import Resume from "../models/resume.model";
import ResumeAnalysis from "../models/resumeAnalysis.model";
import asyncHandler from "../utils/asyncHandler";
import ApiResponse from "../utils/ApiResponse";

export const getDashboardStats = asyncHandler(async (req, res) => {

    const userId = req.user!._id;

    // Total resumes uploaded
    const totalResumes = await Resume.countDocuments({
        user: userId
    });

    // Latest resume
    const latestResume = await Resume.findOne({
        user: userId
    }).sort({
        createdAt: -1
    });

    let latestAnalysis = null;

    let highestATS = 0;

    let totalAnalyses = 0;

    if (latestResume) {

        latestAnalysis = await ResumeAnalysis.findOne({
            resume: latestResume._id
        });

        const resumes = await Resume.find({
    user: userId
}).select("_id");

const resumeIds = resumes.map((r) => r._id);

const analyses = await ResumeAnalysis.find({
    resume: {
        $in: resumeIds
    }
});



       
        totalAnalyses = analyses.length;

        highestATS = analyses.reduce((max, item) => {

            return item.atsScore > max ? item.atsScore : max;

        }, 0);

    }

    return res.status(200).json(

        new ApiResponse(

            true,

            "Dashboard Stats",

            {

                totalResumes,

                highestATS,

                totalAnalyses,

                latestResume,

                latestAnalysis

            }

        )

    );

});