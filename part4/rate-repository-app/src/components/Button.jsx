import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
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
  danger: {
    backgroundColor: theme.colors.error,
  },
});

const Button = ({ onPress, text, testID, style, variant }) => {
  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[styles.button, style, variant === "danger" && styles.danger]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
