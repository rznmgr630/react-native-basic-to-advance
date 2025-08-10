import color from "@/config/color";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ImagePick from "./camera/page";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ImagePick />
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
