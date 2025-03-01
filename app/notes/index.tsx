import NoteItem from "@/components/notes/NoteItem";
import NoteList from "@/components/notes/NoteList";
import { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

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

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.addBtnText}>+ Add Note</Text>
      </TouchableOpacity>

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
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveBtn} onPress={saveNote}>
                <Text style={styles.saveBtnText}>Save</Text>
              </TouchableOpacity>
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
  addBtn: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
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
  cancelBtn: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelBtnText: {
    fontSize: 16,
    color: "#333",
  },
  saveBtn: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  saveBtnText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default NoteScreen;
