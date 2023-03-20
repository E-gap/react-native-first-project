import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { useState } from "react";

import { AntDesign } from "@expo/vector-icons";

export default function CommentsScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [textNewComment, setTextNewComment] = useState("");

  const clickOnBackground = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={clickOnBackground}>
      <View style={styles.container}>
        <Image
          style={styles.postImage}
          source={require("../../assets/images/userFoto.jpg")}
        />
        <View
          style={{
            ...styles.allComments,
            display: isShowKeyboard ? "none" : "flex",
          }}
        >
          <View style={styles.postCommentOdd}>
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../assets/images/Ellipse.png")}
            />
            <View style={styles.commentOdd}>
              <Text style={styles.commentTextOdd}>Text comment</Text>
              <Text style={styles.commentDateOdd}>Comment Date</Text>
            </View>
          </View>
          <View style={styles.postCommentEven}>
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../assets/images/Ellipse.png")}
            />
            <View style={styles.commentEven}>
              <Text style={styles.commentTextEven}>Text comment</Text>
              <Text style={styles.commentDateEven}>Comment Date</Text>
            </View>
          </View>
        </View>
        <View style={styles.newComment}>
          <TextInput
            style={styles.newCommentText}
            placeholder="Комментировать..."
            placeholderTextColor="#BDBDBD"
            value={textNewComment}
            onChangeText={(value) => setTextNewComment(value)}
            onFocus={() => {
              setIsShowKeyboard(true);
              console.log("клавиатура");
            }}
            onBlur={() => {
              setIsShowKeyboard(false);
            }}
          />
          <TouchableOpacity
            style={styles.btnAddComment}
            onPress={() => {
              setIsShowKeyboard(false);
              setTextNewComment("");
              Keyboard.dismiss();
            }}
          >
            <AntDesign name="arrowup" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
  screen: {
    marginBottom: 1000,
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
    position: "absolute",
    bottom: 10,
    transform: [{ translateX: 16 }],
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  newCommentText: {
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  btnAddComment: {
    backgroundColor: "orange",
    width: 34,
    height: 34,
    borderRadius: 50,
    padding: 5,
  },
});
