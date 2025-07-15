import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Start() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Shoppe</Text>
      <Text style={styles.text}>
        Beautiful eCommerce UI Kit for your online store
      </Text>

      <Pressable
        style={styles.startBtn}
        onPress={() => router.navigate("/components/CreateAccountPage")}
      >
        <Text style={styles.startText}>Lets get started</Text>
      </Pressable>

      <Pressable
        style={styles.linkNav}
        onPress={() => router.navigate("/components/LoginPage")}
      >
        <Text style={styles.linkText}>I already have an account →</Text>
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
    textAlign: "center",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
  startBtn: {
    backgroundColor: "#3D74B6",
    borderRadius: 9,
  },
  startText: {
    color: "#fff",
    fontSize: 16,
    padding: 10,
    textAlign: "center",
    width: 200,
  },
  linkNav: {
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    width: 200,
  },
  linkText: {
    color: "#4A4947",
    textAlign: "center",
    fontSize: 20,
  },
});
