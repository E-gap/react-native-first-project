import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import { app } from "./firebase/config";
import { getAuth } from "firebase/auth";
import { refresh } from "./redux/auth/authOperations";
import Main from "./components/Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
