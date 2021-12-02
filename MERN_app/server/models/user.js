import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contributedPlaylists: {
    type: [String],
    default: [],
  },
  id: { type: String },
  username: { type: String },
  profilePicture: String,
  favoriteSongs: [String],
});

export default mongoose.model("User", userSchema);
