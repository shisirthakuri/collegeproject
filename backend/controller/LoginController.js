const Admin = require("../model/AdminModel");
const bcrypt = require("bcryptjs");
const refreshToken = require("../token/refreshToken");
const generateToken = require("../token/AccessToken");
const jwt = require("jsonwebtoken");

// LOGIN CONTROLLER
const login = async (req, res) => {
  const { formData } = req.body;
  console.log(formData);
  if (!formData.username || !formData.password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const { username, password } = formData;
  const user = await Admin.findOne({ username });
  if (!user) {
    return res.status(404).json({ message: "Username not found!" });
  }

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Password is incorrect!" });
  }

  const accessToken = await generateToken(user._id);
  const refresh = await refreshToken(user._id);

   res.cookie("refreshToken",refresh,{
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({
    message: "Login successful!",
    user: {
      username: user.username,
      accessToken,
    },
  });
};

// REFRESH TOKEN CONTROLLER
const refreshAccessToken = (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: "Refresh token missing" });

  const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET || "yourrefreshtokensecret";

  jwt.verify(token, REFRESH_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid refresh token" });

    const newAccessToken = generateAccessToken(user.id);
    res.json({ accessToken: newAccessToken });
  });
};

// LOGOUT CONTROLLER
const logout = (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) {
    return res.status(404).json({ message: "Refresh token not found" });
  }

  res.clearCookie("refreshToken", {
    httpOnly: true,
    sameSite: "Strict",
    secure: false,
  });

  res.status(200).json({message:"logout successfullY!"});
};

// SIGNUP CONTROLLER
const signup = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(404).json({ message: "All fields are required!" });
  }

  await Admin.create({
    username,
    password: bcrypt.hashSync(password, 13),
  });

  res.status(200).json({ message: "Signup successfully!" });
};

module.exports = {
  login,
  refreshAccessToken,
  logout,
  signup,
};
