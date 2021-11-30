import {
  ADD_PICTURE,
  ADD_SONG,
  CREATE_PLAYLIST,
  FETCH_ALL_PLAYLISTS,
  FETCH_PLAYLIST,
  GET_SONGS,
  DELETE_PLAYLIST,
  UPDATE_PLAYLIST,
  COMMENT_PLAYLIST,
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
export const getPlaylist = (id) => async (dispatch) => {
  try {
    // dispatch({ type: START_LOADING });
    const { data } = await api.fetchPlaylist(id);
    dispatch({ type: FETCH_PLAYLIST, payload: data });
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

export const addToGallery = (id, picture) => async (dispatch) => {
  try {
    const { data } = await api.addToGallery(id, picture);
    dispatch({ type: ADD_PICTURE, payload: data });
  } catch (error) {
    console.log("Error is Here in the MusicPlaylist Actions");
    console.log(error);
  }
};

export const deletePlaylist = (id) => async (dispatch) => {
  try {
    await api.deletePlaylist(id);
    dispatch({ type: DELETE_PLAYLIST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePlaylist = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePlaylist(id);
    console.log(`This is in the front end actions. ${data}`);
    dispatch({ type: UPDATE_PLAYLIST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentPlaylist = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.commentPlaylist(value, id);
    console.log(data);
    dispatch({ type: COMMENT_PLAYLIST, payload: data });
    return data.comments;
  } catch (error) {
    console.log(error);
  }
};
