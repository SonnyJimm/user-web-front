import {
  LOGIN,
  LOGOUT,
  EDIT_USER,
  FETCH_USER,
  FETCH_ADMIN,
  FETCH_BOOKES,
  CREATE_USER,
  CREATE_ADMIN,
  DELETE_USER,
  DELETE_ADMIN,
} from "./types";
import super_admin from "../apis/user";
import { toast } from "react-toastify";

//to check if this user exists or not if yes then check authentications
export const loginUser = (formValues) => async (dispatch) => {
  const temp = { ...formValues };
  delete formValues.remember;
  console.log("temp", temp);
  const response = await super_admin.post("/auth/login", formValues);
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
  console.log("temp", temp);
  const response = await super_admin.post("/user", formValues);
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
export const logoutUser = () => async (dispatch) => {
  localStorage.setItem("userId", null);
  localStorage.setItem("isSignedIn", false);
  dispatch({ type: LOGOUT, payload: null });
};

// to edit user parameters
export const editUser = (id, formValues) => async (dispatch) => {
  const response = await super_admin.put(`/super_admin/${id}`, formValues);
  dispatch({ type: EDIT_USER, payload: response.data });
};

//CREATE ACTIONS
//to create admin
export const createAdmin = (formValues) => async (dispatch) => {
  let user_id = localStorage.getItem("userId");
  const response = await super_admin.post(`/time/${user_id}`, formValues);
  dispatch({
    type: CREATE_ADMIN,
    payload: response.data,
  });
};

//to create new user
export const createUser = (formValues) => async (dispatch) => {
  const response = await super_admin.post("/super_admin", formValues);
  dispatch({
    type: CREATE_USER,
    payload: response.data,
  });
};

//FETCH

//to get admin
export const fetchAdmin = () => async (dispatch) => {
  let user_id = localStorage.getItem("userId");
  const response = await super_admin.get(`/time/${user_id}`);
  dispatch({ type: FETCH_ADMIN, payload: response.data });
};

//to get bookes list
export const fetchBook = () => async (dispatch) => {
  let user_id = localStorage.getItem("userId");
  const response = await super_admin.get(`/teachers/${user_id}`);
  dispatch({ type: FETCH_BOOKES, payload: response.data });
};

//to get user info using user id
export const fetchUser = (id) => async (dispatch) => {
  const response = await super_admin.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};

//DELETE

//to delete user using user id
export const deleteUser = (id) => async (dispatch) => {
  await super_admin.delete(`/users/${id}`);
  dispatch({ type: DELETE_USER, payload: id });
};

//to delete admin
export const deleteAdmin = (id) => async (dispatch) => {
  await super_admin.delete(`/time/${id}`);
  dispatch({ type: DELETE_ADMIN, payload: id });
};
