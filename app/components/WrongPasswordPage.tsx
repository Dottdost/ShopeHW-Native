import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function WrongPasswordPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.helloText}>Hello, Romina!</Text>
      <Text style={styles.text}>Type your password</Text>

      <TextInput
        style={styles.input}
        placeholder="● ● ● ● ● ●"
        placeholderTextColor="#D11A1A"
        secureTextEntry
      />

      <Pressable onPress={() => router.navigate("../components/ResetPassword")}>
        <Text style={styles.forgot}>Forgot your password?</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  helloText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 35,
  },
  input: {
    width: "89%",
    fontSize: 30,
    textAlign: "center",
    color: "red",
    borderColor: "red",
  },
  forgot: {
    fontSize: 18,
    marginBottom: 35,
  },
});
