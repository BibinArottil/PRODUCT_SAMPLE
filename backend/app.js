import express from "express";
import cors from "cors"
import morgan from "morgan";
import { configDotenv } from "dotenv";
import "./config/dbConfig.js"
import adminRoute from "./routes/admin.js"
import userRoute from "./routes/user.js";
import ErrorHandler from "./middleware/errorHandler.js";
const app = express()

configDotenv()
app.use(morgan("dev"))

app.use(cors({
    origin:[process.env.FRONTEND],
    methods:["GET", "POST", "PATCH"]
}))

// Middlewares
app.use(express.json())
app.use("/api/admin",adminRoute)
app.use("/api",userRoute)

app.all("*",(req, res, next)=>{
    const err = new Error(req.originalUrl)
    err.status = "fail"
    err.statusCode = 404

    next(err)
})

// Error Handler Middleware
app.use(ErrorHandler)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})