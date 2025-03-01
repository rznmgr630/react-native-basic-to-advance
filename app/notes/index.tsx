import Button from "@/components/button";
import NoteList from "@/components/notes/NoteList";
import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Note 1" },
    { id: 2, title: "Note 2" },
    { id: 3, title: "Note 3" },
  ]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [newNote, setNewNote] = useState<string>("");

  const saveNote = () => {
    const trimNote = newNote.trim();
    if (trimNote) {
      const newNotes = [...notes, { id: Math.random(), title: trimNote }];
      setNotes(newNotes);
      setShowModal(false);
      setNewNote("");
    }
  };

  return (
    <View style={styles.container}>
      <NoteList notes={notes} />

      {/* Add btn */}
      <Button
        title="+ Add Note"
        onPress={() => setShowModal(true)}
        type="add"
      />

      <Modal
        visible={showModal}
        transparent={true}
        onRequestClose={() => setShowModal(false)}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a New Note</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter note..."
              placeholderTextColor={"#aaa"}
              value={newNote}
              onChangeText={setNewNote}
            />

            {/* cancel and save btn */}
            <View style={styles.modalBtns}>
              <Button
                title="Cancel"
                onPress={() => setShowModal(false)}
                type="cancel"
              />
              <Button title="Save" onPress={saveNote} type="save" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },

  modalBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default NoteScreen;
