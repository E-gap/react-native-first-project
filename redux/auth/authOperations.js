import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/config";

import { updateUser } from "./authReduser";

const auth = getAuth(app);

export const register = createAsyncThunk(
  "auth/register",
  async ({ login, email, password }, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(auth.currentUser, {
        displayName: login,
      });

      const currentUser = auth.currentUser;
      console.log(currentUser);

      return currentUser;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const currentUser = auth.currentUser;
      console.log(currentUser);

      return currentUser;

      /* const user = userCredential.user;
      thunkAPI.dispatch(updateUser({ userId: user.uid })); */
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }
);

/* export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      Notiflix.Notify.success("You have successfully login", {
        width: "500px",
        position: "center-center",
        fontSize: "25px",
        timeout: "1500",
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
); */

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await axios.post("/users/logout");
    axios.defaults.headers.common.Authorization = ``;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk("auth/current", async (_, thunkApi) => {
  const { token } = thunkApi.getState().auth;
  if (!token) return thunkApi.rejectWithValue("No valid token");
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  try {
    const { data } = await axios.get("/users/current");

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
