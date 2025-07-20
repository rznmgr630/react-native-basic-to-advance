import color from "@/config/color";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import AppText from "../AppText";

type Props = {
  title?: string;
  imageSource: ImageSourcePropType;
  price?: string;
};

const ListingCard = ({ imageSource, title, price }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText>{title}</AppText>
        <AppText style={styles.subTitle}>{price}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: color.secondary,
    fontWeight: "bold",
  },
});

export default ListingCard;
