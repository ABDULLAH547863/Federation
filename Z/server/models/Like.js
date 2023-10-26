const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  // You can include fields to track the type of like (e.g., post like or comment like).
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
