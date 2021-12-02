import { ADD_SONG, GET_SONGS } from "../constants/actionTypes";

export default (songlist = [], action) => {
  switch (action.type) {
    case ADD_SONG:
      return [...songlist, action.payload];
    case GET_SONGS:
      return action.payload;
    default:
      return songlist;
  }
};
