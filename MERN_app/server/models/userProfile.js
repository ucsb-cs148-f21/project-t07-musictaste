import mongoose from "mongoose";

const profileSchema = mongoose.Schema({
    username: String,
    profilePic: String,
    groups: String,
    playlists: {
        type: [String],
        default: [],
    },
});

export default mongoose.model("UserProfile", profileSchema);