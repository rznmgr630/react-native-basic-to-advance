import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ListingDetail from "./listing/[id]/page";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ListingDetail />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
