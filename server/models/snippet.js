const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Associate the authenticated user with each post
let snippetSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: { type: String, required: [true, "Please add a code snippet"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Snippet", snippetSchema);
