import { View } from "react-native";
import AppButton from "../Button";
import { useFormikContext } from "formik";

type Props = {
  title: string;
};

const SubmitButton = ({ title }: Props) => {
  const { handleSubmit } = useFormikContext();
  return (
    <View>
      <AppButton title={title} onPress={handleSubmit}></AppButton>
    </View>
  );
};

export default SubmitButton;
