import mongoose from "mongoose";
import express from "express";

// const { mongoose } = pkg;
const router = express.Router();
import songPlaylist from "../models/songPlaylist.js";
import musicPlaylist from "../models/musicPlaylist.js";

export const createPlaylist = async (req, res) => {
  const { id } = req.params;
  const playlist = req.body;
  const newPlaylist = new musicPlaylist({
    ...playlist,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPlaylist.save();

    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPlaylists = async (req, res) => {
  const { page } = req.query;
  try {
    const playlist = await musicPlaylist.find();
    res.status(200).json(playlist);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSonglists = async (req, res) => {
  try {
    const songlist = await songPlaylist.find({
      associatedPlaylist: req.params.id,
    });
    res.status(200).json(songlist);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const addSong = async (req, res) => {
  const { id } = req.params;
  const songlist = req.body;
  const newSonglist = new songPlaylist({
    ...songlist,
    addedAt: new Date().toISOString(),
  });
  try {
    await newSonglist.save();

    res.status(201).json(newSonglist);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
