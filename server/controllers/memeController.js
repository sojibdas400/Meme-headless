import postMeme from "../models/postMeme.js";

export const getMeme = async (req, res) => {
  try {
    const getAllMemes = await postMeme.find();
    res.status(200).json(getAllMemes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createMeme = async (req, res) => {
  const body = req.body;

  const newMeme = new postMeme(body);
  try {
    await newMeme.save();
    res.status(201).json(newMeme);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
