import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
  addTodo: (value: string) => void;
};

const AddTodoList = ({ addTodo }: Props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (content: string) => {
    setTodo(content);
  };

  const handleSubmit = () => {
    addTodo(todo.trim());
    setTodo(todo.trim());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Todo</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your Todo"
          onChangeText={handleChange}
          value={todo}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.addButton}>
          <Icon name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTodoList;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontFamily: "Cochin",
    fontWeight: "bold",
    fontSize: 22,
    color: "#333",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: 300,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#6a1b9a",
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  addButton: {
    backgroundColor: "#6a1b9a",
    padding: 10,
    borderRadius: 8,
  },
});
