import color from "@/config/color";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.screen}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="/camera/ImagePick" /> */}
        {/* <Stack.Screen name="home/page" />
        <Stack.Screen name="listing/page" /> */}
        {/* <Stack.Screen name="account/page" /> */}
        {/* <Stack.Screen name="login/page" /> */}
        <Stack.Screen name="listing/add/page" />
      </Stack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: color.light,
  },
});
