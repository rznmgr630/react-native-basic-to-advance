import { useState } from "react";
import CustomModal from "../modal";
import { StyleSheet, Text, View } from "react-native";
import Button from "../button";
import Input from "../form/input";

type Props = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  saveNote: (value: string) => void;
};

const AddNewNote = ({ showModal, setShowModal, saveNote }: Props) => {
  const [note, setNote] = useState("");

  const handleSaveNote = () => {
    saveNote(note);
    setNote("");
  };

  return (
    <CustomModal
      visible={showModal}
      transparent={true}
      onClose={() => setShowModal(false)}
      animationType="slide"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add a New Note</Text>
          <Input
            placeholder="Enter note..."
            placeholderTextColor={"#aaa"}
            value={note}
            onChange={setNote}
          />

          {/* cancel and save btn */}
          <View style={styles.modalBtns}>
            <Button
              title="Cancel"
              onPress={() => setShowModal(false)}
              type="cancel"
            />
            <Button title="Save" onPress={handleSaveNote} type="save" />
          </View>
        </View>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  modalBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AddNewNote;
