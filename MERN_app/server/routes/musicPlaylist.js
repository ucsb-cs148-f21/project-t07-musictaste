import express from "express";
import auth from "../middleware/auth.js";
import {
  addSong,
  addToGallery,
  createPlaylist,
  getPlaylists,
  getPlaylist,
  getSonglists,
  addContributor,
  deletePlaylist,
  likePlaylist,
  commentPlaylist,
} from "../Controllers/musicPlaylist.js";
import { getUser, getUsers, updateUser } from "../Controllers/user.js";
const router = express.Router();
router.post("/", createPlaylist);
router.post("/:id", addSong);
router.get("/:id", getPlaylists);
router.get("/", getPlaylists);
// router.get("/:id", getPlaylist);
router.get("/:id/songlist", getSonglists);

// Adding to our gallery
router.patch("/:id", addToGallery);
router.post("/:id/Contributor", addContributor);

//interacting with playlist
router.delete("/:id", auth, deletePlaylist);
router.patch("/:id/likePlaylist", auth, likePlaylist);
router.post("/:id/commentPlaylist", auth, commentPlaylist);

router.get("/:id/user", getUser);
router.patch("/:id/update", updateUser);
router.get("/:id/users", getUsers);
export default router;
