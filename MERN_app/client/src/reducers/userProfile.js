import { FETCH_ALL, CREATE, UPDATE} from "../constants/actionTypes";
export default (profiles = [], action) => {
    switch (action.type) {
        case UPDATE:
            return profiles.map((profile) => 
                profiles._id === action.payload._id ? action.payload : profile
            );
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...profiles, action.payload];
        default:
            return profiles;
    }
}