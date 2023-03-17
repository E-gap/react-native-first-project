import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator();

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";
import MapScreen from "./screens/MapScreen";
import CommentsScreen from "./screens/CommentsScreen";

export const useRoute = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false }}
        name="RegistrationScreen"
        component={RegistrationScreen}
      />
      <MainStack.Screen
        options={{ headerShown: false, headerTitleAlign: "center" }}
        name="Home"
        component={Home}
      />
      <MainStack.Screen
        options={{ headerTitleAlign: "center" }}
        name="MapScreen"
        component={MapScreen}
      />
      <MainStack.Screen
        options={{ headerTitleAlign: "center" }}
        name="CommentsScreen"
        component={CommentsScreen}
      />
    </MainStack.Navigator>
  );
};

const styles = StyleSheet.create({
  logOut: {
    borderColor: "red",
    marginRight: 20,
  },
});
