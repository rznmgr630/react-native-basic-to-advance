import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import color from "@/config/color";

type Props = {
  value: string;
  name: string;
  icon?: any;
  options: Record<string, any>[];
};

const Select = ({ value, name, icon, options }: Props) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <>
      <View style={styles.container}>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={20}
            color={color.medium}
            style={styles.icon}
          />
        )}
        <Picker
          selectedValue={value}
          onValueChange={handleChange}
          style={[styles.picker, { width: icon ? "95%" : "105%" }]}
          onBlur={() => setFieldTouched(name)}
          placeholder="Select Option"
        >
          <Picker.Item
            style={styles.placeholder}
            label={"Select Option"}
            value={""}
          />
          {options.map((option, index) => (
            <Picker.Item
              key={index}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
      <ErrorMessage
        error={errors[name as keyof typeof errors]}
        touched={touched[name as keyof typeof touched]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  picker: {
    width: "95%",
    marginLeft: -12,
    color: color.dark,
  },
  placeholder: {
    color: color.medium,
    flex: 1,
    fontSize: 18,
  },
});

export default Select;
