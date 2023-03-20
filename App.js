import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "./router";

export default function App() {
  const routes = useRoute(true);
  return <NavigationContainer>{routes}</NavigationContainer>;
}
