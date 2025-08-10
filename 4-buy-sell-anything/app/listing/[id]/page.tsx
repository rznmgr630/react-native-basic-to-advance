import AppText from "@/components/AppText";
import color from "@/config/color";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from "react-native";

const ListingDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("@/assets/images/baby.jpg")}
          style={styles.image}
        />

        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Baby Image for Sell</AppText>
          <AppText style={styles.price}>$100</AppText>
        </View>

        <View style={styles.ownerDetailContainer}>
          <Image
            source={require("@/assets/images/owner.jpg")}
            style={styles.ownerImage}
          />{" "}
          <View>
            <AppText style={styles.ownerName}>John Doe</AppText>
            <AppText style={styles.ownerTotalListings}>10 Items</AppText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  ownerDetailContainer: {
    flexDirection: "row",
    padding: 20,
    gap: 10,
    alignItems: "center",
  },
  ownerImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  ownerName: {
    fontSize: 14,
    fontWeight: "500",
  },
  ownerTotalListings: {
    fontSize: 14,
    color: color.medium,
  },
  price: {
    color: color.secondary,
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
});
export default ListingDetail;
