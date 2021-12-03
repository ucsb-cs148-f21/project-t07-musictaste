import {
  CREATE,
  UPDATEUSER,
  START_LOADING,
  GETUSER,
  END_LOADING,
  LOADUSER,
  ENDLOADUSER,
  GETUSERS,
} from "../constants/actionTypes";
import * as api from "../api";
export const getUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADUSER });
    const { data } = await api.getUser(id);
    console.log(`Get User was called and returned this data${data}`);
    dispatch({ type: GETUSER, payload: data });
    dispatch({ type: ENDLOADUSER });
  } catch (error) {
    console.log(error);
  }
};
export const getUsers = (id) => async (dispatch) => {
  try {
    dispatch({ type: LOADUSER });
    const { data } = await api.getUsers(id);
    console.log(`Get Users was called and returned this data${data}`);
    dispatch({ type: GETUSERS, payload: data });
    dispatch({ type: ENDLOADUSER });
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = (id, user) => async (dispatch) => {
  try {
    dispatch({ type: LOADUSER });
    const { data } = await api.updateUser(id, user);
    console.log(data);
    dispatch({ type: UPDATEUSER, payload: data });
    dispatch({ type: ENDLOADUSER });
  } catch (error) {
    console.log(error);
  }
};
