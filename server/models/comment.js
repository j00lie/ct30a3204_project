const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let commentSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "UserID",
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,

      ref: "PostID",
    },
    user: { type: String },

    text: { type: String, required: [true, "Comment cannot be empty"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
