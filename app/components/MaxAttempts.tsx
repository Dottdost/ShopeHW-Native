import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function MaxAttempts() {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setModalVisible(false);
    router.navigate("../components/HelloCardPage");
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn} onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Send again</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              You reached out maximum amount of attempts. Please, try later.
            </Text>

            <Pressable style={[styles.btn]} onPress={handleClose}>
              <Text style={styles.text}>Okay</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#3D74B6",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginTop: 20,
    width: "89%",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 19,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    width: "89%",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 16,
    color: "#444",
  },
});
