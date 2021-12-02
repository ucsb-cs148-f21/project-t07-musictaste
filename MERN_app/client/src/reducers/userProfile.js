import {
  UPDATEUSER,
  GETUSER,
  LOADUSER,
  ENDLOADUSER,
} from "../constants/actionTypes";

export default (users = [], action) => {
  switch (action.type) {
    case GETUSER:
      // return { ...users, users: action.payload };
      return action.payload;
    case UPDATEUSER:
      return users._id === action.payload._id ? action.payload : users;
    case LOADUSER:
      return { ...users, isLoading: true };
    case ENDLOADUSER:
      return { ...users, isLoading: false };
    default:
      return users;
  }
};
