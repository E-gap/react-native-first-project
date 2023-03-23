import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  const routes = useRoute(true);
  return (
    <Provider store={store}>
      <NavigationContainer>{routes}</NavigationContainer>
    </Provider>
  );
}
