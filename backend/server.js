import express from "express";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv"

const PORT = process.env.PORT || 3002;
const server = express();

server.use(express.json());

dotenv.config();
connectDB();
server.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`);
})
