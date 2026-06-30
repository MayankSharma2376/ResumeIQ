import mongoose, { Document, Schema } from "mongoose";

export interface IResumeAnalysis extends Document {
    resume: mongoose.Types.ObjectId;
    atsScore: number;
    summary: string;
    strengths: string[];
    weaknesses: string[];
    skills: string[];
    missingSkills: string[];
    suggestions: string[];
}

const resumeAnalysisSchema = new Schema<IResumeAnalysis>(
    {
        resume: {
            type: Schema.Types.ObjectId,
            ref: "Resume",
            required: true,
            unique: true
        },

        atsScore: {
            type: Number,
            required: true
        },

        summary: {
            type: String,
            required: true
        },

        strengths: [String],

        weaknesses: [String],

        skills: [String],

        missingSkills: [String],

        suggestions: [String]
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IResumeAnalysis>(
    "ResumeAnalysis",
    resumeAnalysisSchema
);