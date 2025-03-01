import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  type: "add" | "cancel" | "save" | "goTo";
  onPress: () => void;
};

const Button = ({ title, type, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles[`${type}Btn`]} onPress={onPress}>
      <Text style={styles[`${type}BtnText`]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  goToBtn: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  goToBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  addBtn: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelBtn: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  cancelBtnText: {
    fontSize: 16,
    color: "#333",
  },
  saveBtn: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  saveBtnText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default Button;
