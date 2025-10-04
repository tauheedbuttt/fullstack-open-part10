import { FlatList, StyleSheet } from "react-native";
import useMe from "../hooks/useMe";
import { ItemSeparator } from "./RepositoryList";
import ReviewItem from "./ReviewItem";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "column",
    gap: 10,
    paddingBottom: 50,
  },
});

const MyReviews = () => {
  const { me } = useMe();
  const reviews = me?.reviews?.edges.map((edge) => edge.node) || [];
  return (
    <FlatList
      data={reviews}
      renderItem={({ item, index }) => (
        <>
          {index !== 0 ? null : <ItemSeparator />}
          <ReviewItem key={item.id} review={item} />
        </>
      )}
      ItemSeparatorComponent={ItemSeparator}
      contentContainerStyle={styles.container}
    />
  );
};

export default MyReviews;
