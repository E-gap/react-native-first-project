import { createSlice } from "@reduxjs/toolkit";
import { register, login, refresh } from "./authOperations";

initialState = {
  userId: null,
  login: null,
  stateChange: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  /*  reducers: {
    updateUser(state, { payload }) {
      return { ...state, userId: payload.userId };
    },
    authStateChange(state, { payload }) {
      return { ...state, stateChange: payload.stateChange };
    },
  }, */
  extraReducers: (builder) =>
    builder
      /*  .addCase(register.pending, (state) => {
        state.isRefreshing = true;
      }) */
      .addCase(register.fulfilled, (state, action) => {
        //console.log(action.payload);
        state.userId = action.payload.uid;
        //state.login = action.payload.displayName;
        /* state.token = action.payload.token;
        state.isLogin = true;
        state.isRefreshing = false; */
      })
      .addCase(login.fulfilled, (state, action) => {
        //console.log(action.payload);
        state.userId = action.payload.uid;
        state.login = action.payload.displayName;
        /* state.token = action.payload.token;
        state.isLogin = true;
        state.isRefreshing = false; */
      })
      .addCase(refresh.fulfilled, (state, action) => {
        //console.log(action.payload);
        state.userId = action.payload.uid;
        state.login = action.payload.displayName;
        /* state.token = action.payload.token;
        state.isLogin = true;
        state.isRefreshing = false; */
      }),
  /* .addCase(register.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(login.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(login.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogin = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogin = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.isRefreshing = false;
      }), */
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default authSlice.reducer;
export const { updateUser } = authSlice.actions;
