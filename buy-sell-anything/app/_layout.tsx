import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home/page" />
      <Stack.Screen name="listing/page" />
    </Stack>
  );
}
