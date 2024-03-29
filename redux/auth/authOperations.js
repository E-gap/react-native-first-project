import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/config";

import { updateUser, logoutUser, stateChangeUser } from "./authReduser";

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
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, { dispatch }) => {
    try {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          const data = {
            userId: user.uid,
            login: user.displayName,
            email: user.email,
          };
          dispatch(updateUser(data));
          dispatch(stateChangeUser({ stateChange: true }));
        } else {
          console.log("Пользователь не зарегистрирован");
        }
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch }) => {
    try {
      await signOut(auth);
      dispatch(logoutUser());
    } catch (error) {
      console.log("Разлогинивание не возможно");
    }
  }
);
