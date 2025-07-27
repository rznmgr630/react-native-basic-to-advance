import { Image, StyleSheet, View } from "react-native";
import * as Yup from "yup";

import { SubmitButton, AppFormField, AppForm } from "@/components/Form";

type LoginFormValues = {
  email: string;
  password: string;
};

const validationSchema: Yup.ObjectSchema<LoginFormValues> = Yup.object({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().min(3).required().label("Password"),
}).required();

const Login = () => {
  const handleSubmit = (values: LoginFormValues) => {
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/logo-red.png")}
        style={styles.logo}
      />

      <AppForm<LoginFormValues>
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
      >
        <>
          <AppFormField
            placeholder="Email"
            icon="email"
            keyboardType="email-address"
            textContentType="emailAddress"
            name="email"
          />
          <AppFormField
            placeholder="Password"
            icon="lock"
            secureTextEntry
            textContentType="password"
            name="password"
          />
          <SubmitButton title="Login" />
        </>
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default Login;
