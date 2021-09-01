import express from "express";
import { getMeme, createMeme } from "../controllers/memeController.js";

const router = express();

router.get("/", getMeme);
router.get("/", createMeme);
export default router;
