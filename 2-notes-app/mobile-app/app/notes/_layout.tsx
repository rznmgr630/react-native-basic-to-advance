import { Stack } from "expo-router";

const NoteLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
    />
  );
};

export default NoteLayout;
