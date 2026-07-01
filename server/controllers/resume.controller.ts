import { Request, Response } from "express";
import Resume from "../models/resume.model";
import {extractTextFromPDF} from "../services/pdf.service"
import { analyzeResume } from "../services/ai.service"
import ResumeAnalysis from "../models/resumeAnalysis.model"
export const uploadResume = async (
    req: Request,
    res: Response
) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Resume file is required."
            });
        }

        const resume = await Resume.create({
            user: req.user._id,
            title: req.file.originalname.replace(".pdf", ""),
            originalName: req.file.originalname,
            fileUrl: req.file.path,
            fileSize: req.file.size,
            mimeType: req.file.mimetype,
            isDefault: true
        });

        console.log(req.file?.path)
        console.log(req.file?.filename)


        const extractedText = await extractTextFromPDF(req.file.path)

        console.log("Resume Text : ", extractedText)

        const analysis = await analyzeResume(extractedText)
        console.log("Analysis Text : ", analysis)
        const savedAnalysis = await ResumeAnalysis.create({
            resume: resume._id,
            atsScore: analysis.atsScore,
            summary: analysis.summary,
            strengths: analysis.strengths,
            weaknesses: analysis.weaknesses,
            skills: analysis.skills,
            missingSkills: analysis.missingSkills,
            suggestions: analysis.suggestions
        })

        return res.status(201).json({
            success: true,
            message: "Resume uploaded successfully.",
            resume,
            extractedText
        });

        

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};



export const getUserResumes = async (
    req: Request,
    res: Response
) => {
    try {

        const resumes = await Resume.find({
            user: req.user._id
        }).sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            resumes
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

export const getResumeAnalysis = async (
    req: Request,
    res: Response
) => {
    try {

        const { id } = req.params;

        const resume = await Resume.findOne({
            _id: id,
            user: req.user._id
        });

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }

        const analysis = await ResumeAnalysis.findOne({
            resume: resume._id
        });

        return res.json({
            success: true,
            resume,
            analysis
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};


export const deleteResume = async (
    req: Request,
    res: Response
) => {
    try {

        const { id } = req.params;

        const resume = await Resume.findOne({
            _id: id,
            user: req.user._id
        });

        if (!resume) {
            return res.status(404).json({
                success: false,
                message: "Resume not found"
            });
        }

        await ResumeAnalysis.deleteOne({
            resume: resume._id
        });

        await Resume.deleteOne({
            _id: resume._id
        });

        return res.json({
            success: true,
            message: "Resume deleted successfully"
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};