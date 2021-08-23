import { LOGIN, LOGOUT, EDIT_USER, SIGNUP } from "./types";
import user from "../apis/user";
import { toast } from "react-toastify";

//to check if this user exists or not if yes then check authentications
export const loginUser = (formValues) => async (dispatch) => {
  const temp = { ...formValues };
  delete formValues.remember;
  console.log("temp", temp);
  const response = await user.post("/auth/login", formValues);
  console.log("[login response]", response);
  if (response.status === 200 && response.data.body !== null) {
    localStorage.setItem("token", response.data.body.token);
    localStorage.setItem("tokenRefresh", response.data.body.refresh);
    localStorage.setItem("isSignedIn", true);
    if (temp.remember === true) {
      console.log("i have rememberes");
    } else {
      console.log("i have rememberes");
    }
    dispatch({ type: LOGIN, payload: response.data.body });
  } else if (
    response.status === 200 &&
    response.data.body === null &&
    response.data.status_code === 400
  ) {
    toast.error(response.data.error_msg);
  }
};
//to check if this user exists or not if yes then check authentications
export const signupUser = (formValues) => async (dispatch) => {
  const temp = { ...formValues };
  console.log("signup form values sending", temp);
  const response = await user.post("/user", formValues);
  console.log("[sign up  response]", response);
  if (response.status === 200 && response.data.body !== null) {
    localStorage.setItem("token", response.data.body.token);
    localStorage.setItem("tokenRefresh", response.data.body.refresh);
    localStorage.setItem("isSignedIn", true);
    if (temp.remember === true) {
      console.log("i have rememberes");
    } else {
      console.log("i have rememberes");
    }
    dispatch({ type: SIGNUP, payload: response.data.body });
  } else if (
    response.status === 200 &&
    response.data.body === null &&
    response.data.status_code === 400
  ) {
    toast.error(response.data.error_msg);
  }
};
//to check if this user exists or not if yes then check authentications
export const logoutUser = () => async (dispatch) => {
  localStorage.setItem("userId", null);
  localStorage.setItem("isSignedIn", false);
  dispatch({ type: LOGOUT, payload: null });
};

// to edit user parameters
export const editUser = (id, formValues) => async (dispatch) => {
  const response = await user.put(`/super_admin/${id}`, formValues);
  dispatch({ type: EDIT_USER, payload: response.data });
};

//CREATE ACTIONS

//FETCH

//DELETE
