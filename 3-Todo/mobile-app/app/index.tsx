import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Using Material Icons
import AddTodoList from "@/components/AddTodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "Play a game" },
    { id: 2, content: "Write a story" },
    { id: 3, content: "Watch a movie" },
  ]);

  const addTodo = (todo: string) => {
    console.log({ todo });
    if (todo.length > 3) {
      const id = Math.random();
      setTodos([...todos, { id, content: todo }]);
    } else {
      Alert.alert("Oops!", "Todo must be more than 3 characters", [
        { text: "Got it", onPress: () => console.log("Alert closed") },
      ]);
    }
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const showAlertModal = (id: number) => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this todo?", [
      { text: "Cancel", onPress: () => console.log("Cancel pressed") },
      { text: "Delete", onPress: () => deleteTodo(id) },
    ]);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("Keyboard dismissed");
      }}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>My Todo App</Text>
          <Icon name="check-circle" size={30} color="#fff" />
        </View>

        {/* Add Todo Section */}
        <View style={styles.addSection}>
          <AddTodoList addTodo={addTodo} />
        </View>

        {/* Todo List */}
        <View style={styles.mainContent}>
          <Text style={styles.sectionTitle}>List of Todos</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {todos.length === 0 ? (
              <Text style={styles.emptyText}>No todos yet—add one!</Text>
            ) : (
              todos.map((todo, index) => (
                <View key={todo.id} style={styles.todoCard}>
                  <View style={styles.todoContent}>
                    <Text style={styles.todoNumber}>{index + 1}.</Text>
                    <Text style={styles.todoText}>{todo.content}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => showAlertModal(todo.id)}
                    style={styles.deleteButton}
                  >
                    <Icon name="delete" size={24} color="#fff" />
                  </TouchableOpacity>
                </View>
              ))
            )}
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5", // Light gray background
    padding: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#6a1b9a", // Darker purple
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Cochin",
  },
  addSection: {
    marginVertical: 20,
  },
  mainContent: {
    flex: 1,
  },
  sectionTitle: {
    fontFamily: "Cochin",
    fontWeight: "bold",
    fontSize: 22,
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  todoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  todoContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  todoNumber: {
    fontSize: 16,
    color: "#6a1b9a",
    fontWeight: "bold",
    marginRight: 8,
  },
  todoText: {
    fontSize: 16,
    color: "#333",
    flexWrap: "wrap",
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "#e91e63",
    padding: 10,
    borderRadius: 8,
  },
  emptyText: {
    textAlign: "center",
    color: "#777",
    fontSize: 16,
    marginTop: 20,
  },
});
