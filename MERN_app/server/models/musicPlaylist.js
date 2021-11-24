import mongoose from "mongoose";

const playListSchema = mongoose.Schema({
  title: String,
  message: String,
  name: String,
  creator: String,
  contributor: {
    type: [String],
    default: [],
  },
  selectedMainFile: String,
  selectedFiles: {
    type: [String],
    default: [],
  },
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  addedAt: {
    type: Date,
    default: new Date(),
  },
});

const musicPlaylist = mongoose.model("musicPlaylist", playListSchema);

export default musicPlaylist;
