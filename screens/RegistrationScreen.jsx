import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import { SlClose } from "react-icons/sl";

export default function RegistrationScreen() {
  return (
    <View style={styles.bgWhite}>
      <View style={styles.fotoUser}>
        <Image />
        <TouchableOpacity style={styles.btnClose}>
          <SlClose style={styles.iconClose} />
        </TouchableOpacity>
      </View>
      <View style={styles.registration}>
        <Text style={styles.title}>Регистрация</Text>
      </View>
      <View>
        <TextInput placeholder="Логин" style={styles.input} />
        <TextInput placeholder="Адрес электронной почты" style={styles.input} />
        <View style={styles.password}>
          <TextInput placeholder="Пароль" style={styles.inputPassword} />
          <TouchableOpacity style={styles.btnInInput}>
            <Text style={styles.showPassword}>Показать</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.checkIn}>
          <Text style={styles.checkInTitle}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logIn}>
          <Text style={styles.logInTitle}>Уже есть аккаунт? Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgWhite: {
    height: "549px",
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
    transform: "translate(-50%, -50%)",
    left: "50%",
    zIndex: 5,
  },
  btnClose: {
    position: "absolute",
    right: "0px",
    transform: "translate(50%)",
    bottom: 10,
  },
  iconClose: {
    width: 25,
    height: 25,
    fill: "#E8E8E8",
  },
  registration: {
    paddingLeft: 80,
    paddingRight: 80,
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
});