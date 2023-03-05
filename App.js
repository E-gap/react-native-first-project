import {
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return <RegistrationScreen />;
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
}); */
