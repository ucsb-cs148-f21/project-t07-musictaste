import {
  UPDATEUSER,
  GETUSER,
  LOADUSER,
  ENDLOADUSER,
  START_LOADING,
  END_LOADING,
  GETUSERS,
} from "../constants/actionTypes";

export default (state = { isLoadingU: true, users: [] }, action) => {
  switch (action.type) {
    // case START_LOADING:
    //   console.log("The Start loading has been called");
    //   return { ...state, isLoading: true };
    // case END_LOADING:
    //   console.log("The End loading has been called");
    //   return { ...state, isLoading: false };
    case GETUSER:
      // return { ...users, users: action.payload };
      console.log(
        `This is the state in the reducer for GETUSER ${action.payload}`
      );
      return { ...state, users: action.payload };
    case GETUSERS:
      console.log(action.payload);
      // return { ...users, users: action.payload };
      return { ...state, users: action.payload };
    // return action.payload;
    case UPDATEUSER:
      return {
        ...state,
        users:
          state.users._id === action.payload._id ? action.payload : state.users,
      };
    case LOADUSER:
      console.log("The Start loading has been called");
      return { ...state, isLoadingU: true };
    case ENDLOADUSER:
      console.log("The End loading has been called");
      return { ...state, isLoadingU: false };
    default:
      return state;
  }
};
