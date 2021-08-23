import { LOGIN, LOGOUT, SIGNUP } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: localStorage.getItem("isSignedIn")
    ? JSON.parse(localStorage.getItem("isSignedIn"))
    : false,
  userToken: localStorage.getItem("userToken")
    ? localStorage.getItem("userToken")
    : null,
};

const reducerAuth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // when login action calls state isSignedIn changes to true
    case LOGIN:
      return { ...state, isSignedIn: true, userToken: action.payload };
    // when logout action calls state isSignedIn changes to false
    case LOGOUT:
      return { ...state, isSignedIn: false, userToken: null };
    case SIGNUP:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default reducerAuth;
