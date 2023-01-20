//Routers for the code snippet requests, functionality implemented in the controller file

const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");
require("../middleware/auth"); //Protect snippet post, put and delete routes with authentication
const {
  getSnippets,
  postSnippets,
  editSnippets,
  deleteSnippets,
} = require("../controllers/snippetControllers");

router.get("/", getSnippets);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postSnippets
);
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  editSnippets
);
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteSnippets
);

module.exports = router;
