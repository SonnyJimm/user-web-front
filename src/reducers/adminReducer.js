import _ from "lodash";
import { CREATE_ADMIN, FETCH_ADMIN, DELETE_ADMIN } from "../actions/types";

//CRUD admin
// manages admin list
const reducerAdmin = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ADMIN:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_ADMIN:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ADMIN:
      //omit n shine state uusgej bga ba action payload deer irsen id tai hereglegch ustah um
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default reducerAdmin;
