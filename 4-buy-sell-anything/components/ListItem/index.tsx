import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import React, { ReactNode } from "react";

import AppText from "../AppText";
import color from "@/config/color";

type Prop = {
  title: string;
  subTitle?: string;
  IconComponent?: ReactNode;
  style?: object;
  image?: ImageSourcePropType;
};

const ListItem = ({ IconComponent, subTitle, title, style, image }: Prop) => {
  return (
    <View style={[styles.container, style]}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View>
        <AppText style={styles.title}>{title}</AppText>
        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 14,
    color: color.medium,
  },
});

export default ListItem;
