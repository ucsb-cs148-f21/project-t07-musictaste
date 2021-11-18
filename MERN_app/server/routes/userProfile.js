import express from "express";
import auth from "../middleware/auth.js";
import {
    getProfile,
    createProfile,
    updateUsername,
} from "../Controllers/userProfile.js";
const router = express.Router();

router.get("/", getProfile);
router.post("/", auth, createProfile);
router.patch("/username/:username", auth, updateUsername);

export default router;