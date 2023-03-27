import { Camera, CameraType } from "expo-camera";
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { useSelector } from "react-redux";

import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { storage, database } from "../firebase/config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getDatabase, set, ref as ref2 } from "firebase/database";

export default function CreatePostsScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [postName, setPostName] = useState("");
  const [postPlace, setPostPlace] = useState("");
  const [cameraRef, setCameraRef] = useState(null);
  const [fotoUri, setFotoUri] = useState("");
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [isCamera, setIsCamera] = useState(true);

  const { userId, login } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

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
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setFotoUri(foto.uri);
  };

  const editFoto = () => {
    setFotoUri("none");
  };

  const backgroundBtnPublish =
    postName && postPlace && fotoUri && fotoUri !== "none"
      ? "#FF6C00"
      : "#E5E5E5";
  const colorTextBtnPublish =
    postName && postPlace && fotoUri && fotoUri !== "none"
      ? "#FFFFFF"
      : "#BDBDBD";

  const publishPost = () => {
    const newPost = {
      postName,
      postPlace,
      fotoUri,
      location: location.coords,
    };
    setPostName("");
    setPostPlace("");
    setIsCamera(false);
    uploadPostToServer();
    navigation.navigate("DefaultPostsScreen", newPost);
  };

  const clearFields = () => {
    setPostName("");
    setPostPlace("");
    setFotoUri("none");
  };

  const uploadFotoToServer = async () => {
    if (!fotoUri) return;
    try {
      const response = await fetch(fotoUri);
      const file = await response.blob();
      const unicPostId = Date.now().toString();
      const reference = ref(storage, `images/${unicPostId}`);
      const result = await uploadBytesResumable(reference, file);
      const urlFoto = await getDownloadURL(result.ref);
      return urlFoto;
    } catch (err) {
      console.log("Try again \n", err.message);
    }
  };

  const uploadPostToServer = async () => {
    const photo = await uploadFotoToServer();
    const db = getDatabase();
    const postId = Date.now().toString();

    set(ref2(db, "posts/" + postId), {
      userId,
      login,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      fotoUri: photo,
      postName,
      postPlace,
    });
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
        <View style={styles.buttonTurnOnCamera}>
          <Text style={styles.textOnCamera}>Loading Camera</Text>
        </View>
      )}

      <View style={styles.form}>
        <View style={styles.item}>
          {fotoUri && fotoUri !== "none" ? (
            <TouchableOpacity style={styles.loadImage} onPress={editFoto}>
              <Text style={styles.loadImageText}>Редактировать фото</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.loadImage}
              onPress={() => {
                setIsCamera(false);
                setTimeout(() => {
                  setIsCamera(true);
                }, 0);
              }}
            >
              <Text style={styles.loadImageText}>
                Загрузите фото/включить камеру
              </Text>
            </TouchableOpacity>
          )}
          <TextInput
            placeholder="Название"
            placeholderTextColor="#BDBDBD"
            style={styles.postName}
            value={postName}
            onChangeText={(value) => setPostName(value)}
          />
          <View>
            <TextInput
              placeholder="Местность"
              placeholderTextColor="#BDBDBD"
              style={styles.postPlace}
              value={postPlace}
              onChangeText={(value) => setPostPlace(value)}
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
  postName: {
    fontSize: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderBottomColor: "#E8E8E8",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: "#212121",
  },
  postPlace: {
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
