import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Login</Text>
      <Text style={styles.text}>Good to see you back!</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <Pressable
        style={styles.nextBtn}
        onPress={() => router.navigate("../components/TypePasswordPage")}
      >
        <Text>Next</Text>
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
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "89%",
    borderWidth: 1,
    borderRadius: 28,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#E9EFEC",
    marginBottom: 15,
    borderColor: "#3D74B6",
  },
  text: { fontSize: 16, color: "#444", marginBottom: 40 },

  nextBtn: {
    backgroundColor: "#3D74B6",
    borderRadius: 23,
    alignItems: "center",
    padding: 10,
    width: "89%",
  },
});
