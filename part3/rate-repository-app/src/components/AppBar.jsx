import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  pressable: {
    flex: 1,
    padding: 15,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" style={styles.pressable}>
          <Text
            fontSize={theme.fontSizes.subheading}
            style={styles.text}
            fontWeight="bold"
          >
            Repositories
          </Text>
        </Link>
        <Link to="/sign-in" style={styles.pressable}>
          <Text
            fontSize={theme.fontSizes.subheading}
            style={styles.text}
            fontWeight="bold"
          >
            Sign In
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
