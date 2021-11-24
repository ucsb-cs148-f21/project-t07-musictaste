import mongoose from "mongoose";

const songListSchema = mongoose.Schema({
  artist: String,
  title: String,
  genre: String,
  duration: String,
  contributor: String,
  associatedPlaylist: String,
  likes: {
    type: [String],
    default: [],
  },
  addedAt: {
    type: Date,
    default: new Date(),
  },
});

const songPlaylist = mongoose.model("songPlaylist", songListSchema);

export default songPlaylist;
