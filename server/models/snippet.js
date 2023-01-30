const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Associate the authenticated user with each post
let snippetSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "UserID",
    },
    user: { type: String },
    header: { type: String },
    text: { type: String, required: [true, "Please add a code snippet"] },
    code: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Snippet", snippetSchema);
