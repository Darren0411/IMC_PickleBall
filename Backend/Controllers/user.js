export const logoutController = (req, res) => {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production"
    });
    res.json({ success: true, message: "Logged out" });
  };
  