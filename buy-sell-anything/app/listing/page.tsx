import ListingCard from "@/components/Card/ListingCard";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";

export default function Listing() {
  return (
    <SafeAreaView style={styles.container}>
      <ListingCard
        title="Baby Sketch"
        imageSource={require("@/assets/images/baby.jpg")}
        price="$100"
      />
      <ListingCard
        title="Girl Sketch"
        imageSource={require("@/assets/images/girl.jpg")}
        price="$150"
      />
      <ListingCard
        title="Iphone"
        imageSource={require("@/assets/images/iphone.jpg")}
        price="$999"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
