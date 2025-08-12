const issueJwtCookie = (res, payload) => {
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "12h" });
  
    res.cookie("token", token, {
      httpOnly: true,      
      secure: process.env.NODE_ENV === "production", 
      sameSite: "lax",      
      maxAge: 12 * 60 * 60 * 1000 
    });
  
    return token;
  };