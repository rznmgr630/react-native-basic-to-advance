import { StyleSheet, Text, View } from "react-native";

type Props = {
  item: {
    id: number;
    title: string;
  };
};

const NoteItem = ({ item }: Props) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
});

export default NoteItem;
