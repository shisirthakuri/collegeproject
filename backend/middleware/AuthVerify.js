const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.cookies.refreshToken;
console.log(authHeader)
  // Token must be sent as: Authorization: Bearer <token>
  if (!authHeader ) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(authHeader, process.env.REFRESH_KEY);
    console.log(decoded)
    req.user = decoded; // save payload to req for later use
    next(); // continue to the route handler
  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = verifyToken;
