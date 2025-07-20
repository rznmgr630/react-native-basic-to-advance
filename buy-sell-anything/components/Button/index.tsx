import color, { ColorType } from "@/config/color";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
  btnColor?: keyof ColorType;
};

const AppButton = ({ title, btnColor = "primary", onPress }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: color[btnColor] as keyof ColorType },
      ]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.primary,
    borderRadius: 25,
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
  },

  buttonText: {
    color: color.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
