import mongoose from "mongoose";

const memeSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const postMeme = mongoose.model("postMeme", memeSchema);
export default postMeme;
