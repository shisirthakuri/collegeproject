const jwt = require("jsonwebtoken");

const checkTokenExpiry = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      res.clearCookie("token");
      console.log("Token expired, cookie cleared");
    }
    next(); // Proceed without token
  }
};
