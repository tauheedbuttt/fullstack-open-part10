import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";
import useMe from "../hooks/useMe";
import useAuthStorage from "../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

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
  const { me } = useMe();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

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
        {me ? (
          <>
            <Link to="/review/create" style={styles.pressable}>
              <Text
                fontSize={theme.fontSizes.subheading}
                style={styles.text}
                fontWeight="bold"
              >
                Create Review
              </Text>
            </Link>
            <Pressable onPress={signOut} style={styles.pressable}>
              <Text
                fontSize={theme.fontSizes.subheading}
                style={styles.text}
                fontWeight="bold"
              >
                Sign Out ({me.username})
              </Text>
            </Pressable>
          </>
        ) : (
          <>
            <Link to="/sign-in" style={styles.pressable}>
              <Text
                fontSize={theme.fontSizes.subheading}
                style={styles.text}
                fontWeight="bold"
              >
                Sign In
              </Text>
            </Link>
            <Link to="/sign-up" style={styles.pressable}>
              <Text
                fontSize={theme.fontSizes.subheading}
                style={styles.text}
                fontWeight="bold"
              >
                Sign Up
              </Text>
            </Link>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
