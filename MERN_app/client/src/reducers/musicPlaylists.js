import {
  START_LOADING,
  END_LOADING,
  CREATE_PLAYLIST,
  FETCH_ALL_PLAYLISTS,
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

    default:
      return playlists;
  }
};
