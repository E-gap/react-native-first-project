import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";

export default function DefaultPostsScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!route.params) {
      return;
    }
    setPosts((prevState) => [...prevState, route.params]);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.userFoto}
          source={require("../../assets/images/userFoto.jpg")}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>UserName</Text>
          <Text style={styles.userEmail}>UserEmail</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Image style={styles.postImage} source={{ uri: item.fotoUri }} />
            <Text style={styles.postName}>{item.inputName}</Text>
            <View style={styles.postInfo}>
              <TouchableOpacity
                onPress={() => navigation.navigate("CommentsScreen")}
              >
                <View style={styles.postComments}>
                  <Feather name="message-circle" size={18} color="#BDBDBD" />
                  <Text style={styles.quantityComments}>0</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("MapScreen")}
              >
                <View style={styles.postPlace}>
                  <Feather name="map-pin" size={18} color="#BDBDBD" />
                  <Text style={styles.placeName}>{item.inputPlace}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingTop: 32,
    paddingRight: 16,
    paddingLeft: 16,
  },
  user: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  userName: {
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  userEmail: {
    fontSize: 11,
    fontFamily: "Roboto",
    fontWeight: "400",
  },
  userInfo: {
    marginLeft: 8,
  },
  postCard: {
    marginBottom: 34,
    justifyContent: "center",
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
  postComments: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  quantityComments: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: "#BDBDBD",
    marginLeft: 9,
  },
  placeName: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: "#212121",
    marginLeft: 8,
  },
  postPlace: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});