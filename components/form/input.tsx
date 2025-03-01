import { StyleSheet, TextInput } from "react-native";

type Props = {
  placeholder: string;
  placeholderTextColor?: string;
  value: string;
  onChange: (value: string) => void;
};

const Input = ({
  value,
  onChange,
  placeholder,
  placeholderTextColor = "#aaa",
}: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      value={value}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
});

export default Input;
