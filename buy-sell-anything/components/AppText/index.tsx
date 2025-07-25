import { Platform, StyleSheet, Text } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: object;
};

const AppText = ({ children, style }: Props) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
});

export default AppText;
