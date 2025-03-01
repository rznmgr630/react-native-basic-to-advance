import { StyleSheet, Text, View } from "react-native";

const NoteScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Note Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default NoteScreen;
