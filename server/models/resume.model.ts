import mongoose, { Schema, Document } from "mongoose";

export interface IResume extends Document {

    user: mongoose.Types.ObjectId;

    title: string;

    originalName: string;

    fileUrl: string;

    fileSize: number;

    mimeType: string;

    isDefault: boolean;

    createdAt: Date;

    updatedAt: Date;
}

const resumeSchema = new Schema<IResume>(
    {

        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        title: {
            type: String,
            required: true
        },

        originalName: String,

        fileUrl: String,

        fileSize: Number,

        mimeType: String,

        isDefault: {
            type: Boolean,
            default: false
        }

    },
    {
        timestamps: true
    }
);

export default mongoose.model<IResume>(
    "Resume",
    resumeSchema
);