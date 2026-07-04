import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import { matchJobDescription } from "../controllers/job.controller";

const router = Router();

router.post("/match", protect, matchJobDescription);

export default router;