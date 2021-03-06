import express from "express";
import auth from "../middleware/auth.js";
import {
  getPostsBySearch,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
  commentPost,
} from "../Controllers/posts.js";
const router = express.Router();

router.get("/search", getPostsBySearch);
router.get("/", getPosts); // these need to change or else our app won't work
router.get("/:id", getPost);

router.post("/", auth, createPost); // these need to change or else our app won't work <= wait actually let me just check this
router.patch("/:id", auth, updatePost); // updating existing documents
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);
export default router;
