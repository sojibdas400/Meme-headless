import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  imageLink: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

var MemeGallery = mongoose.model("MemeGallery", postSchema);

export default MemeGallery;
