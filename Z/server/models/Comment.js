const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  // Additional fields like timestamp, likes, etc.
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
