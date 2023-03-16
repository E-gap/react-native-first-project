import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import RegistrationScreen from "./screens/RegistrationScreen";
import Test1 from "./screens/Test1";
import Test2 from "./screens/Test2";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import CreatePostsScreen from "./screens/CreatePostsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import Home from "./screens/Home";
import MapScreen from "./screens/MapScreen";
import CommentsScreen from "./screens/CommentsScreen";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
  /* if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{ headerShown: false }}
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  } */
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
