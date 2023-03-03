import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Button,
  TextInput,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.bgWhite}>
      <Text style={styles.title}>
        Регистрация dfdfdfdfdfdfd d fddffd dfdfdd dfdf{" "}
      </Text>
      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bgWhite: {
    height: "200px",
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  title: {
    marginBottom: 33,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
});
