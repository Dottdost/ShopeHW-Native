import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function CreateAccount() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Create Account</Text>
      <TextInput
        placeholder="Name"
        placeholderTextColor="#aaa"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        placeholderTextColor="#aaa"
        keyboardType="phone-pad"
        style={styles.input}
      />

      <Pressable
        style={styles.createBtn}
        onPress={() => router.navigate("/components/LoginPage")}
      >
        <Text>Done</Text>
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
    fontSize: 40,
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
  createBtn: {
    backgroundColor: "#3D74B6",
    borderRadius: 23,
    alignItems: "center",
    padding: 10,
    width: "89%",
  },
});
