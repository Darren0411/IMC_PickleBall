import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectMongodb from "./utils/connection.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoute.js";
import User from "./models/User.js";
import { checkForAuthentication } from "./Middleware/authMiddleware.js";
import jwt from "jsonwebtoken";

const app = express();
const Port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//connection
//connectMongodb("mongodb+srv://darrendsa04:daru%40123@cluster0.r5a2s.mongodb.net/IMC_PickleBall?retryWrites=true&w=majority&appName=Cluster0")
connectMongodb("mongodb://localhost:27017/IMC_PickleBall").then((e) =>
  console.log("mongodb connected:")
);

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", //frontend URL
    credentials: true, // Allows cookies to be sent
  })
);
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/auth", authRoutes);

//fetch user details to frontend
// app.get("/api/auth/me", checkForAuthentication, async (req, res) => {
//   try {
//     const user = req.user;

//     if (!user) {
//       console.warn("No user found in req.user");
//       return res.status(404).json({ success: false, error: "User not found" });
//     }
//     const { password, ...safeUser } = user._doc || user;

//     res.json({ success: true, user: safeUser });
//   } catch (err) {
//     console.error("Error in /api/auth/me:", err);
//     res.status(500).json({ success: false, error: err.message });
//   }
// });


app.listen(Port, () => {
  console.log(`server is running on port ${Port}`);
});
