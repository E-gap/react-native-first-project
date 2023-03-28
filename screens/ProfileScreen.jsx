import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { AntDesign } from "react-native-vector-icons";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  onValue,
  set,
  query,
  orderByChild,
  equalTo,
} from "firebase/database";

import {
  userOnProfileScreen,
  userOffProfileScreen,
} from "../redux/auth/authReduser";

export default function ProfileScreen({ navigation }) {
  const [postsUser, setPostsUser] = useState([]);
  const { login, userId, userOnProfile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getAllPostsUser = async () => {
    const db = getDatabase();
    const starCountRef = query(
      ref(db, "posts"),
      orderByChild("userId"),
      equalTo(userId)
    );

    onValue(starCountRef, (snapshot) => {
      const objectPosts = snapshot.val();
      if (!objectPosts) {
        return;
      }
      const allPostsFromServer = Object.values(objectPosts);
      setPostsUser(allPostsFromServer);
    });
  };

  useEffect(() => {
    getAllPostsUser();
  }, []);

  console.log(userOnProfile);

  const createLike = async (postIdd) => {
    const db = getDatabase();
    const likeId = Date.now().toString();
    set(ref(db, "posts/" + postIdd + "/likes/" + likeId), {
      likeId,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBg}
        source={require("../assets/images/PhotoBG.jpg")}
      />

      <View style={styles.form}>
        <View style={styles.fotoUser}>
          <Image
            style={{
              width: 120,
              height: 120,
              resizeMode: "contain",
              borderRadius: 16,
            }}
            source={require("../assets/images/userFoto.jpg")}
          />
          <TouchableOpacity style={styles.btnClose}>
            <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.logOut}>
          <Feather
            name="log-out"
            size={24}
            color="#BDBDBD"
            onPress={() => navigation.navigate("LoginScreen")}
          />
        </TouchableOpacity>
        <View style={styles.userName}>
          <Text style={styles.userNameTitle}>{login}</Text>
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={postsUser}
            keyExtractor={(item) => item.postId.toString()}
            renderItem={({ item }) => (
              <View style={styles.postCard}>
                <Image
                  style={styles.postImage}
                  source={{ uri: item.fotoUri }}
                />
                <Text style={styles.postName}>{item.postName}</Text>
                <View style={styles.postInfo}>
                  <View style={styles.commentsLikes}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("CommentsScreen", {
                          postId: item.postId,
                          fotoUri: item.fotoUri,
                        })
                      }
                    >
                      <View style={styles.postComments}>
                        <Image
                          style={{
                            width: 18,
                            height: 18,
                          }}
                          source={require("../assets/images/messageOrange.png")}
                        />
                        <Text style={styles.quantityComments}>
                          {item.comments
                            ? Object.values(item.comments).length
                            : "0"}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => createLike(item.postId)}>
                      <View style={styles.postLikes}>
                        <Feather name="thumbs-up" size={18} color="#FF6C00" />
                        <Text style={styles.quantityLikes}>
                          {item.likes ? Object.values(item.likes).length : "0"}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.postPlace}>
                    <Feather name="map-pin" size={18} color="#BDBDBD" />
                    <Text style={styles.placeName}>{item.postPlace}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "flex-end",
  },
  imageBg: {
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  form: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    paddingBottom: 78,
    position: "absolute",
    top: 147,
    width: "100%",
    height: "100%",
  },
  fotoUser: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    transform: [{ translateX: -50 }, { translateY: -60 }],
    left: "50%",
    zIndex: 5,
  },
  btnClose: {
    position: "absolute",
    right: 0,
    transform: [{ translateX: 12 }],
    bottom: 10,
  },
  userName: {
    paddingLeft: 80,
    paddingRight: 80,
    textAlign: "center",
  },
  userNameTitle: {
    marginBottom: 33,
    fontSize: 30,
    textAlign: "center",
  },
  postCard: {
    marginBottom: 35,
  },
  postImage: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  postName: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#212121",
    marginBottom: 11,
  },
  postInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentsLikes: {
    display: "flex",
    flexDirection: "row",
  },
  postComments: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  quantityComments: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
    marginLeft: 9,
    marginRight: 27,
  },
  postLikes: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  quantityLikes: {
    fontWeight: "400",
    fontFamily: "Roboto",
    fontSize: 16,
    marginLeft: 9,
  },
  placeName: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: "#212121",
    marginLeft: 8,
    textDecorationLine: "underline",
  },
  postPlace: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  logOut: {
    position: "absolute",
    top: 24,
    right: 24,
  },
  flatList: {
    paddingBottom: 150,
  },
});
