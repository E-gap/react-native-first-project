import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  FlatList,
} from "react-native";
import { getDatabase, ref, set, onValue } from "firebase/database";
import date from "date-and-time";

import { useState, useEffect } from "react";

import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function CommentsScreen({ route }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [textNewComment, setTextNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const { login } = useSelector((state) => state.auth);

  const { postId, fotoUri } = route.params;

  const getAllComments = async () => {
    const db = getDatabase();
    const starCountRef = await ref(db, "posts/" + postId + "/comments");

    onValue(starCountRef, (snapshot) => {
      const objectComments = snapshot.val();
      if (!objectComments) {
        return;
      }
      const allCommentsFromServer = Object.values(objectComments);
      setComments(allCommentsFromServer);
    });
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const createComment = async () => {
    const db = getDatabase();
    const commentId = Date.now().toString();
    const now = new Date();
    const commentDate = date.format(now, "YYYY.MM.DD HH:mm:ss");
    set(ref(db, "posts/" + postId + "/comments/" + commentId), {
      textComment: textNewComment,
      commentId,
      login,
      commentDate,
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.postImage} source={{ uri: fotoUri }} />

      <FlatList
        data={comments}
        keyExtractor={(item) => item.commentId.toString()}
        renderItem={({ item, index }) => (
          <View
            style={
              index % 2 === 0 ? styles.postCommentOdd : styles.postCommentEven
            }
          >
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../../assets/images/Ellipse.png")}
            />
            <View
              style={index % 2 === 0 ? styles.commentOdd : styles.commentEven}
            >
              <Text
                style={
                  index % 2 === 0
                    ? styles.commentTextOdd
                    : styles.commentTextEven
                }
              >
                {item.textComment}
              </Text>
              <Text
                style={
                  index % 2 === 0
                    ? styles.commentDateOdd
                    : styles.commentDateEven
                }
              >
                {item.commentDate}
              </Text>
            </View>
          </View>
        )}
      />

      <View style={styles.newComment}>
        <TextInput
          style={styles.newCommentText}
          placeholder="Комментировать..."
          placeholderTextColor="#BDBDBD"
          value={textNewComment}
          onChangeText={(value) => setTextNewComment(value)}
          onFocus={() => {
            setIsShowKeyboard(true);
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
            createComment();
          }}
        >
          <AntDesign name="arrowup" size={24} color="#FFFFFF" />
        </TouchableOpacity>
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
    marginBottom: 5,
    marginTop: 5,
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
