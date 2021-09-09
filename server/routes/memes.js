import express from "express";

import {
  getMemes,
  createMeme,
  deleteMeme,
} from "../controllers/memes.js";

const router = express.Router();

router.get("/", getMemes);
router.post("/", createMeme);
router.delete("/:id", deleteMeme);
export default router;
