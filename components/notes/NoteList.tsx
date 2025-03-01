import { FlatList } from "react-native";
import NoteItem from "./NoteItem";

type Props = {
  notes: { id: number; title: string }[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <NoteItem item={item} />}
    />
  );
};

export default NoteList;
