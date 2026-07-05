import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export interface IUser extends mongoose.Document {
  fullName: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  role: "user" | "admin";
  provider: "local" | "google";
  isVerified: boolean;
  lastLogin?: Date;

  comparePassword(password: string): Promise<boolean>;
  generateAccessToken(): string;
}

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    avatar: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    lastLogin: Date,
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
  
});

userSchema.methods.comparePassword = function (password: string) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
const secret = process.env.JWT_SECRET as string;

return jwt.sign(
  {
    userId: this._id,
    role: this.role,
  },
  secret,
  {
    expiresIn: "7d",
  }
);
};

export default mongoose.model<IUser>("User", userSchema);