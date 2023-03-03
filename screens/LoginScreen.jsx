import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };
    console.log(data);
    setEmail("");
    setPassword("");
  };
  return (
    <View style={styles.bgWhite}>
      <View style={styles.login}>
        <Text style={styles.title}>Войти</Text>
      </View>
      <View>
        <TextInput
          placeholder="Адрес электронной почты"
          style={styles.input}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <View style={styles.password}>
          <TextInput
            placeholder="Пароль"
            style={styles.inputPassword}
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={securePassword}
          />
          <TouchableOpacity
            style={styles.btnInInput}
            onPress={() => {
              setSecurePassword(!securePassword);
            }}
          >
            <Text style={styles.showPassword}>Показать</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.checkIn}
          onPress={handleSubmit}
        >
          <Text style={styles.checkInTitle}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logIn}>
          <Text style={styles.logInTitle}>
            Нет аккаунта? Зарегистрироваться
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.line}>
        <Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bgWhite: {
    height: 489,
    width: 375,
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
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    placeholderTextColor: "#BDBDBD",
    border: "1px solid #E8E8E8",
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
    placeholderTextColor: "#BDBDBD",
    border: "1px solid #E8E8E8",
  },
  checkIn: {
    backgroundColor: "#FF6C00",
    borderRadius: "100px",
    textAlign: "center",
    paddingBottom: 16,
    paddingTop: 16,
    marginBottom: 16,
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
  },
  btnInInput: {
    position: "absolute",
    top: "50%",
    right: "-5px",
    transform: "translate(-50%, -50%)",
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
    transform: "translate(-50%)",
  },
});
