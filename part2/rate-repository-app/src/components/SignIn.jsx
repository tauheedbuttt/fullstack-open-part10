import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useFormik } from "formik";
import Text from "./Text";
import theme from "../theme";
import { loginValidationSchema } from "../validations/auth";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "column",
    gap: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    borderColor: theme.colors.separator,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 12,
  },
  errorBorder: {
    borderColor: theme.colors.error,
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
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
        style={[
          styles.input,
          touched.username && errors.username && styles.errorBorder,
        ]}
      />

      {touched.username && errors.username && (
        <Text style={styles.errorText}>{errors.username}</Text>
      )}
      <TextInput
        value={values.password}
        onChangeText={handleChange("password")}
        placeholder="Password"
        style={[
          styles.input,
          touched.username && errors.username && styles.errorBorder,
        ]}
        secureTextEntry
      />
      {touched.password && errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
