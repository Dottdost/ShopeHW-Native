import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function NewPassword() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Set Up New Password</Text>

      <TextInput
        placeholder="Password"
        placeholderTextColor="#aaa"
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        style={styles.input}
      />

      <Pressable
        style={styles.newBtn}
        onPress={() => router.navigate("/components/MaxAttempts")}
      >
        <Text style={styles.newText}>Save</Text>
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
    marginBottom: 12,
    textAlign: "center",
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
  newBtn: {
    backgroundColor: "#3D74B6",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 20,
    width: "89%",
    alignItems: "center",
  },
  newText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 19,
  },
});
