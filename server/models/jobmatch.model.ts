import mongoose, { Schema, Document } from "mongoose";

export interface IJobMatch extends Document {
  analysis: mongoose.Types.ObjectId;
  resume: mongoose.Types.ObjectId;
  user: mongoose.Types.ObjectId;

  company: string;
  jobTitle: string;
  jobDescription: string;

  matchScore: number;

  matchedSkills: string[];
  missingSkills: string[];
  keywordSuggestions: string[];

  strengths: string[];
  weaknesses: string[];

  recommendations: string[];

  interviewProbability: number;

  createdAt: Date;
  updatedAt: Date;
}

const jobMatchSchema = new Schema<IJobMatch>(
  {
    analysis: {
      type: Schema.Types.ObjectId,
      ref: "Analysis",
      required: true,
    },

    resume: {
      type: Schema.Types.ObjectId,
      ref: "Resume",
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    company: {
      type: String,
      required: true,
      trim: true,
    },

    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    jobDescription: {
      type: String,
      required: true,
    },

    matchScore: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },

    matchedSkills: {
      type: [String],
      default: [],
    },

    missingSkills: {
      type: [String],
      default: [],
    },

    keywordSuggestions: {
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

    recommendations: {
      type: [String],
      default: [],
    },

    interviewProbability: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

jobMatchSchema.index({ user: 1 });
jobMatchSchema.index({ resume: 1 });
jobMatchSchema.index({ analysis: 1 });

const JobMatch = mongoose.model<IJobMatch>(
  "JobMatch",
  jobMatchSchema
);

export default JobMatch;