import { Router } from "express";
import upload from "../config/multer";
import { protect } from "../middleware/auth.middleware";
import { deleteResume, getLatestResume, getResumeAnalysis, getResumeHistory, getUserResumes, uploadResume } from "../controllers/resume.controller";

const router = Router();

router.post("/upload", protect, upload.single("resume"), uploadResume);
router.get("/history", protect, getResumeHistory)
router.get("/latest", protect, getLatestResume);

router.get("/", protect, getUserResumes);

router.get("/:id", protect, getResumeAnalysis);

router.delete("/:id", protect, deleteResume);


export default router;