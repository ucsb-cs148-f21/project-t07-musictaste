import express from "express";

import { updateUser, getUser } from "../Controllers/user.js";
const router = express.Router();

router.get("/:id", getUser);
router.patch("/:id", updateUser);

export default router;