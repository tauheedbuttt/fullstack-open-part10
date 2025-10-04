import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
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

const TextInput = ({
  value,
  onChangeText,
  placeholder,
  style,
  touched,
  error,
  ...props
}) => {
  return (
    <>
      <NativeTextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, touched && error && styles.errorBorder, style]}
        {...props}
      />
      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default TextInput;
