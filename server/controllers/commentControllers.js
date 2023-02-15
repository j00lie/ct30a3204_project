//Functionality of the code snippet routes implemented here

const asyncHandler = require("express-async-handler"); // Handle exceptions inside asynchronous routes
const comment = require("../models/comment");

// Get all code snippets
const getComments = asyncHandler(async (req, res) => {
  const comments = await comment.find({ postId: req.params.id });
  res.status(200).json(comments);
});

//Post a new code snippet
const postComment = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text");
  }
  //console.log(req.body);
  const newComment = await comment.create({
    userId: req.user.id,
    postId: req.body.postId,
    user: req.user.email,
    text: req.body.text,
  });
  res.status(200).json(newComment);
});

module.exports = {
  getComments,
  postComment,
};
