import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authReduser";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
