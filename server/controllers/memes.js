import express from "express";
import mongoose from "mongoose";

import MemeGallery from "../models/memeGallery.js";

const router = express.Router();

export const getMemes = async (req, res) => {
  try {
    const memes = await MemeGallery.find();

    res.status(200).json(memes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMeme = async (req, res) => {
  const { imageLink, selectedFile } = req.body;

  const newMeme = new MemeGallery({
    imageLink,
    selectedFile,
  });

  try {
    await newMeme.save();

    res.status(201).json(newMeme);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteMeme = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No meme with id: ${id}`);

  await MemeGallery.findByIdAndRemove(id);

  res.json({ message: "Meme deleted successfully." });
};

export default router;
