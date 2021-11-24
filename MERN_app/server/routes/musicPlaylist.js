import express from "express";
import auth from "../middleware/auth.js";
import {
  addSong,
  createPlaylist,
  getPlaylists,
  getSonglists,
} from "../Controllers/musicPlaylist.js";
const router = express.Router();
router.post("/", createPlaylist);
router.post("/:id", addSong);
router.get("/", getPlaylists);
router.get("/:id", getSonglists);
export default router;
