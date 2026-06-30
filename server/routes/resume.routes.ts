import { Router } from "express";
import upload from "../config/multer";
import { protect } from "../middleware/auth.middleware";
import { deleteResume, getResumeAnalysis, getUserResumes, uploadResume } from "../controllers/resume.controller";

const router = Router();

router.post(
    "/upload",
    protect,
    upload.single("resume"),
    uploadResume
);

router.get("/", protect, getUserResumes)
router.get("/:id", protect, getResumeAnalysis)
router.delete("/:id", protect, deleteResume)

export default router;