import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import adminReducer from "./adminReducer";
import bookReducer from "./bookReducer";

//Combines into one store
export default combineReducers({
  auth: authReducer,
  user: userReducer,
  bookes: bookReducer,
  admin: adminReducer,
});
