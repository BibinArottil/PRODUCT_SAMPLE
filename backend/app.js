import express from "express";
import cors from "cors"
import morgan from "morgan";
import { configDotenv } from "dotenv";
import "./config/dbConfig.js"
import adminRoute from "./routes/admin.js"
import userRoute from "./routes/user.js";
const app = express()

configDotenv()
app.use(morgan("dev"))

app.use(cors({
    origin:[process.env.FRONTEND],
    methods:["GET", "POST", "PATCH"]
}))

app.use(express.json())
app.use("/api/admin",adminRoute)
app.use("/api",userRoute)

const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server running at ${port}`);
})