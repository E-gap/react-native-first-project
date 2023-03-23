import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  login: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUser(state, action) {
      return { ...state, userId: action.payload.userId };
    },
  },
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default authSlice.reducer;
export const { updateUser } = authSlice.actions;
