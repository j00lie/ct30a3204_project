//Routers for the comment requests, functionality implemented in the controller file

const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");
const passport = require("passport");
require("../middleware/auth"); //Protect comment post, put and delete routes with authentication
const {
  getComments,
  postComment,
} = require("../controllers/commentControllers");

router.get("/:id", getComments);
router.post("/", passport.authenticate("jwt", { session: false }), postComment);

module.exports = router;
