import express from "express";
import { login,signup, logout,fetchUser} from "../Controllers/authController.js";
import { checkForAuthentication } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", checkForAuthentication,fetchUser);

export default router;
