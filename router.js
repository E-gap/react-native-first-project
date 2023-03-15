import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import RegistrationScreen from "./screens/RegistrationScreen";
import Test1 from "./screens/Test1";
import Test2 from "./screens/Test2";
import LoginScreen from "./screens/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import CreatePostsScreen from "./screens/CreatePostsScreen";
import ProfileScreen from "./screens/ProfileScreen";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
  if (!isAuth) {
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
  }
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: true }}>
      <Tab.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <Feather name="grid" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <AntDesign name="plus" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <Feather name="user" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};