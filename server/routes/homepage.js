import express from "express";
import { postMeme } from "../controllers/memeController.js";

const router = express();

router.get("/", postMeme);
export default router;
