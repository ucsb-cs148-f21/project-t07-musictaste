import mongoose from "mongoose";
import express from "express";

import UserProfile from "../models/userProfile.js";
const router = express.Router();

export const getProfile = async (req, res) => {
    try {
        const profile = await UserProfile.find();
        res.status(200).json(profile);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createProfile = async(req, res) => {
    const { id } = req.params;
    const profile = req.body;
    const newProfile = new UserProfile({
        ...profile,
        username: req.username,
    });

    try {
        await newProfile.save();
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }    
};

export const updateProfile = async (req, res) => {
    const { id } = req.params;
    const profile = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No user profile with that id");
    const updatedProfile = await UserProfile.findByIdAndUpdate(id, proifle, {
        new: true,
    });
    res.json(updatedProfile);
};

export default router;