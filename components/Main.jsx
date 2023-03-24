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
  //const [userId, setUserId] = useState(false);
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    dispatch(refresh());
  }, []);

  /* onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      //console.log(uid);
      setUserId(uid);
    } else {
      console.log("нету пользователя");
    }
  }); */
  const routes = useRoute(userId);

  return <NavigationContainer>{routes}</NavigationContainer>;
}
