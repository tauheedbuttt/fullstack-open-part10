import { Pressable, StyleSheet, TextInput, View } from "react-native";
import { useFormik } from "formik";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
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
    marginBottom: 10,
  },
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={values.username}
        onChangeText={handleChange("username")}
        placeholder="Username"
        style={styles.input}
      />
      <TextInput
        value={values.password}
        onChangeText={handleChange("password")}
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
