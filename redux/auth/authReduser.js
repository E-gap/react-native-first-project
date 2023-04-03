import { createSlice } from "@reduxjs/toolkit";
import { register, login, refresh } from "./authOperations";

initialState = {
  userId: null,
  login: null,
  userEmail: null,
  stateChange: false,
  userOnProfile: false,
  isVisibleDisplayTabBar: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser(state, { payload }) {
      return {
        ...state,
        userId: payload.userId,
        login: payload.login,
        userEmail: payload.email,
      };
    },
    stateChangeUser(state, { payload }) {
      return { ...state, stateChange: payload.stateChange };
    },
    logoutUser() {
      return initialState;
    },
    userOnProfileScreen(state) {
      return { ...state, userOnProfile: true };
    },
    userOffProfileScreen(state) {
      return { ...state, userOnProfile: false };
    },
    onDisplayTabBar(state) {
      return { ...state, isVisibleDisplayTabBar: true };
    },
    offDisplayTabBar(state) {
      return { ...state, isVisibleDisplayTabBar: false };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.userId = action.payload.uid;
      })
      .addCase(register.rejected, (state, action) => {
        state.userId = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userId = action.payload.uid;
        state.login = action.payload.displayName;
        state.stateChange = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.userId = action.payload.uid;
        state.login = action.payload.displayName;
        state.stateChange = true;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.userId = null;
        state.login = null;
        state.stateChange = false;
      }),
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default authSlice.reducer;
export const {
  updateUser,
  stateChangeUser,
  logoutUser,
  userOnProfileScreen,
  userOffProfileScreen,
  onDisplayTabBar,
  offDisplayTabBar,
} = authSlice.actions;
