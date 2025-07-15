import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TypePasswordPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.helloText}>Hello, Romina!</Text>
      <Text style={styles.text}>Type your password</Text>
      <View style={styles.password}>
        {[0, 1, 2, 3].map((_, i) => (
          <View key={i} style={styles.passwordNum} />
        ))}
      </View>

      <View>
        <Pressable
          onPress={() => router.navigate("../components/WrongPasswordPage")}
        >
          <Text style={styles.notyou}>Not you?</Text>
        </Pressable>
      </View>
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
  password: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    gap: 14,
    marginBottom: 41,
  },
  passwordNum: {
    width: 40,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#ddd",
  },
  notyou: {
    fontSize: 18,
    marginBottom: 35,
    color: "red",
  },
});
