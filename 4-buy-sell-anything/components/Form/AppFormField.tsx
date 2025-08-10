import {
  Platform,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import color from "@/config/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";

type Props = {
  icon?: any;
  name: string;
} & TextInputProps;

const AppFormField = ({ icon, name, ...otherProps }: Props) => {
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
        <TextInput
          style={styles.textInput}
          onChangeText={handleChange(name)}
          onBlur={() => setFieldTouched(name)}
          autoCapitalize="none"
          autoCorrect={false}
          {...otherProps}
        />
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
  textInput: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? " Roboto" : "Avenier",
    color: color.dark,
    width: "90%",
  },
});

export default AppFormField;
