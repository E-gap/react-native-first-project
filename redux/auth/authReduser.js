import { createSlice } from "@reduxjs/toolkit";
import { register, login, refresh } from "./authOperations";

initialState = {
  userId: null,
  login: null,
  stateChange: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser(state, { payload }) {
      return { ...state, userId: payload.userId, login: payload.login };
    },
    stateChange(state, { payload }) {
      return { ...state, stateChange: payload.stateChange };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.userId = action.payload.uid;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.userId = action.payload.uid;
        state.login = action.payload.displayName;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.userId = action.payload.uid;
        state.login = action.payload.displayName;
        state.stateChange = true;
      }),
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default authSlice.reducer;
export const { updateUser, stateChange } = authSlice.actions;
