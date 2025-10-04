import { StyleSheet, View } from "react-native";
import Text from "./Text";
import theme from "../theme";
import Button from "./Button";
import { useNavigate } from "react-router-native";
import { Alert } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "column",
    gap: 5,
    flexDirection: "row",
    gap: 10,
    width: "100%",
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

const ReviewItem = ({ review, isMe, onDelete }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${review.repositoryId}`);
  };

  const handleDelete = () => {
    Alert.prompt(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => onDelete(review.id),
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View>
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
      {isMe && (
        <View style={styles.container}>
          <Button
            style={{ flex: 1 }}
            onPress={handleNavigate}
            text={"View repository"}
          />
          <Button
            style={{ flex: 1 }}
            onPress={handleDelete}
            text={"Delete review"}
            variant="danger"
          />
        </View>
      )}
    </View>
  );
};

export default ReviewItem;
