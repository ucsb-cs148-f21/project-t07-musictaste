import {
  START_LOADING,
  END_LOADING,
  CREATE_PLAYLIST,
  FETCH_ALL_PLAYLISTS,
  FETCH_PLAYLIST,
  ADD_PICTURE,
  DELETE_PLAYLIST,
  UPDATE_PLAYLIST,
  COMMENT_PLAYLIST,
} from "../constants/actionTypes";

export default (playlists = [], action) => {
  switch (action.type) {
    // case START_LOADING:
    //   return { ...state, isLoading: true };
    // case END_LOADING:
    //   return { ...state, isLoading: false };
    // case CREATE_PLAYLIST:
    //   return { ...state, playlists: [...state.playlists, action.payload] };
    case CREATE_PLAYLIST:
      return [...playlists, action.payload];
    case FETCH_ALL_PLAYLISTS:
      return action.payload;
    case FETCH_PLAYLIST:
      return action.payload;
    case ADD_PICTURE:
      return playlists.map((playlist) =>
        playlist._id === action.payload._id ? action.payload : playlist
      );
    case UPDATE_PLAYLIST:
      return playlists.map((playlist) =>
        playlist._id === action.payload._id ? action.payload : playlist
      );
    case DELETE_PLAYLIST:
      return playlists.filter((playlist) => playlist._id !== action.payload);
    default:
      return playlists;
    case COMMENT_PLAYLIST:
      return playlists.map((playlist) => {
        if (playlist._id === action.payload) {
          return action.payload;
        }
        return playlist;
      });
  }
};

// return users.map((user) => (user._id === action.payload._id ? action.payload : user));
