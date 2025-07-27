import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Login from "./(auth)/login/page";
import color from "@/config/color";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: color.white,
  },
});
