import {
  CREATE,
  UPDATEUSER,
  LOADUSER,
  GETUSER,
  ENDLOADUSER,
} from "../constants/actionTypes";
import * as api from "../api";
export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUser(id);
    dispatch({ type: GETUSER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateUser = (id, user) => async (dispatch) => {
  try {
    const { data } = await api.updateUser(id, user);
    console.log(data);
    dispatch({ type: UPDATEUSER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
