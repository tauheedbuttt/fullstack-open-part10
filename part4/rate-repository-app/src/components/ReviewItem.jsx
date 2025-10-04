import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "column",
    gap: 5,
    flexDirection: "row",
    gap: 10,
  },
  text: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    paddingTop: 10,
    borderRadius: 20,
    height: 40,
    width: 40,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    color: theme.colors.primary,
    fontSize: 16,
    overflow: "hidden",
  },
  marginBottom: { marginBottom: 5 },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{review.rating}</Text>
      <View>
        <Text fontWeight="bold">{review.user.username}</Text>
        <Text style={styles.marginBottom}>
          {new Date(review.createdAt).toLocaleDateString("fi-FI")}
        </Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
