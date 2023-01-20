const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const User = require("../models/user");

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Create user
  const user = await User.create({
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(403).json({ message: "Invalid credentials" });
  } else {
    await user.comparePassword(password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        res.json(generateJWT(user.email));
      } else {
        return res.status(403).json({ message: "Invalid credentials" });
      }
    });
  }
});

//Generate a JWT
const generateJWT = (email) => {
  return jwt.sign({ email }, process.env.SECRET, { expiresIn: "1d" });
};

const getUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
