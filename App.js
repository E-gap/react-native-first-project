/* import { StatusBar } from "expo-status-bar"; */
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";
/* import { TextInput } from "react-native-web"; */
import RegistrationScreen from "./screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require("./assets/images/PhotoBG.jpg")}
      >
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 500,
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});
