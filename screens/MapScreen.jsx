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
} from "react-native";

import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function MapScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.title}>MapScreen</Text>
      </View>
      <TouchableOpacity style={styles.line}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  },
  login: {
    paddingLeft: 80,
    paddingRight: 80,
    textAlign: "center",
  },
  title: {
    marginBottom: 33,
    fontSize: 30,
    paddingTop: 32,
    textAlign: "center",
  },

  line: {
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    position: "absolute",
    bottom: 8,
    left: "50%",
    transform: [{ translateX: -67 }],
    borderRadius: 100,
  },
});
