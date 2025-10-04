import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import useSignIn from "../hooks/useSignIn";
import { loginValidationSchema } from "../validations/auth";
import Button from "./Button";
import TextInput from "./TextInput";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "column",
    gap: 10,
  },
});

export const SignInForm = ({ onSubmit }) => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={values.username}
        onChangeText={handleChange("username")}
        placeholder="Username"
        touched={touched.username}
        error={errors.username}
      />

      <TextInput
        value={values.password}
        onChangeText={handleChange("password")}
        placeholder="Password"
        secureTextEntry
        touched={touched.password}
        error={errors.password}
      />

      <Button text="Sign In" onPress={handleSubmit} testID="sign-in-button" />
    </View>
  );
};

const SignIn = () => {
  const { signIn } = useSignIn();
  const onSubmit = (values) => {
    signIn({ variables: { credentials: values } });
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;
