import Button from "@/components/button";
import AddNewNote from "@/components/notes/AddNewNote";
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

  const saveNote = (note: string) => {
    const trimNote = note.trim();
    if (trimNote) {
      const newNotes = [...notes, { id: Math.random(), title: trimNote }];
      setNotes(newNotes);
      setShowModal(false);
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

      {/* Add new note modal */}
      <AddNewNote
        setShowModal={setShowModal}
        showModal={showModal}
        saveNote={saveNote}
      />
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
