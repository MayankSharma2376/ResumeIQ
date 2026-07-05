import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import helmet from "helmet"
import compression from "compression"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import { success } from "zod"
import authRoutes from "../routes/auth.routes"
import resumeRoutes from "../routes/resume.routes"
import jobRoutes from "../routes/job.routes"
import dashboardRoutes from "../routes/dashboard.routes"
const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  "https://resume-iq-vwg3.vercel.app",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

console.log("CORS Origin: ", process.env.CLIENT_URL)

app.use(helmet())
app.use(compression())
app.use(morgan("dev"))
app.use(cookieParser())


app.use(express.json())
app.use(express.urlencoded(
    {
        extended: true
    }
))

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/resume", resumeRoutes);
app.use("/api/v1/job", jobRoutes)
app.use("/api/v1/dashboard", dashboardRoutes)


app.get("/", (req, res)=>{
    return res.status(200).json({
        success: true,
        message: "ResumeIQ API is running"
    })
})


import errorHandler from "../middleware/error.middleware"

app.use(errorHandler)



export default app