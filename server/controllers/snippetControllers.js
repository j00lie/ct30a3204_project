//Functionality of the code snippet routes implemented here

const asyncHandler = require("express-async-handler"); // Handle exceptions inside asynchronous routes
const codeSnippet = require("../models/snippet");

// Get all code snippets
const getSnippets = asyncHandler(async (req, res) => {
  const snippets = await codeSnippet.find();
  res.status(200).json(snippets);
});

//Post a new code snippet
const postSnippets = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a code snippet");
  }
  const snippet = await codeSnippet.create({
    userId: req.user.id,
    user: req.user.email,
    header: req.body.heading,
    text: req.body.text,
    code: req.body.code,
  });
  res.status(200).json(snippet);
});

// Edit existing post
const editSnippets = asyncHandler(async (req, res) => {
  const snippet = await codeSnippet.findById(req.params.id);

  if (!snippet) {
    res.status(400);
    throw new Error("Code snippet not found");
  }

  // Check that only the authenticated user can modify their post, snippets associated to users with their ids
  if (snippet.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const editedSnippet = await codeSnippet.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(editedSnippet);
});

//Delete post
const deleteSnippets = asyncHandler(async (req, res) => {
  const snippet = await codeSnippet.findById(req.params.id);

  if (!snippet) {
    res.status(400);
    throw new Error("Code snippet not found");
  }
  // Check that only the authenticated user can delete their post
  if (snippet.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await snippet.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getSnippets,
  postSnippets,
  editSnippets,
  deleteSnippets,
};
