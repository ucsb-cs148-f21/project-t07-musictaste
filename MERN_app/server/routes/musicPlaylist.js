import express from "express";
import auth from "../middleware/auth.js";
import {
  addSong,
  addToGallery,
  createPlaylist,
  getPlaylists,
  getPlaylist,
  getSonglists,
  deletePlaylist,
  likePlaylist,
  commentPlaylist,
} from "../Controllers/musicPlaylist.js";
const router = express.Router();
router.post("/", createPlaylist);
router.post("/:id", addSong);
router.get("/", getPlaylists);
router.get("/:id/gallery", getPlaylist);
router.get("/:id", getSonglists);

// Adding to our gallery
router.patch("/:id", addToGallery);

//interacting with playlist
router.delete("/:id", auth, deletePlaylist);
router.patch("/:id/likePlaylist", auth, likePlaylist);
router.post("/:id/commentPlaylist", auth, commentPlaylist);
export default router;
