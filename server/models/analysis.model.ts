import mongoose, { Schema, Document } from "mongoose";

export interface IAnalysis extends Document {
  resume: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;

  candidateName: string;
  atsScore: number;
  overallRating: number;

  summary: string;

  technicalSkills: string[];
  softSkills: string[];

  strengths: string[];
  weaknesses: string[];
  missingSkills: string[];

  grammarIssues: string[];
  formattingIssues: string[];

  projectSuggestions: string[];
  educationSuggestions: string[];
  experienceSuggestions: string[];

  certifications: string[];

  recommendedRoles: string[];

  careerRoadmap: string[];

  aiModel: string;
  processingTime: number;

  createdAt: Date;
  updatedAt: Date;
}

const analysisSchema = new Schema<IAnalysis>(
  {
    resume: {
      type: Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
      unique: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    candidateName: {
      type: String,
      default: "",
    },

    atsScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    overallRating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    summary: {
      type: String,
      default: "",
    },

    technicalSkills: {
      type: [String],
      default: [],
    },

    softSkills: {
      type: [String],
      default: [],
    },

    strengths: {
      type: [String],
      default: [],
    },

    weaknesses: {
      type: [String],
      default: [],
    },

    missingSkills: {
      type: [String],
      default: [],
    },

    grammarIssues: {
      type: [String],
      default: [],
    },

    formattingIssues: {
      type: [String],
      default: [],
    },

    projectSuggestions: {
      type: [String],
      default: [],
    },

    educationSuggestions: {
      type: [String],
      default: [],
    },

    experienceSuggestions: {
      type: [String],
      default: [],
    },

    certifications: {
      type: [String],
      default: [],
    },

    recommendedRoles: {
      type: [String],
      default: [],
    },

    careerRoadmap: {
      type: [String],
      default: [],
    },

    aiModel: {
      type: String,
      default: "gpt-4.1-mini",
    },

    processingTime: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

analysisSchema.index({ user: 1 });
analysisSchema.index({ resume: 1 });

const Analysis = mongoose.model<IAnalysis>(
  "Analysis",
  analysisSchema
);

export default Analysis;