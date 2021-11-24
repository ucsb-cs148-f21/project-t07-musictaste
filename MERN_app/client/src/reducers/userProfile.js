import {
    UPDATEUSER,
    GETUSER,
    LOADUSER,
    ENDLOADUSER
} from "../constants/actionTypes";

export default (users = [], action) => {
    switch (action.type) {
      case GETUSER:
        return { ...users, users: action.payload };
      case UPDATEUSER:
        console.log(users);
        return users.map((user) => (user._id === action.payload._id ? action.payload : user));
      case LOADUSER:
        return { ...users, isLoading: true };
      case ENDLOADUSER:
        return { ...users, isLoading: false };
      default:
        return users;
    }
  };