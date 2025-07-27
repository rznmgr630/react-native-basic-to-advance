import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Account from "./account/page";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Account />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
