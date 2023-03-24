import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import { useSelector } from "react-redux";
//import { store } from "../redux/store";
import { app } from "../firebase/config";
import { getAuth } from "firebase/auth";
import { refresh } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const auth = getAuth(app);

export default function Main() {
  const dispatch = useDispatch();
  const stateChange = useSelector((state) => state.auth.stateChange);

  useEffect(() => {
    dispatch(refresh());
  }, []);

  const routes = useRoute(stateChange);

  return <NavigationContainer>{routes}</NavigationContainer>;
}
