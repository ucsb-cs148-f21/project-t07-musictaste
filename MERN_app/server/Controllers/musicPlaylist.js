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
export const getPlaylist = async (req, res) => {
  const { id } = req.params;
  const { page } = req.query;
  try {
    const playlist = await musicPlaylist.findById(id);
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

export const addToGallery = async (req, res) => {
  const { id } = req.params;
  const picture = req.body;
  const updatedPlaylist = await musicPlaylist.findByIdAndUpdate(id, picture, {
    new: true,
  });
  res.status(200).json(updatedPlaylist);
};

// Need to implement this next

export const likePlaylist = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  const playlist = await musicPlaylist.findById(id);

  const index = playlist.likes.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    playlist.likes.push(req.userId);
  } else {
    playlist.likes = playlist.likes.filter((id) => id !== String(req.userId));
  }
  const updatedPlaylist = await musicPlaylist.findByIdAndUpdate(id, playlist, {
    new: true,
  });

  res.status(200).json(updatedPlaylist);
};

export const deletePlaylist = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  await musicPlaylist.findByIdAndRemove(id);

  res.json({ message: "Playlist Delted Successfully" });
};

export const commentPlaylist = async (req, res) => {
  const { id } = req.params;
  const { value } = req.body;

  const playlist = await musicPlaylist.findById(id);
  playlist.comments.push(value);

  const updatedPlaylist = await musicPlaylist.findByIdAndUpdate(id, playlist, {
    new: true,
  });

  res.status(200).json(updatedPlaylist);
};
