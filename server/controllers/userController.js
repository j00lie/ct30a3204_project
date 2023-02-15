const jwt = require("jsonwebtoken");

const asyncHandler = require("express-async-handler");
const User = require("../models/user");

//Register user
const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Check that both fields are filled
  if (!(email && password)) {
    res.status(400);
    throw new Error("Fill both fields");
  }

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
      token: generateJWT(user.email),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//User Login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Check that both fields are filled
  if (!(email && password)) {
    res.status(400);
    throw new Error("Fill both fields");
  }
  //Check user exists
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Invalid credentials");
  } else {
    await user.comparePassword(password, (err, isMatch) => {
      if (isMatch) {
        // If password matches return jwt
        res.json(generateJWT(user.email));
      } else {
        res.status(400).json({ message: err });
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
