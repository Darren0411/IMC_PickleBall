import dotenv from "dotenv";
dotenv.config();
import express from "express";
import  connectMongodb from "./utils/connection.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import cookieParser from "cookie-parser";
import otpRoutes from "./routes/otpRoutes.js"
 
const app = express();
const Port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
//connection
//connectMongodb("mongodb+srv://darrendsa04:daru%40123@cluster0.r5a2s.mongodb.net/IMC_PickleBall?retryWrites=true&w=majority&appName=Cluster0")
connectMongodb("mongodb://localhost:27017/IMC_PickleBall")
.then((e)=>console.log("mongodb connected:"));


//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: 'http://localhost:5173', //frontend URL
      credentials: true, // Allows cookies to be sent
    })
  );
app.use(express.urlencoded({extended:true}));
  


//routes
app.use('/otp', otpRoutes);


app.listen(Port,() => {
    console.log(`server is running on port ${Port}`);
  });