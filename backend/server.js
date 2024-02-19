import express from "express";
import dotenv from "dotenv"
import fs from "fs"
import cors from "cors"
import mongoose from "mongoose"
const app = express();
import searchRoute from "./Router/searchRouter.js"
import optionRoute from "./Router/filterOptions.js"
import coursesRouter from "./Router/coursesRouter.js"
import courseInfo from "./Router/courseInfo.js"

app.use(cors());
dotenv.config();

app.get("/search",searchRoute);
app.get("/filter" , optionRoute)
app.get("/courses" , coursesRouter)
app.get("/api/course/data/:id" , courseInfo)


const port = process.env.PORT
let db = mongoose.connect(process.env.MONGO_URL)
    .then(
        app.listen(port),
        console.log("Mongoose Connected")
    )





