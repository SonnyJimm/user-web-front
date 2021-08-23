import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookReducer from "./bookReducer";

//Combines into one store
export default combineReducers({
  auth: authReducer,
  bookes: bookReducer,
});
