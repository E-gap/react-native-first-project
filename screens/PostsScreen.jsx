import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

export default function PostsScreen({ navigation, route }) {
  //const { userName = "брать с бекенда", userEmail } = route.params;
  const data = route.params;
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.userFoto}
          source={require("../assets/images/userFoto.jpg")}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>UserName</Text>
          <Text style={styles.userEmail}>UserEmail</Text>
        </View>
      </View>

      <View style={styles.postCard}>
        <Image
          style={styles.postImage}
          source={require("../assets/images/userFoto.jpg")}
        />
        <Text style={styles.postName}>Название поста</Text>
        <View style={styles.postInfo}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CommentsScreen")}
          >
            <View style={styles.postComments}>
              <Feather name="message-circle" size={18} color="#BDBDBD" />
              <Text style={styles.quantityComments}>0</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.postPlace}>
            <Feather name="map-pin" size={18} color="#BDBDBD" />
            <Text style={styles.placeName}>Name place</Text>
          </View>
        </View>
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
