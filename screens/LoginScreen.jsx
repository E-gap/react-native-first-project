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
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authOperations";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const dispatch = useDispatch();

  const toShowPassword = securePassword ? "Показать" : "Скрыть";

  useEffect(() => {
    const hideKeyboard = Keyboard.addListener("keyboardDidHide", () => {
      setIsShowKeyboard(false);
    });

    return () => {
      hideKeyboard.remove();
    };
  }, []);

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };
    setEmail("");
    setPassword("");
    dispatch(login(data));
  };

  const clickOnBackground = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={clickOnBackground}>
      <View style={styles.container}>
        <Image
          style={styles.imageBg}
          source={require("../assets/images/PhotoBG.jpg")}
        />
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : ""}>
          <View
            style={{
              ...styles.form,
              marginBottom: isShowKeyboard ? -220 : 0,
            }}
          >
            <View style={styles.login}>
              <Text style={styles.title}>Войти</Text>
            </View>
            <View>
              <TextInput
                placeholder="Адрес электронной почты"
                placeholderTextColor="#BDBDBD"
                style={{
                  ...styles.input,
                  borderColor: isEmailFocused ? "#FF6C00" : "#E8E8E8",
                }}
                value={email}
                onChangeText={(value) => setEmail(value)}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setIsEmailFocused(true);
                }}
                onBlur={() => {
                  setIsEmailFocused(false);
                }}
              />
              <View style={styles.password}>
                <TextInput
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  style={{
                    ...styles.inputPassword,
                    borderColor: isPasswordFocused ? "#FF6C00" : "#E8E8E8",
                  }}
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  secureTextEntry={securePassword}
                  onFocus={() => {
                    setIsShowKeyboard(true);
                    setIsPasswordFocused(true);
                  }}
                  onBlur={() => {
                    setIsPasswordFocused(false);
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
                <Text style={styles.checkInTitle}>Войти</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logIn}
                onPress={() => navigation.navigate("RegistrationScreen")}
              >
                <Text style={styles.logInTitle}>
                  Нет аккаунта? Зарегистрироваться
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
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
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
  },
  login: {
    paddingLeft: 80,
    paddingRight: 80,
    textAlign: "center",
  },
  title: {
    marginBottom: 33,
    fontSize: 30,
    paddingTop: 32,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
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
    borderColor: "#E8E8E8",
  },
  checkIn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    textAlign: "center",
    paddingBottom: 16,
    paddingTop: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  checkInTitle: {
    fontSize: 16,
    color: "#FFFFFF",
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
});
