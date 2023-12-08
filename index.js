import express  from "express";
import router from "./Routes/index.js";
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors'

const app = express();

dotenv.config()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get("/", (req , res) => {
    res.send("Welcome to Apple Backend");
} )

app.use("/apple/api/v1" , router)

app.listen(8000, () => console.log("app is running on port 8000"));

mongoose.connect(process.env.MONGOURL).then(() => console.log("Database Connected"))