import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ResetPassword() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.name}>Password Recovery</Text>
      <Text style={styles.text}>
        How would you like to restore your password?
      </Text>

      <View style={styles.options}>
        <Pressable style={styles.smsBtn}>
          <Text>SMS</Text>
        </Pressable>
        <Pressable style={styles.mailBtn}>
          <Text>Email</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.nextBtn}
        onPress={() => router.navigate("../components/NewPasswordPage")}
      >
        <Text style={styles.nextText}>Next</Text>
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
  text: {
    fontSize: 18,
    marginBottom: 35,
  },
  options: {
    flexDirection: "row",
    gap: 7,
  },
  smsBtn: {
    backgroundColor: "#3D74B6",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  mailBtn: {
    backgroundColor: "#3D74B6",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  nextBtn: {
    backgroundColor: "#3D74B6",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 20,
    width: "89%",
    alignItems: "center",
  },
  nextText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 19,
  },
});
