import _ from "lodash";
import {
  FETCH_USER,
  CREATE_USER,
  EDIT_USER,
  DELETE_USER,
} from "../actions/types";

const reducerUser = (state = {}, action) => {
  switch (action.type) {
    //   case FETCH_USERS :
    //   return {...state, ..._.mapKeys(action.payload, 'id')};
    case FETCH_USER:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_USER:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_USER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_USER:
      //omit n shine state uusgej bga ba action payload deer irsen id tai hereglegch ustah um
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default reducerUser;
