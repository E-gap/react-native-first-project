import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CreatePostsScreen({ navigation }) {
  const [inputName, setInputName] = useState("");
  const [inputPlace, setInputPlace] = useState("");
  const [cameraRef, setCameraRef] = useState(null);
  const [fotoUri, setFotoUri] = useState("");
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const [isCamera, setIsCamera] = useState(true);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takeFoto = async () => {
    const foto = await cameraRef.takePictureAsync();
    setFotoUri(foto.uri);
  };

  const editFoto = () => {
    setFotoUri("none");
  };

  const backgroundBtnPublish =
    inputName && inputPlace && fotoUri && fotoUri !== "none"
      ? "#FF6C00"
      : "#E5E5E5";
  const colorTextBtnPublish =
    inputName && inputPlace && fotoUri && fotoUri !== "none"
      ? "#FFFFFF"
      : "#BDBDBD";

  const publishPost = () => {
    const newPost = {
      inputName,
      inputPlace,
      fotoUri,
    };
    setInputName("");
    setInputPlace("");
    setIsCamera(false);
    navigation.navigate("PostsScreen", newPost);
  };

  const clearFields = () => {
    setInputName("");
    setInputPlace("");
    setFotoUri("none");
  };

  return (
    <View style={styles.container}>
      {permission.granted && isCamera ? (
        <Camera style={styles.camera} type={type} ref={setCameraRef}>
          {fotoUri && (
            <View style={styles.fotoContainer}>
              <Image source={{ uri: fotoUri }} style={styles.foto} />
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={takeFoto}>
            <FontAwesome5 name="camera" size={18} color="#BDBDBD" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonFlipCamera}
            onPress={toggleCameraType}
          >
            <Text style={styles.textFlipCamera}>FLIP CAMERA</Text>
          </TouchableOpacity>
        </Camera>
      ) : (
        <TouchableOpacity
          style={styles.buttonTurnOnCamera}
          onPress={() => {
            setIsCamera(true);
          }}
        >
          <Text style={styles.textOnCamera}>TURN ON CAMERA</Text>
        </TouchableOpacity>
      )}

      <View style={styles.form}>
        <View style={styles.item}>
          {fotoUri && fotoUri !== "none" ? (
            <TouchableOpacity style={styles.loadImage} onPress={editFoto}>
              <Text style={styles.loadImageText}>Редактировать фото</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.loadImage}>
              <Text style={styles.loadImageText}>Загрузите фото</Text>
            </TouchableOpacity>
          )}
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
            onPress={publishPost}
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
  fotoContainer: {
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    width: "100%",
  },
  foto: {
    height: 240,
  },
  camera: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8E8E8",
    color: "#E8E8E8",
    borderRadius: 8,
  },
  buttonTurnOnCamera: {
    height: 240,
    backgroundColor: "#E8E8E8",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textOnCamera: {
    color: "black",
    fontWeight: "600",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  buttonFlipCamera: {
    position: "absolute",
    bottom: 10,
  },
  textFlipCamera: { color: "white" },
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
