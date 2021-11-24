import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";
import users from "./userProfile";
export default combineReducers({
  posts,
  auth,
  users,
});
