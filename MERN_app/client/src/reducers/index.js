import { combineReducers } from "redux";
import songlist from "./songlist";
import posts from "./posts";
import auth from "./auth";
import musicPlaylists from "./musicPlaylists";
import users from "./userProfile";
export default combineReducers({
  posts,
  auth,
  musicPlaylists,
  songlist,
  users,
});
