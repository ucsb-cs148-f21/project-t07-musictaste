import express from "express";
import auth from "../middleware/auth.js";
import {
    getProfile,
    createProfile,
    updateProfile,
} from "../Controllers/userProfile.js";
const router = express.Router();

router.get("/", getProfile);
router.post("/", auth);

export default router;