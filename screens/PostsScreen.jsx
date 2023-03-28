import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultPostsScreen from "../screens/nestedScreens/DefaultPostsScreen";
import CommentsScreen from "../screens/nestedScreens/CommentsScreen";
import MapScreen from "../screens/nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

export default function PostsScreen() {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultPostsScreen"
        component={DefaultPostsScreen}
        options={{ headerShown: false }}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
}
