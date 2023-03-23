import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { app } from "./firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(app);

export default function App() {
  const [userId, setUserId] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      //console.log(uid);
      setUserId(uid);
    } else {
      console.log("нету пользователя");
    }
  });
  const routes = useRoute(userId);

  return (
    <Provider store={store}>
      <NavigationContainer>{routes}</NavigationContainer>
    </Provider>
  );
}
