import User from "../models/User.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, mobile, password } = req.body;

    if (!name || !mobile || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res.status(400).json({ message: "Mobile number already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, mobile, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "Signup successful. Please log in." });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { mobile, password } = req.body;

    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id,name:user.name, mobile: user.mobile },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
      message: "Login successful",
      user: { name: user.name, mobile: user.mobile }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//fetch user details
export const fetchUser = (req,res)=>{
  try {
    const user = req.user;

    if (!user) {
      console.warn("No user found in req.user");
      return res.status(404).json({ success: false, error: "User not found" });
    }
    const { password, ...safeUser } = user._doc || user;

    res.json({ success: true, user: safeUser });
  } catch (err) {
    console.error("Error in /api/auth/me:", err);
    res.status(500).json({ success: false, error: err.message });
  }
}

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
