import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";

import { Feather } from "@expo/vector-icons";

export default function CreatePostsScreen({ navigation }) {
  const [inputName, setInputName] = useState("");
  const [inputPlace, setInputPlace] = useState("");

  const backgroundBtnPublish = inputName && inputPlace ? "#FF6C00" : "#E5E5E5";
  const colorTextBtnPublish = inputName && inputPlace ? "#FFFFFF" : "#BDBDBD";

  const handleSubmit = () => {
    const data = {
      inputName,
      inputPlace,
    };
    console.log(data);
    setInputName("");
    setInputPlace("");
  };

  const clearFields = () => {
    setInputName("");
    setInputPlace("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.item}>
          <Image
            style={styles.postImage}
            source={require("../assets/images/userFoto.jpg")}
          />
          <TouchableOpacity
            style={styles.loadImage}
            onPress={() => console.log("load foto")}
          >
            <Text style={styles.loadImageText}>Загрузите фото</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Название"
            placeholderTextColor="#BDBDBD"
            style={styles.inputName}
            value={inputName}
            onChangeText={(value) => setInputName(value)}
          />
          <View>
            <TextInput
              placeholder="Местность"
              placeholderTextColor="#BDBDBD"
              style={styles.inputPlace}
              value={inputPlace}
              onChangeText={(value) => setInputPlace(value)}
            />
            <View style={styles.iconPlace}>
              <Feather name="map-pin" size={18} color="#BDBDBD" />
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.btnPublish,
              backgroundColor: backgroundBtnPublish,
            }}
            onPress={handleSubmit}
          >
            <Text
              style={{ ...styles.checkInTitle, color: colorTextBtnPublish }}
            >
              Опубликовать
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.center}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnDelete}
          onPress={clearFields}
        >
          <Feather name="trash-2" size={16} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  postImage: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  loadImageText: {
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Roboto",
    color: "#BDBDBD",
    marginBottom: 48,
  },
  inputName: {
    fontSize: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderBottomColor: "#E8E8E8",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: "#212121",
  },
  inputPlace: {
    fontSize: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderBottomColor: "#E8E8E8",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    paddingLeft: 30,
  },
  iconPlace: {
    position: "absolute",
    top: 5,
  },
  btnPublish: {
    borderRadius: 100,
    paddingTop: 16,
    paddingBottom: 16,
  },
  checkInTitle: {
    textAlign: "center",
    fontSize: 16,
  },
  btnDelete: {
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 20,
    width: 70,
  },
  center: {
    display: "flex",
    alignItems: "center",
    position: "absolute",
    top: 660,
    left: "50%",
    transform: [{ translateX: -20 }],
  },
});
