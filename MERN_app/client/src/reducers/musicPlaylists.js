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
  ADD_CONTRIBUTOR,
} from "../constants/actionTypes";

export default (state = { isLoading: true, playlists: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    // case CREATE_PLAYLIST:
    //   return { ...state, playlists: [...state.playlists, action.payload] };
    case CREATE_PLAYLIST:
      return { ...state, playlists: [...state.playlists, action.payload] };
    case FETCH_ALL_PLAYLISTS:
      console.log(`action.payload is ${[action.payload]}`);
      return { ...state, playlists: action.payload };

    case FETCH_PLAYLIST:
      console.log("fetching here in fetch_playlist");
      console.log(action.payload);
      return action.payload;
    case ADD_PICTURE:
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id ? action.payload : playlist
        ),
      };
    case UPDATE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id ? action.payload : playlist
        ),
      };
    case DELETE_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.filter(
          (playlist) => playlist._id !== action.payload
        ),
      };
    case COMMENT_PLAYLIST:
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist._id === action.payload) {
            return action.payload;
          }
          return playlist;
        }),
      };
    case ADD_CONTRIBUTOR:
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist._id === action.payload) {
            return action.payload;
          }
          return playlist;
        }),
      };
    default:
      return state;
  }
};
