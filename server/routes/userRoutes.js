const express = require("express");
const User = require("../models/user");
const passport = require("passport");
require("../middleware/auth");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");

//Register user
router.post("/", registerUser);
//Login user
router.post("/login", loginUser);
//Get user data
router.get("/me", passport.authenticate("jwt", { session: false }), getUser);

module.exports = router;
