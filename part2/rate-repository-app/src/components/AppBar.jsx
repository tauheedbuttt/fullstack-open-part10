import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import { Pressable } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    padding: 15,
    paddingTop: 50,
  },
  pressable: {
    width: "100%",
  },
  text: {
    color: "white",
  },
  // ...
});

const AppBar = () => {
  const onPress = () => {
    console.log("Pressed!");
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.pressable}>
        <Text
          fontSize={theme.fontSizes.subheading}
          style={styles.text}
          fontWeight="bold"
        >
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
