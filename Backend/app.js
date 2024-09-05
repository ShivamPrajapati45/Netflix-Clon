import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cors({
    origin : process.env.CLIENT_BASE_URL,
    methods : ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ['Content-Type', 'Authorization', "Cache-Control", "Expires", "Pragma"],
    credentials : true,
}))
app.use(cookieParser());
app.use(express.urlencoded());

//import router
import userRouter from "./Routes/user-routes.js"

//router declaration
app.use("/users",userRouter);


export {app};