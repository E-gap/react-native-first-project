import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RegistrationScreen from "./screens/RegistrationScreen";
import Test1 from "./screens/Test1";
import Test2 from "./screens/Test2";
import LoginScreen from "./screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

  /*  return <Test1 />; */
}

{
  /* <Stack.Screen
          options={{ headerShown: false }}
          name="Test1"
          component={Test1}
        />
        <Stack.Screen name="Test2" component={Test2} />
 */
}
