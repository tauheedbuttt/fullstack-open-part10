import { useFormik } from "formik";
import { StyleSheet, View } from "react-native";
import Button from "./Button";
import TextInput from "./TextInput";
import { signUpValidationSchema } from "../validations/auth";
import useSignUp from "../hooks/useSignUp";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "column",
    gap: 10,
  },
});

const SignUpForm = ({ onSubmit }) => {
  const { values, handleChange, handleSubmit, touched, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: ({ passwordConfirmation, ...values }) => onSubmit(values),
  });

  const fields = [
    {
      name: "username",
      placeholder: "Username",
      keyboardType: "default",
    },
    {
      name: "password",
      placeholder: "Password",
      keyboardType: "default",
      secureTextEntry: true,
    },
    {
      name: "passwordConfirmation",
      placeholder: "Password confirmation",
      keyboardType: "default",
      secureTextEntry: true,
    },
  ];

  return (
    <View style={styles.container}>
      {fields.map((field) => (
        <TextInput
          key={field.name}
          value={values[field.name]}
          onChangeText={handleChange(field.name)}
          placeholder={field.placeholder}
          keyboardType={field.keyboardType}
          multiline={field.multiline}
          numberOfLines={field.numberOfLines}
          touched={touched[field.name]}
          error={errors[field.name]}
        />
      ))}

      <Button text="Sign Up" onPress={handleSubmit} testID="sign-up-button" />
    </View>
  );
};

const SignUp = () => {
  const { signUp } = useSignUp();
  const onSubmit = (values) => {
    console.log("Signing up with values:", values);
    signUp({ variables: { user: values } });
  };

  return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
