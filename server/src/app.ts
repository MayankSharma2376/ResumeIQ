import express from "express"
import cors from "cors"
import helmet from "helmet"
import compression from "compression"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import { success } from "zod"
import authRoutes from "../routes/auth.routes"
import resumeRoutes from "../routes/resume.routes"

const app = express()

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true
    })
)

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


app.get("/", (req, res)=>{
    return res.status(200).json({
        success: true,
        message: "ResumeIQ API is running"
    })
})


import errorHandler from "../middleware/error.middleware"

app.use(errorHandler)



export default app