import { StyleSheet, Text, View } from "react-native";

export default function HelloCardPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Hello!</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        consectetur turpis. Morbi eu eleifend lacus.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  helloText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#444",
  },
});
