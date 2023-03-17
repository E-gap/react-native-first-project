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

export default function CommentsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.postImage}
        source={require("../assets/images/userFoto.jpg")}
      />
      <View style={styles.postCommentOdd}>
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../assets/images/Ellipse.png")}
        />
        <View style={styles.commentOdd}>
          <Text style={styles.commentTextOdd}>Text comment</Text>
          <Text style={styles.commentDateOdd}>Comment Date</Text>
        </View>
      </View>
      <View style={styles.postCommentEven}>
        <Image
          style={{ width: 28, height: 28 }}
          source={require("../assets/images/Ellipse.png")}
        />
        <View style={styles.commentEven}>
          <Text style={styles.commentTextEven}>Text comment</Text>
          <Text style={styles.commentDateEven}>Comment Date</Text>
        </View>
      </View>
      <View style={styles.newComment}>
        <TextInput
          style={styles.newCommentText}
          placeholder="Комментировать..."
          placeholderTextColor="#BDBDBD"
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
  },
  postImage: {
    width: "100%",
    height: 240,
    marginBottom: 32,
    borderRadius: 8,
  },
  postCommentOdd: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  commentOdd: {
    width: 299,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    borderTopLeftRadius: 0,
    padding: 16,
  },
  commentTextOdd: {
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "#212121",
    marginBottom: 8,
  },
  commentDateOdd: {
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "#BDBDBD",
    textAlign: "right",
  },
  postCommentEven: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  commentEven: {
    width: 299,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    borderTopRightRadius: 0,
    padding: 16,
  },
  commentTextEven: {
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "#212121",
    marginBottom: 8,
  },
  commentDateEven: {
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "400",
    color: "#BDBDBD",
  },
  newComment: {
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 100,
    padding: 16,
  },
  newCommentText: {
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Roboto",
  },
});
