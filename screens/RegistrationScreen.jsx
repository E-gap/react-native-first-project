import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SlClose } from "react-icons/sl";
import { useState } from "react";
import { AntDesign } from "react-native-vector-icons";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const toShowPassword = securePassword ? "Показать" : "Скрыть";

  const handleSubmit = () => {
    const data = {
      login,
      email,
      password,
    };
    console.log(data);
    setIsShowKeyboard(false);
    setLogin("");
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
      }}
    >
      <View
        style={{ ...styles.bgWhite, marginBottom: isShowKeyboard ? -150 : 0 }}
      >
        <View style={styles.fotoUser}>
          <Image />
          <TouchableOpacity style={styles.btnClose}>
            <AntDesign name="closecircleo" size={25} color="#E8E8E8" />
          </TouchableOpacity>
        </View>
        <View style={styles.registration}>
          <Text style={styles.title}>Регистрация</Text>
        </View>
        <View>
          <TextInput
            placeholder="Логин"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={login}
            onChangeText={(value) => setLogin(value)}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
          />
          <TextInput
            placeholder="Адрес электронной почты"
            placeholderTextColor="#BDBDBD"
            style={styles.input}
            value={email}
            onChangeText={(value) => setEmail(value)}
            onFocus={() => {
              setIsShowKeyboard(true);
            }}
          />
          <View style={styles.password}>
            <TextInput
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              style={styles.inputPassword}
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={securePassword}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
            />
            <TouchableOpacity
              style={styles.btnInInput}
              onPress={() => {
                setSecurePassword(!securePassword);
              }}
            >
              <Text style={styles.showPassword}>{toShowPassword}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.checkIn}
            onPress={handleSubmit}
          >
            <Text style={styles.checkInTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logIn}>
            <Text style={styles.logInTitle}>Уже есть аккаунт? Войти</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.line}>
          <Text></Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bgWhite: {
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
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

  registration: {
    paddingLeft: 80,
    paddingRight: 80,
    textAlign: "center",
  },
  title: {
    marginBottom: 33,
    fontSize: 30,
    paddingTop: 92,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    borderWidth: 1,
  },
  password: {
    marginBottom: 43,
  },
  inputPassword: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    borderWidth: 1,
  },
  checkIn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    textAlign: "center",
    paddingBottom: 16,
    paddingTop: 16,
    marginBottom: 16,
  },
  checkInTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  logIn: {
    textAlign: "center",
  },

  logInTitle: {
    fontSize: 16,
    color: "#1B4371",
    textAlign: "center",
  },
  btnInInput: {
    position: "absolute",
    top: "50%",
    right: 16,
    transform: [{ translateY: -10 }],
  },
  showPassword: {
    color: "#1B4371",
  },
  line: {
    width: 135,
    height: 5,
    backgroundColor: "#212121",
    position: "absolute",
    bottom: 8,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
});
