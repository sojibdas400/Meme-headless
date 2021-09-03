import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const getAllMemes = await PostMessage.find();
    res.status(200).json(getAllMemes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createPost = async (req, res) => {
  const body = req.body;

  const newMeme = new PostMessage(body);
  try {
    await newMeme.save();
    res.status(201).json(newMeme);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
