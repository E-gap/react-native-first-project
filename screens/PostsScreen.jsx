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

export default function PostsScreen({ navigation, route }) {
  const { userName = "брать с бекенда", userEmail } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          style={styles.userFoto}
          source={require("../assets/images/userFoto.jpg")}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    paddingTop: 32,
    paddingLeft: 16,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  userEmail: { fontSize: 11, fontFamily: "Roboto", fontWeight: "400" },
  userInfo: { marginLeft: 8 },
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
