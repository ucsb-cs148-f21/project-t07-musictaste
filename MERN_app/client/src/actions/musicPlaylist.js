import {
  ADD_SONG,
  CREATE_PLAYLIST,
  FETCH_ALL_PLAYLISTS,
  GET_SONGS,
} from "../constants/actionTypes";
import * as api from "../api";

export const createPlaylist = (playlist) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.createPlaylist(playlist);
    dispatch({ type: CREATE_PLAYLIST, payload: data });
    // dispatch({ type: END_LOADING });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getPlaylists = () => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.fetchPlaylists();
    dispatch({ type: FETCH_ALL_PLAYLISTS, payload: data });
    // dispatch({ type: END_LOADING });

    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const addSong = (id, songlist) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.addSong(id, songlist);
    dispatch({ type: ADD_SONG, payload: data });
    // dispatch({ type: END_LOADING });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const getSonglists = (id) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.fetchSonglists(id);
    dispatch({ type: GET_SONGS, payload: data });
    // dispatch({ type: END_LOADING });

    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
